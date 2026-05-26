# OpenClaw 技术调研

Status: draft
Owner: cheng / Codex
Last Updated: 2026-05-25

## 调研摘要

OpenClaw 是一个本地优先的个人 AI Assistant / Gateway 项目。它把多渠道消息、设备节点、Agent 运行时、工具、模型 Provider、插件和会话管理统一到一个长期运行的 Gateway 控制平面中；真正的产品定位不是 Gateway 本身，而是“能在用户设备和渠道里做事的个人助手”。[C-001][C-004]

本轮调研固定在本地快照 `/Users/cheng/IdeaProjects/openclaw`，branch `main`，commit `989e53c20d395d3c8bf47efc21fdb9d56e7227b0`。这是第一版架构级调研，重点覆盖 Gateway、Agent runtime、Plugin/capability model、Channel、Session/Multi-agent 和可借鉴设计，不覆盖每个具体渠道、移动端 App、完整 Provider 实现细节。

## 文件导航

| 文件 | 说明 |
|---|---|
| research-brief.md | 调研目标、范围、问题和交付物 |
| external-research.md | 官方资料、协作资料、外部观点和源码验证关系 |
| research-questions.md | 从外部资料生成的源码验证问题 |
| source-map.md | 仓库结构、入口、模块和阅读顺序 |
| architecture.md | 技术架构、模块边界和依赖方向 |
| visual/architecture.html | HTML 可视化结构图，展示 Gateway、Agent Runtime、Plugin Capability 和状态边界 |
| visual/architecture.visual.js | 可视化图数据，承接 Markdown 结论和证据链接 |
| visual/evidence.html | 可点击证据解释页，展示架构语境和源码/文档片段 |
| visual/evidence.visual.js | 从 evidence-index.md 和 architecture.visual.js 抽取的证据解释数据 |
| key-abstractions.md | 核心抽象、接口、数据结构和生命周期 |
| extension-points.md | 插件、Hook、Registry、Provider 等扩展机制 |
| runtime-flows.md | 主流程追踪和关键状态变化 |
| design-philosophy.md | 设计思想和关键取舍 |
| comparison.md | 横向对比占位和后续对比对象 |
| adoption-notes.md | 学习借鉴笔记 |
| evidence-index.md | 证据索引 |
| research-review.md | 调研审查 |

## 当前结论

- OpenClaw 官方文档和本地源码共同指向同一核心：它最值得学习的不是“接了很多聊天渠道”，而是把多渠道接入、Agent 执行、会话、工具、设备节点和插件统一成一个 Gateway control plane。[C-004][EXT-OC-001]
- 插件体系采用“manifest 先于 runtime”的控制面设计：先用 `openclaw.plugin.json` 做身份、能力归属、配置校验和启动规划，再按需加载 runtime 注册能力。[C-010][C-011]
- Agent 运行时是 OpenClaw 自有的 session/workspace/delivery 外壳加 Pi agent core，入口既支持 CLI，也支持 Gateway RPC；网络入口必须显式声明 `senderIsOwner` 和 `allowModelOverride`，这是非常值得借鉴的信任边界设计。[C-007][C-008]
- 会话隔离和多 Agent 路由是产品架构的一等概念，而不是后补功能；DM、群组、cron、webhook、agent workspace、auth profile 都有明确归属。[C-009]
- 对后续学习和单独评估最有价值的思想是：能力归属前置、核心保持 owner-agnostic、运行时热路径携带已解析事实、外部入口信任显式化、插件扩展从“能不能插”升级为“谁拥有这个 capability”。[C-003][C-010]

## 待确认

- 尚未逐一调研所有 bundled plugin 和 channel 的具体实现质量。
- 尚未运行 OpenClaw 本地测试或启动 Gateway，只做了静态源码和仓库文档分析。
- 已补充官方外部资料互证，但尚未采用独立第三方实践文章作为结论依据。
- 横向对比对象待定，建议下一轮选择 Home Assistant、LangGraph、Dify、Botpress 或同类 Agent Gateway 项目之一做对比。
