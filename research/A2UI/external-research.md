# External Research

## 本轮策略

本轮未进行实时网络检索。原因是用户指定的是本地源码调研，目标仓库已经包含官方 README、概念文档、规范、SDK、renderer、样例与测试；为了让结论可复现，本报告以固定源码快照为依据。

这意味着以下信息未被覆盖：

- 最新 GitHub issue、PR 讨论和 release notes。
- 仓库外文章、视频、第三方评价或竞品 benchmark。
- 2026-05-28 之后的协议/API 变化。

## 使用的官方资料

| 类型 | 位置 | 用途 |
|---|---|---|
| README | `README.md` | 项目定位、public preview 状态、核心设计哲学、系统流程和路线图 |
| 概念文档 | `docs/introduction/what-is-a2ui.md` | A2UI 问题定义、v0.9 示例、核心价值 |
| 概念文档 | `docs/concepts/data-flow.md` | agent 到 renderer 的数据流和 JSONL 消息模型 |
| 概念文档 | `docs/concepts/components.md` | 扁平组件表、ID 引用、Basic Catalog 概念 |
| 概念文档 | `docs/concepts/data-binding.md` | JSON Pointer 数据绑定、动态列表和双向输入 |
| 概念文档 | `docs/concepts/catalogs.md` | Catalog schema、Basic Catalog、自定义 catalog 和 assembly 工具 |
| 概念文档 | `docs/concepts/actions.md` | Event、Function、checks、data model sync 和 renderer capabilities |
| 参考文档 | `docs/reference/renderers.md` | renderer 职责和维护的 renderer 类型 |
| 规范 | `specification/v0_9/docs/a2ui_protocol.md` | v0.9 协议边界、消息类型、transport contract、A2A/AG UI binding |
| 规范 | `specification/v0_9/json/*.json` | JSON Schema 约束、common types、Basic Catalog schema |

## 外部资料带来的问题

官方资料提出了三组需要源码验证的问题：

1. 文档说 renderer 负责 buffering、lifecycle、data binding 和 actions；需要在 `web_core` 找到真实状态模型和绑定逻辑。
2. 文档说 Catalog 是 schema/组件/函数/theme 的能力边界；需要验证 Basic Catalog 与 React catalog 是否通过统一抽象接入。
3. 文档说 SDK 能校验、修复和转换 A2UI 输出；需要验证 parser、validator、schema manager、toolset、A2A converter 的责任分工。

这些问题在 `architecture.md`、`runtime-flows.md` 和 `key-abstractions.md` 中用源码证据回答。
