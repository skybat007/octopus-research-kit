# 横向对比

## 1. 本轮对比边界

本文件不是完整横向评测，只基于本轮 Hermes Agent 调研和已完成的 OpenClaw 调研，整理可用于后续同规格对照的维度。当前结论属于架构观察，不代表功能优劣排名。

## 2. 对比维度

| 维度 | Hermes Agent 观察 | 对照时应关注的问题 |
|---|---|---|
| 产品入口 | CLI、TUI、Gateway、ACP、cron 并重，入口最终回到 `AIAgent` | 同类项目是否有统一 runtime，还是每个入口一套逻辑 |
| Agent core | `AIAgent` 门面 + `agent_init` + `conversation_loop` | core 是否与渠道、UI、平台适配解耦 |
| 工具系统 | `ToolRegistry` + `model_tools` + toolsets | 工具是否有统一 schema/filter/dispatch |
| 插件系统 | 通用插件、Provider、Memory、Platform 分层 | 插件是通用 hook 还是按问题域建 contract |
| 多平台消息 | Gateway Adapter + `MessageEvent` + session key | 是否把平台差异封装在 Adapter 边界 |
| 会话身份 | `SessionSource`/`SessionContext` 建确定性 session key | 群聊、线程、用户、平台隔离是否清楚 |
| 模型 Provider | `ProviderProfile` 描述 Provider 行为 | Provider 差异是否污染主循环 |
| 记忆系统 | 内置记忆 + 一个外部 Memory Provider | 记忆是否参与 prompt、prefetch、tool schema 和 turn sync |
| TUI | Node/Ink 前端 + Python JSON-RPC gateway | UI 是否复用 Agent core，是否有清楚传输协议 |
| 定时任务 | cron job storage + scheduler + Agent run + delivery | 后台任务是否复用同一 Agent/tool/profile 体系 |
| 安全/运维 | exact pins、profile isolation、stdout protocol hygiene、prompt injection scan | 运行边界是否被系统性处理 |

## 3. Hermes 与 OpenClaw 的初步观察

| 主题 | Hermes Agent | OpenClaw |
|---|---|---|
| 主要形态 | 本地 AI Agent CLI/TUI/Gateway，多平台个人助手 | 本地优先个人 AI Assistant / Gateway control plane |
| 核心入口 | `AIAgent` + `run_conversation` | Gateway control plane + Agent runtime |
| 扩展思想 | 多种 registry/profile/provider/plugin 分层 | manifest/control-plane 先行，capability ownership 更突出 |
| 消息渠道 | Gateway adapter 支持很多平台，内置 if/elif 与 plugin registry 并存 | Channel/plugin contract 更强调 capability 与 ownership |
| 工具面 | ToolRegistry 和 toolset 非常清晰 | 插件 capability model 更宽，工具只是能力之一 |
| 复杂度分布 | `gateway/run.py`、`hermes_cli/main.py` 边界层很大 | Gateway、plugin loader、protocol/control plane 边界复杂 |

## 4. Hermes 的相对特点

更突出的地方：

- Python Agent loop、tool registry、Provider Profile 和 Memory Provider 的学习路径清楚。
- CLI/TUI/Gateway/ACP/cron 共享 Agent core 的思路非常直观。
- toolset 对模型可见工具的控制比较系统。
- TUI gateway 对 stdout/JSON-RPC 协议洁净度、长耗时 handler、signal 日志有大量工程细节。[H-013]
- cron 对 profile、toolset、prompt injection 和 delivery 的处理体现了本地 Agent 后台任务的现实需求。[H-016]

需要警惕的地方：

- Gateway 和 CLI main 文件体量大，边界层理解成本高。
- 插件入口多，概念上需要先画清楚通用插件、Provider、Memory、Platform 的关系。
- 多平台支持越多，测试矩阵和配置矩阵越复杂。

## 5. 后续可选对比对象

建议选择以下对象之一做同规格调研：

- LangGraph：对比 graph/state machine 与 conversation loop。
- OpenHands：对比软件工程 Agent 的工具/沙箱/任务执行模型。
- Dify：对比平台化 Agent workflow 与插件/工具生态。
- Home Assistant Assist：对比本地多设备/多集成控制面。
- Botpress 或 Rasa：对比对话平台中的渠道 Adapter 和 session 管理。
