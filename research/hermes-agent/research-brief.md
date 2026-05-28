# Research Brief

## 1. Research Target

| Item | Value |
|---|---|
| Project | Hermes Agent |
| Project identifier | `hermes-agent` |
| Code source | `https://github.com/NousResearch/hermes-agent.git` |
| Snapshot | branch `main`, commit `cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| Package version | `hermes-agent` `0.14.0` |
| Language/runtime | Python `>=3.11`; some TUI/Web/Browser capabilities use the Node ecosystem |
| Official docs | GitHub README, https://hermes-agent.nousresearch.com/docs |
| External-source scope | Official GitHub, official docs, release-file entries; no independent third-party articles in this pass |

## 2. Research Goals

This pass aims to understand Hermes Agent as an open-source Agent framework and produce reusable learning material:

- How CLI, TUI, Messaging Gateway, ACP, and cron enter the same Agent runtime.
- How model providers, tools, plugins, memory, sessions, and context compression are organized.
- How multi-channel messaging, session identity, streaming output, and delivery boundaries are handled.
- Which design tradeoffs are worth learning from and which complexity needs caution.

## 3. Core Questions

| ID | Question | Output |
|---|---|---|
| Q1 | What are the main project entries, runtime entries, and package structure? | source-map.md |
| Q2 | How do `AIAgent` and `run_conversation` handle requests from many entries? | architecture.md, runtime-flows.md |
| Q3 | How are tools registered, filtered, exposed to the model, and executed? | key-abstractions.md, runtime-flows.md |
| Q4 | How are plugins, providers, memory, and platform extension points layered? | extension-points.md |
| Q5 | How does Gateway turn external messages into agent turns and handle sessions/delivery? | runtime-flows.md |
| Q6 | Which design ideas are useful for learning Agent frameworks? | design-philosophy.md, adoption-notes.md |

## 4. Scope

This pass covers:

- Repository structure, entry scripts, installation entries, and main directories.
- `AIAgent` initialization, conversation loop, tool calls, context compression, memory, and plugin hooks.
- `ToolRegistry`, toolsets, plugin tools, slash command registry.
- Provider Profile, Memory Provider, and Gateway Platform plugins.
- Gateway message pipeline, session model, adapter base, TUI gateway, and cron scheduler.

Out of scope:

- Functional details of every concrete tool implementation.
- Auth protocols and message API details for every platform adapter.
- Web/TUI frontend component design.
- Performance metrics, load testing, and real runtime logs.
- Concrete integration plans for business systems.

## 5. Deliverables

| Document | Acceptance Point |
|---|---|
| README.md | Quickly communicates project positioning and main conclusions |
| external-research.md | Records official sources, collaboration sources, external claims, and source-verification links |
| research-questions.md | Turns external claims and user goals into source-verification questions |
| source-map.md | Guides the next reader through entries and modules |
| architecture.md | Explains module boundaries and dependency direction |
| key-abstractions.md | Explains key classes/structures and lifecycles |
| extension-points.md | Explains registration, discovery, and execution boundaries of extension points |
| runtime-flows.md | Traces at least CLI, Gateway, and Tool Call flows |
| design-philosophy.md | Extracts reusable architecture ideas and tradeoffs |
| comparison.md | Gives comparison dimensions and first observations |
| adoption-notes.md | Produces a learning/adoption checklist |
| evidence-index.md | Makes each core conclusion traceable to official docs, source, tests, collaboration sources, or community sources |
| research-review.md | Marks coverage, risks, and remaining evidence gaps |

## 6. Method

- Pin code snapshot and entry information first.
- Add official-source research and turn important external claims into source-verification questions.
- Use `rg`, `find`, and `nl` for static source scanning.
- Assign evidence IDs to important conclusions to avoid impression-only descriptions.
- Distinguish official facts, source facts, repository-doc facts, collaboration facts, community facts, and inferences.
- Mark unverified runtime behavior as pending.
