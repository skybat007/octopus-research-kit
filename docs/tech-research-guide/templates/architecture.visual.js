window.ARCHITECTURE_META = {
  title: '<框架名称> 可视化架构图',
  description: '本图只展示 architecture.md、runtime-flows.md、source-map.md 和 evidence-index.md 中已经沉淀的结论。',
  sourceDocs: [
    '../architecture.md',
    '../runtime-flows.md',
    '../source-map.md',
    '../evidence-index.md'
  ]
};

/*
数据约束：
1. Markdown 是知识源，HTML 只是呈现层。
2. 不允许在本文件中新增 architecture.md / evidence-index.md 中没有的结论。
3. 每个视图只回答一个核心问题，最多 8-10 个主节点。
4. 节点必须是架构对象：模块、组件、运行时对象、状态对象、扩展点、外部依赖、策略/权限组件。
5. 边必须使用明确 kind：
   request-flow, sync-call, async-event, dependency, registration,
   permission-check, context-build, read-write, model-stream, result-return。
6. ev 必须能在 evidence-index.md 中找到；doc 必须指向对应 Markdown 锚点或章节。
7. ev/doc 只做证据追溯元数据；图面默认不显示证据编号。
*/
window.ARCHITECTURE_VIEWS = [
  {
    id: 'overview',
    label: '架构总览',
    purpose: '回答系统由哪些核心模块组成，以及它们之间是什么高层关系。',
    description: '展示核心模块和高层关系。',
    width: 1200,
    height: 760,
    nodes: [
      {
        id: 'entry',
        type: 'entry',
        role: 'module',
        x: 70,
        y: 100,
        w: 190,
        h: 72,
        title: '入口层',
        sub: 'CLI / API / UI / Gateway',
        ev: 'EVD-001',
        doc: '../evidence-index.md#EVD-001',
        tip: '职责：接收外部请求并转换为系统内部语义。来源：替换为真实源码路径或官方文档。',
        status: 'source-verified'
      },
      {
        id: 'core',
        type: 'core',
        role: 'module',
        x: 430,
        y: 95,
        w: 230,
        h: 82,
        title: '核心控制面',
        sub: 'Router / Registry / Policy',
        ev: 'EVD-002',
        doc: '../evidence-index.md#EVD-002',
        tip: '职责：承接路由、注册表、策略或主控制逻辑。来源：替换为真实源码路径。',
        status: 'source-verified'
      },
      {
        id: 'runtime',
        type: 'runtime',
        role: 'runtime-object',
        x: 805,
        y: 100,
        w: 230,
        h: 72,
        title: '执行运行时',
        sub: 'Loop / Scheduler / Worker',
        ev: 'EVD-003',
        doc: '../evidence-index.md#EVD-003',
        tip: '职责：执行单轮或多轮任务编排。来源：替换为真实源码路径。',
        status: 'source-verified'
      }
    ],
    edges: [
      {
        from: 'entry',
        to: 'core',
        label: '请求进入',
        kind: 'request-flow',
        ev: 'EVD-011',
        doc: '../evidence-index.md#EVD-011'
      },
      {
        from: 'core',
        to: 'runtime',
        label: '调度执行',
        kind: 'sync-call',
        ev: 'EVD-012',
        doc: '../evidence-index.md#EVD-012'
      }
    ]
  },
  {
    id: 'runtime-flow',
    label: '单轮运行主链路',
    purpose: '回答一次请求如何从输入执行到响应。',
    description: '展示一次请求的主执行路径。',
    width: 1200,
    height: 560,
    nodes: [],
    edges: []
  },
  {
    id: 'extension-policy',
    label: '工具与扩展机制',
    purpose: '回答工具、插件、MCP、Hook 或权限组件如何注册和执行。',
    description: '展示扩展来源、统一契约、权限检查和执行边界。',
    width: 1200,
    height: 620,
    nodes: [],
    edges: []
  },
  {
    id: 'state-context',
    label: '状态与上下文',
    purpose: '回答 Session、Transcript、Project Root、配置和上下文如何参与运行。',
    description: '展示状态对象和上下文构造关系。',
    width: 1100,
    height: 720,
    layers: []
  }
];
