const OWNER = "YaDragon44";
const REPO = "radar";
const WORKFLOW = "global-manual-refresh.yml";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method_not_allowed" });
  const token = process.env.RADAR_CROSS_REPO_TOKEN;
  if (!token) return res.status(503).json({ ok: false, error: "control_plane_not_configured" });
  const url = "https://api.github.com/repos/" + OWNER + "/" + REPO + "/actions/workflows/" + WORKFLOW + "/dispatches";
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json" },
    body: JSON.stringify({ ref: "main" })
  });
  if (!r.ok) { const detail = await r.text(); return res.status(r.status).json({ ok: false, error: "github_dispatch_failed", detail: detail.slice(0, 300) }); }
  return res.status(202).json({ ok: true, status: "queued", requested_at: new Date().toISOString() });
}
