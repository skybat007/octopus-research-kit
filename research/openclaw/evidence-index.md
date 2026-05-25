# Evidence Index

## 1. 版本信息

本文件也可以理解为 Evidence Log，用于约束关键结论必须有证据。

| 项 | 内容 |
|---|---|
| 代码来源 | `https://github.com/openclaw/openclaw.git` |
| 本地路径 | `/Users/cheng/IdeaProjects/openclaw` |
| branch/tag/commit | branch `main`, commit `989e53c20d395d3c8bf47efc21fdb9d56e7227b0` |
| 调研日期 | 2026-05-25 |

## 2. 证据索引

| 结论编号 | 结论 | 证据类型 | 位置 | 置信度 | 备注 |
|---|---|---|---|---|---|
| C-001 | OpenClaw 定位为 personal AI assistant，Gateway 是 control plane，支持多渠道 | doc fact | `/Users/cheng/IdeaProjects/openclaw/README.md:21-27`, `README.md:146-155` | 高 | 产品定位和 highlights |
| C-002 | package version 为 `2026.5.19`，bin 是 `openclaw.mjs`，workspace 包含 `ui`, `packages/*`, `extensions/*` | source fact | `package.json:2-18`, `pnpm-workspace.yaml:1-5` | 高 | 固定调研快照 |
| C-003 | Core 应保持 plugin-agnostic，插件只能通过 SDK/manifest/runtime helpers/documented barrels 等接入 | source fact | `AGENTS.md:26-45` | 高 | 仓库架构硬约束 |
| C-004 | Gateway 是单一长期运行控制面，控制 WS API、events、nodes、protocol、pairing、安全等 | doc fact | `docs/concepts/architecture.md:8-31`, `docs/concepts/architecture.md:55-96`, `docs/concepts/architecture.md:97-148` | 高 | 仓库概念文档 |
| C-005 | CLI/Gateway 启动链路为 launcher -> entry -> gateway CLI -> lazy server -> server.impl | source fact | `openclaw.mjs:11-46`, `openclaw.mjs:183-225`, `src/entry.ts:71-153`, `src/cli/gateway-cli/run.ts:503-817`, `src/gateway/server.ts:13-29`, `src/gateway/server.impl.ts:531-740` | 高 | 静态代码链路 |
| C-006 | Gateway 创建 HTTP/WS runtime，连接后发送 challenge，第一帧必须 connect，成功后 hello-ok | source fact | `src/gateway/server-runtime-state.ts:223-268`, `src/gateway/server-runtime-state.ts:275-358`, `src/gateway/server/ws-connection.ts:202-318`, `src/gateway/server/ws-connection.ts:433-508`, `src/gateway/server/ws-connection/message-handler.ts:488-560`, `src/gateway/server/ws-connection/message-handler.ts:1696-1756` | 高 | handshake 代码 |
| C-007 | Agent runtime 是 OpenClaw session/workspace/tool/channel 外壳 + Pi agent core；agent loop 包括 intake/context/model/tool/stream/persistence | doc fact | `docs/concepts/agent.md:8-16`, `docs/concepts/agent.md:25-75`, `docs/concepts/agent-loop.md:9-44`, `docs/concepts/agent-loop.md:59-115` | 高 | 概念文档 |
| C-008 | Gateway `agent` RPC 先 ack，再异步调度 `agentCommandFromIngress`，网络入口显式声明 trust | source fact | `src/gateway/server-methods/agent.ts:475-583`, `src/gateway/server-methods/agent.ts:1440-1507`, `src/gateway/server-methods/agent.ts:1592-1666`, `src/agents/agent-command.ts:1593-1643`, `src/agents/command/attempt-execution.ts:630-691` | 高 | agent run 代码链路 |
| C-009 | Sessions、DM isolation、多 Agent workspace/state/auth/session store 是明确模型 | doc fact | `docs/concepts/session.md:10-22`, `docs/concepts/session.md:23-54`, `docs/concepts/session.md:90-97`, `docs/concepts/multi-agent.md:9-19`, `docs/concepts/multi-agent.md:42-63`, `docs/concepts/multi-agent.md:121-129` | 高 | session/multi-agent 文档 |
| C-010 | Plugin system 有 capability model 和四层架构：manifest/discovery、enablement/validation、runtime loading、surface consumption | doc fact | `docs/plugins/architecture.md:32-51`, `docs/plugins/architecture.md:114-146`, `docs/plugins/architecture.md:148-168`, `docs/plugins/manifest.md:28-54`, `docs/plugins/manifest.md:146-170` | 高 | 插件文档 |
| C-011 | `loadOpenClawPlugins` 实现 discovery、manifest registry、registration plan、runtime register、rollback、activation | source fact | `src/plugins/loader.ts:1509-1588`, `src/plugins/loader.ts:1672-1715`, `src/plugins/loader.ts:1760-1904`, `src/plugins/loader.ts:2314-2471`, `src/plugins/loader.ts:2499-2533` | 高 | loader 代码 |
| C-012 | `OpenClawPluginApi` 注册面覆盖 tool/hook/http/channel/gateway/provider/media/session/memory 等能力 | source fact | `src/plugins/api-builder.ts:19-85`, `src/plugins/api-builder.ts:177-260` | 高 | API builder |
| C-013 | Provider plugin 样例：Anthropic manifest 声明 providers/cliBackends/auth/contracts，runtime 注册 CLI backend/provider/media provider | source fact | `extensions/anthropic/openclaw.plugin.json:1-112`, `extensions/anthropic/index.ts:1-10`, `extensions/anthropic/register.runtime.ts:665-667` | 高 | provider plugin 样例 |
| C-014 | Channel plugin 样例：IRC manifest/channel entry/channel plugin 覆盖 setup/config/security/status/outbound | source fact | `extensions/irc/openclaw.plugin.json:1-26`, `extensions/irc/index.ts:1-20`, `extensions/irc/src/channel.ts:170-235`, `extensions/irc/src/channel.ts:236-366` | 高 | channel plugin 样例 |
| C-015 | VISION 强调安全、safe defaults、插件优先、memory slot、terminal-first、TypeScript hackability | doc fact | `VISION.md:15-31`, `VISION.md:41-57`, `VISION.md:59-76`, `VISION.md:92-105` | 高 | 项目设计方向 |
| C-016 | README 安全模型说明默认 main session 工具在宿主机运行，群组/频道建议 sandbox | doc fact | `README.md:132-144`, `README.md:157-162` | 高 | 安全默认说明 |
| C-017 | Plugin hook 类型覆盖模型、prompt、工具、消息、session、gateway、cron 等生命周期 | source/doc fact | `src/plugins/hook-types.ts:68-106`, `docs/concepts/agent-loop.md:89-115` | 高 | hook 清单 |

## 3. 推断链路

| 推断编号 | 依赖证据 | 推断过程 | 待验证点 |
|---|---|---|---|
| INF-001 | C-003, C-010, C-011, C-012 | Core plugin-agnostic + manifest/control-plane + registry/runtime API 共同说明 OpenClaw 的核心扩展思想是 capability ownership，而不是简单 hooks | 需要动态 inspect 一个插件验证 runtime registry 输出 |
| INF-002 | C-004, C-006, C-008 | Gateway 同时管理 WS clients、method registry、agent ack/final/dedupe，说明它是统一控制面和运行协调中心 | 需要启动 Gateway 观察实际 WS frames |
| INF-003 | C-007, C-008, C-009 | Agent runtime 外壳负责 session/workspace/skills/delivery，Pi core 负责模型工具循环，说明 OpenClaw 将产品上下文和 agent core 解耦 | 需要深挖 Pi runtime 事件结构 |
| INF-004 | C-014 | Channel plugin 包含 config/status/security/outbound/gateway start，说明多渠道系统应抽象完整 channel contract，而不是只抽象 send 函数 | 需要对比其它 channel plugin 验证一致性 |

## 4. 待确认

- 是否所有 bundled channel 都遵守类似 IRC 的完整 channel contract。
- Plugin reload/config reload 在 live Gateway 中的实际边界。
- Provider runtime/model fallback/auth profile rotation 的完整链路。
- Control UI 和 companion apps 如何消费 Gateway protocol。

## 5. 外部资料证据补充

| 结论编号 | 结论 | 证据类型 | 可信度等级 | 来源 | 是否已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|---|
| EXT-OC-001 | 官方资料把 Gateway 定义为长期运行控制面，管理消息面、控制客户端、节点、HTTP/WS surface | 官方事实 | A | https://docs.openclaw.ai/architecture | 是 | 高 | 对应 `C-004`, `C-005`, `C-006` |
| EXT-OC-002 | 官方资料将 Agent runtime 分成 OpenClaw-owned layer 与 Pi agent core | 官方事实 | A | https://docs.openclaw.ai/concepts/agent | 部分 | 高 | 对应 `C-007`, `C-008`, `INF-003` |
| EXT-OC-003 | 官方资料强调 plugin capability model 与 manifest/discovery、enablement、runtime loading、surface consumption 分层 | 官方事实 | A | https://docs.openclaw.ai/plugins/architecture | 是 | 高 | 对应 `C-010`, `C-011`, `C-012` |
| EXT-OC-004 | 官方资料说明 session 和 multi-agent 是隔离模型，覆盖 DM/group/cron/webhook 与 agent workspace/state/auth profile | 官方事实 | A | https://docs.openclaw.ai/concepts/session, https://docs.openclaw.ai/concepts/multi-agent | 部分 | 中 | 对应 `C-008`, `C-009` |
