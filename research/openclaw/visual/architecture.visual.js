window.ARCHITECTURE_META = {
  title: "OpenClaw Visual Architecture",
  description: "Evidence-backed views of OpenClaw as a long-lived Gateway control plane, an agent runtime shell, and a plugin capability system.",
  sourceDocs: [
    "../architecture.md",
    "../runtime-flows.md",
    "../source-map.md",
    "../evidence-index.md"
  ]
};

window.ARCHITECTURE_VIEWS = [
  {
    id: "overview",
    label: "Architecture Overview",
    purpose: "Show how Gateway unifies entries, sessions, agent runtime, plugins, and device nodes.",
    description: "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
    width: 1260,
    height: 720,
    nodes: [
      { id: "ingress", type: "entry", role: "adapter", x: 70, y: 130, w: 210, h: 82, title: "Entries and Channels", sub: "CLI / WS / HTTP / channel plugins", ev: "C-004 C-013 C-014", doc: "../evidence-index.md#C-004", tip: "Multiple entry surfaces feed the Gateway: local CLI, HTTP/WS control clients, channel plugins, and external messages.", status: "source-verified" },
      { id: "gateway", type: "core", role: "module", x: 370, y: 120, w: 230, h: 96, title: "Gateway Control Plane", sub: "server / methods / events / nodes", ev: "C-004 C-005 C-006", doc: "../evidence-index.md#C-004", tip: "The Gateway is the single long-lived control plane for clients, events, nodes, methods, pairing, and security.", status: "source-verified" },
      { id: "session", type: "state", role: "state", x: 700, y: 120, w: 220, h: 92, title: "Session / Multi-agent", sub: "workspace / state / auth / history", ev: "C-009 EXT-OC-004", doc: "../evidence-index.md#C-009", tip: "Sessions and multi-agent routing are first-class isolation models with explicit workspace, state, auth profile, and history ownership.", status: "doc-verified" },
      { id: "agent", type: "runtime", role: "runtime-object", x: 700, y: 330, w: 230, h: 92, title: "Agent Runtime Shell", sub: "session / workspace / delivery", ev: "C-007 C-008", doc: "../evidence-index.md#C-007", tip: "OpenClaw-owned runtime prepares product context and invokes Pi agent core.", status: "source-verified" },
      { id: "pi", type: "runtime", role: "runtime-object", x: 1010, y: 330, w: 180, h: 82, title: "Pi Agent Core", sub: "model / tools / stream", ev: "C-007 INF-003", doc: "../evidence-index.md#INF-003", tip: "Pi core owns model/tool loop behavior while OpenClaw owns session and delivery context.", status: "inference" },
      { id: "plugins", type: "extension", role: "extension-point", x: 370, y: 500, w: 240, h: 92, title: "Plugin Capability Layer", sub: "manifest / registry / runtime API", ev: "C-010 C-011 C-012 C-017", doc: "../evidence-index.md#C-010", tip: "Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.", status: "source-verified" },
      { id: "nodes", type: "infra", role: "external-dependency", x: 70, y: 500, w: 210, h: 82, title: "Nodes and Companion Apps", sub: "macOS / iOS / Android / headless", ev: "C-001 C-004", doc: "../evidence-index.md#C-001", tip: "Nodes and companion apps connect to Gateway and expose device-side capabilities.", status: "doc-verified" }
    ],
    edges: [
      { from: "ingress", to: "gateway", label: "request / message", kind: "request-flow", ev: "C-004", doc: "../evidence-index.md#C-004" },
      { from: "nodes", to: "gateway", label: "node WS", kind: "async-event", ev: "C-004", doc: "../evidence-index.md#C-004" },
      { from: "gateway", to: "session", label: "routes ownership", kind: "read-write", ev: "C-009", doc: "../evidence-index.md#C-009" },
      { from: "gateway", to: "agent", label: "schedules run", kind: "sync-call", ev: "C-008", doc: "../evidence-index.md#C-008" },
      { from: "agent", to: "session", label: "reads/writes context", kind: "read-write", ev: "C-009", doc: "../evidence-index.md#C-009" },
      { from: "agent", to: "pi", label: "delegates loop", kind: "sync-call", ev: "C-007", doc: "../evidence-index.md#C-007" },
      { from: "plugins", to: "gateway", label: "registers capabilities", kind: "registration", ev: "C-011", doc: "../evidence-index.md#C-011" },
      { from: "plugins", to: "agent", label: "tools / hooks", kind: "registration", ev: "C-012", doc: "../evidence-index.md#C-012" }
    ]
  },
  {
    id: "runtime-main-flow",
    label: "Main Runtime Flow",
    purpose: "Show the hot path from external ingress to agent delivery.",
    description: "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
    width: 1280,
    height: 560,
    nodes: [
      { id: "client", type: "entry", role: "adapter", x: 70, y: 230, w: 190, h: 76, title: "Channel / CLI / WS", sub: "external ingress", ev: "C-006 C-008", doc: "../evidence-index.md#C-008", tip: "External messages or local commands enter the Gateway surface.", status: "source-verified" },
      { id: "auth", type: "policy", role: "policy", x: 320, y: 230, w: 200, h: 76, title: "Trust and Auth", sub: "connect / senderIsOwner", ev: "C-006 C-008", doc: "../evidence-index.md#C-006", tip: "WS handshake and agent RPC require explicit trust and capability declarations.", status: "source-verified" },
      { id: "route", type: "core", role: "module", x: 570, y: 230, w: 210, h: 76, title: "Session Routing", sub: "session / workspace / auth profile", ev: "C-008 C-009", doc: "../evidence-index.md#C-009", tip: "Gateway resolves which session and agent workspace own the run.", status: "source-verified" },
      { id: "ack", type: "core", role: "module", x: 830, y: 120, w: 170, h: 70, title: "Accepted Ack", sub: "respond first", ev: "C-008", doc: "../evidence-index.md#C-008", tip: "Gateway accepts the RPC before asynchronous execution continues.", status: "source-verified" },
      { id: "run", type: "runtime", role: "runtime-object", x: 830, y: 330, w: 210, h: 76, title: "Agent Command", sub: "prepare and execute", ev: "C-008", doc: "../evidence-index.md#C-008", tip: "agentCommandFromIngress prepares session, model, skills, tools, and delivery.", status: "source-verified" },
      { id: "delivery", type: "runtime", role: "adapter", x: 1090, y: 330, w: 170, h: 76, title: "Delivery", sub: "channel send / transcript", ev: "C-008 C-014", doc: "../evidence-index.md#C-014", tip: "Agent result is delivered to the corresponding channel or delivery surface.", status: "source-verified" }
    ],
    edges: [
      { from: "client", to: "auth", label: "first frame / RPC", kind: "permission-check", ev: "C-006", doc: "../evidence-index.md#C-006" },
      { from: "auth", to: "route", label: "trusted ingress", kind: "request-flow", ev: "C-008", doc: "../evidence-index.md#C-008" },
      { from: "route", to: "ack", label: "ack", kind: "result-return", ev: "C-008", doc: "../evidence-index.md#C-008" },
      { from: "route", to: "run", label: "async schedule", kind: "async-event", ev: "C-008", doc: "../evidence-index.md#C-008" },
      { from: "run", to: "delivery", label: "result", kind: "result-return", ev: "C-014", doc: "../evidence-index.md#C-014" }
    ]
  },
  {
    id: "layers",
    label: "Layered View",
    purpose: "Show which modules belong to entry adaptation, Gateway control, agent runtime, plugin capability, and state isolation.",
    description: "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
    width: 1120,
    height: 790,
    layers: [
      { type: "entry", title: "Entry Layer", sub: "CLI / HTTP / WS / Channels", ev: "C-004 C-013 C-014", items: ["CLI", "WS clients", "HTTP surface", "channel plugins"], role: "adapter", status: "source-verified", doc: "../evidence-index.md#C-004", tip: "Entry adapters convert external traffic into Gateway semantics." },
      { type: "core", title: "Gateway Control Layer", sub: "server / protocol / methods / events", ev: "C-004 C-005 C-006 C-008", items: ["server", "protocol", "methods", "events"], role: "module", status: "source-verified", doc: "../evidence-index.md#C-004", tip: "Gateway owns long-lived coordination and control-plane behavior." },
      { type: "runtime", title: "Agent Runtime Layer", sub: "OpenClaw shell + Pi core", ev: "C-007 C-008 INF-003", items: ["session prep", "skills", "tools", "model loop"], role: "runtime-object", status: "source-verified", doc: "../evidence-index.md#C-007", tip: "The shell carries product context while Pi core executes the loop." },
      { type: "extension", title: "Plugin Capability Layer", sub: "manifest / loader / API / hooks", ev: "C-010 C-011 C-012 C-017", items: ["manifest", "loader", "registry", "hooks"], role: "extension-point", status: "source-verified", doc: "../evidence-index.md#C-010", tip: "Capabilities are declared, enabled, loaded, and consumed through explicit surfaces." },
      { type: "state", title: "State and Isolation Layer", sub: "session / workspace / auth / history", ev: "C-009 EXT-OC-004", items: ["session", "workspace", "auth profile", "history"], role: "state", status: "doc-verified", doc: "../evidence-index.md#C-009", tip: "Isolation is a first-class model across users, channels, agents, and workspaces." },
      { type: "policy", title: "Security and Defaults", sub: "trust / sandbox / local-first", ev: "C-015 C-016", items: ["safe defaults", "trust flags", "sandbox", "local host"], role: "policy", status: "doc-verified", doc: "../evidence-index.md#C-016", tip: "The security model distinguishes local owner sessions from broader channel contexts." }
    ]
  }
];
