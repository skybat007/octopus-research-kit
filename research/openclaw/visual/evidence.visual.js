window.EVIDENCE_META = {
  "title": "OpenClaw Evidence Explanation",
  "description": "Trace from the architecture diagram back to evidence: architecture context, evidence conclusions, source/doc snippets, and original index locations.",
  "source": "../evidence-index.md",
  "projectRoot": "research/openclaw"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "C-001",
    "conclusion": "OpenClaw positions itself as a personal AI assistant where Gateway is the control plane and multi-channel support is a core product surface",
    "type": "repository doc fact",
    "location": "`README.md:21-27`, `README.md:146-155`",
    "confidence": "high",
    "verified": "",
    "note": "Product positioning and highlights",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Nodes and Companion Apps",
        "sub": "macOS / iOS / Android / headless",
        "role": "external-dependency",
        "status": "doc-verified",
        "detail": "Nodes and companion apps connect to Gateway and expose device-side capabilities.",
        "relation": ""
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Nodes and Companion Apps\" in the architecture diagram. Evidence conclusion: OpenClaw positions itself as a personal AI assistant where Gateway is the control plane and multi-channel support is a core product surface. The diagram explanation says: Nodes and companion apps connect to Gateway and expose device-side capabilities.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:21-27",
        "path": "research/openclaw/README.md",
        "relativePath": "README.md",
        "start": 21,
        "end": 27,
        "snippet": "   21  | docs.html | UTF-8 document reader that avoids browser encoding issues with raw Markdown |\n   22  | architecture.md | Technical architecture, module boundaries, and dependency direction |\n   23  | visual/architecture.html | HTML visual structure diagram for Gateway, Agent Runtime, Plugin Capability, and state boundaries |\n   24  | visual/architecture.visual.js | Visual graph data connected to Markdown conclusions and evidence links |\n   25  | visual/evidence.html | Clickable evidence explanation page with architecture context and source/doc snippets |\n   26  | visual/evidence.visual.js | Evidence explanation data extracted from evidence-index.md and architecture.visual.js |\n   27  | key-abstractions.md | Core abstractions, interfaces, data structures, and lifecycles |",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:146-155",
        "path": "research/openclaw/README.md",
        "relativePath": "README.md",
        "start": 146,
        "end": 155,
        "snippet": "",
        "omitted": "Showing lines 146-50; original range ended at 155."
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-002",
    "conclusion": "Package version is `2026.5.19`, the bin entry is `openclaw.mjs`, and the workspace includes `ui`, `packages/*`, and `extensions/*`",
    "type": "source fact",
    "location": "`package.json:2-18`, `pnpm-workspace.yaml:1-5`",
    "confidence": "high",
    "verified": "",
    "note": "Pinned snapshot",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "package.json:2-18",
        "path": "research/openclaw/package.json",
        "relativePath": "package.json",
        "start": 2,
        "end": 18
      },
      {
        "kind": "file",
        "display": "pnpm-workspace.yaml:1-5",
        "path": "research/openclaw/pnpm-workspace.yaml",
        "relativePath": "pnpm-workspace.yaml",
        "start": 1,
        "end": 5
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-003",
    "conclusion": "Core should stay plugin-agnostic; plugins integrate through SDK, manifest, runtime helpers, documented barrels, and registry surfaces",
    "type": "repository doc fact",
    "location": "`AGENTS.md:26-45`",
    "confidence": "high",
    "verified": "",
    "note": "Repository architecture constraint",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "AGENTS.md:26-45",
        "path": "research/openclaw/AGENTS.md",
        "relativePath": "AGENTS.md",
        "start": 26,
        "end": 45
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-004",
    "conclusion": "Gateway is the single long-lived control plane for WebSocket API, events, nodes, protocol, pairing, security, and channel coordination",
    "type": "repository doc fact",
    "location": "`docs/concepts/architecture.md:8-31`, `docs/concepts/architecture.md:55-96`, `docs/concepts/architecture.md:97-148`",
    "confidence": "high",
    "verified": "",
    "note": "Concept docs",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Entries and Channels",
        "sub": "CLI / WS / HTTP / channel plugins",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Multiple entry surfaces feed the Gateway: local CLI, HTTP/WS control clients, channel plugins, and external messages.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Gateway Control Plane",
        "sub": "server / methods / events / nodes",
        "role": "module",
        "status": "source-verified",
        "detail": "The Gateway is the single long-lived control plane for clients, events, nodes, methods, pairing, and security.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Nodes and Companion Apps",
        "sub": "macOS / iOS / Android / headless",
        "role": "external-dependency",
        "status": "doc-verified",
        "detail": "Nodes and companion apps connect to Gateway and expose device-side capabilities.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Entries and Channels -> Gateway Control Plane",
        "sub": "request / message",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: request / message.",
        "relation": "Entries and Channels to Gateway Control Plane"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Nodes and Companion Apps -> Gateway Control Plane",
        "sub": "node WS",
        "role": "async-event",
        "status": "",
        "detail": "Relationship semantics: node WS.",
        "relation": "Nodes and Companion Apps to Gateway Control Plane"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Entry Layer",
        "sub": "CLI / HTTP / WS / Channels",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Entry adapters convert external traffic into Gateway semantics.",
        "relation": "CLI / WS clients / HTTP surface / channel plugins"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Gateway Control Layer",
        "sub": "server / protocol / methods / events",
        "role": "module",
        "status": "source-verified",
        "detail": "Gateway owns long-lived coordination and control-plane behavior.",
        "relation": "server / protocol / methods / events"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Entries and Channels\", Architecture Overview / node \"Gateway Control Plane\", Architecture Overview / node \"Nodes and Companion Apps\", Architecture Overview / edge \"Entries and Channels -> Gateway Control Plane\" in the architecture diagram. Evidence conclusion: Gateway is the single long-lived control plane for WebSocket API, events, nodes, protocol, pairing, security, and channel coordination. The diagram explanation says: Multiple entry surfaces feed the Gateway: local CLI, HTTP/WS control clients, channel plugins, and external messages.; The Gateway is the single long-lived control plane for clients, events, nodes, methods, pairing, and security.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/architecture.md:8-31",
        "path": "research/openclaw/docs/concepts/architecture.md",
        "relativePath": "docs/concepts/architecture.md",
        "start": 8,
        "end": 31
      },
      {
        "kind": "file",
        "display": "docs/concepts/architecture.md:55-96",
        "path": "research/openclaw/docs/concepts/architecture.md",
        "relativePath": "docs/concepts/architecture.md",
        "start": 55,
        "end": 96
      },
      {
        "kind": "file",
        "display": "docs/concepts/architecture.md:97-148",
        "path": "research/openclaw/docs/concepts/architecture.md",
        "relativePath": "docs/concepts/architecture.md",
        "start": 97,
        "end": 148
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-005",
    "conclusion": "CLI/Gateway startup flows through launcher, entry, gateway CLI, lazy server, and server implementation",
    "type": "source fact",
    "location": "`openclaw.mjs:11-46`, `openclaw.mjs:183-225`, `src/entry.ts:71-153`, `src/cli/gateway-cli/run.ts:503-817`, `src/gateway/server.ts:13-29`, `src/gateway/server.impl.ts:531-740`",
    "confidence": "high",
    "verified": "",
    "note": "Static startup chain",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Gateway Control Plane",
        "sub": "server / methods / events / nodes",
        "role": "module",
        "status": "source-verified",
        "detail": "The Gateway is the single long-lived control plane for clients, events, nodes, methods, pairing, and security.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Gateway Control Layer",
        "sub": "server / protocol / methods / events",
        "role": "module",
        "status": "source-verified",
        "detail": "Gateway owns long-lived coordination and control-plane behavior.",
        "relation": "server / protocol / methods / events"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Gateway Control Plane\", Layered View / layer \"Gateway Control Layer\" in the architecture diagram. Evidence conclusion: CLI/Gateway startup flows through launcher, entry, gateway CLI, lazy server, and server implementation. The diagram explanation says: The Gateway is the single long-lived control plane for clients, events, nodes, methods, pairing, and security.; Gateway owns long-lived coordination and control-plane behavior.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "openclaw.mjs:11-46",
        "path": "research/openclaw/openclaw.mjs",
        "relativePath": "openclaw.mjs",
        "start": 11,
        "end": 46
      },
      {
        "kind": "file",
        "display": "openclaw.mjs:183-225",
        "path": "research/openclaw/openclaw.mjs",
        "relativePath": "openclaw.mjs",
        "start": 183,
        "end": 225
      },
      {
        "kind": "file",
        "display": "src/entry.ts:71-153",
        "path": "research/openclaw/src/entry.ts",
        "relativePath": "src/entry.ts",
        "start": 71,
        "end": 153
      },
      {
        "kind": "file",
        "display": "src/cli/gateway-cli/run.ts:503-817",
        "path": "research/openclaw/src/cli/gateway-cli/run.ts",
        "relativePath": "src/cli/gateway-cli/run.ts",
        "start": 503,
        "end": 817
      },
      {
        "kind": "file",
        "display": "src/gateway/server.ts:13-29",
        "path": "research/openclaw/src/gateway/server.ts",
        "relativePath": "src/gateway/server.ts",
        "start": 13,
        "end": 29
      },
      {
        "kind": "file",
        "display": "src/gateway/server.impl.ts:531-740",
        "path": "research/openclaw/src/gateway/server.impl.ts",
        "relativePath": "src/gateway/server.impl.ts",
        "start": 531,
        "end": 740
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-006",
    "conclusion": "Gateway creates HTTP/WS runtime, sends a challenge after connection, requires the first frame to be connect, and returns hello-ok on success",
    "type": "source fact",
    "location": "`src/gateway/server-runtime-state.ts:223-268`, `src/gateway/server-runtime-state.ts:275-358`, `src/gateway/server/ws-connection.ts:202-318`, `src/gateway/server/ws-connection/message-handler.ts:488-560`, `src/gateway/server/ws-connection/message-handler.ts:1696-1756`",
    "confidence": "high",
    "verified": "",
    "note": "Handshake code",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Gateway Control Plane",
        "sub": "server / methods / events / nodes",
        "role": "module",
        "status": "source-verified",
        "detail": "The Gateway is the single long-lived control plane for clients, events, nodes, methods, pairing, and security.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Channel / CLI / WS",
        "sub": "external ingress",
        "role": "adapter",
        "status": "source-verified",
        "detail": "External messages or local commands enter the Gateway surface.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Trust and Auth",
        "sub": "connect / senderIsOwner",
        "role": "policy",
        "status": "source-verified",
        "detail": "WS handshake and agent RPC require explicit trust and capability declarations.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Channel / CLI / WS -> Trust and Auth",
        "sub": "first frame / RPC",
        "role": "permission-check",
        "status": "",
        "detail": "Relationship semantics: first frame / RPC.",
        "relation": "Channel / CLI / WS to Trust and Auth"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Gateway Control Layer",
        "sub": "server / protocol / methods / events",
        "role": "module",
        "status": "source-verified",
        "detail": "Gateway owns long-lived coordination and control-plane behavior.",
        "relation": "server / protocol / methods / events"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Gateway Control Plane\", Main Runtime Flow / node \"Channel / CLI / WS\", Main Runtime Flow / node \"Trust and Auth\", Main Runtime Flow / edge \"Channel / CLI / WS -> Trust and Auth\" in the architecture diagram. Evidence conclusion: Gateway creates HTTP/WS runtime, sends a challenge after connection, requires the first frame to be connect, and returns hello-ok on success. The diagram explanation says: The Gateway is the single long-lived control plane for clients, events, nodes, methods, pairing, and security.; External messages or local commands enter the Gateway surface.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/gateway/server-runtime-state.ts:223-268",
        "path": "research/openclaw/src/gateway/server-runtime-state.ts",
        "relativePath": "src/gateway/server-runtime-state.ts",
        "start": 223,
        "end": 268
      },
      {
        "kind": "file",
        "display": "src/gateway/server-runtime-state.ts:275-358",
        "path": "research/openclaw/src/gateway/server-runtime-state.ts",
        "relativePath": "src/gateway/server-runtime-state.ts",
        "start": 275,
        "end": 358
      },
      {
        "kind": "file",
        "display": "src/gateway/server/ws-connection.ts:202-318",
        "path": "research/openclaw/src/gateway/server/ws-connection.ts",
        "relativePath": "src/gateway/server/ws-connection.ts",
        "start": 202,
        "end": 318
      },
      {
        "kind": "file",
        "display": "src/gateway/server/ws-connection/message-handler.ts:488-560",
        "path": "research/openclaw/src/gateway/server/ws-connection/message-handler.ts",
        "relativePath": "src/gateway/server/ws-connection/message-handler.ts",
        "start": 488,
        "end": 560
      },
      {
        "kind": "file",
        "display": "src/gateway/server/ws-connection/message-handler.ts:1696-1756",
        "path": "research/openclaw/src/gateway/server/ws-connection/message-handler.ts",
        "relativePath": "src/gateway/server/ws-connection/message-handler.ts",
        "start": 1696,
        "end": 1756
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-007",
    "conclusion": "Agent runtime is an OpenClaw session/workspace/tool/channel shell around Pi agent core; the loop includes intake, context, model, tool, stream, and persistence",
    "type": "repository doc fact",
    "location": "`docs/concepts/agent.md:8-16`, `docs/concepts/agent.md:25-75`, `docs/concepts/agent-loop.md:9-44`, `docs/concepts/agent-loop.md:59-115`",
    "confidence": "high",
    "verified": "",
    "note": "Agent concept docs",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Agent Runtime Shell",
        "sub": "session / workspace / delivery",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "OpenClaw-owned runtime prepares product context and invokes Pi agent core.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Pi Agent Core",
        "sub": "model / tools / stream",
        "role": "runtime-object",
        "status": "inference",
        "detail": "Pi core owns model/tool loop behavior while OpenClaw owns session and delivery context.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Agent Runtime Shell -> Pi Agent Core",
        "sub": "delegates loop",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: delegates loop.",
        "relation": "Agent Runtime Shell to Pi Agent Core"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Agent Runtime Layer",
        "sub": "OpenClaw shell + Pi core",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "The shell carries product context while Pi core executes the loop.",
        "relation": "session prep / skills / tools / model loop"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Agent Runtime Shell\", Architecture Overview / node \"Pi Agent Core\", Architecture Overview / edge \"Agent Runtime Shell -> Pi Agent Core\", Layered View / layer \"Agent Runtime Layer\" in the architecture diagram. Evidence conclusion: Agent runtime is an OpenClaw session/workspace/tool/channel shell around Pi agent core; the loop includes intake, context, model, tool, stream, and persistence. The diagram explanation says: OpenClaw-owned runtime prepares product context and invokes Pi agent core.; Pi core owns model/tool loop behavior while OpenClaw owns session and delivery context.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/agent.md:8-16",
        "path": "research/openclaw/docs/concepts/agent.md",
        "relativePath": "docs/concepts/agent.md",
        "start": 8,
        "end": 16
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent.md:25-75",
        "path": "research/openclaw/docs/concepts/agent.md",
        "relativePath": "docs/concepts/agent.md",
        "start": 25,
        "end": 75
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent-loop.md:9-44",
        "path": "research/openclaw/docs/concepts/agent-loop.md",
        "relativePath": "docs/concepts/agent-loop.md",
        "start": 9,
        "end": 44
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent-loop.md:59-115",
        "path": "research/openclaw/docs/concepts/agent-loop.md",
        "relativePath": "docs/concepts/agent-loop.md",
        "start": 59,
        "end": 115
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-008",
    "conclusion": "Gateway `agent` RPC acknowledges first, schedules `agentCommandFromIngress` asynchronously, and network entries declare trust explicitly",
    "type": "source fact",
    "location": "`src/gateway/server-methods/agent.ts:475-583`, `src/gateway/server-methods/agent.ts:1440-1507`, `src/gateway/server-methods/agent.ts:1592-1666`, `src/agents/agent-command.ts:1593-1643`, `src/agents/command/attempt-execution.ts:630-691`",
    "confidence": "high",
    "verified": "",
    "note": "Agent run code path",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Agent Runtime Shell",
        "sub": "session / workspace / delivery",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "OpenClaw-owned runtime prepares product context and invokes Pi agent core.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Gateway Control Plane -> Agent Runtime Shell",
        "sub": "schedules run",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: schedules run.",
        "relation": "Gateway Control Plane to Agent Runtime Shell"
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Channel / CLI / WS",
        "sub": "external ingress",
        "role": "adapter",
        "status": "source-verified",
        "detail": "External messages or local commands enter the Gateway surface.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Trust and Auth",
        "sub": "connect / senderIsOwner",
        "role": "policy",
        "status": "source-verified",
        "detail": "WS handshake and agent RPC require explicit trust and capability declarations.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Session Routing",
        "sub": "session / workspace / auth profile",
        "role": "module",
        "status": "source-verified",
        "detail": "Gateway resolves which session and agent workspace own the run.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Accepted Ack",
        "sub": "respond first",
        "role": "module",
        "status": "source-verified",
        "detail": "Gateway accepts the RPC before asynchronous execution continues.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Agent Command",
        "sub": "prepare and execute",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "agentCommandFromIngress prepares session, model, skills, tools, and delivery.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Delivery",
        "sub": "channel send / transcript",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Agent result is delivered to the corresponding channel or delivery surface.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Trust and Auth -> Session Routing",
        "sub": "trusted ingress",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: trusted ingress.",
        "relation": "Trust and Auth to Session Routing"
      },
      {
        "kind": "edge",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Session Routing -> Accepted Ack",
        "sub": "ack",
        "role": "result-return",
        "status": "",
        "detail": "Relationship semantics: ack.",
        "relation": "Session Routing to Accepted Ack"
      },
      {
        "kind": "edge",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Session Routing -> Agent Command",
        "sub": "async schedule",
        "role": "async-event",
        "status": "",
        "detail": "Relationship semantics: async schedule.",
        "relation": "Session Routing to Agent Command"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Gateway Control Layer",
        "sub": "server / protocol / methods / events",
        "role": "module",
        "status": "source-verified",
        "detail": "Gateway owns long-lived coordination and control-plane behavior.",
        "relation": "server / protocol / methods / events"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Agent Runtime Layer",
        "sub": "OpenClaw shell + Pi core",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "The shell carries product context while Pi core executes the loop.",
        "relation": "session prep / skills / tools / model loop"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Agent Runtime Shell\", Architecture Overview / edge \"Gateway Control Plane -> Agent Runtime Shell\", Main Runtime Flow / node \"Channel / CLI / WS\", Main Runtime Flow / node \"Trust and Auth\" in the architecture diagram. Evidence conclusion: Gateway `agent` RPC acknowledges first, schedules `agentCommandFromIngress` asynchronously, and network entries declare trust explicitly. The diagram explanation says: OpenClaw-owned runtime prepares product context and invokes Pi agent core.; Relationship semantics: schedules run.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/gateway/server-methods/agent.ts:475-583",
        "path": "research/openclaw/src/gateway/server-methods/agent.ts",
        "relativePath": "src/gateway/server-methods/agent.ts",
        "start": 475,
        "end": 583
      },
      {
        "kind": "file",
        "display": "src/gateway/server-methods/agent.ts:1440-1507",
        "path": "research/openclaw/src/gateway/server-methods/agent.ts",
        "relativePath": "src/gateway/server-methods/agent.ts",
        "start": 1440,
        "end": 1507
      },
      {
        "kind": "file",
        "display": "src/gateway/server-methods/agent.ts:1592-1666",
        "path": "research/openclaw/src/gateway/server-methods/agent.ts",
        "relativePath": "src/gateway/server-methods/agent.ts",
        "start": 1592,
        "end": 1666
      },
      {
        "kind": "file",
        "display": "src/agents/agent-command.ts:1593-1643",
        "path": "research/openclaw/src/agents/agent-command.ts",
        "relativePath": "src/agents/agent-command.ts",
        "start": 1593,
        "end": 1643
      },
      {
        "kind": "file",
        "display": "src/agents/command/attempt-execution.ts:630-691",
        "path": "research/openclaw/src/agents/command/attempt-execution.ts",
        "relativePath": "src/agents/command/attempt-execution.ts",
        "start": 630,
        "end": 691
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-009",
    "conclusion": "Sessions, DM isolation, multi-agent workspace/state/auth/session-store ownership are explicit architecture concepts",
    "type": "repository doc fact",
    "location": "`docs/concepts/session.md:10-22`, `docs/concepts/session.md:23-54`, `docs/concepts/session.md:90-97`, `docs/concepts/multi-agent.md:9-19`, `docs/concepts/multi-agent.md:42-63`, `docs/concepts/multi-agent.md:121-129`",
    "confidence": "high",
    "verified": "",
    "note": "Session and multi-agent docs",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Session / Multi-agent",
        "sub": "workspace / state / auth / history",
        "role": "state",
        "status": "doc-verified",
        "detail": "Sessions and multi-agent routing are first-class isolation models with explicit workspace, state, auth profile, and history ownership.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Gateway Control Plane -> Session / Multi-agent",
        "sub": "routes ownership",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: routes ownership.",
        "relation": "Gateway Control Plane to Session / Multi-agent"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Agent Runtime Shell -> Session / Multi-agent",
        "sub": "reads/writes context",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: reads/writes context.",
        "relation": "Agent Runtime Shell to Session / Multi-agent"
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Session Routing",
        "sub": "session / workspace / auth profile",
        "role": "module",
        "status": "source-verified",
        "detail": "Gateway resolves which session and agent workspace own the run.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "State and Isolation Layer",
        "sub": "session / workspace / auth / history",
        "role": "state",
        "status": "doc-verified",
        "detail": "Isolation is a first-class model across users, channels, agents, and workspaces.",
        "relation": "session / workspace / auth profile / history"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Session / Multi-agent\", Architecture Overview / edge \"Gateway Control Plane -> Session / Multi-agent\", Architecture Overview / edge \"Agent Runtime Shell -> Session / Multi-agent\", Main Runtime Flow / node \"Session Routing\" in the architecture diagram. Evidence conclusion: Sessions, DM isolation, multi-agent workspace/state/auth/session-store ownership are explicit architecture concepts. The diagram explanation says: Sessions and multi-agent routing are first-class isolation models with explicit workspace, state, auth profile, and history ownership.; Relationship semantics: routes ownership.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/session.md:10-22",
        "path": "research/openclaw/docs/concepts/session.md",
        "relativePath": "docs/concepts/session.md",
        "start": 10,
        "end": 22
      },
      {
        "kind": "file",
        "display": "docs/concepts/session.md:23-54",
        "path": "research/openclaw/docs/concepts/session.md",
        "relativePath": "docs/concepts/session.md",
        "start": 23,
        "end": 54
      },
      {
        "kind": "file",
        "display": "docs/concepts/session.md:90-97",
        "path": "research/openclaw/docs/concepts/session.md",
        "relativePath": "docs/concepts/session.md",
        "start": 90,
        "end": 97
      },
      {
        "kind": "file",
        "display": "docs/concepts/multi-agent.md:9-19",
        "path": "research/openclaw/docs/concepts/multi-agent.md",
        "relativePath": "docs/concepts/multi-agent.md",
        "start": 9,
        "end": 19
      },
      {
        "kind": "file",
        "display": "docs/concepts/multi-agent.md:42-63",
        "path": "research/openclaw/docs/concepts/multi-agent.md",
        "relativePath": "docs/concepts/multi-agent.md",
        "start": 42,
        "end": 63
      },
      {
        "kind": "file",
        "display": "docs/concepts/multi-agent.md:121-129",
        "path": "research/openclaw/docs/concepts/multi-agent.md",
        "relativePath": "docs/concepts/multi-agent.md",
        "start": 121,
        "end": 129
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-010",
    "conclusion": "The plugin system uses a capability model with four layers: manifest/discovery, enablement/validation, runtime loading, and surface consumption",
    "type": "repository doc fact",
    "location": "`docs/plugins/architecture.md:32-51`, `docs/plugins/architecture.md:114-146`, `docs/plugins/architecture.md:148-168`, `docs/plugins/manifest.md:28-54`, `docs/plugins/manifest.md:146-170`",
    "confidence": "high",
    "verified": "",
    "note": "Plugin docs",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / registry / runtime API",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / loader / API / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Capabilities are declared, enabled, loaded, and consumed through explicit surfaces.",
        "relation": "manifest / loader / registry / hooks"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Plugin Capability Layer\", Layered View / layer \"Plugin Capability Layer\" in the architecture diagram. Evidence conclusion: The plugin system uses a capability model with four layers: manifest/discovery, enablement/validation, runtime loading, and surface consumption. The diagram explanation says: Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.; Capabilities are declared, enabled, loaded, and consumed through explicit surfaces.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/plugins/architecture.md:32-51",
        "path": "research/openclaw/docs/plugins/architecture.md",
        "relativePath": "docs/plugins/architecture.md",
        "start": 32,
        "end": 51
      },
      {
        "kind": "file",
        "display": "docs/plugins/architecture.md:114-146",
        "path": "research/openclaw/docs/plugins/architecture.md",
        "relativePath": "docs/plugins/architecture.md",
        "start": 114,
        "end": 146
      },
      {
        "kind": "file",
        "display": "docs/plugins/architecture.md:148-168",
        "path": "research/openclaw/docs/plugins/architecture.md",
        "relativePath": "docs/plugins/architecture.md",
        "start": 148,
        "end": 168
      },
      {
        "kind": "file",
        "display": "docs/plugins/manifest.md:28-54",
        "path": "research/openclaw/docs/plugins/manifest.md",
        "relativePath": "docs/plugins/manifest.md",
        "start": 28,
        "end": 54
      },
      {
        "kind": "file",
        "display": "docs/plugins/manifest.md:146-170",
        "path": "research/openclaw/docs/plugins/manifest.md",
        "relativePath": "docs/plugins/manifest.md",
        "start": 146,
        "end": 170
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-011",
    "conclusion": "`loadOpenClawPlugins` implements discovery, manifest registry, registration planning, runtime registration, rollback, and activation",
    "type": "source fact",
    "location": "`src/plugins/loader.ts:1509-1588`, `src/plugins/loader.ts:1672-1715`, `src/plugins/loader.ts:1760-1904`, `src/plugins/loader.ts:2314-2471`, `src/plugins/loader.ts:2499-2533`",
    "confidence": "high",
    "verified": "",
    "note": "Loader code",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / registry / runtime API",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Plugin Capability Layer -> Gateway Control Plane",
        "sub": "registers capabilities",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: registers capabilities.",
        "relation": "Plugin Capability Layer to Gateway Control Plane"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / loader / API / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Capabilities are declared, enabled, loaded, and consumed through explicit surfaces.",
        "relation": "manifest / loader / registry / hooks"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Plugin Capability Layer\", Architecture Overview / edge \"Plugin Capability Layer -> Gateway Control Plane\", Layered View / layer \"Plugin Capability Layer\" in the architecture diagram. Evidence conclusion: `loadOpenClawPlugins` implements discovery, manifest registry, registration planning, runtime registration, rollback, and activation. The diagram explanation says: Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.; Relationship semantics: registers capabilities.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:1509-1588",
        "path": "research/openclaw/src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 1509,
        "end": 1588
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:1672-1715",
        "path": "research/openclaw/src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 1672,
        "end": 1715
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:1760-1904",
        "path": "research/openclaw/src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 1760,
        "end": 1904
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:2314-2471",
        "path": "research/openclaw/src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 2314,
        "end": 2471
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:2499-2533",
        "path": "research/openclaw/src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 2499,
        "end": 2533
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-012",
    "conclusion": "`OpenClawPluginApi` registration covers tools, hooks, HTTP, channels, gateway, providers, media, sessions, memory, and related capabilities",
    "type": "source fact",
    "location": "`src/plugins/api-builder.ts:19-85`, `src/plugins/api-builder.ts:177-260`",
    "confidence": "high",
    "verified": "",
    "note": "API builder",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / registry / runtime API",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Plugin Capability Layer -> Agent Runtime Shell",
        "sub": "tools / hooks",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: tools / hooks.",
        "relation": "Plugin Capability Layer to Agent Runtime Shell"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / loader / API / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Capabilities are declared, enabled, loaded, and consumed through explicit surfaces.",
        "relation": "manifest / loader / registry / hooks"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Plugin Capability Layer\", Architecture Overview / edge \"Plugin Capability Layer -> Agent Runtime Shell\", Layered View / layer \"Plugin Capability Layer\" in the architecture diagram. Evidence conclusion: `OpenClawPluginApi` registration covers tools, hooks, HTTP, channels, gateway, providers, media, sessions, memory, and related capabilities. The diagram explanation says: Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.; Relationship semantics: tools / hooks.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/plugins/api-builder.ts:19-85",
        "path": "research/openclaw/src/plugins/api-builder.ts",
        "relativePath": "src/plugins/api-builder.ts",
        "start": 19,
        "end": 85
      },
      {
        "kind": "file",
        "display": "src/plugins/api-builder.ts:177-260",
        "path": "research/openclaw/src/plugins/api-builder.ts",
        "relativePath": "src/plugins/api-builder.ts",
        "start": 177,
        "end": 260
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-013",
    "conclusion": "Anthropic provider plugin declares providers, CLI backends, auth, and contracts in manifest, then registers runtime backend/provider/media capability",
    "type": "source fact",
    "location": "`extensions/anthropic/openclaw.plugin.json:1-112`, `extensions/anthropic/index.ts:1-10`, `extensions/anthropic/register.runtime.ts:665-667`",
    "confidence": "high",
    "verified": "",
    "note": "Provider plugin sample",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Entries and Channels",
        "sub": "CLI / WS / HTTP / channel plugins",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Multiple entry surfaces feed the Gateway: local CLI, HTTP/WS control clients, channel plugins, and external messages.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Entry Layer",
        "sub": "CLI / HTTP / WS / Channels",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Entry adapters convert external traffic into Gateway semantics.",
        "relation": "CLI / WS clients / HTTP surface / channel plugins"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Entries and Channels\", Layered View / layer \"Entry Layer\" in the architecture diagram. Evidence conclusion: Anthropic provider plugin declares providers, CLI backends, auth, and contracts in manifest, then registers runtime backend/provider/media capability. The diagram explanation says: Multiple entry surfaces feed the Gateway: local CLI, HTTP/WS control clients, channel plugins, and external messages.; Entry adapters convert external traffic into Gateway semantics.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "extensions/anthropic/openclaw.plugin.json:1-112",
        "path": "research/openclaw/extensions/anthropic/openclaw.plugin.json",
        "relativePath": "extensions/anthropic/openclaw.plugin.json",
        "start": 1,
        "end": 112
      },
      {
        "kind": "file",
        "display": "extensions/anthropic/index.ts:1-10",
        "path": "research/openclaw/extensions/anthropic/index.ts",
        "relativePath": "extensions/anthropic/index.ts",
        "start": 1,
        "end": 10
      },
      {
        "kind": "file",
        "display": "extensions/anthropic/register.runtime.ts:665-667",
        "path": "research/openclaw/extensions/anthropic/register.runtime.ts",
        "relativePath": "extensions/anthropic/register.runtime.ts",
        "start": 665,
        "end": 667
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-014",
    "conclusion": "IRC channel plugin covers setup, config, security, status, and outbound behavior through manifest, entry, and channel plugin code",
    "type": "source fact",
    "location": "`extensions/irc/openclaw.plugin.json:1-26`, `extensions/irc/index.ts:1-20`, `extensions/irc/src/channel.ts:170-235`, `extensions/irc/src/channel.ts:236-366`",
    "confidence": "high",
    "verified": "",
    "note": "Channel plugin sample",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Entries and Channels",
        "sub": "CLI / WS / HTTP / channel plugins",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Multiple entry surfaces feed the Gateway: local CLI, HTTP/WS control clients, channel plugins, and external messages.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Delivery",
        "sub": "channel send / transcript",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Agent result is delivered to the corresponding channel or delivery surface.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "runtime-main-flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "The Gateway accepts ingress, validates trust, resolves session ownership, acknowledges first, and schedules an agent run that later delivers results.",
        "title": "Agent Command -> Delivery",
        "sub": "result",
        "role": "result-return",
        "status": "",
        "detail": "Relationship semantics: result.",
        "relation": "Agent Command to Delivery"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Entry Layer",
        "sub": "CLI / HTTP / WS / Channels",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Entry adapters convert external traffic into Gateway semantics.",
        "relation": "CLI / WS clients / HTTP surface / channel plugins"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Entries and Channels\", Main Runtime Flow / node \"Delivery\", Main Runtime Flow / edge \"Agent Command -> Delivery\", Layered View / layer \"Entry Layer\" in the architecture diagram. Evidence conclusion: IRC channel plugin covers setup, config, security, status, and outbound behavior through manifest, entry, and channel plugin code. The diagram explanation says: Multiple entry surfaces feed the Gateway: local CLI, HTTP/WS control clients, channel plugins, and external messages.; Agent result is delivered to the corresponding channel or delivery surface.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "extensions/irc/openclaw.plugin.json:1-26",
        "path": "research/openclaw/extensions/irc/openclaw.plugin.json",
        "relativePath": "extensions/irc/openclaw.plugin.json",
        "start": 1,
        "end": 26
      },
      {
        "kind": "file",
        "display": "extensions/irc/index.ts:1-20",
        "path": "research/openclaw/extensions/irc/index.ts",
        "relativePath": "extensions/irc/index.ts",
        "start": 1,
        "end": 20
      },
      {
        "kind": "file",
        "display": "extensions/irc/src/channel.ts:170-235",
        "path": "research/openclaw/extensions/irc/src/channel.ts",
        "relativePath": "extensions/irc/src/channel.ts",
        "start": 170,
        "end": 235
      },
      {
        "kind": "file",
        "display": "extensions/irc/src/channel.ts:236-366",
        "path": "research/openclaw/extensions/irc/src/channel.ts",
        "relativePath": "extensions/irc/src/channel.ts",
        "start": 236,
        "end": 366
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-015",
    "conclusion": "VISION emphasizes security, safe defaults, plugin-first design, memory slots, terminal-first operation, and TypeScript hackability",
    "type": "repository doc fact",
    "location": "`VISION.md:15-31`, `VISION.md:41-57`, `VISION.md:59-76`, `VISION.md:92-105`",
    "confidence": "high",
    "verified": "",
    "note": "Project direction",
    "graphRefs": [
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Security and Defaults",
        "sub": "trust / sandbox / local-first",
        "role": "policy",
        "status": "doc-verified",
        "detail": "The security model distinguishes local owner sessions from broader channel contexts.",
        "relation": "safe defaults / trust flags / sandbox / local host"
      }
    ],
    "explanation": "This evidence supports Layered View / layer \"Security and Defaults\" in the architecture diagram. Evidence conclusion: VISION emphasizes security, safe defaults, plugin-first design, memory slots, terminal-first operation, and TypeScript hackability. The diagram explanation says: The security model distinguishes local owner sessions from broader channel contexts.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "VISION.md:15-31",
        "path": "research/openclaw/VISION.md",
        "relativePath": "VISION.md",
        "start": 15,
        "end": 31
      },
      {
        "kind": "file",
        "display": "VISION.md:41-57",
        "path": "research/openclaw/VISION.md",
        "relativePath": "VISION.md",
        "start": 41,
        "end": 57
      },
      {
        "kind": "file",
        "display": "VISION.md:59-76",
        "path": "research/openclaw/VISION.md",
        "relativePath": "VISION.md",
        "start": 59,
        "end": 76
      },
      {
        "kind": "file",
        "display": "VISION.md:92-105",
        "path": "research/openclaw/VISION.md",
        "relativePath": "VISION.md",
        "start": 92,
        "end": 105
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-016",
    "conclusion": "README security model says main-session tools run on the host by default, while group/channel use should prefer sandboxing",
    "type": "repository doc fact",
    "location": "`README.md:132-144`, `README.md:157-162`",
    "confidence": "high",
    "verified": "",
    "note": "Security default",
    "graphRefs": [
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Security and Defaults",
        "sub": "trust / sandbox / local-first",
        "role": "policy",
        "status": "doc-verified",
        "detail": "The security model distinguishes local owner sessions from broader channel contexts.",
        "relation": "safe defaults / trust flags / sandbox / local host"
      }
    ],
    "explanation": "This evidence supports Layered View / layer \"Security and Defaults\" in the architecture diagram. Evidence conclusion: README security model says main-session tools run on the host by default, while group/channel use should prefer sandboxing. The diagram explanation says: The security model distinguishes local owner sessions from broader channel contexts.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:132-144",
        "path": "research/openclaw/README.md",
        "relativePath": "README.md",
        "start": 132,
        "end": 144,
        "snippet": "",
        "omitted": "Showing lines 132-50; original range ended at 144."
      },
      {
        "kind": "file",
        "display": "README.md:157-162",
        "path": "research/openclaw/README.md",
        "relativePath": "README.md",
        "start": 157,
        "end": 162,
        "snippet": "",
        "omitted": "Showing lines 157-50; original range ended at 162."
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-017",
    "conclusion": "Plugin hook types cover model, prompt, tool, message, session, gateway, cron, and related lifecycle events",
    "type": "source/doc fact",
    "location": "`src/plugins/hook-types.ts:68-106`, `docs/concepts/agent-loop.md:89-115`",
    "confidence": "high",
    "verified": "",
    "note": "Hook list",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / registry / runtime API",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Plugin Capability Layer",
        "sub": "manifest / loader / API / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Capabilities are declared, enabled, loaded, and consumed through explicit surfaces.",
        "relation": "manifest / loader / registry / hooks"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Plugin Capability Layer\", Layered View / layer \"Plugin Capability Layer\" in the architecture diagram. Evidence conclusion: Plugin hook types cover model, prompt, tool, message, session, gateway, cron, and related lifecycle events. The diagram explanation says: Manifest, registry, runtime loading, API builder, and hooks turn plugins into owned capabilities.; Capabilities are declared, enabled, loaded, and consumed through explicit surfaces.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/plugins/hook-types.ts:68-106",
        "path": "research/openclaw/src/plugins/hook-types.ts",
        "relativePath": "src/plugins/hook-types.ts",
        "start": 68,
        "end": 106
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent-loop.md:89-115",
        "path": "research/openclaw/docs/concepts/agent-loop.md",
        "relativePath": "docs/concepts/agent-loop.md",
        "start": 89,
        "end": 115
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-001",
    "conclusion": "Plugin-agnostic core plus manifest/control-plane design plus runtime registry APIs suggest OpenClaw's extension idea is capability ownership, not only simple hooks",
    "type": "inference",
    "location": "C-003, C-010, C-011, C-012",
    "confidence": "",
    "verified": "",
    "note": "Run a real plugin inspect command to observe runtime registry output",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-003",
        "path": "research/openclaw/C-003",
        "relativePath": "C-003",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-010",
        "path": "research/openclaw/C-010",
        "relativePath": "C-010",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-011",
        "path": "research/openclaw/C-011",
        "relativePath": "C-011",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-012",
        "path": "research/openclaw/C-012",
        "relativePath": "C-012",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-002",
    "conclusion": "Gateway manages WS clients, method registry, agent ack/final flow, and dedupe, so it is both unified control plane and runtime coordinator",
    "type": "inference",
    "location": "C-004, C-006, C-008",
    "confidence": "",
    "verified": "",
    "note": "Start Gateway and observe actual WS frames",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-004",
        "path": "research/openclaw/C-004",
        "relativePath": "C-004",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-006",
        "path": "research/openclaw/C-006",
        "relativePath": "C-006",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-008",
        "path": "research/openclaw/C-008",
        "relativePath": "C-008",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-003",
    "conclusion": "The OpenClaw shell owns session/workspace/skills/delivery while Pi core owns the model/tool loop, showing a split between product context and agent core",
    "type": "inference",
    "location": "C-007, C-008, C-009",
    "confidence": "",
    "verified": "",
    "note": "Deep dive Pi runtime event structure",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Pi Agent Core",
        "sub": "model / tools / stream",
        "role": "runtime-object",
        "status": "inference",
        "detail": "Pi core owns model/tool loop behavior while OpenClaw owns session and delivery context.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "Agent Runtime Layer",
        "sub": "OpenClaw shell + Pi core",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "The shell carries product context while Pi core executes the loop.",
        "relation": "session prep / skills / tools / model loop"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Pi Agent Core\", Layered View / layer \"Agent Runtime Layer\" in the architecture diagram. Evidence conclusion: The OpenClaw shell owns session/workspace/skills/delivery while Pi core owns the model/tool loop, showing a split between product context and agent core. The diagram explanation says: Pi core owns model/tool loop behavior while OpenClaw owns session and delivery context.; The shell carries product context while Pi core executes the loop.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-007",
        "path": "research/openclaw/C-007",
        "relativePath": "C-007",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-008",
        "path": "research/openclaw/C-008",
        "relativePath": "C-008",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-009",
        "path": "research/openclaw/C-009",
        "relativePath": "C-009",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-004",
    "conclusion": "Channel plugins include config, status, security, outbound, and gateway start behavior, so the channel abstraction is a full contract rather than a send-only function",
    "type": "inference",
    "location": "C-014",
    "confidence": "",
    "verified": "",
    "note": "Compare additional channel plugins",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-014",
        "path": "research/openclaw/C-014",
        "relativePath": "C-014",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-OC-001",
    "conclusion": "Official docs define Gateway as a long-lived control plane for messaging surfaces, control clients, nodes, HTTP, and WebSocket surfaces",
    "type": "official fact",
    "location": "https://docs.openclaw.ai/architecture",
    "confidence": "high",
    "verified": "yes",
    "note": "Corresponds to C-004, C-005, C-006",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://docs.openclaw.ai/architecture",
        "url": "https://docs.openclaw.ai/architecture"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-OC-002",
    "conclusion": "Official docs divide Agent runtime into OpenClaw-owned layer and Pi agent core",
    "type": "official fact",
    "location": "https://docs.openclaw.ai/concepts/agent",
    "confidence": "high",
    "verified": "partial",
    "note": "Corresponds to C-007, C-008, INF-003",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://docs.openclaw.ai/concepts/agent",
        "url": "https://docs.openclaw.ai/concepts/agent"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-OC-003",
    "conclusion": "Official docs emphasize the plugin capability model and layers for manifest/discovery, enablement, runtime loading, and surface consumption",
    "type": "official fact",
    "location": "https://docs.openclaw.ai/plugins/architecture",
    "confidence": "high",
    "verified": "yes",
    "note": "Corresponds to C-010, C-011, C-012",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://docs.openclaw.ai/plugins/architecture",
        "url": "https://docs.openclaw.ai/plugins/architecture"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-OC-004",
    "conclusion": "Official docs describe sessions and multi-agent isolation across DM/group/cron/webhook and agent workspace/state/auth profile",
    "type": "official fact",
    "location": "https://docs.openclaw.ai/concepts/session, https://docs.openclaw.ai/concepts/multi-agent",
    "confidence": "medium",
    "verified": "partial",
    "note": "Corresponds to C-008, C-009",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "OpenClaw is not only an agent loop. Its long-lived Gateway coordinates ingress, session ownership, agent execution, plugin capabilities, and nodes.",
        "title": "Session / Multi-agent",
        "sub": "workspace / state / auth / history",
        "role": "state",
        "status": "doc-verified",
        "detail": "Sessions and multi-agent routing are first-class isolation models with explicit workspace, state, auth profile, and history ownership.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layered View",
        "viewDescription": "Layering helps distinguish product shell, runtime loop, and plugin ownership boundaries.",
        "title": "State and Isolation Layer",
        "sub": "session / workspace / auth / history",
        "role": "state",
        "status": "doc-verified",
        "detail": "Isolation is a first-class model across users, channels, agents, and workspaces.",
        "relation": "session / workspace / auth profile / history"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Session / Multi-agent\", Layered View / layer \"State and Isolation Layer\" in the architecture diagram. Evidence conclusion: Official docs describe sessions and multi-agent isolation across DM/group/cron/webhook and agent workspace/state/auth profile. The diagram explanation says: Sessions and multi-agent routing are first-class isolation models with explicit workspace, state, auth profile, and history ownership.; Isolation is a first-class model across users, channels, agents, and workspaces.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://docs.openclaw.ai/concepts/session",
        "url": "https://docs.openclaw.ai/concepts/session"
      },
      {
        "kind": "url",
        "display": "https://docs.openclaw.ai/concepts/multi-agent",
        "url": "https://docs.openclaw.ai/concepts/multi-agent"
      }
    ],
    "sourceLimitNote": ""
  }
];
