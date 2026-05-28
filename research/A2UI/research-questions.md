# Research Questions

| ID | 问题 | 状态 | 结论摘要 | 主要证据 |
|---|---|---|---|---|
| RQ-001 | A2UI 的定位是什么？ | 已验证 | A2UI 是 agent 输出声明式 JSON UI、客户端使用本地组件渲染的协议与实现集合。 | EVD-001, EVD-002, EVD-003 |
| RQ-002 | v0.9 的协议对象是什么？ | 已验证 | v0.9 以四类 server-to-client 消息管理 surface、components、data model 和删除生命周期。 | EVD-007, EVD-008, EVD-009 |
| RQ-003 | 为什么组件要扁平化？ | 已验证 | 扁平 adjacency-list 支持 ID 引用、增量更新和 LLM 友好输出。 | EVD-004, EVD-005, EVD-016 |
| RQ-004 | React renderer 的核心逻辑在哪里？ | 已验证 | React 层主要负责组件适配；状态、绑定、action 和 catalog 逻辑主要在 `web_core`。 | EVD-014, EVD-015, EVD-017, EVD-018 |
| RQ-005 | 数据绑定如何工作？ | 已验证 | 使用 JSON Pointer、DataModel、DataContext 和 GenericBinder，把动态值订阅、setter、模板 child list、validation 都绑定到数据模型。 | EVD-011, EVD-019, EVD-020, EVD-021 |
| RQ-006 | 用户交互如何回到 agent？ | 已验证 | action 在 GenericBinder 中变成闭包，解析 context 后由 SurfaceModel 派发 client action，样例 shell 再发送给 agent。 | EVD-012, EVD-022, EVD-023, EVD-031 |
| RQ-007 | Catalog 是什么边界？ | 已验证 | Catalog 同时定义组件 schema、函数 schema/实现和 theme schema；renderer capabilities 可暴露支持的 catalog，SDK 可选择或内联 catalog。 | EVD-013, EVD-024, EVD-025, EVD-026 |
| RQ-008 | Python SDK 是否只是辅助 prompt？ | 已验证 | 不是。它还负责 schema manager、catalog 选择、JSON 修复、校验、ADK toolset、A2A part/event conversion。 | EVD-027, EVD-028, EVD-029, EVD-030 |
| RQ-009 | 现阶段成熟度如何？ | 已验证 | README 标注 public preview/evolving，v0.10 under development；v0.9 是实现和文档的主要稳定面。 | EVD-006, EVD-010, EVD-034 |
| RQ-010 | 生产采纳优先改造什么？ | 推断 | 优先自定义 catalog、增强 validator/conformance、封装 transport/action policy、明确 data model 同步策略。 | EVD-013, EVD-026, EVD-030, EVD-033 |

## 仍需进一步验证

- 不同 renderer 之间的行为一致性需要运行更完整的 conformance 和 UI 测试矩阵。
- v0.10 规范目录已存在，但本轮没有把 v0.10 作为主要目标；如果要跟进未来协议，需要单独做增量调研。
- A2A/AG UI 的真实互操作质量需要接入具体 agent server 与 host client 验证。
