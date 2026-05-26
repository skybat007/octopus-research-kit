window.EVIDENCE_META = {
  "title": "Hermes Agent 证据解释",
  "description": "从架构图回到证据解释：展示架构语境、证据结论、源码/文档片段和原始索引位置。",
  "source": "../evidence-index.md",
  "projectRoot": "/Users/cheng/IdeaProjects/hermes-agent"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "H-001",
    "conclusion": "Hermes Agent 定位为 self-improving AI agent，能力包括 TUI、Messaging Gateway、learning loop、cron、delegation、多 backend、research batch 等",
    "type": "doc fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/README.md:15`, `README.md:19-27`, `README.md:66-78`, `README.md:103-119`, `README.md:123-143`",
    "confidence": "高",
    "verified": "",
    "note": "README 产品定位和入口",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/README.md:15",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/README.md",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/README.md",
        "start": 15,
        "end": 15,
        "snippet": "   15  **The self-improving AI agent built by [Nous Research](https://nousresearch.com).** It's the only agent with a built-in learning loop — it creates skills from experience, improves them during use, nudges itself to persist knowledge, searches its own past conversations, and builds a deepening model of who you are across sessions. Run it on a $5 VPS, a GPU cluster, or serverless infrastructure that costs nearly nothing when idle. It's not tied to your laptop — talk to it from Telegram while it works on a cloud VM.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:19-27",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 19,
        "end": 27,
        "snippet": "   19  <table>\n   20  <tr><td><b>A real terminal interface</b></td><td>Full TUI with multiline editing, slash-command autocomplete, conversation history, interrupt-and-redirect, and streaming tool output.</td></tr>\n   21  <tr><td><b>Lives where you do</b></td><td>Telegram, Discord, Slack, WhatsApp, Signal, and CLI — all from a single gateway process. Voice memo transcription, cross-platform conversation continuity.</td></tr>\n   22  <tr><td><b>A closed learning loop</b></td><td>Agent-curated memory with periodic nudges. Autonomous skill creation after complex tasks. Skills self-improve during use. FTS5 session search with LLM summarization for cross-session recall. <a href=\"https://github.com/plastic-labs/honcho\">Honcho</a> dialectic user modeling. Compatible with the <a href=\"https://agentskills.io\">agentskills.io</a> open standard.</td></tr>\n   23  <tr><td><b>Scheduled automations</b></td><td>Built-in cron scheduler with delivery to any platform. Daily reports, nightly backups, weekly audits — all in natural language, running unattended.</td></tr>\n   24  <tr><td><b>Delegates and parallelizes</b></td><td>Spawn isolated subagents for parallel workstreams. Write Python scripts that call tools via RPC, collapsing multi-step pipelines into zero-context-cost turns.</td></tr>\n   25  <tr><td><b>Runs anywhere, not just your laptop</b></td><td>Seven terminal backends — local, Docker, SSH, Singularity, Modal, Daytona, and Vercel Sandbox. Daytona and Modal offer serverless persistence — your agent's environment hibernates when idle and wakes on demand, costing nearly nothing between sessions. Run it on a $5 VPS or a GPU cluster.</td></tr>\n   26  <tr><td><b>Research-ready</b></td><td>Batch trajectory generation, trajectory compression for training the next generation of tool-calling models.</td></tr>\n   27  </table>",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:66-78",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 66,
        "end": 78,
        "snippet": "   66  ## Getting Started\n   67  \n   68  ```bash\n   69  hermes              # Interactive CLI — start a conversation\n   70  hermes model        # Choose your LLM provider and model\n   71  hermes tools        # Configure which tools are enabled\n   72  hermes config set   # Set individual config values\n   73  hermes gateway      # Start the messaging gateway (Telegram, Discord, etc.)\n   74  hermes setup        # Run the full setup wizard (configures everything at once)\n   75  hermes claw migrate # Migrate from OpenClaw (if coming from OpenClaw)\n   76  hermes update       # Update to the latest version\n   77  hermes doctor       # Diagnose any issues\n   78  ```",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:103-119",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 103,
        "end": 119,
        "snippet": "  103  ## CLI vs Messaging Quick Reference\n  104  \n  105  Hermes has two entry points: start the terminal UI with `hermes`, or run the gateway and talk to it from Telegram, Discord, Slack, WhatsApp, Signal, or Email. Once you're in a conversation, many slash commands are shared across both interfaces.\n  106  \n  107  | Action | CLI | Messaging platforms |\n  108  |---------|-----|---------------------|\n  109  | Start chatting | `hermes` | Run `hermes gateway setup` + `hermes gateway start`, then send the bot a message |\n  110  | Start fresh conversation | `/new` or `/reset` | `/new` or `/reset` |\n  111  | Change model | `/model [provider:model]` | `/model [provider:model]` |\n  112  | Set a personality | `/personality [name]` | `/personality [name]` |\n  113  | Retry or undo the last turn | `/retry`, `/undo` | `/retry`, `/undo` |\n  114  | Compress context / check usage | `/compress`, `/usage`, `/insights [--days N]` | `/compress`, `/usage`, `/insights [days]` |\n  115  | Browse skills | `/skills` or `/<skill-name>` | `/<skill-name>` |\n  116  | Interrupt current work | `Ctrl+C` or send a new message | `/stop` or send a new message |\n  117  | Platform-specific status | `/platforms` | `/status`, `/sethome` |\n  118  \n  119  For the full command lists, see the [CLI guide](https://hermes-agent.nousresearch.com/docs/user-guide/cli) and the [Messaging Gateway guide](https://hermes-agent.nousresearch.com/docs/user-guide/messaging).",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:123-143",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/README.md",
        "relativePath": "README.md",
        "start": 123,
        "end": 143,
        "snippet": "  123  ## Documentation\n  124  \n  125  All documentation lives at **[hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/)**:\n  126  \n  127  | Section | What's Covered |\n  128  |---------|---------------|\n  129  | [Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart) | Install → setup → first conversation in 2 minutes |\n  130  | [CLI Usage](https://hermes-agent.nousresearch.com/docs/user-guide/cli) | Commands, keybindings, personalities, sessions |\n  131  | [Configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration) | Config file, providers, models, all options |\n  132  | [Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging) | Telegram, Discord, Slack, WhatsApp, Signal, Home Assistant |\n  133  | [Security](https://hermes-agent.nousresearch.com/docs/user-guide/security) | Command approval, DM pairing, container isolation |\n  134  | [Tools & Toolsets](https://hermes-agent.nousresearch.com/docs/user-guide/features/tools) | 40+ tools, toolset system, terminal backends |\n  135  | [Skills System](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) | Procedural memory, Skills Hub, creating skills |\n  136  | [Memory](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory) | Persistent memory, user profiles, best practices |\n  137  | [MCP Integration](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp) | Connect any MCP server for extended capabilities |\n  138  | [Cron Scheduling](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) | Scheduled tasks with platform delivery |\n  139  | [Context Files](https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files) | Project context that shapes every conversation |\n  140  | [Architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture) | Project structure, agent loop, key classes |",
        "omitted": "已截取 123-140 行，原始范围到 143 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-002",
    "conclusion": "package 为 `hermes-agent` `0.14.0`，Python `>=3.11`，console scripts 包含 `hermes`, `hermes-agent`, `hermes-acp`，依赖采用 exact-pin/optional extras 策略",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml:5-12`, `pyproject.toml:13-33`, `pyproject.toml:69-207`, `pyproject.toml:209-212`, `pyproject.toml:226-227`",
    "confidence": "高",
    "verified": "",
    "note": "包和依赖策略",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml:5-12",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml",
        "start": 5,
        "end": 12,
        "snippet": "    5  [project]\n    6  name = \"hermes-agent\"\n    7  version = \"0.14.0\"\n    8  description = \"The self-improving AI agent — creates skills from experience, improves them during use, and runs anywhere\"\n    9  readme = \"README.md\"\n   10  requires-python = \">=3.11\"\n   11  authors = [{ name = \"Nous Research\" }]\n   12  license = { text = \"MIT\" }",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "pyproject.toml:13-33",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 13,
        "end": 33,
        "snippet": "   13  dependencies = [\n   14    # Core — every direct dep is exact-pinned to ==X.Y.Z (no ranges).\n   15    # Rationale: ranges allow PyPI to ship a fresh version of a transitive\n   16    # at any time without a code review on our side. Exact pins mean the\n   17    # only way a new package version reaches a user is via an intentional\n   18    # update on our end (bump the pin in this file, regenerate uv.lock).\n   19    # This was tightened on 2026-05-12 in response to the Mini Shai-Hulud\n   20    # worm hitting mistralai 2.4.6 on PyPI; if that release had been\n   21    # captured by `mistralai>=2.3.0,<3` rather than an exact pin, every\n   22    # install in the hours before the quarantine would have pulled it.\n   23    #\n   24    # When updating: bump the version below AND regenerate uv.lock with\n   25    # `uv lock` so the transitive resolution stays consistent. Don't\n   26    # introduce ranges back without a written justification.\n   27    #\n   28    # Scope rule: only packages used by EVERY hermes session belong here.\n   29    # Anything that's provider-specific (`anthropic`, `firecrawl-py`,\n   30    # `exa-py`, `fal-client`, `edge-tts`, `parallel-web`) belongs in an",
        "omitted": "已截取 13-30 行，原始范围到 33 行。"
      },
      {
        "kind": "file",
        "display": "pyproject.toml:69-207",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 69,
        "end": 207,
        "snippet": "   69  [project.optional-dependencies]\n   70  # Native Anthropic provider — only needed when provider=anthropic (not via\n   71  # OpenRouter or other aggregators).\n   72  anthropic = [\"anthropic==0.86.0\"]\n   73  # Web search backends — each only loaded when the user picks it as their\n   74  # search provider (configured via `hermes tools` or config.yaml).\n   75  exa = [\"exa-py==2.10.2\"]\n   76  firecrawl = [\"firecrawl-py==4.17.0\"]\n   77  parallel-web = [\"parallel-web==0.4.2\"]\n   78  # Image generation backends\n   79  fal = [\"fal-client==0.13.1\"]\n   80  # Edge TTS — default TTS provider but still optional (users can pick\n   81  # ElevenLabs / OpenAI / MiniMax instead).\n   82  edge-tts = [\"edge-tts==7.2.7\"]\n   83  modal = [\"modal==1.3.4\"]\n   84  daytona = [\"daytona==0.155.0\"]\n   85  vercel = [\"vercel==0.5.7\"]\n   86  hindsight = [\"hindsight-client==0.6.1\"]",
        "omitted": "已截取 69-86 行，原始范围到 207 行。"
      },
      {
        "kind": "file",
        "display": "pyproject.toml:209-212",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 209,
        "end": 212,
        "snippet": "  209  [project.scripts]\n  210  hermes = \"hermes_cli.main:main\"\n  211  hermes-agent = \"run_agent:main\"\n  212  hermes-acp = \"acp_adapter.entry:main\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "pyproject.toml:226-227",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/pyproject.toml",
        "relativePath": "pyproject.toml",
        "start": 226,
        "end": 227,
        "snippet": "  226  [tool.setuptools.packages.find]\n  227  include = [\"agent\", \"agent.*\", \"tools\", \"tools.*\", \"hermes_cli\", \"gateway\", \"gateway.*\", \"tui_gateway\", \"tui_gateway.*\", \"cron\", \"acp_adapter\", \"plugins\", \"plugins.*\", \"providers\", \"providers.*\"]",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-003",
    "conclusion": "CLI wrapper 进入 `hermes_cli.main.main`，main 支持 profile override、startup discovery、默认 chat command",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/hermes:1-11`, `hermes_cli/main.py:183-235`, `hermes_cli/main.py:10758-10799`, `hermes_cli/main.py:10928-10953`",
    "confidence": "高",
    "verified": "",
    "note": "CLI 入口",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多个用户界面和定时任务入口最终围绕 AIAgent 组织。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Session / Config / DB",
        "sub": "profiles / session store / cron jobs",
        "role": "state",
        "status": "source-verified",
        "detail": "profile、session key、gateway store、cron jobs 和本地配置共同构成运行状态边界。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Messaging Gateway -> Session / Config / DB",
        "sub": "会话/投递状态",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：会话/投递状态。",
        "relation": "Messaging Gateway 到 Session / Config / DB"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "AIAgent -> Session / Config / DB",
        "sub": "配置/profile",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：配置/profile。",
        "relation": "AIAgent 到 Session / Config / DB"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口适配",
        "sub": "args / message / schedule",
        "role": "adapter",
        "status": "source-verified",
        "detail": "把不同入口转换成 AIAgent 可消费的上下文。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件 -> 入口适配",
        "sub": "输入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：输入。",
        "relation": "入口事件 到 入口适配"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "接入层",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Interface Layer」、架构总览 / 节点「Session / Config / DB」、架构总览 / 连线「Messaging Gateway -> Session / Config / DB」、架构总览 / 连线「AIAgent -> Session / Config / DB」。证据结论是：CLI wrapper 进入 `hermes_cli.main.main`，main 支持 profile override、startup discovery、默认 chat command。图中的具体解释是：多个用户界面和定时任务入口最终围绕 AIAgent 组织。；profile、session key、gateway store、cron jobs 和本地配置共同构成运行状态边界。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/hermes:1-11",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/hermes",
        "start": 1,
        "end": 11,
        "snippet": "    1  #!/usr/bin/env python3\n    2  \"\"\"\n    3  Hermes Agent CLI launcher.\n    4  \n    5  This wrapper should behave like the installed `hermes` command, including\n    6  subcommands such as `gateway`, `cron`, and `doctor`.\n    7  \"\"\"\n    8  \n    9  if __name__ == \"__main__\":\n   10      from hermes_cli.main import main\n   11      main()",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "hermes_cli/main.py:183-235",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py",
        "relativePath": "hermes_cli/main.py",
        "start": 183,
        "end": 235,
        "snippet": "  183  def _apply_profile_override() -> None:\n  184      \"\"\"Pre-parse --profile/-p and set HERMES_HOME before module imports.\"\"\"\n  185      argv = sys.argv[1:]\n  186      profile_name = None\n  187      consume = 0\n  188  \n  189      # 1. Check for explicit -p / --profile flag\n  190      for i, arg in enumerate(argv):\n  191          if arg in {\"--profile\", \"-p\"} and i + 1 < len(argv):\n  192              profile_name = argv[i + 1]\n  193              consume = 2\n  194              break\n  195          elif arg.startswith(\"--profile=\"):\n  196              profile_name = arg.split(\"=\", 1)[1]\n  197              consume = 1\n  198              break\n  199  \n  200      # 1b. Reject values that can't be valid profile names (e.g. pytest's",
        "omitted": "已截取 183-200 行，原始范围到 235 行。"
      },
      {
        "kind": "file",
        "display": "hermes_cli/main.py:10758-10799",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py",
        "relativePath": "hermes_cli/main.py",
        "start": 10758,
        "end": 10799,
        "snippet": "10758  def _prepare_agent_startup(args) -> None:\n10759      \"\"\"Discover plugins/MCP/hooks for commands that can run an agent turn.\"\"\"\n10760      _sub_attr, _sub_set = _AGENT_SUBCOMMANDS.get(args.command, (None, None))\n10761      if not (\n10762          args.command in _AGENT_COMMANDS\n10763          or (_sub_attr and getattr(args, _sub_attr, None) in _sub_set)\n10764      ):\n10765          return\n10766  \n10767      _accept_hooks = bool(getattr(args, \"accept_hooks\", False))\n10768      try:\n10769          from hermes_cli.plugins import discover_plugins\n10770  \n10771          discover_plugins()\n10772      except Exception:\n10773          logger.warning(\n10774              \"plugin discovery failed at CLI startup\",\n10775              exc_info=True,",
        "omitted": "已截取 10758-10775 行，原始范围到 10799 行。"
      },
      {
        "kind": "file",
        "display": "hermes_cli/main.py:10928-10953",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py",
        "relativePath": "hermes_cli/main.py",
        "start": 10928,
        "end": 10953,
        "snippet": "10928  def main():\n10929      \"\"\"Main entry point for hermes CLI.\"\"\"\n10930      # Force UTF-8 stdio on Windows before anything prints.  No-op elsewhere.\n10931      try:\n10932          from hermes_cli.stdio import configure_windows_stdio\n10933          configure_windows_stdio()\n10934      except Exception:\n10935          pass\n10936  \n10937      # Sweep stale ``hermes.exe.old.*`` quarantine files left by previous\n10938      # ``hermes update`` runs on Windows. Silent no-op on non-Windows or when\n10939      # there's nothing to clean. See ``_quarantine_running_hermes_exe``.\n10940      try:\n10941          _cleanup_quarantined_exes()\n10942      except Exception:\n10943          pass\n10944  \n10945      if _try_termux_fast_tui_launch():",
        "omitted": "已截取 10928-10945 行，原始范围到 10953 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-004",
    "conclusion": "`AIAgent` 是 Agent 门面，初始化委托 `agent_init`，主循环委托 `conversation_loop`；loop 覆盖 prompt caching、context compression、streaming、tool call、session/memory/skill 收尾",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/run_agent.py:326-331`, `run_agent.py:349-470`, `run_agent.py:4053-4078`, `agent/agent_init.py:907-927`, `agent/agent_init.py:966-1179`, `agent/agent_init.py:1414-1505`, `agent/conversation_loop.py:1-15`, `agent/conversation_loop.py:232-317`, `agent/conversation_loop.py:451-570`, `agent/conversation_loop.py:760-878`, `agent/conversation_loop.py:1097-1145`, `agent/conversation_loop.py:3195-3428`, `agent/conversation_loop.py:3889-4165`",
    "confidence": "高",
    "verified": "",
    "note": "Agent core",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "AIAgent",
        "sub": "run_agent.py",
        "role": "module",
        "status": "source-verified",
        "detail": "核心 facade，承接入口参数、初始化上下文并进入对话运行时。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "run_conversation",
        "sub": "conversation_loop.py",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "Agent turn 主循环：模型调用、tool call、结果回写和流式输出。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Interface Layer -> AIAgent",
        "sub": "入口归一",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：入口归一。",
        "relation": "Interface Layer 到 AIAgent"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Messaging Gateway -> AIAgent",
        "sub": "SessionContext",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：SessionContext。",
        "relation": "Messaging Gateway 到 AIAgent"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "AIAgent -> run_conversation",
        "sub": "启动 turn",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：启动 turn。",
        "relation": "AIAgent 到 run_conversation"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "AIAgent",
        "sub": "init + context",
        "role": "module",
        "status": "source-verified",
        "detail": "初始化 provider、tools、memory、插件和系统提示词。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Conversation Loop",
        "sub": "model turn",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "统一执行模型 turn 和工具调用循环。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口适配 -> AIAgent",
        "sub": "上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：上下文。",
        "relation": "入口适配 到 AIAgent"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "AIAgent -> Conversation Loop",
        "sub": "执行 turn",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：执行 turn。",
        "relation": "AIAgent 到 Conversation Loop"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "ToolRegistry -> Conversation Loop",
        "sub": "结果反馈",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：结果反馈。",
        "relation": "ToolRegistry 到 Conversation Loop"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "Agent 内核层",
        "sub": "AIAgent facade and initialization",
        "role": "module",
        "status": "source-verified",
        "detail": "AIAgent facade and initialization",
        "relation": "system prompt / context / provider / memory"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "对话运行层",
        "sub": "run_conversation / model loop / tool calls",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "run_conversation / model loop / tool calls",
        "relation": "model turn / tool call / streaming / errors"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「AIAgent」、架构总览 / 节点「run_conversation」、架构总览 / 连线「Interface Layer -> AIAgent」、架构总览 / 连线「Messaging Gateway -> AIAgent」。证据结论是：`AIAgent` 是 Agent 门面，初始化委托 `agent_init`，主循环委托 `conversation_loop`；loop 覆盖 prompt caching、context compression、streaming、tool call、session/memory/skill 收尾。图中的具体解释是：核心 facade，承接入口参数、初始化上下文并进入对话运行时。；Agent turn 主循环：模型调用、tool call、结果回写和流式输出。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/run_agent.py:326-331",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/run_agent.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/run_agent.py",
        "start": 326,
        "end": 331,
        "snippet": "  326  class AIAgent:\n  327      \"\"\"\n  328      AI Agent with tool calling capabilities.\n  329  \n  330      This class manages the conversation flow, tool execution, and response handling\n  331      for AI models that support function calling.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "run_agent.py:349-470",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/run_agent.py",
        "relativePath": "run_agent.py",
        "start": 349,
        "end": 470,
        "snippet": "  349      def __init__(\n  350          self,\n  351          base_url: str = None,\n  352          api_key: str = None,\n  353          provider: str = None,\n  354          api_mode: str = None,\n  355          acp_command: str = None,\n  356          acp_args: list[str] | None = None,\n  357          command: str = None,\n  358          args: list[str] | None = None,\n  359          model: str = \"\",\n  360          max_iterations: int = 90,  # Default tool-calling iterations (shared with subagents)\n  361          tool_delay: float = 1.0,\n  362          enabled_toolsets: List[str] = None,\n  363          disabled_toolsets: List[str] = None,\n  364          save_trajectories: bool = False,\n  365          verbose_logging: bool = False,\n  366          quiet_mode: bool = False,",
        "omitted": "已截取 349-366 行，原始范围到 470 行。"
      },
      {
        "kind": "file",
        "display": "run_agent.py:4053-4078",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/run_agent.py",
        "relativePath": "run_agent.py",
        "start": 4053,
        "end": 4078,
        "snippet": " 4053      def run_conversation(\n 4054          self,\n 4055          user_message: str,\n 4056          system_message: str = None,\n 4057          conversation_history: List[Dict[str, Any]] = None,\n 4058          task_id: str = None,\n 4059          stream_callback: Optional[callable] = None,\n 4060          persist_user_message: Optional[str] = None,\n 4061      ) -> Dict[str, Any]:\n 4062          \"\"\"Forwarder — see ``agent.conversation_loop.run_conversation``.\"\"\"\n 4063          from agent.conversation_loop import run_conversation\n 4064          return run_conversation(self, user_message, system_message, conversation_history, task_id, stream_callback, persist_user_message)\n 4065  \n 4066      def chat(self, message: str, stream_callback: Optional[callable] = None) -> str:\n 4067          \"\"\"\n 4068          Simple chat interface that returns just the final response.\n 4069  \n 4070          Args:",
        "omitted": "已截取 4053-4070 行，原始范围到 4078 行。"
      },
      {
        "kind": "file",
        "display": "agent/agent_init.py:907-927",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/agent/agent_init.py",
        "relativePath": "agent/agent_init.py",
        "start": 907,
        "end": 927,
        "snippet": "  907      # Get available tools with filtering\n  908      agent.tools = _ra().get_tool_definitions(\n  909          enabled_toolsets=enabled_toolsets,\n  910          disabled_toolsets=disabled_toolsets,\n  911          quiet_mode=agent.quiet_mode,\n  912      )\n  913      \n  914      # Show tool configuration and store valid tool names for validation\n  915      agent.valid_tool_names = set()\n  916      if agent.tools:\n  917          agent.valid_tool_names = {tool[\"function\"][\"name\"] for tool in agent.tools}\n  918          tool_names = sorted(agent.valid_tool_names)\n  919          if not agent.quiet_mode:\n  920              print(f\"🛠️  Loaded {len(agent.tools)} tools: {', '.join(tool_names)}\")\n  921              # Show filtering info if applied\n  922              if enabled_toolsets:\n  923                  print(f\"   ✅ Enabled toolsets: {', '.join(enabled_toolsets)}\")\n  924              if disabled_toolsets:",
        "omitted": "已截取 907-924 行，原始范围到 927 行。"
      },
      {
        "kind": "file",
        "display": "agent/agent_init.py:966-1179",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/agent/agent_init.py",
        "relativePath": "agent/agent_init.py",
        "start": 966,
        "end": 1179,
        "snippet": "  966      # Session logging setup - auto-save conversation trajectories for debugging\n  967      agent.session_start = datetime.now()\n  968      if session_id:\n  969          # Use provided session ID (e.g., from CLI)\n  970          agent.session_id = session_id\n  971      else:\n  972          # Generate a new session ID\n  973          timestamp_str = agent.session_start.strftime(\"%Y%m%d_%H%M%S\")\n  974          short_uuid = uuid.uuid4().hex[:6]\n  975          agent.session_id = f\"{timestamp_str}_{short_uuid}\"\n  976  \n  977      # Expose session ID to tools (terminal, execute_code) so agents can\n  978      # reference their own session for --resume commands, cross-session\n  979      # coordination, and logging.  Uses the ContextVar system from\n  980      # session_context.py for concurrency safety (gateway runs multiple\n  981      # sessions in one process).  Also writes os.environ as fallback for\n  982      # CLI mode where ContextVars aren't used.\n  983      os.environ[\"HERMES_SESSION_ID\"] = agent.session_id",
        "omitted": "已截取 966-983 行，原始范围到 1179 行。"
      },
      {
        "kind": "file",
        "display": "agent/agent_init.py:1414-1505",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/agent/agent_init.py",
        "relativePath": "agent/agent_init.py",
        "start": 1414,
        "end": 1505,
        "snippet": " 1414      if _selected_engine is not None:\n 1415          agent.context_compressor = _selected_engine\n 1416          # Resolve context_length for plugin engines — mirrors switch_model() path\n 1417          from agent.model_metadata import get_model_context_length\n 1418          _plugin_ctx_len = get_model_context_length(\n 1419              agent.model,\n 1420              base_url=agent.base_url,\n 1421              api_key=getattr(agent, \"api_key\", \"\"),\n 1422              config_context_length=_config_context_length,\n 1423              provider=agent.provider,\n 1424              custom_providers=_custom_providers,\n 1425          )\n 1426          agent.context_compressor.update_model(\n 1427              model=agent.model,\n 1428              context_length=_plugin_ctx_len,\n 1429              base_url=agent.base_url,\n 1430              api_key=getattr(agent, \"api_key\", \"\"),\n 1431              provider=agent.provider,",
        "omitted": "已截取 1414-1431 行，原始范围到 1505 行。"
      },
      {
        "kind": "file",
        "display": "agent/conversation_loop.py:1-15",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/agent/conversation_loop.py",
        "relativePath": "agent/conversation_loop.py",
        "start": 1,
        "end": 15,
        "snippet": "    1  \"\"\"The agent conversation loop — extracted from ``run_agent.AIAgent``.\n    2  \n    3  This is the biggest single chunk pulled out of ``run_agent.py``: the\n    4  roughly 3,900-line :func:`run_conversation` body that drives one user\n    5  turn through the agent (model call, tool dispatch, retries, fallbacks,\n    6  compression, post-turn hooks, background memory/skill review nudges).\n    7  \n    8  The function takes the parent ``AIAgent`` instance as its first\n    9  argument (``agent``) and accesses its state via attribute lookup.\n   10  ``_ra().AIAgent.run_conversation`` is now a thin forwarder.\n   11  \n   12  Symbols that production code or tests patch on ``run_agent`` directly\n   13  (``handle_function_call``, ``_set_interrupt``, ``OpenAI``, ...) are\n   14  resolved through :func:`_ra` so those patches keep working.\n   15  \"\"\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "agent/conversation_loop.py:232-317",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/agent/conversation_loop.py",
        "relativePath": "agent/conversation_loop.py",
        "start": 232,
        "end": 317,
        "snippet": "  232  def run_conversation(\n  233      agent,\n  234      user_message: str,\n  235      system_message: str = None,\n  236      conversation_history: List[Dict[str, Any]] = None,\n  237      task_id: str = None,\n  238      stream_callback: Optional[callable] = None,\n  239      persist_user_message: Optional[str] = None,\n  240  ) -> Dict[str, Any]:\n  241      \"\"\"\n  242      Run a complete conversation with tool calling until completion.\n  243  \n  244      Args:\n  245          user_message (str): The user's message/question\n  246          system_message (str): Custom system message (optional, overrides ephemeral_system_prompt if provided)\n  247          conversation_history (List[Dict]): Previous conversation messages (optional)\n  248          task_id (str): Unique identifier for this task to isolate VMs between concurrent tasks (optional, auto-generated if not provided)\n  249          stream_callback: Optional callback invoked with each text delta during streaming.",
        "omitted": "已截取 232-249 行，原始范围到 317 行。"
      }
    ],
    "sourceLimitNote": "还有 5 个位置未展开，可回到 evidence-index.md 查看完整列表。"
  },
  {
    "id": "H-005",
    "conclusion": "`ToolRegistry` 是工具注册和 dispatch 中心，built-in tools 通过 import 自注册，registry 有 generation counter、availability check、override 和 async dispatch",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py:1-15`, `tools/registry.py:57-74`, `tools/registry.py:151-168`, `tools/registry.py:234-306`, `tools/registry.py:337-416`",
    "confidence": "高",
    "verified": "",
    "note": "工具注册",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "ToolRegistry + Toolsets",
        "sub": "registry / model_tools",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "中央工具注册表、toolset 过滤、模型 schema 转换和 tool call 分发。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "run_conversation -> ToolRegistry + Toolsets",
        "sub": "tool schema/call",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：tool schema/call。",
        "relation": "run_conversation 到 ToolRegistry + Toolsets"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager -> ToolRegistry + Toolsets",
        "sub": "注册能力",
        "role": "registration",
        "status": "",
        "detail": "关系语义：注册能力。",
        "relation": "Plugin Manager 到 ToolRegistry + Toolsets"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "ToolRegistry",
        "sub": "toolsets / call dispatch",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "把可用工具暴露给模型，并执行模型返回的 tool call。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Conversation Loop -> ToolRegistry",
        "sub": "工具调用",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：工具调用。",
        "relation": "Conversation Loop 到 ToolRegistry"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "能力扩展层",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「ToolRegistry + Toolsets」、架构总览 / 连线「run_conversation -> ToolRegistry + Toolsets」、架构总览 / 连线「Plugin Manager -> ToolRegistry + Toolsets」、运行主链路 / 节点「ToolRegistry」。证据结论是：`ToolRegistry` 是工具注册和 dispatch 中心，built-in tools 通过 import 自注册，registry 有 generation counter、availability check、override 和 async dispatch。图中的具体解释是：中央工具注册表、toolset 过滤、模型 schema 转换和 tool call 分发。；关系语义：tool schema/call。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py:1-15",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py",
        "start": 1,
        "end": 15,
        "snippet": "    1  \"\"\"Central registry for all hermes-agent tools.\n    2  \n    3  Each tool file calls ``registry.register()`` at module level to declare its\n    4  schema, handler, toolset membership, and availability check.  ``model_tools.py``\n    5  queries the registry instead of maintaining its own parallel data structures.\n    6  \n    7  Import chain (circular-import safe):\n    8      tools/registry.py  (no imports from model_tools or tool files)\n    9             ^\n   10      tools/*.py  (import from tools.registry at module level)\n   11             ^\n   12      model_tools.py  (imports tools.registry + all tool modules)\n   13             ^\n   14      run_agent.py, cli.py, batch_runner.py, etc.\n   15  \"\"\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "tools/registry.py:57-74",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 57,
        "end": 74,
        "snippet": "   57  def discover_builtin_tools(tools_dir: Optional[Path] = None) -> List[str]:\n   58      \"\"\"Import built-in self-registering tool modules and return their module names.\"\"\"\n   59      tools_path = Path(tools_dir) if tools_dir is not None else Path(__file__).resolve().parent\n   60      module_names = [\n   61          f\"tools.{path.stem}\"\n   62          for path in sorted(tools_path.glob(\"*.py\"))\n   63          if path.name not in {\"__init__.py\", \"registry.py\", \"mcp_tool.py\"}\n   64          and _module_registers_tools(path)\n   65      ]\n   66  \n   67      imported: List[str] = []\n   68      for mod_name in module_names:\n   69          try:\n   70              importlib.import_module(mod_name)\n   71              imported.append(mod_name)\n   72          except Exception as e:\n   73              logger.warning(\"Could not import tool module %s: %s\", mod_name, e)\n   74      return imported",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "tools/registry.py:151-168",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 151,
        "end": 168,
        "snippet": "  151  class ToolRegistry:\n  152      \"\"\"Singleton registry that collects tool schemas + handlers from tool files.\"\"\"\n  153  \n  154      def __init__(self):\n  155          self._tools: Dict[str, ToolEntry] = {}\n  156          self._toolset_checks: Dict[str, Callable] = {}\n  157          self._toolset_aliases: Dict[str, str] = {}\n  158          # MCP dynamic refresh can mutate the registry while other threads are\n  159          # reading tool metadata, so keep mutations serialized and readers on\n  160          # stable snapshots.\n  161          self._lock = threading.RLock()\n  162          # Monotonically-increasing generation counter. Bumped on every\n  163          # mutation (register / deregister / register_toolset_alias / MCP\n  164          # refresh). External callers (e.g. get_tool_definitions) can memoize\n  165          # against it: a cache entry keyed on the generation is valid for as\n  166          # long as the generation hasn't changed.\n  167          self._generation: int = 0\n  168  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "tools/registry.py:234-306",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 234,
        "end": 306,
        "snippet": "  234      def register(\n  235          self,\n  236          name: str,\n  237          toolset: str,\n  238          schema: dict,\n  239          handler: Callable,\n  240          check_fn: Callable = None,\n  241          requires_env: list = None,\n  242          is_async: bool = False,\n  243          description: str = \"\",\n  244          emoji: str = \"\",\n  245          max_result_size_chars: int | float | None = None,\n  246          dynamic_schema_overrides: Callable = None,\n  247          override: bool = False,\n  248      ):\n  249          \"\"\"Register a tool.  Called at module-import time by each tool file.\n  250  \n  251          ``override=True`` is an explicit opt-in for plugins that intend to",
        "omitted": "已截取 234-251 行，原始范围到 306 行。"
      },
      {
        "kind": "file",
        "display": "tools/registry.py:337-416",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/tools/registry.py",
        "relativePath": "tools/registry.py",
        "start": 337,
        "end": 416,
        "snippet": "  337      def get_definitions(self, tool_names: Set[str], quiet: bool = False) -> List[dict]:\n  338          \"\"\"Return OpenAI-format tool schemas for the requested tool names.\n  339  \n  340          Only tools whose ``check_fn()`` returns True (or have no check_fn)\n  341          are included. ``check_fn()`` results are cached for ~30 s via\n  342          :func:`_check_fn_cached` to amortize repeat probes (check_terminal_\n  343          requirements probes modal/docker, browser checks probe playwright,\n  344          etc.); TTL chosen so env-var changes (``hermes tools enable foo``)\n  345          still take effect in near-real-time without forcing a full cache\n  346          flush on every call.\n  347          \"\"\"\n  348          result = []\n  349          # Per-call cache on top of the 30 s TTL — handles repeat probes of the\n  350          # same check_fn within one definitions pass without re-reading the\n  351          # TTL clock.\n  352          check_results: Dict[Callable, bool] = {}\n  353          entries_by_name = {entry.name: entry for entry in self._snapshot_entries()}\n  354          for name in sorted(tool_names):",
        "omitted": "已截取 337-354 行，原始范围到 416 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-006",
    "conclusion": "`model_tools.py` 将 registry 转为模型 tool schema，按 toolset/disabled toolset 过滤，并在 `handle_function_call` 中处理 hooks、审批、dispatch 和错误包装",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/model_tools.py:1-21`, `model_tools.py:243-326`, `model_tools.py:329-390`, `model_tools.py:741-899`",
    "confidence": "高",
    "verified": "",
    "note": "工具编排",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "ToolRegistry + Toolsets",
        "sub": "registry / model_tools",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "中央工具注册表、toolset 过滤、模型 schema 转换和 tool call 分发。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "run_conversation -> ToolRegistry + Toolsets",
        "sub": "tool schema/call",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：tool schema/call。",
        "relation": "run_conversation 到 ToolRegistry + Toolsets"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager -> ToolRegistry + Toolsets",
        "sub": "注册能力",
        "role": "registration",
        "status": "",
        "detail": "关系语义：注册能力。",
        "relation": "Plugin Manager 到 ToolRegistry + Toolsets"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "ToolRegistry",
        "sub": "toolsets / call dispatch",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "把可用工具暴露给模型，并执行模型返回的 tool call。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Conversation Loop -> ToolRegistry",
        "sub": "工具调用",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：工具调用。",
        "relation": "Conversation Loop 到 ToolRegistry"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "对话运行层",
        "sub": "run_conversation / model loop / tool calls",
        "role": "runtime-object",
        "status": "source-verified",
        "detail": "run_conversation / model loop / tool calls",
        "relation": "model turn / tool call / streaming / errors"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「ToolRegistry + Toolsets」、架构总览 / 连线「run_conversation -> ToolRegistry + Toolsets」、架构总览 / 连线「Plugin Manager -> ToolRegistry + Toolsets」、运行主链路 / 节点「ToolRegistry」。证据结论是：`model_tools.py` 将 registry 转为模型 tool schema，按 toolset/disabled toolset 过滤，并在 `handle_function_call` 中处理 hooks、审批、dispatch 和错误包装。图中的具体解释是：中央工具注册表、toolset 过滤、模型 schema 转换和 tool call 分发。；关系语义：tool schema/call。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/model_tools.py:1-21",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/model_tools.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/model_tools.py",
        "start": 1,
        "end": 21,
        "snippet": "    1  #!/usr/bin/env python3\n    2  \"\"\"\n    3  Model Tools Module\n    4  \n    5  Thin orchestration layer over the tool registry. Each tool file in tools/\n    6  self-registers its schema, handler, and metadata via tools.registry.register().\n    7  This module triggers discovery (by importing all tool modules), then provides\n    8  the public API that run_agent.py, cli.py, batch_runner.py, and the RL\n    9  environments consume.\n   10  \n   11  Public API (signatures preserved from the original 2,400-line version):\n   12      get_tool_definitions(enabled_toolsets, disabled_toolsets, quiet_mode) -> list\n   13      handle_function_call(function_name, function_args, task_id, user_task) -> str\n   14      TOOL_TO_TOOLSET_MAP: dict          (for batch_runner.py)\n   15      TOOLSET_REQUIREMENTS: dict         (for cli.py, doctor.py)\n   16      get_all_tool_names() -> list\n   17      get_toolset_for_tool(name) -> str\n   18      get_available_toolsets() -> dict",
        "omitted": "已截取 1-18 行，原始范围到 21 行。"
      },
      {
        "kind": "file",
        "display": "model_tools.py:243-326",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/model_tools.py",
        "relativePath": "model_tools.py",
        "start": 243,
        "end": 326,
        "snippet": "  243  # Module-level memoization for get_tool_definitions(). Keyed on\n  244  # (frozenset(enabled_toolsets), frozenset(disabled_toolsets), registry._generation).\n  245  # Hot callers (gateway runner, AIAgent.__init__) invoke this on every turn\n  246  # with quiet_mode=True; caching avoids ~7 ms of registry walking + schema\n  247  # filtering + check_fn probing per call. Only active when quiet_mode=True\n  248  # because quiet_mode=False has stdout side effects (tool-selection prints).\n  249  #\n  250  # Invalidation happens transparently via the registry's _generation counter,\n  251  # which bumps on register() / deregister() / register_toolset_alias(). The\n  252  # inner check_fn TTL cache in registry.py handles environment drift (Docker\n  253  # daemon start/stop, env var changes, etc.) on a 30 s horizon.\n  254  _tool_defs_cache: Dict[tuple, List[Dict[str, Any]]] = {}\n  255  \n  256  \n  257  def _clear_tool_defs_cache() -> None:\n  258      \"\"\"Drop memoized get_tool_definitions() results. Called when dynamic\n  259      schema dependencies change (e.g. discord capability cache reset,\n  260      execute_code sandbox reconfigured).\"\"\"",
        "omitted": "已截取 243-260 行，原始范围到 326 行。"
      },
      {
        "kind": "file",
        "display": "model_tools.py:329-390",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/model_tools.py",
        "relativePath": "model_tools.py",
        "start": 329,
        "end": 390,
        "snippet": "  329  def _compute_tool_definitions(\n  330      enabled_toolsets: List[str] = None,\n  331      disabled_toolsets: List[str] = None,\n  332      quiet_mode: bool = False,\n  333  ) -> List[Dict[str, Any]]:\n  334      \"\"\"Uncached implementation of :func:`get_tool_definitions`.\"\"\"\n  335      # Determine which tool names the caller wants\n  336      tools_to_include: set = set()\n  337  \n  338      if enabled_toolsets is not None:\n  339          effective_enabled_toolsets = list(enabled_toolsets)\n  340          if os.environ.get(\"HERMES_KANBAN_TASK\") and \"kanban\" not in effective_enabled_toolsets:\n  341              # Dispatcher-spawned workers are scoped by HERMES_KANBAN_TASK and\n  342              # must always receive the lifecycle handoff tools. Assignee\n  343              # profiles may intentionally restrict their normal chat toolsets\n  344              # (for token/cost reasons), but that should not strip the kanban\n  345              # worker's completion/block/heartbeat surface.\n  346              effective_enabled_toolsets.append(\"kanban\")",
        "omitted": "已截取 329-346 行，原始范围到 390 行。"
      },
      {
        "kind": "file",
        "display": "model_tools.py:741-899",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/model_tools.py",
        "relativePath": "model_tools.py",
        "start": 741,
        "end": 899,
        "snippet": "  741  def handle_function_call(\n  742      function_name: str,\n  743      function_args: Dict[str, Any],\n  744      task_id: Optional[str] = None,\n  745      tool_call_id: Optional[str] = None,\n  746      session_id: Optional[str] = None,\n  747      user_task: Optional[str] = None,\n  748      enabled_tools: Optional[List[str]] = None,\n  749      skip_pre_tool_call_hook: bool = False,\n  750  ) -> str:\n  751      \"\"\"\n  752      Main function call dispatcher that routes calls to the tool registry.\n  753  \n  754      Args:\n  755          function_name: Name of the function to call.\n  756          function_args: Arguments for the function.\n  757          task_id: Unique identifier for terminal/browser session isolation.\n  758          user_task: The user's original task (for browser_snapshot context).",
        "omitted": "已截取 741-758 行，原始范围到 899 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-007",
    "conclusion": "`toolsets.py` 定义核心工具集合和 toolset，命令 registry 通过 `CommandDef` 支撑 CLI/Gateway/Slack/plugin command",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/toolsets.py:29-73`, `toolsets.py:78-240`, `toolsets.py:767-825`, `hermes_cli/commands.py:1-8`, `hermes_cli/commands.py:45-130`, `hermes_cli/commands.py:228-326`, `hermes_cli/commands.py:1030-1089`",
    "confidence": "高",
    "verified": "",
    "note": "toolset 与命令",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "ToolRegistry + Toolsets",
        "sub": "registry / model_tools",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "中央工具注册表、toolset 过滤、模型 schema 转换和 tool call 分发。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "run_conversation -> ToolRegistry + Toolsets",
        "sub": "tool schema/call",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：tool schema/call。",
        "relation": "run_conversation 到 ToolRegistry + Toolsets"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager -> ToolRegistry + Toolsets",
        "sub": "注册能力",
        "role": "registration",
        "status": "",
        "detail": "关系语义：注册能力。",
        "relation": "Plugin Manager 到 ToolRegistry + Toolsets"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "ToolRegistry",
        "sub": "toolsets / call dispatch",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "把可用工具暴露给模型，并执行模型返回的 tool call。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Conversation Loop -> ToolRegistry",
        "sub": "工具调用",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：工具调用。",
        "relation": "Conversation Loop 到 ToolRegistry"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "能力扩展层",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「ToolRegistry + Toolsets」、架构总览 / 连线「run_conversation -> ToolRegistry + Toolsets」、架构总览 / 连线「Plugin Manager -> ToolRegistry + Toolsets」、运行主链路 / 节点「ToolRegistry」。证据结论是：`toolsets.py` 定义核心工具集合和 toolset，命令 registry 通过 `CommandDef` 支撑 CLI/Gateway/Slack/plugin command。图中的具体解释是：中央工具注册表、toolset 过滤、模型 schema 转换和 tool call 分发。；关系语义：tool schema/call。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/toolsets.py:29-73",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/toolsets.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/toolsets.py",
        "start": 29,
        "end": 73,
        "snippet": "   29  # Shared tool list for CLI and all messaging platform toolsets.\n   30  # Edit this once to update all platforms simultaneously.\n   31  _HERMES_CORE_TOOLS = [\n   32      # Web\n   33      \"web_search\", \"web_extract\",\n   34      # Terminal + process management\n   35      \"terminal\", \"process\",\n   36      # File manipulation\n   37      \"read_file\", \"write_file\", \"patch\", \"search_files\",\n   38      # Vision + image generation\n   39      \"vision_analyze\", \"image_generate\",\n   40      # Skills\n   41      \"skills_list\", \"skill_view\", \"skill_manage\",\n   42      # Browser automation\n   43      \"browser_navigate\", \"browser_snapshot\", \"browser_click\",\n   44      \"browser_type\", \"browser_scroll\", \"browser_back\",\n   45      \"browser_press\", \"browser_get_images\",\n   46      \"browser_vision\", \"browser_console\", \"browser_cdp\", \"browser_dialog\",",
        "omitted": "已截取 29-46 行，原始范围到 73 行。"
      },
      {
        "kind": "file",
        "display": "toolsets.py:78-240",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/toolsets.py",
        "relativePath": "toolsets.py",
        "start": 78,
        "end": 240,
        "snippet": "   78  TOOLSETS = {\n   79      # Basic toolsets - individual tool categories\n   80      \"web\": {\n   81          \"description\": \"Web research and content extraction tools\",\n   82          \"tools\": [\"web_search\", \"web_extract\"],\n   83          \"includes\": []  # No other toolsets included\n   84      },\n   85      \n   86      \"search\": {\n   87          \"description\": \"Web search only (no content extraction/scraping)\",\n   88          \"tools\": [\"web_search\"],\n   89          \"includes\": []\n   90      },\n   91  \n   92      \"x_search\": {\n   93          \"description\": (\n   94              \"Search X (Twitter) posts and threads via xAI's built-in \"\n   95              \"x_search Responses tool. Available when xAI credentials are \"",
        "omitted": "已截取 78-95 行，原始范围到 240 行。"
      },
      {
        "kind": "file",
        "display": "toolsets.py:767-825",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/toolsets.py",
        "relativePath": "toolsets.py",
        "start": 767,
        "end": 825,
        "snippet": "  767      # Accept special alias names for convenience\n  768      if name in {\"all\", \"*\"}:\n  769          return True\n  770      if name in TOOLSETS:\n  771          return True\n  772      if name in _get_plugin_toolset_names():\n  773          return True\n  774      return name in _get_registry_toolset_aliases()\n  775  \n  776  \n  777  def create_custom_toolset(\n  778      name: str,\n  779      description: str,\n  780      tools: List[str] = None,\n  781      includes: List[str] = None\n  782  ) -> None:\n  783      \"\"\"\n  784      Create a custom toolset at runtime.",
        "omitted": "已截取 767-784 行，原始范围到 825 行。"
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:1-8",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 1,
        "end": 8,
        "snippet": "    1  \"\"\"Slash command definitions and autocomplete for the Hermes CLI.\n    2  \n    3  Central registry for all slash commands. Every consumer -- CLI help, gateway\n    4  dispatch, Telegram BotCommands, Slack subcommand mapping, autocomplete --\n    5  derives its data from ``COMMAND_REGISTRY``.\n    6  \n    7  To add a command: add a ``CommandDef`` entry to ``COMMAND_REGISTRY``.\n    8  To add an alias: set ``aliases=(\"short\",)`` on the existing ``CommandDef``.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:45-130",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 45,
        "end": 130,
        "snippet": "   45  @dataclass(frozen=True)\n   46  class CommandDef:\n   47      \"\"\"Definition of a single slash command.\"\"\"\n   48  \n   49      name: str                          # canonical name without slash: \"background\"\n   50      description: str                   # human-readable description\n   51      category: str                      # \"Session\", \"Configuration\", etc.\n   52      aliases: tuple[str, ...] = ()      # alternative names: (\"bg\",)\n   53      args_hint: str = \"\"                # argument placeholder: \"<prompt>\", \"[name]\"\n   54      subcommands: tuple[str, ...] = ()  # tab-completable subcommands\n   55      cli_only: bool = False             # only available in CLI\n   56      gateway_only: bool = False         # only available in gateway/messaging\n   57      gateway_config_gate: str | None = None  # config dotpath; when truthy, overrides cli_only for gateway\n   58  \n   59  \n   60  # ---------------------------------------------------------------------------\n   61  # Central registry -- single source of truth\n   62  # ---------------------------------------------------------------------------",
        "omitted": "已截取 45-62 行，原始范围到 130 行。"
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:228-326",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 228,
        "end": 326,
        "snippet": "  228  def _build_command_lookup() -> dict[str, CommandDef]:\n  229      \"\"\"Map every name and alias to its CommandDef.\"\"\"\n  230      lookup: dict[str, CommandDef] = {}\n  231      for cmd in COMMAND_REGISTRY:\n  232          lookup[cmd.name] = cmd\n  233          for alias in cmd.aliases:\n  234              lookup[alias] = cmd\n  235      return lookup\n  236  \n  237  \n  238  _COMMAND_LOOKUP: dict[str, CommandDef] = _build_command_lookup()\n  239  \n  240  \n  241  def resolve_command(name: str) -> CommandDef | None:\n  242      \"\"\"Resolve a command name or alias to its CommandDef.\n  243  \n  244      Accepts names with or without the leading slash.\n  245      \"\"\"",
        "omitted": "已截取 228-245 行，原始范围到 326 行。"
      },
      {
        "kind": "file",
        "display": "hermes_cli/commands.py:1030-1089",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/commands.py",
        "relativePath": "hermes_cli/commands.py",
        "start": 1030,
        "end": 1089,
        "snippet": " 1030  def slack_native_slashes() -> list[tuple[str, str, str]]:\n 1031      \"\"\"Return (slash_name, description, usage_hint) triples for Slack.\n 1032  \n 1033      Every gateway-available command in ``COMMAND_REGISTRY`` is surfaced as\n 1034      a standalone Slack slash command (e.g. ``/btw``, ``/stop``, ``/model``),\n 1035      matching Discord's and Telegram's model where every command is a\n 1036      first-class slash and not a ``/hermes <verb>`` subcommand.\n 1037  \n 1038      Both canonical names and aliases are included so users can type any\n 1039      documented form (e.g. ``/background``, ``/bg``, and ``/btw`` all work).\n 1040      Plugin-registered slash commands are included too.\n 1041  \n 1042      Commands whose sanitized name collides with a Slack built-in\n 1043      (e.g. ``/status``, ``/me``, ``/join``) are silently skipped.  Users\n 1044      can still reach them via ``/hermes <command>``.\n 1045  \n 1046      Results are clamped to Slack's 50-command limit with duplicate-name\n 1047      avoidance. ``/hermes`` is always reserved as the first entry so the",
        "omitted": "已截取 1030-1047 行，原始范围到 1089 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-008",
    "conclusion": "通用插件系统支持 bundled/user/project/entrypoint 来源，`PluginContext` 可注册工具、CLI/slash command、hook、context engine、provider-like 能力、gateway platform、只读 skill；hook 执行 fail-open",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/plugins.py:1-31`, `plugins.py:128-168`, `plugins.py:180-267`, `plugins.py:287-528`, `plugins.py:531-760`, `plugins.py:820-948`, `plugins.py:1170-1234`, `plugins.py:1296-1409`, `plugins.py:1428-1588`",
    "confidence": "高",
    "verified": "",
    "note": "插件控制面",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "能力扩展层",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Plugin Manager」、分层视图 / 分层「能力扩展层」。证据结论是：通用插件系统支持 bundled/user/project/entrypoint 来源，`PluginContext` 可注册工具、CLI/slash command、hook、context engine、provider-like 能力、gateway platform、只读 skill；hook 执行 fail-open。图中的具体解释是：插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。；ToolRegistry / toolsets / plugins / providers",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/plugins.py:1-31",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/plugins.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/plugins.py",
        "start": 1,
        "end": 31,
        "snippet": "    1  \"\"\"\n    2  Hermes Plugin System\n    3  ====================\n    4  \n    5  Discovers, loads, and manages plugins from four sources:\n    6  \n    7  1. **Bundled plugins** – ``<repo>/plugins/<name>/`` (shipped with hermes-agent;\n    8     ``memory/`` and ``context_engine/`` subdirs are excluded — they have their\n    9     own discovery paths)\n   10  2. **User plugins**   – ``~/.hermes/plugins/<name>/``\n   11  3. **Project plugins** – ``./.hermes/plugins/<name>/`` (opt-in via\n   12     ``HERMES_ENABLE_PROJECT_PLUGINS``)\n   13  4. **Pip plugins**     – packages that expose the ``hermes_agent.plugins``\n   14     entry-point group.\n   15  \n   16  Later sources override earlier ones on name collision, so a user or project\n   17  plugin with the same name as a bundled plugin replaces it.\n   18  ",
        "omitted": "已截取 1-18 行，原始范围到 31 行。"
      },
      {
        "kind": "file",
        "display": "plugins.py:128-168",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 128,
        "end": 168
      },
      {
        "kind": "file",
        "display": "plugins.py:180-267",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 180,
        "end": 267
      },
      {
        "kind": "file",
        "display": "plugins.py:287-528",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 287,
        "end": 528
      },
      {
        "kind": "file",
        "display": "plugins.py:531-760",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 531,
        "end": 760
      },
      {
        "kind": "file",
        "display": "plugins.py:820-948",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 820,
        "end": 948
      },
      {
        "kind": "file",
        "display": "plugins.py:1170-1234",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 1170,
        "end": 1234
      },
      {
        "kind": "file",
        "display": "plugins.py:1296-1409",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins.py",
        "relativePath": "plugins.py",
        "start": 1296,
        "end": 1409
      }
    ],
    "sourceLimitNote": "还有 1 个位置未展开，可回到 evidence-index.md 查看完整列表。"
  },
  {
    "id": "H-009",
    "conclusion": "Gateway 通过 `GatewayRunner`、`MessageEvent`、`BasePlatformAdapter`、`SessionSource`、`SessionContext` 处理多平台消息、session key、cached/fresh AIAgent 和 delivery 去重",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py:1542-1590`, `gateway/run.py:3652-3725`, `gateway/run.py:6504-6605`, `gateway/run.py:7574-7615`, `gateway/run.py:7630-7668`, `gateway/run.py:7991-8007`, `gateway/run.py:15490-15538`, `gateway/run.py:16337-16403`, `gateway/run.py:16801-16808`, `gateway/run.py:17634-17668`, `gateway/platforms/base.py:999-1103`, `gateway/platforms/base.py:1141-1156`, `gateway/platforms/base.py:1370-1485`, `gateway/session.py:71-179`, `gateway/session.py:579-691`, `gateway/session.py:1313-1348`",
    "confidence": "高",
    "verified": "",
    "note": "Gateway 运行面",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Messaging Gateway",
        "sub": "gateway/run.py",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "平台 Adapter、allowlist/pairing、SessionContext、delivery 和 agent cache。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Session / Config / DB",
        "sub": "profiles / session store / cron jobs",
        "role": "state",
        "status": "source-verified",
        "detail": "profile、session key、gateway store、cron jobs 和本地配置共同构成运行状态边界。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Messaging Gateway -> Session / Config / DB",
        "sub": "会话/投递状态",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：会话/投递状态。",
        "relation": "Messaging Gateway 到 Session / Config / DB"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "AIAgent -> Session / Config / DB",
        "sub": "配置/profile",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：配置/profile。",
        "relation": "AIAgent 到 Session / Config / DB"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口适配",
        "sub": "args / message / schedule",
        "role": "adapter",
        "status": "source-verified",
        "detail": "把不同入口转换成 AIAgent 可消费的上下文。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Response / Delivery",
        "sub": "stdout / TUI / platform",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "根据入口形态将结果输出到终端、TUI 或 messaging platform。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件 -> 入口适配",
        "sub": "输入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：输入。",
        "relation": "入口事件 到 入口适配"
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Conversation Loop -> Response / Delivery",
        "sub": "响应",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：响应。",
        "relation": "Conversation Loop 到 Response / Delivery"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "状态与记忆层",
        "sub": "SessionStore / profiles / MemoryManager",
        "role": "state",
        "status": "source-verified",
        "detail": "SessionStore / profiles / MemoryManager",
        "relation": "session key / profile / memory / cron DB"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "平台投递层",
        "sub": "Gateway adapters / pairing / delivery",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Gateway adapters / pairing / delivery",
        "relation": "adapter / allowlist / pairing / delivery"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Messaging Gateway」、架构总览 / 节点「Session / Config / DB」、架构总览 / 连线「Messaging Gateway -> Session / Config / DB」、架构总览 / 连线「AIAgent -> Session / Config / DB」。证据结论是：Gateway 通过 `GatewayRunner`、`MessageEvent`、`BasePlatformAdapter`、`SessionSource`、`SessionContext` 处理多平台消息、session key、cached/fresh AIAgent 和 delivery 去重。图中的具体解释是：平台 Adapter、allowlist/pairing、SessionContext、delivery 和 agent cache。；profile、session key、gateway store、cron jobs 和本地配置共同构成运行状态边界。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py:1542-1590",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "start": 1542,
        "end": 1590,
        "snippet": " 1542  class GatewayRunner:\n 1543      \"\"\"\n 1544      Main gateway controller.\n 1545  \n 1546      Manages the lifecycle of all platform adapters and routes\n 1547      messages to/from the agent.\n 1548      \"\"\"\n 1549  \n 1550      # Class-level defaults so partial construction in tests doesn't\n 1551      # blow up on attribute access.\n 1552      _running_agents_ts: Dict[str, float] = {}\n 1553      _busy_input_mode: str = \"interrupt\"\n 1554      _restart_drain_timeout: float = DEFAULT_GATEWAY_RESTART_DRAIN_TIMEOUT\n 1555      _exit_code: Optional[int] = None\n 1556      _draining: bool = False\n 1557      _restart_requested: bool = False\n 1558      _restart_task_started: bool = False\n 1559      _restart_detached: bool = False",
        "omitted": "已截取 1542-1559 行，原始范围到 1590 行。"
      },
      {
        "kind": "file",
        "display": "gateway/run.py:3652-3725",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 3652,
        "end": 3725,
        "snippet": " 3652      async def start(self) -> bool:\n 3653          \"\"\"\n 3654          Start the gateway and all configured platform adapters.\n 3655          \n 3656          Returns True if at least one adapter connected successfully.\n 3657          \"\"\"\n 3658          logger.info(\"Starting Hermes Gateway...\")\n 3659          try:\n 3660              self._gateway_loop = asyncio.get_running_loop()\n 3661          except RuntimeError:\n 3662              self._gateway_loop = None\n 3663          logger.info(\"Session storage: %s\", self.config.sessions_dir)\n 3664  \n 3665          # Sanity-check that systemd's TimeoutStopSec covers our drain\n 3666          # window.  When the user upgraded hermes-agent without re-running\n 3667          # ``hermes setup``, their unit file may still encode the old\n 3668          # default — in which case SIGKILL hits mid-drain and looks like\n 3669          # a phantom kill in the journal.  Best-effort, never raises.",
        "omitted": "已截取 3652-3669 行，原始范围到 3725 行。"
      },
      {
        "kind": "file",
        "display": "gateway/run.py:6504-6605",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 6504,
        "end": 6605,
        "snippet": " 6504      async def _handle_message(self, event: MessageEvent) -> Optional[str]:\n 6505          \"\"\"\n 6506          Handle an incoming message from any platform.\n 6507          \n 6508          This is the core message processing pipeline:\n 6509          1. Check user authorization\n 6510          2. Check for commands (/new, /reset, etc.)\n 6511          3. Check for running agent and interrupt if needed\n 6512          4. Get or create session\n 6513          5. Build context for agent\n 6514          6. Run agent conversation\n 6515          7. Return response\n 6516          \"\"\"\n 6517          source = event.source\n 6518  \n 6519          # Internal events (e.g. background-process completion notifications)\n 6520          # are system-generated and must skip user authorization.\n 6521          is_internal = bool(getattr(event, \"internal\", False))",
        "omitted": "已截取 6504-6521 行，原始范围到 6605 行。"
      },
      {
        "kind": "file",
        "display": "gateway/run.py:7574-7615",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 7574,
        "end": 7615,
        "snippet": " 7574          # ── Claim this session before any await ───────────────────────\n 7575          # Between here and _run_agent registering the real AIAgent, there\n 7576          # are numerous await points (hooks, vision enrichment, STT,\n 7577          # session hygiene compression).  Without this sentinel a second\n 7578          # message arriving during any of those yields would pass the\n 7579          # \"already running\" guard and spin up a duplicate agent for the\n 7580          # same session — corrupting the transcript.\n 7581          self._running_agents[_quick_key] = _AGENT_PENDING_SENTINEL\n 7582          self._running_agents_ts[_quick_key] = time.time()\n 7583          _run_generation = self._begin_session_run_generation(_quick_key)\n 7584  \n 7585          try:\n 7586              _agent_result = await self._handle_message_with_agent(event, source, _quick_key, _run_generation)\n 7587              # Goal continuation: after the agent returns a final response\n 7588              # for this turn, check any standing /goal — the judge will\n 7589              # either mark it done, pause it (budget), or enqueue a\n 7590              # continuation prompt back through the adapter FIFO so the\n 7591              # next turn makes more progress. Wrapped in try/except so a",
        "omitted": "已截取 7574-7591 行，原始范围到 7615 行。"
      },
      {
        "kind": "file",
        "display": "gateway/run.py:7630-7668",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 7630,
        "end": 7668,
        "snippet": " 7630      async def _prepare_inbound_message_text(\n 7631          self,\n 7632          *,\n 7633          event: MessageEvent,\n 7634          source: SessionSource,\n 7635          history: List[Dict[str, Any]],\n 7636      ) -> Optional[str]:\n 7637          \"\"\"Prepare inbound event text for the agent.\n 7638  \n 7639          Keep the normal inbound path and the queued follow-up path on the same\n 7640          preprocessing pipeline so sender attribution, image enrichment, STT,\n 7641          document notes, reply context, and @ references all behave the same.\n 7642  \n 7643          Side effect: buffers per-session native image paths when the active\n 7644          model supports native vision AND the user has images attached. The\n 7645          caller consumes and clears that session-scoped buffer at the\n 7646          ``run_conversation`` site to build a multimodal user turn. When the\n 7647          list is empty, the ``_enrich_message_with_vision`` text path has",
        "omitted": "已截取 7630-7647 行，原始范围到 7668 行。"
      },
      {
        "kind": "file",
        "display": "gateway/run.py:7991-8007",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 7991,
        "end": 8007,
        "snippet": " 7991          # Build session context\n 7992          context = build_session_context(source, self.config, session_entry)\n 7993          \n 7994          # Set session context variables for tools (task-local, concurrency-safe)\n 7995          _session_env_tokens = self._set_session_env(context)\n 7996          \n 7997          # Read privacy.redact_pii from config (re-read per message)\n 7998          _redact_pii = False\n 7999          try:\n 8000              _pcfg = _load_gateway_config()\n 8001              _redact_pii = bool((_pcfg.get(\"privacy\") or {}).get(\"redact_pii\", False))\n 8002          except Exception:\n 8003              pass\n 8004  \n 8005          # Build the context prompt to inject\n 8006          context_prompt = build_session_context_prompt(context, redact_pii=_redact_pii)\n 8007          ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "gateway/run.py:15490-15538",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 15490,
        "end": 15538,
        "snippet": "15490          source: SessionSource,\n15491          session_id: str,\n15492          session_key: str = None,\n15493          run_generation: Optional[int] = None,\n15494          _interrupt_depth: int = 0,\n15495          event_message_id: Optional[str] = None,\n15496          channel_prompt: Optional[str] = None,\n15497      ) -> Dict[str, Any]:\n15498          \"\"\"\n15499          Run the agent with the given message and context.\n15500          \n15501          Returns the full result dict from run_conversation, including:\n15502            - \"final_response\": str (the text to send back)\n15503            - \"messages\": list (full conversation including tool calls)\n15504            - \"api_calls\": int\n15505            - \"completed\": bool\n15506          \n15507          This is run in a thread pool to not block the event loop.",
        "omitted": "已截取 15490-15507 行，原始范围到 15538 行。"
      },
      {
        "kind": "file",
        "display": "gateway/run.py:16337-16403",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 16337,
        "end": 16403,
        "snippet": "16337              # Check agent cache — reuse the AIAgent from the previous message\n16338              # in this session to preserve the frozen system prompt and tool\n16339              # schemas for prompt cache hits.\n16340              _sig = self._agent_config_signature(\n16341                  turn_route[\"model\"],\n16342                  turn_route[\"runtime\"],\n16343                  enabled_toolsets,\n16344                  combined_ephemeral,\n16345                  cache_keys=self._extract_cache_busting_config(user_config),\n16346              )\n16347              agent = None\n16348              _cache_lock = getattr(self, \"_agent_cache_lock\", None)\n16349              _cache = getattr(self, \"_agent_cache\", None)\n16350              if _cache_lock and _cache is not None:\n16351                  with _cache_lock:\n16352                      cached = _cache.get(session_key)\n16353                      if cached and cached[1] == _sig:\n16354                          agent = cached[0]",
        "omitted": "已截取 16337-16354 行，原始范围到 16403 行。"
      }
    ],
    "sourceLimitNote": "还有 8 个位置未展开，可回到 evidence-index.md 查看完整列表。"
  },
  {
    "id": "H-010",
    "conclusion": "Gateway platform registry 允许插件平台优先于内置 if/elif 创建 Adapter；ADDING_A_PLATFORM 推荐 plugin path",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/gateway/platform_registry.py:1-10`, `platform_registry.py:38-187`, `platform_registry.py:208-240`, `gateway/run.py:5960-6125`, `gateway/platforms/ADDING_A_PLATFORM.md:1-15`, `ADDING_A_PLATFORM.md:17-43`, `ADDING_A_PLATFORM.md:71-115`",
    "confidence": "高",
    "verified": "",
    "note": "平台扩展",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Messaging Gateway",
        "sub": "gateway/run.py",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "平台 Adapter、allowlist/pairing、SessionContext、delivery 和 agent cache。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "平台投递层",
        "sub": "Gateway adapters / pairing / delivery",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "Gateway adapters / pairing / delivery",
        "relation": "adapter / allowlist / pairing / delivery"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Messaging Gateway」、架构总览 / 节点「Plugin Manager」、分层视图 / 分层「平台投递层」。证据结论是：Gateway platform registry 允许插件平台优先于内置 if/elif 创建 Adapter；ADDING_A_PLATFORM 推荐 plugin path。图中的具体解释是：平台 Adapter、allowlist/pairing、SessionContext、delivery 和 agent cache。；插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/gateway/platform_registry.py:1-10",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/platform_registry.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/gateway/platform_registry.py",
        "start": 1,
        "end": 10,
        "snippet": "    1  \"\"\"\n    2  Platform Adapter Registry\n    3  \n    4  Allows platform adapters (built-in and plugin) to self-register so the gateway\n    5  can discover and instantiate them without hardcoded if/elif chains.\n    6  \n    7  Built-in adapters continue to use the existing if/elif in _create_adapter()\n    8  for now.  Plugin adapters register here via PluginContext.register_platform()\n    9  and are looked up first -- if nothing is found the gateway falls through to\n   10  the legacy code path.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "platform_registry.py:38-187",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/platform_registry.py",
        "relativePath": "platform_registry.py",
        "start": 38,
        "end": 187
      },
      {
        "kind": "file",
        "display": "platform_registry.py:208-240",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/platform_registry.py",
        "relativePath": "platform_registry.py",
        "start": 208,
        "end": 240
      },
      {
        "kind": "file",
        "display": "gateway/run.py:5960-6125",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/run.py",
        "relativePath": "gateway/run.py",
        "start": 5960,
        "end": 6125,
        "snippet": " 5960          self, \n 5961          platform: Platform, \n 5962          config: Any\n 5963      ) -> Optional[BasePlatformAdapter]:\n 5964          \"\"\"Create the appropriate adapter for a platform.\n 5965  \n 5966          Checks the platform_registry first (plugin adapters), then falls\n 5967          through to the built-in if/elif chain for core platforms.\n 5968          \"\"\"\n 5969          if hasattr(config, \"extra\") and isinstance(config.extra, dict):\n 5970              config.extra.setdefault(\n 5971                  \"group_sessions_per_user\",\n 5972                  self.config.group_sessions_per_user,\n 5973              )\n 5974              config.extra.setdefault(\n 5975                  \"thread_sessions_per_user\",\n 5976                  getattr(self.config, \"thread_sessions_per_user\", False),\n 5977              )",
        "omitted": "已截取 5960-5977 行，原始范围到 6125 行。"
      },
      {
        "kind": "file",
        "display": "gateway/platforms/ADDING_A_PLATFORM.md:1-15",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/gateway/platforms/ADDING_A_PLATFORM.md",
        "relativePath": "gateway/platforms/ADDING_A_PLATFORM.md",
        "start": 1,
        "end": 15,
        "snippet": "    1  # Adding a New Messaging Platform\n    2  \n    3  There are two ways to add a platform to the Hermes gateway:\n    4  \n    5  ## Plugin Path (Recommended for Community/Third-Party)\n    6  \n    7  Create a plugin directory in `~/.hermes/plugins/` (or under `plugins/platforms/`\n    8  for bundled plugins) with a `plugin.yaml` and `adapter.py`.  The adapter\n    9  inherits from `BasePlatformAdapter` and registers via\n   10  `ctx.register_platform()` in the `register(ctx)` entry point.  This requires\n   11  **zero changes to core Hermes code**.\n   12  \n   13  The plugin system automatically handles: adapter creation, config parsing,\n   14  user authorization, cron delivery, send_message routing, system prompt hints,\n   15  status display, gateway setup, and more.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "ADDING_A_PLATFORM.md:17-43",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/ADDING_A_PLATFORM.md",
        "relativePath": "ADDING_A_PLATFORM.md",
        "start": 17,
        "end": 43
      },
      {
        "kind": "file",
        "display": "ADDING_A_PLATFORM.md:71-115",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/ADDING_A_PLATFORM.md",
        "relativePath": "ADDING_A_PLATFORM.md",
        "start": 71,
        "end": 115
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-011",
    "conclusion": "Provider Profile 描述 provider 行为，providers lazy discovery 支持 bundled/user/legacy 与 user override bundled，下游接到 auth/models/doctor/config/runtime/transport/run_agent",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/providers/base.py:1-9`, `providers/base.py:38-129`, `providers/__init__.py:1-29`, `providers/__init__.py:53-88`, `providers/__init__.py:140-190`, `providers/README.md:29-53`",
    "confidence": "高",
    "verified": "",
    "note": "模型 Provider",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Provider Profile",
        "sub": "providers / profiles",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "模型 Provider 行为剥离到 profile，减少主循环中的 provider 差异。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "run_conversation -> Provider Profile",
        "sub": "模型调用",
        "role": "model-stream",
        "status": "",
        "detail": "关系语义：模型调用。",
        "relation": "run_conversation 到 Provider Profile"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager -> Provider Profile",
        "sub": "扩展 Provider",
        "role": "registration",
        "status": "",
        "detail": "关系语义：扩展 Provider。",
        "relation": "Plugin Manager 到 Provider Profile"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "能力扩展层",
        "sub": "ToolRegistry / toolsets / plugins / providers",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "ToolRegistry / toolsets / plugins / providers",
        "relation": "registry / toolset / hooks / profiles"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Provider Profile」、架构总览 / 节点「Plugin Manager」、架构总览 / 连线「run_conversation -> Provider Profile」、架构总览 / 连线「Plugin Manager -> Provider Profile」。证据结论是：Provider Profile 描述 provider 行为，providers lazy discovery 支持 bundled/user/legacy 与 user override bundled，下游接到 auth/models/doctor/config/runtime/transport/run_agent。图中的具体解释是：模型 Provider 行为剥离到 profile，减少主循环中的 provider 差异。；插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/providers/base.py:1-9",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/providers/base.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/providers/base.py",
        "start": 1,
        "end": 9,
        "snippet": "    1  \"\"\"Provider profile base class.\n    2  \n    3  A ProviderProfile declares everything about an inference provider in one place:\n    4  auth, endpoints, client quirks, request-time quirks. The transport reads this\n    5  instead of receiving 20+ boolean flags.\n    6  \n    7  Provider profiles are DECLARATIVE — they describe the provider's behavior.\n    8  They do NOT own client construction, credential rotation, or streaming.\n    9  Those stay on AIAgent.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "providers/base.py:38-129",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/providers/base.py",
        "relativePath": "providers/base.py",
        "start": 38,
        "end": 129,
        "snippet": "   38  @dataclass\n   39  class ProviderProfile:\n   40      \"\"\"Base provider profile — subclass or instantiate with overrides.\"\"\"\n   41  \n   42      # ── Identity ─────────────────────────────────────────────\n   43      name: str\n   44      api_mode: str = \"chat_completions\"\n   45      aliases: tuple = ()\n   46  \n   47      # ── Human-readable metadata ───────────────────────────────\n   48      display_name: str = \"\"       # e.g. \"GMI Cloud\" — shown in picker/labels\n   49      description: str = \"\"        # e.g. \"GMI Cloud (multi-model direct API)\" — picker subtitle\n   50      signup_url: str = \"\"         # e.g. \"https://www.gmicloud.ai/\" — shown during setup\n   51  \n   52      # ── Auth & endpoints ─────────────────────────────────────\n   53      env_vars: tuple = ()\n   54      base_url: str = \"\"\n   55      models_url: str = \"\"  # explicit models endpoint; falls back to {base_url}/models",
        "omitted": "已截取 38-55 行，原始范围到 129 行。"
      },
      {
        "kind": "file",
        "display": "providers/__init__.py:1-29",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/providers/__init__.py",
        "relativePath": "providers/__init__.py",
        "start": 1,
        "end": 29,
        "snippet": "    1  \"\"\"Provider module registry.\n    2  \n    3  Provider profiles can live in two places:\n    4  \n    5  1. Bundled plugins: ``plugins/model-providers/<name>/`` (shipped with hermes-agent)\n    6  2. User plugins: ``$HERMES_HOME/plugins/model-providers/<name>/``\n    7  \n    8  Each plugin directory contains:\n    9    - ``__init__.py`` — calls ``register_provider(profile)`` at import\n   10    - ``plugin.yaml`` — manifest (name, kind: model-provider, version, description)\n   11  \n   12  Discovery is lazy: the first call to ``get_provider_profile()`` or\n   13  ``list_providers()`` scans both locations and imports every plugin. User\n   14  plugins override bundled plugins on name collision (last-writer-wins), so\n   15  third parties can monkey-patch or replace any built-in profile without\n   16  editing the repo.\n   17  \n   18  For backward compatibility, ``providers/*.py`` files (other than ``base.py``",
        "omitted": "已截取 1-18 行，原始范围到 29 行。"
      },
      {
        "kind": "file",
        "display": "providers/__init__.py:53-88",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/providers/__init__.py",
        "relativePath": "providers/__init__.py",
        "start": 53,
        "end": 88,
        "snippet": "   53  def register_provider(profile: ProviderProfile) -> None:\n   54      \"\"\"Register a provider profile by name and aliases.\n   55  \n   56      Later registrations with the same name replace earlier ones — so user\n   57      plugins under ``$HERMES_HOME/plugins/model-providers/`` can override\n   58      bundled profiles without editing repo code.\n   59      \"\"\"\n   60      _REGISTRY[profile.name] = profile\n   61      for alias in profile.aliases:\n   62          _ALIASES[alias] = profile.name\n   63  \n   64  \n   65  def get_provider_profile(name: str) -> ProviderProfile | None:\n   66      \"\"\"Look up a provider profile by name or alias.\n   67  \n   68      Returns None if the provider has no profile (falls back to generic).\n   69      \"\"\"\n   70      if not _discovered:",
        "omitted": "已截取 53-70 行，原始范围到 88 行。"
      },
      {
        "kind": "file",
        "display": "providers/__init__.py:140-190",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/providers/__init__.py",
        "relativePath": "providers/__init__.py",
        "start": 140,
        "end": 190,
        "snippet": "  140  def _discover_providers() -> None:\n  141      \"\"\"Populate the registry by importing every provider plugin.\n  142  \n  143      Order:\n  144        1. Bundled plugins at ``<repo>/plugins/model-providers/<name>/``\n  145        2. User plugins at ``$HERMES_HOME/plugins/model-providers/<name>/``\n  146        3. Legacy per-file modules at ``providers/<name>.py`` (back-compat)\n  147  \n  148      Each step imports its plugins, which call ``register_provider()`` at\n  149      module-level. Later steps win on name collision.\n  150      \"\"\"\n  151      global _discovered\n  152      if _discovered:\n  153          return\n  154      _discovered = True\n  155  \n  156      # 1. Bundled plugins — shipped with hermes-agent.\n  157      if _BUNDLED_PLUGINS_DIR.is_dir():",
        "omitted": "已截取 140-157 行，原始范围到 190 行。"
      },
      {
        "kind": "file",
        "display": "providers/README.md:29-53",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/providers/README.md",
        "relativePath": "providers/README.md",
        "start": 29,
        "end": 53,
        "snippet": "   29  ## How it wires in\n   30  \n   31  The registry is populated on first access. After that, every downstream\n   32  layer reads from it:\n   33  \n   34  - `hermes_cli/auth.py` extends `PROVIDER_REGISTRY` with every api-key\n   35    profile it sees (skipping `copilot`, `kimi-coding`, `kimi-coding-cn`,\n   36    `zai`, `openrouter`, `custom` — those need bespoke token resolution).\n   37  - `hermes_cli/models.py` extends `CANONICAL_PROVIDERS` and calls\n   38    `profile.fetch_models()` inside `provider_model_ids()`.\n   39  - `hermes_cli/doctor.py` adds a `/models` health check for each\n   40    `auth_type=\"api_key\"` profile.\n   41  - `hermes_cli/config.py` injects every `env_var` into\n   42    `OPTIONAL_ENV_VARS` so the setup wizard knows about it.\n   43  - `hermes_cli/runtime_provider.py` reads `profile.api_mode` as a fallback\n   44    when URL detection finds nothing.\n   45  - `agent/model_metadata.py` maps hostname → provider via\n   46    `profile.get_hostname()`.",
        "omitted": "已截取 29-46 行，原始范围到 53 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-012",
    "conclusion": "Memory Provider 有 system prompt、prefetch、sync_turn、tool schemas、tool call 等接口；MemoryManager 只允许一个外部 Provider 并隔离失败",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/agent/memory_provider.py:1-31`, `memory_provider.py:42-137`, `agent/memory_manager.py:244-340`, `plugins/memory/__init__.py:1-20`, `plugins/memory/__init__.py:67-181`",
    "confidence": "高",
    "verified": "",
    "note": "记忆系统",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager",
        "sub": "PluginContext / hooks",
        "role": "extension-point",
        "status": "source-verified",
        "detail": "插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Memory Manager",
        "sub": "built-in + one provider",
        "role": "state",
        "status": "official-supported",
        "detail": "内置记忆始终启用，外部 memory provider 一次只激活一个，并隔离失败。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager -> Memory Manager",
        "sub": "扩展记忆",
        "role": "registration",
        "status": "",
        "detail": "关系语义：扩展记忆。",
        "relation": "Plugin Manager 到 Memory Manager"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "run_conversation -> Memory Manager",
        "sub": "读写记忆",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：读写记忆。",
        "relation": "run_conversation 到 Memory Manager"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Memory Provider",
        "sub": "prefetch / sync / tool schemas",
        "role": "state",
        "status": "source-verified",
        "detail": "记忆参与 prompt、prefetch、turn sync 和可选 tool schema。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Conversation Loop -> Memory Provider",
        "sub": "记忆读写",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：记忆读写。",
        "relation": "Conversation Loop 到 Memory Provider"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "状态与记忆层",
        "sub": "SessionStore / profiles / MemoryManager",
        "role": "state",
        "status": "source-verified",
        "detail": "SessionStore / profiles / MemoryManager",
        "relation": "session key / profile / memory / cron DB"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Plugin Manager」、架构总览 / 节点「Memory Manager」、架构总览 / 连线「Plugin Manager -> Memory Manager」、架构总览 / 连线「run_conversation -> Memory Manager」。证据结论是：Memory Provider 有 system prompt、prefetch、sync_turn、tool schemas、tool call 等接口；MemoryManager 只允许一个外部 Provider 并隔离失败。图中的具体解释是：插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。；内置记忆始终启用，外部 memory provider 一次只激活一个，并隔离失败。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/agent/memory_provider.py:1-31",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/agent/memory_provider.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/agent/memory_provider.py",
        "start": 1,
        "end": 31,
        "snippet": "    1  \"\"\"Abstract base class for pluggable memory providers.\n    2  \n    3  Memory providers give the agent persistent recall across sessions.\n    4  The MemoryManager enforces a one-external-provider limit to prevent\n    5  tool schema bloat and conflicting memory backends.\n    6  \n    7  External providers (Honcho, Hindsight, Mem0, etc.) are registered\n    8  and managed via MemoryManager. Only one external provider runs at a\n    9  time.\n   10  \n   11  Registration:\n   12    Plugins ship in plugins/memory/<name>/ and are activated via\n   13    the memory.provider config key.\n   14  \n   15  Lifecycle (called by MemoryManager, wired in run_agent.py):\n   16    initialize()          — connect, create resources, warm up\n   17    system_prompt_block()  — static text for the system prompt\n   18    prefetch(query)        — background recall before each turn",
        "omitted": "已截取 1-18 行，原始范围到 31 行。"
      },
      {
        "kind": "file",
        "display": "memory_provider.py:42-137",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/memory_provider.py",
        "relativePath": "memory_provider.py",
        "start": 42,
        "end": 137
      },
      {
        "kind": "file",
        "display": "agent/memory_manager.py:244-340",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/agent/memory_manager.py",
        "relativePath": "agent/memory_manager.py",
        "start": 244,
        "end": 340,
        "snippet": "  244  class MemoryManager:\n  245      \"\"\"Orchestrates the built-in provider plus at most one external provider.\n  246  \n  247      The builtin provider is always first. Only one non-builtin (external)\n  248      provider is allowed.  Failures in one provider never block the other.\n  249      \"\"\"\n  250  \n  251      def __init__(self) -> None:\n  252          self._providers: List[MemoryProvider] = []\n  253          self._tool_to_provider: Dict[str, MemoryProvider] = {}\n  254          self._has_external: bool = False  # True once a non-builtin provider is added\n  255  \n  256      # -- Registration --------------------------------------------------------\n  257  \n  258      def add_provider(self, provider: MemoryProvider) -> None:\n  259          \"\"\"Register a memory provider.\n  260  \n  261          Built-in provider (name ``\"builtin\"``) is always accepted.",
        "omitted": "已截取 244-261 行，原始范围到 340 行。"
      },
      {
        "kind": "file",
        "display": "plugins/memory/__init__.py:1-20",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins/memory/__init__.py",
        "relativePath": "plugins/memory/__init__.py",
        "start": 1,
        "end": 20,
        "snippet": "    1  \"\"\"Memory provider plugin discovery.\n    2  \n    3  Scans two directories for memory provider plugins:\n    4  \n    5  1. Bundled providers: ``plugins/memory/<name>/`` (shipped with hermes-agent)\n    6  2. User-installed providers: ``$HERMES_HOME/plugins/<name>/``\n    7  \n    8  Each subdirectory must contain ``__init__.py`` with a class implementing\n    9  the MemoryProvider ABC.  On name collisions, bundled providers take\n   10  precedence.\n   11  \n   12  Only ONE provider can be active at a time, selected via\n   13  ``memory.provider`` in config.yaml.\n   14  \n   15  Usage:\n   16      from plugins.memory import discover_memory_providers, load_memory_provider\n   17  \n   18      available = discover_memory_providers()   # [(name, desc, available), ...]",
        "omitted": "已截取 1-18 行，原始范围到 20 行。"
      },
      {
        "kind": "file",
        "display": "plugins/memory/__init__.py:67-181",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/plugins/memory/__init__.py",
        "relativePath": "plugins/memory/__init__.py",
        "start": 67,
        "end": 181,
        "snippet": "   67  def _iter_provider_dirs() -> List[Tuple[str, Path]]:\n   68      \"\"\"Yield ``(name, path)`` for all discovered provider directories.\n   69  \n   70      Scans bundled first, then user-installed.  Bundled takes precedence\n   71      on name collisions (first-seen wins via ``seen`` set).\n   72      \"\"\"\n   73      seen: set = set()\n   74      dirs: List[Tuple[str, Path]] = []\n   75  \n   76      # 1. Bundled providers (plugins/memory/<name>/)\n   77      if _MEMORY_PLUGINS_DIR.is_dir():\n   78          for child in sorted(_MEMORY_PLUGINS_DIR.iterdir()):\n   79              if not child.is_dir() or child.name.startswith((\"_\", \".\")):\n   80                  continue\n   81              if not (child / \"__init__.py\").exists():\n   82                  continue\n   83              seen.add(child.name)\n   84              dirs.append((child.name, child))",
        "omitted": "已截取 67-84 行，原始范围到 181 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-013",
    "conclusion": "TUI gateway 通过 stdio JSON-RPC 连接 Node/Ink TUI 和 Python Agent，stdout 专用于协议，慢 handler 线程池处理，方法 registry 覆盖 session/prompt/approval/slash/tools/cron/skills/shell/browser",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/entry.py:1-23`, `entry.py:187-240`, `tui_gateway/server.py:37-75`, `server.py:137-180`, `server.py:364-464`, `server.py:2000`, `server.py:2233-2856`, `server.py:3140-3388`, `server.py:3869-3894`, `server.py:5658-6738`",
    "confidence": "高",
    "verified": "",
    "note": "TUI bridge",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多个用户界面和定时任务入口最终围绕 AIAgent 组织。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "接入层",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Interface Layer」、运行主链路 / 节点「入口事件」、分层视图 / 分层「接入层」。证据结论是：TUI gateway 通过 stdio JSON-RPC 连接 Node/Ink TUI 和 Python Agent，stdout 专用于协议，慢 handler 线程池处理，方法 registry 覆盖 session/prompt/approval/slash/tools/cron/skills/shell/browser。图中的具体解释是：多个用户界面和定时任务入口最终围绕 AIAgent 组织。；用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/entry.py:1-23",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/entry.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/entry.py",
        "start": 1,
        "end": 23,
        "snippet": "    1  import os\n    2  import sys\n    3  \n    4  # Guard against a local utils/ (or other package) in CWD shadowing installed\n    5  # hermes modules.  hermes_cli sets HERMES_PYTHON_SRC_ROOT before spawning this\n    6  # subprocess; inserting it first ensures the installed packages win.\n    7  _src_root = os.environ.get(\"HERMES_PYTHON_SRC_ROOT\", \"\")\n    8  if _src_root and _src_root not in sys.path:\n    9      sys.path.insert(0, _src_root)\n   10  # Strip '' and '.' — both resolve to CWD at import time and can let a local\n   11  # directory shadow installed packages.\n   12  sys.path = [p for p in sys.path if p not in {\"\", \".\"}]\n   13  \n   14  import json\n   15  import signal\n   16  import time\n   17  import traceback\n   18  ",
        "omitted": "已截取 1-18 行，原始范围到 23 行。"
      },
      {
        "kind": "file",
        "display": "entry.py:187-240",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 187,
        "end": 240
      },
      {
        "kind": "file",
        "display": "tui_gateway/server.py:37-75",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/tui_gateway/server.py",
        "relativePath": "tui_gateway/server.py",
        "start": 37,
        "end": 75,
        "snippet": "   37  # ── Panic logger ─────────────────────────────────────────────────────\n   38  # Gateway crashes in a TUI session leave no forensics: stdout is the\n   39  # JSON-RPC pipe (TUI side parses it, doesn't log raw), the root logger\n   40  # only catches handled warnings, and the subprocess exits before stderr\n   41  # flushes through the stderr->gateway.stderr event pump. This hook\n   42  # appends every unhandled exception to ~/.hermes/logs/tui_gateway_crash.log\n   43  # AND re-emits a one-line summary to stderr so the TUI can surface it in\n   44  # Activity — exactly what was missing when the voice-mode turns started\n   45  # exiting the gateway mid-TTS.\n   46  _CRASH_LOG = os.path.join(_hermes_home, \"logs\", \"tui_gateway_crash.log\")\n   47  \n   48  \n   49  def _panic_hook(exc_type, exc_value, exc_tb):\n   50      import traceback\n   51  \n   52      trace = \"\".join(traceback.format_exception(exc_type, exc_value, exc_tb))\n   53      try:\n   54          os.makedirs(os.path.dirname(_CRASH_LOG), exist_ok=True)",
        "omitted": "已截取 37-54 行，原始范围到 75 行。"
      },
      {
        "kind": "file",
        "display": "server.py:137-180",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 137,
        "end": 180
      },
      {
        "kind": "file",
        "display": "server.py:364-464",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 364,
        "end": 464
      },
      {
        "kind": "file",
        "display": "server.py:2000",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 2000,
        "end": 2000
      },
      {
        "kind": "file",
        "display": "server.py:2233-2856",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 2233,
        "end": 2856
      },
      {
        "kind": "file",
        "display": "server.py:3140-3388",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/server.py",
        "relativePath": "server.py",
        "start": 3140,
        "end": 3388
      }
    ],
    "sourceLimitNote": "还有 2 个位置未展开，可回到 evidence-index.md 查看完整列表。"
  },
  {
    "id": "H-014",
    "conclusion": "`cmd_chat` 处理 resume/continue、first-run setup、TUI 分支、startup env flags，并最终调用 `cli.main(**kwargs)`",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py:1624-1807`",
    "confidence": "高",
    "verified": "",
    "note": "CLI chat",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多个用户界面和定时任务入口最终围绕 AIAgent 组织。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Response / Delivery",
        "sub": "stdout / TUI / platform",
        "role": "external-dependency",
        "status": "source-verified",
        "detail": "根据入口形态将结果输出到终端、TUI 或 messaging platform。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "Conversation Loop -> Response / Delivery",
        "sub": "响应",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：响应。",
        "relation": "Conversation Loop 到 Response / Delivery"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "接入层",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Interface Layer」、运行主链路 / 节点「入口事件」、运行主链路 / 节点「Response / Delivery」、运行主链路 / 连线「Conversation Loop -> Response / Delivery」。证据结论是：`cmd_chat` 处理 resume/continue、first-run setup、TUI 分支、startup env flags，并最终调用 `cli.main(**kwargs)`。图中的具体解释是：多个用户界面和定时任务入口最终围绕 AIAgent 组织。；用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py:1624-1807",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/hermes_cli/main.py",
        "start": 1624,
        "end": 1807,
        "snippet": " 1624  def cmd_chat(args):\n 1625      \"\"\"Run interactive chat CLI.\"\"\"\n 1626      use_tui = getattr(args, \"tui\", False) or os.environ.get(\"HERMES_TUI\") == \"1\"\n 1627  \n 1628      # Resolve --continue into --resume with the latest session or by name\n 1629      continue_val = getattr(args, \"continue_last\", None)\n 1630      if continue_val and not getattr(args, \"resume\", None):\n 1631          if isinstance(continue_val, str):\n 1632              # -c \"session name\" — resolve by title or ID\n 1633              resolved = _resolve_session_by_name_or_id(continue_val)\n 1634              if resolved:\n 1635                  args.resume = resolved\n 1636              else:\n 1637                  print(f\"No session found matching '{continue_val}'.\")\n 1638                  print(\"Use 'hermes sessions list' to see available sessions.\")\n 1639                  sys.exit(1)\n 1640          else:\n 1641              # -c with no argument — continue the most recent session",
        "omitted": "已截取 1624-1641 行，原始范围到 1807 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-015",
    "conclusion": "ACP adapter 保留 stdout 给 JSON-RPC，加载 env，支持 check/setup/setup-browser，启动时 discover MCP tools 并运行 `HermesACPAgent`",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/acp_adapter/entry.py:1-14`, `entry.py:75-109`, `entry.py:111-181`, `entry.py:184-260`",
    "confidence": "高",
    "verified": "",
    "note": "ACP 入口",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多个用户界面和定时任务入口最终围绕 AIAgent 组织。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
        "relation": ""
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "接入层",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Interface Layer」、运行主链路 / 节点「入口事件」、分层视图 / 分层「接入层」。证据结论是：ACP adapter 保留 stdout 给 JSON-RPC，加载 env，支持 check/setup/setup-browser，启动时 discover MCP tools 并运行 `HermesACPAgent`。图中的具体解释是：多个用户界面和定时任务入口最终围绕 AIAgent 组织。；用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/acp_adapter/entry.py:1-14",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/acp_adapter/entry.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/acp_adapter/entry.py",
        "start": 1,
        "end": 14,
        "snippet": "    1  \"\"\"CLI entry point for the hermes-agent ACP adapter.\n    2  \n    3  Loads environment variables from ``~/.hermes/.env``, configures logging\n    4  to write to stderr (so stdout is reserved for ACP JSON-RPC transport),\n    5  and starts the ACP agent server.\n    6  \n    7  Usage::\n    8  \n    9      python -m acp_adapter.entry\n   10      # or\n   11      hermes acp\n   12      # or\n   13      hermes-acp\n   14  \"\"\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "entry.py:75-109",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 75,
        "end": 109
      },
      {
        "kind": "file",
        "display": "entry.py:111-181",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 111,
        "end": 181
      },
      {
        "kind": "file",
        "display": "entry.py:184-260",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/entry.py",
        "relativePath": "entry.py",
        "start": 184,
        "end": 260
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "H-016",
    "conclusion": "Cron jobs 存在 Hermes home 下，scheduler 每 60 秒由 gateway 后台调用，使用文件锁、profile context、toolset resolution、prompt injection scan 和 output/delivery 机制",
    "type": "source fact",
    "location": "`/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py:1-6`, `cron/jobs.py:37-47`, `cron/jobs.py:137-159`, `cron/jobs.py:187-240`, `cron/scheduler.py:1-9`, `scheduler.py:47-88`, `scheduler.py:90-132`, `scheduler.py:150-240`",
    "confidence": "高",
    "verified": "",
    "note": "cron",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Interface Layer",
        "sub": "CLI / TUI / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多个用户界面和定时任务入口最终围绕 AIAgent 组织。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Session / Config / DB",
        "sub": "profiles / session store / cron jobs",
        "role": "state",
        "status": "source-verified",
        "detail": "profile、session key、gateway store、cron jobs 和本地配置共同构成运行状态边界。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Messaging Gateway -> Session / Config / DB",
        "sub": "会话/投递状态",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：会话/投递状态。",
        "relation": "Messaging Gateway 到 Session / Config / DB"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "AIAgent -> Session / Config / DB",
        "sub": "配置/profile",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：配置/profile。",
        "relation": "AIAgent 到 Session / Config / DB"
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件",
        "sub": "CLI / TUI / Gateway / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口适配",
        "sub": "args / message / schedule",
        "role": "adapter",
        "status": "source-verified",
        "detail": "把不同入口转换成 AIAgent 可消费的上下文。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "flow",
        "viewLabel": "运行主链路",
        "viewDescription": "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
        "title": "入口事件 -> 入口适配",
        "sub": "输入",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：输入。",
        "relation": "入口事件 到 入口适配"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "接入层",
        "sub": "CLI / TUI / Gateway / ACP / Cron",
        "role": "adapter",
        "status": "source-verified",
        "detail": "CLI / TUI / Gateway / ACP / Cron",
        "relation": "CLI / TUI / Gateway / Cron"
      },
      {
        "kind": "分层",
        "viewId": "layers",
        "viewLabel": "分层视图",
        "viewDescription": "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
        "title": "状态与记忆层",
        "sub": "SessionStore / profiles / MemoryManager",
        "role": "state",
        "status": "source-verified",
        "detail": "SessionStore / profiles / MemoryManager",
        "relation": "session key / profile / memory / cron DB"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Interface Layer」、架构总览 / 节点「Session / Config / DB」、架构总览 / 连线「Messaging Gateway -> Session / Config / DB」、架构总览 / 连线「AIAgent -> Session / Config / DB」。证据结论是：Cron jobs 存在 Hermes home 下，scheduler 每 60 秒由 gateway 后台调用，使用文件锁、profile context、toolset resolution、prompt injection scan 和 output/delivery 机制。图中的具体解释是：多个用户界面和定时任务入口最终围绕 AIAgent 组织。；profile、session key、gateway store、cron jobs 和本地配置共同构成运行状态边界。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py:1-6",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py",
        "relativePath": "/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py",
        "start": 1,
        "end": 6,
        "snippet": "    1  \"\"\"\n    2  Cron job storage and management.\n    3  \n    4  Jobs are stored in ~/.hermes/cron/jobs.json\n    5  Output is saved to ~/.hermes/cron/output/{job_id}/{timestamp}.md\n    6  \"\"\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "cron/jobs.py:37-47",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py",
        "relativePath": "cron/jobs.py",
        "start": 37,
        "end": 47,
        "snippet": "   37  HERMES_DIR = get_hermes_home().resolve()\n   38  CRON_DIR = HERMES_DIR / \"cron\"\n   39  JOBS_FILE = CRON_DIR / \"jobs.json\"\n   40  \n   41  # In-process lock protecting load_jobs→modify→save_jobs cycles.\n   42  # Required when tick() runs jobs in parallel threads — without this,\n   43  # concurrent mark_job_run / advance_next_run calls can clobber each other.\n   44  _jobs_file_lock = threading.Lock()\n   45  OUTPUT_DIR = CRON_DIR / \"output\"\n   46  ONESHOT_GRACE_SECONDS = 120\n   47  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "cron/jobs.py:137-159",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py",
        "relativePath": "cron/jobs.py",
        "start": 137,
        "end": 159,
        "snippet": "  137  def _secure_dir(path: Path):\n  138      \"\"\"Set directory to owner-only access (0700). No-op on Windows.\"\"\"\n  139      try:\n  140          os.chmod(path, 0o700)\n  141      except (OSError, NotImplementedError):\n  142          pass  # Windows or other platforms where chmod is not supported\n  143  \n  144  \n  145  def _secure_file(path: Path):\n  146      \"\"\"Set file to owner-only read/write (0600). No-op on Windows.\"\"\"\n  147      try:\n  148          if path.exists():\n  149              os.chmod(path, 0o600)\n  150      except (OSError, NotImplementedError):\n  151          pass\n  152  \n  153  \n  154  def ensure_dirs():",
        "omitted": "已截取 137-154 行，原始范围到 159 行。"
      },
      {
        "kind": "file",
        "display": "cron/jobs.py:187-240",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/cron/jobs.py",
        "relativePath": "cron/jobs.py",
        "start": 187,
        "end": 240,
        "snippet": "  187  def parse_schedule(schedule: str) -> Dict[str, Any]:\n  188      \"\"\"\n  189      Parse schedule string into structured format.\n  190      \n  191      Returns dict with:\n  192          - kind: \"once\" | \"interval\" | \"cron\"\n  193          - For \"once\": \"run_at\" (ISO timestamp)\n  194          - For \"interval\": \"minutes\" (int)\n  195          - For \"cron\": \"expr\" (cron expression)\n  196      \n  197      Examples:\n  198          \"30m\"              → once in 30 minutes\n  199          \"2h\"               → once in 2 hours\n  200          \"every 30m\"        → recurring every 30 minutes\n  201          \"every 2h\"         → recurring every 2 hours\n  202          \"0 9 * * *\"        → cron expression\n  203          \"2026-02-03T14:00\" → once at timestamp\n  204      \"\"\"",
        "omitted": "已截取 187-204 行，原始范围到 240 行。"
      },
      {
        "kind": "file",
        "display": "cron/scheduler.py:1-9",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/cron/scheduler.py",
        "relativePath": "cron/scheduler.py",
        "start": 1,
        "end": 9,
        "snippet": "    1  \"\"\"\n    2  Cron job scheduler - executes due jobs.\n    3  \n    4  Provides tick() which checks for due jobs and runs them. The gateway\n    5  calls this every 60 seconds from a background thread.\n    6  \n    7  Uses a file-based lock (~/.hermes/cron/.tick.lock) so only one tick\n    8  runs at a time if multiple processes overlap.\n    9  \"\"\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "scheduler.py:47-88",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/scheduler.py",
        "relativePath": "scheduler.py",
        "start": 47,
        "end": 88
      },
      {
        "kind": "file",
        "display": "scheduler.py:90-132",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/scheduler.py",
        "relativePath": "scheduler.py",
        "start": 90,
        "end": 132
      },
      {
        "kind": "file",
        "display": "scheduler.py:150-240",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/scheduler.py",
        "relativePath": "scheduler.py",
        "start": 150,
        "end": 240
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-001",
    "conclusion": "多入口最终都构造或调用 `AIAgent`，说明 Hermes 的核心架构是入口适配层收敛到统一 Agent runtime",
    "type": "inference",
    "location": "H-003, H-004, H-013, H-015, H-016",
    "confidence": "",
    "verified": "",
    "note": "启动 CLI/TUI/Gateway/ACP 各跑一个最小 turn，确认 live behavior",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "H-003",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-003",
        "relativePath": "H-003",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-004",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-004",
        "relativePath": "H-004",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-013",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-013",
        "relativePath": "H-013",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-015",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-015",
        "relativePath": "H-015",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-016",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-016",
        "relativePath": "H-016",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-002",
    "conclusion": "built-in 和 plugin tools 都进入 ToolRegistry，再由 model_tools/toolsets 统一暴露和执行，说明工具系统是 registry-first",
    "type": "inference",
    "location": "H-005, H-006, H-007, H-008",
    "confidence": "",
    "verified": "",
    "note": "动态安装一个 plugin tool，观察 schema 和 dispatch",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "H-005",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-005",
        "relativePath": "H-005",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-006",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-006",
        "relativePath": "H-006",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-007",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-007",
        "relativePath": "H-007",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-008",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-008",
        "relativePath": "H-008",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-003",
    "conclusion": "通用插件、Provider、Memory、Platform 有不同 contract，说明 Hermes 倾向按问题域分层扩展，而不是单一 hook 模型",
    "type": "inference",
    "location": "H-008, H-010, H-011, H-012",
    "confidence": "",
    "verified": "",
    "note": "抽样一个 provider plugin、memory plugin、platform plugin 验证一致性",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "H-008",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-008",
        "relativePath": "H-008",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-010",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-010",
        "relativePath": "H-010",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-011",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-011",
        "relativePath": "H-011",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-012",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-012",
        "relativePath": "H-012",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-004",
    "conclusion": "Gateway 与 cron 都处理 profile/session/delivery/toolset，说明后台和消息入口共享不少运行边界",
    "type": "inference",
    "location": "H-009, H-016",
    "confidence": "",
    "verified": "",
    "note": "启动 gateway cron tick，观察实际 delivery 和 silent marker",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "H-009",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-009",
        "relativePath": "H-009",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "H-016",
        "path": "/Users/cheng/IdeaProjects/hermes-agent/H-016",
        "relativePath": "H-016",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-HA-001",
    "conclusion": "官方 README/docs 将 Hermes 定位为多入口 self-improving agent，覆盖 CLI/TUI/Gateway/cron/skills/memory/providers",
    "type": "官方事实",
    "location": "https://github.com/NousResearch/hermes-agent, https://hermes-agent.nousresearch.com/docs/developer-guide/architecture",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `H-001`, `H-003`, `H-004`, `H-013`-`H-016`",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官方 Toolsets 文档将 toolsets 描述为按平台/会话/任务控制工具能力的 bundle",
    "type": "官方事实",
    "location": "https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `H-005`, `H-006`, `H-007`",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官方 Plugins 文档说明插件可注册 tools、hooks、slash commands、platform/provider 等集成",
    "type": "官方事实",
    "location": "https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `H-008`, `H-010`, `H-011`, `H-012`",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官方 Messaging Gateway 文档强调 messaging session、allowlist/pairing、安全默认值和 delivery",
    "type": "官方事实",
    "location": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging",
    "confidence": "中",
    "verified": "部分",
    "note": "Gateway 结构已验证，平台安全细节待抽样",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官方 Memory Providers 文档说明 built-in memory 始终启用，但外部 provider 一次只激活一个",
    "type": "官方事实",
    "location": "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers",
    "confidence": "高",
    "verified": "是",
    "note": "对应 `H-012`",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Memory Manager",
        "sub": "built-in + one provider",
        "role": "state",
        "status": "official-supported",
        "detail": "内置记忆始终启用，外部 memory provider 一次只激活一个，并隔离失败。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "Plugin Manager -> Memory Manager",
        "sub": "扩展记忆",
        "role": "registration",
        "status": "",
        "detail": "关系语义：扩展记忆。",
        "relation": "Plugin Manager 到 Memory Manager"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
        "title": "run_conversation -> Memory Manager",
        "sub": "读写记忆",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：读写记忆。",
        "relation": "run_conversation 到 Memory Manager"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Memory Manager」、架构总览 / 连线「Plugin Manager -> Memory Manager」、架构总览 / 连线「run_conversation -> Memory Manager」。证据结论是：官方 Memory Providers 文档说明 built-in memory 始终启用，但外部 provider 一次只激活一个。图中的具体解释是：内置记忆始终启用，外部 memory provider 一次只激活一个，并隔离失败。；关系语义：扩展记忆。",
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
