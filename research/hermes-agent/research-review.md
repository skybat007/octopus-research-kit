# Research Review

Status: draft
Last Updated: 2026-05-25

## 1. Review Conclusion

This research pass added the external-research stage required by the newer workflow. It pins the code snapshot, covers the official GitHub README, Hermes docs, release-file entries, and local source, then converts external claims into research questions and verifies them with available source evidence. Key conclusions can be traced to official material, source files, or repository docs.

## 2. Coverage

| Check | Status | Notes |
|---|---|---|
| Fixed version/commit | Pass | `main@cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| External research | Pass | `external-research.md` covers official GitHub, docs, and toolsets/plugins/memory/gateway/cron docs |
| Research-question verification | Pass | `research-questions.md` records `RQ-HA-001` through `RQ-HA-006` |
| Structured source inventory | Pass | `references/source-inventory.json` generated; covers 3636 files |
| Dashboard | Pass | `dashboard.html` generated as the reading entry |
| Module relationship notes | Pass | `source-map.md` and `architecture.md` cover module relationships |
| At least one runtime flow | Pass | `runtime-flows.md` covers CLI chat, Agent loop, Tool call, Gateway, TUI, and cron |
| Visual architecture diagram | Pass | `visual/architecture.html` renders the diagram; `visual/architecture.visual.js` carries graph data and evidence links; `visual/evidence.html` provides clickable evidence explanations |
| Evidence index | Pass | `evidence-index.md` records `H-001` through `H-016` and adds `EXT-HA-001` through `EXT-HA-005` |
| Fact/inference separation | Pass | `evidence-index.md` separates source/repository-doc/official facts and inferences |
| Adoption notes | Pass | `adoption-notes.md` |
| Comparative research | Partly complete | `comparison.md` provides comparison dimensions and initial observations against OpenClaw |
| Automated validation | Pass | `validate-research.js research/hermes-agent` has passed |

## 3. Main Risks

| Risk | Impact | Recommendation |
|---|---|---|
| Hermes not run | Static code cannot prove live behavior exactly matches the implementation reading | Run a minimal CLI or dry-run flow next |
| Tests not run | Boundary behavior and regression protection are not confirmed | Prioritize tests related to tool registry, plugins, gateway session, and cron |
| Gateway file is very large | Static reading can miss local exceptional paths | Do targeted tracing by platform and session type |
| TUI frontend not deeply studied | Bridge architecture is confirmed, but UI state machine is not evaluated | Inspect event consumption and render model under `ui-tui/src` |
| Plugin implementations not sampled | Extension-point conclusions mainly come from framework layer | Trace one provider, memory, and platform plugin end to end |
| No third-party practice material used | Missing community friction and operational-practice perspective | Add GitHub issue/PR themes and user articles later |

## 4. Evidence to Add

- Actual output from `hermes --version`, `hermes doctor`, or `hermes --help`.
- A minimal CLI prompt result with session/log/trajectory generation.
- Tool schema after dynamically registering a plugin tool.
- A real inbound `MessageEvent` sample from a gateway adapter.
- Saved output and delivery behavior for one cron job.
- One JSON-RPC trace from TUI `prompt.submit` to `message.delta`.

## 5. Review Notes

This version is already usable as a first-layer map for learning Hermes Agent architecture. The next step should not be broad reading across the whole repository; it should be two narrow deep dives:

1. Tool/plugin deep dive: install or enable one plugin tool and observe registry, toolset, model schema, and dispatch.
2. Gateway/session deep dive: choose one platform adapter and trace inbound event through session key, `AIAgent` call, and delivery.
