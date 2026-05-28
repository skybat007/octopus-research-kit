# 源码地图

Status: draft
Last Updated: 2026-05-25

## 1. 快照信息

| 项 | 内容 |
|---|---|
| 项目标识 | `openclaw` |
| branch | `main` |
| commit | `989e53c20d395d3c8bf47efc21fdb9d56e7227b0` |
| package version | `2026.5.19` |
| package bin | `openclaw -> openclaw.mjs` |
| workspace | `.`, `ui`, `packages/*`, `extensions/*` |
| source-inventory | `references/source-inventory.json`，17990 个文件 |

## 2. 顶层结构

| 路径 | 角色 | 说明 |
|---|---|---|
| `openclaw.mjs` | npm/CLI launcher | 校验 Node 版本，识别 source checkout/package 模式，处理 compile cache respawn。[C-002][C-005] |
| `src/entry.ts` | TS 主入口 | 设置进程环境、profile/container 参数、compile cache，进入 CLI 主流程。[C-005] |
| `src/cli/**` | CLI 命令层 | `gateway`, `agent`, `plugins`, `channels`, `nodes`, `models` 等命令入口。 |
| `src/gateway/**` | Gateway 控制面 | HTTP/WS server、协议、server methods、auth、channel manager、runtime state。 |
| `src/agents/**` | Agent runtime 外壳 | session/workspace/skills/model/delivery 封装，调用 Pi agent core。 |
| `src/plugins/**` | Plugin loader/registry/runtime | 插件发现、manifest registry、加载、API builder、hook runner、runtime facade。 |
| `src/plugin-sdk/**` | 插件公开 SDK | 插件作者可依赖的 public API 和 entry helper。 |
| `src/channels/**` | Channel core implementation | Channel SDK seam 和核心通道能力，不等于具体 bundled plugin。 |
| `extensions/**` | Bundled plugins | 123 个 `openclaw.plugin.json`，包含 provider/channel/tool/hook 等插件。[C-013] |
| `packages/**` | 独立包 | SDK、plugin package contract、memory host SDK 等。 |
| `ui/**` | Control UI | 本轮未深入。 |
| `docs/**` | 仓库文档 | 架构、Agent、Session、Plugin、Gateway protocol 等核心参考。 |
| `apps/**` | Companion apps | 本轮未深入。 |
| `qa/**`, `test/**` | 测试与 QA | 本轮只做静态检索，未跑测试。 |

## 3. 主入口阅读顺序

### 3.1 CLI/Gateway

1. `openclaw.mjs`
   - Node 22.19+ 检查。
   - source checkout 识别。
   - compile cache respawn 策略。
2. `src/entry.ts`
   - 只在 main module 时执行，避免重复启动 Gateway。
   - 设置进程 title、warning filter、env、profile/container。
3. `src/cli/gateway-cli/run.ts`
   - 读取配置、解析端口/bind/auth/tailscale。
   - 动态 import `../../gateway/server.js`。
   - 调用 `startGatewayServer(port, opts)`。
4. `src/gateway/server.ts`
   - 薄 wrapper，懒加载 `server.impl.ts`。
5. `src/gateway/server.impl.ts`
   - 读取配置、准备插件 bootstrap、创建 runtime state、attach WS handlers、启动 sidecars/channels/services。

### 3.2 Gateway WS

1. `src/gateway/server-runtime-state.ts`
   - 创建 HTTP server 和 `WebSocketServer({ noServer: true })`。
   - 在 listen 前 attach upgrade handler，避免连接竞态。[C-006]
2. `src/gateway/server-ws-runtime.ts`
   - 把 runtime state/context 注入 `attachGatewayWsConnectionHandler`。
3. `src/gateway/server/ws-connection.ts`
   - 建立连接、发送 `connect.challenge`、管理 handshake timer、client set、ping、close cleanup。[C-006]
4. `src/gateway/server/ws-connection/message-handler.ts`
   - 第一帧必须是 `req:connect`。
   - 协议版本、origin、auth、device identity、pairing、scope 校验。
   - 成功后返回 `hello-ok`，包含 methods/events discovery metadata。[C-006]

### 3.3 Agent Run

1. `src/gateway/server-methods/agent.ts`
   - 验证请求、解析 session、delivery plan、注册 abort controller。
   - 先返回 accepted ack，再异步调度 `agentCommandFromIngress`。[C-008]
2. `src/agents/agent-command.ts`
   - 网络入口必须显式传入 `senderIsOwner` 和 `allowModelOverride`。
   - 准备 session、skills snapshot、model 选择、delivery。
3. `src/agents/command/attempt-execution.ts`
   - 最终调用 `runEmbeddedPiAgent`，把 session、workspace、model、tools、delivery 等参数传入。[C-008]
4. `src/agents/pi-embedded-runner/**`
   - 内嵌 Pi runtime，执行模型、工具、hook、stream、timeout、persistence。

### 3.4 Plugin System

1. `docs/plugins/architecture.md`
   - 先读 capability model 和四层加载架构。
2. `docs/plugins/manifest.md`
   - 理解 manifest 的 metadata/control-plane 职责。
3. `src/plugins/loader.ts`
   - 插件发现、manifest registry、enable/activation、registration plan、runtime register。
4. `src/plugins/api-builder.ts`
   - OpenClawPluginApi 注册面。
5. `src/plugin-sdk/plugin-entry.ts`
   - `definePluginEntry`，非 channel 插件的 canonical entry helper。
6. `extensions/anthropic/**`, `extensions/irc/**`
   - Provider plugin 与 Channel plugin 样例。

## 4. 建议后续深挖路径

- Provider: `extensions/openai`, `extensions/anthropic`, `src/provider-runtime/**`。
- Channel: `extensions/telegram`, `extensions/slack`, `src/channels/plugins/**`。
- Memory: `extensions/active-memory`, `extensions/memory-lancedb`, `src/memory/**`。
- Protocol: `src/gateway/protocol/**`, `docs/reference/rpc*`。
- Security: `src/gateway/auth.ts`, `src/gateway/server/ws-connection/message-handler.ts`, `docs/gateway/security*`。

## 5. 阅读提醒

- 仓库自身约束明确要求产品/文档使用 `plugin/plugins`，`extensions/` 是内部目录名。[C-003]
- Core 不应直接包含 owner-specific provider/channel policy；应通过 manifest、registry、SDK seam 和 plugin-owned contract 承载。[C-003]
- 由于本轮未跑测试，所有运行行为结论以源码和仓库文档为准，标记为 source/doc fact 或 inference。
