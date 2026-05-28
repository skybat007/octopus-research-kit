window.EVIDENCE_META = {
  "title": "Claude Code 证据解释",
  "description": "从架构图回到证据解释：展示架构语境、证据结论、源码/文档片段和原始索引位置。",
  "source": "../evidence-index.md",
  "projectRoot": "claude-code"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "C-001",
    "conclusion": "仓库 README 声明这是 Claude Code source snapshot for security research，不是 Anthropic 官方 repo；快照来自 npm distribution 中公开可访问的 source map；README 描述 CLI 用途、公开日期、技术栈和大致规模",
    "type": "doc fact",
    "location": "`README.md:1-3`, `README.md:23-35`, `README.md:41-49`, `README.md:55-94`",
    "confidence": "高",
    "verified": "",
    "note": "快照定位",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:1-3",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 1,
        "end": 3,
        "snippet": "    1  # Claude Code Source Snapshot for Security Research\n    2  \n    3  > This repository mirrors a **publicly exposed Claude Code source snapshot** that became accessible on **March 31, 2026** through a source map exposure in the npm distribution. It is maintained for **educational, defensive security research, and software supply-chain analysis**.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:23-35",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 23,
        "end": 35,
        "snippet": "   23  It does **not** claim ownership of the original code, and it should not be interpreted as an official Anthropic repository.\n   24  \n   25  ---\n   26  \n   27  ## How the Public Snapshot Became Accessible\n   28  \n   29  [Chaofan Shou (@Fried_rice)](https://x.com/Fried_rice) publicly noted that Claude Code source material was reachable through a `.map` file exposed in the npm package:\n   30  \n   31  > **\"Claude code source code has been leaked via a map file in their npm registry!\"**\n   32  >\n   33  > — [@Fried_rice, March 31, 2026](https://x.com/Fried_rice/status/2038894956459290963)\n   34  \n   35  The published source map referenced unobfuscated TypeScript sources hosted in Anthropic's R2 storage bucket, which made the `src/` snapshot publicly downloadable.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:41-49",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 41,
        "end": 49,
        "snippet": "   41  Claude Code is Anthropic's CLI for interacting with Claude from the terminal to perform software engineering tasks such as editing files, running commands, searching codebases, and coordinating workflows.\n   42  \n   43  This repository contains a mirrored `src/` snapshot for research and analysis.\n   44  \n   45  - **Public exposure identified on**: 2026-03-31\n   46  - **Language**: TypeScript\n   47  - **Runtime**: Bun\n   48  - **Terminal UI**: React + [Ink](https://github.com/vadimdemedes/ink)\n   49  - **Scale**: ~1,900 files, 512,000+ lines of code",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:55-94",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 55,
        "end": 94,
        "snippet": "   55  ```text\n   56  src/\n   57  ├── main.tsx                 # Entrypoint orchestration (Commander.js-based CLI path)\n   58  ├── commands.ts              # Command registry\n   59  ├── tools.ts                 # Tool registry\n   60  ├── Tool.ts                  # Tool type definitions\n   61  ├── QueryEngine.ts           # LLM query engine\n   62  ├── context.ts               # System/user context collection\n   63  ├── cost-tracker.ts          # Token cost tracking\n   64  │\n   65  ├── commands/                # Slash command implementations (~50)\n   66  ├── tools/                   # Agent tool implementations (~40)\n   67  ├── components/              # Ink UI components (~140)\n   68  ├── hooks/                   # React hooks\n   69  ├── services/                # External service integrations\n   70  ├── screens/                 # Full-screen UIs (Doctor, REPL, Resume)\n   71  ├── types/                   # TypeScript type definitions\n   72  ├── utils/                   # Utility functions",
        "omitted": "已截取 55-72 行，原始范围到 94 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-002",
    "conclusion": "本地快照为 branch `main`、commit `4b9d30f7953273e567a18eb819f4eddd45fcc877`、remote `https://github.com/jarmuine/claude-code.git`，`src` 约 1902 个文件",
    "type": "source fact",
    "location": "`git -C claude-code rev-parse HEAD`, `git -C claude-code remote get-url origin`, `rg --files src | wc -l`",
    "confidence": "高",
    "verified": "",
    "note": "命令证据",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "command",
        "display": "git -C claude-code rev-parse HEAD"
      },
      {
        "kind": "command",
        "display": "git -C claude-code remote get-url origin"
      },
      {
        "kind": "command",
        "display": "rg --files src | wc -l"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-003",
    "conclusion": "`main()` 在 Commander 前处理 Windows 安全环境、warning/SIGINT、direct-connect URL、deep link、assistant command、SSH command、headless 判定、interactive flag、client type 和 eager settings",
    "type": "source fact",
    "location": "`src/main.tsx:585-856`",
    "confidence": "高",
    "verified": "",
    "note": "入口模式路由",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "多入口模式路由",
        "sub": "argv / URL / SSH / SDK / Bridge",
        "role": "adapter",
        "status": "inference",
        "detail": "src/main.tsx 在 Commander 前处理 direct-connect、deep link、assistant、SSH、headless/interactive 和 client type。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "入口路由层",
        "sub": "main.tsx / Commander / direct-connect / bridge / SDK",
        "role": "adapter",
        "status": "source-verified",
        "detail": "main.tsx / Commander / direct-connect / bridge / SDK",
        "relation": "argv / URL / SSH / SDK"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「多入口模式路由」、分层视图 / 分层「入口路由层」。证据结论是：`main()` 在 Commander 前处理 Windows 安全环境、warning/SIGINT、direct-connect URL、deep link、assistant command、SSH command、headless 判定、interactive flag、client type 和 eager settings。图中的具体解释是：src/main.tsx 在 Commander 前处理 direct-connect、deep link、assistant、SSH、headless/interactive 和 client type。；main.tsx / Commander / direct-connect / bridge / SDK",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/main.tsx:585-856",
        "path": "src/main.tsx",
        "relativePath": "src/main.tsx",
        "start": 585,
        "end": 856,
        "snippet": "  585  export async function main() {\n  586    profileCheckpoint('main_function_start');\n  587  \n  588    // SECURITY: Prevent Windows from executing commands from current directory\n  589    // This must be set before ANY command execution to prevent PATH hijacking attacks\n  590    // See: https://docs.microsoft.com/en-us/windows/win32/api/processenv/nf-processenv-searchpathw\n  591    process.env.NoDefaultCurrentDirectoryInExePath = '1';\n  592  \n  593    // Initialize warning handler early to catch warnings\n  594    initializeWarningHandler();\n  595    process.on('exit', () => {\n  596      resetCursor();\n  597    });\n  598    process.on('SIGINT', () => {\n  599      // In print mode, print.ts registers its own SIGINT handler that aborts\n  600      // the in-flight query and calls gracefulShutdown; skip here to avoid\n  601      // preempting it with a synchronous process.exit().\n  602      if (process.argv.includes('-p') || process.argv.includes('--print')) {",
        "omitted": "已截取 585-602 行，原始范围到 856 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-004",
    "conclusion": "`run()` 创建 Commander program 和 `preAction` init，注册默认命令 options；后续注册 MCP、server、ssh、open、auth、plugin、agents、auto-mode、doctor 等子命令",
    "type": "source fact",
    "location": "`src/main.tsx:884-1018`, `src/main.tsx:3894-4355`",
    "confidence": "高",
    "verified": "",
    "note": "命令 surface",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "多入口模式路由",
        "sub": "argv / URL / SSH / SDK / Bridge",
        "role": "adapter",
        "status": "inference",
        "detail": "src/main.tsx 在 Commander 前处理 direct-connect、deep link、assistant、SSH、headless/interactive 和 client type。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "入口路由层",
        "sub": "main.tsx / Commander / direct-connect / bridge / SDK",
        "role": "adapter",
        "status": "source-verified",
        "detail": "main.tsx / Commander / direct-connect / bridge / SDK",
        "relation": "argv / URL / SSH / SDK"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「多入口模式路由」、分层视图 / 分层「入口路由层」。证据结论是：`run()` 创建 Commander program 和 `preAction` init，注册默认命令 options；后续注册 MCP、server、ssh、open、auth、plugin、agents、auto-mode、doctor 等子命令。图中的具体解释是：src/main.tsx 在 Commander 前处理 direct-connect、deep link、assistant、SSH、headless/interactive 和 client type。；main.tsx / Commander / direct-connect / bridge / SDK",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/main.tsx:884-1018",
        "path": "src/main.tsx",
        "relativePath": "src/main.tsx",
        "start": 884,
        "end": 1018,
        "snippet": "  884  async function run(): Promise<CommanderCommand> {\n  885    profileCheckpoint('run_function_start');\n  886  \n  887    // Create help config that sorts options by long option name.\n  888    // Commander supports compareOptions at runtime but @commander-js/extra-typings\n  889    // doesn't include it in the type definitions, so we use Object.assign to add it.\n  890    function createSortedHelpConfig(): {\n  891      sortSubcommands: true;\n  892      sortOptions: true;\n  893    } {\n  894      const getOptionSortKey = (opt: Option): string => opt.long?.replace(/^--/, '') ?? opt.short?.replace(/^-/, '') ?? '';\n  895      return Object.assign({\n  896        sortSubcommands: true,\n  897        sortOptions: true\n  898      } as const, {\n  899        compareOptions: (a: Option, b: Option) => getOptionSortKey(a).localeCompare(getOptionSortKey(b))\n  900      });\n  901    }",
        "omitted": "已截取 884-901 行，原始范围到 1018 行。"
      },
      {
        "kind": "file",
        "display": "src/main.tsx:3894-4355",
        "path": "src/main.tsx",
        "relativePath": "src/main.tsx",
        "start": 3894,
        "end": 4355,
        "snippet": " 3894    const mcp = program.command('mcp').description('Configure and manage MCP servers').configureHelp(createSortedHelpConfig()).enablePositionalOptions();\n 3895    mcp.command('serve').description(`Start the Claude Code MCP server`).option('-d, --debug', 'Enable debug mode', () => true).option('--verbose', 'Override verbose mode setting from config', () => true).action(async ({\n 3896      debug,\n 3897      verbose\n 3898    }: {\n 3899      debug?: boolean;\n 3900      verbose?: boolean;\n 3901    }) => {\n 3902      const {\n 3903        mcpServeHandler\n 3904      } = await import('./cli/handlers/mcp.js');\n 3905      await mcpServeHandler({\n 3906        debug,\n 3907        verbose\n 3908      });\n 3909    });\n 3910  \n 3911    // Register the mcp add subcommand (extracted for testability)",
        "omitted": "已截取 3894-3911 行，原始范围到 4355 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-005",
    "conclusion": "`setup()` 处理 Node 版本、custom session、UDS messaging、terminal restore、cwd、worktree；`renderAndRun` 周边处理 onboarding、trust、GrowthBook、system context prefetch、MCP approvals、external CLAUDE.md warning、telemetry、API key、bypass dialog 和 auto-mode opt-in",
    "type": "source fact",
    "location": "`src/setup.ts:56-190`, `src/interactiveHelpers.tsx:98-235`",
    "confidence": "高",
    "verified": "",
    "note": "运行前边界",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Setup And Trust",
        "sub": "cwd / trust / API key / MCP approvals",
        "role": "adapter",
        "status": "source-verified",
        "detail": "setup/renderAndRun 把 workspace trust、API key、MCP approvals、telemetry 和 bypass dialog 放在 query 之前。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "多入口模式路由 -> Setup And Trust",
        "sub": "模式归一",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：模式归一。",
        "relation": "多入口模式路由 到 Setup And Trust"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "Setup 与 Trust 层",
        "sub": "cwd / terminal / workspace trust / MCP approvals",
        "role": "adapter",
        "status": "source-verified",
        "detail": "cwd / terminal / workspace trust / MCP approvals",
        "relation": "cwd / trust / API key / MCP approval"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Setup And Trust」、架构总览 / 连线「多入口模式路由 -> Setup And Trust」、分层视图 / 分层「Setup 与 Trust 层」。证据结论是：`setup()` 处理 Node 版本、custom session、UDS messaging、terminal restore、cwd、worktree；`renderAndRun` 周边处理 onboarding、trust、GrowthBook、system context prefetch、MCP approvals、external CLAUDE.md warning、telemetry、API key、bypass dialog 和 auto-mode opt-in。图中的具体解释是：setup/renderAndRun 把 workspace trust、API key、MCP approvals、telemetry 和 bypass dialog 放在 query 之前。；关系语义：模式归一。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/setup.ts:56-190",
        "path": "src/setup.ts",
        "relativePath": "src/setup.ts",
        "start": 56,
        "end": 190,
        "snippet": "   56  export async function setup(\n   57    cwd: string,\n   58    permissionMode: PermissionMode,\n   59    allowDangerouslySkipPermissions: boolean,\n   60    worktreeEnabled: boolean,\n   61    worktreeName: string | undefined,\n   62    tmuxEnabled: boolean,\n   63    customSessionId?: string | null,\n   64    worktreePRNumber?: number,\n   65    messagingSocketPath?: string,\n   66  ): Promise<void> {\n   67    logForDiagnosticsNoPII('info', 'setup_started')\n   68  \n   69    // Check for Node.js version < 18\n   70    const nodeVersion = process.version.match(/^v(\\d+)\\./)?.[1]\n   71    if (!nodeVersion || parseInt(nodeVersion) < 18) {\n   72      // biome-ignore lint/suspicious/noConsole:: intentional console output\n   73      console.error(",
        "omitted": "已截取 56-73 行，原始范围到 190 行。"
      },
      {
        "kind": "file",
        "display": "src/interactiveHelpers.tsx:98-235",
        "path": "src/interactiveHelpers.tsx",
        "relativePath": "src/interactiveHelpers.tsx",
        "start": 98,
        "end": 235,
        "snippet": "   98  export async function renderAndRun(root: Root, element: React.ReactNode): Promise<void> {\n   99    root.render(element);\n  100    startDeferredPrefetches();\n  101    await root.waitUntilExit();\n  102    await gracefulShutdown(0);\n  103  }\n  104  export async function showSetupScreens(root: Root, permissionMode: PermissionMode, allowDangerouslySkipPermissions: boolean, commands?: Command[], claudeInChrome?: boolean, devChannels?: ChannelEntry[]): Promise<boolean> {\n  105    if (\"production\" === 'test' || isEnvTruthy(false) || process.env.IS_DEMO // Skip onboarding in demo mode\n  106    ) {\n  107      return false;\n  108    }\n  109    const config = getGlobalConfig();\n  110    let onboardingShown = false;\n  111    if (!config.theme || !config.hasCompletedOnboarding // always show onboarding at least once\n  112    ) {\n  113      onboardingShown = true;\n  114      const {\n  115        Onboarding",
        "omitted": "已截取 98-115 行，原始范围到 235 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-006",
    "conclusion": "`replLauncher` 动态加载 `App`/`REPL`；`REPL` 保存交互状态，发起 query 前组装 tool pool、agent tools、system prompt、user/system context，并消费 `query(...)` events",
    "type": "source fact",
    "location": "`src/replLauncher.tsx:12-22`, `src/screens/REPL.tsx:572-630`, `src/screens/REPL.tsx:2382-2420`, `src/screens/REPL.tsx:2768-2820`",
    "confidence": "高",
    "verified": "",
    "note": "REPL 流程",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "React/Ink REPL",
        "sub": "App / REPL / interactive state",
        "role": "adapter",
        "status": "source-verified",
        "detail": "交互式路径保存 UI、MCP、tools、file history、agents、thinking 等状态，再组装 query 上下文。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Setup And Trust -> React/Ink REPL",
        "sub": "交互路径",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：交互路径。",
        "relation": "Setup And Trust 到 React/Ink REPL"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "User Input / SDK Message",
        "sub": "interactive or stream-json",
        "role": "adapter",
        "status": "source-verified",
        "detail": "输入可能来自 REPL，也可能来自 headless/bridge/remote/direct-connect。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Context Assembly",
        "sub": "tools / prompts / system context",
        "role": "state",
        "status": "source-verified",
        "detail": "REPL 或 headless 路径在 query 前组装 tool permission context、tool pool、system/user context。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "User Input / SDK Message -> Context Assembly",
        "sub": "输入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：输入。",
        "relation": "User Input / SDK Message 到 Context Assembly"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "交互与结构化 IO 层",
        "sub": "React/Ink REPL / stream-json / remote messages",
        "role": "adapter",
        "status": "source-verified",
        "detail": "React/Ink REPL / stream-json / remote messages",
        "relation": "REPL / headless / bridge / remote"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「React/Ink REPL」、架构总览 / 连线「Setup And Trust -> React/Ink REPL」、Turn 主链路 / 节点「User Input / SDK Message」、Turn 主链路 / 节点「Context Assembly」。证据结论是：`replLauncher` 动态加载 `App`/`REPL`；`REPL` 保存交互状态，发起 query 前组装 tool pool、agent tools、system prompt、user/system context，并消费 `query(...)` events。图中的具体解释是：交互式路径保存 UI、MCP、tools、file history、agents、thinking 等状态，再组装 query 上下文。；关系语义：交互路径。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/replLauncher.tsx:12-22",
        "path": "src/replLauncher.tsx",
        "relativePath": "src/replLauncher.tsx",
        "start": 12,
        "end": 22,
        "snippet": "   12  export async function launchRepl(root: Root, appProps: AppWrapperProps, replProps: REPLProps, renderAndRun: (root: Root, element: React.ReactNode) => Promise<void>): Promise<void> {\n   13    const {\n   14      App\n   15    } = await import('./components/App.js');\n   16    const {\n   17      REPL\n   18    } = await import('./screens/REPL.js');\n   19    await renderAndRun(root, <App {...appProps}>\n   20        <REPL {...replProps} />\n   21      </App>);\n   22  }",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "src/screens/REPL.tsx:572-630",
        "path": "src/screens/REPL.tsx",
        "relativePath": "src/screens/REPL.tsx",
        "start": 572,
        "end": 630,
        "snippet": "  572  export function REPL({\n  573    commands: initialCommands,\n  574    debug,\n  575    initialTools,\n  576    initialMessages,\n  577    pendingHookMessages,\n  578    initialFileHistorySnapshots,\n  579    initialContentReplacements,\n  580    initialAgentName,\n  581    initialAgentColor,\n  582    mcpClients: initialMcpClients,\n  583    dynamicMcpConfig: initialDynamicMcpConfig,\n  584    autoConnectIdeFlag,\n  585    strictMcpConfig = false,\n  586    systemPrompt: customSystemPrompt,\n  587    appendSystemPrompt,\n  588    onBeforeQuery,\n  589    onTurnComplete,",
        "omitted": "已截取 572-589 行，原始范围到 630 行。"
      },
      {
        "kind": "file",
        "display": "src/screens/REPL.tsx:2382-2420",
        "path": "src/screens/REPL.tsx",
        "relativePath": "src/screens/REPL.tsx",
        "start": 2382,
        "end": 2420,
        "snippet": " 2382    const canUseTool = useCanUseTool(setToolUseConfirmQueue, setToolPermissionContext);\n 2383    const requestPrompt = useCallback((title: string, toolInputSummary?: string | null) => (request: PromptRequest): Promise<PromptResponse> => new Promise<PromptResponse>((resolve, reject) => {\n 2384      setPromptQueue(prev => [...prev, {\n 2385        request,\n 2386        title,\n 2387        toolInputSummary,\n 2388        resolve,\n 2389        reject\n 2390      }]);\n 2391    }), []);\n 2392    const getToolUseContext = useCallback((messages: MessageType[], newMessages: MessageType[], abortController: AbortController, mainLoopModel: string): ProcessUserInputContext => {\n 2393      // Read mutable values fresh from the store rather than closure-capturing\n 2394      // useAppState() snapshots. Same values today (closure is refreshed by the\n 2395      // render between turns); decouples freshness from React's render cycle for\n 2396      // a future headless conversation loop. Same pattern refreshTools() uses.\n 2397      const s = store.getState();\n 2398  \n 2399      // Compute tools fresh from store.getState() rather than the closure-",
        "omitted": "已截取 2382-2399 行，原始范围到 2420 行。"
      },
      {
        "kind": "file",
        "display": "src/screens/REPL.tsx:2768-2820",
        "path": "src/screens/REPL.tsx",
        "relativePath": "src/screens/REPL.tsx",
        "start": 2768,
        "end": 2820,
        "snippet": " 2768      const [,, defaultSystemPrompt, baseUserContext, systemContext] = await Promise.all([\n 2769      // IMPORTANT: do this after setMessages() above, to avoid UI jank\n 2770      checkAndDisableBypassPermissionsIfNeeded(toolPermissionContext, setAppState),\n 2771      // Gated on TRANSCRIPT_CLASSIFIER so GrowthBook kill switch runs wherever auto mode is built in\n 2772      feature('TRANSCRIPT_CLASSIFIER') ? checkAndDisableAutoModeIfNeeded(toolPermissionContext, setAppState, store.getState().fastMode) : undefined, getSystemPrompt(freshTools, mainLoopModelParam, Array.from(toolPermissionContext.additionalWorkingDirectories.keys()), freshMcpClients), getUserContext(), getSystemContext()]);\n 2773      const userContext = {\n 2774        ...baseUserContext,\n 2775        ...getCoordinatorUserContext(freshMcpClients, isScratchpadEnabled() ? getScratchpadDir() : undefined),\n 2776        ...((feature('PROACTIVE') || feature('KAIROS')) && proactiveModule?.isProactiveActive() && !terminalFocusRef.current ? {\n 2777          terminalFocus: 'The terminal is unfocused \\u2014 the user is not actively watching.'\n 2778        } : {})\n 2779      };\n 2780      queryCheckpoint('query_context_loading_end');\n 2781      const systemPrompt = buildEffectiveSystemPrompt({\n 2782        mainThreadAgentDefinition,\n 2783        toolUseContext,\n 2784        customSystemPrompt,\n 2785        defaultSystemPrompt,",
        "omitted": "已截取 2768-2785 行，原始范围到 2820 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-007",
    "conclusion": "`QueryEngine` 配置覆盖 cwd/tools/commands/MCP/agents/permission/AppState/messages/cache/prompts/model/budget/schema/SDK/abort；`submitMessage` 设置 cwd、persist session、包装 permission callback，并调用 `query(...)`；最终结果包含 API error、duration、turns、stop reason、cost、usage、permission denials 等",
    "type": "source fact",
    "location": "`src/QueryEngine.ts:130-260`, `src/QueryEngine.ts:657-751`, `src/QueryEngine.ts:1120-1155`, `src/QueryEngine.ts:1179-1295`",
    "confidence": "高",
    "verified": "",
    "note": "会话级状态",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "QueryEngine",
        "sub": "conversation state owner",
        "role": "module",
        "status": "source-verified",
        "detail": "会话级生命周期对象，拥有 initial messages、tools、commands、MCP clients、permission callback、budget 和 AppState。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "React/Ink REPL -> QueryEngine",
        "sub": "submitMessage",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：submitMessage。",
        "relation": "React/Ink REPL 到 QueryEngine"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Headless / Remote IO -> QueryEngine",
        "sub": "SDK message",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：SDK message。",
        "relation": "Headless / Remote IO 到 QueryEngine"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "QueryEngine.submitMessage",
        "sub": "session state + permission wrapper",
        "role": "module",
        "status": "source-verified",
        "detail": "submitMessage 持久化 session，包装 permission callback，并调用 query。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Context Assembly -> QueryEngine.submitMessage",
        "sub": "上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：上下文。",
        "relation": "Context Assembly 到 QueryEngine.submitMessage"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "Conversation Core 层",
        "sub": "QueryEngine owns conversation state",
        "role": "module",
        "status": "source-verified",
        "detail": "QueryEngine owns conversation state",
        "relation": "messages / tools / commands / budget"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「QueryEngine」、架构总览 / 连线「React/Ink REPL -> QueryEngine」、架构总览 / 连线「Headless / Remote IO -> QueryEngine」、Turn 主链路 / 节点「QueryEngine.submitMessage」。证据结论是：`QueryEngine` 配置覆盖 cwd/tools/commands/MCP/agents/permission/AppState/messages/cache/prompts/model/budget/schema/SDK/abort；`submitMessage` 设置 cwd、persist session、包装 permission callback，并调用 `query(...)`；最终结果包含 API error、duration、turns、stop reason、cost、usage、permission denials 等。图中的具体解释是：会话级生命周期对象，拥有 initial messages、tools、commands、MCP clients、permission callback、budget 和 AppState。；关系语义：submitMessage。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/QueryEngine.ts:130-260",
        "path": "src/QueryEngine.ts",
        "relativePath": "src/QueryEngine.ts",
        "start": 130,
        "end": 260,
        "snippet": "  130  export type QueryEngineConfig = {\n  131    cwd: string\n  132    tools: Tools\n  133    commands: Command[]\n  134    mcpClients: MCPServerConnection[]\n  135    agents: AgentDefinition[]\n  136    canUseTool: CanUseToolFn\n  137    getAppState: () => AppState\n  138    setAppState: (f: (prev: AppState) => AppState) => void\n  139    initialMessages?: Message[]\n  140    readFileCache: FileStateCache\n  141    customSystemPrompt?: string\n  142    appendSystemPrompt?: string\n  143    userSpecifiedModel?: string\n  144    fallbackModel?: string\n  145    thinkingConfig?: ThinkingConfig\n  146    maxTurns?: number\n  147    maxBudgetUsd?: number",
        "omitted": "已截取 130-147 行，原始范围到 260 行。"
      },
      {
        "kind": "file",
        "display": "src/QueryEngine.ts:657-751",
        "path": "src/QueryEngine.ts",
        "relativePath": "src/QueryEngine.ts",
        "start": 657,
        "end": 751,
        "snippet": "  657      // Track current message usage (reset on each message_start)\n  658      let currentMessageUsage: NonNullableUsage = EMPTY_USAGE\n  659      let turnCount = 1\n  660      let hasAcknowledgedInitialMessages = false\n  661      // Track structured output from StructuredOutput tool calls\n  662      let structuredOutputFromTool: unknown\n  663      // Track the last stop_reason from assistant messages\n  664      let lastStopReason: string | null = null\n  665      // Reference-based watermark so error_during_execution's errors[] is\n  666      // turn-scoped. A length-based index breaks when the 100-entry ring buffer\n  667      // shift()s during the turn — the index slides. If this entry is rotated\n  668      // out, lastIndexOf returns -1 and we include everything (safe fallback).\n  669      const errorLogWatermark = getInMemoryErrors().at(-1)\n  670      // Snapshot count before this query for delta-based retry limiting\n  671      const initialStructuredOutputCalls = jsonSchema\n  672        ? countToolCalls(this.mutableMessages, SYNTHETIC_OUTPUT_TOOL_NAME)\n  673        : 0\n  674  ",
        "omitted": "已截取 657-674 行，原始范围到 751 行。"
      },
      {
        "kind": "file",
        "display": "src/QueryEngine.ts:1120-1155",
        "path": "src/QueryEngine.ts",
        "relativePath": "src/QueryEngine.ts",
        "start": 1120,
        "end": 1155,
        "snippet": " 1120      // Extract the text result based on message type\n 1121      let textResult = ''\n 1122      let isApiError = false\n 1123  \n 1124      if (result.type === 'assistant') {\n 1125        const lastContent = last(result.message.content)\n 1126        if (\n 1127          lastContent?.type === 'text' &&\n 1128          !SYNTHETIC_MESSAGES.has(lastContent.text)\n 1129        ) {\n 1130          textResult = lastContent.text\n 1131        }\n 1132        isApiError = Boolean(result.isApiErrorMessage)\n 1133      }\n 1134  \n 1135      yield {\n 1136        type: 'result',\n 1137        subtype: 'success',",
        "omitted": "已截取 1120-1137 行，原始范围到 1155 行。"
      },
      {
        "kind": "file",
        "display": "src/QueryEngine.ts:1179-1295",
        "path": "src/QueryEngine.ts",
        "relativePath": "src/QueryEngine.ts",
        "start": 1179,
        "end": 1295,
        "snippet": " 1179  /**\n 1180   * Sends a single prompt to the Claude API and returns the response.\n 1181   * Assumes that claude is being used non-interactively -- will not\n 1182   * ask the user for permissions or further input.\n 1183   *\n 1184   * Convenience wrapper around QueryEngine for one-shot usage.\n 1185   */\n 1186  export async function* ask({\n 1187    commands,\n 1188    prompt,\n 1189    promptUuid,\n 1190    isMeta,\n 1191    cwd,\n 1192    tools,\n 1193    mcpClients,\n 1194    verbose = false,\n 1195    thinkingConfig,\n 1196    maxTurns,",
        "omitted": "已截取 1179-1196 行，原始范围到 1295 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-008",
    "conclusion": "`query()` 委托 `queryLoop`；`queryLoop` 管理 memory prefetch、skill discovery、system context、auto-compact、模型 streaming、tool execution、fallback/retry/error、tool summary、queued commands、tools refresh",
    "type": "source fact",
    "location": "`src/query.ts:219-337`, `src/query.ts:449-708`, `src/query.ts:847-997`, `src/query.ts:1363-1671`",
    "confidence": "高",
    "verified": "",
    "note": "turn 内编排",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "queryLoop",
        "sub": "turn orchestration",
        "role": "runtime-object",
        "status": "official-supported",
        "detail": "turn 内主循环，处理 system context、auto-compact、model streaming、tool execution、fallback、刷新 tools。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "QueryEngine -> queryLoop",
        "sub": "turn",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：turn。",
        "relation": "QueryEngine 到 queryLoop"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "queryLoop",
        "sub": "budget / compact / streaming",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "turn 内编排模型、工具、fallback、error、auto-compact 和 streaming events。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "QueryEngine.submitMessage -> queryLoop",
        "sub": "启动 turn",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：启动 turn。",
        "relation": "QueryEngine.submitMessage 到 queryLoop"
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Model Streaming -> queryLoop",
        "sub": "stream event",
        "role": "model-stream",
        "status": "",
        "detail": "关系语义：stream event。",
        "relation": "Model Streaming 到 queryLoop"
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Tool Execution -> queryLoop",
        "sub": "tool result",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：tool result。",
        "relation": "Tool Execution 到 queryLoop"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "Turn Runtime 层",
        "sub": "queryLoop / model streaming / compact / fallback",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "queryLoop / model streaming / compact / fallback",
        "relation": "model / compact / fallback / events"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「queryLoop」、架构总览 / 连线「QueryEngine -> queryLoop」、Turn 主链路 / 节点「queryLoop」、Turn 主链路 / 连线「QueryEngine.submitMessage -> queryLoop」。证据结论是：`query()` 委托 `queryLoop`；`queryLoop` 管理 memory prefetch、skill discovery、system context、auto-compact、模型 streaming、tool execution、fallback/retry/error、tool summary、queued commands、tools refresh。图中的具体解释是：turn 内主循环，处理 system context、auto-compact、model streaming、tool execution、fallback、刷新 tools。；关系语义：turn。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/query.ts:219-337",
        "path": "src/query.ts",
        "relativePath": "src/query.ts",
        "start": 219,
        "end": 337,
        "snippet": "  219  export async function* query(\n  220    params: QueryParams,\n  221  ): AsyncGenerator<\n  222    | StreamEvent\n  223    | RequestStartEvent\n  224    | Message\n  225    | TombstoneMessage\n  226    | ToolUseSummaryMessage,\n  227    Terminal\n  228  > {\n  229    const consumedCommandUuids: string[] = []\n  230    const terminal = yield* queryLoop(params, consumedCommandUuids)\n  231    // Only reached if queryLoop returned normally. Skipped on throw (error\n  232    // propagates through yield*) and on .return() (Return completion closes\n  233    // both generators). This gives the same asymmetric started-without-completed\n  234    // signal as print.ts's drainCommandQueue when the turn fails.\n  235    for (const uuid of consumedCommandUuids) {\n  236      notifyCommandLifecycle(uuid, 'completed')",
        "omitted": "已截取 219-236 行，原始范围到 337 行。"
      },
      {
        "kind": "file",
        "display": "src/query.ts:449-708",
        "path": "src/query.ts",
        "relativePath": "src/query.ts",
        "start": 449,
        "end": 708,
        "snippet": "  449      const fullSystemPrompt = asSystemPrompt(\n  450        appendSystemContext(systemPrompt, systemContext),\n  451      )\n  452  \n  453      queryCheckpoint('query_autocompact_start')\n  454      const { compactionResult, consecutiveFailures } = await deps.autocompact(\n  455        messagesForQuery,\n  456        toolUseContext,\n  457        {\n  458          systemPrompt,\n  459          userContext,\n  460          systemContext,\n  461          toolUseContext,\n  462          forkContextMessages: messagesForQuery,\n  463        },\n  464        querySource,\n  465        tracking,\n  466        snipTokensFreed,",
        "omitted": "已截取 449-466 行，原始范围到 708 行。"
      },
      {
        "kind": "file",
        "display": "src/query.ts:847-997",
        "path": "src/query.ts",
        "relativePath": "src/query.ts",
        "start": 847,
        "end": 997,
        "snippet": "  847              if (\n  848                streamingToolExecutor &&\n  849                !toolUseContext.abortController.signal.aborted\n  850              ) {\n  851                for (const result of streamingToolExecutor.getCompletedResults()) {\n  852                  if (result.message) {\n  853                    yield result.message\n  854                    toolResults.push(\n  855                      ...normalizeMessagesForAPI(\n  856                        [result.message],\n  857                        toolUseContext.options.tools,\n  858                      ).filter(_ => _.type === 'user'),\n  859                    )\n  860                  }\n  861                }\n  862              }\n  863            }\n  864            queryCheckpoint('query_api_streaming_end')",
        "omitted": "已截取 847-864 行，原始范围到 997 行。"
      },
      {
        "kind": "file",
        "display": "src/query.ts:1363-1671",
        "path": "src/query.ts",
        "relativePath": "src/query.ts",
        "start": 1363,
        "end": 1671,
        "snippet": " 1363      queryCheckpoint('query_tool_execution_start')\n 1364  \n 1365  \n 1366      if (streamingToolExecutor) {\n 1367        logEvent('tengu_streaming_tool_execution_used', {\n 1368          tool_count: toolUseBlocks.length,\n 1369          queryChainId: queryChainIdForAnalytics,\n 1370          queryDepth: queryTracking.depth,\n 1371        })\n 1372      } else {\n 1373        logEvent('tengu_streaming_tool_execution_not_used', {\n 1374          tool_count: toolUseBlocks.length,\n 1375          queryChainId: queryChainIdForAnalytics,\n 1376          queryDepth: queryTracking.depth,\n 1377        })\n 1378      }\n 1379  \n 1380      const toolUpdates = streamingToolExecutor",
        "omitted": "已截取 1363-1380 行，原始范围到 1671 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-009",
    "conclusion": "`ToolPermissionContext`、`ToolUseContext` 和 `Tool` contract 定义工具、权限、上下文、schema、并发、只读、破坏性、渲染、MCP/LSP、strict 等语义；`tools.ts` 组装 built-in/MCP tool pool，做 feature/env gate、deny filter、simple mode、去重和稳定排序",
    "type": "source fact",
    "location": "`src/Tool.ts:123-260`, `src/Tool.ts:321-540`, `src/Tool.ts:701-792`, `src/tools.ts:158-389`",
    "confidence": "高",
    "verified": "",
    "note": "Tool 协议",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Tool Contract",
        "sub": "schema / permission / render / hints",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Tool 不是简单回调，携带 schema、权限、并发、只读、破坏性、渲染、MCP/LSP、defer、strict 等语义。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "queryLoop -> Tool Contract",
        "sub": "工具调用",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：工具调用。",
        "relation": "queryLoop 到 Tool Contract"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Skills / Plugins / MCP / Hooks -> Tool Contract",
        "sub": "注册/包装能力",
        "role": "registration",
        "status": "",
        "detail": "关系语义：注册/包装能力。",
        "relation": "Skills / Plugins / MCP / Hooks 到 Tool Contract"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Tool Execution",
        "sub": "ToolUseContext",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "工具执行携带 commands、MCP clients/resources、budgets、prompts、AppState、messages 等上下文。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "queryLoop -> Tool Execution",
        "sub": "tool use",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：tool use。",
        "relation": "queryLoop 到 Tool Execution"
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Built-in Tools",
        "sub": "tools.ts source of truth",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "内置工具通过 feature/env gate、deny rules、simple mode、dedup 和稳定排序进入 tool pool。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Unified Tool Contract",
        "sub": "schema + permission + hints",
        "role": "module",
        "status": "source-verified",
        "detail": "不同能力源进入 runtime 后统一成 Tool/Command/Resource 语义，供模型、UI、权限、调度共同消费。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "tool.call(...)",
        "sub": "execute with ToolUseContext",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "权限流水线完成后才真正执行工具调用，并把结果回到 queryLoop。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Built-in Tools -> Unified Tool Contract",
        "sub": "内置",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：内置。",
        "relation": "Built-in Tools 到 Unified Tool Contract"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "MCP Tools / Resources -> Unified Tool Contract",
        "sub": "包装",
        "role": "registration",
        "status": "",
        "detail": "关系语义：包装。",
        "relation": "MCP Tools / Resources 到 Unified Tool Contract"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Skills / Plugin Commands -> Unified Tool Contract",
        "sub": "命令/能力",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：命令/能力。",
        "relation": "Skills / Plugin Commands 到 Unified Tool Contract"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Permission Decision -> tool.call(...)",
        "sub": "允许执行",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：允许执行。",
        "relation": "Permission Decision 到 tool.call(...)"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "tool.call(...) -> Unified Tool Contract",
        "sub": "结果/状态",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：结果/状态。",
        "relation": "tool.call(...) 到 Unified Tool Contract"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "Tool 与权限层",
        "sub": "Tool contract / permission pipeline / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Tool contract / permission pipeline / hooks",
        "relation": "schema / permission / hooks / callback"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Tool Contract」、架构总览 / 连线「queryLoop -> Tool Contract」、架构总览 / 连线「Skills / Plugins / MCP / Hooks -> Tool Contract」、Turn 主链路 / 节点「Tool Execution」。证据结论是：`ToolPermissionContext`、`ToolUseContext` 和 `Tool` contract 定义工具、权限、上下文、schema、并发、只读、破坏性、渲染、MCP/LSP、strict 等语义；`tools.ts` 组装 built-in/MCP tool pool，做 feature/env gate、deny filter、simple mode、去重和稳定排序。图中的具体解释是：Tool 不是简单回调，携带 schema、权限、并发、只读、破坏性、渲染、MCP/LSP、defer、strict 等语义。；关系语义：工具调用。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/Tool.ts:123-260",
        "path": "src/Tool.ts",
        "relativePath": "src/Tool.ts",
        "start": 123,
        "end": 260,
        "snippet": "  123  export type ToolPermissionContext = DeepImmutable<{\n  124    mode: PermissionMode\n  125    additionalWorkingDirectories: Map<string, AdditionalWorkingDirectory>\n  126    alwaysAllowRules: ToolPermissionRulesBySource\n  127    alwaysDenyRules: ToolPermissionRulesBySource\n  128    alwaysAskRules: ToolPermissionRulesBySource\n  129    isBypassPermissionsModeAvailable: boolean\n  130    isAutoModeAvailable?: boolean\n  131    strippedDangerousRules?: ToolPermissionRulesBySource\n  132    /** When true, permission prompts are auto-denied (e.g., background agents that can't show UI) */\n  133    shouldAvoidPermissionPrompts?: boolean\n  134    /** When true, automated checks (classifier, hooks) are awaited before showing the permission dialog (coordinator workers) */\n  135    awaitAutomatedChecksBeforeDialog?: boolean\n  136    /** Stores the permission mode before model-initiated plan mode entry, so it can be restored on exit */\n  137    prePlanMode?: PermissionMode\n  138  }>\n  139  \n  140  export const getEmptyToolPermissionContext: () => ToolPermissionContext =",
        "omitted": "已截取 123-140 行，原始范围到 260 行。"
      },
      {
        "kind": "file",
        "display": "src/Tool.ts:321-540",
        "path": "src/Tool.ts",
        "relativePath": "src/Tool.ts",
        "start": 321,
        "end": 540,
        "snippet": "  321  export type ToolResult<T> = {\n  322    data: T\n  323    newMessages?: (\n  324      | UserMessage\n  325      | AssistantMessage\n  326      | AttachmentMessage\n  327      | SystemMessage\n  328    )[]\n  329    // contextModifier is only honored for tools that aren't concurrency safe.\n  330    contextModifier?: (context: ToolUseContext) => ToolUseContext\n  331    /** MCP protocol metadata (structuredContent, _meta) to pass through to SDK consumers */\n  332    mcpMeta?: {\n  333      _meta?: Record<string, unknown>\n  334      structuredContent?: Record<string, unknown>\n  335    }\n  336  }\n  337  \n  338  export type ToolCallProgress<P extends ToolProgressData = ToolProgressData> = (",
        "omitted": "已截取 321-338 行，原始范围到 540 行。"
      },
      {
        "kind": "file",
        "display": "src/Tool.ts:701-792",
        "path": "src/Tool.ts",
        "relativePath": "src/Tool.ts",
        "start": 701,
        "end": 792,
        "snippet": "  701  export type Tools = readonly Tool[]\n  702  \n  703  /**\n  704   * Methods that `buildTool` supplies a default for. A `ToolDef` may omit these;\n  705   * the resulting `Tool` always has them.\n  706   */\n  707  type DefaultableToolKeys =\n  708    | 'isEnabled'\n  709    | 'isConcurrencySafe'\n  710    | 'isReadOnly'\n  711    | 'isDestructive'\n  712    | 'checkPermissions'\n  713    | 'toAutoClassifierInput'\n  714    | 'userFacingName'\n  715  \n  716  /**\n  717   * Tool definition accepted by `buildTool`. Same shape as `Tool` but with the\n  718   * defaultable methods optional — `buildTool` fills them in so callers always",
        "omitted": "已截取 701-718 行，原始范围到 792 行。"
      },
      {
        "kind": "file",
        "display": "src/tools.ts:158-389",
        "path": "src/tools.ts",
        "relativePath": "src/tools.ts",
        "start": 158,
        "end": 389,
        "snippet": "  158  /**\n  159   * Predefined tool presets that can be used with --tools flag\n  160   */\n  161  export const TOOL_PRESETS = ['default'] as const\n  162  \n  163  export type ToolPreset = (typeof TOOL_PRESETS)[number]\n  164  \n  165  export function parseToolPreset(preset: string): ToolPreset | null {\n  166    const presetString = preset.toLowerCase()\n  167    if (!TOOL_PRESETS.includes(presetString as ToolPreset)) {\n  168      return null\n  169    }\n  170    return presetString as ToolPreset\n  171  }\n  172  \n  173  /**\n  174   * Get the list of tool names for a given preset\n  175   * Filters out tools that are disabled via isEnabled() check",
        "omitted": "已截取 158-175 行，原始范围到 389 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-010",
    "conclusion": "tool execution 支持并发安全分组、输入校验、PreToolUse hooks、permission decision、deny/allow path、telemetry、interactive permission、bridge callback、resolve-once 和 persistence",
    "type": "source fact",
    "location": "`src/services/tools/toolOrchestration.ts:1-188`, `src/services/tools/toolExecution.ts:337-456`, `src/services/tools/toolExecution.ts:599-752`, `src/services/tools/toolExecution.ts:795-1225`, `src/hooks/useCanUseTool.tsx:27-182`, `src/hooks/toolPermission/PermissionContext.ts:55-147`, `src/hooks/toolPermission/PermissionContext.ts:216-336`, `src/hooks/toolPermission/handlers/interactiveHandler.ts:43-260`",
    "confidence": "高",
    "verified": "",
    "note": "权限和执行",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Permission Pipeline",
        "sub": "hooks / UI / remote / classifier",
        "role": "extension-point",
        "status": "official-supported",
        "detail": "tool execution 会经过 validation、hooks、permission decision、interactive handler、bridge/remote callbacks 和 classifier。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Tool Contract -> Permission Pipeline",
        "sub": "执行前决策",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行前决策。",
        "relation": "Tool Contract 到 Permission Pipeline"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Tool Execution",
        "sub": "ToolUseContext",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "工具执行携带 commands、MCP clients/resources、budgets、prompts、AppState、messages 等上下文。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "queryLoop -> Tool Execution",
        "sub": "tool use",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：tool use。",
        "relation": "queryLoop 到 Tool Execution"
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Validation And Hooks",
        "sub": "schema / PreToolUse / prevent",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "执行前先解析 tool name、input schema，并运行 PreToolUse hooks。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Permission Decision",
        "sub": "rules / modes / resolve once",
        "role": "extension-point",
        "status": "official-supported",
        "detail": "permission context 支持 allow/deny/ask、hook allow、用户 allow、deny abort、decision persistence。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Decision Sources",
        "sub": "UI / bridge / remote / classifier",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "交互 handler、bridge callback、remote callback 和 speculative classifier 都可能参与 can-use-tool 决策。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "tool.call(...)",
        "sub": "execute with ToolUseContext",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "权限流水线完成后才真正执行工具调用，并把结果回到 queryLoop。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Unified Tool Contract -> Validation And Hooks",
        "sub": "执行前",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行前。",
        "relation": "Unified Tool Contract 到 Validation And Hooks"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Validation And Hooks -> Permission Decision",
        "sub": "策略输入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：策略输入。",
        "relation": "Validation And Hooks 到 Permission Decision"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Permission Decision -> Decision Sources",
        "sub": "需要确认",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：需要确认。",
        "relation": "Permission Decision 到 Decision Sources"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Decision Sources -> Permission Decision",
        "sub": "返回决策",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：返回决策。",
        "relation": "Decision Sources 到 Permission Decision"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Permission Decision -> tool.call(...)",
        "sub": "允许执行",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：允许执行。",
        "relation": "Permission Decision 到 tool.call(...)"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "Tool 与权限层",
        "sub": "Tool contract / permission pipeline / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "Tool contract / permission pipeline / hooks",
        "relation": "schema / permission / hooks / callback"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Permission Pipeline」、架构总览 / 连线「Tool Contract -> Permission Pipeline」、Turn 主链路 / 节点「Tool Execution」、Turn 主链路 / 连线「queryLoop -> Tool Execution」。证据结论是：tool execution 支持并发安全分组、输入校验、PreToolUse hooks、permission decision、deny/allow path、telemetry、interactive permission、bridge callback、resolve-once 和 persistence。图中的具体解释是：tool execution 会经过 validation、hooks、permission decision、interactive handler、bridge/remote callbacks 和 classifier。；关系语义：执行前决策。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/services/tools/toolOrchestration.ts:1-188",
        "path": "src/services/tools/toolOrchestration.ts",
        "relativePath": "src/services/tools/toolOrchestration.ts",
        "start": 1,
        "end": 188,
        "snippet": "    1  import type { ToolUseBlock } from '@anthropic-ai/sdk/resources/index.mjs'\n    2  import type { CanUseToolFn } from '../../hooks/useCanUseTool.js'\n    3  import { findToolByName, type ToolUseContext } from '../../Tool.js'\n    4  import type { AssistantMessage, Message } from '../../types/message.js'\n    5  import { all } from '../../utils/generators.js'\n    6  import { type MessageUpdateLazy, runToolUse } from './toolExecution.js'\n    7  \n    8  function getMaxToolUseConcurrency(): number {\n    9    return (\n   10      parseInt(process.env.CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY || '', 10) || 10\n   11    )\n   12  }\n   13  \n   14  export type MessageUpdate = {\n   15    message?: Message\n   16    newContext: ToolUseContext\n   17  }\n   18  ",
        "omitted": "已截取 1-18 行，原始范围到 188 行。"
      },
      {
        "kind": "file",
        "display": "src/services/tools/toolExecution.ts:337-456",
        "path": "src/services/tools/toolExecution.ts",
        "relativePath": "src/services/tools/toolExecution.ts",
        "start": 337,
        "end": 456,
        "snippet": "  337  export async function* runToolUse(\n  338    toolUse: ToolUseBlock,\n  339    assistantMessage: AssistantMessage,\n  340    canUseTool: CanUseToolFn,\n  341    toolUseContext: ToolUseContext,\n  342  ): AsyncGenerator<MessageUpdateLazy, void> {\n  343    const toolName = toolUse.name\n  344    // First try to find in the available tools (what the model sees)\n  345    let tool = findToolByName(toolUseContext.options.tools, toolName)\n  346  \n  347    // If not found, check if it's a deprecated tool being called by alias\n  348    // (e.g., old transcripts calling \"KillShell\" which is now an alias for \"TaskStop\")\n  349    // Only fall back for tools where the name matches an alias, not the primary name\n  350    if (!tool) {\n  351      const fallbackTool = findToolByName(getAllBaseTools(), toolName)\n  352      // Only use fallback if the tool was found via alias (deprecated name)\n  353      if (fallbackTool && fallbackTool.aliases?.includes(toolName)) {\n  354        tool = fallbackTool",
        "omitted": "已截取 337-354 行，原始范围到 456 行。"
      },
      {
        "kind": "file",
        "display": "src/services/tools/toolExecution.ts:599-752",
        "path": "src/services/tools/toolExecution.ts",
        "relativePath": "src/services/tools/toolExecution.ts",
        "start": 599,
        "end": 752,
        "snippet": "  599  async function checkPermissionsAndCallTool(\n  600    tool: Tool,\n  601    toolUseID: string,\n  602    input: { [key: string]: boolean | string | number },\n  603    toolUseContext: ToolUseContext,\n  604    canUseTool: CanUseToolFn,\n  605    assistantMessage: AssistantMessage,\n  606    messageId: string,\n  607    requestId: string | undefined,\n  608    mcpServerType: McpServerType,\n  609    mcpServerBaseUrl: ReturnType<typeof getLoggingSafeMcpBaseUrl>,\n  610    onToolProgress: (\n  611      progress: ToolProgress<ToolProgressData> | ProgressMessage<HookProgress>,\n  612    ) => void,\n  613  ): Promise<MessageUpdateLazy[]> {\n  614    // Validate input types with zod (surprisingly, the model is not great at generating valid input)\n  615    const parsedInput = tool.inputSchema.safeParse(input)\n  616    if (!parsedInput.success) {",
        "omitted": "已截取 599-616 行，原始范围到 752 行。"
      },
      {
        "kind": "file",
        "display": "src/services/tools/toolExecution.ts:795-1225",
        "path": "src/services/tools/toolExecution.ts",
        "relativePath": "src/services/tools/toolExecution.ts",
        "start": 795,
        "end": 1225,
        "snippet": "  795    let shouldPreventContinuation = false\n  796    let stopReason: string | undefined\n  797    let hookPermissionResult: PermissionResult | undefined\n  798    const preToolHookInfos: StopHookInfo[] = []\n  799    const preToolHookStart = Date.now()\n  800    for await (const result of runPreToolUseHooks(\n  801      toolUseContext,\n  802      tool,\n  803      processedInput,\n  804      toolUseID,\n  805      assistantMessage.message.id,\n  806      requestId,\n  807      mcpServerType,\n  808      mcpServerBaseUrl,\n  809    )) {\n  810      switch (result.type) {\n  811        case 'message':\n  812          if (result.message.message.type === 'progress') {",
        "omitted": "已截取 795-812 行，原始范围到 1225 行。"
      },
      {
        "kind": "file",
        "display": "src/hooks/useCanUseTool.tsx:27-182",
        "path": "src/hooks/useCanUseTool.tsx",
        "relativePath": "src/hooks/useCanUseTool.tsx",
        "start": 27,
        "end": 182,
        "snippet": "   27  export type CanUseToolFn<Input extends Record<string, unknown> = Record<string, unknown>> = (tool: ToolType, input: Input, toolUseContext: ToolUseContext, assistantMessage: AssistantMessage, toolUseID: string, forceDecision?: PermissionDecision<Input>) => Promise<PermissionDecision<Input>>;\n   28  function useCanUseTool(setToolUseConfirmQueue, setToolPermissionContext) {\n   29    const $ = _c(3);\n   30    let t0;\n   31    if ($[0] !== setToolPermissionContext || $[1] !== setToolUseConfirmQueue) {\n   32      t0 = async (tool, input, toolUseContext, assistantMessage, toolUseID, forceDecision) => new Promise(resolve => {\n   33        const ctx = createPermissionContext(tool, input, toolUseContext, assistantMessage, toolUseID, setToolPermissionContext, createPermissionQueueOps(setToolUseConfirmQueue));\n   34        if (ctx.resolveIfAborted(resolve)) {\n   35          return;\n   36        }\n   37        const decisionPromise = forceDecision !== undefined ? Promise.resolve(forceDecision) : hasPermissionsToUseTool(tool, input, toolUseContext, assistantMessage, toolUseID);\n   38        return decisionPromise.then(async result => {\n   39          if (result.behavior === \"allow\") {\n   40            if (ctx.resolveIfAborted(resolve)) {\n   41              return;\n   42            }\n   43            if (feature(\"TRANSCRIPT_CLASSIFIER\") && result.decisionReason?.type === \"classifier\" && result.decisionReason.classifier === \"auto-mode\") {\n   44              setYoloClassifierApproval(toolUseID, result.decisionReason.reason);",
        "omitted": "已截取 27-44 行，原始范围到 182 行。"
      },
      {
        "kind": "file",
        "display": "src/hooks/toolPermission/PermissionContext.ts:55-147",
        "path": "src/hooks/toolPermission/PermissionContext.ts",
        "relativePath": "src/hooks/toolPermission/PermissionContext.ts",
        "start": 55,
        "end": 147,
        "snippet": "   55  // Generic interface for permission queue operations, decoupled from React.\n   56  // In the REPL, these are backed by React state.\n   57  type PermissionQueueOps = {\n   58    push(item: ToolUseConfirm): void\n   59    remove(toolUseID: string): void\n   60    update(toolUseID: string, patch: Partial<ToolUseConfirm>): void\n   61  }\n   62  \n   63  type ResolveOnce<T> = {\n   64    resolve(value: T): void\n   65    isResolved(): boolean\n   66    /**\n   67     * Atomically check-and-mark as resolved. Returns true if this caller\n   68     * won the race (nobody else has resolved yet), false otherwise.\n   69     * Use this in async callbacks BEFORE awaiting, to close the window\n   70     * between the `isResolved()` check and the actual `resolve()` call.\n   71     */\n   72    claim(): boolean",
        "omitted": "已截取 55-72 行，原始范围到 147 行。"
      },
      {
        "kind": "file",
        "display": "src/hooks/toolPermission/PermissionContext.ts:216-336",
        "path": "src/hooks/toolPermission/PermissionContext.ts",
        "relativePath": "src/hooks/toolPermission/PermissionContext.ts",
        "start": 216,
        "end": 336,
        "snippet": "  216      async runHooks(\n  217        permissionMode: string | undefined,\n  218        suggestions: PermissionUpdate[] | undefined,\n  219        updatedInput?: Record<string, unknown>,\n  220        permissionPromptStartTimeMs?: number,\n  221      ): Promise<PermissionDecision | null> {\n  222        for await (const hookResult of executePermissionRequestHooks(\n  223          tool.name,\n  224          toolUseID,\n  225          input,\n  226          toolUseContext,\n  227          permissionMode,\n  228          suggestions,\n  229          toolUseContext.abortController.signal,\n  230        )) {\n  231          if (hookResult.permissionRequestResult) {\n  232            const decision = hookResult.permissionRequestResult\n  233            if (decision.behavior === 'allow') {",
        "omitted": "已截取 216-233 行，原始范围到 336 行。"
      },
      {
        "kind": "file",
        "display": "src/hooks/toolPermission/handlers/interactiveHandler.ts:43-260",
        "path": "src/hooks/toolPermission/handlers/interactiveHandler.ts",
        "relativePath": "src/hooks/toolPermission/handlers/interactiveHandler.ts",
        "start": 43,
        "end": 260,
        "snippet": "   43  /**\n   44   * Handles the interactive (main-agent) permission flow.\n   45   *\n   46   * Pushes a ToolUseConfirm entry to the confirm queue with callbacks:\n   47   * onAbort, onAllow, onReject, recheckPermission, onUserInteraction.\n   48   *\n   49   * Runs permission hooks and bash classifier checks asynchronously in the\n   50   * background, racing them against user interaction. Uses a resolve-once\n   51   * guard and `userInteracted` flag to prevent multiple resolutions.\n   52   *\n   53   * This function does NOT return a Promise -- it sets up callbacks that\n   54   * eventually call `resolve()` to resolve the outer promise owned by\n   55   * the caller.\n   56   */\n   57  function handleInteractivePermission(\n   58    params: InteractivePermissionParams,\n   59    resolve: (decision: PermissionDecision) => void,\n   60  ): void {",
        "omitted": "已截取 43-60 行，原始范围到 260 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-011",
    "conclusion": "Commands/Skills/Plugins 支持内置命令、Skill command、remote/bridge safe command、plugin manifest、plugin command frontmatter、plugin variables、shell command、skill dirs、marketplace name security",
    "type": "source fact",
    "location": "`src/commands.ts:220-600`, `src/commands.ts:626-754`, `src/utils/plugins/pluginLoader.ts:1-33`, `src/utils/plugins/schemas.ts:1-160`, `src/utils/plugins/loadPluginCommands.ts:37-140`, `src/utils/plugins/loadPluginCommands.ts:260-520`, `src/skills/loadSkillsDir.ts:626-820`",
    "confidence": "高",
    "verified": "",
    "note": "命令和扩展",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Skills / Plugins / MCP / Hooks",
        "sub": "command / tool / resource / event",
        "role": "extension-point",
        "status": "inference",
        "detail": "扩展面分层：Skill、Plugin、MCP、Hook、remote control request 最终映射到 command/tool/permission/session 语义。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Permission Pipeline -> Skills / Plugins / MCP / Hooks",
        "sub": "hooks/MCP/remote",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：hooks/MCP/remote。",
        "relation": "Permission Pipeline 到 Skills / Plugins / MCP / Hooks"
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Skills / Plugin Commands",
        "sub": "markdown / manifest / hooks",
        "role": "extension-point",
        "status": "inference",
        "detail": "Skill、Plugin command、plugin hooks、marketplace 都有自己的加载和校验策略。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "扩展接入层",
        "sub": "Skills / Plugins / MCP / Commands",
        "role": "extension-point",
        "status": "inference",
        "detail": "Skills / Plugins / MCP / Commands",
        "relation": "skills / plugins / MCP / commands"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Skills / Plugins / MCP / Hooks」、架构总览 / 连线「Permission Pipeline -> Skills / Plugins / MCP / Hooks」、权限与扩展 / 节点「Skills / Plugin Commands」、分层视图 / 分层「扩展接入层」。证据结论是：Commands/Skills/Plugins 支持内置命令、Skill command、remote/bridge safe command、plugin manifest、plugin command frontmatter、plugin variables、shell command、skill dirs、marketplace name security。图中的具体解释是：扩展面分层：Skill、Plugin、MCP、Hook、remote control request 最终映射到 command/tool/permission/session 语义。；关系语义：hooks/MCP/remote。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/commands.ts:220-600",
        "path": "src/commands.ts",
        "relativePath": "src/commands.ts",
        "start": 220,
        "end": 600,
        "snippet": "  220    ResumeEntrypoint,\n  221  } from './types/command.js'\n  222  export { getCommandName, isCommandEnabled } from './types/command.js'\n  223  \n  224  // Commands that get eliminated from the external build\n  225  export const INTERNAL_ONLY_COMMANDS = [\n  226    backfillSessions,\n  227    breakCache,\n  228    bughunter,\n  229    commit,\n  230    commitPushPr,\n  231    ctx_viz,\n  232    goodClaude,\n  233    issue,\n  234    initVerifiers,\n  235    ...(forceSnip ? [forceSnip] : []),\n  236    mockLimits,\n  237    bridgeKick,",
        "omitted": "已截取 220-237 行，原始范围到 600 行。"
      },
      {
        "kind": "file",
        "display": "src/commands.ts:626-754",
        "path": "src/commands.ts",
        "relativePath": "src/commands.ts",
        "start": 626,
        "end": 754,
        "snippet": "  626    vim, // Toggle vim mode\n  627    cost, // Show session cost (local cost tracking)\n  628    usage, // Show usage info\n  629    copy, // Copy last message\n  630    btw, // Quick note\n  631    feedback, // Send feedback\n  632    plan, // Plan mode toggle\n  633    keybindings, // Keybinding management\n  634    statusline, // Status line toggle\n  635    stickers, // Stickers\n  636    mobile, // Mobile QR code\n  637  ])\n  638  \n  639  /**\n  640   * Builtin commands of type 'local' that ARE safe to execute when received\n  641   * over the Remote Control bridge. These produce text output that streams\n  642   * back to the mobile/web client and have no terminal-only side effects.\n  643   *",
        "omitted": "已截取 626-643 行，原始范围到 754 行。"
      },
      {
        "kind": "file",
        "display": "src/utils/plugins/pluginLoader.ts:1-33",
        "path": "src/utils/plugins/pluginLoader.ts",
        "relativePath": "src/utils/plugins/pluginLoader.ts",
        "start": 1,
        "end": 33,
        "snippet": "    1  /**\n    2   * Plugin Loader Module\n    3   *\n    4   * This module is responsible for discovering, loading, and validating Claude Code plugins\n    5   * from various sources including marketplaces and git repositories.\n    6   *\n    7   * NPM packages are also supported but must be referenced through marketplaces - the marketplace\n    8   * entry contains the NPM package information.\n    9   *\n   10   * Plugin Discovery Sources (in order of precedence):\n   11   * 1. Marketplace-based plugins (plugin@marketplace format in settings)\n   12   * 2. Session-only plugins (from --plugin-dir CLI flag or SDK plugins option)\n   13   *\n   14   * Plugin Directory Structure:\n   15   * ```\n   16   * my-plugin/\n   17   * ├── plugin.json          # Optional manifest with metadata\n   18   * ├── commands/            # Custom slash commands",
        "omitted": "已截取 1-18 行，原始范围到 33 行。"
      },
      {
        "kind": "file",
        "display": "src/utils/plugins/schemas.ts:1-160",
        "path": "src/utils/plugins/schemas.ts",
        "relativePath": "src/utils/plugins/schemas.ts",
        "start": 1,
        "end": 160,
        "snippet": "    1  import { z } from 'zod/v4'\n    2  import { HooksSchema } from '../../schemas/hooks.js'\n    3  import { McpServerConfigSchema } from '../../services/mcp/types.js'\n    4  import { lazySchema } from '../lazySchema.js'\n    5  \n    6  /**\n    7   * First-layer defense against official marketplace impersonation.\n    8   *\n    9   * This validation blocks direct impersonation attempts like \"anthropic-official\",\n   10   * \"claude-marketplace\", etc. Indirect variations (e.g., \"my-claude-marketplace\")\n   11   * are not blocked intentionally to avoid false positives on legitimate names.\n   12   * Source org verification provides additional protection at registration/install time.\n   13   */\n   14  \n   15  /**\n   16   * Official marketplace names that are reserved for Anthropic/Claude official use.\n   17   * These names are allowed ONLY for official marketplaces and blocked for third parties.\n   18   */",
        "omitted": "已截取 1-18 行，原始范围到 160 行。"
      },
      {
        "kind": "file",
        "display": "src/utils/plugins/loadPluginCommands.ts:37-140",
        "path": "src/utils/plugins/loadPluginCommands.ts",
        "relativePath": "src/utils/plugins/loadPluginCommands.ts",
        "start": 37,
        "end": 140,
        "snippet": "   37  // Similar to MarkdownFile but for plugin sources\n   38  type PluginMarkdownFile = {\n   39    filePath: string\n   40    baseDir: string\n   41    frontmatter: FrontmatterData\n   42    content: string\n   43  }\n   44  \n   45  // Configuration for loading commands or skills\n   46  type LoadConfig = {\n   47    isSkillMode: boolean // true when loading from skills/ directory\n   48  }\n   49  \n   50  /**\n   51   * Check if a file path is a skill file (SKILL.md)\n   52   */\n   53  function isSkillFile(filePath: string): boolean {\n   54    return /^skill\\.md$/i.test(basename(filePath))",
        "omitted": "已截取 37-54 行，原始范围到 140 行。"
      },
      {
        "kind": "file",
        "display": "src/utils/plugins/loadPluginCommands.ts:260-520",
        "path": "src/utils/plugins/loadPluginCommands.ts",
        "relativePath": "src/utils/plugins/loadPluginCommands.ts",
        "start": 260,
        "end": 520,
        "snippet": "  260        substitutedAllowedTools,\n  261      )\n  262  \n  263      const argumentHint = frontmatter['argument-hint'] as string | undefined\n  264      const argumentNames = parseArgumentNames(\n  265        frontmatter.arguments as string | string[] | undefined,\n  266      )\n  267      const whenToUse = frontmatter.when_to_use as string | undefined\n  268      const version = frontmatter.version as string | undefined\n  269      const displayName = frontmatter.name as string | undefined\n  270  \n  271      // Handle model configuration, resolving aliases like 'haiku', 'sonnet', 'opus'\n  272      const model =\n  273        frontmatter.model === 'inherit'\n  274          ? undefined\n  275          : frontmatter.model\n  276            ? parseUserSpecifiedModel(frontmatter.model as string)\n  277            : undefined",
        "omitted": "已截取 260-277 行，原始范围到 520 行。"
      },
      {
        "kind": "file",
        "display": "src/skills/loadSkillsDir.ts:626-820",
        "path": "src/skills/loadSkillsDir.ts",
        "relativePath": "src/skills/loadSkillsDir.ts",
        "start": 626,
        "end": 820,
        "snippet": "  626   * Loads all skills from both /skills/ and legacy /commands/ directories.\n  627   *\n  628   * Skills from /skills/ directories:\n  629   * - Only support directory format: skill-name/SKILL.md\n  630   * - Default to user-invocable: true (can opt-out with user-invocable: false)\n  631   *\n  632   * Skills from legacy /commands/ directories:\n  633   * - Support both directory format (SKILL.md) and single .md file format\n  634   * - Default to user-invocable: true (user can type /cmd)\n  635   *\n  636   * @param cwd Current working directory for project directory traversal\n  637   */\n  638  export const getSkillDirCommands = memoize(\n  639    async (cwd: string): Promise<Command[]> => {\n  640      const userSkillsDir = join(getClaudeConfigHomeDir(), 'skills')\n  641      const managedSkillsDir = join(getManagedFilePath(), '.claude', 'skills')\n  642      const projectSkillsDirs = getProjectDirsUpToHome('skills', cwd)\n  643  ",
        "omitted": "已截取 626-643 行，原始范围到 820 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-012",
    "conclusion": "MCP client 支持 reconnect、工具抓取、工具包装、资源工具、auth needs、local/remote 并发、progress、timeout 和 elicitation retry",
    "type": "source fact",
    "location": "`src/services/mcp/client.ts:1660-1722`, `src/services/mcp/client.ts:1728-1895`, `src/services/mcp/client.ts:2226-2408`, `src/services/mcp/client.ts:3029-3115`",
    "confidence": "高",
    "verified": "",
    "note": "MCP",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Skills / Plugins / MCP / Hooks",
        "sub": "command / tool / resource / event",
        "role": "extension-point",
        "status": "inference",
        "detail": "扩展面分层：Skill、Plugin、MCP、Hook、remote control request 最终映射到 command/tool/permission/session 语义。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Permission Pipeline -> Skills / Plugins / MCP / Hooks",
        "sub": "hooks/MCP/remote",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：hooks/MCP/remote。",
        "relation": "Permission Pipeline 到 Skills / Plugins / MCP / Hooks"
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "MCP Tools / Resources",
        "sub": "remote and local servers",
        "role": "extension-point",
        "status": "official-supported",
        "detail": "MCP discovery 连接 server，获取 tools、commands、skills、resources，并映射为 Claude Code Tool。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "扩展接入层",
        "sub": "Skills / Plugins / MCP / Commands",
        "role": "extension-point",
        "status": "inference",
        "detail": "Skills / Plugins / MCP / Commands",
        "relation": "skills / plugins / MCP / commands"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Skills / Plugins / MCP / Hooks」、架构总览 / 连线「Permission Pipeline -> Skills / Plugins / MCP / Hooks」、权限与扩展 / 节点「MCP Tools / Resources」、分层视图 / 分层「扩展接入层」。证据结论是：MCP client 支持 reconnect、工具抓取、工具包装、资源工具、auth needs、local/remote 并发、progress、timeout 和 elicitation retry。图中的具体解释是：扩展面分层：Skill、Plugin、MCP、Hook、remote control request 最终映射到 command/tool/permission/session 语义。；关系语义：hooks/MCP/remote。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/services/mcp/client.ts:1660-1722",
        "path": "src/services/mcp/client.ts",
        "relativePath": "src/services/mcp/client.ts",
        "start": 1660,
        "end": 1722,
        "snippet": " 1660    } catch {\n 1661      // Ignore errors - server might have failed to connect\n 1662    }\n 1663  \n 1664    // Clear from cache (both connection and fetch caches so reconnect\n 1665    // fetches fresh tools/resources/commands instead of stale ones)\n 1666    connectToServer.cache.delete(key)\n 1667    fetchToolsForClient.cache.delete(name)\n 1668    fetchResourcesForClient.cache.delete(name)\n 1669    fetchCommandsForClient.cache.delete(name)\n 1670    if (feature('MCP_SKILLS')) {\n 1671      fetchMcpSkillsForClient!.cache.delete(name)\n 1672    }\n 1673  }\n 1674  \n 1675  /**\n 1676   * Ensures a valid connected client for an MCP server.\n 1677   * For most server types, uses the memoization cache if available, or reconnects",
        "omitted": "已截取 1660-1677 行，原始范围到 1722 行。"
      },
      {
        "kind": "file",
        "display": "src/services/mcp/client.ts:1728-1895",
        "path": "src/services/mcp/client.ts",
        "relativePath": "src/services/mcp/client.ts",
        "start": 1728,
        "end": 1895,
        "snippet": " 1728  /**\n 1729   * Encode MCP tool input for the auto-mode security classifier.\n 1730   * Exported so the auto-mode eval scripts can mirror production encoding\n 1731   * for `mcp__*` tool stubs without duplicating this logic.\n 1732   */\n 1733  export function mcpToolInputToAutoClassifierInput(\n 1734    input: Record<string, unknown>,\n 1735    toolName: string,\n 1736  ): string {\n 1737    const keys = Object.keys(input)\n 1738    return keys.length > 0\n 1739      ? keys.map(k => `${k}=${String(input[k])}`).join(' ')\n 1740      : toolName\n 1741  }\n 1742  \n 1743  export const fetchToolsForClient = memoizeWithLRU(\n 1744    async (client: MCPServerConnection): Promise<Tool[]> => {\n 1745      if (client.type !== 'connected') return []",
        "omitted": "已截取 1728-1745 行，原始范围到 1895 行。"
      },
      {
        "kind": "file",
        "display": "src/services/mcp/client.ts:2226-2408",
        "path": "src/services/mcp/client.ts",
        "relativePath": "src/services/mcp/client.ts",
        "start": 2226,
        "end": 2408,
        "snippet": " 2226  export async function getMcpToolsCommandsAndResources(\n 2227    onConnectionAttempt: (params: {\n 2228      client: MCPServerConnection\n 2229      tools: Tool[]\n 2230      commands: Command[]\n 2231      resources?: ServerResource[]\n 2232    }) => void,\n 2233    mcpConfigs?: Record<string, ScopedMcpServerConfig>,\n 2234  ): Promise<void> {\n 2235    let resourceToolsAdded = false\n 2236  \n 2237    const allConfigEntries = Object.entries(\n 2238      mcpConfigs ?? (await getAllMcpConfigs()).servers,\n 2239    )\n 2240  \n 2241    // Partition into disabled and active entries — disabled servers should\n 2242    // never generate HTTP connections or flow through batch processing\n 2243    const configEntries: typeof allConfigEntries = []",
        "omitted": "已截取 2226-2243 行，原始范围到 2408 行。"
      },
      {
        "kind": "file",
        "display": "src/services/mcp/client.ts:3029-3115",
        "path": "src/services/mcp/client.ts",
        "relativePath": "src/services/mcp/client.ts",
        "start": 3029,
        "end": 3115,
        "snippet": " 3029  async function callMCPTool({\n 3030    client: { client, name, config },\n 3031    tool,\n 3032    args,\n 3033    meta,\n 3034    signal,\n 3035    onProgress,\n 3036  }: {\n 3037    client: ConnectedMCPServer\n 3038    tool: string\n 3039    args: Record<string, unknown>\n 3040    meta?: Record<string, unknown>\n 3041    signal: AbortSignal\n 3042    onProgress?: (data: MCPProgress) => void\n 3043  }): Promise<{\n 3044    content: MCPToolResult\n 3045    _meta?: Record<string, unknown>\n 3046    structuredContent?: Record<string, unknown>",
        "omitted": "已截取 3029-3046 行，原始范围到 3115 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-013",
    "conclusion": "session state 管理 session id、parent、project dir/root；transcript 存储支持路径解析、50MB raw cap、append buffering、metadata、sidechain、UUID dedup、remote persistence",
    "type": "source fact",
    "location": "`src/bootstrap/state.ts:431-531`, `src/utils/sessionStorage.ts:198-230`, `src/utils/sessionStorage.ts:1128-1338`, `src/utils/sessionStorage.ts:1408-1475`",
    "confidence": "高",
    "verified": "",
    "note": "session 和 transcript",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Session And Context",
        "sub": "transcript / project root / CLAUDE.md / git",
        "role": "state",
        "status": "official-supported",
        "detail": "sessionStorage、bootstrap state 和 context memoization 共同构成长期状态与上下文快照。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "queryLoop -> Session And Context",
        "sub": "读写上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：读写上下文。",
        "relation": "queryLoop 到 Session And Context"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "QueryEngine -> Session And Context",
        "sub": "持久化会话",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：持久化会话。",
        "relation": "QueryEngine 到 Session And Context"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Transcript / Result",
        "sub": "JSONL / usage / stop reason",
        "role": "state",
        "status": "source-verified",
        "detail": "记录 transcript、metadata、usage、cost、duration、stop reason 和 permission denials。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "queryLoop -> Transcript / Result",
        "sub": "结束/记录",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：结束/记录。",
        "relation": "queryLoop 到 Transcript / Result"
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "QueryEngine.submitMessage -> Transcript / Result",
        "sub": "会话状态",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：会话状态。",
        "relation": "QueryEngine.submitMessage 到 Transcript / Result"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "状态与上下文层",
        "sub": "session transcript / bootstrap state / context memoization",
        "role": "state",
        "status": "source-verified",
        "detail": "session transcript / bootstrap state / context memoization",
        "relation": "JSONL / project root / CLAUDE.md / git"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Session And Context」、架构总览 / 连线「queryLoop -> Session And Context」、架构总览 / 连线「QueryEngine -> Session And Context」、Turn 主链路 / 节点「Transcript / Result」。证据结论是：session state 管理 session id、parent、project dir/root；transcript 存储支持路径解析、50MB raw cap、append buffering、metadata、sidechain、UUID dedup、remote persistence。图中的具体解释是：sessionStorage、bootstrap state 和 context memoization 共同构成长期状态与上下文快照。；关系语义：读写上下文。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/bootstrap/state.ts:431-531",
        "path": "src/bootstrap/state.ts",
        "relativePath": "src/bootstrap/state.ts",
        "start": 431,
        "end": 531,
        "snippet": "  431  export function getSessionId(): SessionId {\n  432    return STATE.sessionId\n  433  }\n  434  \n  435  export function regenerateSessionId(\n  436    options: { setCurrentAsParent?: boolean } = {},\n  437  ): SessionId {\n  438    if (options.setCurrentAsParent) {\n  439      STATE.parentSessionId = STATE.sessionId\n  440    }\n  441    // Drop the outgoing session's plan-slug entry so the Map doesn't\n  442    // accumulate stale keys. Callers that need to carry the slug across\n  443    // (REPL.tsx clearContext) read it before calling clearConversation.\n  444    STATE.planSlugCache.delete(STATE.sessionId)\n  445    // Regenerated sessions live in the current project: reset projectDir to\n  446    // null so getTranscriptPath() derives from originalCwd.\n  447    STATE.sessionId = randomUUID() as SessionId\n  448    STATE.sessionProjectDir = null",
        "omitted": "已截取 431-448 行，原始范围到 531 行。"
      },
      {
        "kind": "file",
        "display": "src/utils/sessionStorage.ts:198-230",
        "path": "src/utils/sessionStorage.ts",
        "relativePath": "src/utils/sessionStorage.ts",
        "start": 198,
        "end": 230,
        "snippet": "  198  export function getProjectsDir(): string {\n  199    return join(getClaudeConfigHomeDir(), 'projects')\n  200  }\n  201  \n  202  export function getTranscriptPath(): string {\n  203    const projectDir = getSessionProjectDir() ?? getProjectDir(getOriginalCwd())\n  204    return join(projectDir, `${getSessionId()}.jsonl`)\n  205  }\n  206  \n  207  export function getTranscriptPathForSession(sessionId: string): string {\n  208    // When asking for the CURRENT session's transcript, honor sessionProjectDir\n  209    // the same way getTranscriptPath() does. Without this, hooks get a\n  210    // transcript_path computed from originalCwd while the actual file was\n  211    // written to sessionProjectDir (set by switchActiveSession on resume/branch)\n  212    // — different directories, so the hook sees MISSING (gh-30217). CC-34\n  213    // made sessionId + sessionProjectDir atomic precisely to prevent this\n  214    // kind of drift; this function just wasn't updated to read both.\n  215    //",
        "omitted": "已截取 198-215 行，原始范围到 230 行。"
      },
      {
        "kind": "file",
        "display": "src/utils/sessionStorage.ts:1128-1338",
        "path": "src/utils/sessionStorage.ts",
        "relativePath": "src/utils/sessionStorage.ts",
        "start": 1128,
        "end": 1338,
        "snippet": " 1128    async appendEntry(entry: Entry, sessionId: UUID = getSessionId() as UUID) {\n 1129      if (this.shouldSkipPersistence()) {\n 1130        return\n 1131      }\n 1132  \n 1133      const currentSessionId = getSessionId() as UUID\n 1134      const isCurrentSession = sessionId === currentSessionId\n 1135  \n 1136      let sessionFile: string\n 1137      if (isCurrentSession) {\n 1138        // Buffer until materializeSessionFile runs (first user/assistant message).\n 1139        if (this.sessionFile === null) {\n 1140          this.pendingEntries.push(entry)\n 1141          return\n 1142        }\n 1143        sessionFile = this.sessionFile\n 1144      } else {\n 1145        const existing = await this.getExistingSessionFile(sessionId)",
        "omitted": "已截取 1128-1145 行，原始范围到 1338 行。"
      },
      {
        "kind": "file",
        "display": "src/utils/sessionStorage.ts:1408-1475",
        "path": "src/utils/sessionStorage.ts",
        "relativePath": "src/utils/sessionStorage.ts",
        "start": 1408,
        "end": 1475,
        "snippet": " 1408  export async function recordTranscript(\n 1409    messages: Message[],\n 1410    teamInfo?: TeamInfo,\n 1411    startingParentUuidHint?: UUID,\n 1412    allMessages?: readonly Message[],\n 1413  ): Promise<UUID | null> {\n 1414    const cleanedMessages = cleanMessagesForLogging(messages, allMessages)\n 1415    const sessionId = getSessionId() as UUID\n 1416    const messageSet = await getSessionMessages(sessionId)\n 1417    const newMessages: typeof cleanedMessages = []\n 1418    let startingParentUuid: UUID | undefined = startingParentUuidHint\n 1419    let seenNewMessage = false\n 1420    for (const m of cleanedMessages) {\n 1421      if (messageSet.has(m.uuid as UUID)) {\n 1422        // Only track skipped messages that form a prefix. After compaction,\n 1423        // messagesToKeep appear AFTER new CB/summary, so this skips them.\n 1424        if (!seenNewMessage && isChainParticipant(m)) {\n 1425          startingParentUuid = m.uuid as UUID",
        "omitted": "已截取 1408-1425 行，原始范围到 1475 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-014",
    "conclusion": "context 层 memoized 生成 git/user/system context；API client 支持 Direct API、Bedrock、Foundry、Vertex 等环境路径和默认 headers；query deps 注入模型调用和 compact 依赖",
    "type": "source fact",
    "location": "`src/context.ts:35-189`, `src/services/api/client.ts:1-180`, `src/query/deps.ts:1-40`",
    "confidence": "高",
    "verified": "",
    "note": "上下文和模型依赖",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Session And Context",
        "sub": "transcript / project root / CLAUDE.md / git",
        "role": "state",
        "status": "official-supported",
        "detail": "sessionStorage、bootstrap state 和 context memoization 共同构成长期状态与上下文快照。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "queryLoop -> Session And Context",
        "sub": "读写上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：读写上下文。",
        "relation": "queryLoop 到 Session And Context"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "QueryEngine -> Session And Context",
        "sub": "持久化会话",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：持久化会话。",
        "relation": "QueryEngine 到 Session And Context"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Context Assembly",
        "sub": "tools / prompts / system context",
        "role": "state",
        "status": "source-verified",
        "detail": "REPL 或 headless 路径在 query 前组装 tool permission context、tool pool、system/user context。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "Model Streaming",
        "sub": "QueryDeps",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "模型调用经 QueryDeps 注入，支持 provider 差异和 fallback。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "User Input / SDK Message -> Context Assembly",
        "sub": "输入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：输入。",
        "relation": "User Input / SDK Message 到 Context Assembly"
      },
      {
        "kind": "连线",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "queryLoop -> Model Streaming",
        "sub": "模型流",
        "role": "model-stream",
        "status": "",
        "detail": "关系语义：模型流。",
        "relation": "queryLoop 到 Model Streaming"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "Turn Runtime 层",
        "sub": "queryLoop / model streaming / compact / fallback",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "queryLoop / model streaming / compact / fallback",
        "relation": "model / compact / fallback / events"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "状态与上下文层",
        "sub": "session transcript / bootstrap state / context memoization",
        "role": "state",
        "status": "source-verified",
        "detail": "session transcript / bootstrap state / context memoization",
        "relation": "JSONL / project root / CLAUDE.md / git"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Session And Context」、架构总览 / 连线「queryLoop -> Session And Context」、架构总览 / 连线「QueryEngine -> Session And Context」、Turn 主链路 / 节点「Context Assembly」。证据结论是：context 层 memoized 生成 git/user/system context；API client 支持 Direct API、Bedrock、Foundry、Vertex 等环境路径和默认 headers；query deps 注入模型调用和 compact 依赖。图中的具体解释是：sessionStorage、bootstrap state 和 context memoization 共同构成长期状态与上下文快照。；关系语义：读写上下文。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/context.ts:35-189",
        "path": "src/context.ts",
        "relativePath": "src/context.ts",
        "start": 35,
        "end": 189,
        "snippet": "   35  \n   36  export const getGitStatus = memoize(async (): Promise<string | null> => {\n   37    if (process.env.NODE_ENV === 'test') {\n   38      // Avoid cycles in tests\n   39      return null\n   40    }\n   41  \n   42    const startTime = Date.now()\n   43    logForDiagnosticsNoPII('info', 'git_status_started')\n   44  \n   45    const isGitStart = Date.now()\n   46    const isGit = await getIsGit()\n   47    logForDiagnosticsNoPII('info', 'git_is_git_check_completed', {\n   48      duration_ms: Date.now() - isGitStart,\n   49      is_git: isGit,\n   50    })\n   51  \n   52    if (!isGit) {",
        "omitted": "已截取 35-52 行，原始范围到 189 行。"
      },
      {
        "kind": "file",
        "display": "src/services/api/client.ts:1-180",
        "path": "src/services/api/client.ts",
        "relativePath": "src/services/api/client.ts",
        "start": 1,
        "end": 180,
        "snippet": "    1  import Anthropic, { type ClientOptions } from '@anthropic-ai/sdk'\n    2  import { randomUUID } from 'crypto'\n    3  import type { GoogleAuth } from 'google-auth-library'\n    4  import {\n    5    checkAndRefreshOAuthTokenIfNeeded,\n    6    getAnthropicApiKey,\n    7    getApiKeyFromApiKeyHelper,\n    8    getClaudeAIOAuthTokens,\n    9    isClaudeAISubscriber,\n   10    refreshAndGetAwsCredentials,\n   11    refreshGcpCredentialsIfNeeded,\n   12  } from 'src/utils/auth.js'\n   13  import { getUserAgent } from 'src/utils/http.js'\n   14  import { getSmallFastModel } from 'src/utils/model/model.js'\n   15  import {\n   16    getAPIProvider,\n   17    isFirstPartyAnthropicBaseUrl,\n   18  } from 'src/utils/model/providers.js'",
        "omitted": "已截取 1-18 行，原始范围到 180 行。"
      },
      {
        "kind": "file",
        "display": "src/query/deps.ts:1-40",
        "path": "src/query/deps.ts",
        "relativePath": "src/query/deps.ts",
        "start": 1,
        "end": 40,
        "snippet": "    1  import { randomUUID } from 'crypto'\n    2  import { queryModelWithStreaming } from '../services/api/claude.js'\n    3  import { autoCompactIfNeeded } from '../services/compact/autoCompact.js'\n    4  import { microcompactMessages } from '../services/compact/microCompact.js'\n    5  \n    6  // -- deps\n    7  \n    8  // I/O dependencies for query(). Passing a `deps` override into QueryParams\n    9  // lets tests inject fakes directly instead of spyOn-per-module — the most\n   10  // common mocks (callModel, autocompact) are each spied in 6-8 test files\n   11  // today with module-import-and-spy boilerplate.\n   12  //\n   13  // Using `typeof fn` keeps signatures in sync with the real implementations\n   14  // automatically. This file imports the real functions for both typing and\n   15  // the production factory — tests that import this file for typing are\n   16  // already importing query.ts (which imports everything), so there's no\n   17  // new module-graph cost.\n   18  //",
        "omitted": "已截取 1-18 行，原始范围到 40 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "C-015",
    "conclusion": "bridge loop 管理 active sessions、heartbeat、status、cleanup；session spawner 以 headless stream-json 启动 child CLI 并解析 NDJSON；direct-connect 和 remote session 通过 WebSocket/HTTP 传递 SDK messages 与 permission control request",
    "type": "source fact",
    "location": "`src/bridge/bridgeMain.ts:141-220`, `src/bridge/bridgeMain.ts:334-620`, `src/bridge/sessionRunner.ts:248-560`, `src/server/createDirectConnectSession.ts:19-90`, `src/server/directConnectManager.ts:40-135`, `src/remote/RemoteSessionManager.ts:88-335`",
    "confidence": "高",
    "verified": "",
    "note": "远程会话通道",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Headless / Remote IO",
        "sub": "stream-json / bridge / direct-connect",
        "role": "external-dependency",
        "status": "inference",
        "detail": "headless、bridge、remote 和 direct-connect 使用结构化消息和 permission control request。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Setup And Trust -> Headless / Remote IO",
        "sub": "结构化 IO",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：结构化 IO。",
        "relation": "Setup And Trust 到 Headless / Remote IO"
      },
      {
        "kind": "节点",
        "viewId": "turn",
        "viewLabel": "Turn 主链路",
        "viewDescription": "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
        "title": "User Input / SDK Message",
        "sub": "interactive or stream-json",
        "role": "adapter",
        "status": "source-verified",
        "detail": "输入可能来自 REPL，也可能来自 headless/bridge/remote/direct-connect。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Decision Sources",
        "sub": "UI / bridge / remote / classifier",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "交互 handler、bridge callback、remote callback 和 speculative classifier 都可能参与 can-use-tool 决策。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Permission Decision -> Decision Sources",
        "sub": "需要确认",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：需要确认。",
        "relation": "Permission Decision 到 Decision Sources"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "入口路由层",
        "sub": "main.tsx / Commander / direct-connect / bridge / SDK",
        "role": "adapter",
        "status": "source-verified",
        "detail": "main.tsx / Commander / direct-connect / bridge / SDK",
        "relation": "argv / URL / SSH / SDK"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "交互与结构化 IO 层",
        "sub": "React/Ink REPL / stream-json / remote messages",
        "role": "adapter",
        "status": "source-verified",
        "detail": "React/Ink REPL / stream-json / remote messages",
        "relation": "REPL / headless / bridge / remote"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Headless / Remote IO」、架构总览 / 连线「Setup And Trust -> Headless / Remote IO」、Turn 主链路 / 节点「User Input / SDK Message」、权限与扩展 / 节点「Decision Sources」。证据结论是：bridge loop 管理 active sessions、heartbeat、status、cleanup；session spawner 以 headless stream-json 启动 child CLI 并解析 NDJSON；direct-connect 和 remote session 通过 WebSocket/HTTP 传递 SDK messages 与 permission control request。图中的具体解释是：headless、bridge、remote 和 direct-connect 使用结构化消息和 permission control request。；关系语义：结构化 IO。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "src/bridge/bridgeMain.ts:141-220",
        "path": "src/bridge/bridgeMain.ts",
        "relativePath": "src/bridge/bridgeMain.ts",
        "start": 141,
        "end": 220,
        "snippet": "  141  export async function runBridgeLoop(\n  142    config: BridgeConfig,\n  143    environmentId: string,\n  144    environmentSecret: string,\n  145    api: BridgeApiClient,\n  146    spawner: SessionSpawner,\n  147    logger: BridgeLogger,\n  148    signal: AbortSignal,\n  149    backoffConfig: BackoffConfig = DEFAULT_BACKOFF,\n  150    initialSessionId?: string,\n  151    getAccessToken?: () => string | undefined | Promise<string | undefined>,\n  152  ): Promise<void> {\n  153    // Local abort controller so that onSessionDone can stop the poll loop.\n  154    // Linked to the incoming signal so external aborts also work.\n  155    const controller = new AbortController()\n  156    if (signal.aborted) {\n  157      controller.abort()\n  158    } else {",
        "omitted": "已截取 141-158 行，原始范围到 220 行。"
      },
      {
        "kind": "file",
        "display": "src/bridge/bridgeMain.ts:334-620",
        "path": "src/bridge/bridgeMain.ts",
        "relativePath": "src/bridge/bridgeMain.ts",
        "start": 334,
        "end": 620,
        "snippet": "  334      `[bridge:work] Starting poll loop spawnMode=${config.spawnMode} maxSessions=${config.maxSessions} environmentId=${environmentId}`,\n  335    )\n  336    logForDiagnosticsNoPII('info', 'bridge_loop_started', {\n  337      max_sessions: config.maxSessions,\n  338      spawn_mode: config.spawnMode,\n  339    })\n  340  \n  341    // For ant users, show where session debug logs will land so they can tail them.\n  342    // sessionRunner.ts uses the same base path. File appears once a session spawns.\n  343    if (process.env.USER_TYPE === 'ant') {\n  344      let debugGlob: string\n  345      if (config.debugFile) {\n  346        const ext = config.debugFile.lastIndexOf('.')\n  347        debugGlob =\n  348          ext > 0\n  349            ? `${config.debugFile.slice(0, ext)}-*${config.debugFile.slice(ext)}`\n  350            : `${config.debugFile}-*`\n  351      } else {",
        "omitted": "已截取 334-351 行，原始范围到 620 行。"
      },
      {
        "kind": "file",
        "display": "src/bridge/sessionRunner.ts:248-560",
        "path": "src/bridge/sessionRunner.ts",
        "relativePath": "src/bridge/sessionRunner.ts",
        "start": 248,
        "end": 560,
        "snippet": "  248  export function createSessionSpawner(deps: SessionSpawnerDeps): SessionSpawner {\n  249    return {\n  250      spawn(opts: SessionSpawnOpts, dir: string): SessionHandle {\n  251        // Debug file resolution:\n  252        // 1. If deps.debugFile is provided, use it with session ID suffix for uniqueness\n  253        // 2. If verbose or ant build, auto-generate a temp file path\n  254        // 3. Otherwise, no debug file\n  255        const safeId = safeFilenameId(opts.sessionId)\n  256        let debugFile: string | undefined\n  257        if (deps.debugFile) {\n  258          const ext = deps.debugFile.lastIndexOf('.')\n  259          if (ext > 0) {\n  260            debugFile = `${deps.debugFile.slice(0, ext)}-${safeId}${deps.debugFile.slice(ext)}`\n  261          } else {\n  262            debugFile = `${deps.debugFile}-${safeId}`\n  263          }\n  264        } else if (deps.verbose || process.env.USER_TYPE === 'ant') {\n  265          debugFile = join(tmpdir(), 'claude', `bridge-session-${safeId}.log`)",
        "omitted": "已截取 248-265 行，原始范围到 560 行。"
      },
      {
        "kind": "file",
        "display": "src/server/createDirectConnectSession.ts:19-90",
        "path": "src/server/createDirectConnectSession.ts",
        "relativePath": "src/server/createDirectConnectSession.ts",
        "start": 19,
        "end": 90,
        "snippet": "   19   * Create a session on a direct-connect server.\n   20   *\n   21   * Posts to `${serverUrl}/sessions`, validates the response, and returns\n   22   * a DirectConnectConfig ready for use by the REPL or headless runner.\n   23   *\n   24   * Throws DirectConnectError on network, HTTP, or response-parsing failures.\n   25   */\n   26  export async function createDirectConnectSession({\n   27    serverUrl,\n   28    authToken,\n   29    cwd,\n   30    dangerouslySkipPermissions,\n   31  }: {\n   32    serverUrl: string\n   33    authToken?: string\n   34    cwd: string\n   35    dangerouslySkipPermissions?: boolean\n   36  }): Promise<{",
        "omitted": "已截取 19-36 行，原始范围到 90 行。"
      },
      {
        "kind": "file",
        "display": "src/server/directConnectManager.ts:40-135",
        "path": "src/server/directConnectManager.ts",
        "relativePath": "src/server/directConnectManager.ts",
        "start": 40,
        "end": 135,
        "snippet": "   40  export class DirectConnectSessionManager {\n   41    private ws: WebSocket | null = null\n   42    private config: DirectConnectConfig\n   43    private callbacks: DirectConnectCallbacks\n   44  \n   45    constructor(config: DirectConnectConfig, callbacks: DirectConnectCallbacks) {\n   46      this.config = config\n   47      this.callbacks = callbacks\n   48    }\n   49  \n   50    connect(): void {\n   51      const headers: Record<string, string> = {}\n   52      if (this.config.authToken) {\n   53        headers['authorization'] = `Bearer ${this.config.authToken}`\n   54      }\n   55      // Bun's WebSocket supports headers option but the DOM typings don't\n   56      this.ws = new WebSocket(this.config.wsUrl, {\n   57        headers,",
        "omitted": "已截取 40-57 行，原始范围到 135 行。"
      },
      {
        "kind": "file",
        "display": "src/remote/RemoteSessionManager.ts:88-335",
        "path": "src/remote/RemoteSessionManager.ts",
        "relativePath": "src/remote/RemoteSessionManager.ts",
        "start": 88,
        "end": 335,
        "snippet": "   88   * Manages a remote CCR session.\n   89   *\n   90   * Coordinates:\n   91   * - WebSocket subscription for receiving messages from CCR\n   92   * - HTTP POST for sending user messages to CCR\n   93   * - Permission request/response flow\n   94   */\n   95  export class RemoteSessionManager {\n   96    private websocket: SessionsWebSocket | null = null\n   97    private pendingPermissionRequests: Map<string, SDKControlPermissionRequest> =\n   98      new Map()\n   99  \n  100    constructor(\n  101      private readonly config: RemoteSessionConfig,\n  102      private readonly callbacks: RemoteSessionCallbacks,\n  103    ) {}\n  104  \n  105    /**",
        "omitted": "已截取 88-105 行，原始范围到 335 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-001",
    "conclusion": "多入口最终收敛到 QueryEngine/queryLoop 及结构化消息语义，说明架构中心是 conversation runtime",
    "type": "inference",
    "location": "C-003, C-004, C-006, C-007, C-008",
    "confidence": "",
    "verified": "",
    "note": "用真实 CLI/SDK/remote 各跑一个最小 turn",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "多入口模式路由",
        "sub": "argv / URL / SSH / SDK / Bridge",
        "role": "adapter",
        "status": "inference",
        "detail": "src/main.tsx 在 Commander 前处理 direct-connect、deep link、assistant、SSH、headless/interactive 和 client type。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Headless / Remote IO",
        "sub": "stream-json / bridge / direct-connect",
        "role": "external-dependency",
        "status": "inference",
        "detail": "headless、bridge、remote 和 direct-connect 使用结构化消息和 permission control request。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Setup And Trust -> Headless / Remote IO",
        "sub": "结构化 IO",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：结构化 IO。",
        "relation": "Setup And Trust 到 Headless / Remote IO"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「多入口模式路由」、架构总览 / 节点「Headless / Remote IO」、架构总览 / 连线「Setup And Trust -> Headless / Remote IO」。证据结论是：多入口最终收敛到 QueryEngine/queryLoop 及结构化消息语义，说明架构中心是 conversation runtime。图中的具体解释是：src/main.tsx 在 Commander 前处理 direct-connect、deep link、assistant、SSH、headless/interactive 和 client type。；headless、bridge、remote 和 direct-connect 使用结构化消息和 permission control request。",
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
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-002",
    "conclusion": "Tool contract 是内置工具、MCP 工具和权限系统的共同协议层",
    "type": "inference",
    "location": "C-009, C-010, C-012",
    "confidence": "",
    "verified": "",
    "note": "抽样一个 built-in tool 与一个 MCP tool 对比实际 prompt/schema",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-009",
        "path": "C-009",
        "relativePath": "C-009",
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
    "id": "INF-003",
    "conclusion": "Skills、Plugins、MCP、remote control request 被分成不同扩展 contract，最终映射到 command/tool/message/permission",
    "type": "inference",
    "location": "C-011, C-012, C-015",
    "confidence": "",
    "verified": "",
    "note": "动态加载一个 plugin skill，观察 command/tool pool 变化",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Skills / Plugins / MCP / Hooks",
        "sub": "command / tool / resource / event",
        "role": "extension-point",
        "status": "inference",
        "detail": "扩展面分层：Skill、Plugin、MCP、Hook、remote control request 最终映射到 command/tool/permission/session 语义。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Permission Pipeline -> Skills / Plugins / MCP / Hooks",
        "sub": "hooks/MCP/remote",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：hooks/MCP/remote。",
        "relation": "Permission Pipeline 到 Skills / Plugins / MCP / Hooks"
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Skills / Plugin Commands",
        "sub": "markdown / manifest / hooks",
        "role": "extension-point",
        "status": "inference",
        "detail": "Skill、Plugin command、plugin hooks、marketplace 都有自己的加载和校验策略。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
        "title": "扩展接入层",
        "sub": "Skills / Plugins / MCP / Commands",
        "role": "extension-point",
        "status": "inference",
        "detail": "Skills / Plugins / MCP / Commands",
        "relation": "skills / plugins / MCP / commands"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Skills / Plugins / MCP / Hooks」、架构总览 / 连线「Permission Pipeline -> Skills / Plugins / MCP / Hooks」、权限与扩展 / 节点「Skills / Plugin Commands」、分层视图 / 分层「扩展接入层」。证据结论是：Skills、Plugins、MCP、remote control request 被分成不同扩展 contract，最终映射到 command/tool/message/permission。图中的具体解释是：扩展面分层：Skill、Plugin、MCP、Hook、remote control request 最终映射到 command/tool/permission/session 语义。；关系语义：hooks/MCP/remote。",
    "sourceRefs": [
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
      },
      {
        "kind": "file",
        "display": "C-015",
        "path": "C-015",
        "relativePath": "C-015",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-004",
    "conclusion": "transcript 与 remote persistence 是跨本地/远程会话一致性的基础",
    "type": "inference",
    "location": "C-013, C-015",
    "confidence": "",
    "verified": "",
    "note": "中断 headless session 后检查 transcript 和 remote event 状态",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "C-013",
        "path": "C-013",
        "relativePath": "C-013",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "C-015",
        "path": "C-015",
        "relativePath": "C-015",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-CC-001",
    "conclusion": "官方文档将 Claude Code 定位为可在 terminal、IDE、desktop、browser 等界面使用的 agentic coding tool",
    "type": "官方事实",
    "location": "https://code.claude.com/docs/en/overview, https://code.claude.com/docs/en/how-claude-code-works",
    "confidence": "高",
    "verified": "部分",
    "note": "本地 snapshot 只验证 CLI/REPL/headless/remote/bridge/direct-connect client pieces",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/overview",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/how-claude-code-works",
        "url": "https://code.claude.com/docs/en/how-claude-code-works"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-CC-002",
    "conclusion": "官方文档描述 agentic loop：收集上下文、采取行动、验证结果，工具结果反馈下一步决策",
    "type": "官方事实",
    "location": "https://code.claude.com/docs/en/how-claude-code-works",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `C-006`-`C-010`, `C-013`",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "queryLoop",
        "sub": "turn orchestration",
        "role": "runtime-object",
        "status": "official-supported",
        "detail": "turn 内主循环，处理 system context、auto-compact、model streaming、tool execution、fallback、刷新 tools。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "QueryEngine -> queryLoop",
        "sub": "turn",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：turn。",
        "relation": "QueryEngine 到 queryLoop"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「queryLoop」、架构总览 / 连线「QueryEngine -> queryLoop」。证据结论是：官方文档描述 agentic loop：收集上下文、采取行动、验证结果，工具结果反馈下一步决策。图中的具体解释是：turn 内主循环，处理 system context、auto-compact、model streaming、tool execution、fallback、刷新 tools。；关系语义：turn。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/how-claude-code-works",
        "url": "https://code.claude.com/docs/en/how-claude-code-works"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-CC-003",
    "conclusion": "官方权限文档说明 permission rules、modes、deny/ask/allow 优先级和 hooks 共同影响工具授权",
    "type": "官方事实",
    "location": "https://code.claude.com/docs/en/permissions, https://code.claude.com/docs/en/hooks",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `C-009`, `C-010`",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Permission Pipeline",
        "sub": "hooks / UI / remote / classifier",
        "role": "extension-point",
        "status": "official-supported",
        "detail": "tool execution 会经过 validation、hooks、permission decision、interactive handler、bridge/remote callbacks 和 classifier。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Tool Contract -> Permission Pipeline",
        "sub": "执行前决策",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行前决策。",
        "relation": "Tool Contract 到 Permission Pipeline"
      },
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Permission Decision",
        "sub": "rules / modes / resolve once",
        "role": "extension-point",
        "status": "official-supported",
        "detail": "permission context 支持 allow/deny/ask、hook allow、用户 allow、deny abort、decision persistence。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Validation And Hooks -> Permission Decision",
        "sub": "策略输入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：策略输入。",
        "relation": "Validation And Hooks 到 Permission Decision"
      },
      {
        "kind": "连线",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "Decision Sources -> Permission Decision",
        "sub": "返回决策",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：返回决策。",
        "relation": "Decision Sources 到 Permission Decision"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Permission Pipeline」、架构总览 / 连线「Tool Contract -> Permission Pipeline」、权限与扩展 / 节点「Permission Decision」、权限与扩展 / 连线「Validation And Hooks -> Permission Decision」。证据结论是：官方权限文档说明 permission rules、modes、deny/ask/allow 优先级和 hooks 共同影响工具授权。图中的具体解释是：tool execution 会经过 validation、hooks、permission decision、interactive handler、bridge/remote callbacks 和 classifier。；关系语义：执行前决策。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/permissions",
        "url": "https://code.claude.com/docs/en/permissions"
      },
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/hooks",
        "url": "https://code.claude.com/docs/en/hooks"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-CC-004",
    "conclusion": "官方文档将 MCP、Skills、Hooks 作为不同扩展层：外部工具连接、按需知识/流程、生命周期自动化",
    "type": "官方事实",
    "location": "https://code.claude.com/docs/en/mcp, https://code.claude.com/docs/en/skills, https://code.claude.com/docs/en/hooks",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `C-010`, `C-011`, `C-012`",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "permission",
        "viewLabel": "权限与扩展",
        "viewDescription": "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
        "title": "MCP Tools / Resources",
        "sub": "remote and local servers",
        "role": "extension-point",
        "status": "official-supported",
        "detail": "MCP discovery 连接 server，获取 tools、commands、skills、resources，并映射为 Claude Code Tool。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 权限与扩展 / 节点「MCP Tools / Resources」。证据结论是：官方文档将 MCP、Skills、Hooks 作为不同扩展层：外部工具连接、按需知识/流程、生命周期自动化。图中的具体解释是：MCP discovery 连接 server，获取 tools、commands、skills、resources，并映射为 Claude Code Tool。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/mcp",
        "url": "https://code.claude.com/docs/en/mcp"
      },
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/skills",
        "url": "https://code.claude.com/docs/en/skills"
      },
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/hooks",
        "url": "https://code.claude.com/docs/en/hooks"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-CC-005",
    "conclusion": "官方文档说明 sessions 写入本地 JSONL 并用于 resume/fork/rewind 等语义",
    "type": "官方事实",
    "location": "https://code.claude.com/docs/en/how-claude-code-works",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `C-013`, `INF-004`",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "Session And Context",
        "sub": "transcript / project root / CLAUDE.md / git",
        "role": "state",
        "status": "official-supported",
        "detail": "sessionStorage、bootstrap state 和 context memoization 共同构成长期状态与上下文快照。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "queryLoop -> Session And Context",
        "sub": "读写上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：读写上下文。",
        "relation": "queryLoop 到 Session And Context"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
        "title": "QueryEngine -> Session And Context",
        "sub": "持久化会话",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：持久化会话。",
        "relation": "QueryEngine 到 Session And Context"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Session And Context」、架构总览 / 连线「queryLoop -> Session And Context」、架构总览 / 连线「QueryEngine -> Session And Context」。证据结论是：官方文档说明 sessions 写入本地 JSONL 并用于 resume/fork/rewind 等语义。图中的具体解释是：sessionStorage、bootstrap state 和 context memoization 共同构成长期状态与上下文快照。；关系语义：读写上下文。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/how-claude-code-works",
        "url": "https://code.claude.com/docs/en/how-claude-code-works"
      }
    ],
    "sourceLimitNote": ""
  }
];
