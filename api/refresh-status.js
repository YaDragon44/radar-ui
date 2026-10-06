const OWNER = "YaDragon44";
const REPO = "radar";
const WORKFLOW = "global-manual-refresh.yml";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).json({ ok: false, error: "method_not_allowed" });
  const token = process.env.RADAR_CROSS_REPO_TOKEN;
  if (!token) return res.status(503).json({ ok: false, error: "control_plane_not_configured" });
  const url = "https://api.github.com/repos/" + OWNER + "/" + REPO + "/actions/workflows/" + WORKFLOW + "/runs?event=workflow_dispatch&per_page=1";
  const r = await fetch(url, { headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" } });
  if (!r.ok) return res.status(r.status).json({ ok: false, error: "github_status_failed" });
  const data = await r.json(); const run = data.workflow_runs && data.workflow_runs[0];
  if (!run) return res.status(200).json({ ok: true, status: "idle" });
  return res.status(200).json({ ok: true, status: run.status, conclusion: run.conclusion, run_id: run.id, updated_at: run.updated_at, created_at: run.created_at });
}
