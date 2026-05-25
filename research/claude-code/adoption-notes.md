# 学习借鉴笔记

## 1. 最值得学习的设计

### 会话对象与 turn loop 分离

`QueryEngine` 管会话级状态，`queryLoop` 管单个 turn 的模型/工具编排。[C-007][C-008] 这个分工适合学习复杂 Agent 如何避免 UI、session、模型循环互相缠绕。

学习重点：

- 会话 identity、transcript、read cache、permission denials 应放在会话对象。
- 模型调用、工具调用、compact、fallback 应放在 turn loop。
- 二者之间通过明确的 config/context/event 协议协作。

### Tool contract 承载多方语义

`Tool` 同时服务模型 schema、权限、并发、UI 渲染、MCP、LSP 和结果大小控制。[C-009] 这比单纯 `function call` 更适合复杂工具生态。

学习重点：

- 工具定义时就声明读写风险、并发安全、展示方式和权限策略。
- 工具池组装时做 deny filter、feature gate、去重和稳定排序。
- 外部工具进入系统后也转成统一 Tool 语义。

### 权限决策流水线

tool execution 先 validation，再 hooks，再 permission decision，再执行。[C-010] 交互、远程 callback、classifier、hook 都是可组合的决策来源。

学习重点：

- permission decision 应记录来源和结果。
- 用户交互与远程 permission request 都需要 resolve-once。
- deny path 也要返回结构化结果，便于模型理解下一步。

### 上下文快照与缓存

`context.ts` 对 git status、CLAUDE.md、current date 做 memoization，REPL 在 query 前并行加载上下文。[C-006][C-014]

学习重点：

- 上下文生成需要可控长度和缓存策略。
- query 前统一构造 effective system prompt，减少 turn 内随机 IO。

### 扩展面分层

Command、Skill、Plugin、MCP、Hook、remote control request 各自有 contract，再统一进入 command/tool/message/permission 语义。[C-011][C-012][C-015]

学习重点：

- 不同风险等级的扩展不必强塞进同一种 plugin。
- 外部能力源进入 runtime 后应统一受工具池和权限系统约束。

## 2. 需要谨慎学习的设计

- 大型入口文件可以集中模式路由，但也会提高阅读成本；适合先学“前置归一”的思想，不必照搬文件组织。[C-003][C-004]
- 厚 Tool contract 能力强，但需要完整工具生态支撑；小项目可以先学 schema、permission、readOnly、concurrency 四个核心维度。[C-009]
- 远程/bridge/direct-connect 协议很有参考价值，但涉及认证、session、WebSocket、permission callback 和 child process 管理，应先理解消息语义，再看实现细节。[C-015]
- plugin marketplace name 的安全校验值得学习，但它依赖特定发布和信任模型。[C-011]

## 3. 不宜直接套用的部分

- 非官方 snapshot 中不完整的 server-side direct-connect 实现不能作为完整设计依据。[C-004][C-015]
- 与 Anthropic/Claude 平台强绑定的 API header、OAuth、remote CCR、GrowthBook、policy sync 等不宜脱离生态单独使用。[C-004][C-014][C-015]
- React/Ink 编译后形态较重，学习 UI 状态流即可，不必把组件实现细节作为通用范式。

## 4. 后续可继续深挖的问题

- `src/services/api/claude.ts` 中 streaming、fallback、token limit、error taxonomy 的完整细节。
- Bash、Edit、Read、Write、Agent、Skill 等代表性 built-in tool 的实现差异。
- Plugin hook 与 MCP permission passthrough 在复杂组合下的优先级。
- transcript 与 remote persistence 在异常中断时的恢复行为。
- prompt-cache 稳定排序对工具扩展的实际影响。
