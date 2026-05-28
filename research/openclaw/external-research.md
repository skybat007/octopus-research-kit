# External Research

## 1. Official Sources

| Source | Link or Path | Main Content | Value for This Research | Confidence |
|---|---|---|---|---|
| Gateway architecture | https://docs.openclaw.ai/architecture | Gateway as a long-running control plane connecting the message plane, control-plane clients, and nodes | Confirms that OpenClaw's product core is not a single agent loop, but a Gateway control plane | A |
| Agent runtime | https://docs.openclaw.ai/concepts/agent | Embedded agent runtime in a single Gateway, workspace, bootstrap files, session transcript, and Pi core boundary | Generates source-verification questions about the agent runtime and OpenClaw-owned layer | A |
| Session management | https://docs.openclaw.ai/concepts/session | Sessions routed by DM, group, room, cron, and webhook, with emphasis on DM isolation and Gateway-owned state | Verifies session isolation, session store, and transcript design | A |
| Multi-agent routing | https://docs.openclaw.ai/concepts/multi-agent | Multiple isolated agents, each with its own workspace, agentDir, auth profiles, and session history | Verifies whether multi-agent is a first-class model rather than a persona layer | A |
| Plugin internals | https://docs.openclaw.ai/plugins/architecture | Capability model, manifest/discovery, enablement/validation, runtime loading, and surface consumption | Verifies plugin capability ownership and loader layering | A |
| Local repository README/VISION/docs | `README.md`, `VISION.md`, `docs/**` | Product positioning, security boundary, plugin-first design, and Gateway/Agent/Session/Plugin concept docs | Already used as repository-document evidence in the first source pass | S/A |

## 2. Project Collaboration Sources

| Source | Link or Path | Main Point | Time/Version | Confidence | Needs Source Verification |
|---|---|---|---|---|---|
| GitHub repository | https://github.com/openclaw/openclaw | Official code and documentation edit source | Checked on 2026-05-25 | A/B | Yes |
| Plugin docs edit source links | GitHub edit-source links from OpenClaw docs pages | Docs and source repository share the same origin | Checked on 2026-05-25 | B | Yes |

## 3. Community and Third-Party Sources

This pass did not use independent third-party articles as conclusion evidence. The external material is mainly from the official documentation site and the local source repository. Community material remains a later input for comparative research or practice-risk notes.

## 4. Key External Claims

### EXT-OC-001: Gateway Is a Long-Running Control Plane

Sources:

- Official Gateway architecture documentation
- Local `docs/concepts/architecture.md`

Explanation:

- External material describes a long-running Gateway responsible for the message plane, control-plane clients, nodes, and HTTP/WS surface.

Source verification:

- Verified.

Corresponding source evidence:

- [evidence-index.md](./evidence-index.md) `C-004`, `C-005`, `C-006`

### EXT-OC-002: Agent Runtime Is an OpenClaw Shell Plus Pi Agent Core

Sources:

- Official Agent runtime documentation
- Local `docs/concepts/agent.md`, `docs/concepts/agent-loop.md`

Explanation:

- Official material separates OpenClaw-owned layers such as workspace, session, tools, and channel delivery from Pi agent core.

Source verification:

- Main path verified; Pi core event structure still needs deeper analysis.

Corresponding source evidence:

- `C-007`, `C-008`, `INF-003`

### EXT-OC-003: Plugin Capability Is the Public Native Plugin Model

Sources:

- Official Plugin internals documentation
- Local `docs/plugins/architecture.md`, `docs/plugins/manifest.md`

Explanation:

- Plugins are not only hooks. Capability registration, manifest/discovery, runtime registry, and surface consumption form the core extension model.

Source verification:

- Loader/API-builder main path verified.

Corresponding source evidence:

- `C-010`, `C-011`, `C-012`, `INF-001`

### EXT-OC-004: Session and Multi-Agent Are Isolation Models

Sources:

- Official Session management documentation
- Official Multi-agent routing documentation

Explanation:

- External material says different message sources route to different sessions, and each agent owns its workspace, state, auth profiles, and session history.

Source verification:

- Partly verified through local repository docs and the Agent RPC path; runtime isolation still needs live Gateway validation.

Corresponding source evidence:

- `C-008`, `C-009`

## 5. External/Source Differences

| External Claim | Source Reality | Judgment | Follow-Up |
|---|---|---|---|
| Official docs present a capability-first plugin model. | Source and docs also retain the legacy hook-only path. | Not a conflict; this is evolution-period compatibility. | Keep both capability and legacy-hook tracks in `extension-points.md`. |
| Official docs say multi-agent is active. | This pass only verified main configuration/docs and part of the agent ingress path. | Partly verified. | Run a multi-agent channel-binding example later. |

## 6. Impact on Research Direction

External material helped confirm that this pass should focus on:

- Gateway control plane
- Agent runtime boundary
- Plugin capability ownership
- Session/multi-agent isolation
- Channel/provider capability examples
