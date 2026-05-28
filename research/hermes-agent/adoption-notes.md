# 学习借鉴笔记

## 1. 直接值得学习的设计

| 设计 | 学习点 | 证据 |
|---|---|---|
| 多入口共享 `AIAgent` | CLI/TUI/Gateway/ACP/cron 不重复实现 Agent loop | [H-003][H-004][H-013][H-015][H-016] |
| 稳定 system prompt | 把 plugin/memory/context 注入当前 user message，减少破坏 prompt caching 的机会 | [H-004] |
| 中央 ToolRegistry | built-in 和 plugin tools 统一 schema/filter/dispatch | [H-005][H-006][H-008] |
| Toolset gating | 控制模型可见工具面，支持按平台/任务场景收敛能力 | [H-006][H-007] |
| Provider Profile | 用 profile 描述模型 Provider 差异，避免污染主循环 | [H-011] |
| Session identity model | 用 `SessionSource`/`SessionContext` 明确平台、chat、thread、user、shared session | [H-009] |
| Profile isolation | CLI 启动前设置 `HERMES_HOME`，cron job 可切 profile 并恢复环境 | [H-003][H-016] |
| TUI JSON-RPC hygiene | stdout 专用于协议，stderr/log 做诊断，长耗时 handler 入线程池 | [H-013] |

## 2. 需要结合上下文理解的设计

| 设计 | 好处 | 需要注意 |
|---|---|---|
| Gateway cached AIAgent | 减少频繁初始化成本 | 配置签名、session 隔离、状态污染需要严格测试 |
| Fail-open plugin hooks | 插件失败不拖垮主流程 | 安全类 hook 不能简单 fail-open，需要单独策略 |
| 一个外部 Memory Provider | 降低多个记忆系统冲突 | 如果需要多记忆源，需要额外合并和优先级模型 |
| Platform plugin 优先内置 adapter | 新平台可通过插件扩展 | Adapter contract 厚，新平台接入成本仍高 |
| cron 复用 Agent | 定时任务可用同一工具/模型/记忆能力 | 非交互运行必须加强 prompt injection 和权限边界 |

## 3. 不宜直接照搬的部分

| 现象 | 原因 |
|---|---|
| 超大 `gateway/run.py` | 真实世界兼容逻辑很多，但学习时应先理解边界和流程，不把大文件当作目标形态 |
| 超大 `hermes_cli/main.py` | CLI 命令、setup、profile、gateway、TUI、doctor 等聚合度高，阅读成本大 |
| 很多平台一次性接入 | 平台越多，认证、配置、session、delivery 和测试矩阵越重 |
| Hook 面过宽 | 强扩展性会带来隐式行为和调试复杂度 |
| 工具默认面过宽 | 模型可见工具太多会影响安全、成本和行为稳定性 |

## 4. 学习路线建议

1. 先读 `run_agent.py`、`agent/agent_init.py`、`agent/conversation_loop.py`，理解 Agent core。
2. 再读 `tools/registry.py`、`model_tools.py`、`toolsets.py`，理解工具能力面。
3. 接着读 `hermes_cli/plugins.py`、`providers/*`、`plugins/memory/*`，理解扩展点分层。
4. 最后读 `gateway/run.py`、`gateway/session.py`、`gateway/platforms/base.py`，理解多平台消息和 session。
5. 如果关注 TUI/ACP/cron，再分别进入 `tui_gateway`、`acp_adapter`、`cron`。

## 5. 可复用思想清单

- 入口适配层只做 transport/UI/platform 差异，Agent loop 统一。
- 工具注册、工具过滤、工具执行走同一条路径。
- Provider 差异通过 profile/hook 描述，不散落在主循环。
- Memory 是可参与 prompt、prefetch、sync、tool schema 的运行时能力。
- Session identity 先建模，再处理消息。
- 本地 Agent 必须把 profile、env、stdout/stderr、日志、文件权限当成架构问题。
- 插件 hook 要有错误隔离，也要有可观测性。

## 6. 待验证问题

- Gateway cached AIAgent 在配置变化、toolset 变化、profile 变化时如何失效。
- plugin hook 的错误日志和用户可见诊断是否足够。
- 各平台 Adapter 是否都遵守相同 session 与 streaming delivery 语义。
- Memory Provider tool schema 与普通 tool schema 冲突时的实际处理。
- TUI prompt submit 与 CLI chat 在 session persistence 上是否完全一致。
