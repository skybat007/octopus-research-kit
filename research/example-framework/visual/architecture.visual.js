window.ARCHITECTURE_META = {
  title: "Example Framework Visual Architecture",
  description: "Template example. Copy this file and replace the sample nodes with evidence-backed architecture for the real framework.",
  sourceDocs: [
    "../architecture.md",
    "../runtime-flows.md",
    "../source-map.md",
    "../evidence-index.md"
  ]
};

window.ARCHITECTURE_VIEWS = [
  {
    id: "researchFlow",
    label: "Research Flow",
    title: "External references -> research questions -> source verification -> architecture outputs",
    description: "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
    width: 1320,
    height: 650,
    nodes: [
      {
        id: "r1",
        type: "entry",
        title: "Research Brief",
        sub: "research-brief.md",
        ev: "TPL-001",
        x: 60,
        y: 260,
        w: 180,
        h: 78,
        tip: "Define goals, scope, questions, and deliverables.",
        role: "adapter",
        status: "pending",
        doc: "../evidence-index.md#TPL-001"
      },
      {
        id: "r2",
        type: "entry",
        title: "External Research",
        sub: "external-research.md",
        ev: "TPL-002",
        x: 300,
        y: 180,
        w: 190,
        h: 78,
        tip: "Collect official, collaboration, and community references and mark credibility.",
        role: "adapter",
        status: "pending",
        doc: "../evidence-index.md#TPL-002"
      },
      {
        id: "r3",
        type: "core",
        title: "Research Questions",
        sub: "research-questions.md",
        ev: "TPL-003",
        x: 300,
        y: 340,
        w: 190,
        h: 78,
        tip: "Turn key external claims into source-verification questions.",
        role: "module",
        status: "pending",
        doc: "../evidence-index.md#TPL-003"
      },
      {
        id: "r4",
        type: "runtime",
        title: "Source Map",
        sub: "source-map.md",
        ev: "TPL-004",
        x: 560,
        y: 260,
        w: 180,
        h: 78,
        tip: "Locate entries, module boundaries, and reading order.",
        role: "runtime-object",
        status: "pending",
        doc: "../evidence-index.md#TPL-004"
      },
      {
        id: "r5",
        type: "core",
        title: "Architecture and Flows",
        sub: "architecture.md / runtime-flows.md",
        ev: "TPL-005",
        x: 800,
        y: 210,
        w: 210,
        h: 78,
        tip: "Capture module relationships, dependency direction, and main runtime paths.",
        role: "module",
        status: "pending",
        doc: "../evidence-index.md#TPL-005"
      },
      {
        id: "r6",
        type: "extension",
        title: "Abstractions and Extensions",
        sub: "key-abstractions / extension-points",
        ev: "TPL-006",
        x: 800,
        y: 360,
        w: 210,
        h: 78,
        tip: "Extract core objects, interfaces, plugins, hooks, providers, and other extension mechanisms.",
        role: "extension-point",
        status: "pending",
        doc: "../evidence-index.md#TPL-006"
      },
      {
        id: "r7",
        type: "state",
        title: "Evidence and Review",
        sub: "evidence-index / research-review",
        ev: "TPL-007",
        x: 1080,
        y: 285,
        w: 190,
        h: 78,
        tip: "Trace every important conclusion back to source, official references, or explicit inference.",
        role: "state",
        status: "pending",
        doc: "../evidence-index.md#TPL-007"
      }
    ],
    edges: [
      { from: "r1", to: "r2", label: "scope", kind: "sync-call", ev: "TPL-002", doc: "../evidence-index.md#TPL-002" },
      { from: "r2", to: "r3", label: "questions", kind: "sync-call", ev: "TPL-003", doc: "../evidence-index.md#TPL-003" },
      { from: "r3", to: "r4", label: "verify in source", kind: "sync-call", ev: "TPL-004", doc: "../evidence-index.md#TPL-004" },
      { from: "r4", to: "r5", label: "supports architecture", kind: "sync-call", ev: "TPL-005", doc: "../evidence-index.md#TPL-005" },
      { from: "r4", to: "r6", label: "supports abstractions", kind: "sync-call", ev: "TPL-006", doc: "../evidence-index.md#TPL-006" },
      { from: "r5", to: "r7", label: "record evidence", kind: "read-write", ev: "TPL-007", doc: "../evidence-index.md#TPL-007" },
      { from: "r6", to: "r7", label: "record evidence", kind: "read-write", ev: "TPL-007", doc: "../evidence-index.md#TPL-007" }
    ]
  },
  {
    id: "layers",
    label: "Layer Template",
    title: "Reusable layered view template",
    description: "A compact template for horizontal modules, vertical dependencies, and evidence ownership.",
    width: 1120,
    height: 790,
    layers: [
      { type: "entry", title: "Entry Layer", sub: "CLI / API / UI / Channel", ev: "TPL-004", items: ["entry adapter", "protocol conversion", "user interaction", "external event"], role: "adapter", status: "pending", doc: "../evidence-index.md#TPL-004", tip: "Replace with real entry evidence." },
      { type: "core", title: "Control Layer", sub: "Routing / Registry / Policy", ev: "TPL-005", items: ["config loading", "registry", "policy", "scheduling"], role: "module", status: "pending", doc: "../evidence-index.md#TPL-005", tip: "Replace with real control-plane evidence." },
      { type: "runtime", title: "Execution Layer", sub: "Loop / Worker / Scheduler", ev: "TPL-005", items: ["main loop", "task execution", "error handling", "result generation"], role: "runtime-object", status: "pending", doc: "../evidence-index.md#TPL-005", tip: "Replace with real runtime evidence." },
      { type: "extension", title: "Capability Layer", sub: "Plugin / Hook / Provider / Tool", ev: "TPL-006", items: ["tool", "provider", "hook", "plugin"], role: "extension-point", status: "pending", doc: "../evidence-index.md#TPL-006", tip: "Replace with real extension evidence." },
      { type: "state", title: "Evidence Layer", sub: "Evidence Index / Research Review", ev: "TPL-007", items: ["claim", "evidence", "confidence", "review"], role: "state", status: "pending", doc: "../evidence-index.md#TPL-007", tip: "Keep conclusions traceable." }
    ]
  }
];
