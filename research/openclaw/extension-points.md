# Extension Points

Status: draft
Last Updated: 2026-05-25

## 1. 扩展机制总览

OpenClaw 的扩展体系不是单一 Hook，而是多层组合：

| 扩展点 | 形式 | 适合扩展什么 | 证据 |
|---|---|---|---|
| Native plugin manifest | `openclaw.plugin.json` | 插件身份、配置 schema、能力归属、activation hints | [C-010] |
| Plugin runtime entry | `definePluginEntry({ register(api) })` | Provider、tool、command、service、memory、context-engine 等 runtime 行为 | [C-013] |
| Channel plugin entry | `defineBundledChannelEntry` / channel SDK | Messaging channel | [C-014] |
| Plugin capability API | `api.registerProvider`, `api.registerChannel`, `api.registerTool`, etc. | 显式能力注册 | [C-010][C-012] |
| Plugin hooks | `api.on(...)` / hook runner | Agent/Gateway 生命周期拦截 | [C-017] |
| Gateway methods/routes/services | plugin API registrations | 控制面方法、HTTP route、后台服务 | [C-012] |
| Skills/bundles | skill roots / compatible bundles | 指令、MCP servers、settings、commands | [C-007][C-010] |
| Memory slot | `kind: "memory"`, `plugins.slots.memory` | 可替换 memory backend | [C-015] |

## 2. Plugin manifest: 控制面扩展

Manifest 的关键价值是“在 runtime 加载前表达所有 cheap metadata”。仓库文档明确要求每个 native plugin 都有 `openclaw.plugin.json`，用于不执行插件代码的配置校验；它可以声明 id、config schema、channels、providers、cliBackends、contracts、auth choices、model metadata 等。[C-010]

这类设计适合借鉴到任何插件系统：

- 先声明能力归属和配置 contract。
- 再执行 runtime registration。
- 启动计划、诊断、UI 表单、权限提示都基于 metadata。

## 3. Runtime registration: 执行面扩展

`definePluginEntry` 是非 channel 插件的 canonical entry helper。它返回 id/name/description/configSchema/register 等标准形状；Provider、tool、command、service、memory、context-engine 插件都走这条路径。[C-013]

`OpenClawPluginApi` 的注册面很宽，包括：

- tool/hook/http route/channel/gateway method/CLI。
- provider/model catalog/speech/realtime/media/image/video/music/web fetch/web search。
- command/context engine/compaction provider/agent harness。
- session extension/scheduler/action/detached task/memory capability。

这说明 OpenClaw 把插件定位为平台能力单元，而不仅是“命令扩展”。[C-012]

## 4. Capability model

仓库文档把 native plugin capability 明确列为 public model，例如 text inference、CLI backend、speech、realtime、media understanding、image/music/video generation、web fetch/search、channel、gateway discovery。[C-010]

关键取舍：

- 新 bundled/native plugins 优先显式 capability registration。
- legacy hook-only 保持兼容，但不是推荐方向。
- 部分 helper surface 仍在演进，需要 docs 标明稳定性。[C-010]

## 5. Channel plugin

Channel plugin 的样例 IRC 说明了一个成熟消息通道扩展需要包含：

- config adapter 和 env/config 检测。
- setup/setupWizard。
- direct/group capabilities。
- group policy 和 tool policy。
- directory resolver。
- status/probe。
- gateway account start。
- pairing notify。
- security warnings。
- outbound sendText/sendMedia。[C-014]

学习启发是：如果要理解多消息平台接入，不要只看业务层的 `sendXxx` 调用。更关键的是观察“配置、权限、收发、状态、诊断、目录、重载”如何被封装为同一 channel contract。

## 6. Provider plugin

Anthropic 插件样例展示了 provider manifest 与 runtime 注册的分工：

- Manifest 声明 `providers`, `modelSupport`, `providerAuthChoices`, `cliBackends`, `contracts.mediaUnderstandingProviders` 等。[C-013]
- Runtime 通过 `api.registerCliBackend`, `api.registerProvider`, `api.registerMediaUnderstandingProvider` 注册实际能力。[C-013]

这类 owner-owned provider policy 可以避免 core 中充斥具体厂商逻辑。

## 7. Hook points

OpenClaw 的 hook 覆盖模型、prompt、工具、消息、session、subagent、gateway、cron 等生命周期。[C-017] 其中最重要的 Agent loop hooks：

- `before_model_resolve`: 模型/provider 决策前。
- `before_prompt_build`: session messages 载入后、prompt 构建前。
- `before_tool_call` / `after_tool_call`: 工具调用前后。
- `agent_end`: 运行结束后检查最终消息和 metadata。
- `message_received` / `message_sending` / `message_sent`: 消息收发。

设计建议：Hook 适合生命周期拦截，不适合承载稳定能力 ownership。稳定能力更适合 manifest + capability registration。

## 8. 扩展点借鉴优先级

| 优先级 | 可借鉴点 | 原因 |
|---|---|---|
| P0 | Manifest + runtime registration 分离 | 能把诊断、配置、UI、启动规划从运行时代码中解耦 |
| P0 | Capability registry | 能减少核心硬编码 owner 分支 |
| P1 | Channel plugin 完整 contract | 多渠道系统非常需要统一收发、安全、状态、配置 |
| P1 | Network ingress trust explicit | 防止网络入口继承本地 CLI 信任 |
| P2 | Hook system | 强大但需要治理，否则容易演化成隐式业务总线 |
