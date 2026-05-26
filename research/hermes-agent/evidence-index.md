# 证据索引

## 1. 版本信息

本文件也可以理解为 Evidence Log，用于约束关键结论必须有证据。

| 项 | 内容 |
|---|---|
| 代码来源 | `https://github.com/NousResearch/hermes-agent.git` |
| 本地路径 | `/Users/cheng/IdeaProjects/hermes-agent` |
| branch/tag/commit | branch `main`, commit `cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| 调研日期 | 2026-05-25 |

## 2. 证据索引

| 结论编号 | 结论 | 证据类型 | 位置 | 置信度 | 备注 |
|---|---|---|---|---|---|
| <a id="H-001"></a>H-001 | Hermes Agent 定位为 self-improving AI agent，能力包括 TUI、Messaging Gateway、learning loop、cron、delegation、多 backend、research batch 等 | doc fact | `/Users/cheng/IdeaProjects/hermes-agent/README.md:15`, `README.md:19-27`, `README.md:66-78`, `README.md:103-119`, `README.md:123-143` | 高 | README 产品定位和入口 |
| <a id="H-002"></a>H-002 | package 为 `hermes-agent` `0.14.0`，Python `>=3.11`，console scripts 包含 `hermes`, `hermes-agent`, `hermes-acp`，依赖采用 exact-pin/optional extras 策略 | source fact | `/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml:5-12`, `pyproject.toml:13-33`, `pyproject.toml:69-207`, `pyproject.toml:209-212`, `pyproject.toml:226-227` | 高 | 包和依赖策略 |
| <a id="H-003"></a>H-003 | CLI wrapper 进入 `hermes_cli.main.main`，main 支持 profile override、startup discovery、默认 chat command | source fact | `/Users/cheng/IdeaProjects/hermes-agent/hermes:1-11`, `hermes_cli/main.py:183-235`, `hermes_cli/main.py:10758-10799`, `hermes_cli/main.py:10928-10953` | 高 | CLI 入口 |
| <a id="H-004"></a>H-004 | `AIAgent` 是 Agent 门面，初始化委托 `agent_init`，主循环委托 `conversation_loop`；loop 覆盖 prompt caching、context compression、streaming、tool call、session/memory/skill 收尾 | source fact | `/Users/cheng/IdeaProjects/hermes-agent/run_agent.py:326-331`, `run_agent.py:349-470`, `run_agent.py:4053-4078`, `agent/agent_init.py:907-927`, `agent/agent_init.py:966-1179`, `agent/agent_init.py:1414-1505`, `agent/conversation_loop.py:1-15`, `agent/conversation_loop.py:232-317`, `agent/conversation_loop.py:451-570`, `agent/conversation_loop.py:760-878`, `agent/conversation_loop.py:1097-1145`, `agent/conversation_loop.py:3195-3428`, `agent/conversation_loop.py:3889-4165` | 高 | Agent core |
| <a id="H-005"></a>H-005 | `ToolRegistry` 是工具注册和 dispatch 中心，built-in tools 通过 import 自注册，registry 有 generation counter、availability check、override 和 async dispatch | source fact | `/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py:1-15`, `tools/registry.py:57-74`, `tools/registry.py:151-168`, `tools/registry.py:234-306`, `tools/registry.py:337-416` | 高 | 工具注册 |
| <a id="H-006"></a>H-006 | `model_tools.py` 将 registry 转为模型 tool schema，按 toolset/disabled toolset 过滤，并在 `handle_function_call` 中处理 hooks、审批、dispatch 和错误包装 | source fact | `/Users/cheng/IdeaProjects/hermes-agent/model_tools.py:1-21`, `model_tools.py:243-326`, `model_tools.py:329-390`, `model_tools.py:741-899` | 高 | 工具编排 |
| <a id="H-007"></a>H-007 | `toolsets.py` 定义核心工具集合和 toolset，命令 registry 通过 `CommandDef` 支撑 CLI/Gateway/Slack/plugin command | source fact | `/Users/cheng/IdeaProjects/hermes-agent/toolsets.py:29-73`, `toolsets.py:78-240`, `toolsets.py:767-825`, `hermes_cli/commands.py:1-8`, `hermes_cli/commands.py:45-130`, `hermes_cli/commands.py:228-326`, `hermes_cli/commands.py:1030-1089` | 高 | toolset 与命令 |
| <a id="H-008"></a>H-008 | 通用插件系统支持 bundled/user/project/entrypoint 来源，`PluginContext` 可注册工具、CLI/slash command、hook、context engine、provider-like 能力、gateway platform、只读 skill；hook 执行 fail-open | source fact | `/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/plugins.py:1-31`, `plugins.py:128-168`, `plugins.py:180-267`, `plugins.py:287-528`, `plugins.py:531-760`, `plugins.py:820-948`, `plugins.py:1170-1234`, `plugins.py:1296-1409`, `plugins.py:1428-1588` | 高 | 插件控制面 |
| <a id="H-009"></a>H-009 | Gateway 通过 `GatewayRunner`、`MessageEvent`、`BasePlatformAdapter`、`SessionSource`、`SessionContext` 处理多平台消息、session key、cached/fresh AIAgent 和 delivery 去重 | source fact | `/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py:1542-1590`, `gateway/run.py:3652-3725`, `gateway/run.py:6504-6605`, `gateway/run.py:7574-7615`, `gateway/run.py:7630-7668`, `gateway/run.py:7991-8007`, `gateway/run.py:15490-15538`, `gateway/run.py:16337-16403`, `gateway/run.py:16801-16808`, `gateway/run.py:17634-17668`, `gateway/platforms/base.py:999-1103`, `gateway/platforms/base.py:1141-1156`, `gateway/platforms/base.py:1370-1485`, `gateway/session.py:71-179`, `gateway/session.py:579-691`, `gateway/session.py:1313-1348` | 高 | Gateway 运行面 |
| <a id="H-010"></a>H-010 | Gateway platform registry 允许插件平台优先于内置 if/elif 创建 Adapter；ADDING_A_PLATFORM 推荐 plugin path | source fact | `/Users/cheng/IdeaProjects/hermes-agent/gateway/platform_registry.py:1-10`, `platform_registry.py:38-187`, `platform_registry.py:208-240`, `gateway/run.py:5960-6125`, `gateway/platforms/ADDING_A_PLATFORM.md:1-15`, `ADDING_A_PLATFORM.md:17-43`, `ADDING_A_PLATFORM.md:71-115` | 高 | 平台扩展 |
| <a id="H-011"></a>H-011 | Provider Profile 描述 provider 行为，providers lazy discovery 支持 bundled/user/legacy 与 user override bundled，下游接到 auth/models/doctor/config/runtime/transport/run_agent | source fact | `/Users/cheng/IdeaProjects/hermes-agent/providers/base.py:1-9`, `providers/base.py:38-129`, `providers/__init__.py:1-29`, `providers/__init__.py:53-88`, `providers/__init__.py:140-190`, `providers/README.md:29-53` | 高 | 模型 Provider |
| <a id="H-012"></a>H-012 | Memory Provider 有 system prompt、prefetch、sync_turn、tool schemas、tool call 等接口；MemoryManager 只允许一个外部 Provider 并隔离失败 | source fact | `/Users/cheng/IdeaProjects/hermes-agent/agent/memory_provider.py:1-31`, `memory_provider.py:42-137`, `agent/memory_manager.py:244-340`, `plugins/memory/__init__.py:1-20`, `plugins/memory/__init__.py:67-181` | 高 | 记忆系统 |
| <a id="H-013"></a>H-013 | TUI gateway 通过 stdio JSON-RPC 连接 Node/Ink TUI 和 Python Agent，stdout 专用于协议，慢 handler 线程池处理，方法 registry 覆盖 session/prompt/approval/slash/tools/cron/skills/shell/browser | source fact | `/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/entry.py:1-23`, `entry.py:187-240`, `tui_gateway/server.py:37-75`, `server.py:137-180`, `server.py:364-464`, `server.py:2000`, `server.py:2233-2856`, `server.py:3140-3388`, `server.py:3869-3894`, `server.py:5658-6738` | 高 | TUI bridge |
| <a id="H-014"></a>H-014 | `cmd_chat` 处理 resume/continue、first-run setup、TUI 分支、startup env flags，并最终调用 `cli.main(**kwargs)` | source fact | `/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py:1624-1807` | 高 | CLI chat |
| <a id="H-015"></a>H-015 | ACP adapter 保留 stdout 给 JSON-RPC，加载 env，支持 check/setup/setup-browser，启动时 discover MCP tools 并运行 `HermesACPAgent` | source fact | `/Users/cheng/IdeaProjects/hermes-agent/acp_adapter/entry.py:1-14`, `entry.py:75-109`, `entry.py:111-181`, `entry.py:184-260` | 高 | ACP 入口 |
| <a id="H-016"></a>H-016 | Cron jobs 存在 Hermes home 下，scheduler 每 60 秒由 gateway 后台调用，使用文件锁、profile context、toolset resolution、prompt injection scan 和 output/delivery 机制 | source fact | `/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py:1-6`, `cron/jobs.py:37-47`, `cron/jobs.py:137-159`, `cron/jobs.py:187-240`, `cron/scheduler.py:1-9`, `scheduler.py:47-88`, `scheduler.py:90-132`, `scheduler.py:150-240` | 高 | cron |

## 3. 推断链路

| 推断编号 | 依赖证据 | 推断过程 | 待验证点 |
|---|---|---|---|
| <a id="INF-001"></a>INF-001 | H-003, H-004, H-013, H-015, H-016 | 多入口最终都构造或调用 `AIAgent`，说明 Hermes 的核心架构是入口适配层收敛到统一 Agent runtime | 启动 CLI/TUI/Gateway/ACP 各跑一个最小 turn，确认 live behavior |
| <a id="INF-002"></a>INF-002 | H-005, H-006, H-007, H-008 | built-in 和 plugin tools 都进入 ToolRegistry，再由 model_tools/toolsets 统一暴露和执行，说明工具系统是 registry-first | 动态安装一个 plugin tool，观察 schema 和 dispatch |
| <a id="INF-003"></a>INF-003 | H-008, H-010, H-011, H-012 | 通用插件、Provider、Memory、Platform 有不同 contract，说明 Hermes 倾向按问题域分层扩展，而不是单一 hook 模型 | 抽样一个 provider plugin、memory plugin、platform plugin 验证一致性 |
| <a id="INF-004"></a>INF-004 | H-009, H-016 | Gateway 与 cron 都处理 profile/session/delivery/toolset，说明后台和消息入口共享不少运行边界 | 启动 gateway cron tick，观察实际 delivery 和 silent marker |

## 4. 待确认

- `cli.py` 中交互循环的完整 session persistence 细节。
- TUI 前端 `ui-tui` 如何消费 `message.delta` 和 activity events。
- Gateway cached AIAgent 的失效策略。
- 不同 Memory Provider 的实际可用性与失败隔离表现。
- Platform plugin 与 built-in adapter 在配置校验上的一致性。

## 5. 外部资料证据补充

| 结论编号 | 结论 | 证据类型 | 可信度等级 | 来源 | 是否已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|---|
| <a id="EXT-HA-001"></a>EXT-HA-001 | 官方 README/docs 将 Hermes 定位为多入口 self-improving agent，覆盖 CLI/TUI/Gateway/cron/skills/memory/providers | 官方事实 | A | https://github.com/NousResearch/hermes-agent, https://hermes-agent.nousresearch.com/docs/developer-guide/architecture | 是 | 高 | 对应 `H-001`, `H-003`, `H-004`, `H-013`-`H-016` |
| <a id="EXT-HA-002"></a>EXT-HA-002 | 官方 Toolsets 文档将 toolsets 描述为按平台/会话/任务控制工具能力的 bundle | 官方事实 | A | https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference | 是 | 高 | 对应 `H-005`, `H-006`, `H-007` |
| <a id="EXT-HA-003"></a>EXT-HA-003 | 官方 Plugins 文档说明插件可注册 tools、hooks、slash commands、platform/provider 等集成 | 官方事实 | A | https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins | 是 | 高 | 对应 `H-008`, `H-010`, `H-011`, `H-012` |
| <a id="EXT-HA-004"></a>EXT-HA-004 | 官方 Messaging Gateway 文档强调 messaging session、allowlist/pairing、安全默认值和 delivery | 官方事实 | A | https://hermes-agent.nousresearch.com/docs/user-guide/messaging | 部分 | 中 | Gateway 结构已验证，平台安全细节待抽样 |
| <a id="EXT-HA-005"></a>EXT-HA-005 | 官方 Memory Providers 文档说明 built-in memory 始终启用，但外部 provider 一次只激活一个 | 官方事实 | A | https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers | 是 | 高 | 对应 `H-012` |
