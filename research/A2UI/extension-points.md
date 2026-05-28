# Extension Points

## 1. Custom Catalog

最重要的扩展点是自定义 catalog。Catalog 可以定义：

- 业务组件 schema。
- 组件渲染实现。
- 函数 schema 和实现。
- theme schema。
- examples 和 LLM instructions。

适用场景：

- 把 A2UI 约束到企业设计系统。
- 禁止 agent 使用不符合产品策略的组件或字段。
- 通过 schema 描述业务域组件，例如订单卡片、审批流、数据表、图表。

实现入口：

- 规范 schema：`specification/v0_9/catalogs/basic/catalog.json`
- runtime abstraction：`renderers/web_core/src/v0_9/catalog/types.ts`
- assembly 工具：`tools/build_catalog/assemble_catalog.py`
- SDK catalog config：`agent_sdks/python/src/a2ui/schema/catalog.py`

## 2. Renderer Component Implementations

React renderer 通过 `createComponentImplementation` 和 `GenericBinder` 将 schema 化组件绑定到 React component。新增组件时通常需要：

1. 在 catalog schema 中定义 component properties。
2. 在 renderer 侧实现 React component。
3. 使用 adapter 注册 component implementation。
4. 在 SDK/catalog prompt 中暴露说明和示例。

可借鉴点是：业务 React component 不需要自己处理 JSON Pointer、action context、模板 child list；这些由 `GenericBinder` 完成。

## 3. Function Implementations

函数用于 validation、formatting、local action 等。Basic functions 已包含 required、regex、length、numeric、email、formatString、formatNumber、formatCurrency、formatDate、pluralize、openUrl、and/or/not 等。

扩展函数时需要注意：

- 函数参数通过 schema 校验。
- 函数可能参与 reactive expression，返回值应可预测。
- 有副作用函数如 `openUrl` 需要 host policy 控制，不能只依赖 agent 自律。

## 4. Renderer Capabilities 与 Inline Catalogs

`MessageProcessor.getClientCapabilities()` 可以返回：

- `supportedCatalogIds`
- `inlineCatalogs`

Action 文档也把 capabilities 描述为 agent 了解 renderer 能力的 handshake。Python schema manager 会根据 supported/inline/default catalog 选择 active catalog。这是多客户端、多 catalog 场景的扩展点。

## 5. Transport Binding

A2UI 协议本身不绑定具体 transport。v0.9 规范只要求可靠排序、消息 framing、metadata support 和可选 bidirectional。仓库提供 A2A/AG UI binding 文档与样例 shell；生产系统可以替换为：

- SSE。
- WebSocket。
- A2A DataPart。
- 现有 agent gateway。

关键是保持 message ordering、surfaceId/action metadata 和 data model sync 语义。

## 6. Agent SDK / ADK Toolset

`SendA2uiToClientToolset` 可以作为 ADK agent 的工具集。扩展方式包括：

- 自定义 catalog provider。
- 自定义 examples provider。
- 控制是否启用 A2UI。
- 替换/包裹 part converter。
- 根据会话状态决定 active catalog。

这对多租户、多 UI 能力客户端很关键。

## 7. Validator 与 Conformance

Validator 已经覆盖 schema、组件类型、graph topology、path syntax、recursion depth。生产中可以在此基础上添加：

- 业务字段白名单/黑名单。
- action event allowlist。
- URL/domain allowlist。
- surface/component 数量限制。
- data model 大小限制。
- renderer-specific conformance cases。

`agent_sdks/conformance/` 提供了跨 SDK suite 的雏形，可作为多语言 SDK 对齐的基础。

## 8. Theme

Catalog 支持 theme schema，`createSurface` 可以带 theme。当前调研没有深入各 renderer 的 theme 实现一致性，但从协议和 catalog 抽象看，theme 是将 A2UI 接入品牌系统的自然扩展点。

## 扩展优先级建议

| 优先级 | 扩展点 | 原因 |
|---|---|---|
| P0 | Custom Catalog | 决定可生成 UI 的安全边界和产品一致性 |
| P0 | Validator policy | 防止 agent 输出越权 action、危险 URL、过大 data model |
| P1 | Renderer component set | 将协议映射到真实设计系统 |
| P1 | Capabilities negotiation | 支持多客户端/多版本演进 |
| P2 | Conformance cases | 保证 renderer/SDK 行为一致 |
| P2 | Theme schema | 品牌化和多主题 |
