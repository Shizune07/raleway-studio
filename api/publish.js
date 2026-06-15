const fs = require('fs');
const path = require('path');

function flat(nodes, pre) {
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
    const projectName = body.projectName || 'raleway-studio';

    // Read own content plus sibling API files — these are always injected into
    // every deployment so they're never accidentally dropped when a GitHub-triggered
    // deployment becomes the base (those have no accessible file tree via API).
    const publishJs  = fs.readFileSync(__filename, 'utf8');
    const statusJs   = fs.readFileSync(path.join(__dirname, 'deployment-status.js'), 'utf8');
    const vjPath     = path.join(__dirname, '..', 'vercel.json');
    const vercelJson = fs.existsSync(vjPath) ? fs.readFileSync(vjPath, 'utf8') : '{"cleanUrls":true}';

    // Fetch the last 20 READY production deployments and find the most recent one
    // that has an accessible file tree (GitHub-triggered deployments return
    // "File tree not found" from /v7/deployments/{id}/files).
    const listRes = await fetch(
      `https://api.vercel.com/v6/deployments?projectId=${encodeURIComponent(projectName)}&target=production&state=READY&limit=20`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const listData = await listRes.json();
    if (!listRes.ok) {
      return res.status(listRes.status).json({ ok: false, error: 'List deployments failed: ' + JSON.stringify(listData) });
    }

    let existing = [];
    let baseDplId = null;

    for (const dpl of (listData.deployments || [])) {
      try {
        const treeRes = await fetch(`https://api.vercel.com/v7/deployments/${dpl.uid}/files`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!treeRes.ok) continue;
        const treeData = await treeRes.json();
        if (treeData && treeData.error) continue;
        const files = flat(Array.isArray(treeData) ? treeData : (treeData.fileTree || []));
        if (files.length > 0) {
          existing = files;
          baseDplId = dpl.uid;
          break;
        }
      } catch (_) {
        continue;
      }
    }

    if (!baseDplId) {
      return res.status(500).json({
        ok: false,
        error: 'No API-created deployment with accessible file tree found in the last 20 deployments. ' +
               'Try pushing a direct API deployment first, or contact support.'
      });
    }

    const usesSrcPrefix = existing.some(ef => ef.file === 'src/about.html' || ef.file === 'src/admin/portal.html');
    const filePrefix = usesSrcPrefix ? 'src/' : '';
    const pathFor = p => filePrefix + String(p || '').replace(/^\.\.\//,'').replace(/^\//,'');

    const assets = Array.isArray(body.assets) ? body.assets : [];
    // Binary assets: already base64-encoded by the browser
    const assetFiles = assets.map(a => ({ file: pathFor(a.path), data: a.b64, encoding: 'base64' }));

    // These paths are always replaced with fresh content
    const overrides = new Set([
      'api/publish.js',
      'api/deployment-status.js',
      'vercel.json',
      pathFor('about.html'),
      pathFor('services.html'),
      pathFor('pricing.html'),
      pathFor('admin/portal.html'),
      ...assetFiles.map(a => a.file)
    ]);

    // Reuse all other existing files by SHA
    const files = existing.filter(ef => !overrides.has(ef.file)).map(ef => ({ file: ef.file, sha: ef.sha }));

    // Always inject the latest API function files so they survive every deploy
    files.push({ file: 'api/publish.js',            data: publishJs });
    files.push({ file: 'api/deployment-status.js',  data: statusJs });
    files.push({ file: 'vercel.json',               data: vercelJson });

    // HTML files: pass as plain strings
    files.push({ file: pathFor('about.html'),    data: String(body.aboutHtml    || '') });
    files.push({ file: pathFor('services.html'), data: String(body.servicesHtml || '') });
    files.push({ file: pathFor('pricing.html'),  data: String(body.pricingHtml  || '') });
    if (body.portalHtml) {
      files.push({ file: pathFor('admin/portal.html'), data: String(body.portalHtml) });
    }

    // Binary assets with explicit encoding so Vercel decodes them correctly
    assetFiles.forEach(a => files.push(a));

    const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: projectName, files, projectSettings: { framework: null }, target: 'production' })
    });
    const deployData = await deployRes.json();
    if (!deployRes.ok) {
      return res.status(deployRes.status).json({ ok: false, error: 'Deploy failed: ' + JSON.stringify(deployData) });
    }

    res.status(200).json({ ok: true, id: deployData.id, url: deployData.url || null });
  } catch (err) {
    res.status(500).json({ ok: false, error: err && err.message ? err.message : String(err) });
  }
};
