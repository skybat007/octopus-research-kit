# 证据索引

## 1. 版本信息

本文件也可以理解为 Evidence Log，用于约束关键结论必须有证据。

| 项 | 内容 |
|---|---|
| 代码来源 | `https://github.com/jarmuine/claude-code.git` |
| 本地路径 | `/Users/cheng/IdeaProjects/claude-code` |
| branch/tag/commit | branch `main`, commit `4b9d30f7953273e567a18eb819f4eddd45fcc877` |
| 调研日期 | 2026-05-25 |
| 本轮方法 | 静态源码和仓库文档分析 |

## 2. 证据索引

| 编号 | 结论 | 证据类型 | 位置 | 置信度 | 备注 |
|---|---|---|---|---|---|
| C-001 | 仓库 README 声明这是 Claude Code source snapshot for security research，不是 Anthropic 官方 repo；快照来自 npm distribution 中公开可访问的 source map；README 描述 CLI 用途、公开日期、技术栈和大致规模 | doc fact | `/Users/cheng/IdeaProjects/claude-code/README.md:1-3`, `README.md:23-35`, `README.md:41-49`, `README.md:55-94` | 高 | 快照定位 |
| C-002 | 本地快照为 branch `main`、commit `4b9d30f7953273e567a18eb819f4eddd45fcc877`、remote `https://github.com/jarmuine/claude-code.git`，`src` 约 1902 个文件 | source fact | `git -C /Users/cheng/IdeaProjects/claude-code rev-parse HEAD`, `git -C /Users/cheng/IdeaProjects/claude-code remote get-url origin`, `rg --files /Users/cheng/IdeaProjects/claude-code/src \| wc -l` | 高 | 命令证据 |
| C-003 | `main()` 在 Commander 前处理 Windows 安全环境、warning/SIGINT、direct-connect URL、deep link、assistant command、SSH command、headless 判定、interactive flag、client type 和 eager settings | source fact | `/Users/cheng/IdeaProjects/claude-code/src/main.tsx:585-856` | 高 | 入口模式路由 |
| C-004 | `run()` 创建 Commander program 和 `preAction` init，注册默认命令 options；后续注册 MCP、server、ssh、open、auth、plugin、agents、auto-mode、doctor 等子命令 | source fact | `/Users/cheng/IdeaProjects/claude-code/src/main.tsx:884-1018`, `src/main.tsx:3894-4355` | 高 | 命令 surface |
| C-005 | `setup()` 处理 Node 版本、custom session、UDS messaging、terminal restore、cwd、worktree；`renderAndRun` 周边处理 onboarding、trust、GrowthBook、system context prefetch、MCP approvals、external CLAUDE.md warning、telemetry、API key、bypass dialog 和 auto-mode opt-in | source fact | `/Users/cheng/IdeaProjects/claude-code/src/setup.ts:56-190`, `src/interactiveHelpers.tsx:98-235` | 高 | 运行前边界 |
| C-006 | `replLauncher` 动态加载 `App`/`REPL`；`REPL` 保存交互状态，发起 query 前组装 tool pool、agent tools、system prompt、user/system context，并消费 `query(...)` events | source fact | `/Users/cheng/IdeaProjects/claude-code/src/replLauncher.tsx:12-22`, `src/screens/REPL.tsx:572-630`, `src/screens/REPL.tsx:2382-2420`, `src/screens/REPL.tsx:2768-2820` | 高 | REPL 流程 |
| C-007 | `QueryEngine` 配置覆盖 cwd/tools/commands/MCP/agents/permission/AppState/messages/cache/prompts/model/budget/schema/SDK/abort；`submitMessage` 设置 cwd、persist session、包装 permission callback，并调用 `query(...)`；最终结果包含 API error、duration、turns、stop reason、cost、usage、permission denials 等 | source fact | `/Users/cheng/IdeaProjects/claude-code/src/QueryEngine.ts:130-260`, `src/QueryEngine.ts:657-751`, `src/QueryEngine.ts:1120-1155`, `src/QueryEngine.ts:1179-1295` | 高 | 会话级状态 |
| C-008 | `query()` 委托 `queryLoop`；`queryLoop` 管理 memory prefetch、skill discovery、system context、auto-compact、模型 streaming、tool execution、fallback/retry/error、tool summary、queued commands、tools refresh | source fact | `/Users/cheng/IdeaProjects/claude-code/src/query.ts:219-337`, `src/query.ts:449-708`, `src/query.ts:847-997`, `src/query.ts:1363-1671` | 高 | turn 内编排 |
| C-009 | `ToolPermissionContext`、`ToolUseContext` 和 `Tool` contract 定义工具、权限、上下文、schema、并发、只读、破坏性、渲染、MCP/LSP、strict 等语义；`tools.ts` 组装 built-in/MCP tool pool，做 feature/env gate、deny filter、simple mode、去重和稳定排序 | source fact | `/Users/cheng/IdeaProjects/claude-code/src/Tool.ts:123-260`, `src/Tool.ts:321-540`, `src/Tool.ts:701-792`, `src/tools.ts:158-389` | 高 | Tool 协议 |
| C-010 | tool execution 支持并发安全分组、输入校验、PreToolUse hooks、permission decision、deny/allow path、telemetry、interactive permission、bridge callback、resolve-once 和 persistence | source fact | `/Users/cheng/IdeaProjects/claude-code/src/services/tools/toolOrchestration.ts:1-188`, `src/services/tools/toolExecution.ts:337-456`, `src/services/tools/toolExecution.ts:599-752`, `src/services/tools/toolExecution.ts:795-1225`, `src/hooks/useCanUseTool.tsx:27-182`, `src/hooks/toolPermission/PermissionContext.ts:55-147`, `src/hooks/toolPermission/PermissionContext.ts:216-336`, `src/hooks/toolPermission/handlers/interactiveHandler.ts:43-260` | 高 | 权限和执行 |
| C-011 | Commands/Skills/Plugins 支持内置命令、Skill command、remote/bridge safe command、plugin manifest、plugin command frontmatter、plugin variables、shell command、skill dirs、marketplace name security | source fact | `/Users/cheng/IdeaProjects/claude-code/src/commands.ts:220-600`, `src/commands.ts:626-754`, `src/utils/plugins/pluginLoader.ts:1-33`, `src/utils/plugins/schemas.ts:1-160`, `src/utils/plugins/loadPluginCommands.ts:37-140`, `src/utils/plugins/loadPluginCommands.ts:260-520`, `src/skills/loadSkillsDir.ts:626-820` | 高 | 命令和扩展 |
| C-012 | MCP client 支持 reconnect、工具抓取、工具包装、资源工具、auth needs、local/remote 并发、progress、timeout 和 elicitation retry | source fact | `/Users/cheng/IdeaProjects/claude-code/src/services/mcp/client.ts:1660-1722`, `src/services/mcp/client.ts:1728-1895`, `src/services/mcp/client.ts:2226-2408`, `src/services/mcp/client.ts:3029-3115` | 高 | MCP |
| C-013 | session state 管理 session id、parent、project dir/root；transcript 存储支持路径解析、50MB raw cap、append buffering、metadata、sidechain、UUID dedup、remote persistence | source fact | `/Users/cheng/IdeaProjects/claude-code/src/bootstrap/state.ts:431-531`, `src/utils/sessionStorage.ts:198-230`, `src/utils/sessionStorage.ts:1128-1338`, `src/utils/sessionStorage.ts:1408-1475` | 高 | session 和 transcript |
| C-014 | context 层 memoized 生成 git/user/system context；API client 支持 Direct API、Bedrock、Foundry、Vertex 等环境路径和默认 headers；query deps 注入模型调用和 compact 依赖 | source fact | `/Users/cheng/IdeaProjects/claude-code/src/context.ts:35-189`, `src/services/api/client.ts:1-180`, `src/query/deps.ts:1-40` | 高 | 上下文和模型依赖 |
| C-015 | bridge loop 管理 active sessions、heartbeat、status、cleanup；session spawner 以 headless stream-json 启动 child CLI 并解析 NDJSON；direct-connect 和 remote session 通过 WebSocket/HTTP 传递 SDK messages 与 permission control request | source fact | `/Users/cheng/IdeaProjects/claude-code/src/bridge/bridgeMain.ts:141-220`, `src/bridge/bridgeMain.ts:334-620`, `src/bridge/sessionRunner.ts:248-560`, `src/server/createDirectConnectSession.ts:19-90`, `src/server/directConnectManager.ts:40-135`, `src/remote/RemoteSessionManager.ts:88-335` | 高 | 远程会话通道 |

## 3. 推断链路

| 编号 | 依赖证据 | 推断 | 待验证点 |
|---|---|---|---|
| INF-001 | C-003, C-004, C-006, C-007, C-008 | 多入口最终收敛到 QueryEngine/queryLoop 及结构化消息语义，说明架构中心是 conversation runtime | 用真实 CLI/SDK/remote 各跑一个最小 turn |
| INF-002 | C-009, C-010, C-012 | Tool contract 是内置工具、MCP 工具和权限系统的共同协议层 | 抽样一个 built-in tool 与一个 MCP tool 对比实际 prompt/schema |
| INF-003 | C-011, C-012, C-015 | Skills、Plugins、MCP、remote control request 被分成不同扩展 contract，最终映射到 command/tool/message/permission | 动态加载一个 plugin skill，观察 command/tool pool 变化 |
| INF-004 | C-013, C-015 | transcript 与 remote persistence 是跨本地/远程会话一致性的基础 | 中断 headless session 后检查 transcript 和 remote event 状态 |

## 4. 待确认

- 本地依赖和构建脚本完整性。
- `src/services/api/claude.ts` 中 streaming/fallback/error taxonomy 的完整细节。
- direct-connect server-side 内部实现，因为当前快照缺少部分被入口引用的 server files。
- 各 built-in tool 的具体权限策略和异常处理差异。

## 5. 外部资料证据补充

| 结论编号 | 结论 | 证据类型 | 可信度等级 | 来源 | 是否已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|---|
| EXT-CC-001 | 官方文档将 Claude Code 定位为可在 terminal、IDE、desktop、browser 等界面使用的 agentic coding tool | 官方事实 | A | https://code.claude.com/docs/en/overview, https://code.claude.com/docs/en/how-claude-code-works | 部分 | 高 | 本地 snapshot 只验证 CLI/REPL/headless/remote/bridge/direct-connect client pieces |
| EXT-CC-002 | 官方文档描述 agentic loop：收集上下文、采取行动、验证结果，工具结果反馈下一步决策 | 官方事实 | A | https://code.claude.com/docs/en/how-claude-code-works | 是 | 高 | 对应 `C-006`-`C-010`, `C-013` |
| EXT-CC-003 | 官方权限文档说明 permission rules、modes、deny/ask/allow 优先级和 hooks 共同影响工具授权 | 官方事实 | A | https://code.claude.com/docs/en/permissions, https://code.claude.com/docs/en/hooks | 是 | 高 | 对应 `C-009`, `C-010` |
| EXT-CC-004 | 官方文档将 MCP、Skills、Hooks 作为不同扩展层：外部工具连接、按需知识/流程、生命周期自动化 | 官方事实 | A | https://code.claude.com/docs/en/mcp, https://code.claude.com/docs/en/skills, https://code.claude.com/docs/en/hooks | 是 | 高 | 对应 `C-010`, `C-011`, `C-012` |
| EXT-CC-005 | 官方文档说明 sessions 写入本地 JSONL 并用于 resume/fork/rewind 等语义 | 官方事实 | A | https://code.claude.com/docs/en/how-claude-code-works | 是 | 高 | 对应 `C-013`, `INF-004` |
