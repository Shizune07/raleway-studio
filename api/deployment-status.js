module.exports = async function handler(req, res) {
  const token = process.env.VERCEL_TOKEN || process.env.RS_VERCEL_TOKEN;
  if (!token) return res.status(500).json({ ok: false, error: 'Missing VERCEL_TOKEN environment variable in Vercel.' });
  const id = req.query && req.query.id;
  if (!id) return res.status(400).json({ ok: false, error: 'Missing deployment id.' });

  try {
    const r = await fetch(`https://api.vercel.com/v13/deployments/${encodeURIComponent(id)}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ ok: false, error: JSON.stringify(data) });
    res.status(200).json({ ok: true, readyState: data.readyState, status: data.status || data.readyState });
  } catch (err) {
    res.status(500).json({ ok: false, error: err && err.message ? err.message : String(err) });
  }
};
