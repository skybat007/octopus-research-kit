window.EVIDENCE_META = {
  "title": "OpenClaw 证据解释",
  "description": "从架构图回到证据解释：展示架构语境、证据结论、源码/文档片段和原始索引位置。",
  "source": "../evidence-index.md",
  "projectRoot": "openclaw"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "C-001",
    "conclusion": "OpenClaw 定位为 personal AI assistant，Gateway 是 control plane，支持多渠道",
    "type": "doc fact",
    "location": "`README.md:21-27`, `README.md:146-155`",
    "confidence": "高",
    "verified": "",
    "note": "产品定位和 highlights",
    "graphRefs": [
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "本地基础设施",
        "sub": "local-first device and gateway process",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "local-first device and gateway process",
        "relation": "desktop / config / logs / node"
      }
    ],
    "explanation": "这条证据在架构图中支撑 分层视图 / 分层「本地基础设施」。证据结论是：OpenClaw 定位为 personal AI assistant，Gateway 是 control plane，支持多渠道。图中的具体解释是：local-first device and gateway process",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:21-27",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 21,
        "end": 27,
        "snippet": "   21  **OpenClaw** is a _personal AI assistant_ you run on your own devices.\n   22  It answers you on the channels you already use. It can speak and listen on macOS/iOS/Android, and can render a live Canvas you control. The Gateway is just the control plane — the product is the assistant.\n   23  \n   24  If you want a personal, single-user assistant that feels local, fast, and always-on, this is it.\n   25  \n   26  Supported channels include: WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, IRC, Microsoft Teams, Matrix, Feishu, LINE, Mattermost, Nextcloud Talk, Nostr, Synology Chat, Tlon, Twitch, Zalo, Zalo Personal, WeChat, QQ, WebChat.\n   27  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:146-155",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 146,
        "end": 155,
        "snippet": "  146  ## Highlights\n  147  \n  148  - **[Local-first Gateway](https://docs.openclaw.ai/gateway)** — single control plane for sessions, channels, tools, and events.\n  149  - **[Multi-channel inbox](https://docs.openclaw.ai/channels)** — WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, IRC, Microsoft Teams, Matrix, Feishu, LINE, Mattermost, Nextcloud Talk, Nostr, Synology Chat, Tlon, Twitch, Zalo, Zalo Personal, WeChat, QQ, WebChat, macOS, iOS/Android.\n  150  - **[Multi-agent routing](https://docs.openclaw.ai/gateway/configuration)** — route inbound channels/accounts/peers to isolated agents (workspaces + per-agent sessions).\n  151  - **[Voice Wake](https://docs.openclaw.ai/nodes/voicewake) + [Talk Mode](https://docs.openclaw.ai/nodes/talk)** — wake words on macOS/iOS and continuous voice on Android (ElevenLabs + system TTS fallback).\n  152  - **[Live Canvas](https://docs.openclaw.ai/platforms/mac/canvas)** — agent-driven visual workspace with [A2UI](https://docs.openclaw.ai/platforms/mac/canvas#canvas-a2ui).\n  153  - **[First-class tools](https://docs.openclaw.ai/tools)** — browser, canvas, nodes, cron, sessions, and Discord/Slack actions.\n  154  - **[Companion apps](https://docs.openclaw.ai/platforms/macos)** — macOS menu bar app + iOS/Android [nodes](https://docs.openclaw.ai/nodes).\n  155  - **[Onboarding](https://docs.openclaw.ai/start/wizard) + [skills](https://docs.openclaw.ai/tools/skills)** — onboarding-driven setup with bundled/managed/workspace skills.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-002",
    "conclusion": "package version 为 `2026.5.19`，bin 是 `openclaw.mjs`，workspace 包含 `ui`, `packages/*`, `extensions/*`",
    "type": "source fact",
    "location": "`package.json:2-18`, `pnpm-workspace.yaml:1-5`",
    "confidence": "高",
    "verified": "",
    "note": "固定调研快照",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "package.json:2-18",
        "path": "package.json",
        "relativePath": "package.json",
        "start": 2,
        "end": 18,
        "snippet": "    2    \"name\": \"openclaw\",\n    3    \"version\": \"2026.5.19\",\n    4    \"description\": \"Multi-channel AI gateway with extensible messaging integrations\",\n    5    \"keywords\": [],\n    6    \"homepage\": \"https://github.com/openclaw/openclaw#readme\",\n    7    \"bugs\": {\n    8      \"url\": \"https://github.com/openclaw/openclaw/issues\"\n    9    },\n   10    \"license\": \"MIT\",\n   11    \"author\": \"\",\n   12    \"repository\": {\n   13      \"type\": \"git\",\n   14      \"url\": \"git+https://github.com/openclaw/openclaw.git\"\n   15    },\n   16    \"bin\": {\n   17      \"openclaw\": \"openclaw.mjs\"\n   18    },",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "pnpm-workspace.yaml:1-5",
        "path": "pnpm-workspace.yaml",
        "relativePath": "pnpm-workspace.yaml",
        "start": 1,
        "end": 5,
        "snippet": "    1  packages:\n    2    - .\n    3    - ui\n    4    - packages/*\n    5    - extensions/*",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-003",
    "conclusion": "Core 应保持 plugin-agnostic，插件只能通过 SDK/manifest/runtime helpers/documented barrels 等接入",
    "type": "source fact",
    "location": "`AGENTS.md:26-45`",
    "confidence": "高",
    "verified": "",
    "note": "仓库架构硬约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Bundled Plugins",
        "sub": "extensions/**",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "内置插件覆盖 provider、channel、tool、hook、service 等能力类型。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Bundled Plugins」。证据结论是：Core 应保持 plugin-agnostic，插件只能通过 SDK/manifest/runtime helpers/documented barrels 等接入。图中的具体解释是：内置插件覆盖 provider、channel、tool、hook、service 等能力类型。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "AGENTS.md:26-45",
        "path": "AGENTS.md",
        "relativePath": "AGENTS.md",
        "start": 26,
        "end": 45,
        "snippet": "   26  ## Architecture\n   27  \n   28  - Core stays plugin-agnostic. No bundled ids/defaults/policy in core when manifest/registry/capability contracts work.\n   29  - Plugins cross into core only via `openclaw/plugin-sdk/*`, manifest metadata, injected runtime helpers, documented barrels (`api.ts`, `runtime-api.ts`).\n   30  - Plugin prod code: no core `src/**`, `src/plugin-sdk-internal/**`, other plugin `src/**`, or relative outside package.\n   31  - Core/tests: no deep plugin internals (`extensions/*/src/**`, `onboard.js`). Use public barrels, SDK facade, generic contracts.\n   32  - Owner boundary: owner-specific repair/detection/onboarding/auth/defaults/provider behavior lives in owner plugin. Shared/core gets generic seams only.\n   33  - Dependency ownership follows runtime ownership: plugin-only deps stay plugin-local; root deps only for core imports or intentionally internalized bundled plugin runtime.\n   34  - Internal bundled plugins ship in core dist; bundled-only facade loader ok only for them.\n   35  - External official plugins own package/deps and are excluded from core dist; core uses registry-aware `facade-runtime` or generic contracts.\n   36  - Externalizing a bundled plugin: update package excludes, official catalogs, docs, tests, and prove core runtime paths resolve installed plugin roots before root-dep removal.\n   37  - Legacy config repair belongs in `openclaw doctor --fix`, not startup/load-time core migrations. Runtime paths use canonical contracts.\n   38  - Fix shape: default to clean bounded refactor, not smallest patch. Move ownership to right boundary; delete stale abstractions, duplicate policy, dead branches, wrappers, fallback stacks.\n   39  - Lean code is a goal. No internal shims, aliases, legacy names, broad fallbacks, or defensive branches just to reduce diff or handle unrealistic edge cases.\n   40  - Handle real production states, shipped upgrade paths, security boundaries, and dependency contracts. Public/hostile/observed malformed input gets care; hypothetical malformed input does not.\n   41  - Public plugin SDK/API is the compat exception. New API first, old path only via named compat/deprecation metadata, docs, warnings when useful, tests for old+new, planned removal.\n   42  - Migrate internal/bundled callers to modern API in the same change. Do not let internal compat become permanent architecture.\n   43  - Channels are implementation under `src/channels/**`; plugin authors get SDK seams. Providers own auth/catalog/runtime hooks; core owns generic loop.",
        "omitted": "已截取 26-43 行，原始范围到 45 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-004",
    "conclusion": "Gateway 是单一长期运行控制面，控制 WS API、events、nodes、protocol、pairing、安全等",
    "type": "doc fact",
    "location": "`docs/concepts/architecture.md:8-31`, `docs/concepts/architecture.md:55-96`, `docs/concepts/architecture.md:97-148`",
    "confidence": "高",
    "verified": "",
    "note": "仓库概念文档",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "入口与渠道",
        "sub": "CLI / HTTP / WS / Channel",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多入口进入 Gateway：本地 CLI、HTTP/WS surface、channel plugin 和外部消息。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "UI / Apps / Nodes",
        "sub": "control clients / devices",
        "role": "adapter",
        "status": "source-verified",
        "detail": "控制面客户端和节点通过 Gateway 协议连接，不直接接管 Agent runtime。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Gateway 控制面",
        "sub": "src/gateway/**",
        "role": "module",
        "status": "source-verified",
        "detail": "长期运行控制面：协议、事件、节点、安全、pairing、RPC 和消息路由。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "入口与渠道 -> Gateway 控制面",
        "sub": "外部请求",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：外部请求。",
        "relation": "入口与渠道 到 Gateway 控制面"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "UI / Apps / Nodes -> Gateway 控制面",
        "sub": "控制协议",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：控制协议。",
        "relation": "UI / Apps / Nodes 到 Gateway 控制面"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Capability Registry -> Gateway 控制面",
        "sub": "surface 消费",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：surface 消费。",
        "relation": "Capability Registry 到 Gateway 控制面"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Channel / CLI / WS",
        "sub": "incoming event",
        "role": "adapter",
        "status": "source-verified",
        "detail": "外部消息或 CLI 命令进入 Gateway。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "接入层",
        "sub": "CLI / HTTP / WS / Channel / UI",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / HTTP / WS / Channel / UI",
        "relation": "CLI / HTTP/WS / Channel / UI/Nodes"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "Gateway 控制层",
        "sub": "protocol / events / nodes / security / pairing",
        "role": "module",
        "status": "source-verified",
        "detail": "protocol / events / nodes / security / pairing",
        "relation": "RPC / events / pairing / node registry"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "本地基础设施",
        "sub": "local-first device and gateway process",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "local-first device and gateway process",
        "relation": "desktop / config / logs / node"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「入口与渠道」、架构总览 / 节点「UI / Apps / Nodes」、架构总览 / 节点「Gateway 控制面」、架构总览 / 连线「入口与渠道 -> Gateway 控制面」。证据结论是：Gateway 是单一长期运行控制面，控制 WS API、events、nodes、protocol、pairing、安全等。图中的具体解释是：多入口进入 Gateway：本地 CLI、HTTP/WS surface、channel plugin 和外部消息。；控制面客户端和节点通过 Gateway 协议连接，不直接接管 Agent runtime。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/architecture.md:8-31",
        "path": "docs/concepts/architecture.md",
        "relativePath": "docs/concepts/architecture.md",
        "start": 8,
        "end": 31,
        "snippet": "    8  ## Overview\n    9  \n   10  - A single long-lived **Gateway** owns all messaging surfaces (WhatsApp via\n   11    Baileys, Telegram via grammY, Slack, Discord, Signal, iMessage, WebChat).\n   12  - Control-plane clients (macOS app, CLI, web UI, automations) connect to the\n   13    Gateway over **WebSocket** on the configured bind host (default\n   14    `127.0.0.1:18789`).\n   15  - **Nodes** (macOS/iOS/Android/headless) also connect over **WebSocket**, but\n   16    declare `role: node` with explicit caps/commands.\n   17  - One Gateway per host; it is the only place that opens a WhatsApp session.\n   18  - The **canvas host** is served by the Gateway HTTP server under:\n   19    - `/__openclaw__/canvas/` (agent-editable HTML/CSS/JS)\n   20    - `/__openclaw__/a2ui/` (A2UI host)\n   21      It uses the same port as the Gateway (default `18789`).\n   22  \n   23  ## Components and flows\n   24  \n   25  ### Gateway (daemon)",
        "omitted": "已截取 8-25 行，原始范围到 31 行。"
      },
      {
        "kind": "file",
        "display": "docs/concepts/architecture.md:55-96",
        "path": "docs/concepts/architecture.md",
        "relativePath": "docs/concepts/architecture.md",
        "start": 55,
        "end": 96,
        "snippet": "   55  ## Connection lifecycle (single client)\n   56  \n   57  ```mermaid\n   58  sequenceDiagram\n   59      participant Client\n   60      participant Gateway\n   61  \n   62      Client->>Gateway: req:connect\n   63      Gateway-->>Client: res (ok)\n   64      Note right of Gateway: or res error + close\n   65      Note left of Client: payload=hello-ok<br>snapshot: presence + health\n   66  \n   67      Gateway-->>Client: event:presence\n   68      Gateway-->>Client: event:tick\n   69  \n   70      Client->>Gateway: req:agent\n   71      Gateway-->>Client: res:agent<br>ack {runId, status:\"accepted\"}\n   72      Gateway-->>Client: event:agent<br>(streaming)",
        "omitted": "已截取 55-72 行，原始范围到 96 行。"
      },
      {
        "kind": "file",
        "display": "docs/concepts/architecture.md:97-148",
        "path": "docs/concepts/architecture.md",
        "relativePath": "docs/concepts/architecture.md",
        "start": 97,
        "end": 148,
        "snippet": "   97  ## Pairing + local trust\n   98  \n   99  - All WS clients (operators + nodes) include a **device identity** on `connect`.\n  100  - New device IDs require pairing approval; the Gateway issues a **device token**\n  101    for subsequent connects.\n  102  - Direct local loopback connects can be auto-approved to keep same-host UX\n  103    smooth.\n  104  - OpenClaw also has a narrow backend/container-local self-connect path for\n  105    trusted shared-secret helper flows.\n  106  - Tailnet and LAN connects, including same-host tailnet binds, still require\n  107    explicit pairing approval.\n  108  - All connects must sign the `connect.challenge` nonce.\n  109  - Signature payload `v3` also binds `platform` + `deviceFamily`; the gateway\n  110    pins paired metadata on reconnect and requires repair pairing for metadata\n  111    changes.\n  112  - **Non-local** connects still require explicit approval.\n  113  - Gateway auth (`gateway.auth.*`) still applies to **all** connections, local or\n  114    remote.",
        "omitted": "已截取 97-114 行，原始范围到 148 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-005",
    "conclusion": "CLI/Gateway 启动链路为 launcher -> entry -> gateway CLI -> lazy server -> server.impl",
    "type": "source fact",
    "location": "`openclaw.mjs:11-46`, `openclaw.mjs:183-225`, `src/entry.ts:71-153`, `src/cli/gateway-cli/run.ts:503-817`, `src/gateway/server.ts:13-29`, `src/gateway/server.impl.ts:531-740`",
    "confidence": "高",
    "verified": "",
    "note": "静态代码链路",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "入口与渠道",
        "sub": "CLI / HTTP / WS / Channel",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多入口进入 Gateway：本地 CLI、HTTP/WS surface、channel plugin 和外部消息。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Channel / CLI / WS",
        "sub": "incoming event",
        "role": "adapter",
        "status": "source-verified",
        "detail": "外部消息或 CLI 命令进入 Gateway。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "接入层",
        "sub": "CLI / HTTP / WS / Channel / UI",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / HTTP / WS / Channel / UI",
        "relation": "CLI / HTTP/WS / Channel / UI/Nodes"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「入口与渠道」、运行主链路 / 节点「Channel / CLI / WS」、分层视图 / 分层「接入层」。证据结论是：CLI/Gateway 启动链路为 launcher -> entry -> gateway CLI -> lazy server -> server.impl。图中的具体解释是：多入口进入 Gateway：本地 CLI、HTTP/WS surface、channel plugin 和外部消息。；外部消息或 CLI 命令进入 Gateway。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "openclaw.mjs:11-46",
        "path": "openclaw.mjs",
        "relativePath": "openclaw.mjs",
        "start": 11,
        "end": 46,
        "snippet": "   11  const MIN_NODE_MAJOR = 22;\n   12  const MIN_NODE_MINOR = 19;\n   13  const MIN_NODE_VERSION = `${MIN_NODE_MAJOR}.${MIN_NODE_MINOR}`;\n   14  \n   15  const parseNodeVersion = (rawVersion) => {\n   16    const [majorRaw = \"0\", minorRaw = \"0\"] = rawVersion.split(\".\");\n   17    return {\n   18      major: Number(majorRaw),\n   19      minor: Number(minorRaw),\n   20    };\n   21  };\n   22  \n   23  const isSupportedNodeVersion = (version) =>\n   24    version.major > MIN_NODE_MAJOR ||\n   25    (version.major === MIN_NODE_MAJOR && version.minor >= MIN_NODE_MINOR);\n   26  \n   27  const ensureSupportedNodeVersion = () => {\n   28    if (isSupportedNodeVersion(parseNodeVersion(process.versions.node))) {",
        "omitted": "已截取 11-28 行，原始范围到 46 行。"
      },
      {
        "kind": "file",
        "display": "openclaw.mjs:183-225",
        "path": "openclaw.mjs",
        "relativePath": "openclaw.mjs",
        "start": 183,
        "end": 225,
        "snippet": "  183  const respawnWithoutCompileCacheIfNeeded = () => {\n  184    if (!isSourceCheckoutLauncher()) {\n  185      return false;\n  186    }\n  187    if (process.env.OPENCLAW_SOURCE_COMPILE_CACHE_RESPAWNED === \"1\") {\n  188      return false;\n  189    }\n  190    if (!module.getCompileCacheDir?.() && !isNodeCompileCacheRequested()) {\n  191      return false;\n  192    }\n  193    const env = {\n  194      ...process.env,\n  195      NODE_DISABLE_COMPILE_CACHE: \"1\",\n  196      OPENCLAW_SOURCE_COMPILE_CACHE_RESPAWNED: \"1\",\n  197    };\n  198    delete env.NODE_COMPILE_CACHE;\n  199    return runRespawnedChild(\n  200      process.execPath,",
        "omitted": "已截取 183-200 行，原始范围到 225 行。"
      },
      {
        "kind": "file",
        "display": "src/entry.ts:71-153",
        "path": "src/entry.ts",
        "relativePath": "src/entry.ts",
        "start": 71,
        "end": 153,
        "snippet": "   71  // Guard: only run entry-point logic when this file is the main module.\n   72  // The bundler may import entry.js as a shared dependency when dist/index.js\n   73  // is the actual entry point; without this guard the top-level code below\n   74  // would call runCli a second time, starting a duplicate gateway that fails\n   75  // on the lock / port and crashes the process.\n   76  if (\n   77    !isMainModule({\n   78      currentFile: fileURLToPath(import.meta.url),\n   79      wrapperEntryPairs: [...ENTRY_WRAPPER_PAIRS],\n   80    })\n   81  ) {\n   82    // Imported as a dependency — skip all entry-point side effects.\n   83  } else {\n   84    const entryFile = fileURLToPath(import.meta.url);\n   85    const installRoot = resolveEntryInstallRoot(entryFile);\n   86    const waitingForCompileCacheRespawn = respawnWithoutOpenClawCompileCacheIfNeeded({\n   87      currentFile: entryFile,\n   88      installRoot,",
        "omitted": "已截取 71-88 行，原始范围到 153 行。"
      },
      {
        "kind": "file",
        "display": "src/cli/gateway-cli/run.ts:503-817",
        "path": "src/cli/gateway-cli/run.ts",
        "relativePath": "src/cli/gateway-cli/run.ts",
        "start": 503,
        "end": 817,
        "snippet": "  503    const startupTrace = createGatewayCliStartupTrace();\n  504  \n  505    // The heaviest part of gateway startup is loading the server module tree\n  506    // (channels, plugins, HTTP stack, etc.). Show a spinner so the user sees\n  507    // progress instead of a silent 15-20 s pause (especially on Windows/NTFS).\n  508    const { startGatewayServer } = await startupTrace.measure(\"cli.server-import\", () =>\n  509      withProgress(\n  510        { label: \"Loading gateway modules…\", indeterminate: true },\n  511        async () => import(\"../../gateway/server.js\"),\n  512      ),\n  513    );\n  514  \n  515    setConsoleTimestampPrefix(true);\n  516  \n  517    if (devMode) {\n  518      const { ensureDevGatewayConfig } = await import(\"./dev.js\");\n  519      await startupTrace.measure(\"cli.dev-config\", () =>\n  520        ensureDevGatewayConfig({ reset: Boolean(opts.reset) }),",
        "omitted": "已截取 503-520 行，原始范围到 817 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server.ts:13-29",
        "path": "src/gateway/server.ts",
        "relativePath": "src/gateway/server.ts",
        "start": 13,
        "end": 29,
        "snippet": "   13  async function loadServerImpl() {\n   14    const startupStartedAt = performance.now();\n   15    const before = performance.now();\n   16    try {\n   17      return await import(\"./server.impl.js\");\n   18    } finally {\n   19      const now = performance.now();\n   20      emitStartupTrace(\"gateway.server-impl-import\", now - before, now - startupStartedAt);\n   21    }\n   22  }\n   23  \n   24  export async function startGatewayServer(\n   25    ...args: Parameters<typeof import(\"./server.impl.js\").startGatewayServer>\n   26  ): ReturnType<typeof import(\"./server.impl.js\").startGatewayServer> {\n   27    const mod = await loadServerImpl();\n   28    return await mod.startGatewayServer(...args);\n   29  }",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "src/gateway/server.impl.ts:531-740",
        "path": "src/gateway/server.impl.ts",
        "relativePath": "src/gateway/server.impl.ts",
        "start": 531,
        "end": 740,
        "snippet": "  531  export async function startGatewayServer(\n  532    port = 18789,\n  533    opts: GatewayServerOptions = {},\n  534  ): Promise<GatewayServer> {\n  535    const { bootstrapGatewayNetworkRuntime } = await import(\"./server-network-runtime.js\");\n  536    bootstrapGatewayNetworkRuntime();\n  537  \n  538    const minimalTestGateway =\n  539      isVitestRuntimeEnv() && process.env.OPENCLAW_TEST_MINIMAL_GATEWAY === \"1\";\n  540  \n  541    // Ensure all default port derivations (browser/canvas) see the actual runtime port.\n  542    process.env.OPENCLAW_GATEWAY_PORT = String(port);\n  543    logAcceptedEnvOption({\n  544      key: \"OPENCLAW_RAW_STREAM\",\n  545      description: \"raw stream logging enabled\",\n  546    });\n  547    logAcceptedEnvOption({\n  548      key: \"OPENCLAW_RAW_STREAM_PATH\",",
        "omitted": "已截取 531-548 行，原始范围到 740 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-006",
    "conclusion": "Gateway 创建 HTTP/WS runtime，连接后发送 challenge，第一帧必须 connect，成功后 hello-ok",
    "type": "source fact",
    "location": "`src/gateway/server-runtime-state.ts:223-268`, `src/gateway/server-runtime-state.ts:275-358`, `src/gateway/server/ws-connection.ts:202-318`, `src/gateway/server/ws-connection.ts:433-508`, `src/gateway/server/ws-connection/message-handler.ts:488-560`, `src/gateway/server/ws-connection/message-handler.ts:1696-1756`",
    "confidence": "高",
    "verified": "",
    "note": "handshake 代码",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "UI / Apps / Nodes",
        "sub": "control clients / devices",
        "role": "adapter",
        "status": "source-verified",
        "detail": "控制面客户端和节点通过 Gateway 协议连接，不直接接管 Agent runtime。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Gateway 控制面",
        "sub": "src/gateway/**",
        "role": "module",
        "status": "source-verified",
        "detail": "长期运行控制面：协议、事件、节点、安全、pairing、RPC 和消息路由。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "入口与渠道 -> Gateway 控制面",
        "sub": "外部请求",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：外部请求。",
        "relation": "入口与渠道 到 Gateway 控制面"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "UI / Apps / Nodes -> Gateway 控制面",
        "sub": "控制协议",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：控制协议。",
        "relation": "UI / Apps / Nodes 到 Gateway 控制面"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Capability Registry -> Gateway 控制面",
        "sub": "surface 消费",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：surface 消费。",
        "relation": "Capability Registry 到 Gateway 控制面"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "Gateway 控制层",
        "sub": "protocol / events / nodes / security / pairing",
        "role": "module",
        "status": "source-verified",
        "detail": "protocol / events / nodes / security / pairing",
        "relation": "RPC / events / pairing / node registry"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「UI / Apps / Nodes」、架构总览 / 节点「Gateway 控制面」、架构总览 / 连线「入口与渠道 -> Gateway 控制面」、架构总览 / 连线「UI / Apps / Nodes -> Gateway 控制面」。证据结论是：Gateway 创建 HTTP/WS runtime，连接后发送 challenge，第一帧必须 connect，成功后 hello-ok。图中的具体解释是：控制面客户端和节点通过 Gateway 协议连接，不直接接管 Agent runtime。；长期运行控制面：协议、事件、节点、安全、pairing、RPC 和消息路由。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/gateway/server-runtime-state.ts:223-268",
        "path": "src/gateway/server-runtime-state.ts",
        "relativePath": "src/gateway/server-runtime-state.ts",
        "start": 223,
        "end": 268,
        "snippet": "  223      // Create WebSocketServer first (with noServer: true) so we can attach upgrade handlers\n  224      // before HTTP servers start listening. This prevents a race condition where connections\n  225      // arrive before the upgrade handler is attached, which causes silent 1006 errors.\n  226      const wss = new WebSocketServer({\n  227        noServer: true,\n  228        maxPayload: MAX_PREAUTH_PAYLOAD_BYTES,\n  229      });\n  230      const preauthConnectionBudget = createPreauthConnectionBudget();\n  231  \n  232      const httpServers: HttpServer[] = [];\n  233      const httpBindHosts: string[] = [];\n  234      for (const _ of bindHosts) {\n  235        const httpServer = createGatewayHttpServer({\n  236          clients,\n  237          controlUiEnabled: params.controlUiEnabled,\n  238          controlUiBasePath: params.controlUiBasePath,\n  239          controlUiRoot: params.controlUiRoot,\n  240          openAiChatCompletionsEnabled: params.openAiChatCompletionsEnabled,",
        "omitted": "已截取 223-240 行，原始范围到 268 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server-runtime-state.ts:275-358",
        "path": "src/gateway/server-runtime-state.ts",
        "relativePath": "src/gateway/server-runtime-state.ts",
        "start": 275,
        "end": 358,
        "snippet": "  275      let startListeningPromise: Promise<void> | null = null;\n  276      const startListening = async (): Promise<void> => {\n  277        if (startListeningPromise) {\n  278          await startListeningPromise;\n  279          return;\n  280        }\n  281        startListeningPromise = (async () => {\n  282          for (const [index, host] of bindHosts.entries()) {\n  283            const server = httpServers[index];\n  284            if (!server) {\n  285              throw new Error(`Missing gateway HTTP server for bind host ${host}`);\n  286            }\n  287            try {\n  288              await listenGatewayHttpServer({\n  289                httpServer: server,\n  290                bindHost: host,\n  291                port: params.port,\n  292              });",
        "omitted": "已截取 275-292 行，原始范围到 358 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server/ws-connection.ts:202-318",
        "path": "src/gateway/server/ws-connection.ts",
        "relativePath": "src/gateway/server/ws-connection.ts",
        "start": 202,
        "end": 318,
        "snippet": "  202  export function attachGatewayWsConnectionHandler(params: AttachGatewayWsConnectionHandlerParams) {\n  203    const {\n  204      wss,\n  205      clients,\n  206      preauthConnectionBudget,\n  207      port,\n  208      pluginSurfaceScheme,\n  209      getPluginNodeCapabilities,\n  210      resolvedAuth,\n  211      getResolvedAuth = () => resolvedAuth,\n  212      getRequiredSharedGatewaySessionGeneration = () =>\n  213        resolveSharedGatewaySessionGeneration(\n  214          getResolvedAuth(),\n  215          getRuntimeConfig().gateway?.trustedProxies,\n  216        ),\n  217      rateLimiter,\n  218      browserRateLimiter,\n  219      isStartupPending,",
        "omitted": "已截取 202-219 行，原始范围到 318 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server/ws-connection.ts:433-508",
        "path": "src/gateway/server/ws-connection.ts",
        "relativePath": "src/gateway/server/ws-connection.ts",
        "start": 433,
        "end": 508,
        "snippet": "  433      const handshakeTimeoutMs = resolvePreauthHandshakeTimeoutMs({\n  434        configuredTimeoutMs: params.preauthHandshakeTimeoutMs,\n  435      });\n  436      const handshakeTimer = setTimeout(() => {\n  437        if (!client) {\n  438          handshakeState = \"failed\";\n  439          setCloseCause(\"handshake-timeout\", {\n  440            handshakeMs: Date.now() - openedAt,\n  441            endpoint,\n  442          });\n  443          logWsControl.warn(\n  444            `handshake timeout conn=${connId} peer=${endpoint ?? \"n/a\"} remote=${remoteAddr ?? \"?\"}`,\n  445          );\n  446          close();\n  447        }\n  448      }, handshakeTimeoutMs);\n  449  \n  450      attachGatewayWsMessageHandlerOnDemand({",
        "omitted": "已截取 433-450 行，原始范围到 508 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server/ws-connection/message-handler.ts:488-560",
        "path": "src/gateway/server/ws-connection/message-handler.ts",
        "relativePath": "src/gateway/server/ws-connection/message-handler.ts",
        "start": 488,
        "end": 560,
        "snippet": "  488        const client = getClient();\n  489        if (!client) {\n  490          // Handshake must be a normal request:\n  491          // { type:\"req\", method:\"connect\", params: ConnectParams }.\n  492          const isRequestFrame = validateRequestFrame(parsed);\n  493          if (\n  494            !isRequestFrame ||\n  495            parsed.method !== \"connect\" ||\n  496            !validateConnectParams(parsed.params)\n  497          ) {\n  498            const handshakeError = isRequestFrame\n  499              ? parsed.method === \"connect\"\n  500                ? `invalid connect params: ${formatValidationErrors(validateConnectParams.errors)}`\n  501                : \"invalid handshake: first request must be connect\"\n  502              : \"invalid request frame\";\n  503            setHandshakeState(\"failed\");\n  504            setCloseCause(\"invalid-handshake\", {\n  505              frameType,",
        "omitted": "已截取 488-505 行，原始范围到 560 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server/ws-connection/message-handler.ts:1696-1756",
        "path": "src/gateway/server/ws-connection/message-handler.ts",
        "relativePath": "src/gateway/server/ws-connection/message-handler.ts",
        "start": 1696,
        "end": 1756,
        "snippet": " 1696            type: \"hello-ok\",\n 1697            protocol: PROTOCOL_VERSION,\n 1698            server: {\n 1699              version: resolveRuntimeServiceVersion(process.env),\n 1700              connId,\n 1701            },\n 1702            features: { methods: gatewayMethods, events },\n 1703            snapshot,\n 1704            ...(Object.keys(pluginSurfaceUrls).length > 0 ? { pluginSurfaceUrls } : {}),\n 1705            auth: {\n 1706              role,\n 1707              scopes: helloOkAuthScopes,\n 1708              ...(deviceToken\n 1709                ? {\n 1710                    deviceToken: deviceToken.token,\n 1711                    issuedAtMs: deviceToken.rotatedAtMs ?? deviceToken.createdAtMs,\n 1712                    ...(bootstrapDeviceTokens.length > 1\n 1713                      ? { deviceTokens: bootstrapDeviceTokens.slice(1) }",
        "omitted": "已截取 1696-1713 行，原始范围到 1756 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-007",
    "conclusion": "Agent runtime 是 OpenClaw session/workspace/tool/channel 外壳 + Pi agent core；agent loop 包括 intake/context/model/tool/stream/persistence",
    "type": "doc fact",
    "location": "`docs/concepts/agent.md:8-16`, `docs/concepts/agent.md:25-75`, `docs/concepts/agent-loop.md:9-44`, `docs/concepts/agent-loop.md:59-115`",
    "confidence": "高",
    "verified": "",
    "note": "概念文档",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Agent Runtime 外壳",
        "sub": "src/agents/**",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "OpenClaw 自有的 Agent 外壳，负责 workspace、session、skills、model、delivery 等边界。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Pi Agent Core",
        "sub": "agent loop / tools",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "执行核心由 Pi agent core 承接，OpenClaw 在外侧提供上下文和能力边界。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Gateway 控制面 -> Agent Runtime 外壳",
        "sub": "agent RPC",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：agent RPC。",
        "relation": "Gateway 控制面 到 Agent Runtime 外壳"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Agent Runtime 外壳 -> Pi Agent Core",
        "sub": "执行循环",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行循环。",
        "relation": "Agent Runtime 外壳 到 Pi Agent Core"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Capability Registry -> Agent Runtime 外壳",
        "sub": "提供工具/模型/渠道",
        "role": "model-stream",
        "status": "",
        "detail": "关系语义：提供工具/模型/渠道。",
        "relation": "Capability Registry 到 Agent Runtime 外壳"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "agentCommandFromIngress",
        "sub": "normalized command",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "把外部入口命令归一到 Agent runtime 可处理的形态。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Pi Runtime",
        "sub": "loop / tools / model",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "执行模型循环和工具调用。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Session Routing -> agentCommandFromIngress",
        "sub": "上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：上下文。",
        "relation": "Session Routing 到 agentCommandFromIngress"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "agentCommandFromIngress -> Pi Runtime",
        "sub": "执行",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行。",
        "relation": "agentCommandFromIngress 到 Pi Runtime"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "Agent 执行层",
        "sub": "OpenClaw shell + Pi agent core",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "OpenClaw shell + Pi agent core",
        "relation": "workspace / session / model/tools / delivery"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Agent Runtime 外壳」、架构总览 / 节点「Pi Agent Core」、架构总览 / 连线「Gateway 控制面 -> Agent Runtime 外壳」、架构总览 / 连线「Agent Runtime 外壳 -> Pi Agent Core」。证据结论是：Agent runtime 是 OpenClaw session/workspace/tool/channel 外壳 + Pi agent core；agent loop 包括 intake/context/model/tool/stream/persistence。图中的具体解释是：OpenClaw 自有的 Agent 外壳，负责 workspace、session、skills、model、delivery 等边界。；执行核心由 Pi agent core 承接，OpenClaw 在外侧提供上下文和能力边界。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/agent.md:8-16",
        "path": "docs/concepts/agent.md",
        "relativePath": "docs/concepts/agent.md",
        "start": 8,
        "end": 16,
        "snippet": "    8  OpenClaw runs a **single embedded agent runtime** - one agent process per\n    9  Gateway, with its own workspace, bootstrap files, and session store. This page\n   10  covers that runtime contract: what the workspace must contain, which files get\n   11  injected, and how sessions bootstrap against it.\n   12  \n   13  ## Workspace (required)\n   14  \n   15  OpenClaw uses a single agent workspace directory (`agents.defaults.workspace`) as the agent's **only** working directory (`cwd`) for tools and context.\n   16  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent.md:25-75",
        "path": "docs/concepts/agent.md",
        "relativePath": "docs/concepts/agent.md",
        "start": 25,
        "end": 75,
        "snippet": "   25  ## Bootstrap files (injected)\n   26  \n   27  Inside `agents.defaults.workspace`, OpenClaw expects these user-editable files:\n   28  \n   29  - `AGENTS.md` - operating instructions + \"memory\"\n   30  - `SOUL.md` - persona, boundaries, tone\n   31  - `TOOLS.md` - user-maintained tool notes (e.g. `imsg`, `sag`, conventions)\n   32  - `BOOTSTRAP.md` - one-time first-run ritual (deleted after completion)\n   33  - `IDENTITY.md` - agent name/vibe/emoji\n   34  - `USER.md` - user profile + preferred address\n   35  \n   36  On the first turn of a new session, OpenClaw injects the contents of these files into the system prompt's Project Context.\n   37  \n   38  Blank files are skipped. Large files are trimmed and truncated with a marker so prompts stay lean (read the file for full content).\n   39  \n   40  If a file is missing, OpenClaw injects a single \"missing file\" marker line (and `openclaw setup` will create a safe default template).\n   41  \n   42  `BOOTSTRAP.md` is only created for a **brand new workspace** (no other bootstrap files present). While it is pending, OpenClaw keeps it in Project Context and adds system-prompt bootstrap guidance for the initial ritual instead of copying it into the user message. If you delete it after completing the ritual, it should not be recreated on later restarts.",
        "omitted": "已截取 25-42 行，原始范围到 75 行。"
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent-loop.md:9-44",
        "path": "docs/concepts/agent-loop.md",
        "relativePath": "docs/concepts/agent-loop.md",
        "start": 9,
        "end": 44,
        "snippet": "    9  An agentic loop is the full \"real\" run of an agent: intake → context assembly → model inference →\n   10  tool execution → streaming replies → persistence. It's the authoritative path that turns a message\n   11  into actions and a final reply, while keeping session state consistent.\n   12  \n   13  In OpenClaw, a loop is a single, serialized run per session that emits lifecycle and stream events\n   14  as the model thinks, calls tools, and streams output. This doc explains how that authentic loop is\n   15  wired end-to-end.\n   16  \n   17  ## Entry points\n   18  \n   19  - Gateway RPC: `agent` and `agent.wait`.\n   20  - CLI: `agent` command.\n   21  \n   22  ## How it works (high-level)\n   23  \n   24  1. `agent` RPC validates params, resolves session (sessionKey/sessionId), persists session metadata, returns `{ runId, acceptedAt }` immediately.\n   25  2. `agentCommand` runs the agent:\n   26     - resolves model + thinking/verbose/trace defaults",
        "omitted": "已截取 9-26 行，原始范围到 44 行。"
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent-loop.md:59-115",
        "path": "docs/concepts/agent-loop.md",
        "relativePath": "docs/concepts/agent-loop.md",
        "start": 59,
        "end": 115,
        "snippet": "   59  ## Session + workspace preparation\n   60  \n   61  - Workspace is resolved and created; sandboxed runs may redirect to a sandbox workspace root.\n   62  - Skills are loaded (or reused from a snapshot) and injected into env and prompt.\n   63  - Bootstrap/context files are resolved and injected into the system prompt report.\n   64  - A session write lock is acquired; `SessionManager` is opened and prepared before streaming. Any\n   65    later transcript rewrite, compaction, or truncation path must take the same lock before opening or\n   66    mutating the transcript file.\n   67  \n   68  ## Prompt assembly + system prompt\n   69  \n   70  - System prompt is built from OpenClaw's base prompt, skills prompt, bootstrap context, and per-run overrides.\n   71  - Model-specific limits and compaction reserve tokens are enforced.\n   72  - See [System prompt](/concepts/system-prompt) for what the model sees.\n   73  \n   74  ## Hook points (where you can intercept)\n   75  \n   76  OpenClaw has two hook systems:",
        "omitted": "已截取 59-76 行，原始范围到 115 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-008",
    "conclusion": "Gateway `agent` RPC 先 ack，再异步调度 `agentCommandFromIngress`，网络入口显式声明 trust",
    "type": "source fact",
    "location": "`src/gateway/server-methods/agent.ts:475-583`, `src/gateway/server-methods/agent.ts:1440-1507`, `src/gateway/server-methods/agent.ts:1592-1666`, `src/agents/agent-command.ts:1593-1643`, `src/agents/command/attempt-execution.ts:630-691`",
    "confidence": "高",
    "verified": "",
    "note": "agent run 代码链路",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Agent Runtime 外壳",
        "sub": "src/agents/**",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "OpenClaw 自有的 Agent 外壳，负责 workspace、session、skills、model、delivery 等边界。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Pi Agent Core",
        "sub": "agent loop / tools",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "执行核心由 Pi agent core 承接，OpenClaw 在外侧提供上下文和能力边界。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Gateway 控制面 -> Agent Runtime 外壳",
        "sub": "agent RPC",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：agent RPC。",
        "relation": "Gateway 控制面 到 Agent Runtime 外壳"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Agent Runtime 外壳 -> Pi Agent Core",
        "sub": "执行循环",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行循环。",
        "relation": "Agent Runtime 外壳 到 Pi Agent Core"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Capability Registry -> Agent Runtime 外壳",
        "sub": "提供工具/模型/渠道",
        "role": "model-stream",
        "status": "",
        "detail": "关系语义：提供工具/模型/渠道。",
        "relation": "Capability Registry 到 Agent Runtime 外壳"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Gateway Ingress",
        "sub": "senderIsOwner / model override",
        "role": "module",
        "status": "source-verified",
        "detail": "网络入口必须显式携带 owner 和 model override 信任事实。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "agentCommandFromIngress",
        "sub": "normalized command",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "把外部入口命令归一到 Agent runtime 可处理的形态。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Pi Runtime",
        "sub": "loop / tools / model",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "执行模型循环和工具调用。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Channel / CLI / WS -> Gateway Ingress",
        "sub": "接入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：接入。",
        "relation": "Channel / CLI / WS 到 Gateway Ingress"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Session Routing -> agentCommandFromIngress",
        "sub": "上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：上下文。",
        "relation": "Session Routing 到 agentCommandFromIngress"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "agentCommandFromIngress -> Pi Runtime",
        "sub": "执行",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行。",
        "relation": "agentCommandFromIngress 到 Pi Runtime"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "Agent 执行层",
        "sub": "OpenClaw shell + Pi agent core",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "OpenClaw shell + Pi agent core",
        "relation": "workspace / session / model/tools / delivery"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Agent Runtime 外壳」、架构总览 / 节点「Pi Agent Core」、架构总览 / 连线「Gateway 控制面 -> Agent Runtime 外壳」、架构总览 / 连线「Agent Runtime 外壳 -> Pi Agent Core」。证据结论是：Gateway `agent` RPC 先 ack，再异步调度 `agentCommandFromIngress`，网络入口显式声明 trust。图中的具体解释是：OpenClaw 自有的 Agent 外壳，负责 workspace、session、skills、model、delivery 等边界。；执行核心由 Pi agent core 承接，OpenClaw 在外侧提供上下文和能力边界。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/gateway/server-methods/agent.ts:475-583",
        "path": "src/gateway/server-methods/agent.ts",
        "relativePath": "src/gateway/server-methods/agent.ts",
        "start": 475,
        "end": 583,
        "snippet": "  475  function dispatchAgentRunFromGateway(params: {\n  476    ingressOpts: Parameters<typeof agentCommandFromIngress>[0];\n  477    runId: string;\n  478    dedupeKeys: readonly string[];\n  479    /**\n  480     * Controller whose signal is wired into `ingressOpts.abortSignal`. Used on\n  481     * completion to drop the matching `chatAbortControllers` entry without\n  482     * touching a same-runId entry owned by a concurrent chat.send.\n  483     */\n  484    abortController: AbortController;\n  485    respond: GatewayRequestHandlerOptions[\"respond\"];\n  486    context: GatewayRequestHandlerOptions[\"context\"];\n  487  }) {\n  488    const inputProvenance = normalizeInputProvenance(params.ingressOpts.inputProvenance);\n  489    const shouldTrackTask =\n  490      params.ingressOpts.sessionKey?.trim() && inputProvenance?.kind !== \"inter_session\";\n  491    if (shouldTrackTask) {\n  492      try {",
        "omitted": "已截取 475-492 行，原始范围到 583 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server-methods/agent.ts:1440-1507",
        "path": "src/gateway/server-methods/agent.ts",
        "relativePath": "src/gateway/server-methods/agent.ts",
        "start": 1440,
        "end": 1507,
        "snippet": " 1440        const deliver = request.deliver === true && resolvedChannel !== INTERNAL_MESSAGE_CHANNEL;\n 1441  \n 1442        // Register before the accepted ack so an immediate chat.abort/sessions.abort\n 1443        // cannot race the active-run entry. Agent RPC runs use the agent timeout;\n 1444        // chat.send keeps the shorter chat cleanup cap.\n 1445        const now = Date.now();\n 1446        const timeoutMs = resolveAgentTimeoutMs({\n 1447          cfg: cfgForAgent ?? cfg,\n 1448          overrideSeconds: typeof request.timeout === \"number\" ? request.timeout : undefined,\n 1449        });\n 1450        const activeModelProvider =\n 1451          providerOverride ??\n 1452          resolveSessionModelRef(\n 1453            cfgForAgent ?? cfg,\n 1454            sessionEntry,\n 1455            resolvedSessionKey\n 1456              ? resolveAgentIdFromSessionKey(resolvedSessionKey)\n 1457              : (agentId ?? resolveDefaultAgentId(cfgForAgent ?? cfg)),",
        "omitted": "已截取 1440-1457 行，原始范围到 1507 行。"
      },
      {
        "kind": "file",
        "display": "src/gateway/server-methods/agent.ts:1592-1666",
        "path": "src/gateway/server-methods/agent.ts",
        "relativePath": "src/gateway/server-methods/agent.ts",
        "start": 1592,
        "end": 1666,
        "snippet": " 1592            dispatchAgentRunFromGateway({\n 1593              ingressOpts: {\n 1594                message,\n 1595                images,\n 1596                imageOrder,\n 1597                agentId: ingressAgentId,\n 1598                provider: providerOverride,\n 1599                model: modelOverride,\n 1600                to: resolvedTo,\n 1601                sessionId: resolvedSessionId,\n 1602                sessionKey: resolvedSessionKey,\n 1603                thinking: request.thinking,\n 1604                deliver,\n 1605                deliveryTargetMode,\n 1606                channel: resolvedChannel,\n 1607                accountId: resolvedAccountId,\n 1608                threadId: resolvedThreadId,\n 1609                runContext: {",
        "omitted": "已截取 1592-1609 行，原始范围到 1666 行。"
      },
      {
        "kind": "file",
        "display": "src/agents/agent-command.ts:1593-1643",
        "path": "src/agents/agent-command.ts",
        "relativePath": "src/agents/agent-command.ts",
        "start": 1593,
        "end": 1643,
        "snippet": " 1593  export async function agentCommand(\n 1594    opts: AgentCommandOpts,\n 1595    runtime: RuntimeEnv = defaultRuntime,\n 1596    deps?: CliDeps,\n 1597  ) {\n 1598    const resolvedDeps = await resolveAgentCommandDeps(deps);\n 1599    return await withLocalGatewayRequestScope(\n 1600      {\n 1601        deps: resolvedDeps,\n 1602        getRuntimeConfig,\n 1603      },\n 1604      async () =>\n 1605        await agentCommandInternal(\n 1606          {\n 1607            ...opts,\n 1608            // agentCommand is the trusted-operator entrypoint used by CLI/local flows.\n 1609            // Ingress callers must opt into owner semantics explicitly via\n 1610            // agentCommandFromIngress so network-facing paths cannot inherit this default by accident.",
        "omitted": "已截取 1593-1610 行，原始范围到 1643 行。"
      },
      {
        "kind": "file",
        "display": "src/agents/command/attempt-execution.ts:630-691",
        "path": "src/agents/command/attempt-execution.ts",
        "relativePath": "src/agents/command/attempt-execution.ts",
        "start": 630,
        "end": 691,
        "snippet": "  630    return runEmbeddedPiAgent({\n  631      sessionId: params.sessionId,\n  632      sessionKey: params.sessionKey,\n  633      agentId: params.sessionAgentId,\n  634      trigger: \"user\",\n  635      messageChannel: params.messageChannel,\n  636      messageProvider: params.opts.messageProvider ?? params.messageChannel,\n  637      agentAccountId: params.runContext.accountId,\n  638      messageTo: params.opts.replyTo ?? params.opts.to,\n  639      messageThreadId: params.opts.threadId,\n  640      groupId: params.runContext.groupId,\n  641      groupChannel: params.runContext.groupChannel,\n  642      groupSpace: params.runContext.groupSpace,\n  643      spawnedBy: params.spawnedBy,\n  644      currentChannelId: params.runContext.currentChannelId,\n  645      currentThreadTs: params.runContext.currentThreadTs,\n  646      replyToMode: params.runContext.replyToMode,\n  647      hasRepliedRef: params.runContext.hasRepliedRef,",
        "omitted": "已截取 630-647 行，原始范围到 691 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-009",
    "conclusion": "Sessions、DM isolation、多 Agent workspace/state/auth/session store 是明确模型",
    "type": "doc fact",
    "location": "`docs/concepts/session.md:10-22`, `docs/concepts/session.md:23-54`, `docs/concepts/session.md:90-97`, `docs/concepts/multi-agent.md:9-19`, `docs/concepts/multi-agent.md:42-63`, `docs/concepts/multi-agent.md:121-129`",
    "confidence": "高",
    "verified": "",
    "note": "session/multi-agent 文档",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Session / Multi-agent",
        "sub": "routing / owner / isolation",
        "role": "state",
        "status": "official-supported",
        "detail": "会话和多 Agent 是一等隔离模型，绑定 workspace、state、auth profile 和 history。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "~/.openclaw",
        "sub": "agentDir / auth / transcripts",
        "role": "state",
        "status": "source-verified",
        "detail": "本地持久化保存 agent 目录、认证、session 历史和 transcript。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Gateway 控制面 -> Session / Multi-agent",
        "sub": "路由归属",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：路由归属。",
        "relation": "Gateway 控制面 到 Session / Multi-agent"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Agent Runtime 外壳 -> Session / Multi-agent",
        "sub": "读写上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：读写上下文。",
        "relation": "Agent Runtime 外壳 到 Session / Multi-agent"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Session / Multi-agent -> ~/.openclaw",
        "sub": "持久化",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：持久化。",
        "relation": "Session / Multi-agent 到 ~/.openclaw"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Session Routing",
        "sub": "DM / group / cron / webhook",
        "role": "state",
        "status": "source-verified",
        "detail": "按来源、会话和 Agent 归属决定上下文边界。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Transcript / State",
        "sub": "history / auth / workspace",
        "role": "state",
        "status": "source-verified",
        "detail": "运行结果、session 历史和本地状态被持久化。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Gateway Ingress -> Session Routing",
        "sub": "鉴权事实",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：鉴权事实。",
        "relation": "Gateway Ingress 到 Session Routing"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "agentCommandFromIngress -> Transcript / State",
        "sub": "记录",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：记录。",
        "relation": "agentCommandFromIngress 到 Transcript / State"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Delivery / Channel Send -> Transcript / State",
        "sub": "投递状态",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：投递状态。",
        "relation": "Delivery / Channel Send 到 Transcript / State"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "状态与隔离层",
        "sub": "session / multi-agent / auth profile / transcripts",
        "role": "state",
        "status": "official-supported",
        "detail": "session / multi-agent / auth profile / transcripts",
        "relation": "agentDir / auth / history / transcript"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Session / Multi-agent」、架构总览 / 节点「~/.openclaw」、架构总览 / 连线「Gateway 控制面 -> Session / Multi-agent」、架构总览 / 连线「Agent Runtime 外壳 -> Session / Multi-agent」。证据结论是：Sessions、DM isolation、多 Agent workspace/state/auth/session store 是明确模型。图中的具体解释是：会话和多 Agent 是一等隔离模型，绑定 workspace、state、auth profile 和 history。；本地持久化保存 agent 目录、认证、session 历史和 transcript。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/session.md:10-22",
        "path": "docs/concepts/session.md",
        "relativePath": "docs/concepts/session.md",
        "start": 10,
        "end": 22,
        "snippet": "   10  OpenClaw organizes conversations into **sessions**. Each message is routed to a\n   11  session based on where it came from -- DMs, group chats, cron jobs, etc.\n   12  \n   13  ## How messages are routed\n   14  \n   15  | Source          | Behavior                  |\n   16  | --------------- | ------------------------- |\n   17  | Direct messages | Shared session by default |\n   18  | Group chats     | Isolated per group        |\n   19  | Rooms/channels  | Isolated per room         |\n   20  | Cron jobs       | Fresh session per run     |\n   21  | Webhooks        | Isolated per hook         |\n   22  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/concepts/session.md:23-54",
        "path": "docs/concepts/session.md",
        "relativePath": "docs/concepts/session.md",
        "start": 23,
        "end": 54,
        "snippet": "   23  ## DM isolation\n   24  \n   25  By default, all DMs share one session for continuity. This is fine for\n   26  single-user setups.\n   27  \n   28  <Warning>\n   29  If multiple people can message your agent, enable DM isolation. Without it, all\n   30  users share the same conversation context -- Alice's private messages would be\n   31  visible to Bob.\n   32  </Warning>\n   33  \n   34  **The fix:**\n   35  \n   36  ```json5\n   37  {\n   38    session: {\n   39      dmScope: \"per-channel-peer\", // isolate by channel + sender\n   40    },",
        "omitted": "已截取 23-40 行，原始范围到 54 行。"
      },
      {
        "kind": "file",
        "display": "docs/concepts/session.md:90-97",
        "path": "docs/concepts/session.md",
        "relativePath": "docs/concepts/session.md",
        "start": 90,
        "end": 97,
        "snippet": "   90  ## Where state lives\n   91  \n   92  All session state is owned by the **gateway**. UI clients query the gateway for\n   93  session data.\n   94  \n   95  - **Store:** `~/.openclaw/agents/<agentId>/sessions/sessions.json`\n   96  - **Transcripts:** `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`\n   97  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/concepts/multi-agent.md:9-19",
        "path": "docs/concepts/multi-agent.md",
        "relativePath": "docs/concepts/multi-agent.md",
        "start": 9,
        "end": 19,
        "snippet": "    9  Run multiple _isolated_ agents — each with its own workspace, state directory (`agentDir`), and session history — plus multiple channel accounts (e.g. two WhatsApps) in one running Gateway. Inbound messages are routed to the right agent through bindings.\n   10  \n   11  An **agent** here is the full per-persona scope: workspace files, auth profiles, model registry, and session store. `agentDir` is the on-disk state directory that holds this per-agent config at `~/.openclaw/agents/<agentId>/`. A **binding** maps a channel account (e.g. a Slack workspace or a WhatsApp number) to one of those agents.\n   12  \n   13  ## What is \"one agent\"?\n   14  \n   15  An **agent** is a fully scoped brain with its own:\n   16  \n   17  - **Workspace** (files, AGENTS.md/SOUL.md/USER.md, local notes, persona rules).\n   18  - **State directory** (`agentDir`) for auth profiles, model registry, and per-agent config.\n   19  - **Session store** (chat history + routing state) under `~/.openclaw/agents/<agentId>/sessions`.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/concepts/multi-agent.md:42-63",
        "path": "docs/concepts/multi-agent.md",
        "relativePath": "docs/concepts/multi-agent.md",
        "start": 42,
        "end": 63,
        "snippet": "   42  The Gateway can host **one agent** (default) or **many agents** side-by-side.\n   43  \n   44  <Note>\n   45  **Workspace note:** each agent's workspace is the **default cwd**, not a hard sandbox. Relative paths resolve inside the workspace, but absolute paths can reach other host locations unless sandboxing is enabled. See [Sandboxing](/gateway/sandboxing).\n   46  </Note>\n   47  \n   48  ## Paths (quick map)\n   49  \n   50  - Config: `~/.openclaw/openclaw.json` (or `OPENCLAW_CONFIG_PATH`)\n   51  - State dir: `~/.openclaw` (or `OPENCLAW_STATE_DIR`)\n   52  - Workspace: `~/.openclaw/workspace` (or `~/.openclaw/workspace-<agentId>`)\n   53  - Agent dir: `~/.openclaw/agents/<agentId>/agent` (or `agents.list[].agentDir`)\n   54  - Sessions: `~/.openclaw/agents/<agentId>/sessions`\n   55  \n   56  ### Single-agent mode (default)\n   57  \n   58  If you do nothing, OpenClaw runs a single agent:\n   59  ",
        "omitted": "已截取 42-59 行，原始范围到 63 行。"
      },
      {
        "kind": "file",
        "display": "docs/concepts/multi-agent.md:121-129",
        "path": "docs/concepts/multi-agent.md",
        "relativePath": "docs/concepts/multi-agent.md",
        "start": 121,
        "end": 129,
        "snippet": "  121  ## Multiple agents = multiple people, multiple personalities\n  122  \n  123  With **multiple agents**, each `agentId` becomes a **fully isolated persona**:\n  124  \n  125  - **Different phone numbers/accounts** (per channel `accountId`).\n  126  - **Different personalities** (per-agent workspace files like `AGENTS.md` and `SOUL.md`).\n  127  - **Separate auth + sessions** (no cross-talk unless explicitly enabled).\n  128  \n  129  This lets **multiple people** share one Gateway server while keeping their AI \"brains\" and data isolated.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-010",
    "conclusion": "Plugin system 有 capability model 和四层架构：manifest/discovery、enablement/validation、runtime loading、surface consumption",
    "type": "doc fact",
    "location": "`docs/plugins/architecture.md:32-51`, `docs/plugins/architecture.md:114-146`, `docs/plugins/architecture.md:148-168`, `docs/plugins/manifest.md:28-54`, `docs/plugins/manifest.md:146-170`",
    "confidence": "高",
    "verified": "",
    "note": "插件文档",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Plugin 控制面",
        "sub": "manifest / discovery / validation",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "先读 manifest 做身份、能力归属、配置校验和加载计划，再进入运行时注册。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Bundled Plugins -> Plugin 控制面",
        "sub": "声明能力",
        "role": "registration",
        "status": "",
        "detail": "关系语义：声明能力。",
        "relation": "Bundled Plugins 到 Plugin 控制面"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "插件能力层",
        "sub": "manifest / validation / runtime registration / surface consumption",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "manifest / validation / runtime registration / surface consumption",
        "relation": "manifest / registry / provider / channel"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Plugin 控制面」、架构总览 / 连线「Bundled Plugins -> Plugin 控制面」、分层视图 / 分层「插件能力层」。证据结论是：Plugin system 有 capability model 和四层架构：manifest/discovery、enablement/validation、runtime loading、surface consumption。图中的具体解释是：先读 manifest 做身份、能力归属、配置校验和加载计划，再进入运行时注册。；关系语义：声明能力。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/plugins/architecture.md:32-51",
        "path": "docs/plugins/architecture.md",
        "relativePath": "docs/plugins/architecture.md",
        "start": 32,
        "end": 51,
        "snippet": "   32  ## Public capability model\n   33  \n   34  Capabilities are the public **native plugin** model inside OpenClaw. Every native OpenClaw plugin registers against one or more capability types:\n   35  \n   36  | Capability             | Registration method                              | Example plugins                      |\n   37  | ---------------------- | ------------------------------------------------ | ------------------------------------ |\n   38  | Text inference         | `api.registerProvider(...)`                      | `openai`, `anthropic`                |\n   39  | CLI inference backend  | `api.registerCliBackend(...)`                    | `openai`, `anthropic`                |\n   40  | Speech                 | `api.registerSpeechProvider(...)`                | `elevenlabs`, `microsoft`            |\n   41  | Realtime transcription | `api.registerRealtimeTranscriptionProvider(...)` | `openai`                             |\n   42  | Realtime voice         | `api.registerRealtimeVoiceProvider(...)`         | `openai`                             |\n   43  | Media understanding    | `api.registerMediaUnderstandingProvider(...)`    | `openai`, `google`                   |\n   44  | Image generation       | `api.registerImageGenerationProvider(...)`       | `openai`, `google`, `fal`, `minimax` |\n   45  | Music generation       | `api.registerMusicGenerationProvider(...)`       | `google`, `minimax`                  |\n   46  | Video generation       | `api.registerVideoGenerationProvider(...)`       | `qwen`                               |\n   47  | Web fetch              | `api.registerWebFetchProvider(...)`              | `firecrawl`                          |\n   48  | Web search             | `api.registerWebSearchProvider(...)`             | `google`                             |\n   49  | Channel / messaging    | `api.registerChannel(...)`                       | `msteams`, `matrix`                  |",
        "omitted": "已截取 32-49 行，原始范围到 51 行。"
      },
      {
        "kind": "file",
        "display": "docs/plugins/architecture.md:114-146",
        "path": "docs/plugins/architecture.md",
        "relativePath": "docs/plugins/architecture.md",
        "start": 114,
        "end": 146,
        "snippet": "  114  ## Architecture overview\n  115  \n  116  OpenClaw's plugin system has four layers:\n  117  \n  118  <Steps>\n  119    <Step title=\"Manifest + discovery\">\n  120      OpenClaw finds candidate plugins from configured paths, workspace roots, global plugin roots, and bundled plugins. Discovery reads native `openclaw.plugin.json` manifests plus supported bundle manifests first.\n  121    </Step>\n  122    <Step title=\"Enablement + validation\">\n  123      Core decides whether a discovered plugin is enabled, disabled, blocked, or selected for an exclusive slot such as memory.\n  124    </Step>\n  125    <Step title=\"Runtime loading\">\n  126      Native OpenClaw plugins are loaded in-process and register capabilities into a central registry. Packaged JavaScript loads through native `require`; third-party local source TypeScript is the emergency Jiti fallback. Compatible bundles are normalized into registry records without importing runtime code.\n  127    </Step>\n  128    <Step title=\"Surface consumption\">\n  129      The rest of OpenClaw reads the registry to expose tools, channels, provider setup, hooks, HTTP routes, CLI commands, and services.\n  130    </Step>\n  131  </Steps>",
        "omitted": "已截取 114-131 行，原始范围到 146 行。"
      },
      {
        "kind": "file",
        "display": "docs/plugins/architecture.md:148-168",
        "path": "docs/plugins/architecture.md",
        "relativePath": "docs/plugins/architecture.md",
        "start": 148,
        "end": 168,
        "snippet": "  148  ### Plugin metadata snapshot and lookup table\n  149  \n  150  Gateway startup builds one `PluginMetadataSnapshot` for the current config snapshot. The snapshot is metadata-only: it stores the installed plugin index, manifest registry, manifest diagnostics, owner maps, a plugin id normalizer, and manifest records. It does not hold loaded plugin modules, provider SDKs, package contents, or runtime exports.\n  151  \n  152  Plugin-aware config validation, startup auto-enable, and Gateway plugin bootstrap consume that snapshot instead of rebuilding manifest/index metadata independently. `PluginLookUpTable` is derived from the same snapshot and adds the startup plugin plan for the current runtime config.\n  153  \n  154  After startup, Gateway keeps the current metadata snapshot as a replaceable runtime product. Repeated runtime provider discovery can borrow that snapshot instead of reconstructing the installed index and manifest registry for each provider-catalog pass. The snapshot is cleared or replaced on Gateway shutdown, config/plugin inventory changes, and installed index writes; callers fall back to the cold manifest/index path when no compatible current snapshot exists. Compatibility checks must include plugin discovery roots such as `plugins.load.paths` and the default agent workspace, because workspace plugins are part of the metadata scope.\n  155  \n  156  The snapshot and lookup table keep repeated startup decisions on the fast path:\n  157  \n  158  - channel ownership\n  159  - deferred channel startup\n  160  - startup plugin ids\n  161  - provider and CLI backend ownership\n  162  - setup provider, command alias, model catalog provider, and manifest contract ownership\n  163  - plugin config schema and channel config schema validation\n  164  - startup auto-enable decisions\n  165  ",
        "omitted": "已截取 148-165 行，原始范围到 168 行。"
      },
      {
        "kind": "file",
        "display": "docs/plugins/manifest.md:28-54",
        "path": "docs/plugins/manifest.md",
        "relativePath": "docs/plugins/manifest.md",
        "start": 28,
        "end": 54,
        "snippet": "   28  Every native OpenClaw plugin **must** ship a `openclaw.plugin.json` file in the\n   29  **plugin root**. OpenClaw uses this manifest to validate configuration\n   30  **without executing plugin code**. Missing or invalid manifests are treated as\n   31  plugin errors and block config validation.\n   32  \n   33  See the full plugin system guide: [Plugins](/tools/plugin).\n   34  For the native capability model and current external-compatibility guidance:\n   35  [Capability model](/plugins/architecture#public-capability-model).\n   36  \n   37  ## What this file does\n   38  \n   39  `openclaw.plugin.json` is the metadata OpenClaw reads **before it loads your\n   40  plugin code**. Everything below must be cheap enough to inspect without booting\n   41  plugin runtime.\n   42  \n   43  **Use it for:**\n   44  \n   45  - plugin identity, config validation, and config UI hints",
        "omitted": "已截取 28-45 行，原始范围到 54 行。"
      },
      {
        "kind": "file",
        "display": "docs/plugins/manifest.md:146-170",
        "path": "docs/plugins/manifest.md",
        "relativePath": "docs/plugins/manifest.md",
        "start": 146,
        "end": 170,
        "snippet": "  146  ## Top-level field reference\n  147  \n  148  | Field                                | Required | Type                             | What it means                                                                                                                                                                                                                       |\n  149  | ------------------------------------ | -------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n  150  | `id`                                 | Yes      | `string`                         | Canonical plugin id. This is the id used in `plugins.entries.<id>`.                                                                                                                                                                 |\n  151  | `configSchema`                       | Yes      | `object`                         | Inline JSON Schema for this plugin's config.                                                                                                                                                                                        |\n  152  | `enabledByDefault`                   | No       | `true`                           | Marks a bundled plugin as enabled by default. Omit it, or set any non-`true` value, to leave the plugin disabled by default.                                                                                                        |\n  153  | `enabledByDefaultOnPlatforms`        | No       | `string[]`                       | Marks a bundled plugin as enabled by default only on the listed Node.js platforms, for example `[\"darwin\"]`. Explicit config still wins.                                                                                            |\n  154  | `legacyPluginIds`                    | No       | `string[]`                       | Legacy ids that normalize to this canonical plugin id.                                                                                                                                                                              |\n  155  | `autoEnableWhenConfiguredProviders`  | No       | `string[]`                       | Provider ids that should auto-enable this plugin when auth, config, or model refs mention them.                                                                                                                                     |\n  156  | `kind`                               | No       | `\"memory\"` \\| `\"context-engine\"` | Declares an exclusive plugin kind used by `plugins.slots.*`.                                                                                                                                                                        |\n  157  | `channels`                           | No       | `string[]`                       | Channel ids owned by this plugin. Used for discovery and config validation.                                                                                                                                                         |\n  158  | `providers`                          | No       | `string[]`                       | Provider ids owned by this plugin.                                                                                                                                                                                                  |\n  159  | `providerCatalogEntry`               | No       | `string`                         | Lightweight provider-catalog module path, relative to the plugin root, for manifest-scoped provider catalog metadata that can be loaded without activating the full plugin runtime.                                                 |\n  160  | `modelSupport`                       | No       | `object`                         | Manifest-owned shorthand model-family metadata used to auto-load the plugin before runtime.                                                                                                                                         |\n  161  | `modelCatalog`                       | No       | `object`                         | Declarative model catalog metadata for providers owned by this plugin. This is the control-plane contract for future read-only listing, onboarding, model pickers, aliases, and suppression without loading plugin runtime.         |\n  162  | `modelPricing`                       | No       | `object`                         | Provider-owned external pricing lookup policy. Use it to opt local/self-hosted providers out of remote pricing catalogs or map provider refs to OpenRouter/LiteLLM catalog ids without hardcoding provider ids in core.             |\n  163  | `modelIdNormalization`               | No       | `object`                         | Provider-owned model-id alias/prefix cleanup that must run before provider runtime loads.                                                                                                                                           |",
        "omitted": "已截取 146-163 行，原始范围到 170 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-011",
    "conclusion": "`loadOpenClawPlugins` 实现 discovery、manifest registry、registration plan、runtime register、rollback、activation",
    "type": "source fact",
    "location": "`src/plugins/loader.ts:1509-1588`, `src/plugins/loader.ts:1672-1715`, `src/plugins/loader.ts:1760-1904`, `src/plugins/loader.ts:2314-2471`, `src/plugins/loader.ts:2499-2533`",
    "confidence": "高",
    "verified": "",
    "note": "loader 代码",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Plugin 控制面",
        "sub": "manifest / discovery / validation",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "先读 manifest 做身份、能力归属、配置校验和加载计划，再进入运行时注册。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Bundled Plugins -> Plugin 控制面",
        "sub": "声明能力",
        "role": "registration",
        "status": "",
        "detail": "关系语义：声明能力。",
        "relation": "Bundled Plugins 到 Plugin 控制面"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "插件能力层",
        "sub": "manifest / validation / runtime registration / surface consumption",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "manifest / validation / runtime registration / surface consumption",
        "relation": "manifest / registry / provider / channel"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Plugin 控制面」、架构总览 / 连线「Bundled Plugins -> Plugin 控制面」、分层视图 / 分层「插件能力层」。证据结论是：`loadOpenClawPlugins` 实现 discovery、manifest registry、registration plan、runtime register、rollback、activation。图中的具体解释是：先读 manifest 做身份、能力归属、配置校验和加载计划，再进入运行时注册。；关系语义：声明能力。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:1509-1588",
        "path": "src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 1509,
        "end": 1588,
        "snippet": " 1509  export function loadOpenClawPlugins(options: PluginLoadOptions = {}): PluginRegistry {\n 1510    const requestedOnlyPluginIds = normalizePluginIdScope(options.onlyPluginIds);\n 1511    const requestedOnlyPluginIdSet = createPluginIdScopeSet(requestedOnlyPluginIds);\n 1512    if (requestedOnlyPluginIdSet && requestedOnlyPluginIdSet.size === 0) {\n 1513      const emptyRegistry = createEmptyPluginRegistry();\n 1514      if (options.activate !== false) {\n 1515        clearActivatedPluginRuntimeState();\n 1516        activatePluginRegistry(\n 1517          emptyRegistry,\n 1518          `empty-plugin-scope::${resolveRuntimeSubagentMode(options.runtimeOptions)}::${options.workspaceDir ?? \"\"}`,\n 1519          resolveRuntimeSubagentMode(options.runtimeOptions),\n 1520          options.workspaceDir,\n 1521        );\n 1522      }\n 1523      return emptyRegistry;\n 1524    }\n 1525  \n 1526    const {",
        "omitted": "已截取 1509-1526 行，原始范围到 1588 行。"
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:1672-1715",
        "path": "src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 1672,
        "end": 1715,
        "snippet": " 1672      const {\n 1673        registry,\n 1674        createApi,\n 1675        rollbackPluginGlobalSideEffects,\n 1676        registerReload,\n 1677        registerNodeHostCommand,\n 1678        registerSecurityAuditCollector,\n 1679      } = createPluginRegistry({\n 1680        logger,\n 1681        runtime,\n 1682        coreGatewayHandlers: options.coreGatewayHandlers as Record<string, GatewayRequestHandler>,\n 1683        ...(options.coreGatewayMethodNames !== undefined && {\n 1684          coreGatewayMethodNames: options.coreGatewayMethodNames,\n 1685        }),\n 1686        ...(options.hostServices !== undefined && {\n 1687          hostServices: options.hostServices,\n 1688        }),\n 1689        activateGlobalSideEffects: shouldActivate,",
        "omitted": "已截取 1672-1689 行，原始范围到 1715 行。"
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:1760-1904",
        "path": "src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 1760,
        "end": 1904,
        "snippet": " 1760      for (const candidate of orderedCandidates) {\n 1761        const manifestRecord = manifestByRoot.get(candidate.rootDir);\n 1762        if (!manifestRecord) {\n 1763          continue;\n 1764        }\n 1765        const pluginId = manifestRecord.id;\n 1766        const matchesRequestedScope = matchesScopedPluginRequest({\n 1767          onlyPluginIdSet,\n 1768          pluginId,\n 1769        });\n 1770        // Filter again at import time as a final guard. The earlier manifest filter keeps\n 1771        // warnings scoped; this one prevents loading/registering anything outside the scope.\n 1772        if (!matchesRequestedScope) {\n 1773          continue;\n 1774        }\n 1775        const activationState = resolveEffectivePluginActivationState({\n 1776          id: pluginId,\n 1777          origin: candidate.origin,",
        "omitted": "已截取 1760-1777 行，原始范围到 1904 行。"
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:2314-2471",
        "path": "src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 2314,
        "end": 2471,
        "snippet": " 2314        const resolved = resolvePluginModuleExport(mod);\n 2315        const definition = resolved.definition;\n 2316        const register = resolved.register;\n 2317  \n 2318        if (definition?.id && definition.id !== record.id) {\n 2319          pushPluginLoadError(\n 2320            `plugin id mismatch (config uses \"${record.id}\", export uses \"${definition.id}\")`,\n 2321          );\n 2322          continue;\n 2323        }\n 2324  \n 2325        record.name = definition?.name ?? record.name;\n 2326        record.description = definition?.description ?? record.description;\n 2327        record.version = definition?.version ?? record.version;\n 2328        const manifestKind = record.kind;\n 2329        const exportKind = definition?.kind;\n 2330        if (manifestKind && exportKind && !kindsEqual(manifestKind, exportKind)) {\n 2331          registry.diagnostics.push({",
        "omitted": "已截取 2314-2331 行，原始范围到 2471 行。"
      },
      {
        "kind": "file",
        "display": "src/plugins/loader.ts:2499-2533",
        "path": "src/plugins/loader.ts",
        "relativePath": "src/plugins/loader.ts",
        "start": 2499,
        "end": 2533,
        "snippet": " 2499      maybeThrowOnPluginLoadError(registry, options.throwOnLoadError);\n 2500  \n 2501      if (shouldActivate && options.mode !== \"validate\") {\n 2502        const failedPlugins = registry.plugins.filter((plugin) => plugin.failedAt != null);\n 2503        if (failedPlugins.length > 0) {\n 2504          logger.warn(\n 2505            `[plugins] ${failedPlugins.length} plugin(s) failed to initialize (${formatPluginFailureSummary(\n 2506              failedPlugins,\n 2507            )}). Run 'openclaw plugins list' for details.`,\n 2508          );\n 2509        }\n 2510      }\n 2511  \n 2512      if (cacheEnabled) {\n 2513        setCachedPluginRegistry(\n 2514          cacheKey,\n 2515          {\n 2516            commands: listRegisteredPluginCommands(),",
        "omitted": "已截取 2499-2516 行，原始范围到 2533 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-012",
    "conclusion": "`OpenClawPluginApi` 注册面覆盖 tool/hook/http/channel/gateway/provider/media/session/memory 等能力",
    "type": "source fact",
    "location": "`src/plugins/api-builder.ts:19-85`, `src/plugins/api-builder.ts:177-260`",
    "confidence": "高",
    "verified": "",
    "note": "API builder",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Capability Registry",
        "sub": "tools / providers / channels / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "运行时能力注册表让 Gateway 与 Agent 能消费插件提供的 capability。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Plugin 控制面 -> Capability Registry",
        "sub": "加载注册",
        "role": "registration",
        "status": "",
        "detail": "关系语义：加载注册。",
        "relation": "Plugin 控制面 到 Capability Registry"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "插件能力层",
        "sub": "manifest / validation / runtime registration / surface consumption",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "manifest / validation / runtime registration / surface consumption",
        "relation": "manifest / registry / provider / channel"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Capability Registry」、架构总览 / 连线「Plugin 控制面 -> Capability Registry」、分层视图 / 分层「插件能力层」。证据结论是：`OpenClawPluginApi` 注册面覆盖 tool/hook/http/channel/gateway/provider/media/session/memory 等能力。图中的具体解释是：运行时能力注册表让 Gateway 与 Agent 能消费插件提供的 capability。；关系语义：加载注册。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/plugins/api-builder.ts:19-85",
        "path": "src/plugins/api-builder.ts",
        "relativePath": "src/plugins/api-builder.ts",
        "start": 19,
        "end": 85,
        "snippet": "   19    handlers?: Partial<\n   20      Pick<\n   21        OpenClawPluginApi,\n   22        | \"registerTool\"\n   23        | \"registerHook\"\n   24        | \"registerHttpRoute\"\n   25        | \"registerHostedMediaResolver\"\n   26        | \"registerChannel\"\n   27        | \"registerGatewayMethod\"\n   28        | \"registerCli\"\n   29        | \"registerReload\"\n   30        | \"registerNodeHostCommand\"\n   31        | \"registerNodeInvokePolicy\"\n   32        | \"registerSecurityAuditCollector\"\n   33        | \"registerService\"\n   34        | \"registerGatewayDiscoveryService\"\n   35        | \"registerCliBackend\"\n   36        | \"registerTextTransforms\"",
        "omitted": "已截取 19-36 行，原始范围到 85 行。"
      },
      {
        "kind": "file",
        "display": "src/plugins/api-builder.ts:177-260",
        "path": "src/plugins/api-builder.ts",
        "relativePath": "src/plugins/api-builder.ts",
        "start": 177,
        "end": 260,
        "snippet": "  177  export function buildPluginApi(params: BuildPluginApiParams): OpenClawPluginApi {\n  178    const handlers = params.handlers ?? {};\n  179    const registerCli = handlers.registerCli ?? noopRegisterCli;\n  180    const api: OpenClawPluginApiWithoutFacades = {\n  181      id: params.id,\n  182      name: params.name,\n  183      version: params.version,\n  184      description: params.description,\n  185      source: params.source,\n  186      rootDir: params.rootDir,\n  187      registrationMode: params.registrationMode,\n  188      config: params.config,\n  189      pluginConfig: params.pluginConfig,\n  190      runtime: params.runtime,\n  191      logger: params.logger,\n  192      registerTool: handlers.registerTool ?? noopRegisterTool,\n  193      registerHook: handlers.registerHook ?? noopRegisterHook,\n  194      registerHttpRoute: handlers.registerHttpRoute ?? noopRegisterHttpRoute,",
        "omitted": "已截取 177-194 行，原始范围到 260 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-013",
    "conclusion": "Provider plugin 样例：Anthropic manifest 声明 providers/cliBackends/auth/contracts，runtime 注册 CLI backend/provider/media provider",
    "type": "source fact",
    "location": "`extensions/anthropic/openclaw.plugin.json:1-112`, `extensions/anthropic/index.ts:1-10`, `extensions/anthropic/register.runtime.ts:665-667`",
    "confidence": "高",
    "verified": "",
    "note": "provider plugin 样例",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "入口与渠道",
        "sub": "CLI / HTTP / WS / Channel",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多入口进入 Gateway：本地 CLI、HTTP/WS surface、channel plugin 和外部消息。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Bundled Plugins",
        "sub": "extensions/**",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "内置插件覆盖 provider、channel、tool、hook、service 等能力类型。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Channel / CLI / WS",
        "sub": "incoming event",
        "role": "adapter",
        "status": "source-verified",
        "detail": "外部消息或 CLI 命令进入 Gateway。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Delivery / Channel Send",
        "sub": "reply / outbound",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "把 Agent 结果交给对应 delivery 或 channel 发送。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Pi Runtime -> Delivery / Channel Send",
        "sub": "结果",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：结果。",
        "relation": "Pi Runtime 到 Delivery / Channel Send"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "接入层",
        "sub": "CLI / HTTP / WS / Channel / UI",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / HTTP / WS / Channel / UI",
        "relation": "CLI / HTTP/WS / Channel / UI/Nodes"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「入口与渠道」、架构总览 / 节点「Bundled Plugins」、运行主链路 / 节点「Channel / CLI / WS」、运行主链路 / 节点「Delivery / Channel Send」。证据结论是：Provider plugin 样例：Anthropic manifest 声明 providers/cliBackends/auth/contracts，runtime 注册 CLI backend/provider/media provider。图中的具体解释是：多入口进入 Gateway：本地 CLI、HTTP/WS surface、channel plugin 和外部消息。；内置插件覆盖 provider、channel、tool、hook、service 等能力类型。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "extensions/anthropic/openclaw.plugin.json:1-112",
        "path": "extensions/anthropic/openclaw.plugin.json",
        "relativePath": "extensions/anthropic/openclaw.plugin.json",
        "start": 1,
        "end": 112,
        "snippet": "    1  {\n    2    \"id\": \"anthropic\",\n    3    \"activation\": {\n    4      \"onStartup\": false\n    5    },\n    6    \"enabledByDefault\": true,\n    7    \"providers\": [\"anthropic\"],\n    8    \"providerCatalogEntry\": \"./provider-discovery.ts\",\n    9    \"modelSupport\": {\n   10      \"modelPrefixes\": [\"claude-\"]\n   11    },\n   12    \"modelIdNormalization\": {\n   13      \"providers\": {\n   14        \"anthropic\": {\n   15          \"aliases\": {\n   16            \"opus-4.6\": \"claude-opus-4-6\",\n   17            \"opus-4.5\": \"claude-opus-4-5\",\n   18            \"sonnet-4.6\": \"claude-sonnet-4-6\",",
        "omitted": "已截取 1-18 行，原始范围到 112 行。"
      },
      {
        "kind": "file",
        "display": "extensions/anthropic/index.ts:1-10",
        "path": "extensions/anthropic/index.ts",
        "relativePath": "extensions/anthropic/index.ts",
        "start": 1,
        "end": 10,
        "snippet": "    1  import { definePluginEntry } from \"openclaw/plugin-sdk/plugin-entry\";\n    2  import { registerAnthropicPlugin } from \"./register.runtime.js\";\n    3  \n    4  export default definePluginEntry({\n    5    id: \"anthropic\",\n    6    name: \"Anthropic Provider\",\n    7    description: \"Bundled Anthropic provider plugin\",\n    8    register(api) {\n    9      return registerAnthropicPlugin(api);\n   10    },",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "extensions/anthropic/register.runtime.ts:665-667",
        "path": "extensions/anthropic/register.runtime.ts",
        "relativePath": "extensions/anthropic/register.runtime.ts",
        "start": 665,
        "end": 667,
        "snippet": "  665    api.registerCliBackend(buildAnthropicCliBackend());\n  666    api.registerProvider(buildAnthropicProvider());\n  667    api.registerMediaUnderstandingProvider(anthropicMediaUnderstandingProvider);",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-014",
    "conclusion": "Channel plugin 样例：IRC manifest/channel entry/channel plugin 覆盖 setup/config/security/status/outbound",
    "type": "source fact",
    "location": "`extensions/irc/openclaw.plugin.json:1-26`, `extensions/irc/index.ts:1-20`, `extensions/irc/src/channel.ts:170-235`, `extensions/irc/src/channel.ts:236-366`",
    "confidence": "高",
    "verified": "",
    "note": "channel plugin 样例",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Bundled Plugins",
        "sub": "extensions/**",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "内置插件覆盖 provider、channel、tool、hook、service 等能力类型。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Delivery / Channel Send",
        "sub": "reply / outbound",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "把 Agent 结果交给对应 delivery 或 channel 发送。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
        "title": "Pi Runtime -> Delivery / Channel Send",
        "sub": "结果",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：结果。",
        "relation": "Pi Runtime 到 Delivery / Channel Send"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Bundled Plugins」、运行主链路 / 节点「Delivery / Channel Send」、运行主链路 / 连线「Pi Runtime -> Delivery / Channel Send」。证据结论是：Channel plugin 样例：IRC manifest/channel entry/channel plugin 覆盖 setup/config/security/status/outbound。图中的具体解释是：内置插件覆盖 provider、channel、tool、hook、service 等能力类型。；把 Agent 结果交给对应 delivery 或 channel 发送。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "extensions/irc/openclaw.plugin.json:1-26",
        "path": "extensions/irc/openclaw.plugin.json",
        "relativePath": "extensions/irc/openclaw.plugin.json",
        "start": 1,
        "end": 26,
        "snippet": "    1  {\n    2    \"id\": \"irc\",\n    3    \"activation\": {\n    4      \"onStartup\": false\n    5    },\n    6    \"channels\": [\"irc\"],\n    7    \"channelEnvVars\": {\n    8      \"irc\": [\n    9        \"IRC_HOST\",\n   10        \"IRC_PORT\",\n   11        \"IRC_TLS\",\n   12        \"IRC_NICK\",\n   13        \"IRC_USERNAME\",\n   14        \"IRC_REALNAME\",\n   15        \"IRC_PASSWORD\",\n   16        \"IRC_CHANNELS\",\n   17        \"IRC_NICKSERV_PASSWORD\",\n   18        \"IRC_NICKSERV_REGISTER_EMAIL\"",
        "omitted": "已截取 1-18 行，原始范围到 26 行。"
      },
      {
        "kind": "file",
        "display": "extensions/irc/index.ts:1-20",
        "path": "extensions/irc/index.ts",
        "relativePath": "extensions/irc/index.ts",
        "start": 1,
        "end": 20,
        "snippet": "    1  import { defineBundledChannelEntry } from \"openclaw/plugin-sdk/channel-entry-contract\";\n    2  \n    3  export default defineBundledChannelEntry({\n    4    id: \"irc\",\n    5    name: \"IRC\",\n    6    description: \"IRC channel plugin\",\n    7    importMetaUrl: import.meta.url,\n    8    plugin: {\n    9      specifier: \"./channel-plugin-api.js\",\n   10      exportName: \"ircPlugin\",\n   11    },\n   12    secrets: {\n   13      specifier: \"./secret-contract-api.js\",\n   14      exportName: \"channelSecrets\",\n   15    },\n   16    runtime: {\n   17      specifier: \"./runtime-api.js\",\n   18      exportName: \"setIrcRuntime\",",
        "omitted": "已截取 1-18 行，原始范围到 20 行。"
      },
      {
        "kind": "file",
        "display": "extensions/irc/src/channel.ts:170-235",
        "path": "extensions/irc/src/channel.ts",
        "relativePath": "extensions/irc/src/channel.ts",
        "start": 170,
        "end": 235,
        "snippet": "  170  export const ircPlugin: ChannelPlugin<ResolvedIrcAccount, IrcProbe> = createChatChannelPlugin({\n  171    base: {\n  172      id: \"irc\",\n  173      meta: {\n  174        ...meta,\n  175        quickstartAllowFrom: true,\n  176      },\n  177      setup: ircSetupAdapter,\n  178      setupWizard: ircSetupWizard,\n  179      capabilities: {\n  180        chatTypes: [\"direct\", \"group\"],\n  181        media: true,\n  182        blockStreaming: true,\n  183      },\n  184      reload: { configPrefixes: [\"channels.irc\"] },\n  185      configSchema: IrcChannelConfigSchema,\n  186      config: {\n  187        ...ircConfigAdapter,",
        "omitted": "已截取 170-187 行，原始范围到 235 行。"
      },
      {
        "kind": "file",
        "display": "extensions/irc/src/channel.ts:236-366",
        "path": "extensions/irc/src/channel.ts",
        "relativePath": "extensions/irc/src/channel.ts",
        "start": 236,
        "end": 366,
        "snippet": "  236      messaging: {\n  237        targetPrefixes: [\"irc\"],\n  238        normalizeTarget: normalizeIrcMessagingTarget,\n  239        targetResolver: {\n  240          looksLikeId: looksLikeIrcTargetId,\n  241          hint: \"<#channel|nick>\",\n  242        },\n  243      },\n  244      message: ircMessageAdapter,\n  245      resolver: {\n  246        resolveTargets: async ({ inputs, kind }) => {\n  247          return inputs.map((input) => {\n  248            const normalized = normalizeIrcMessagingTarget(input);\n  249            if (!normalized) {\n  250              return {\n  251                input,\n  252                resolved: false,\n  253                note: \"invalid IRC target\",",
        "omitted": "已截取 236-253 行，原始范围到 366 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-015",
    "conclusion": "VISION 强调安全、safe defaults、插件优先、memory slot、terminal-first、TypeScript hackability",
    "type": "doc fact",
    "location": "`VISION.md:15-31`, `VISION.md:41-57`, `VISION.md:59-76`, `VISION.md:92-105`",
    "confidence": "高",
    "verified": "",
    "note": "项目设计方向",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "VISION.md:15-31",
        "path": "VISION.md",
        "relativePath": "VISION.md",
        "start": 15,
        "end": 31,
        "snippet": "   15  The goal: a personal assistant that is easy to use, supports a wide range of platforms, and respects privacy and security.\n   16  \n   17  The current focus is:\n   18  \n   19  Priority:\n   20  \n   21  - Security and safe defaults\n   22  - Bug fixes and stability\n   23  - Setup reliability and first-run UX\n   24  \n   25  Next priorities:\n   26  \n   27  - Supporting all major model providers\n   28  - Improving support for major messaging channels (and adding a few high-demand ones)\n   29  - Performance and test infrastructure\n   30  - Better computer-use and agent harness capabilities\n   31  - Ergonomics across CLI and web frontend",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "VISION.md:41-57",
        "path": "VISION.md",
        "relativePath": "VISION.md",
        "start": 41,
        "end": 57,
        "snippet": "   41  ## Security\n   42  \n   43  Security in OpenClaw is a deliberate tradeoff: strong defaults without killing capability.\n   44  The goal is to stay powerful for real work while making risky paths explicit and operator-controlled.\n   45  \n   46  Canonical security policy and reporting:\n   47  \n   48  - [`SECURITY.md`](SECURITY.md)\n   49  \n   50  We prioritize secure defaults, but also expose clear knobs for trusted high-power workflows.\n   51  \n   52  ## Plugins & Memory\n   53  \n   54  OpenClaw has an extensive plugin API.\n   55  Core stays lean; optional capability should usually ship as plugins.\n   56  We are generally slimming down core while expanding what plugins can do.\n   57  If a useful feature cannot be built as a plugin yet, we welcome PRs and design discussions that extend the plugin API instead of adding one-off core behavior.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "VISION.md:59-76",
        "path": "VISION.md",
        "relativePath": "VISION.md",
        "start": 59,
        "end": 76,
        "snippet": "   59  There are two broad plugin styles:\n   60  \n   61  - Code plugins run OpenClaw plugin code and are appropriate for deeper runtime extension.\n   62  - Bundle-style plugins package stable external surfaces such as skills, MCP servers, and related configuration.\n   63  \n   64  Prefer bundle-style plugins when they can express the capability.\n   65  They have a smaller, more stable interface and better security boundaries.\n   66  Use code plugins when the capability needs runtime hooks, providers, channels, tools, or other in-process extension points.\n   67  \n   68  Preferred plugin path is npm package distribution plus local extension loading for development.\n   69  If you build a plugin, host and maintain it in your own repository.\n   70  The bar for adding optional plugins to core is intentionally high.\n   71  Plugin docs: [`docs/tools/plugin.md`](docs/tools/plugin.md)\n   72  Plugin discovery, official publisher status, provenance, and security review live in [ClawHub](https://clawhub.ai/).\n   73  OpenClaw docs should document core extension points; plugin promotion belongs in ClawHub, preferably under vetted org publishers for official plugins.\n   74  \n   75  Memory is a special plugin slot where only one memory plugin can be active at a time.\n   76  Today we ship multiple memory options; over time we plan to converge on one recommended default path.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "VISION.md:92-105",
        "path": "VISION.md",
        "relativePath": "VISION.md",
        "start": 92,
        "end": 105,
        "snippet": "   92  ### Setup\n   93  \n   94  OpenClaw is currently terminal-first by design.\n   95  This keeps setup explicit: users see docs, auth, permissions, and security posture up front.\n   96  \n   97  Long term, we want easier onboarding flows as hardening matures.\n   98  We do not want convenience wrappers that hide critical security decisions from users.\n   99  \n  100  ### Why TypeScript?\n  101  \n  102  OpenClaw is primarily an orchestration system: prompts, tools, protocols, and integrations.\n  103  TypeScript was chosen to keep OpenClaw hackable by default.\n  104  It is widely known, fast to iterate in, and easy to read, modify, and extend.\n  105  ",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-016",
    "conclusion": "README 安全模型说明默认 main session 工具在宿主机运行，群组/频道建议 sandbox",
    "type": "doc fact",
    "location": "`README.md:132-144`, `README.md:157-162`",
    "confidence": "高",
    "verified": "",
    "note": "安全默认说明",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:132-144",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 132,
        "end": 144,
        "snippet": "  132  ## Security defaults (DM access)\n  133  \n  134  OpenClaw connects to real messaging surfaces. Treat inbound DMs as **untrusted input**.\n  135  \n  136  Full security guide: [Security](https://docs.openclaw.ai/gateway/security)\n  137  \n  138  Default behavior on Telegram/WhatsApp/Signal/iMessage/Microsoft Teams/Discord/Google Chat/Slack:\n  139  \n  140  - **DM pairing** (`dmPolicy=\"pairing\"` / `channels.discord.dmPolicy=\"pairing\"` / `channels.slack.dmPolicy=\"pairing\"`; legacy: `channels.discord.dm.policy`, `channels.slack.dm.policy`): unknown senders receive a short pairing code and the bot does not process their message.\n  141  - Approve with: `openclaw pairing approve <channel> <code>` (then the sender is added to a local allowlist store).\n  142  - Public inbound DMs require an explicit opt-in: set `dmPolicy=\"open\"` and include `\"*\"` in the channel allowlist (`allowFrom` / `channels.discord.allowFrom` / `channels.slack.allowFrom`; legacy: `channels.discord.dm.allowFrom`, `channels.slack.dm.allowFrom`).\n  143  \n  144  Run `openclaw doctor` to surface risky/misconfigured DM policies.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:157-162",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 157,
        "end": 162,
        "snippet": "  157  ## Security model (important)\n  158  \n  159  - Default: tools run on the host for the `main` session, so the agent has full access when it is just you.\n  160  - Group/channel safety: set `agents.defaults.sandbox.mode: \"non-main\"` to run non-`main` sessions inside sandboxes. Docker is the default sandbox backend; SSH and OpenShell backends are also available.\n  161  - Typical sandbox default: allow `bash`, `process`, `read`, `write`, `edit`, `sessions_list`, `sessions_history`, `sessions_send`, `sessions_spawn`; deny `browser`, `canvas`, `nodes`, `cron`, `discord`, `gateway`.\n  162  - Before exposing anything remotely, read [Security](https://docs.openclaw.ai/gateway/security), [Sandboxing](https://docs.openclaw.ai/gateway/sandboxing), and [Configuration](https://docs.openclaw.ai/gateway/configuration).",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-017",
    "conclusion": "Plugin hook 类型覆盖模型、prompt、工具、消息、session、gateway、cron 等生命周期",
    "type": "source/doc fact",
    "location": "`src/plugins/hook-types.ts:68-106`, `docs/concepts/agent-loop.md:89-115`",
    "confidence": "高",
    "verified": "",
    "note": "hook 清单",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/plugins/hook-types.ts:68-106",
        "path": "src/plugins/hook-types.ts",
        "relativePath": "src/plugins/hook-types.ts",
        "start": 68,
        "end": 106,
        "snippet": "   68  export type PluginHookName =\n   69    | \"before_model_resolve\"\n   70    | \"agent_turn_prepare\"\n   71    | \"before_prompt_build\"\n   72    | \"before_agent_start\"\n   73    | \"before_agent_reply\"\n   74    | \"model_call_started\"\n   75    | \"model_call_ended\"\n   76    | \"llm_input\"\n   77    | \"llm_output\"\n   78    | \"before_agent_finalize\"\n   79    | \"agent_end\"\n   80    | \"before_compaction\"\n   81    | \"after_compaction\"\n   82    | \"before_reset\"\n   83    | \"inbound_claim\"\n   84    | \"message_received\"\n   85    | \"message_sending\"",
        "omitted": "已截取 68-85 行，原始范围到 106 行。"
      },
      {
        "kind": "file",
        "display": "docs/concepts/agent-loop.md:89-115",
        "path": "docs/concepts/agent-loop.md",
        "relativePath": "docs/concepts/agent-loop.md",
        "start": 89,
        "end": 115,
        "snippet": "   89  ### Plugin hooks (agent + gateway lifecycle)\n   90  \n   91  These run inside the agent loop or gateway pipeline:\n   92  \n   93  - **`before_model_resolve`**: runs pre-session (no `messages`) to deterministically override provider/model before model resolution.\n   94  - **`before_prompt_build`**: runs after session load (with `messages`) to inject `prependContext`, `systemPrompt`, `prependSystemContext`, or `appendSystemContext` before prompt submission. Use `prependContext` for per-turn dynamic text and system-context fields for stable guidance that should sit in system prompt space.\n   95  - **`before_agent_start`**: legacy compatibility hook that may run in either phase; prefer the explicit hooks above.\n   96  - **`before_agent_reply`**: runs after inline actions and before the LLM call, letting a plugin claim the turn and return a synthetic reply or silence the turn entirely.\n   97  - **`agent_end`**: inspect the final message list and run metadata after completion.\n   98  - **`before_compaction` / `after_compaction`**: observe or annotate compaction cycles.\n   99  - **`before_tool_call` / `after_tool_call`**: intercept tool params/results.\n  100  - **`before_install`**: inspect built-in scan findings and optionally block skill or plugin installs.\n  101  - **`tool_result_persist`**: synchronously transform tool results before they are written to an OpenClaw-owned session transcript.\n  102  - **`message_received` / `message_sending` / `message_sent`**: inbound + outbound message hooks.\n  103  - **`session_start` / `session_end`**: session lifecycle boundaries.\n  104  - **`gateway_start` / `gateway_stop`**: gateway lifecycle events.\n  105  \n  106  Hook decision rules for outbound/tool guards:",
        "omitted": "已截取 89-106 行，原始范围到 115 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-001",
    "conclusion": "Core plugin-agnostic + manifest/control-plane + registry/runtime API 共同说明 OpenClaw 的核心扩展思想是 capability ownership，而不是简单 hooks",
    "type": "inference",
    "location": "C-003, C-010, C-011, C-012",
    "confidence": "",
    "verified": "",
    "note": "需要动态 inspect 一个插件验证 runtime registry 输出",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-003",
        "path": "C-003",
        "relativePath": "C-003",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-010",
        "path": "C-010",
        "relativePath": "C-010",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-011",
        "path": "C-011",
        "relativePath": "C-011",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-012",
        "path": "C-012",
        "relativePath": "C-012",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-002",
    "conclusion": "Gateway 同时管理 WS clients、method registry、agent ack/final/dedupe，说明它是统一控制面和运行协调中心",
    "type": "inference",
    "location": "C-004, C-006, C-008",
    "confidence": "",
    "verified": "",
    "note": "需要启动 Gateway 观察实际 WS frames",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-004",
        "path": "C-004",
        "relativePath": "C-004",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-006",
        "path": "C-006",
        "relativePath": "C-006",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-008",
        "path": "C-008",
        "relativePath": "C-008",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-003",
    "conclusion": "Agent runtime 外壳负责 session/workspace/skills/delivery，Pi core 负责模型工具循环，说明 OpenClaw 将产品上下文和 agent core 解耦",
    "type": "inference",
    "location": "C-007, C-008, C-009",
    "confidence": "",
    "verified": "",
    "note": "需要深挖 Pi runtime 事件结构",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-007",
        "path": "C-007",
        "relativePath": "C-007",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-008",
        "path": "C-008",
        "relativePath": "C-008",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-009",
        "path": "C-009",
        "relativePath": "C-009",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-004",
    "conclusion": "Channel plugin 包含 config/status/security/outbound/gateway start，说明多渠道系统应抽象完整 channel contract，而不是只抽象 send 函数",
    "type": "inference",
    "location": "C-014",
    "confidence": "",
    "verified": "",
    "note": "需要对比其它 channel plugin 验证一致性",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-014",
        "path": "C-014",
        "relativePath": "C-014",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-OC-001",
    "conclusion": "官方资料把 Gateway 定义为长期运行控制面，管理消息面、控制客户端、节点、HTTP/WS surface",
    "type": "官方事实",
    "location": "https://docs.openclaw.ai/architecture",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `C-004`, `C-005`, `C-006`",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官方资料将 Agent runtime 分成 OpenClaw-owned layer 与 Pi agent core",
    "type": "官方事实",
    "location": "https://docs.openclaw.ai/concepts/agent",
    "confidence": "高",
    "verified": "部分",
    "note": "对应 `C-007`, `C-008`, `INF-003`",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官方资料强调 plugin capability model 与 manifest/discovery、enablement、runtime loading、surface consumption 分层",
    "type": "官方事实",
    "location": "https://docs.openclaw.ai/plugins/architecture",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `C-010`, `C-011`, `C-012`",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官方资料说明 session 和 multi-agent 是隔离模型，覆盖 DM/group/cron/webhook 与 agent workspace/state/auth profile",
    "type": "官方事实",
    "location": "https://docs.openclaw.ai/concepts/session, https://docs.openclaw.ai/concepts/multi-agent",
    "confidence": "中",
    "verified": "部分",
    "note": "对应 `C-008`, `C-009`",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Session / Multi-agent",
        "sub": "routing / owner / isolation",
        "role": "state",
        "status": "official-supported",
        "detail": "会话和多 Agent 是一等隔离模型，绑定 workspace、state、auth profile 和 history。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Gateway 控制面 -> Session / Multi-agent",
        "sub": "路由归属",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：路由归属。",
        "relation": "Gateway 控制面 到 Session / Multi-agent"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
        "title": "Agent Runtime 外壳 -> Session / Multi-agent",
        "sub": "读写上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：读写上下文。",
        "relation": "Agent Runtime 外壳 到 Session / Multi-agent"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
        "title": "状态与隔离层",
        "sub": "session / multi-agent / auth profile / transcripts",
        "role": "state",
        "status": "official-supported",
        "detail": "session / multi-agent / auth profile / transcripts",
        "relation": "agentDir / auth / history / transcript"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Session / Multi-agent」、架构总览 / 连线「Gateway 控制面 -> Session / Multi-agent」、架构总览 / 连线「Agent Runtime 外壳 -> Session / Multi-agent」、分层视图 / 分层「状态与隔离层」。证据结论是：官方资料说明 session 和 multi-agent 是隔离模型，覆盖 DM/group/cron/webhook 与 agent workspace/state/auth profile。图中的具体解释是：会话和多 Agent 是一等隔离模型，绑定 workspace、state、auth profile 和 history。；关系语义：路由归属。",
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
