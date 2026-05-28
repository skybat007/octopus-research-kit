# Source Map

## 仓库结构概览

源码清单共索引 1968 个文件。按目录看，仓库由样例、renderer、规范、工具和 SDK 构成：

| 目录 | 文件量级 | 职责 |
|---|---:|---|
| `samples/` | 668 | React/client/server 示例、mock messages、end-to-end 集成样例 |
| `renderers/` | 617 | React/Lit/Angular/Flutter renderer 和共享 web_core |
| `specification/` | 271 | v0.8/v0.9/v0.10 协议文档、JSON Schema、Basic Catalog |
| `tools/` | 167 | catalog assembly、验证和辅助工具 |
| `agent_sdks/` | 122 | Python SDK、A2A/ADK 集成、parser/validator/conformance |
| `docs/` | 56 | 用户概念文档、reference、quickstart |
| `eval/` | 19 | 评估相关素材 |

语言分布以 TypeScript/TSX、JSON Schema、Markdown、Python 为主。这和项目形态一致：协议和 catalog 用 JSON Schema 表达，renderer 以 TypeScript 为主，agent SDK 以 Python 为主。

## 关键入口

| 模块 | 入口 | 说明 |
|---|---|---|
| 项目定位 | `README.md` | 定义 A2UI 是 agent 生成 UI 的安全声明式协议与 renderer 生态 |
| v0.9 规范 | `specification/v0_9/docs/a2ui_protocol.md` | server-to-client 消息、transport contract、A2A/AG UI binding |
| v0.9 JSON Schema | `specification/v0_9/json/server_to_client.json` | `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface` schema |
| Basic Catalog | `specification/v0_9/catalogs/basic/catalog.json` | 18 个基础组件与 14 个基础函数的 schema |
| React renderer | `renderers/react/src/v0_9/A2uiSurface.tsx` | React surface 渲染入口，从 root component 开始递归/延迟渲染 |
| React catalog adapter | `renderers/react/src/v0_9/adapter.tsx` | 把 component implementation 接入 GenericBinder |
| Shared core | `renderers/web_core/src/v0_9/processing/message-processor.ts` | 接收 A2UI 消息并维护 surfaces/components/data model |
| Data model | `renderers/web_core/src/v0_9/state/data-model.ts` | JSON Pointer 数据存储、订阅和更新通知 |
| Binding | `renderers/web_core/src/v0_9/rendering/generic-binder.ts` | 根据 schema 把 dynamic/action/child/checkable 字段转成 renderer props |
| Catalog runtime | `renderers/web_core/src/v0_9/catalog/types.ts` | 组件、函数和 theme schema 的运行时抽象 |
| Python parser | `agent_sdks/python/src/a2ui/parser/parser.py` | 从文本中提取 `<a2ui-json>` blocks 并修复 JSON |
| Python validator | `agent_sdks/python/src/a2ui/schema/validator.py` | schema 校验、组件完整性、拓扑、递归和路径验证 |
| Schema manager | `agent_sdks/python/src/a2ui/schema/manager.py` | catalog 选择、schema prompt 生成 |
| ADK toolset | `agent_sdks/python/src/a2ui/adk/send_a2ui_to_client_toolset.py` | 把 A2UI 作为 agent tool 输出并做校验 |
| A2A converter | `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py` | 将 tool/text 中的 A2UI 转换为 A2A DataPart |
| React shell sample | `samples/client/react/shell/src/App.tsx` | 演示 MessageProcessor、A2uiSurface 和 action handler 的客户端组合 |

## 规范层

`specification/v0_9/` 是调研主线。它包含：

- `docs/a2ui_protocol.md`：协议叙述、transport、A2A/AG UI binding、消息序列。
- `json/server_to_client.json`：server-to-client 消息 schema。
- `json/common_types.json`：component id、accessibility、dynamic values、data binding、actions、checks。
- `catalogs/basic/catalog.json`：Basic Catalog 的组件和函数 schema。
- `docs/evolution_guide.md`：v0.8.1 到 v0.9 的迁移，解释 prompt-first、模块化 schema、扁平 discriminator 等变化。

## Renderer 层

`renderers/web_core/src/v0_9/` 是多种 web renderer 共用的核心逻辑：

- `processing/message-processor.ts`：处理消息、创建/删除 surface、更新 components/data model、暴露 client capabilities/data model。
- `state/`：`SurfaceGroupModel`、`SurfaceModel`、`SurfaceComponentsModel`、`ComponentModel`、`DataModel`。
- `rendering/`：`ComponentContext`、`DataContext`、`GenericBinder`。
- `catalog/` 与 `basic_catalog/`：运行时 catalog、组件 API、函数 API 和 Basic Catalog definitions。

`renderers/react/src/v0_9/` 是 React 适配层：

- `A2uiSurface.tsx` 从 `root` component 开始渲染，处理 missing/unknown child。
- `adapter.tsx` 使用 `GenericBinder` 将 component model 绑定成 React props。
- `catalog/basic/` 将 Basic Catalog 映射到 React 组件。

## Agent SDK 层

`agent_sdks/python/src/a2ui/` 把协议约束放进 agent 生成链路：

- `schema/manager.py` 选择 catalog 并生成 system prompt。
- `schema/validator.py` 执行 JSON Schema 和自定义拓扑/路径校验。
- `parser/` 支持文本中 `<a2ui-json>` blocks、JSON 修复、v0.9 streaming parser。
- `adk/` 提供 ADK toolset 和 A2A event/part conversion。
- `a2a/` 提供 A2UI DataPart metadata、extension negotiation 和 streaming parts。

## Tooling 与测试

- `tools/build_catalog/assemble_catalog.py` 支持合并 Basic Catalog、自定义 components/functions/themes，并生成独立 catalog。
- `agent_sdks/conformance/` 定义跨 SDK 的 parser、streaming parser、validator、catalog、schema manager suite。
- `renderers/web_core/src/v0_9/**/*.test.ts` 验证 message processor、data model、generic binder。
- `renderers/react/tests/v0_9/*.test.tsx` 验证 React catalog components 和 integration scenarios。

## 源码阅读建议

最短源码路径：

1. `README.md`
2. `specification/v0_9/docs/a2ui_protocol.md`
3. `specification/v0_9/json/server_to_client.json`
4. `renderers/web_core/src/v0_9/processing/message-processor.ts`
5. `renderers/web_core/src/v0_9/rendering/generic-binder.ts`
6. `renderers/react/src/v0_9/A2uiSurface.tsx`
7. `agent_sdks/python/src/a2ui/schema/validator.py`
8. `samples/client/react/shell/src/App.tsx`
