# Design Philosophy

## 1. Safe Like Data, Expressive Like Code

README 明确把 A2UI 定位为“agent 发送声明式 JSON 意图，客户端使用原生组件库渲染”。这背后的设计哲学是：agent 不执行任意代码，也不直接操控 DOM/native UI，而是输出可校验的数据结构。

源码印证：

- JSON Schema 限制消息和 component fields。
- Catalog 定义可用组件和函数。
- Validator 检查 schema、topology 和 path。
- Renderer 只执行本地注册的 component/function implementation。

## 2. Renderer as Browser, Catalog as DOM/Capability Boundary

官方 renderer 文档把 renderer 类比为 browser：解析消息、管理 lifecycle、渲染 native UI、处理用户交互。A2UI 没有把“浏览器能力”开放给 agent，而是通过 catalog 声明 host 支持的组件和函数。

可借鉴点：做 agent UI 时，不要让 agent 直接选择任意前端代码；应给它一个严格的、业务可审计的 UI vocabulary。

## 3. Prompt-first but Schema-backed

v0.9 evolution guide 说明从 structured-output first 转向 prompt-first，同时 schema 变得更模块化。这是一个现实取舍：LLM 更容易按 prompt examples 生成复杂 UI，但需要更强的 post-generation validation。

该设计不是放弃 schema，而是把 schema 用在：

- prompt 注入。
- catalog instructions。
- tool result validation。
- renderer message validation。
- conformance。

## 4. Flat Graph over Nested Trees

A2UI 选择扁平 component list + ID refs，而不是深层嵌套 JSON。这明显服务于两个目标：

- LLM 生成更稳定：可逐个声明组件，不需要维护复杂括号层级。
- Streaming/patch 更自然：可以先创建 root 或 shell，再逐步填充 children。

该判断由 components 文档、v0.9 protocol 和 renderer `DeferredChild` 的实现共同支持。

## 5. Data Model Is Shared Context, Not Hidden Widget State

Data binding 文档和 `DataModel` 源码显示，A2UI 鼓励把界面状态放进 JSON data model，用 JSON Pointer 绑定 UI。输入组件可以反写 data model，action 可以选择 context 发送给 agent。

这使 agent 和 client 可以围绕同一个 data model 协作，但也带来生产问题：哪些 data 可以回传、何时回传、是否包含敏感信息，都需要 policy。

## 6. Local Functions Are Host-controlled Capability

actions 文档区分 event 和 local function。event 发送给 agent；function 在 renderer 本地执行。Basic functions 中有 validation/formatting，也有 `openUrl`。这表明 A2UI 的函数机制不是让 agent 运行代码，而是让 host 预注册有限能力。

生产采纳时，应把 local function 视为 capability policy，而不是普通工具函数。

## 7. Multi-transport, Multi-renderer Portability

A2UI 不绑定 transport，也不绑定 React。README 和 renderer docs 都强调可通过 A2A、AG UI 或其他 transport 承载，并可映射到 web/flutter 等 host framework。

可借鉴点：协议层只关心有序消息和 metadata；renderer 层关心本地组件；SDK 层关心生成和校验。三者分开后，系统更容易跨客户端扩展。

## 8. Preview-first Evolution

README 标注 v0.8 public preview，代码中又有 v0.9 主实现和 v0.10 under development。项目处在快速演进阶段。对使用方来说，合适的姿势是学习架构与抽象，生产落地时锁定版本并封装兼容层，而不是直接依赖未稳定 API。

## 可以学习的设计原则

- 给 agent 的表达空间要小而清楚。
- UI 生成协议必须和校验器、renderer、测试一起设计。
- 数据绑定、action、validation 应该是协议内的一等概念，而不是散落在前端 glue code 中。
- Catalog 应成为业务设计系统、agent prompt 和 renderer implementation 的共同契约。
- Streaming UI 需要从数据结构上支持增量，而不是只靠 transport 分块。
