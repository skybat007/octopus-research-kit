window.ARCHITECTURE_META = {
  title: "Hermes Agent Visual Architecture",
  description: "Shows entry convergence, Agent Core, tools, plugins, Gateway, and state boundaries.",
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
    title: "Many entries converge on AIAgent, then expand through tools, plugins, providers, and Gateway.",
    description: "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
    width: 1360,
    height: 820,
    nodes: [
      {
        id: "interfaces",
        type: "entry",
        title: "Interface Layer",
        sub: "CLI / TUI / ACP / Cron",
        ev: "H-003 H-013 H-014 H-015 H-016",
        x: 70,
        y: 110,
        w: 230,
        h: 88,
        tip: "User interfaces and scheduled-task entries are organized around AIAgent.",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      },
      {
        id: "gateway",
        type: "infra",
        title: "Messaging Gateway",
        sub: "gateway/run.py",
        ev: "H-009 H-010",
        x: 70,
        y: 325,
        w: 230,
        h: 88,
        tip: "Platform adapters, allowlist/pairing, SessionContext, delivery, and agent cache.",
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#H-009"
      },
      {
        id: "agent",
        type: "core",
        title: "AIAgent",
        sub: "run_agent.py",
        ev: "H-004",
        x: 430,
        y: 170,
        w: 220,
        h: 92,
        tip: "Core facade that receives entry parameters, initializes context, and enters conversation runtime.",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "loop",
        type: "runtime",
        title: "run_conversation",
        sub: "conversation_loop.py",
        ev: "H-004",
        x: 770,
        y: 170,
        w: 240,
        h: 92,
        tip: "Agent turn main loop: model calls, tool calls, result writing, and streaming output.",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "provider",
        type: "extension",
        title: "Provider Profile",
        sub: "providers / profiles",
        ev: "H-011",
        x: 1085,
        y: 90,
        w: 210,
        h: 82,
        tip: "Model-provider behavior is moved into profiles to reduce provider-specific logic in the main loop.",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-011"
      },
      {
        id: "tools",
        type: "extension",
        title: "ToolRegistry + Toolsets",
        sub: "registry / model_tools",
        ev: "H-005 H-006 H-007",
        x: 1085,
        y: 260,
        w: 210,
        h: 88,
        tip: "Central tool registry, toolset filtering, model schema conversion, and tool-call dispatch.",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-005"
      },
      {
        id: "plugins",
        type: "extension",
        title: "Plugin Manager",
        sub: "PluginContext / hooks",
        ev: "H-008 H-010 H-011 H-012",
        x: 430,
        y: 465,
        w: 230,
        h: 88,
        tip: "Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-008"
      },
      {
        id: "memory",
        type: "state",
        title: "Memory Manager",
        sub: "built-in + one provider",
        ev: "H-012 EXT-HA-005",
        x: 770,
        y: 465,
        w: 240,
        h: 88,
        tip: "Built-in memory is always enabled; at most one external memory provider is active, with failures isolated.",
        role: "state",
        status: "official-supported",
        doc: "../evidence-index.md#H-012"
      },
      {
        id: "session",
        type: "state",
        title: "Session / Config / DB",
        sub: "profiles / session store / cron jobs",
        ev: "H-003 H-009 H-016",
        x: 430,
        y: 660,
        w: 580,
        h: 86,
        tip: "Profiles, session keys, gateway store, cron jobs, and local config form runtime state boundaries.",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      }
    ],
    edges: [
      {
        from: "interfaces",
        to: "agent",
        label: "entry normalization",
        kind: "sync-call",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "gateway",
        to: "agent",
        label: "SessionContext",
        kind: "read-write",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "agent",
        to: "loop",
        label: "start turn",
        kind: "request-flow",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "loop",
        to: "provider",
        label: "model call",
        kind: "model-stream",
        ev: "H-011",
        doc: "../evidence-index.md#H-011"
      },
      {
        from: "loop",
        to: "tools",
        label: "tool schema/call",
        kind: "request-flow",
        ev: "H-005 H-006 H-007",
        doc: "../evidence-index.md#H-005"
      },
      {
        from: "plugins",
        to: "tools",
        label: "register capability",
        kind: "registration",
        ev: "H-005 H-006 H-007",
        doc: "../evidence-index.md#H-005"
      },
      {
        from: "plugins",
        to: "provider",
        label: "extend provider",
        kind: "registration",
        ev: "H-011",
        doc: "../evidence-index.md#H-011"
      },
      {
        from: "plugins",
        to: "memory",
        label: "extend memory",
        kind: "registration",
        ev: "H-012 EXT-HA-005",
        doc: "../evidence-index.md#H-012"
      },
      {
        from: "loop",
        to: "memory",
        label: "read/write memory",
        kind: "read-write",
        ev: "H-012 EXT-HA-005",
        doc: "../evidence-index.md#H-012"
      },
      {
        from: "gateway",
        to: "session",
        label: "session/delivery state",
        kind: "read-write",
        ev: "H-003 H-009 H-016",
        doc: "../evidence-index.md#H-003"
      },
      {
        from: "agent",
        to: "session",
        label: "config/profile",
        kind: "context-build",
        ev: "H-003 H-009 H-016",
        doc: "../evidence-index.md#H-003"
      }
    ]
  },
  {
    id: "flow",
    label: "Main Runtime Flow",
    title: "Main execution path for one Agent turn",
    description: "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
    width: 1320,
    height: 650,
    nodes: [
      {
        id: "f1",
        type: "entry",
        title: "Entry Event",
        sub: "CLI / TUI / Gateway / Cron",
        ev: "H-003 H-013 H-014 H-015 H-016",
        x: 60,
        y: 260,
        w: 190,
        h: 78,
        tip: "User command, external message, TUI RPC, ACP request, or scheduled task.",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      },
      {
        id: "f2",
        type: "entry",
        title: "Entry Adapter",
        sub: "args / message / schedule",
        ev: "H-003 H-009 H-016",
        x: 310,
        y: 260,
        w: 180,
        h: 78,
        tip: "Converts different entries into context that AIAgent can consume.",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      },
      {
        id: "f3",
        type: "core",
        title: "AIAgent",
        sub: "init + context",
        ev: "H-004",
        x: 550,
        y: 260,
        w: 170,
        h: 78,
        tip: "Initializes provider, tools, memory, plugins, and system prompt.",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "f4",
        type: "runtime",
        title: "Conversation Loop",
        sub: "model turn",
        ev: "H-004",
        x: 780,
        y: 260,
        w: 190,
        h: 78,
        tip: "Unified execution loop for model turn and tool calls.",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "f5",
        type: "extension",
        title: "ToolRegistry",
        sub: "toolsets / call dispatch",
        ev: "H-005 H-006 H-007",
        x: 1030,
        y: 185,
        w: 190,
        h: 78,
        tip: "Exposes available tools to the model and executes model-returned tool calls.",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-005"
      },
      {
        id: "f6",
        type: "state",
        title: "Memory Provider",
        sub: "prefetch / sync / tool schemas",
        ev: "H-012",
        x: 1030,
        y: 345,
        w: 190,
        h: 78,
        tip: "Memory participates in prompt, prefetch, turn sync, and optional tool schema.",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#H-012"
      },
      {
        id: "f7",
        type: "infra",
        title: "Response / Delivery",
        sub: "stdout / TUI / platform",
        ev: "H-009 H-014",
        x: 550,
        y: 460,
        w: 190,
        h: 78,
        tip: "Outputs result to terminal, TUI, or messaging platform depending on the entry.",
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#H-009"
      }
    ],
    edges: [
      {
        from: "f1",
        to: "f2",
        label: "input",
        kind: "request-flow",
        ev: "H-003 H-009 H-016",
        doc: "../evidence-index.md#H-003"
      },
      {
        from: "f2",
        to: "f3",
        label: "context",
        kind: "context-build",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "f3",
        to: "f4",
        label: "execute turn",
        kind: "request-flow",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "f4",
        to: "f5",
        label: "tool call",
        kind: "request-flow",
        ev: "H-005 H-006 H-007",
        doc: "../evidence-index.md#H-005"
      },
      {
        from: "f5",
        to: "f4",
        label: "result",
        kind: "result-return",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "f4",
        to: "f6",
        label: "memory read/write",
        kind: "read-write",
        ev: "H-012",
        doc: "../evidence-index.md#H-012"
      },
      {
        from: "f4",
        to: "f7",
        label: "response",
        kind: "result-return",
        ev: "H-009 H-014",
        doc: "../evidence-index.md#H-009"
      }
    ]
  },
  {
    id: "layers",
    label: "Layer View",
    title: "Layer boundaries among entries, core, capabilities, and state",
    description: "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
    width: 1120,
    height: 790,
    layers: [
      {
        type: "entry",
        title: "Access Layer",
        sub: "CLI / TUI / Gateway / ACP / Cron",
        ev: "H-003 H-013 H-014 H-015 H-016",
        items: [
          "CLI",
          "TUI",
          "Gateway",
          "Cron"
        ],
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003",
        tip: "CLI / TUI / Gateway / ACP / Cron"
      },
      {
        type: "core",
        title: "Agent Core Layer",
        sub: "AIAgent facade and initialization",
        ev: "H-004",
        items: [
          "system prompt",
          "context",
          "provider",
          "memory"
        ],
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#H-004",
        tip: "AIAgent facade and initialization"
      },
      {
        type: "runtime",
        title: "Conversation Runtime Layer",
        sub: "run_conversation / model loop / tool calls",
        ev: "H-004 H-006",
        items: [
          "model turn",
          "tool call",
          "streaming",
          "errors"
        ],
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#H-004",
        tip: "run_conversation / model loop / tool calls"
      },
      {
        type: "extension",
        title: "Capability Extension Layer",
        sub: "ToolRegistry / toolsets / plugins / providers",
        ev: "H-005 H-007 H-008 H-011",
        items: [
          "registry",
          "toolset",
          "hooks",
          "profiles"
        ],
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-005",
        tip: "ToolRegistry / toolsets / plugins / providers"
      },
      {
        type: "state",
        title: "State and Memory Layer",
        sub: "SessionStore / profiles / MemoryManager",
        ev: "H-009 H-012 H-016",
        items: [
          "session key",
          "profile",
          "memory",
          "cron DB"
        ],
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#H-009",
        tip: "SessionStore / profiles / MemoryManager"
      },
      {
        type: "infra",
        title: "Platform Delivery Layer",
        sub: "Gateway adapters / pairing / delivery",
        ev: "H-009 H-010",
        items: [
          "adapter",
          "allowlist",
          "pairing",
          "delivery"
        ],
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#H-009",
        tip: "Gateway adapters / pairing / delivery"
      }
    ]
  }
];
