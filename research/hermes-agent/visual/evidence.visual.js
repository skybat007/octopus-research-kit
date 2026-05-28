window.EVIDENCE_META = {
  "title": "Hermes Agent Evidence Explanation",
  "description": "Trace from the architecture diagram back to evidence: architecture context, evidence conclusions, source/doc snippets, and original index locations.",
  "source": "../evidence-index.md",
  "projectRoot": "research/hermes-agent"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "H-001",
    "conclusion": "Hermes Agent positions itself as a self-improving AI agent with capabilities including TUI, Messaging Gateway, learning loop, cron, delegation, multiple backends, and research batch",
    "type": "doc fact",
    "location": "`README.md:15`, `README.md:19-27`, `README.md:66-78`, `README.md:103-119`, `README.md:123-143`",
    "confidence": "high",
    "verified": "",
    "note": "README product positioning and entries",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:15",
        "path": "research/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 15,
        "end": 15,
        "snippet": "   15  |---|---|",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:19-27",
        "path": "research/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 19,
        "end": 27,
        "snippet": "   19  | source-map.md | Repository structure, entries, modules, and reading order |\n   20  | dashboard.html | Browser reading entry for Markdown, visual diagrams, and supporting materials |\n   21  | docs.html | UTF-8 document reader that avoids browser encoding issues with raw Markdown |\n   22  | architecture.md | Technical architecture, module boundaries, and dependency direction |\n   23  | visual/architecture.html | HTML visual structure diagram for entries, Agent Core, tools, plugins, Gateway, and state boundaries |\n   24  | visual/architecture.visual.js | Visual graph data linked to Markdown conclusions and evidence |\n   25  | visual/evidence.html | Clickable evidence explanation page with architecture context and source/doc snippets |\n   26  | visual/evidence.visual.js | Evidence explanation data extracted from evidence-index.md and architecture.visual.js |\n   27  | key-abstractions.md | Core abstractions, interfaces, data structures, and lifecycles |",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:66-78",
        "path": "research/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 66,
        "end": 78,
        "snippet": "",
        "omitted": "Showing lines 66-51; original range ended at 78."
      },
      {
        "kind": "file",
        "display": "README.md:103-119",
        "path": "research/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 103,
        "end": 119,
        "snippet": "",
        "omitted": "Showing lines 103-51; original range ended at 119."
      },
      {
        "kind": "file",
        "display": "README.md:123-143",
        "path": "research/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 123,
        "end": 143,
        "snippet": "",
        "omitted": "Showing lines 123-51; original range ended at 143."
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-002",
    "conclusion": "Package is `hermes-agent` `0.14.0`, Python `>=3.11`, console scripts include `hermes`, `hermes-agent`, `hermes-acp`, and dependencies use exact-pin/optional-extras strategy",
    "type": "source fact",
    "location": "`pyproject.toml:5-12`, `pyproject.toml:13-33`, `pyproject.toml:69-207`, `pyproject.toml:209-212`, `pyproject.toml:226-227`",
    "confidence": "high",
    "verified": "",
    "note": "Package and dependency strategy",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "pyproject.toml:5-12",
        "path": "research/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 5,
        "end": 12
      },
      {
        "kind": "file",
        "display": "pyproject.toml:13-33",
        "path": "research/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 13,
        "end": 33
      },
      {
        "kind": "file",
        "display": "pyproject.toml:69-207",
        "path": "research/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 69,
        "end": 207
      },
      {
        "kind": "file",
        "display": "pyproject.toml:209-212",
        "path": "research/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 209,
        "end": 212
      },
      {
        "kind": "file",
        "display": "pyproject.toml:226-227",
        "path": "research/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 226,
        "end": 227
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-003",
    "conclusion": "CLI wrapper enters `hermes_cli.main.main`; main supports profile override, startup discovery, and default chat command",
    "type": "source fact",
    "location": "`hermes:1-11`, `hermes_cli/main.py:183-235`, `hermes_cli/main.py:10758-10799`, `hermes_cli/main.py:10928-10953`",
    "confidence": "high",
    "verified": "",
    "note": "CLI entry",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User interfaces and scheduled-task entries are organized around AIAgent.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Session / Config / DB",
        "sub": "profiles / session store / cron jobs",
        "role": "state",
        "status": "source-verified",
        "detail": "Profiles, session keys, gateway store, cron jobs, and local config form runtime state boundaries.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Messaging Gateway -> Session / Config / DB",
        "sub": "session/delivery state",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: session/delivery state.",
        "relation": "Messaging Gateway to Session / Config / DB"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "AIAgent -> Session / Config / DB",
        "sub": "config/profile",
        "role": "context-build",
        "status": "",
        "detail": "Relationship semantics: config/profile.",
        "relation": "AIAgent to Session / Config / DB"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User command, external message, TUI RPC, ACP request, or scheduled task.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Adapter",
        "sub": "args / message / schedule",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Converts different entries into context that AIAgent can consume.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event -> Entry Adapter",
        "sub": "input",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: input.",
        "relation": "Entry Event to Entry Adapter"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Access Layer",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Interface Layer\", Architecture Overview / node \"Session / Config / DB\", Architecture Overview / edge \"Messaging Gateway -> Session / Config / DB\", Architecture Overview / edge \"AIAgent -> Session / Config / DB\" in the architecture diagram. Evidence conclusion: CLI wrapper enters `hermes_cli.main.main`; main supports profile override, startup discovery, and default chat command. The diagram explanation says: User interfaces and scheduled-task entries are organized around AIAgent.; Profiles, session keys, gateway store, cron jobs, and local config form runtime state boundaries.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "hermes:1-11",
        "path": "research/hermes-agent/hermes",
        "relativePath": "hermes",
        "start": 1,
        "end": 11
      },
      {
        "kind": "file",
        "display": "hermes_cli/main.py:183-235",
        "path": "research/hermes-agent/hermes_cli/main.py",
        "relativePath": "hermes_cli/main.py",
        "start": 183,
        "end": 235
      },
      {
        "kind": "file",
        "display": "hermes_cli/main.py:10758-10799",
        "path": "research/hermes-agent/hermes_cli/main.py",
        "relativePath": "hermes_cli/main.py",
        "start": 10758,
        "end": 10799
      },
      {
        "kind": "file",
        "display": "hermes_cli/main.py:10928-10953",
        "path": "research/hermes-agent/hermes_cli/main.py",
        "relativePath": "hermes_cli/main.py",
        "start": 10928,
        "end": 10953
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-004",
    "conclusion": "`AIAgent` is the Agent facade; initialization delegates to `agent_init`, main loop delegates to `conversation_loop`; the loop covers prompt caching, context compression, streaming, tool calls, session/memory/skill finalization",
    "type": "source fact",
    "location": "`run_agent.py:326-331`, `run_agent.py:349-470`, `run_agent.py:4053-4078`, `agent/agent_init.py:907-927`, `agent/agent_init.py:966-1179`, `agent/agent_init.py:1414-1505`, `agent/conversation_loop.py:1-15`, `agent/conversation_loop.py:232-317`, `agent/conversation_loop.py:451-570`, `agent/conversation_loop.py:760-878`, `agent/conversation_loop.py:1097-1145`, `agent/conversation_loop.py:3195-3428`, `agent/conversation_loop.py:3889-4165`",
    "confidence": "high",
    "verified": "",
    "note": "Agent core",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "AIAgent",
        "sub": "run_agent.py",
        "role": "module",
        "status": "source-verified",
        "detail": "Core facade that receives entry parameters, initializes context, and enters conversation runtime.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "run_conversation",
        "sub": "conversation_loop.py",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "Agent turn main loop: model calls, tool calls, result writing, and streaming output.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Interface Layer -> AIAgent",
        "sub": "entry normalization",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: entry normalization.",
        "relation": "Interface Layer to AIAgent"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Messaging Gateway -> AIAgent",
        "sub": "SessionContext",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: SessionContext.",
        "relation": "Messaging Gateway to AIAgent"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "AIAgent -> run_conversation",
        "sub": "start turn",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: start turn.",
        "relation": "AIAgent to run_conversation"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "AIAgent",
        "sub": "init + context",
        "role": "module",
        "status": "source-verified",
        "detail": "Initializes provider, tools, memory, plugins, and system prompt.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Conversation Loop",
        "sub": "model turn",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "Unified execution loop for model turn and tool calls.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Adapter -> AIAgent",
        "sub": "context",
        "role": "context-build",
        "status": "",
        "detail": "Relationship semantics: context.",
        "relation": "Entry Adapter to AIAgent"
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "AIAgent -> Conversation Loop",
        "sub": "execute turn",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: execute turn.",
        "relation": "AIAgent to Conversation Loop"
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "ToolRegistry -> Conversation Loop",
        "sub": "result",
        "role": "result-return",
        "status": "",
        "detail": "Relationship semantics: result.",
        "relation": "ToolRegistry to Conversation Loop"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Agent Core Layer",
        "sub": "AIAgent facade and initialization",
        "role": "module",
        "status": "source-verified",
        "detail": "AIAgent facade and initialization",
        "relation": "system prompt / context / provider / memory"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Conversation Runtime Layer",
        "sub": "run_conversation / model loop / tool calls",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "run_conversation / model loop / tool calls",
        "relation": "model turn / tool call / streaming / errors"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"AIAgent\", Architecture Overview / node \"run_conversation\", Architecture Overview / edge \"Interface Layer -> AIAgent\", Architecture Overview / edge \"Messaging Gateway -> AIAgent\" in the architecture diagram. Evidence conclusion: `AIAgent` is the Agent facade; initialization delegates to `agent_init`, main loop delegates to `conversation_loop`; the loop covers prompt caching, context compression, streaming, tool calls, session/memory/skill finalization. The diagram explanation says: Core facade that receives entry parameters, initializes context, and enters conversation runtime.; Agent turn main loop: model calls, tool calls, result writing, and streaming output.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "run_agent.py:326-331",
        "path": "research/hermes-agent/run_agent.py",
        "relativePath": "run_agent.py",
        "start": 326,
        "end": 331
      },
      {
        "kind": "file",
        "display": "run_agent.py:349-470",
        "path": "research/hermes-agent/run_agent.py",
        "relativePath": "run_agent.py",
        "start": 349,
        "end": 470
      },
      {
        "kind": "file",
        "display": "run_agent.py:4053-4078",
        "path": "research/hermes-agent/run_agent.py",
        "relativePath": "run_agent.py",
        "start": 4053,
        "end": 4078
      },
      {
        "kind": "file",
        "display": "agent/agent_init.py:907-927",
        "path": "research/hermes-agent/agent/agent_init.py",
        "relativePath": "agent/agent_init.py",
        "start": 907,
        "end": 927
      },
      {
        "kind": "file",
        "display": "agent/agent_init.py:966-1179",
        "path": "research/hermes-agent/agent/agent_init.py",
        "relativePath": "agent/agent_init.py",
        "start": 966,
        "end": 1179
      },
      {
        "kind": "file",
        "display": "agent/agent_init.py:1414-1505",
        "path": "research/hermes-agent/agent/agent_init.py",
        "relativePath": "agent/agent_init.py",
        "start": 1414,
        "end": 1505
      },
      {
        "kind": "file",
        "display": "agent/conversation_loop.py:1-15",
        "path": "research/hermes-agent/agent/conversation_loop.py",
        "relativePath": "agent/conversation_loop.py",
        "start": 1,
        "end": 15
      },
      {
        "kind": "file",
        "display": "agent/conversation_loop.py:232-317",
        "path": "research/hermes-agent/agent/conversation_loop.py",
        "relativePath": "agent/conversation_loop.py",
        "start": 232,
        "end": 317
      }
    ],
    "sourceLimitNote": "5 additional locations are not expanded here. See evidence-index.md for the full list."
  },
  {
    "id": "H-005",
    "conclusion": "`ToolRegistry` is the tool registration and dispatch center; built-in tools self-register via import; registry has generation counter, availability checks, override, and async dispatch",
    "type": "source fact",
    "location": "`tools/registry.py:1-15`, `tools/registry.py:57-74`, `tools/registry.py:151-168`, `tools/registry.py:234-306`, `tools/registry.py:337-416`",
    "confidence": "high",
    "verified": "",
    "note": "Tool registration",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "ToolRegistry + Toolsets",
        "sub": "registry / model_tools",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Central tool registry, toolset filtering, model schema conversion, and tool-call dispatch.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "run_conversation -> ToolRegistry + Toolsets",
        "sub": "tool schema/call",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: tool schema/call.",
        "relation": "run_conversation to ToolRegistry + Toolsets"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager -> ToolRegistry + Toolsets",
        "sub": "register capability",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: register capability.",
        "relation": "Plugin Manager to ToolRegistry + Toolsets"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "ToolRegistry",
        "sub": "toolsets / call dispatch",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Exposes available tools to the model and executes model-returned tool calls.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Conversation Loop -> ToolRegistry",
        "sub": "tool call",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: tool call.",
        "relation": "Conversation Loop to ToolRegistry"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Capability Extension Layer",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"ToolRegistry + Toolsets\", Architecture Overview / edge \"run_conversation -> ToolRegistry + Toolsets\", Architecture Overview / edge \"Plugin Manager -> ToolRegistry + Toolsets\", Main Runtime Flow / node \"ToolRegistry\" in the architecture diagram. Evidence conclusion: `ToolRegistry` is the tool registration and dispatch center; built-in tools self-register via import; registry has generation counter, availability checks, override, and async dispatch. The diagram explanation says: Central tool registry, toolset filtering, model schema conversion, and tool-call dispatch.; Relationship semantics: tool schema/call.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "tools/registry.py:1-15",
        "path": "research/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 1,
        "end": 15
      },
      {
        "kind": "file",
        "display": "tools/registry.py:57-74",
        "path": "research/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 57,
        "end": 74
      },
      {
        "kind": "file",
        "display": "tools/registry.py:151-168",
        "path": "research/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 151,
        "end": 168
      },
      {
        "kind": "file",
        "display": "tools/registry.py:234-306",
        "path": "research/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 234,
        "end": 306
      },
      {
        "kind": "file",
        "display": "tools/registry.py:337-416",
        "path": "research/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 337,
        "end": 416
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-006",
    "conclusion": "`model_tools.py` turns registry into model tool schema, filters by toolset/disabled toolset, and handles hooks, approvals, dispatch, and error wrapping in `handle_function_call`",
    "type": "source fact",
    "location": "`model_tools.py:1-21`, `model_tools.py:243-326`, `model_tools.py:329-390`, `model_tools.py:741-899`",
    "confidence": "high",
    "verified": "",
    "note": "Tool orchestration",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "ToolRegistry + Toolsets",
        "sub": "registry / model_tools",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Central tool registry, toolset filtering, model schema conversion, and tool-call dispatch.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "run_conversation -> ToolRegistry + Toolsets",
        "sub": "tool schema/call",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: tool schema/call.",
        "relation": "run_conversation to ToolRegistry + Toolsets"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager -> ToolRegistry + Toolsets",
        "sub": "register capability",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: register capability.",
        "relation": "Plugin Manager to ToolRegistry + Toolsets"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "ToolRegistry",
        "sub": "toolsets / call dispatch",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Exposes available tools to the model and executes model-returned tool calls.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Conversation Loop -> ToolRegistry",
        "sub": "tool call",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: tool call.",
        "relation": "Conversation Loop to ToolRegistry"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Conversation Runtime Layer",
        "sub": "run_conversation / model loop / tool calls",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "run_conversation / model loop / tool calls",
        "relation": "model turn / tool call / streaming / errors"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"ToolRegistry + Toolsets\", Architecture Overview / edge \"run_conversation -> ToolRegistry + Toolsets\", Architecture Overview / edge \"Plugin Manager -> ToolRegistry + Toolsets\", Main Runtime Flow / node \"ToolRegistry\" in the architecture diagram. Evidence conclusion: `model_tools.py` turns registry into model tool schema, filters by toolset/disabled toolset, and handles hooks, approvals, dispatch, and error wrapping in `handle_function_call`. The diagram explanation says: Central tool registry, toolset filtering, model schema conversion, and tool-call dispatch.; Relationship semantics: tool schema/call.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "model_tools.py:1-21",
        "path": "research/hermes-agent/model_tools.py",
        "relativePath": "model_tools.py",
        "start": 1,
        "end": 21
      },
      {
        "kind": "file",
        "display": "model_tools.py:243-326",
        "path": "research/hermes-agent/model_tools.py",
        "relativePath": "model_tools.py",
        "start": 243,
        "end": 326
      },
      {
        "kind": "file",
        "display": "model_tools.py:329-390",
        "path": "research/hermes-agent/model_tools.py",
        "relativePath": "model_tools.py",
        "start": 329,
        "end": 390
      },
      {
        "kind": "file",
        "display": "model_tools.py:741-899",
        "path": "research/hermes-agent/model_tools.py",
        "relativePath": "model_tools.py",
        "start": 741,
        "end": 899
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-007",
    "conclusion": "`toolsets.py` defines core tool sets and toolsets; command registry uses `CommandDef` for CLI/Gateway/Slack/plugin commands",
    "type": "source fact",
    "location": "`toolsets.py:29-73`, `toolsets.py:78-240`, `toolsets.py:767-825`, `hermes_cli/commands.py:1-8`, `hermes_cli/commands.py:45-130`, `hermes_cli/commands.py:228-326`, `hermes_cli/commands.py:1030-1089`",
    "confidence": "high",
    "verified": "",
    "note": "Toolsets and commands",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "ToolRegistry + Toolsets",
        "sub": "registry / model_tools",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Central tool registry, toolset filtering, model schema conversion, and tool-call dispatch.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "run_conversation -> ToolRegistry + Toolsets",
        "sub": "tool schema/call",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: tool schema/call.",
        "relation": "run_conversation to ToolRegistry + Toolsets"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager -> ToolRegistry + Toolsets",
        "sub": "register capability",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: register capability.",
        "relation": "Plugin Manager to ToolRegistry + Toolsets"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "ToolRegistry",
        "sub": "toolsets / call dispatch",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Exposes available tools to the model and executes model-returned tool calls.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Conversation Loop -> ToolRegistry",
        "sub": "tool call",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: tool call.",
        "relation": "Conversation Loop to ToolRegistry"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Capability Extension Layer",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"ToolRegistry + Toolsets\", Architecture Overview / edge \"run_conversation -> ToolRegistry + Toolsets\", Architecture Overview / edge \"Plugin Manager -> ToolRegistry + Toolsets\", Main Runtime Flow / node \"ToolRegistry\" in the architecture diagram. Evidence conclusion: `toolsets.py` defines core tool sets and toolsets; command registry uses `CommandDef` for CLI/Gateway/Slack/plugin commands. The diagram explanation says: Central tool registry, toolset filtering, model schema conversion, and tool-call dispatch.; Relationship semantics: tool schema/call.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "toolsets.py:29-73",
        "path": "research/hermes-agent/toolsets.py",
        "relativePath": "toolsets.py",
        "start": 29,
        "end": 73
      },
      {
        "kind": "file",
        "display": "toolsets.py:78-240",
        "path": "research/hermes-agent/toolsets.py",
        "relativePath": "toolsets.py",
        "start": 78,
        "end": 240
      },
      {
        "kind": "file",
        "display": "toolsets.py:767-825",
        "path": "research/hermes-agent/toolsets.py",
        "relativePath": "toolsets.py",
        "start": 767,
        "end": 825
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:1-8",
        "path": "research/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 1,
        "end": 8
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:45-130",
        "path": "research/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 45,
        "end": 130
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:228-326",
        "path": "research/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 228,
        "end": 326
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:1030-1089",
        "path": "research/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 1030,
        "end": 1089
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-008",
    "conclusion": "General plugin system supports bundled/user/project/entrypoint sources; `PluginContext` can register tools, CLI/slash commands, hooks, context engines, provider-like capabilities, gateway platforms, and read-only skills; hook execution fails open",
    "type": "source fact",
    "location": "`hermes_cli/plugins.py:1-31`, `plugins.py:128-168`, `plugins.py:180-267`, `plugins.py:287-528`, `plugins.py:531-760`, `plugins.py:820-948`, `plugins.py:1170-1234`, `plugins.py:1296-1409`, `plugins.py:1428-1588`",
    "confidence": "high",
    "verified": "",
    "note": "Plugin control plane",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Capability Extension Layer",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Plugin Manager\", Layer View / layer \"Capability Extension Layer\" in the architecture diagram. Evidence conclusion: General plugin system supports bundled/user/project/entrypoint sources; `PluginContext` can register tools, CLI/slash commands, hooks, context engines, provider-like capabilities, gateway platforms, and read-only skills; hook execution fails open. The diagram explanation says: Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.; ToolRegistry / toolsets / plugins / providers",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "hermes_cli/plugins.py:1-31",
        "path": "research/hermes-agent/hermes_cli/plugins.py",
        "relativePath": "hermes_cli/plugins.py",
        "start": 1,
        "end": 31
      },
      {
        "kind": "file",
        "display": "plugins.py:128-168",
        "path": "research/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 128,
        "end": 168
      },
      {
        "kind": "file",
        "display": "plugins.py:180-267",
        "path": "research/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 180,
        "end": 267
      },
      {
        "kind": "file",
        "display": "plugins.py:287-528",
        "path": "research/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 287,
        "end": 528
      },
      {
        "kind": "file",
        "display": "plugins.py:531-760",
        "path": "research/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 531,
        "end": 760
      },
      {
        "kind": "file",
        "display": "plugins.py:820-948",
        "path": "research/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 820,
        "end": 948
      },
      {
        "kind": "file",
        "display": "plugins.py:1170-1234",
        "path": "research/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 1170,
        "end": 1234
      },
      {
        "kind": "file",
        "display": "plugins.py:1296-1409",
        "path": "research/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 1296,
        "end": 1409
      }
    ],
    "sourceLimitNote": "1 additional locations are not expanded here. See evidence-index.md for the full list."
  },
  {
    "id": "H-009",
    "conclusion": "Gateway uses `GatewayRunner`, `MessageEvent`, `BasePlatformAdapter`, `SessionSource`, and `SessionContext` to process multi-platform messages, session keys, cached/fresh AIAgent, and duplicate delivery protection",
    "type": "source fact",
    "location": "`gateway/run.py:1542-1590`, `gateway/run.py:3652-3725`, `gateway/run.py:6504-6605`, `gateway/run.py:7574-7615`, `gateway/run.py:7630-7668`, `gateway/run.py:7991-8007`, `gateway/run.py:15490-15538`, `gateway/run.py:16337-16403`, `gateway/run.py:16801-16808`, `gateway/run.py:17634-17668`, `gateway/platforms/base.py:999-1103`, `gateway/platforms/base.py:1141-1156`, `gateway/platforms/base.py:1370-1485`, `gateway/session.py:71-179`, `gateway/session.py:579-691`, `gateway/session.py:1313-1348`",
    "confidence": "high",
    "verified": "",
    "note": "Gateway runtime surface",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Messaging Gateway",
        "sub": "gateway/run.py",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Platform adapters, allowlist/pairing, SessionContext, delivery, and agent cache.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Session / Config / DB",
        "sub": "profiles / session store / cron jobs",
        "role": "state",
        "status": "source-verified",
        "detail": "Profiles, session keys, gateway store, cron jobs, and local config form runtime state boundaries.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Messaging Gateway -> Session / Config / DB",
        "sub": "session/delivery state",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: session/delivery state.",
        "relation": "Messaging Gateway to Session / Config / DB"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "AIAgent -> Session / Config / DB",
        "sub": "config/profile",
        "role": "context-build",
        "status": "",
        "detail": "Relationship semantics: config/profile.",
        "relation": "AIAgent to Session / Config / DB"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Adapter",
        "sub": "args / message / schedule",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Converts different entries into context that AIAgent can consume.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Response / Delivery",
        "sub": "stdout / TUI / platform",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Outputs result to terminal, TUI, or messaging platform depending on the entry.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event -> Entry Adapter",
        "sub": "input",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: input.",
        "relation": "Entry Event to Entry Adapter"
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Conversation Loop -> Response / Delivery",
        "sub": "response",
        "role": "result-return",
        "status": "",
        "detail": "Relationship semantics: response.",
        "relation": "Conversation Loop to Response / Delivery"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "State and Memory Layer",
        "sub": "SessionStore / profiles / MemoryManager",
        "role": "state",
        "status": "source-verified",
        "detail": "SessionStore / profiles / MemoryManager",
        "relation": "session key / profile / memory / cron DB"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Platform Delivery Layer",
        "sub": "Gateway adapters / pairing / delivery",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Gateway adapters / pairing / delivery",
        "relation": "adapter / allowlist / pairing / delivery"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Messaging Gateway\", Architecture Overview / node \"Session / Config / DB\", Architecture Overview / edge \"Messaging Gateway -> Session / Config / DB\", Architecture Overview / edge \"AIAgent -> Session / Config / DB\" in the architecture diagram. Evidence conclusion: Gateway uses `GatewayRunner`, `MessageEvent`, `BasePlatformAdapter`, `SessionSource`, and `SessionContext` to process multi-platform messages, session keys, cached/fresh AIAgent, and duplicate delivery protection. The diagram explanation says: Platform adapters, allowlist/pairing, SessionContext, delivery, and agent cache.; Profiles, session keys, gateway store, cron jobs, and local config form runtime state boundaries.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "gateway/run.py:1542-1590",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 1542,
        "end": 1590
      },
      {
        "kind": "file",
        "display": "gateway/run.py:3652-3725",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 3652,
        "end": 3725
      },
      {
        "kind": "file",
        "display": "gateway/run.py:6504-6605",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 6504,
        "end": 6605
      },
      {
        "kind": "file",
        "display": "gateway/run.py:7574-7615",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 7574,
        "end": 7615
      },
      {
        "kind": "file",
        "display": "gateway/run.py:7630-7668",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 7630,
        "end": 7668
      },
      {
        "kind": "file",
        "display": "gateway/run.py:7991-8007",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 7991,
        "end": 8007
      },
      {
        "kind": "file",
        "display": "gateway/run.py:15490-15538",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 15490,
        "end": 15538
      },
      {
        "kind": "file",
        "display": "gateway/run.py:16337-16403",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 16337,
        "end": 16403
      }
    ],
    "sourceLimitNote": "8 additional locations are not expanded here. See evidence-index.md for the full list."
  },
  {
    "id": "H-010",
    "conclusion": "Gateway platform registry lets plugin platforms take priority over built-in if/elif adapter creation; `ADDING_A_PLATFORM` recommends the plugin path",
    "type": "source fact",
    "location": "`gateway/platform_registry.py:1-10`, `platform_registry.py:38-187`, `platform_registry.py:208-240`, `gateway/run.py:5960-6125`, `gateway/platforms/ADDING_A_PLATFORM.md:1-15`, `ADDING_A_PLATFORM.md:17-43`, `ADDING_A_PLATFORM.md:71-115`",
    "confidence": "high",
    "verified": "",
    "note": "Platform extension",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Messaging Gateway",
        "sub": "gateway/run.py",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Platform adapters, allowlist/pairing, SessionContext, delivery, and agent cache.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Platform Delivery Layer",
        "sub": "Gateway adapters / pairing / delivery",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Gateway adapters / pairing / delivery",
        "relation": "adapter / allowlist / pairing / delivery"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Messaging Gateway\", Architecture Overview / node \"Plugin Manager\", Layer View / layer \"Platform Delivery Layer\" in the architecture diagram. Evidence conclusion: Gateway platform registry lets plugin platforms take priority over built-in if/elif adapter creation; `ADDING_A_PLATFORM` recommends the plugin path. The diagram explanation says: Platform adapters, allowlist/pairing, SessionContext, delivery, and agent cache.; Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "gateway/platform_registry.py:1-10",
        "path": "research/hermes-agent/gateway/platform_registry.py",
        "relativePath": "gateway/platform_registry.py",
        "start": 1,
        "end": 10
      },
      {
        "kind": "file",
        "display": "platform_registry.py:38-187",
        "path": "research/hermes-agent/platform_registry.py",
        "relativePath": "platform_registry.py",
        "start": 38,
        "end": 187
      },
      {
        "kind": "file",
        "display": "platform_registry.py:208-240",
        "path": "research/hermes-agent/platform_registry.py",
        "relativePath": "platform_registry.py",
        "start": 208,
        "end": 240
      },
      {
        "kind": "file",
        "display": "gateway/run.py:5960-6125",
        "path": "research/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 5960,
        "end": 6125
      },
      {
        "kind": "file",
        "display": "gateway/platforms/ADDING_A_PLATFORM.md:1-15",
        "path": "research/hermes-agent/gateway/platforms/ADDING_A_PLATFORM.md",
        "relativePath": "gateway/platforms/ADDING_A_PLATFORM.md",
        "start": 1,
        "end": 15
      },
      {
        "kind": "file",
        "display": "ADDING_A_PLATFORM.md:17-43",
        "path": "research/hermes-agent/ADDING_A_PLATFORM.md",
        "relativePath": "ADDING_A_PLATFORM.md",
        "start": 17,
        "end": 43
      },
      {
        "kind": "file",
        "display": "ADDING_A_PLATFORM.md:71-115",
        "path": "research/hermes-agent/ADDING_A_PLATFORM.md",
        "relativePath": "ADDING_A_PLATFORM.md",
        "start": 71,
        "end": 115
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-011",
    "conclusion": "Provider Profile describes provider behavior; provider lazy discovery supports bundled/user/legacy and user-overrides-bundled, with downstream wiring to auth/models/doctor/config/runtime/transport/run_agent",
    "type": "source fact",
    "location": "`providers/base.py:1-9`, `providers/base.py:38-129`, `providers/__init__.py:1-29`, `providers/__init__.py:53-88`, `providers/__init__.py:140-190`, `providers/README.md:29-53`",
    "confidence": "high",
    "verified": "",
    "note": "Model provider",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Provider Profile",
        "sub": "providers / profiles",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Model-provider behavior is moved into profiles to reduce provider-specific logic in the main loop.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "run_conversation -> Provider Profile",
        "sub": "model call",
        "role": "model-stream",
        "status": "",
        "detail": "Relationship semantics: model call.",
        "relation": "run_conversation to Provider Profile"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager -> Provider Profile",
        "sub": "extend provider",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: extend provider.",
        "relation": "Plugin Manager to Provider Profile"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Capability Extension Layer",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Provider Profile\", Architecture Overview / node \"Plugin Manager\", Architecture Overview / edge \"run_conversation -> Provider Profile\", Architecture Overview / edge \"Plugin Manager -> Provider Profile\" in the architecture diagram. Evidence conclusion: Provider Profile describes provider behavior; provider lazy discovery supports bundled/user/legacy and user-overrides-bundled, with downstream wiring to auth/models/doctor/config/runtime/transport/run_agent. The diagram explanation says: Model-provider behavior is moved into profiles to reduce provider-specific logic in the main loop.; Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "providers/base.py:1-9",
        "path": "research/hermes-agent/providers/base.py",
        "relativePath": "providers/base.py",
        "start": 1,
        "end": 9
      },
      {
        "kind": "file",
        "display": "providers/base.py:38-129",
        "path": "research/hermes-agent/providers/base.py",
        "relativePath": "providers/base.py",
        "start": 38,
        "end": 129
      },
      {
        "kind": "file",
        "display": "providers/__init__.py:1-29",
        "path": "research/hermes-agent/providers/__init__.py",
        "relativePath": "providers/__init__.py",
        "start": 1,
        "end": 29
      },
      {
        "kind": "file",
        "display": "providers/__init__.py:53-88",
        "path": "research/hermes-agent/providers/__init__.py",
        "relativePath": "providers/__init__.py",
        "start": 53,
        "end": 88
      },
      {
        "kind": "file",
        "display": "providers/__init__.py:140-190",
        "path": "research/hermes-agent/providers/__init__.py",
        "relativePath": "providers/__init__.py",
        "start": 140,
        "end": 190
      },
      {
        "kind": "file",
        "display": "providers/README.md:29-53",
        "path": "research/hermes-agent/providers/README.md",
        "relativePath": "providers/README.md",
        "start": 29,
        "end": 53
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-012",
    "conclusion": "Memory Provider has system prompt, prefetch, sync_turn, tool schemas, and tool-call interfaces; MemoryManager allows only one external provider and isolates failures",
    "type": "source fact",
    "location": "`agent/memory_provider.py:1-31`, `memory_provider.py:42-137`, `agent/memory_manager.py:244-340`, `plugins/memory/__init__.py:1-20`, `plugins/memory/__init__.py:67-181`",
    "confidence": "high",
    "verified": "",
    "note": "Memory system",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Memory Manager",
        "sub": "built-in + one provider",
        "role": "state",
        "status": "official-supported",
        "detail": "Built-in memory is always enabled; at most one external memory provider is active, with failures isolated.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager -> Memory Manager",
        "sub": "extend memory",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: extend memory.",
        "relation": "Plugin Manager to Memory Manager"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "run_conversation -> Memory Manager",
        "sub": "read/write memory",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: read/write memory.",
        "relation": "run_conversation to Memory Manager"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Memory Provider",
        "sub": "prefetch / sync / tool schemas",
        "role": "state",
        "status": "source-verified",
        "detail": "Memory participates in prompt, prefetch, turn sync, and optional tool schema.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Conversation Loop -> Memory Provider",
        "sub": "memory read/write",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: memory read/write.",
        "relation": "Conversation Loop to Memory Provider"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "State and Memory Layer",
        "sub": "SessionStore / profiles / MemoryManager",
        "role": "state",
        "status": "source-verified",
        "detail": "SessionStore / profiles / MemoryManager",
        "relation": "session key / profile / memory / cron DB"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Plugin Manager\", Architecture Overview / node \"Memory Manager\", Architecture Overview / edge \"Plugin Manager -> Memory Manager\", Architecture Overview / edge \"run_conversation -> Memory Manager\" in the architecture diagram. Evidence conclusion: Memory Provider has system prompt, prefetch, sync_turn, tool schemas, and tool-call interfaces; MemoryManager allows only one external provider and isolates failures. The diagram explanation says: Plugins can register tools, hooks, slash commands, gateway platforms, providers, memory, and more.; Built-in memory is always enabled; at most one external memory provider is active, with failures isolated.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent/memory_provider.py:1-31",
        "path": "research/hermes-agent/agent/memory_provider.py",
        "relativePath": "agent/memory_provider.py",
        "start": 1,
        "end": 31
      },
      {
        "kind": "file",
        "display": "memory_provider.py:42-137",
        "path": "research/hermes-agent/memory_provider.py",
        "relativePath": "memory_provider.py",
        "start": 42,
        "end": 137
      },
      {
        "kind": "file",
        "display": "agent/memory_manager.py:244-340",
        "path": "research/hermes-agent/agent/memory_manager.py",
        "relativePath": "agent/memory_manager.py",
        "start": 244,
        "end": 340
      },
      {
        "kind": "file",
        "display": "plugins/memory/__init__.py:1-20",
        "path": "research/hermes-agent/plugins/memory/__init__.py",
        "relativePath": "plugins/memory/__init__.py",
        "start": 1,
        "end": 20
      },
      {
        "kind": "file",
        "display": "plugins/memory/__init__.py:67-181",
        "path": "research/hermes-agent/plugins/memory/__init__.py",
        "relativePath": "plugins/memory/__init__.py",
        "start": 67,
        "end": 181
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-013",
    "conclusion": "TUI gateway connects Node/Ink TUI to Python Agent via stdio JSON-RPC; stdout is protocol-only, slow handlers use a thread pool, and method registry covers session/prompt/approval/slash/tools/cron/skills/shell/browser",
    "type": "source fact",
    "location": "`tui_gateway/entry.py:1-23`, `entry.py:187-240`, `tui_gateway/server.py:37-75`, `server.py:137-180`, `server.py:364-464`, `server.py:2000`, `server.py:2233-2856`, `server.py:3140-3388`, `server.py:3869-3894`, `server.py:5658-6738`",
    "confidence": "high",
    "verified": "",
    "note": "TUI bridge",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User interfaces and scheduled-task entries are organized around AIAgent.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User command, external message, TUI RPC, ACP request, or scheduled task.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Access Layer",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Interface Layer\", Main Runtime Flow / node \"Entry Event\", Layer View / layer \"Access Layer\" in the architecture diagram. Evidence conclusion: TUI gateway connects Node/Ink TUI to Python Agent via stdio JSON-RPC; stdout is protocol-only, slow handlers use a thread pool, and method registry covers session/prompt/approval/slash/tools/cron/skills/shell/browser. The diagram explanation says: User interfaces and scheduled-task entries are organized around AIAgent.; User command, external message, TUI RPC, ACP request, or scheduled task.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "tui_gateway/entry.py:1-23",
        "path": "research/hermes-agent/tui_gateway/entry.py",
        "relativePath": "tui_gateway/entry.py",
        "start": 1,
        "end": 23
      },
      {
        "kind": "file",
        "display": "entry.py:187-240",
        "path": "research/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 187,
        "end": 240
      },
      {
        "kind": "file",
        "display": "tui_gateway/server.py:37-75",
        "path": "research/hermes-agent/tui_gateway/server.py",
        "relativePath": "tui_gateway/server.py",
        "start": 37,
        "end": 75
      },
      {
        "kind": "file",
        "display": "server.py:137-180",
        "path": "research/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 137,
        "end": 180
      },
      {
        "kind": "file",
        "display": "server.py:364-464",
        "path": "research/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 364,
        "end": 464
      },
      {
        "kind": "file",
        "display": "server.py:2000",
        "path": "research/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 2000,
        "end": 2000
      },
      {
        "kind": "file",
        "display": "server.py:2233-2856",
        "path": "research/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 2233,
        "end": 2856
      },
      {
        "kind": "file",
        "display": "server.py:3140-3388",
        "path": "research/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 3140,
        "end": 3388
      }
    ],
    "sourceLimitNote": "2 additional locations are not expanded here. See evidence-index.md for the full list."
  },
  {
    "id": "H-014",
    "conclusion": "`cmd_chat` handles resume/continue, first-run setup, TUI branch, startup env flags, and eventually calls `cli.main(**kwargs)`",
    "type": "source fact",
    "location": "`hermes_cli/main.py:1624-1807`",
    "confidence": "high",
    "verified": "",
    "note": "CLI chat",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User interfaces and scheduled-task entries are organized around AIAgent.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User command, external message, TUI RPC, ACP request, or scheduled task.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Response / Delivery",
        "sub": "stdout / TUI / platform",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Outputs result to terminal, TUI, or messaging platform depending on the entry.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Conversation Loop -> Response / Delivery",
        "sub": "response",
        "role": "result-return",
        "status": "",
        "detail": "Relationship semantics: response.",
        "relation": "Conversation Loop to Response / Delivery"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Access Layer",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Interface Layer\", Main Runtime Flow / node \"Entry Event\", Main Runtime Flow / node \"Response / Delivery\", Main Runtime Flow / edge \"Conversation Loop -> Response / Delivery\" in the architecture diagram. Evidence conclusion: `cmd_chat` handles resume/continue, first-run setup, TUI branch, startup env flags, and eventually calls `cli.main(**kwargs)`. The diagram explanation says: User interfaces and scheduled-task entries are organized around AIAgent.; User command, external message, TUI RPC, ACP request, or scheduled task.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "hermes_cli/main.py:1624-1807",
        "path": "research/hermes-agent/hermes_cli/main.py",
        "relativePath": "hermes_cli/main.py",
        "start": 1624,
        "end": 1807
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-015",
    "conclusion": "ACP adapter reserves stdout for JSON-RPC, loads env, supports check/setup/setup-browser, discovers MCP tools at startup, and runs `HermesACPAgent`",
    "type": "source fact",
    "location": "`acp_adapter/entry.py:1-14`, `entry.py:75-109`, `entry.py:111-181`, `entry.py:184-260`",
    "confidence": "high",
    "verified": "",
    "note": "ACP entry",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User interfaces and scheduled-task entries are organized around AIAgent.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User command, external message, TUI RPC, ACP request, or scheduled task.",
        "relation": ""
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Access Layer",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Interface Layer\", Main Runtime Flow / node \"Entry Event\", Layer View / layer \"Access Layer\" in the architecture diagram. Evidence conclusion: ACP adapter reserves stdout for JSON-RPC, loads env, supports check/setup/setup-browser, discovers MCP tools at startup, and runs `HermesACPAgent`. The diagram explanation says: User interfaces and scheduled-task entries are organized around AIAgent.; User command, external message, TUI RPC, ACP request, or scheduled task.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "acp_adapter/entry.py:1-14",
        "path": "research/hermes-agent/acp_adapter/entry.py",
        "relativePath": "acp_adapter/entry.py",
        "start": 1,
        "end": 14
      },
      {
        "kind": "file",
        "display": "entry.py:75-109",
        "path": "research/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 75,
        "end": 109
      },
      {
        "kind": "file",
        "display": "entry.py:111-181",
        "path": "research/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 111,
        "end": 181
      },
      {
        "kind": "file",
        "display": "entry.py:184-260",
        "path": "research/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 184,
        "end": 260
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-016",
    "conclusion": "Cron jobs live under Hermes home; scheduler is called by gateway background every 60 seconds and uses file lock, profile context, toolset resolution, prompt-injection scan, and output/delivery mechanisms",
    "type": "source fact",
    "location": "`cron/jobs.py:1-6`, `cron/jobs.py:37-47`, `cron/jobs.py:137-159`, `cron/jobs.py:187-240`, `cron/scheduler.py:1-9`, `scheduler.py:47-88`, `scheduler.py:90-132`, `scheduler.py:150-240`",
    "confidence": "high",
    "verified": "",
    "note": "Cron",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User interfaces and scheduled-task entries are organized around AIAgent.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Session / Config / DB",
        "sub": "profiles / session store / cron jobs",
        "role": "state",
        "status": "source-verified",
        "detail": "Profiles, session keys, gateway store, cron jobs, and local config form runtime state boundaries.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Messaging Gateway -> Session / Config / DB",
        "sub": "session/delivery state",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: session/delivery state.",
        "relation": "Messaging Gateway to Session / Config / DB"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "AIAgent -> Session / Config / DB",
        "sub": "config/profile",
        "role": "context-build",
        "status": "",
        "detail": "Relationship semantics: config/profile.",
        "relation": "AIAgent to Session / Config / DB"
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "User command, external message, TUI RPC, ACP request, or scheduled task.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Adapter",
        "sub": "args / message / schedule",
        "role": "adapter",
        "status": "source-verified",
        "detail": "Converts different entries into context that AIAgent can consume.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "flow",
        "viewLabel": "Main Runtime Flow",
        "viewDescription": "This path normalizes CLI/TUI/Gateway/cron differences into one turn execution path, then returns output through tool registry, memory, and delivery.",
        "title": "Entry Event -> Entry Adapter",
        "sub": "input",
        "role": "request-flow",
        "status": "",
        "detail": "Relationship semantics: input.",
        "relation": "Entry Event to Entry Adapter"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "Access Layer",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer View",
        "viewDescription": "The layer diagram identifies structures worth studying independently: entry convergence, Agent facade, registry-driven tools, plugin layering, and state isolation.",
        "title": "State and Memory Layer",
        "sub": "SessionStore / profiles / MemoryManager",
        "role": "state",
        "status": "source-verified",
        "detail": "SessionStore / profiles / MemoryManager",
        "relation": "session key / profile / memory / cron DB"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Interface Layer\", Architecture Overview / node \"Session / Config / DB\", Architecture Overview / edge \"Messaging Gateway -> Session / Config / DB\", Architecture Overview / edge \"AIAgent -> Session / Config / DB\" in the architecture diagram. Evidence conclusion: Cron jobs live under Hermes home; scheduler is called by gateway background every 60 seconds and uses file lock, profile context, toolset resolution, prompt-injection scan, and output/delivery mechanisms. The diagram explanation says: User interfaces and scheduled-task entries are organized around AIAgent.; Profiles, session keys, gateway store, cron jobs, and local config form runtime state boundaries.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "cron/jobs.py:1-6",
        "path": "research/hermes-agent/cron/jobs.py",
        "relativePath": "cron/jobs.py",
        "start": 1,
        "end": 6
      },
      {
        "kind": "file",
        "display": "cron/jobs.py:37-47",
        "path": "research/hermes-agent/cron/jobs.py",
        "relativePath": "cron/jobs.py",
        "start": 37,
        "end": 47
      },
      {
        "kind": "file",
        "display": "cron/jobs.py:137-159",
        "path": "research/hermes-agent/cron/jobs.py",
        "relativePath": "cron/jobs.py",
        "start": 137,
        "end": 159
      },
      {
        "kind": "file",
        "display": "cron/jobs.py:187-240",
        "path": "research/hermes-agent/cron/jobs.py",
        "relativePath": "cron/jobs.py",
        "start": 187,
        "end": 240
      },
      {
        "kind": "file",
        "display": "cron/scheduler.py:1-9",
        "path": "research/hermes-agent/cron/scheduler.py",
        "relativePath": "cron/scheduler.py",
        "start": 1,
        "end": 9
      },
      {
        "kind": "file",
        "display": "scheduler.py:47-88",
        "path": "research/hermes-agent/scheduler.py",
        "relativePath": "scheduler.py",
        "start": 47,
        "end": 88
      },
      {
        "kind": "file",
        "display": "scheduler.py:90-132",
        "path": "research/hermes-agent/scheduler.py",
        "relativePath": "scheduler.py",
        "start": 90,
        "end": 132
      },
      {
        "kind": "file",
        "display": "scheduler.py:150-240",
        "path": "research/hermes-agent/scheduler.py",
        "relativePath": "scheduler.py",
        "start": 150,
        "end": 240
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-001",
    "conclusion": "Many entries eventually construct or call `AIAgent`, so Hermes' core architecture is entry adapters converging on one Agent runtime",
    "type": "inference",
    "location": "",
    "confidence": "",
    "verified": "",
    "note": "",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-002",
    "conclusion": "Built-in and plugin tools enter ToolRegistry, then model_tools/toolsets expose and execute them, so the tool system is registry-first",
    "type": "inference",
    "location": "",
    "confidence": "",
    "verified": "",
    "note": "",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-003",
    "conclusion": "General plugins, providers, memory, and platforms have different contracts, so Hermes tends to layer extension by problem domain instead of using a single hook model",
    "type": "inference",
    "location": "",
    "confidence": "",
    "verified": "",
    "note": "",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-004",
    "conclusion": "Gateway and cron both handle profile/session/delivery/toolset, so background and messaging entries share many runtime boundaries",
    "type": "inference",
    "location": "",
    "confidence": "",
    "verified": "",
    "note": "",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-HA-001",
    "conclusion": "Official README/docs position Hermes as a multi-entry self-improving agent covering CLI/TUI/Gateway/cron/skills/memory/providers",
    "type": "official fact",
    "location": "https://github.com/NousResearch/hermes-agent, https://hermes-agent.nousresearch.com/docs/developer-guide/architecture",
    "confidence": "high",
    "verified": "yes",
    "note": "Corresponds to `H-001`, `H-003`, `H-004`, `H-013`-`H-016`",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://github.com/NousResearch/hermes-agent",
        "url": "https://github.com/NousResearch/hermes-agent"
      },
      {
        "kind": "url",
        "display": "https://hermes-agent.nousresearch.com/docs/developer-guide/architecture",
        "url": "https://hermes-agent.nousresearch.com/docs/developer-guide/architecture"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-HA-002",
    "conclusion": "Official Toolsets docs describe toolsets as bundles that control tool capability by platform/session/task",
    "type": "official fact",
    "location": "https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference",
    "confidence": "high",
    "verified": "yes",
    "note": "Corresponds to `H-005`, `H-006`, `H-007`",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference",
        "url": "https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-HA-003",
    "conclusion": "Official Plugins docs say plugins can register tools, hooks, slash commands, platform/provider integrations, and more",
    "type": "official fact",
    "location": "https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins",
    "confidence": "high",
    "verified": "yes",
    "note": "Corresponds to `H-008`, `H-010`, `H-011`, `H-012`",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins",
        "url": "https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-HA-004",
    "conclusion": "Official Messaging Gateway docs emphasize messaging sessions, allowlist/pairing, security defaults, and delivery",
    "type": "official fact",
    "location": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging",
    "confidence": "medium",
    "verified": "partly",
    "note": "Gateway structure verified; platform security details pending sampling",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging",
        "url": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-HA-005",
    "conclusion": "Official Memory Providers docs say built-in memory is always enabled but only one external provider can be active at a time",
    "type": "official fact",
    "location": "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers",
    "confidence": "high",
    "verified": "yes",
    "note": "Corresponds to `H-012`",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Memory Manager",
        "sub": "built-in + one provider",
        "role": "state",
        "status": "official-supported",
        "detail": "Built-in memory is always enabled; at most one external memory provider is active, with failures isolated.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "Plugin Manager -> Memory Manager",
        "sub": "extend memory",
        "role": "registration",
        "status": "",
        "detail": "Relationship semantics: extend memory.",
        "relation": "Plugin Manager to Memory Manager"
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "Architecture Overview",
        "viewDescription": "Hermes Agent's main design is that CLI, TUI, Gateway, ACP, and cron share AIAgent and run_conversation instead of implementing separate agent loops per entry.",
        "title": "run_conversation -> Memory Manager",
        "sub": "read/write memory",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: read/write memory.",
        "relation": "run_conversation to Memory Manager"
      }
    ],
    "explanation": "This evidence supports Architecture Overview / node \"Memory Manager\", Architecture Overview / edge \"Plugin Manager -> Memory Manager\", Architecture Overview / edge \"run_conversation -> Memory Manager\" in the architecture diagram. Evidence conclusion: Official Memory Providers docs say built-in memory is always enabled but only one external provider can be active at a time. The diagram explanation says: Built-in memory is always enabled; at most one external memory provider is active, with failures isolated.; Relationship semantics: extend memory.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers",
        "url": "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers"
      }
    ],
    "sourceLimitNote": ""
  }
];
