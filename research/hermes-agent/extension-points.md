# Extension Points

## 1. 扩展点总览

Hermes 的扩展点不是单层插件，而是多个面向不同问题的入口：

| 扩展点 | 入口 | 主要用途 |
|---|---|---|
| Built-in tool | `tools/*.py` + `tools.registry.register` | 内置工具 |
| Plugin tool | `PluginContext.register_tool` | 用户/项目/包插件新增工具 |
| Toolset | `toolsets.py` + plugin toolsets | 按场景组织工具能力 |
| Slash/CLI command | `hermes_cli/commands.py`, `PluginContext.register_slash_command` | 命令面扩展 |
| Hook | `PluginContext.register_hook` | LLM、tool、session、gateway 等生命周期扩展 |
| Provider Profile | `providers/*`, `plugins/model-providers/*` | 模型 Provider 差异 |
| Memory Provider | `plugins/memory/*` | 外部长期记忆 |
| Gateway Platform | `gateway/platform_registry.py` | 新消息平台 |
| Context Engine | `PluginContext.register_context_engine` | 上下文压缩/注入策略 |
| ACP/MCP/Browser/Image/Web providers | plugin/provider registration APIs | 专项能力后端 |

## 2. 工具扩展

Built-in tool 的路径：

1. 新工具模块放在 `tools/`。
2. 模块 import 时调用 `registry.register(...)` 自注册。
3. `discover_builtin_tools()` 导入工具模块触发注册。[H-005]
4. `model_tools.get_tool_definitions()` 从 registry 读取 schema，并受 toolset/disabled toolset 控制。[H-006]
5. 模型产生 tool call 后，`model_tools.handle_function_call()` 走 registry dispatch。[H-006]

Plugin tool 的路径：

1. 插件被 `discover_plugins()` 发现并加载。
2. 插件 `register(ctx)` 调用 `ctx.register_tool(...)`。
3. `PluginContext` 内部委托到 `tools.registry.register`。[H-008]
4. 后续 schema/filter/dispatch 与 built-in tool 共用同一管线。

学习点：

- 工具扩展的关键不是“能注册”，而是注册后必须进入同一缓存、过滤、展示和执行路径。
- Toolset 使工具暴露变成可配置能力，而不是所有工具一律暴露给模型。

## 3. Hook 扩展

`VALID_HOOKS` 覆盖：

- tool 前后：`pre_tool_call`, `post_tool_call`, `transform_tool_result`
- LLM/API 前后：`pre_llm_call`, `post_llm_call`, `pre_api_request`, `post_api_response`
- session 生命周期：session start/end、turn start/end 等
- gateway dispatch、approval 等入口边界。[H-008]

执行特点：

- `invoke_hook` 对单个插件错误 fail-open，主要保证主流程不被扩展失败拖垮。[H-008]
- `pre_tool_call` 支持 block 结果，可用于审批或安全策略。[H-008]
- `conversation_loop` 在模型调用前后、tool call 前后、上下文注入等位置调用 hook。[H-004][H-008]

风险：

- Hook 面太宽会让运行时行为变得隐性，需要强约束和可观测日志。
- Hook 修改 prompt/context/tool result 时，容易影响 prompt caching 和调试。

## 4. Provider Profile

Provider Profile 用于描述模型 Provider 行为，而不是为每个 Provider 复制一套 Agent loop。[H-011]

注册/发现：

- Provider Profile 可以来自 bundled/user plugin dirs。
- `providers.__init__` 做 lazy discovery，支持 user override bundled。[H-011]
- `register_provider` 注册 name/aliases，`get_provider` 和 `list_providers` 触发发现。[H-011]

可扩展行为：

- message preparation
- extra body
- API kwargs extras
- runtime provider metadata
- auth/models/doctor/config/transport 的下游接线说明在 `providers/README.md` 中集中描述。[H-011]

## 5. Memory Provider

Memory Provider 是独立扩展通道，不等同于普通 plugin hook。[H-012]

生命周期：

1. `plugins/memory` 从 bundled 和 user dirs 发现 provider。
2. `agent_init` 根据 `memory.provider` 激活一个外部 provider。
3. Provider 可贡献 system prompt、prefetch、sync_turn、tool schemas 和 tool call handler。
4. `MemoryManager` 与内置记忆共同编排，并隔离 Provider 失败。[H-012]

设计边界：

- 只允许一个外部 memory provider，降低多个长期记忆系统互相覆盖/重复注入的风险。
- Memory tool schemas 会进入 toolset gating 和 dedup 逻辑，不是无条件加入。[H-012]

## 6. Gateway Platform Plugin

Gateway Platform 扩展用于新增消息平台。[H-010]

路径：

1. 插件调用 `register_gateway_platform`。
2. 平台信息进入 `gateway/platform_registry.py`。
3. `GatewayRunner._create_adapter` 优先查询 plugin platform registry。
4. 未命中才回退到内置 if/elif 平台 Adapter。[H-009][H-010]

Platform entry 可描述：

- adapter factory
- env/config requirements
- cron/notification target
- standalone hooks
- config validation。[H-010]

`ADDING_A_PLATFORM.md` 推荐通过 plugin path 新增平台，并列出 built-in adapter 必需方法和关键模式。[H-010]

## 7. Command 扩展

命令扩展分两层：

- 静态命令：`hermes_cli/commands.py` 的 `CommandDef` registry。
- 插件命令：`PluginContext.register_cli_subcommand` 和 `register_slash_command`。[H-007][H-008]

消费方：

- CLI 交互命令。
- Gateway known commands。
- Slack native slash commands。
- TUI `slash.exec` 和命令补全。[H-007][H-013]

设计点：

- 命令作为数据结构能被不同入口共享，避免 CLI/Gateway/TUI 分别维护命令表。

## 8. Context Engine 扩展

`agent_init` 支持 plugin context engine 或 built-in compressor，并把 context engine tool schemas 注入 tool schema，仍受 gating/dedup 控制。[H-004][H-008]

设计点：

- 上下文压缩既是运行时能力，也可能对模型可见，因此需要与 tool schema 管线打通。
- `conversation_loop` 会在 preflight 阶段进行 context compression，并在模型调用前注入 context。[H-004]

## 9. 扩展点取舍

值得学习：

- 把扩展点按问题域拆开：Provider、Memory、Platform 不强塞进同一种插件接口。
- 所有工具最终进入统一 Registry，减少执行路径分叉。
- 插件 hook fail-open，降低扩展故障的系统级影响。
- 平台插件优先于内置 if/elif，使新平台可不动核心路径。

需要谨慎：

- 扩展点过多会提高理解成本。
- Hook 权限边界、加载顺序和冲突处理需要清晰文档。
- Gateway platform 的 Adapter contract 很厚，新增平台学习成本不低。
