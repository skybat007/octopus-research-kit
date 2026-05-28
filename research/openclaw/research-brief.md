# 调研简报

Status: draft
Last Updated: 2026-05-25

## 1. 研究对象

| 项 | 内容 |
|---|---|
| 名称 | OpenClaw |
| 代码来源 | `https://github.com/openclaw/openclaw.git` |
| 项目标识 | `openclaw` |
| 版本/tag/commit | branch `main`, commit `989e53c20d395d3c8bf47efc21fdb9d56e7227b0`, package version `2026.5.19` |
| 官方文档 | 仓库内 `README.md`, `VISION.md`, `docs/**` |
| 外部资料范围 | OpenClaw 官方 docs.openclaw.ai、GitHub repository、本地仓库 docs；本轮未采用独立第三方文章 |
| 调研日期 | 2026-05-25 |

## 2. 背景和动机

本次调研面向“如何深入理解一个开源技术，并把架构、设计思想转化为后续学习和设计判断素材”。OpenClaw 的价值在于它不是单一聊天机器人，而是一个本地优先、多渠道、多 Agent、多插件、可扩展工具和设备节点的 AI Gateway。它适合用来研究以下问题：

- 一个 AI 助手系统如何组织 Gateway、Agent runtime、工具、会话和消息通道。
- 插件体系如何在“扩展能力”和“核心稳定”之间划边界。
- 多用户/多 Agent/多渠道场景下，如何做会话、权限、安全和 delivery 设计。

## 3. 研究目标

- OBJ-001: 识别 OpenClaw 的核心架构分层、主模块职责和依赖方向。
- OBJ-002: 追踪 Gateway 启动、WebSocket handshake、Agent RPC 到 runtime 执行的关键链路。
- OBJ-003: 提炼插件、Channel、Provider、Hook、Skill、Session 等核心抽象。
- OBJ-004: 提炼值得学习、借鉴和不宜照搬的设计思想。

## 4. 核心研究问题

| 编号 | 问题 | 优先级 | 预期输出 |
|---|---|---|---|
| Q-001 | OpenClaw 的运行时主架构是什么？ | P0 | architecture.md |
| Q-002 | Gateway 如何启动、暴露控制面并接收客户端连接？ | P0 | runtime-flows.md |
| Q-003 | Agent 请求如何从 RPC 进入内嵌 Agent runtime？ | P0 | runtime-flows.md |
| Q-004 | 插件体系如何发现、验证、规划和加载能力？ | P0 | extension-points.md |
| Q-005 | 会话、多 Agent 和安全边界如何组织？ | P1 | key-abstractions.md, architecture.md |
| Q-006 | 哪些设计值得学习、借鉴或不宜照搬？ | P1 | adoption-notes.md |

## 5. 范围

### 5.1 本次研究范围

- CLI/Gateway 启动链路。
- Gateway HTTP/WebSocket 控制面。
- Agent RPC 到 `agentCommandFromIngress`、`runEmbeddedPiAgent` 的链路。
- Plugin manifest、registry、loader、API builder、capability model。
- Channel plugin 和 Provider plugin 的样例。
- Session、多 Agent、workspace、skill 的官方约定。

### 5.2 不做范围

- 不逐个分析 123 个 bundled plugin 的完整实现。
- 不深入移动端 App、UI、Canvas、Voice Wake、Talk Mode 的客户端实现。
- 不运行完整测试集或 Gateway live 验证。
- 不做横向竞品细节对比。

### 5.3 待确认

- 插件运行时热加载和配置 reload 的边界条件需要后续单独验证。
- Provider failover、auth profile rotation、memory plugin 的细节值得继续深挖。
- Gateway protocol 的完整 TypeBox schema 和 Swift codegen 链路未展开。

## 6. 适用场景

- 需要设计 AI Gateway、ChatOps、Agent 平台或多渠道消息系统。
- 需要理解插件能力扩展如何从 ad-hoc hook 演进为 capability registry。
- 需要为多用户、多 Agent、多会话设计隔离模型。
- 需要把本地工具执行、远端消息通道和 Agent runtime 组合到一个控制平面。

## 7. 后续如何用于学习借鉴

- 用 OpenClaw 的 Gateway 模式理解统一控制面的收益、代价和适用边界。
- 用 manifest + registry 的方式理解插件能力归属如何从隐式约定变成显式契约。
- 用 session key、agent workspace、agentDir、auth profile 的隔离模型理解多 Agent 场景的状态边界。
- 用显式信任边界理解本地入口、网络入口和消息渠道之间的权限差异。

## 8. 预期交付物

| 交付物 | 文件 | 说明 |
|---|---|---|
| 外部资料调研 | external-research.md | 官方资料、协作资料、外部观点和源码验证关系 |
| 研究问题 | research-questions.md | 从外部资料生成的源码验证问题 |
| 源码地图 | source-map.md | 仓库结构、入口、阅读顺序 |
| 技术架构 | architecture.md | 分层、模块边界、依赖方向 |
| 核心抽象 | key-abstractions.md | Gateway、Agent、Plugin、Session 等 |
| 扩展点 | extension-points.md | Plugin、Hook、Channel、Provider、Skill |
| 主流程追踪 | runtime-flows.md | Gateway/WS/Agent/plugin load 流程 |
| 设计思想 | design-philosophy.md | 设计原则和取舍 |
| 横向对比 | comparison.md | 本轮只做占位 |
| 学习借鉴 | adoption-notes.md | 可直接学习、需结合语境后借鉴、不建议照搬 |
| 证据索引 | evidence-index.md | 结论到证据映射 |
| 调研审查 | research-review.md | 覆盖度、风险、待补证据 |

## 9. 验收标准

| 编号 | 标准 | 验收方式 |
|---|---|---|
| AC-001 | 关键结论均有源码、文档或测试证据 | 检查 evidence-index.md |
| AC-002 | 至少追踪一条主运行链路 | 检查 runtime-flows.md |
| AC-003 | 外部资料中的关键观点已转成研究问题并记录验证状态 | 检查 external-research.md、research-questions.md |
| AC-004 | 借鉴建议区分可直接学习、需结合语境后借鉴和不建议照搬 | 检查 adoption-notes.md |
