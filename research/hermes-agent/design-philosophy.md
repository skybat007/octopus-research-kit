# Design Philosophy

## 1. 多入口，共用内核

Hermes Agent 最清晰的设计思想是：入口可以很多，但 Agent core 尽量只有一套。官方 README/docs 展示的 CLI、TUI、Gateway、ACP、cron 等能力，在本地源码里都会回到 `AIAgent` 和 `run_conversation`，入口层负责适配输入输出，运行时负责模型、工具、记忆、上下文和持久化。[H-003][H-004][H-013][H-015][H-016][EXT-HA-001]

价值：

- 用户体验可以多样化，但运行时能力一致。
- 工具、记忆、Provider、hook 不需要为每个入口重复实现。
- CLI/TUI/Gateway 行为差异更容易定位在入口层。

代价：

- `AIAgent` 初始化参数很多，入口事实会不断向核心对象汇聚。
- 共享内核要求 session、profile、toolset、system prompt 的稳定性非常高。

## 2. 稳定系统提示词优先

`conversation_loop` 明确构建和恢复 cached system prompt，并把 plugin/memory/context 注入当前 user message，而不是随意改动 system prompt。[H-004]

设计含义：

- Prompt caching 是运行时重要优化，也是一条架构约束。
- 中途修改 system prompt/tool schema 会放大缓存失效和行为不一致风险。
- 扩展点应该尽量有清楚的注入位置，不要任意改写核心 prompt。

## 3. 注册表驱动工具，而不是散落分发

官方 Toolsets 文档将工具能力控制描述为按平台/会话/任务选择工具 bundle；源码里这个设计落在 `ToolRegistry`、`model_tools` 和 `toolsets.py` 上，built-in tools 和 plugin tools 最终都进入 registry，再统一生成 schema、做 toolset 过滤和 dispatch。[H-005][H-006][EXT-HA-002]

设计含义：

- Tool schema、availability、dispatch、error wrapping 有统一路径。
- Plugin tools 能被同一 toolset、UI 和模型调用管线消费。
- generation counter + cache 可以降低 schema 构建成本。

代价：

- 工具模块 import 有副作用，需要约束导入时机。
- Registry 需要处理 override、alias、availability 和缓存一致性。

## 4. 扩展点按问题域分层

Hermes 没有把所有能力都塞进一个插件接口，而是拆成：

- 通用插件：工具、hook、命令、context engine、gateway platform 等。[H-008]
- Provider Profile：模型 Provider 差异。[H-011]
- Memory Provider：长期记忆系统。[H-012]
- Gateway Platform：消息平台 Adapter。[H-010]

价值：

- 每类扩展点都能使用更贴合问题域的 contract。
- Provider 和 Memory 不需要通过脆弱的通用 hook 模拟。
- Gateway platform 可以拥有完整 adapter lifecycle。

代价：

- 新读者需要先理解扩展点地图。
- 插件冲突、加载顺序、启用策略和信任边界需要更强文档支撑。

## 5. Session identity 是多平台 Agent 的基础设施

Gateway 的 `SessionSource`、`SessionContext` 和 session key 构造说明 Hermes 把 session identity 当成一等概念。平台、chat、thread、user、shared multi-user 等事实都进入 session 构造。[H-009]

设计含义：

- 多平台系统不能只按“用户 id”或“chat id”粗暴分流。
- 群聊、线程、私聊、共享会话、平台来源都要进 identity model。
- session key 需要稳定、可解释、可持久化。

## 6. Profile 隔离与可运维性

CLI 在完整 parser 前预解析 profile 并设置 `HERMES_HOME`；cron job 也支持 profile context，运行时会临时切换 Hermes home 和环境变量再恢复。[H-003][H-016]

设计含义：

- 本地优先 Agent 会天然面对多个配置、身份、模型密钥和工作目录。
- profile 应该在最早阶段生效，避免部分模块读错配置。
- 定时任务和后台流程要特别注意环境变量隔离。

## 7. Fail-open 插件 Hook

通用插件 hook 的执行倾向 fail-open，单个插件异常不会直接中断主流程。[H-008]

价值：

- 保证插件生态不会轻易拖垮核心对话。
- 对用户安装的 project/user plugin 更友好。

风险：

- 插件失败如果只被吞掉，会影响可观测性。
- 安全类 hook 是否允许 fail-open 要单独判断，不能一概而论。

## 8. 大入口文件背后的现实取舍

`gateway/run.py` 和 `hermes_cli/main.py` 都非常大。它们承担了大量真实世界的兼容、平台差异、配置、升级、错误恢复和用户体验逻辑。

可以学习的不是“大文件本身”，而是它暴露出的事实：

- 多入口 Agent 的复杂度首先堆在边界层。
- 平台 Adapter、认证、session、streaming delivery 和 agent 调度很难完全隔离。
- 当项目快速支持大量平台时，必须用测试和文档持续压住边界复杂度。

## 9. 总结

Hermes Agent 的核心思想可以概括为：

- 入口多样化，运行时统一。
- 工具注册表化，命令数据化。
- Provider/Memory/Platform 按问题域建 contract。
- 系统提示词稳定性优先。
- 多平台会话先建 identity model。
- 插件失败隔离，但必须保留可观测性。
