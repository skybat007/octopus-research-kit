# 核心抽象

## 1. `AIAgent`

位置：`run_agent.py`

`AIAgent` 是 Hermes 的 Agent runtime 门面。它的 docstring 明确说明负责 conversation、tool execution 和 response handling；构造参数覆盖 provider/model/toolsets/callbacks/platform/session 等多个入口都需要的上下文。[H-004]

生命周期：

1. 构造时委托 `agent.agent_init.init_agent` 完成复杂初始化。
2. `run_conversation()` 委托 `agent.conversation_loop.run_conversation`。
3. `chat()` 是一个简化接口，返回 `run_conversation` 的 final response。

设计含义：

- `AIAgent` 不只是 CLI 对象，而是多入口共用的运行单元。
- 大量状态在 init 阶段归一化，降低每个入口重复处理配置和工具的机会。
- 门面仍然很大，说明它承担了向后兼容和参数汇聚的压力。

## 2. `run_conversation`

位置：`agent/conversation_loop.py`

`run_conversation` 是主循环抽象，文件头说明它覆盖模型调用、工具分发、重试、fallback、压缩、hook、memory/skill nudges 等逻辑。[H-004]

关键职责：

- 维护 turn 状态、iteration、tool call 状态和响应累积。
- 在模型调用前稳定构造 system prompt，并注入 memory/context/plugin context。[H-004]
- 优先 streaming，失败时走非 streaming fallback。[H-004]
- 解析和执行 tool call，处理 JSON 修复、校验、guardrail、并发执行和错误结果。[H-004][H-006]
- 收尾保存 trajectory、session、memory sync 和 skill review。[H-004]

设计含义：

- 主循环是 Agent 框架的心脏，入口层都应该尽量只做适配。
- Hermes 把“稳定 prompt caching”当成硬约束，避免中途改变 system prompt/toolset 破坏缓存。

## 3. `ToolRegistry`

位置：`tools/registry.py`

`ToolRegistry` 是工具注册和 dispatch 的中央抽象。built-in tools 通过模块 import 自注册；plugin tools 也通过 `PluginContext.register_tool` 进入同一个 registry。[H-005][H-008]

关键机制：

- `discover_builtin_tools()` 通过导入工具模块触发注册。[H-005]
- Registry 保存 definitions、handlers、check_fn，并维护 generation counter。[H-005]
- `register()` 支持 override 语义，并在变更时 bump generation。[H-005]
- `get_definitions()` 可按可用性检查过滤 tool schema。[H-005]
- `dispatch()` 负责执行 handler、处理 async bridge 和错误包装。[H-005]

设计含义：

- 工具入口统一后，built-in 和 plugin tools 可以复用同一 schema/dispatch 管线。
- generation counter 与 `model_tools` 缓存配合，避免 tool schema 每轮重复构建。[H-006]

## 4. Toolset

位置：`toolsets.py`

Toolset 是“工具能力包”抽象，定义哪些工具默认启用、哪些按平台/场景启用。`model_tools.get_tool_definitions` 会结合 toolsets、disabled toolsets 和 registry generation 生成最终模型 tool schema。[H-006][H-007]

关键点：

- `_HERMES_CORE_TOOLS` 是核心工具集合。[H-007]
- `TOOLSETS` 定义 shell、file、web、memory、gateway 等能力包。[H-007]
- `validate_toolset()` 接受 built-in toolset、plugin toolset 和 registry aliases。[H-007]
- 插件 toolset 会进入同一工具展示和过滤路径。[H-008]

## 5. `CommandDef`

位置：`hermes_cli/commands.py`

`CommandDef` 是 slash/native command 的统一注册结构。CLI、Gateway、Slack native command 和 plugin command 都从中央 registry 派生行为。[H-007][H-008]

设计含义：

- 命令不是散落在多个入口里硬编码，而是先注册为数据结构，再由不同入口消费。
- Gateway 已知命令和 plugin commands 会合并进入可识别命令集合。[H-007]

## 6. `PluginManager` / `PluginContext`

位置：`hermes_cli/plugins.py`

通用插件系统负责发现、加载和执行插件。`PluginContext` 是插件注册能力的入口，支持工具、hook、CLI subcommand、slash command、context engine、gateway platform、provider-like 能力和只读 skill。[H-008]

关键机制：

- 插件来源包括 bundled、user、project、pip entrypoints。[H-008]
- `VALID_HOOKS` 覆盖 tool、LLM/API、session、gateway dispatch、approval 等生命周期。[H-008]
- 插件默认 opt-in，部分 backend/platform 插件可自动加载。[H-008]
- `invoke_hook` 对单个插件失败采取 fail-open，避免扩展拖垮主流程。[H-008]

## 7. `ProviderProfile`

位置：`providers/base.py`

`ProviderProfile` 描述模型 Provider 行为，`AIAgent` 仍负责 client construction 和 streaming。它把 Provider 差异集中到消息准备、extra body、API kwargs 等可覆盖方法上。[H-011]

设计含义：

- Provider 插件不需要复制 Agent loop。
- Provider 行为是 profile 数据和少量 hooks，而不是在主循环里到处写 if/else。

## 8. `MemoryProvider` / `MemoryManager`

位置：`agent/memory_provider.py`, `agent/memory_manager.py`

`MemoryProvider` 是外部长期记忆 Provider 的抽象，包含 availability、initialize、system prompt、prefetch、sync turn、tool schemas 和 tool call 等接口。[H-012]

`MemoryManager` 同时管理内置记忆和最多一个外部 Provider，并把失败隔离在 Provider 边界内。[H-012]

设计含义：

- 记忆不是简单文件读写，而是能参与 prompt、prefetch、tool schema 和 turn sync 的运行时能力。
- “一个外部 Provider”降低了多记忆系统冲突的复杂度。

## 9. `MessageEvent` / `BasePlatformAdapter`

位置：`gateway/platforms/base.py`

Gateway 平台 Adapter 把 Telegram/Slack/Discord/Email/SMS 等差异标准化为 `MessageEvent`，并通过 `BasePlatformAdapter` 提供发送、streaming draft、active session、pending message、TTS 等基础能力。[H-009]

设计含义：

- 平台差异应该停在 Adapter 边界，不进入 Agent core。
- 支持 streaming delivery 需要 Adapter contract 比普通 `send(text)` 更厚。

## 10. `SessionSource` / `SessionContext` / `SessionStore`

位置：`gateway/session.py`

`SessionSource` 表示平台、chat、thread、user、shared multi-user 等来源事实；`SessionContext` 是 gateway 构建出的 Agent 会话上下文；`SessionStore` 默认使用 SQLite，经 fallback JSONL 保存会话映射。[H-009]

设计含义：

- 多平台 Agent 必须先解决 session identity，再谈消息处理。
- Hermes 的 session key 是确定性构造，适合跨平台、群聊、线程、用户级别隔离。
