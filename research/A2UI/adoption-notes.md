# Adoption Notes

## 适合采用的场景

- Agent 需要生成结构化界面，但产品不能接受执行模型生成代码。
- 前端已有设计系统，希望 agent 只能在设计系统 vocabulary 内组合 UI。
- 需要同一 agent UI 输出在多个客户端或 renderer 中复用。
- 表单、卡片、列表、流程确认、数据查看、轻交互面板等任务型 UI。
- A2A agent 需要在消息中返回可渲染 UI，而不是纯文本。

## 不适合直接采用的场景

- 需要任意复杂前端逻辑、动态图形、游戏、富动画或完全自由布局。
- 需要像浏览器一样渲染任意 HTML/CSS/JS。
- UI 能力尚未稳定、但又要求长期 API 兼容的核心产品路径。
- 无法定义清晰 catalog 或 action policy 的开放式应用。

## 生产落地建议

### 1. 锁定协议版本

以 v0.9 为基础做 PoC，明确所有 payload 带版本。官网 Roadmap 已把 v0.9 标为 current/supported，但 v0.10/v1.0 仍在 draft/规划中；应用层应封装 A2UI version adapter，避免业务代码散落依赖协议细节。

### 2. 定义 Custom Catalog

不要长期依赖 Basic Catalog。生产 catalog 至少应包含：

- 业务组件 schema。
- action event allowlist。
- function allowlist。
- URL/domain policy。
- examples。
- 设计系统 token/theme schema。

### 3. 强化校验链路

在 SDK validator 之外，建议 host 侧增加：

- surface/component 总量限制。
- data model 大小限制。
- action context 敏感字段过滤。
- event/function 权限校验。
- openUrl 等副作用函数策略。
- telemetry 和 rejection reason。

### 4. 明确 DataModel 同步策略

`sendDataModel` 很方便，但也容易误传敏感状态。建议：

- 默认不发送全量 data model。
- 对可发送路径做 allowlist。
- action context 优先只发送必要字段。
- 对用户输入字段做隐私分类。

### 5. 从 React shell sample 改造成 host SDK

可借鉴 `samples/client/react/shell/src/App.tsx`：

- 初始化 `MessageProcessor`。
- 注册 catalogs 和 action handler。
- 对每个 surface 渲染 `<A2uiSurface>`。
- 将 action 发送到 agent。

但生产中要把 demo shell 拆成：

- transport client。
- surface registry。
- action policy。
- error reporting。
- catalog registry。
- renderer host component。

### 6. 建 conformance

如果要扩展多 renderer 或多语言 SDK，优先扩充 `agent_sdks/conformance/` 风格的测试：

- parser cases。
- validator cases。
- catalog selection cases。
- dynamic list binding cases。
- action context cases。
- input round-trip cases。

## 可借鉴的架构模式

- Schema/catalog 驱动 agent UI 能力。
- Client-side renderer 作为安全解释器。
- Data model + JSON Pointer 作为 agent/client 共享状态语言。
- Generic binding layer 隔离协议字段和 UI component props。
- Capabilities handshake 让 agent 按客户端能力生成。
- Validator 不只校验 schema，还校验组件拓扑。

## 主要风险

| 风险 | 影响 | 缓解 |
|---|---|---|
| 协议仍在演进 | API 变化导致 payload/renderer 不兼容 | 锁版本、封 adapter、跟踪 v0.10 |
| Catalog 设计不足 | agent 输出 UI 不符合产品和安全策略 | 先设计 catalog 再接 agent |
| Data model 泄漏 | action 或 sendDataModel 发送敏感信息 | 路径 allowlist、字段脱敏、默认关闭全量同步 |
| Renderer 行为差异 | 多端表现不一致 | conformance + snapshot/integration tests |
| 函数副作用 | openUrl 等能力被滥用 | host policy 和 permission prompt |
| LLM 输出漂移 | 无效 JSON 或拓扑错误 | SDK prompt + parse repair + validator + rejection loop |

## PoC 推荐路径

1. 选一个窄业务场景，例如“订单详情 + 操作确认”。
2. 定义 5-8 个业务组件的 custom catalog。
3. 在 React 中注册 component implementations。
4. 用 Python SDK 生成 system prompt 和 validator。
5. 通过 A2A DataPart 或 SSE 连接 demo agent。
6. 加入 action allowlist 和 data model allowlist。
7. 用 conformance cases 固化期望行为。
