# 源码地图

## 1. 快照信息

| 项 | 内容 |
|---|---|
| 本地路径 | `/Users/cheng/IdeaProjects/hermes-agent` |
| branch | `main` |
| commit | `cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| remote | `https://github.com/NousResearch/hermes-agent.git` |
| 工作区状态 | 存在未跟踪 `.idea/` 与 `tinker-atropos/`，本轮未修改目标仓库 |
| source-inventory | `references/source-inventory.json`，3636 个文件 |

## 2. 入口文件

| 入口 | 文件 | 说明 |
|---|---|---|
| `hermes` wrapper | `/Users/cheng/IdeaProjects/hermes-agent/hermes` | 本地脚本，导入 `hermes_cli.main.main` 执行 CLI |
| Python console script | `/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml` | `hermes`, `hermes-agent`, `hermes-acp` 三个入口 |
| CLI main | `/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py` | argparse 命令树、profile override、startup discovery、chat/gateway/acp/setup 等命令 |
| Chat CLI | `/Users/cheng/IdeaProjects/hermes-agent/cli.py` | 传统交互 CLI，`cmd_chat` 最终导入并调用它 |
| Agent runtime | `/Users/cheng/IdeaProjects/hermes-agent/run_agent.py` | `AIAgent` 门面类，委托到 `agent/*` |
| Conversation loop | `/Users/cheng/IdeaProjects/hermes-agent/agent/conversation_loop.py` | 核心模型调用、工具调用、上下文压缩、hook、持久化循环 |
| Gateway | `/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py` | 多平台消息入口和 delivery runtime |
| TUI gateway | `/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/entry.py`, `/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/server.py` | TUI 前端和 Python agent core 之间的 JSON-RPC bridge |
| ACP adapter | `/Users/cheng/IdeaProjects/hermes-agent/acp_adapter/entry.py` | ACP stdio server 入口 |
| Cron | `/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py`, `/Users/cheng/IdeaProjects/hermes-agent/cron/scheduler.py` | 定时任务存储、解析和执行 |

## 3. 主要目录

| 目录 | 职责 |
|---|---|
| `agent/` | Agent 初始化、主循环、记忆 Provider、上下文、LSP/transport/secret 等运行时支撑 |
| `tools/` | built-in tools、registry、执行环境、MCP tool、浏览器/文件/shell 等工具实现 |
| `hermes_cli/` | CLI 命令、配置、profile、插件发现、slash command、doctor/setup/update 等 |
| `gateway/` | Gateway runner、平台 adapter、session model、platform registry、平台配置 |
| `gateway/platforms/` | 平台 adapter 基类和内置 Telegram/Slack/Discord/WhatsApp/Signal 等实现 |
| `plugins/` | bundled plugins、memory plugins、model provider plugins 等 |
| `providers/` | Provider Profile 基类、发现与注册逻辑 |
| `cron/` | cron job model、scheduler、delivery |
| `tui_gateway/` | TUI bridge server、transport、render、slash worker |
| `ui-tui/` | Ink/Node TUI 前端 |
| `acp_adapter/` | Agent Client Protocol adapter |
| `skills/`, `optional-skills/` | Hermes skill 资源 |
| `tests/` | 大量单元测试/集成测试，覆盖工具、网关、插件、TUI、cron 等 |
| `docs/` | 用户文档和架构/工具/安全/MCP/Memory/Skills 等文档 |

## 4. 核心文件体量

| 文件 | 行数 | 观察 |
|---|---:|---|
| `gateway/run.py` | 18270 | Gateway 聚合了大量平台、session、agent 调度和 delivery 逻辑 |
| `hermes_cli/main.py` | 13817 | CLI 命令树与 startup 流程集中度很高 |
| `run_agent.py` | 4309 | Agent 门面仍然很大，但核心循环已抽到 `agent/conversation_loop.py` |
| `gateway/platforms/base.py` | 3923 | 平台消息模型和 Adapter contract 集中在这里 |
| `hermes_cli/commands.py` | 1819 | slash/native command registry |
| `hermes_cli/plugins.py` | 1593 | 通用插件发现、注册和 hook 执行 |
| `gateway/session.py` | 1348 | session identity、context、store |
| `model_tools.py` | 923 | tool schema 生成和 tool call 分发 |
| `toolsets.py` | 866 | toolset 定义与过滤 |

## 5. 建议阅读顺序

1. `README.md` 与 `pyproject.toml`：确认产品定位、能力表、入口和依赖策略。[H-001][H-002]
2. `hermes_cli/main.py`：看 `main()`、`_apply_profile_override()`、`cmd_chat()`、`_prepare_agent_startup()`，理解 CLI 如何进入运行时。[H-003][H-014]
3. `run_agent.py`：看 `AIAgent` 构造、`run_conversation()` 和 `chat()`，理解 Agent 门面。[H-004]
4. `agent/agent_init.py` 与 `agent/conversation_loop.py`：理解初始化、系统提示词、上下文压缩、工具定义、hook、记忆和结果收尾。[H-004]
5. `tools/registry.py`、`model_tools.py`、`toolsets.py`：理解工具注册、schema 生成、toolset gating、dispatch。[H-005][H-006][H-007]
6. `hermes_cli/plugins.py`、`providers/*`、`plugins/memory/*`、`gateway/platform_registry.py`：理解扩展点分层。[H-008][H-010][H-011][H-012]
7. `gateway/run.py`、`gateway/session.py`、`gateway/platforms/base.py`：理解外部消息如何进入 Agent、如何确定 session、如何投递响应。[H-009]
8. `tui_gateway/entry.py`、`tui_gateway/server.py`、`cron/*`、`acp_adapter/*`：理解非 CLI 入口如何接入同一核心。[H-013][H-015][H-016]

## 6. 需要继续深挖的目录

- `tests/gateway*`、`tests/test_*plugin*`、`tests/test_*cron*`：可以用来验证静态推断。
- `ui-tui/src`：前端状态机和事件消费还未展开。
- `plugins/model-providers/*`：不同 Provider Profile 的真实差异。
- `gateway/platforms/*`：平台 Adapter 的一致性和特殊边界。
- `tools/environments/*`：工具执行沙箱、shell、browser 的运行约束。
