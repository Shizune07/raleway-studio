// Publishes changes from the admin portal to Vercel.
// Strategy: fetch the full file tree from GitHub (the canonical source of truth),
// then override with portal-managed content. This avoids all issues with old
// Vercel deployment file trees (src/ prefix, missing files, GitHub deploys with
// inaccessible tree endpoints, etc.).

const fs   = require('fs');
const path = require('path');

const BINARY_EXTS = new Set([
  '.png','.jpg','.jpeg','.gif','.webp','.ico',
  '.woff','.woff2','.ttf','.eot','.otf',
  '.mp4','.mp3','.pdf','.zip'
]);

function isBinaryPath(p) {
  return BINARY_EXTS.has(path.extname(p).toLowerCase());
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token   = process.env.VERCEL_TOKEN || process.env.RS_VERCEL_TOKEN;
  const ghToken = process.env.GITHUB_TOKEN;

  if (!token)   return res.status(500).json({ ok: false, error: 'Missing VERCEL_TOKEN env var.' });
  if (!ghToken) return res.status(500).json({ ok: false, error: 'Missing GITHUB_TOKEN env var. Add it in Vercel project settings → Environment Variables.' });

  try {
    const body        = req.body || {};
    const projectName = body.projectName || 'raleway-studio';
    const ghOwner     = 'Shizune07';
    const ghRepo      = 'raleway-studio';
    const ghBranch    = 'main';

    // Files the portal directly manages (we use the portal-provided content, not GitHub)
    const PORTAL_MANAGED = new Set(['about.html', 'services.html', 'pricing.html', 'admin/portal.html']);
    // API files: always inject from this running function's own filesystem
    const SELF_MANAGED   = new Set(['api/publish.js', 'api/deployment-status.js', 'vercel.json']);

    // Read own API files (these are always injected so they survive every deploy)
    const publishJs  = fs.readFileSync(__filename, 'utf8');
    const statusJs   = fs.readFileSync(path.join(__dirname, 'deployment-status.js'), 'utf8');
    const vjPath     = path.join(__dirname, '..', 'vercel.json');
    const vercelJson = fs.existsSync(vjPath) ? fs.readFileSync(vjPath, 'utf8') : '{"cleanUrls":true}';

    const ghHeaders = {
      Authorization: `Bearer ${ghToken}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'raleway-portal'
    };

    // Fetch the full repo file tree
    const treeRes  = await fetch(
      `https://api.github.com/repos/${ghOwner}/${ghRepo}/git/trees/${ghBranch}?recursive=1`,
      { headers: ghHeaders }
    );
    const treeData = await treeRes.json();
    if (!treeRes.ok || !Array.isArray(treeData.tree)) {
      return res.status(500).json({ ok: false, error: 'GitHub tree fetch failed: ' + JSON.stringify(treeData) });
    }

    const assets     = Array.isArray(body.assets) ? body.assets : [];
    const assetPaths = new Set(assets.map(a => String(a.path || '').replace(/^\.\.\//,'').replace(/^\//,'')));

    // Fetch all non-overridden files from GitHub in parallel
    const githubBlobs = treeData.tree.filter(f => f.type === 'blob');
    const fetchResults = await Promise.all(
      githubBlobs
        .filter(f => !PORTAL_MANAGED.has(f.path) && !SELF_MANAGED.has(f.path) && !assetPaths.has(f.path))
        .map(async (ghFile) => {
          try {
            const rawUrl = `https://raw.githubusercontent.com/${ghOwner}/${ghRepo}/${ghBranch}/`
              + ghFile.path.split('/').map(encodeURIComponent).join('/');
            const r = await fetch(rawUrl, {
              headers: { Authorization: `Bearer ${ghToken}`, 'User-Agent': 'raleway-portal' }
            });
            if (!r.ok) return null;
            if (isBinaryPath(ghFile.path)) {
              const buf = await r.arrayBuffer();
              return { file: ghFile.path, data: Buffer.from(buf).toString('base64'), encoding: 'base64' };
            }
            return { file: ghFile.path, data: await r.text() };
          } catch (_) { return null; }
        })
    );

    const files = fetchResults.filter(Boolean);

    // Always inject latest API function files
    files.push({ file: 'api/publish.js',           data: publishJs });
    files.push({ file: 'api/deployment-status.js', data: statusJs });
    files.push({ file: 'vercel.json',              data: vercelJson });

    // Portal-managed pages
    files.push({ file: 'about.html',    data: String(body.aboutHtml    || '') });
    files.push({ file: 'services.html', data: String(body.servicesHtml || '') });
    files.push({ file: 'pricing.html',  data: String(body.pricingHtml  || '') });
    if (body.portalHtml) files.push({ file: 'admin/portal.html', data: String(body.portalHtml) });

    // Binary asset uploads from the portal (e.g. team photo)
    assets.forEach(a => {
      const fp = String(a.path || '').replace(/^\.\.\//,'').replace(/^\//,'');
      if (fp) files.push({ file: fp, data: a.b64, encoding: 'base64' });
    });

    // Create the Vercel deployment
    const deployRes  = await fetch('https://api.vercel.com/v13/deployments', {
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
