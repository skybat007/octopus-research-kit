# External Research

## 1. Official Sources

| Source | Link or Path | Main Content | Value for This Research | Confidence |
|---|---|---|---|---|
| GitHub README | https://github.com/NousResearch/hermes-agent | Product positioning, self-improving learning loop, CLI/Gateway/TUI/cron/provider/memory/skills capability overview | Calibrates product goals and external entries | A |
| Architecture docs | https://hermes-agent.nousresearch.com/docs/developer-guide/architecture | Directory structure, `run_agent.py`, `model_tools.py`, `toolsets.py`, agent internals, CLI subcommands | Cross-checks local source-map/architecture | A |
| Messaging Gateway docs | https://hermes-agent.nousresearch.com/docs/user-guide/messaging | Messaging sessions, allowlist security defaults, background delivery, service management | Verifies Gateway/session/delivery direction | A |
| Plugins docs | https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins | `plugin.yaml` + Python `register`, registering tools/hooks/slash commands/platform/provider integrations | Verifies that plugins are an extension control plane, not read-only config | A |
| Toolsets reference | https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference | Toolsets are bundles that control tool availability by platform/session/task | Verifies ToolRegistry and toolset filtering conclusions | A |
| Memory Providers docs | https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers | Eight external memory providers, with only one external provider active at a time | Verifies Memory Provider boundary | A |
| Cron docs | https://hermes-agent.nousresearch.com/docs/user-guide/features/cron/ | Cron jobs can load skills, use fresh agent sessions, deliver output, and avoid recursion | Verifies cron as a gateway/runtime extension entry | A |

## 2. Project Collaboration Sources

| Source | Link or Path | Main Point | Time/Version | Confidence | Needs Source Verification |
|---|---|---|---|---|---|
| GitHub repository file tree | https://github.com/NousResearch/hermes-agent | Public repository structure broadly matches the local snapshot | Checked 2026-05-25 | B | Yes |
| Release files | `RELEASE_v0.10.0` through `RELEASE_v0.14.0` listed in GitHub README | Shows that the project has versioned release notes | Checked 2026-05-25 | B | Needed for later version-delta research |

## 3. Community and Third-Party Sources

This pass did not use independent third-party articles as conclusion evidence. Hermes Agent external material mainly comes from official GitHub and the Nous Research docs site.

## 4. Key External Claims

### EXT-HA-001: Hermes Is a Multi-Entry Self-Improving Agent

Sources:

- GitHub README
- Hermes docs home/Architecture docs

Explanation:

- External material emphasizes that Hermes is not just a CLI. It combines CLI, TUI, Messaging Gateway, cron, skills, memory, providers, and delegation.

Source verification:

- Verified that multiple entries converge on `AIAgent` and the conversation loop.

Corresponding source evidence:

- [evidence-index.md](./evidence-index.md) `H-001`, `H-003`, `H-004`, `H-013`, `H-014`, `H-015`, `H-016`

### EXT-HA-002: Toolsets Are a Capability Control Plane

Sources:

- Toolsets Reference
- GitHub README documentation index

Explanation:

- External material describes toolsets as bundles controlling tool availability by platform, session, or task.

Source verification:

- Verified `toolsets.py` and `model_tools.py` schema/filter/dispatch logic.

Corresponding source evidence:

- `H-005`, `H-006`, `H-007`

### EXT-HA-003: Plugins Are the Path for Custom Tools, Hooks, and Integrations

Sources:

- Plugins docs

Explanation:

- External material says plugins can register tools, hooks, slash commands, gateway platforms, providers, and related integrations.

Source verification:

- Verified general plugin system, gateway platform registry, provider profile, and memory provider extension surfaces.

Corresponding source evidence:

- `H-008`, `H-010`, `H-011`, `H-012`

### EXT-HA-004: Gateway Default Security Depends on Allowlist / Pairing

Sources:

- Messaging Gateway docs

Explanation:

- External material says Messaging Gateway rejects users not in allowlists or not DM-paired by default.

Source verification:

- Partly verified. This pass mainly verifies Gateway session/delivery and adapter structure; allowlist details still need platform-adapter deep dives.

Corresponding source evidence:

- `H-009`, `INF-004`

### EXT-HA-005: Only One External Memory Provider Is Active at a Time

Sources:

- Memory Providers docs

Explanation:

- External material says built-in memory is always enabled, but only one external provider can be active.

Source verification:

- Verified MemoryManager and MemoryProvider abstractions.

Corresponding source evidence:

- `H-012`

## 5. External/Source Differences

| External Claim | Source Reality | Judgment | Follow-Up |
|---|---|---|---|
| README emphasizes a self-improving learning loop. | This pass verified supporting structures such as skills, memory, session, and search, but did not verify live learning-trigger behavior. | Partly verified | Trace agent-created skills and session-search flow later. |
| Messaging docs emphasize allowlist/pairing security defaults. | Gateway evidence in this pass focuses on message/session/delivery, not per-platform auth details. | Partly verified | Sample Telegram/Discord adapters later. |

## 6. Impact on Research Direction

External material confirms that this pass should preserve focus on:

- Unified runtime from many entries to `AIAgent`
- ToolRegistry + toolset capability control
- Layered plugins, providers, memory, and Gateway Platform extension
- Messaging Gateway session/delivery/safety
- Cron and background delivery
