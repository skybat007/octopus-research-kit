# Comparison

Status: pending
Last Updated: 2026-05-25

## 1. Current Status

This pass did not perform comparative product or architecture research. This file remains as a future comparison entry point so the research does not make unreliable claims before fixing comparison targets and checking their latest materials.

## 2. Suggested Comparison Targets

| Target | Suggested Dimensions | Why It Is Worth Comparing |
|---|---|---|
| Home Assistant | Local-first operation, plugins/integrations, device control, automation | Like OpenClaw, it emphasizes a local control plane and many integrations. |
| LangGraph | Agent workflow, state, tool/runtime orchestration | Useful for comparing OpenClaw's session/agent loop with graph-based orchestration. |
| Dify | Agent app platform, plugins, workflows, model providers | Useful for comparing app-platform design and visual configuration. |
| Botpress / Rasa | Multi-channel bots, NLU, conversation state | Useful for comparing channel/session/routing design. |
| Continue / Codex-like harnesses | Local coding agents, tools, workspace, security | Useful for comparing OpenClaw's embedded agent runtime and workspace contract. |

## 3. Recommended Comparison Questions

- How is OpenClaw's Gateway control plane similar to or different from Home Assistant's core/integration model?
- How do OpenClaw's agent loop and LangGraph's graph/state model trade off controllability, observability, and extensibility?
- How is OpenClaw's plugin manifest plus runtime registration different from plugin or connector models in Dify/Botpress?
- Can OpenClaw's session and multi-agent isolation ideas be reused in multi-tenant ChatOps or enterprise assistant systems?

## 4. Evidence Still Needed

- Fix a version, official documentation set, and local/remote source evidence for each comparison target.
- Avoid feature-list comparisons; trace at least one core runtime flow for each target.
