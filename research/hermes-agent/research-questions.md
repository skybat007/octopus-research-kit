# Research Questions

## 1. Question List

| ID | Question | Source | Why It Matters | Source Directions to Verify | Status |
|---|---|---|---|---|---|
| RQ-HA-001 | Do Hermes' many entries ultimately enter the same Agent runtime? | EXT-HA-001 | Determines whether the architecture centers on one runtime or several systems | CLI, TUI gateway, ACP, Gateway, cron | Verified |
| RQ-HA-002 | Are toolsets really a tool-capability control plane? | EXT-HA-002 | Determines how the tool system narrows capability by platform/task | `toolsets.py`, `model_tools.py`, `ToolRegistry` | Verified |
| RQ-HA-003 | Can plugins register tools/hooks/commands/platform/provider integrations? | EXT-HA-003 | Determines whether extension mechanisms are layered | `hermes_cli/plugins.py`, gateway platform registry, providers, memory | Verified |
| RQ-HA-004 | Does Gateway session/delivery support messaging entries? | EXT-HA-004 | Determines whether messaging entries share Agent runtime | `gateway/run.py`, `gateway/session.py`, adapter base | Structure verified, security details partly verified |
| RQ-HA-005 | Does Memory Provider allow only one external provider at a time? | EXT-HA-005 | Determines long-term memory boundaries and failure isolation | `agent/memory_manager.py`, `agent/memory_provider.py` | Verified |
| RQ-HA-006 | Does cron run in a fresh agent session and handle delivery? | Cron docs | Determines whether scheduler is an external script or Agent runtime extension | `cron/jobs.py`, `cron/scheduler.py`, gateway cron ticker | Structure verified |

## 2. Detailed Questions

### RQ-HA-001: Do Many Entries Share Agent Runtime?

External source:

- GitHub README
- Architecture docs

Source verification needed:

- Whether CLI wrapper, TUI gateway, ACP adapter, Gateway, and cron converge on `AIAgent` or `run_conversation`.

Verification result:

- Verified. CLI chat, TUI prompt submit, ACP adapter, Gateway `_run_agent`, and cron execution all construct or call the same Agent runtime path.

Evidence:

- `H-003`, `H-004`, `H-013`, `H-014`, `H-015`, `H-016`

### RQ-HA-002: Are Toolsets a Tool Capability Control Plane?

External source:

- Toolsets Reference

Source verification needed:

- Whether toolset selection actually affects model-visible tool schema.
- Whether plugin tools use the same filtering/dispatch path.

Verification result:

- Verified.

Evidence:

- `H-005`, `H-006`, `H-007`, `H-008`

### RQ-HA-003: Is the Plugin Extension Surface Layered?

External source:

- Plugins docs

Source verification needed:

- Whether plugins can register tools, hooks, commands, context engines, gateway platforms, and provider-like capabilities.
- Whether providers/memory/platforms have dedicated contracts.

Verification result:

- Verified.

Evidence:

- `H-008`, `H-010`, `H-011`, `H-012`

### RQ-HA-004: Does Gateway Session/Delivery Support Messaging Entries?

External source:

- Messaging Gateway docs

Source verification needed:

- How a platform inbound event becomes `MessageEvent`.
- How Gateway builds session key and chooses cached/fresh `AIAgent`.
- How streaming/final delivery avoids duplication.

Verification result:

- Structure verified. Per-platform security defaults still need adapter-level sampling.

Evidence:

- `H-009`, `H-010`, `INF-004`

## 3. External Claim Verification Status

| External Claim | Related Question | Verification Status | Evidence |
|---|---|---|---|
| Many entries share Agent runtime | RQ-HA-001 | Verified | `H-003`, `H-004`, `H-013`-`H-016` |
| Toolsets control tool availability | RQ-HA-002 | Verified | `H-005`-`H-007` |
| Plugins register tools/hooks/integrations | RQ-HA-003 | Verified | `H-008`, `H-010`-`H-012` |
| Gateway defaults to allowlist/pairing | RQ-HA-004 | Partly verified | `H-009`; platform-adapter security sampling pending |
| Memory Provider allows one external provider | RQ-HA-005 | Verified | `H-012` |

## 4. Still to Confirm

- Live CLI/TUI/Gateway/ACP minimal turns.
- Actual schema and dispatch after dynamically installing a plugin tool.
- Per-platform allowlist/pairing behavior.
- Gateway cached `AIAgent` invalidation behavior after config or toolset changes.
- Memory Provider failure modes and user-visible diagnostics.
