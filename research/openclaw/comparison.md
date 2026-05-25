# 横向对比

Status: pending
Last Updated: 2026-05-25

## 1. 本轮状态

本轮没有做横向竞品调研。当前文件保留为后续对比入口，避免在未固定对比对象、未做最新资料核验的情况下给出不可靠结论。

## 2. 建议对比对象

| 对比对象 | 建议对比维度 | 为什么值得比 |
|---|---|---|
| Home Assistant | 本地优先、插件/集成、设备控制、自动化 | 和 OpenClaw 一样强调本地控制面与大量 integration |
| LangGraph | Agent workflow、state、tool/runtime orchestration | 可对比 OpenClaw 的 session/agent loop 与图式编排 |
| Dify | Agent 应用平台、插件、工作流、模型 Provider | 可对比应用平台化和可视化配置 |
| Botpress / Rasa | 多渠道 bot、NLU、conversation state | 可对比 channel/session/routing 设计 |
| Continue / Codex-like harness | 本地 coding agent、tools、workspace、安全 | 可对比 OpenClaw 的 embedded agent runtime 和 workspace contract |

## 3. 推荐对比问题

- OpenClaw 的 Gateway control plane 与 Home Assistant 的 core/integration model 有哪些相似点和差异？
- OpenClaw 的 Agent loop 与 LangGraph 的 graph/state model 在可控性、可观测性、扩展性上如何取舍？
- OpenClaw 的 plugin manifest + runtime registration 与 Dify/Botpress 的插件或 connector 模型有什么不同？
- OpenClaw 的 session/multi-agent isolation 能否借鉴到多租户 ChatOps 或企业智能助手？

## 4. 待补证据

- 需要为每个对比对象固定版本、官方文档和本地/远程源码证据。
- 需要避免只做产品功能列表，应追踪至少一条核心运行链路。
