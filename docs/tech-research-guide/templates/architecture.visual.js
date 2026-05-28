window.ARCHITECTURE_META = {
  title: '<Framework Name> Visual Architecture',
  description: 'This diagram only shows conclusions already captured in architecture.md, runtime-flows.md, source-map.md, and evidence-index.md.',
  sourceDocs: [
    '../architecture.md',
    '../runtime-flows.md',
    '../source-map.md',
    '../evidence-index.md'
  ]
};

/*
Data constraints:
1. Markdown is the knowledge source. HTML is only the presentation layer.
2. Do not add conclusions here that do not exist in architecture.md or evidence-index.md.
3. Each view answers one core question and should stay within 8-10 main nodes.
4. Nodes must be architecture objects: modules, components, runtime objects, state objects, extension points, external dependencies, or policy/permission components.
5. Edges must use explicit kind values:
   request-flow, sync-call, async-event, dependency, registration,
   permission-check, context-build, read-write, model-stream, result-return.
6. ev must exist in evidence-index.md. doc must point to a related Markdown anchor or section.
7. ev/doc are evidence metadata. Evidence IDs are hidden from the diagram surface by default.
*/
window.ARCHITECTURE_VIEWS = [
  {
    id: 'overview',
    label: 'Architecture Overview',
    purpose: 'Answer which core modules make up the system and how they relate at a high level.',
    description: 'Shows core modules and high-level relationships.',
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
        title: 'Entry Layer',
        sub: 'CLI / API / UI / Gateway',
        ev: 'EVD-001',
        doc: '../evidence-index.md#EVD-001',
        tip: 'Responsibility: receive external requests and convert them into internal system semantics. Replace with real source path or official docs.',
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
        title: 'Core Control Plane',
        sub: 'Router / Registry / Policy',
        ev: 'EVD-002',
        doc: '../evidence-index.md#EVD-002',
        tip: 'Responsibility: own routing, registries, policies, or main control logic. Replace with real source path.',
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
        title: 'Execution Runtime',
        sub: 'Loop / Scheduler / Worker',
        ev: 'EVD-003',
        doc: '../evidence-index.md#EVD-003',
        tip: 'Responsibility: execute single-run or multi-run orchestration. Replace with real source path.',
        status: 'source-verified'
      }
    ],
    edges: [
      {
        from: 'entry',
        to: 'core',
        label: 'request enters',
        kind: 'request-flow',
        ev: 'EVD-011',
        doc: '../evidence-index.md#EVD-011'
      },
      {
        from: 'core',
        to: 'runtime',
        label: 'dispatch',
        kind: 'sync-call',
        ev: 'EVD-012',
        doc: '../evidence-index.md#EVD-012'
      }
    ]
  },
  {
    id: 'runtime-flow',
    label: 'Single-Run Main Flow',
    purpose: 'Answer how one request moves from input to response.',
    description: 'Shows the main execution path for one request.',
    width: 1200,
    height: 560,
    nodes: [],
    edges: []
  },
  {
    id: 'extension-policy',
    label: 'Tools and Extension Mechanisms',
    purpose: 'Answer how tools, plugins, MCP, hooks, or permission components register and execute.',
    description: 'Shows extension sources, shared contracts, permission checks, and execution boundaries.',
    width: 1200,
    height: 620,
    nodes: [],
    edges: []
  },
  {
    id: 'state-context',
    label: 'State and Context',
    purpose: 'Answer how sessions, transcripts, project roots, configuration, and context participate in runtime behavior.',
    description: 'Shows state objects and context-construction relationships.',
    width: 1100,
    height: 720,
    layers: []
  }
];
