# Adoption Notes

## 1. Designs Worth Learning Directly

| Design | Learning Point | Evidence |
|---|---|---|
| Many entries share `AIAgent` | CLI/TUI/Gateway/ACP/cron do not reimplement the Agent loop | [H-003][H-004][H-013][H-015][H-016] |
| Stable system prompt | Inject plugin/memory/context into the current user message to reduce prompt-caching disruption | [H-004] |
| Central ToolRegistry | Built-in and plugin tools share schema/filter/dispatch | [H-005][H-006][H-008] |
| Toolset gating | Controls model-visible tool surface by platform/task scenario | [H-006][H-007] |
| Provider Profile | Describes model-provider differences without polluting the main loop | [H-011] |
| Session identity model | Uses `SessionSource`/`SessionContext` to express platform, chat, thread, user, and shared session | [H-009] |
| Profile isolation | CLI sets `HERMES_HOME` before startup; cron jobs can switch profile and restore environment | [H-003][H-016] |
| TUI JSON-RPC hygiene | stdout is protocol-only; stderr/logs are diagnostics; long-running handlers use a thread pool | [H-013] |

## 2. Designs to Understand With Context

| Design | Benefit | Caution |
|---|---|---|
| Gateway cached AIAgent | Reduces frequent initialization cost | Config signature, session isolation, and state contamination need strict testing |
| Fail-open plugin hooks | Plugin failures do not take down the main flow | Safety hooks cannot simply fail open; they need dedicated policy |
| One external Memory Provider | Reduces conflict among memory systems | Multiple memory sources would need merge and priority models |
| Platform plugin before built-in adapter | New platforms can extend through plugins | Adapter contract is thick, so platform onboarding cost remains high |
| Cron reuses Agent | Scheduled jobs can use the same tool/model/memory capability | Non-interactive runs need stronger prompt-injection and permission boundaries |

## 3. Do Not Copy Blindly

| Phenomenon | Reason |
|---|---|
| Huge `gateway/run.py` | Real-world compatibility logic is large; study boundaries and flow rather than treating the large file as a target form |
| Huge `hermes_cli/main.py` | CLI commands, setup, profile, gateway, TUI, doctor, and more are highly aggregated and costly to read |
| Many platforms integrated at once | More platforms mean heavier auth, config, session, delivery, and test matrices |
| Very broad hook surface | Strong extensibility brings implicit behavior and debugging complexity |
| Broad default tool surface | Too many model-visible tools can affect safety, cost, and behavior stability |

## 4. Suggested Learning Route

1. Read `run_agent.py`, `agent/agent_init.py`, and `agent/conversation_loop.py` first to understand Agent core.
2. Read `tools/registry.py`, `model_tools.py`, and `toolsets.py` to understand the tool capability surface.
3. Read `hermes_cli/plugins.py`, `providers/*`, and `plugins/memory/*` to understand extension layering.
4. Read `gateway/run.py`, `gateway/session.py`, and `gateway/platforms/base.py` to understand multi-platform messaging and sessions.
5. If focused on TUI/ACP/cron, then enter `tui_gateway`, `acp_adapter`, and `cron` separately.

## 5. Reusable Ideas

- Entry adapters handle transport/UI/platform differences; Agent loop stays unified.
- Tool registration, filtering, and execution share one path.
- Provider differences are described through profiles/hooks, not scattered through the main loop.
- Memory is a runtime capability that can participate in prompt, prefetch, sync, and tool schema.
- Model session identity before processing messages.
- Local agents must treat profiles, env, stdout/stderr, logs, and file permissions as architecture concerns.
- Plugin hooks need error isolation and observability.

## 6. Questions Still to Validate

- How Gateway cached `AIAgent` invalidates on config, toolset, or profile changes.
- Whether plugin hook error logs and user-visible diagnostics are sufficient.
- Whether every platform adapter follows the same session and streaming-delivery semantics.
- How Memory Provider tool schema conflicts with ordinary tool schema are handled in practice.
- Whether TUI prompt submit and CLI chat are fully consistent in session persistence.
