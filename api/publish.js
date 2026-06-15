// Publishes admin-portal changes to Vercel.
//
// Strategy:
//  1. Commit all portal changes (HTML edits + uploaded binary assets) to GitHub
//     with "[skip ci]" so Vercel doesn't auto-deploy from that commit.
//     This makes assets permanent in the repo — they survive future code pushes.
//  2. Fetch the updated repo tree from GitHub (now includes the committed assets).
//  3. Create a direct Vercel API deployment for an immediate go-live.

const fs   = require('fs');
const path = require('path');

const BINARY_EXTS = new Set([
  '.png','.jpg','.jpeg','.gif','.webp','.ico',
  '.woff','.woff2','.ttf','.eot','.otf',
  '.mp4','.mp3','.pdf','.zip'
]);
function isBinaryPath(p) { return BINARY_EXTS.has(path.extname(p).toLowerCase()); }

// Creates a single GitHub commit containing all provided file changes.
// Using the low-level Git Data API so it's one commit → one webhook → skipped by [skip ci].
async function commitToGitHub(ghHeaders, owner, repo, branch, fileChanges, message) {
  // fileChanges: [{ path, b64 }]  — content is always base64

  // 1. Get current HEAD SHA
  const refRes  = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branch}`, { headers: ghHeaders });
  const refData = await refRes.json();
  const headSha = refData.object?.sha;
  if (!headSha) throw new Error('GitHub ref fetch failed: ' + JSON.stringify(refData));

  // 2. Get the tree SHA of HEAD
  const cRes  = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits/${headSha}`, { headers: ghHeaders });
  const cData = await cRes.json();
  const treeSha = cData.tree?.sha;
  if (!treeSha) throw new Error('GitHub commit fetch failed: ' + JSON.stringify(cData));

  // 3. Create blobs for each changed file (parallel)
  const treeItems = await Promise.all(fileChanges.map(async ({ path: fp, b64 }) => {
    const bRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs`, {
      method: 'POST',
      headers: { ...ghHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: b64, encoding: 'base64' })
    });
    const bData = await bRes.json();
    if (!bData.sha) throw new Error(`Blob create failed for ${fp}: ` + JSON.stringify(bData));
    return { path: fp, mode: '100644', type: 'blob', sha: bData.sha };
  }));

  // 4. Create new tree based on current HEAD tree
  const tRes  = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
    method: 'POST',
    headers: { ...ghHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ base_tree: treeSha, tree: treeItems })
  });
  const tData = await tRes.json();
  if (!tData.sha) throw new Error('Tree create failed: ' + JSON.stringify(tData));

  // 5. Create commit
  const nRes  = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
    method: 'POST',
    headers: { ...ghHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, tree: tData.sha, parents: [headSha] })
  });
  const nData = await nRes.json();
  if (!nData.sha) throw new Error('Commit create failed: ' + JSON.stringify(nData));

  // 6. Advance branch ref
  const uRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
    method: 'PATCH',
    headers: { ...ghHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sha: nData.sha })
  });
  if (!uRes.ok) throw new Error('Ref update failed: ' + await uRes.text());
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token   = process.env.VERCEL_TOKEN || process.env.RS_VERCEL_TOKEN;
  const ghToken = process.env.GITHUB_TOKEN;

  if (!token)   return res.status(500).json({ ok: false, error: 'Missing VERCEL_TOKEN env var.' });
  if (!ghToken) return res.status(500).json({ ok: false, error: 'Missing GITHUB_TOKEN env var.' });

  try {
    const body        = req.body || {};
    const projectName = body.projectName || 'raleway-studio';
    const ghOwner     = 'Shizune07';
    const ghRepo      = 'raleway-studio';
    const ghBranch    = 'main';

    // API files injected from this function's own filesystem
    const SELF_MANAGED = new Set(['api/publish.js', 'api/deployment-status.js', 'vercel.json']);
    // HTML pages the portal manages (overridden in deployment; also committed to GitHub)
    const PORTAL_MANAGED = new Set(['about.html', 'services.html', 'pricing.html', 'admin/portal.html']);

    const publishJs  = fs.readFileSync(__filename, 'utf8');
    const statusJs   = fs.readFileSync(path.join(__dirname, 'deployment-status.js'), 'utf8');
    const vjPath     = path.join(__dirname, '..', 'vercel.json');
    const vercelJson = fs.existsSync(vjPath) ? fs.readFileSync(vjPath, 'utf8') : '{"cleanUrls":true}';

    const ghHeaders = {
      Authorization: `Bearer ${ghToken}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'raleway-portal'
    };

    const assets     = Array.isArray(body.assets) ? body.assets : [];
    const assetPaths = new Set(assets.map(a => String(a.path || '').replace(/^\.\.\//,'').replace(/^\//,'')));

    // ── STEP 1: Commit portal changes to GitHub (assets + HTML) ──────────────
    // [skip ci] prevents Vercel from auto-deploying this commit; assets become
    // permanent in the repo so future code pushes won't wipe them.
    const githubChanges = [];

    // HTML pages
    const htmlPages = [
      { path: 'about.html',    content: body.aboutHtml    || '' },
      { path: 'services.html', content: body.servicesHtml || '' },
      { path: 'pricing.html',  content: body.pricingHtml  || '' },
    ];
    if (body.portalHtml) htmlPages.push({ path: 'admin/portal.html', content: body.portalHtml });
    htmlPages.forEach(({ path: fp, content }) => {
      if (content) githubChanges.push({ path: fp, b64: Buffer.from(String(content)).toString('base64') });
    });

    // Binary assets
    assets.forEach(a => {
      const fp = String(a.path || '').replace(/^\.\.\//,'').replace(/^\//,'');
      if (fp && a.b64) githubChanges.push({ path: fp, b64: a.b64 });
    });

    if (githubChanges.length > 0) {
      await commitToGitHub(ghHeaders, ghOwner, ghRepo, ghBranch, githubChanges, 'Portal update [skip ci]');
    }

    // ── STEP 2: Fetch updated GitHub tree (assets now included) ──────────────
    const treeRes  = await fetch(
      `https://api.github.com/repos/${ghOwner}/${ghRepo}/git/trees/${ghBranch}?recursive=1`,
      { headers: ghHeaders }
    );
    const treeData = await treeRes.json();
    if (!treeRes.ok || !Array.isArray(treeData.tree)) {
      return res.status(500).json({ ok: false, error: 'GitHub tree fetch failed: ' + JSON.stringify(treeData) });
    }

    // ── STEP 3: Build Vercel deployment ──────────────────────────────────────
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

    // Portal-managed HTML (use fresh body content for the immediate deploy)
    files.push({ file: 'about.html',    data: String(body.aboutHtml    || '') });
    files.push({ file: 'services.html', data: String(body.servicesHtml || '') });
    files.push({ file: 'pricing.html',  data: String(body.pricingHtml  || '') });
    if (body.portalHtml) files.push({ file: 'admin/portal.html', data: String(body.portalHtml) });

    // Binary assets from portal upload
    assets.forEach(a => {
      const fp = String(a.path || '').replace(/^\.\.\//,'').replace(/^\//,'');
      if (fp) files.push({ file: fp, data: a.b64, encoding: 'base64' });
    });

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
