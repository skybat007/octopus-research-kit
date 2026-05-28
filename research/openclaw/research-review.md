# Research Review

Status: draft
Last Updated: 2026-05-25

## 1. Review Conclusion

This research pass has added the external-research stage required by the newer workflow. It pins the code snapshot, covers OpenClaw official docs, the GitHub repository, local source, and repository docs, then converts external claims into research questions and verifies them with available source evidence. Key conclusions can be traced back to official material, source files, or repository documentation.

## 2. Coverage

| Check | Status | Notes |
|---|---|---|
| Fixed version/commit | Pass | `main@989e53c20d395d3c8bf47efc21fdb9d56e7227b0` |
| External research | Pass | `external-research.md` covers official docs, GitHub, and local repository docs. |
| Research-question verification | Pass | `research-questions.md` records `RQ-OC-001` through `RQ-OC-005`. |
| Structured source inventory | Pass | `references/source-inventory.json` generated; covers 17990 files. |
| Dashboard | Pass | `dashboard.html` generated as the reading entry. |
| Module relationship notes | Pass | `source-map.md` and `architecture.md` cover module relationships. |
| At least one runtime flow | Pass | `runtime-flows.md` covers Gateway startup, WS handshake, agent run, and plugin load. |
| Visual architecture diagram | Pass | `visual/architecture.html` renders the diagram; `visual/architecture.visual.js` carries graph data and evidence links; `visual/evidence.html` provides clickable evidence explanations. |
| Evidence index | Pass | `evidence-index.md` records `C-001` through `C-017` and adds `EXT-OC-001` through `EXT-OC-004`. |
| Fact/inference separation | Pass | `evidence-index.md` separates source facts, repository-doc facts, official-source facts, and inferences. |
| Adoption notes | Pass | `adoption-notes.md` |
| Comparative research | Not complete | `comparison.md` only keeps a future-entry placeholder. |
| Automated validation | Pass | `validate-research.js research/openclaw` has passed. |

## 3. Main Risks

| Risk | Impact | Recommendation |
|---|---|---|
| Gateway not run | Static code cannot prove live behavior exactly matches the implementation reading. | Run a minimal local Gateway + WS client validation. |
| Tests not run | Boundary behavior and regression protection are not confirmed. | Run tests related to plugin loader, Gateway WS, and agent methods. |
| Not every plugin covered | Conclusions about channel/provider consistency still need sampling. | Sample Telegram, Slack, OpenAI, and Memory plugins. |
| Comparative research not done | Hard to judge OpenClaw's distinctiveness and industry position. | Fix one comparison target and research it with the same scope. |
| No third-party practice material used | Missing community friction and operational-practice perspective. | Add issues, PRs, and user-practice articles during later comparison work. |

## 4. Evidence to Add

- Output from `openclaw plugins inspect anthropic --runtime --json` or a similar command.
- One real `connect` + `agent` WS frame after Gateway startup.
- One end-to-end path from channel inbound to agent delivery.
- One actual plugin reload/config-change flow.
- One memory-plugin slot-selection and hook-injection path.

## 5. Review Notes

This version is already usable as a learning reference. The next step should not be broad reading across the whole repository; it should be two targeted deep dives:

1. Plugin runtime deep dive: run a real plugin inspect and confirm the observable manifest -> registry -> runtime-capability output.
2. Agent delivery deep dive: trace a real channel inbound through session, agent run, and outbound delivery.
