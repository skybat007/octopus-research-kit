# Key Abstractions

## 1. `QueryEngine`

`QueryEngine` 是一次 conversation 的状态拥有者。它的配置包含 cwd、tools、commands、MCP clients、agents、permission callback、AppState getter/setter、initial messages、read cache、prompts、model、fallback、thinking、max turns、budget、schema、SDK status、abort controller 等。[C-007]

关键职责：

- 为每个 `submitMessage()` 创建新的 turn。
- 在 turn 开始时设置 cwd、持久化 session、包装 permission callback。
- 调用 `query(...)` 并消费 streaming events。
- 记录 assistant/user/compact boundary 和 transcript。
- 聚合最终结果、usage、cost、duration、turn count、stop reason、permission denials 等。[C-007]

设计含义：会话级状态集中在一个对象里，turn 内细节交给 `queryLoop`，避免 UI 或 CLI 直接承担模型循环状态。

## 2. `queryLoop`

`queryLoop` 是 turn 内编排器。它接收不可变入参和可变 `State`，启动 budget tracker、memory prefetch、skill discovery prefetch，追加 system context，判断 auto-compact，调用模型 streaming，执行工具，处理 fallback/retry/error，并在每一轮刷新 tools。[C-008]

它的重要边界：

- 模型调用通过 `QueryDeps` 注入，便于隔离 production deps 和测试 deps。[C-014]
- compact、microcompact、fallback、tool execution、hook stop、abort、queued command、attachments 都在 loop 中被串起来。[C-008]
- tool result 和 tool summary 可以流式返回，主 loop 继续控制下一轮模型调用。[C-008]

## 3. `Tool`

`Tool` 不是简单函数。它是一个协议对象，包含：

- identity：`name`、`aliases`、`userFacingName`
- model exposure：`description`、`prompt`、`inputSchema`、`inputJSONSchema`
- execution：`call`、`validateInput`、`maxResultSize`
- permission：`checkPermissions`、`isReadOnly`、`isDestructive`、`needsPermissions`
- scheduling：`isConcurrencySafe`
- UI/render：`renderToolUseMessage`、`renderResultForAssistant`、`renderToolResultMessage`
- integration hints：MCP、LSP、open-world、search、interrupt、defer、strict 等[C-009]

`buildTool` 为未声明的属性提供默认值，其中并发、只读、破坏性等默认偏保守。[C-009]

## 4. `ToolUseContext`

`ToolUseContext` 是工具执行所需的运行时上下文，覆盖 commands、model、tools、MCP clients/resources、non-interactive、agents、budgets、prompts、query source、refreshTools、abort controller、read file state、AppState、elicitation、UI callbacks、notifications、nested memory/skills、SDK status、agent id/type、messages 和限制信息等。[C-009]

设计含义：工具调用不直接从全局对象捞状态，而是通过一个显式 context 获得能力和边界。

## 5. `ToolPermissionContext`

`ToolPermissionContext` 记录权限模式、额外目录、allow/deny/ask rules、bypass、auto-mode、危险规则剥离、是否避免 prompts、自动检查等待策略、pre-plan mode 等。[C-009]

它是 “策略输入”，而不是 “决策结果”。实际决策由 `hasPermissionsToUseTool`、hooks、interactive handler、bridge/remote callbacks 和 classifier 共同完成。[C-010]

## 6. Command And Skill

`commands.ts` 维护内置命令、remote safe command、bridge safe command、availability requirement、dynamic skill commands 和 slash command tool skills。[C-011] `getSkills` 与 `loadSkillsDir` 从 managed/user/project/additional dirs、plugin skills 和 bundled skills 中加载 Skill，并支持 bare 模式下只加载显式 add-dir。[C-011]

设计含义：Skill 被视为 command/tool prompt 资产的一部分，而不是单独的“文档目录”。

## 7. Plugin

plugin loader 负责从 marketplace 和 session-only dirs 发现、加载、校验 plugin；plugin 可以提供 `plugin.json`、commands、agents、hooks 等结构，并处理 manifest validation、duplicate name、enable/disable state 和 error collection。[C-011]

plugin command loader 会把 markdown frontmatter 转成 Command，支持 allowed tools、argument hint/names、when_to_use、version、model、effort、shell、plugin variables、user config、`CLAUDE_SKILL_DIR` 和 `SESSION_ID` 替换。[C-011]

## 8. MCP Tool

MCP client discovery 会连接本地/远程 MCP server，抓取 tools、commands、skills、resources，并把 MCP tool 映射为 Claude Code 的 `Tool` contract。映射时保留 description、schema、readOnly/concurrency/destructive/openWorld hints、permission passthrough、progress 和 timeout。[C-012]

设计含义：MCP 是外部能力来源，但进入 runtime 后仍受统一 Tool 和 permission 语义约束。

## 9. Session And Transcript

`bootstrap/state.ts` 提供 session id、parent session、project dir 和 project root 管理。[C-013] `sessionStorage.ts` 将 transcript 放在 Claude config home 的 project dir 下，支持 append buffering、metadata entries、UUID dedup、sidechain transcript 和 remote persistence。[C-013]

设计含义：session 是 conversation identity，transcript 是可恢复、可同步、可去重的事实记录。

## 10. Remote Session Managers

bridge 使用 child process 跑 headless CLI，并通过 stdin/stdout NDJSON、access token、permission request 和 activity extraction 与外部环境协作。[C-015] `RemoteSessionManager` 通过 WebSocket 接收 CCR 消息、HTTP POST 发送用户消息，并维护 pending permission requests。[C-015] direct-connect manager 则连接 server WebSocket，转发 SDK messages 和 permission control request。[C-015]

这三类通道都复用结构化消息和权限请求，而不是绕开主 runtime。
