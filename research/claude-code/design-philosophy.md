# Design Philosophy

## 1. 模式先行，入口归一

官方文档把 Claude Code 描述为跨 terminal、IDE、desktop、browser 等界面的 agentic coding tool；本地 source snapshot 中，`main()` 在 Commander 之前处理 direct-connect、deep link、assistant、SSH、headless、interactive、client type 等入口差异。[C-003][EXT-CC-001] 这说明 snapshot 倾向把运行模式差异集中在入口层消化，让后面的 query runtime 面对统一的消息、工具和 session 语义。

取舍：入口层会变复杂，但核心 loop 更少被 argv、TTY、远程协议污染。

## 2. Trust 和环境边界前置

`setup()` 与 `renderAndRun()` 把 cwd、terminal、workspace trust、API key、MCP approvals、telemetry、bypass dialog 等放在 REPL 和 query 之前。[C-005] 这体现出一个明确思想：Agent 不是等到工具即将执行时才考虑安全边界，而是在运行上下文建立阶段先决定“这个工作区和当前模式可不可信”。

取舍：启动路径更长，但安全状态更稳定。

## 3. 会话状态和 turn 编排分离

`QueryEngine` 拥有 conversation 级状态，`queryLoop` 负责 turn 内模型、工具、compact、fallback 和 events。[C-007][C-008] 这是一种很适合复杂 Agent 的分工：会话身份、transcript 和 UI 状态不被塞进模型 loop；模型 loop 也不需要管理所有长期状态。

取舍：对象之间传参多，需要清晰的 context contract。

## 4. Tool 是协议对象，不是回调函数

`Tool` contract 包含 schema、权限、并发、只读、破坏性、渲染、MCP、LSP、defer、strict、matcher、prompt 等语义。[C-009] 这说明系统把工具看成“给模型、UI、权限系统、调度器共同消费的协议对象”。

取舍：定义一个 tool 的成本更高，但后续可以被模型、权限、UI、MCP、并发调度统一处理。

## 5. 权限是流水线，不是单点判断

官方 permissions/hooks 文档描述了 rules、modes、PreToolUse、PermissionRequest 等权限控制面；源码里的 tool execution 会依次经过 validation、hooks、permission decision、interactive handler、bridge/remote callback、classifier 和 telemetry。[C-010][EXT-CC-003] Permission context 也有 resolve-once、防重复决策、更新规则和日志记录。[C-010]

取舍：流程长，但可以兼容本地交互、远程会话、自动模式和 hook policy。

## 6. 扩展面分层，而不是全部塞进 plugin

Claude Code 同时存在 Command、Skill、Plugin、MCP、Hook、remote control request 等扩展面。[C-011][C-012][C-015] 这些扩展最终会映射到工具、命令、资源、消息或权限请求，但加载和安全策略不同。

取舍：学习成本更高，但每类扩展可以有更贴近自身风险的边界。

## 7. Prompt-cache 和工具顺序也是架构约束

`tools.ts` 是 built-in tool 的 source of truth，并显式关注 prompt-cache 同步和工具排序稳定性；tool pool 会按 built-in/MCP 等分区稳定排序。[C-009] 这说明 Claude Code 把模型提示的稳定性当成工程约束，而不是后期微调。

取舍：工具注册顺序不能随意漂移，扩展加载需要更细的去重和排序规则。

## 8. 上下文是快照，不是随用随读

`context.ts` 对 git status、CLAUDE.md、当前日期等做 memoization，并限制 git status 文本长度。[C-014] REPL 在 query 前并行加载 system/user context。[C-006]

取舍：减少重复 IO 和 token 波动，但需要清楚缓存何时失效。

## 9. 远程通道复用结构化消息

bridge child CLI、remote CCR session 和 direct-connect 都围绕 stream-json、SDK messages、control_request、permission response 组织。[C-015] 这让本地和远程会话可以共享较多 runtime 语义。

取舍：协议层更重，但 permission、activity、message forwarding 更一致。

## 10. 失败隔离优先于“全链路强一致”

源码中可以看到 settings/policy sync、remote server settings、tool summary、hook、MCP connect、remote persistence 等多处非主流程能力被异步、缓存、重试或 fail-open/fail-soft 处理。[C-004][C-008][C-010][C-012][C-013]

取舍：体验更不容易被外围能力拖垮，但需要日志和 evidence 才能排查边缘问题。
