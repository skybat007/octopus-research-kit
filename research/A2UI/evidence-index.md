# Evidence Index

## 版本与范围

| ID | 结论 | 证据类型 | 来源 | 已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|
| <a id="EVD-001"></a>EVD-001 | A2UI 是面向 agent-generated UI 的开源协议/格式与 renderer 集合。 | README | `README.md:1-6` | 是 | 高 | 项目自述 |
| <a id="EVD-002"></a>EVD-002 | A2UI 的核心模式是 agent 发送声明式 JSON，客户端用原生组件渲染。 | README | `README.md:25-31` | 是 | 高 | 与架构主结论绑定 |
| <a id="EVD-003"></a>EVD-003 | 官方介绍把 A2UI 定义为 agent-driven interface 的声明式 UI protocol，强调 native rendering 和 no arbitrary code。 | 官方文档 | `docs/introduction/what-is-a2ui.md:1-3`, `docs/introduction/what-is-a2ui.md:171-179` | 是 | 高 | 安全定位 |
| <a id="EVD-004"></a>EVD-004 | 组件采用 flat list / adjacency-list 模型，用 ID refs 表达结构。 | 官方文档 | `docs/concepts/components.md:1-18` | 是 | 高 | 解释 LLM/增量友好性 |
| <a id="EVD-005"></a>EVD-005 | v0.9 component 使用 `component` 字符串字段和 child ids。 | 官方文档 | `docs/concepts/components.md:85-137` | 是 | 高 | v0.9 结构 |
| <a id="EVD-006"></a>EVD-006 | README 标注 public preview / evolving，提醒 API 与协议可能变化。 | README | `README.md:12-17` | 是 | 高 | 成熟度判断 |
| <a id="EVD-007"></a>EVD-007 | v0.9 server-to-client 协议包含 `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface`。 | 规范 | `specification/v0_9/docs/a2ui_protocol.md:14-25` | 是 | 高 | 协议核心 |
| <a id="EVD-008"></a>EVD-008 | v0.9 JSON Schema 用 `oneOf` 定义四类 server-to-client message。 | JSON Schema | `specification/v0_9/json/server_to_client.json:1-12` | 是 | 高 | 机器可验证 |
| <a id="EVD-009"></a>EVD-009 | `updateComponents` schema 要求 `surfaceId` 和 component list，component 引用 catalog anyComponent。 | JSON Schema | `specification/v0_9/json/server_to_client.json:48-83` | 是 | 高 | 组件更新 |
| <a id="EVD-010"></a>EVD-010 | v0.10 规范目录存在但标注 under development。 | 规范 | `specification/v0_10/README.md:1-5` | 是 | 高 | 版本演进 |

## 协议与数据模型

| ID | 结论 | 证据类型 | 来源 | 已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|
| <a id="EVD-011"></a>EVD-011 | Data binding 基于 JSON Pointer，支持 UI structure 与 state 分离、动态值和双向输入。 | 官方文档 | `docs/concepts/data-binding.md:1-18`, `docs/concepts/data-binding.md:173-181` | 是 | 高 | 与 DataModel 实现一致 |
| <a id="EVD-012"></a>EVD-012 | action 分为 local Function 与发给 agent 的 Event，checks 主要用于 UX 禁用而非数据完整性。 | 官方文档 | `docs/concepts/actions.md:1-15`, `docs/concepts/actions.md:63-69` | 是 | 高 | action 语义 |
| <a id="EVD-013"></a>EVD-013 | Catalog 定义 components/functions/themes，所有 A2UI JSON 应按选定 catalog 校验；生产可定义自有 catalog。 | 官方文档 | `docs/concepts/catalogs.md:5-9`, `docs/concepts/catalogs.md:70-85` | 是 | 高 | 扩展主入口 |
| <a id="EVD-014"></a>EVD-014 | Renderer 负责解析 adjacency list、映射 widgets、data binding/lifecycle、增量消息和用户 action。 | 官方文档 | `docs/reference/renderers.md:3-9`, `docs/reference/renderers.md:70-78` | 是 | 高 | Renderer 职责 |
| <a id="EVD-015"></a>EVD-015 | React renderer 导出 `A2uiSurface`、adapter 和 Basic Catalog。 | 源码 | `renderers/react/src/v0_9/index.ts:17-21` | 是 | 高 | React 入口 |
| <a id="EVD-016"></a>EVD-016 | Basic Catalog v0.9 提供 Text/Image/Icon/Row/Column/List/Card/Button/TextField 等 18 个基础组件和 14 个函数。 | JSON Schema | `specification/v0_9/catalogs/basic/catalog.json:1-80` | 是 | 中 | 完整列表由 JSON schema 统计 |

## Renderer 实现

| ID | 结论 | 证据类型 | 来源 | 已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|
| <a id="EVD-017"></a>EVD-017 | `MessageProcessor` 持有 `SurfaceGroupModel`，处理 create/update/delete/data model 消息并暴露 capabilities。 | 源码 | `renderers/web_core/src/v0_9/processing/message-processor.ts:45-85`, `renderers/web_core/src/v0_9/processing/message-processor.ts:229-335` | 是 | 高 | 客户端状态入口 |
| <a id="EVD-018"></a>EVD-018 | `SurfaceModel` 聚合 data model、components、catalog、theme、sendDataModel，并统一 dispatch action/error。 | 源码 | `renderers/web_core/src/v0_9/state/surface-model.ts:26-94` | 是 | 高 | surface runtime |
| <a id="EVD-019"></a>EVD-019 | `DataModel` 是 JSON Pointer 可寻址、可订阅的 observable data store，支持 root replace、嵌套创建、删除和路径通知。 | 源码 | `renderers/web_core/src/v0_9/state/data-model.ts:35-39`, `renderers/web_core/src/v0_9/state/data-model.ts:78-170`, `renderers/web_core/src/v0_9/state/data-model.ts:183-280` | 是 | 高 | binding 基础 |
| <a id="EVD-020"></a>EVD-020 | `DataContext` 解析相对/绝对路径、dynamic values、function expressions 和 action context。 | 源码 | `renderers/web_core/src/v0_9/rendering/data-context.ts:28-35`, `renderers/web_core/src/v0_9/rendering/data-context.ts:88-164`, `renderers/web_core/src/v0_9/rendering/data-context.ts:273-367` | 是 | 高 | 动态绑定 |
| <a id="EVD-021"></a>EVD-021 | `GenericBinder` 根据 schema 识别 dynamic/action/structural/checkable/static/object/array，并生成 renderer props。 | 源码 | `renderers/web_core/src/v0_9/rendering/generic-binder.ts:23-92`, `renderers/web_core/src/v0_9/rendering/generic-binder.ts:160-328` | 是 | 高 | renderer 复用核心 |
| <a id="EVD-022"></a>EVD-022 | action 字段在 binder 中变成闭包，触发时解析 context 并 dispatch。 | 源码 | `renderers/web_core/src/v0_9/rendering/generic-binder.ts:243-255` | 是 | 高 | 交互流 |
| <a id="EVD-023"></a>EVD-023 | React Button 实现只接收 bound props，点击调用 `props.action`，`isValid === false` 时 disabled。 | 源码 | `renderers/react/src/v0_9/catalog/basic/components/Button.tsx:22-35` | 是 | 高 | adapter 变薄 |
| <a id="EVD-024"></a>EVD-024 | `Catalog` 运行时包含组件、函数、theme schema，并用 Zod 校验函数参数后执行。 | 源码 | `renderers/web_core/src/v0_9/catalog/types.ts:45-82`, `renderers/web_core/src/v0_9/catalog/types.ts:117-185` | 是 | 高 | catalog runtime |
| <a id="EVD-025"></a>EVD-025 | React Basic Catalog 将 Basic component implementations 与 `BASIC_FUNCTIONS` 注册为 catalog。 | 源码 | `renderers/react/src/v0_9/catalog/basic/index.ts:42-67` | 是 | 高 | React catalog |
| <a id="EVD-026"></a>EVD-026 | Renderer capabilities 支持 `supportedCatalogIds` 和可选 inline catalogs；`getClientDataModel` 只返回 `sendDataModel` surface。 | 源码 | `renderers/web_core/src/v0_9/processing/message-processor.ts:73-201` | 是 | 高 | 能力协商与同步 |

## SDK、A2A 与工具

| ID | 结论 | 证据类型 | 来源 | 已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|
| <a id="EVD-027"></a>EVD-027 | Python parser 从 `<a2ui-json>` tags 提取 payload，并处理 markdown code block。 | 源码 | `agent_sdks/python/src/a2ui/parser/parser.py:22-88` | 是 | 高 | 文本输出兼容 |
| <a id="EVD-028"></a>EVD-028 | `A2uiSchemaManager` 根据 inline/supported/default catalog 选择 active catalog，并生成 system prompt。 | 源码 | `agent_sdks/python/src/a2ui/schema/manager.py:101-236` | 是 | 高 | 生成链路 |
| <a id="EVD-029"></a>EVD-029 | ADK `PartConverter` 可从 tool response、generic tool response 或 text tags 中抽取 A2UI 并转为 A2A parts。 | 源码 | `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:15-20`, `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:79-133` | 是 | 高 | A2A bridge |
| <a id="EVD-030"></a>EVD-030 | `A2uiValidator` 除 JSON Schema 外，还校验 component integrity、topology、recursion 和 path syntax。 | 源码 | `agent_sdks/python/src/a2ui/schema/validator.py:101-126`, `agent_sdks/python/src/a2ui/schema/validator.py:480-603`, `agent_sdks/python/src/a2ui/schema/validator.py:864-907` | 是 | 高 | 输出安全网 |
| <a id="EVD-031"></a>EVD-031 | A2A helper 将 A2UI 包装为 metadata `mimeType: application/json+a2ui` 的 DataPart，并支持 streaming parts。 | 源码 | `agent_sdks/python/src/a2ui/a2a/parts.py:28-64`, `agent_sdks/python/src/a2ui/a2a/parts.py:126-159` | 是 | 高 | transport binding |
| <a id="EVD-032"></a>EVD-032 | `assemble_catalog.py` 可合并/展平 refs，组合 components/functions/themes，并生成 standalone catalog。 | 源码 | `tools/build_catalog/assemble_catalog.py:65-124`, `tools/build_catalog/assemble_catalog.py:197-380` | 是 | 高 | catalog 工具链 |
| <a id="EVD-033"></a>EVD-033 | Conformance 和 renderer tests 覆盖 parser、validator、catalog、schema manager、MessageProcessor、DataModel、GenericBinder、React components。 | 测试 | `agent_sdks/conformance/README.md:1-26`, `renderers/web_core/src/v0_9/processing/message-processor.test.ts:36-481`, `renderers/web_core/src/v0_9/state/data-model.test.ts:74-310`, `renderers/react/tests/v0_9/catalog-components.test.tsx:150-230` | 是 | 高 | 测试支撑 |
| <a id="EVD-034"></a>EVD-034 | React shell sample 创建 MessageProcessor，注册 action handler，处理 mock/real stream 并渲染 `<A2uiSurface>`。 | 样例 | `samples/client/react/shell/src/App.tsx:68-75`, `samples/client/react/shell/src/App.tsx:172-207`, `samples/client/react/shell/src/App.tsx:319-324` | 是 | 高 | 集成示例 |

## 联网资料证据

| ID | 结论 | 证据类型 | 来源 | 已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|
| <a id="EVD-035"></a>EVD-035 | A2UI 官网把项目定义为 agent-driven interfaces 的声明式 UI protocol，强调跨 web/mobile/desktop 原生渲染且不执行任意代码。 | 官方网页 | `https://a2ui.org/introduction/what-is-a2ui/`，retrieved 2026-05-28 | 是 | 高 | 与本地 README/intro 文档一致 |
| <a id="EVD-036"></a>EVD-036 | 官网 v0.9 protocol 页面说明 v0.9 是 JSON-based streaming UI protocol，并定义四类 server-to-client message。 | 官方网页 | `https://a2ui.org/specification/v0.9-a2ui/`，retrieved 2026-05-28 | 是 | 高 | 与本地 `specification/v0_9` 一致 |
| <a id="EVD-037"></a>EVD-037 | 官网 Roadmap 把 v0.9 标为 current、feature complete、supported；v0.10 与 v1.0 为 draft/目标版本。 | 官方网页 | `https://a2ui.org/roadmap/`，retrieved 2026-05-28 | 部分 | 高 | 版本状态口径 |
| <a id="EVD-038"></a>EVD-038 | Roadmap 的 Q2 2026 milestones 包括发布 v0.9 spec、web core/renderers 支持 v0.9、官方 React renderer、Python Agents SDK。 | 官方网页 | `https://a2ui.org/roadmap/`，retrieved 2026-05-28 | 是 | 高 | 与本地源码结构匹配 |
| <a id="EVD-039"></a>EVD-039 | 官网 Renderers Reference 将 renderer 类比 browser，要求支持 adjacency list、data binding/lifecycle、incremental messages、server updates、user actions。 | 官方网页 | `https://a2ui.org/reference/renderers/`，retrieved 2026-05-28 | 是 | 高 | 与 `web_core`/React 分析一致 |
| <a id="EVD-040"></a>EVD-040 | 官网 Client Setup 说明 web renderers 共享 `@a2ui/web_core`，custom catalog 是 agent 与 renderer 的契约。 | 官方网页 | `https://a2ui.org/guides/client-setup/`，retrieved 2026-05-28 | 是 | 高 | 支持 catalog/web_core 主结论 |
| <a id="EVD-041"></a>EVD-041 | 官网 Ecosystem Renderers 列出社区 renderer，并提醒社区 renderer 由各自作者维护、需检查兼容版本和维护状态。 | 官方网页 | `https://a2ui.org/ecosystem/renderers/`，retrieved 2026-05-28 | 不适用 | 中 | 生态背景，不作为实现事实 |
| <a id="EVD-042"></a>EVD-042 | CrewAI 文档把 A2UI 描述为 A2A extension，valid messages 会包装为 `application/json+a2ui` DataPart，并由 client 注入 catalog/instructions 和跟踪 surface state。 | 集成方文档 | `https://docs.crewai.com/en/learn/a2ui`，retrieved 2026-05-28 | 部分 | 中 | 与本地 A2A parts/converter 机制相符，未运行 CrewAI |
| <a id="EVD-043"></a>EVD-043 | CopilotKit 文档称 A2UI 是 Google 牵头的 declarative Generative UI specification，并区分 dynamic schema 与 fixed schema 两种实践路径。 | 集成方文档 | `https://docs.copilotkit.ai/google-adk/generative-ui/a2ui`，retrieved 2026-05-28 | 部分 | 中 | 作为生态/集成背景 |

## 证据完整性说明

- “已源码验证”表示该结论至少被源码、规范、测试或官方文档中的一种固定文件证据支持。
- 关于生产采纳优先级的建议属于工程推断，已尽量绑定到 catalog、validator、capabilities、data model 等源码证据。
- 本轮已补充官网、GitHub 和集成方网络检索；GitHub issue/PR/discussion 未逐条 triage，因此具体社区痛点仍不在本轮结论范围内。
