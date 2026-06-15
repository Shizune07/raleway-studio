function textToB64(text) {
  return Buffer.from(String(text || ''), 'utf8').toString('base64');
}

function flat(nodes, pre = '') {
  let out = [];
  for (const n of nodes || []) {
    const p = pre ? `${pre}/${n.name}` : n.name;
    if (n.type === 'file') out.push({ file: p, sha: n.uid });
    else if (n.children) out = out.concat(flat(n.children, p));
  }
  return out;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token = process.env.VERCEL_TOKEN || process.env.RS_VERCEL_TOKEN;
  if (!token) {
    return res.status(500).json({ ok: false, error: 'Missing VERCEL_TOKEN environment variable in Vercel.' });
  }

  try {
    const body = req.body || {};
    const baseDpl = body.baseDpl;
    if (!baseDpl) return res.status(400).json({ ok: false, error: 'Missing baseDpl.' });

    const projectName = body.projectName || 'raleway-studio';
    const treeRes = await fetch(`https://api.vercel.com/v7/deployments/${baseDpl}/files`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const treeData = await treeRes.json();
    if (!treeRes.ok) return res.status(treeRes.status).json({ ok: false, error: 'Tree fetch failed: ' + JSON.stringify(treeData) });

    const existing = flat(Array.isArray(treeData) ? treeData : (treeData.fileTree || []));
    const usesSrcPrefix = existing.some(ef => ef.file === 'src/about.html' || ef.file === 'src/admin/portal.html');
    const filePrefix = usesSrcPrefix ? 'src/' : '';
    const pathFor = p => filePrefix + String(p || '').replace(/^\.\.\//,'').replace(/^\//,'');

    const assets = Array.isArray(body.assets) ? body.assets : [];
    const assetFiles = assets.map(a => ({ file: pathFor(a.path), data: a.b64, encoding: 'base64' }));
    const overrides = new Set([
      pathFor('about.html'),
      pathFor('services.html'),
      pathFor('pricing.html'),
      pathFor('admin/portal.html'),
      ...assetFiles.map(a => a.file)
    ]);

    const files = existing.filter(ef => !overrides.has(ef.file)).map(ef => ({ file: ef.file, sha: ef.sha }));
    // HTML files: pass as plain strings (Vercel serves data as-is)
    files.push({ file: pathFor('about.html'), data: String(body.aboutHtml || '') });
    files.push({ file: pathFor('services.html'), data: String(body.servicesHtml || '') });
    files.push({ file: pathFor('pricing.html'), data: String(body.pricingHtml || '') });
    if (body.portalHtml) files.push({ file: pathFor('admin/portal.html'), data: String(body.portalHtml) });
    // Binary assets: already base64-encoded by the browser, encoding:'base64' tells Vercel to decode them
    assetFiles.forEach(a => files.push(a));

    const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: projectName, files, projectSettings: { framework: null }, target: 'production' })
    });
    const deployData = await deployRes.json();
    if (!deployRes.ok) return res.status(deployRes.status).json({ ok: false, error: 'Deploy failed: ' + JSON.stringify(deployData) });

    res.status(200).json({ ok: true, id: deployData.id, url: deployData.url || null });
  } catch (err) {
    res.status(500).json({ ok: false, error: err && err.message ? err.message : String(err) });
  }
};
