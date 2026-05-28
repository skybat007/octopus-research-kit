# Key Abstractions

## Surface

Surface 是一块由 A2UI 驱动的 UI 区域。v0.9 通过 `createSurface` 创建 surface，后续 `updateComponents` 和 `updateDataModel` 都带 `surfaceId`。renderer 侧的 `SurfaceModel` 持有 data model、component model、catalog、theme 和 action dispatch。

关键点：

- `root` 是约定的根 component id。
- surface 可被删除，删除时需要 dispose 组件、data model 和事件订阅。
- `sendDataModel` 控制客户端是否把 data model 回传给 agent。

证据：EVD-007, EVD-008, EVD-017, EVD-018。

## Component

组件在 v0.9 中以扁平列表传输，每个组件有 `id` 和 `component` 类型字段。树结构不靠嵌套 JSON 表达，而靠 child id、children id list、tabs 等引用字段表达。

关键点：

- 扁平结构支持增量更新和 progressive rendering。
- component type 变化时，renderer 会重建 component model。
- Basic Catalog 组件 schema 使用 `unevaluatedProperties: false`，避免模型输出未知字段。

证据：EVD-004, EVD-005, EVD-009, EVD-016。

## DataModel

DataModel 是 surface 内的 JSON 数据源，按 JSON Pointer 读写。它支持：

- 根替换。
- 对象/数组路径写入。
- 删除对象 key 或数组 index。
- exact、ancestor、descendant、root 订阅通知。
- 穿越 primitive 或数组非数字路径时报错。

证据：EVD-011, EVD-019, EVD-033。

## DataContext

DataContext 是 DataModel 的作用域视图。它将相对路径解析到当前 base path，因此 template child 可以绑定到当前 item 的局部字段。

关键点：

- `path` 动态值会解析为 DataModel signal。
- function dynamic value 会按参数 signal 反应式计算。
- action context 会在触发时解析，避免使用过期值。
- setter 可以从 renderer 输入反写 data model。

证据：EVD-020, EVD-021。

## GenericBinder

GenericBinder 是把 component schema 转成 renderer props 的核心抽象。它会先分析 schema 字段，把字段分为 dynamic、action、structural、checkable、static、object、array，然后在 component render 前生成稳定 props snapshot。

这使 renderer component 只需要关心普通 props：

- `Text` 收到字符串。
- `Button` 收到 `action` 函数和 `isValid`。
- `TextField` 收到 value 和 setter。
- list/card/row/column 收到 child refs。

证据：EVD-021, EVD-022, EVD-033。

## Catalog

Catalog 是 A2UI 的能力注册表。它包含：

- component API schema。
- component renderer implementation。
- function API schema。
- function implementation。
- optional theme schema。

`Catalog.invokeFunction` 会先校验函数参数再执行实现，这让 validation/checks/formatting/openUrl 等能力以 schema 化方式开放给 agent。

证据：EVD-013, EVD-024, EVD-025。

## MessageProcessor

MessageProcessor 是客户端消息入口。它处理 message list 或 wrapper，识别 v0.9 消息类型，并调用 SurfaceGroup/Surface/Component/DataModel 更新。

关键点：

- 支持 client capabilities。
- 支持 inline catalog schema generation。
- 支持只回传 `sendDataModel` surface 的 data model。
- 对不合法消息形态发出错误。

证据：EVD-017, EVD-026, EVD-033。

## A2uiSchemaManager

Schema manager 是 Python SDK 侧的 catalog 和 prompt 协调器。它从 supported catalog、inline catalog、默认 catalog 中选择 active catalog，并生成包含工作流、UI 说明、catalog instructions 和 examples 的 system prompt。

证据：EVD-027, EVD-028。

## A2uiValidator

Validator 是生成链路的安全网。除 JSON Schema 外，它还检查：

- catalog 中是否存在 component type。
- root/duplicate/root refs。
- component graph 是否有 cycle、orphan、深度过深。
- path syntax 和 recursion depth。

证据：EVD-030, EVD-033。

## A2A DataPart

A2UI 在 A2A 中被包装为 metadata `mimeType: application/json+a2ui` 的 DataPart。SDK 提供 part converter 和 event converter，从 ADK tool response 或 text tags 中提取 A2UI payload，并隐藏中间 function call。

证据：EVD-029, EVD-031。
