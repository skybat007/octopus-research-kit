# Research Review

## 完成度检查

| 项目 | 状态 | 说明 |
|---|---|---|
| 固定源码版本 | 完成 | `main @ e05dd9699dea21ba832059acb680f71022dd5a77` |
| 生成源码清单 | 完成 | `references/source-inventory.json`，1968 files indexed |
| 官方文档阅读 | 完成 | README、introduction、concepts、reference renderers |
| 规范阅读 | 完成 | v0.9 protocol、server_to_client schema、common_types、Basic Catalog、evolution guide |
| Renderer 源码阅读 | 完成 | React v0.9、web_core message/state/rendering/catalog |
| SDK 源码阅读 | 完成 | Python parser、schema manager、validator、ADK toolset、A2A converters |
| 测试/样例验证 | 完成 | React shell sample、web_core tests、React tests、conformance README |
| 外部网络研究 | 完成 | 已补充官网、GitHub、Roadmap、renderer/client setup、生态 renderer、CrewAI/CopilotKit 集成文档检索 |
| 架构可视化 | 完成 | `visual/architecture.html` |
| Dashboard | 完成 | `dashboard.html`、`docs.html` |
| 调研校验 | 完成 | `node docs/tech-research-guide/scripts/validate-research.js research/A2UI` 返回 OK |

## 质量门

| 检查项 | 结果 |
|---|---|
| 关键结论是否有证据编号 | 通过 |
| 证据是否指向源码/规范/测试/官方文档 | 通过 |
| 是否区分事实与推断 | 基本通过，生产建议已标记为工程推断 |
| 是否避免依赖本机绝对路径 | 通过 |
| 是否覆盖核心流程 | 通过，覆盖生成、transport、message processing、binding、action、SDK/A2A |
| 是否覆盖扩展点 | 通过，覆盖 catalog、renderer、function、capabilities、transport、validator |
| 是否覆盖必要外部资料 | 通过；网络检索已补齐，流程偏差记录见下 |
| 是否覆盖风险 | 通过 |

## 主要残余风险

- 未运行 A2UI 仓库自身完整测试套件；测试证据来自源码阅读。
- GitHub issue/PR/discussion 只做入口和数量级确认，未逐条 triage。
- 不能代表 2026-05-28 之后的最新状态。
- v0.10 未展开源码级调研，只确认其在线/本地文档仍处于 draft 或 under development 口径。
- Flutter/Lit/Angular renderer 未逐行分析，本轮以 React + web_core 为主。

## 流程审查记录

- 初版外部资料调研误用了 skill 中“本地仓库已有官方文档可跳过”的例外，没有按项目级调研指南执行网络检索；现已补做官网、GitHub、Roadmap、renderer/client setup、生态 renderer、CrewAI/CopilotKit 检索。
- 初版 `external-research.md` 曾写入流程修正说明；这类内容与正式资料文档无关，已移至本审查文档。正式外部资料文档只保留检索策略、资料列表、关键观点、源码验证状态、口径差异和资料边界。

## 复核建议

后续若要进入采用决策，建议补充：

1. 运行 A2UI 自身测试矩阵，至少覆盖 `renderers/web_core`、`renderers/react`、`agent_sdks/python`。
2. 用一个业务 custom catalog 做 PoC，验证 SDK prompt、validator、renderer component implementation 的闭环。
3. 对 A2A 实际 server/client 做 end-to-end streaming 测试。
4. 单独追踪 v0.10 与 v0.9 的 schema/API 差异。
