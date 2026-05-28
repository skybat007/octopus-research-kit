# External Research

## Strategy

This pass included live web research. Retrieval date: 2026-05-28.

## Search Scope

| Type | Coverage |
|---|---|
| Official sources | `a2ui.org`, Introduction, v0.9/v0.10 protocol, Roadmap, Renderers, Client Setup, Ecosystem Renderers |
| Official repository | `github.com/google/A2UI`, public status, issue/PR counts, stars/forks, quickstart/roadmap links |
| Integration sources | CrewAI A2UI docs, CopilotKit A2UI docs |
| Community/third-party sources | Used only to discover ecosystem entries; core conclusions do not depend on unofficial aggregators |

## 1. Official Sources

| Source | Link or Path | Main Content | Research Value | Confidence |
|---|---|---|---|---|
| A2UI homepage | `https://a2ui.org/` | A2UI lets agents generate interactive UI rendered natively and emphasizes not executing arbitrary code. | Confirms official positioning. | A |
| What is A2UI | `https://a2ui.org/introduction/what-is-a2ui/` | A2UI is a declarative UI protocol: agents generate JSON, any transport can carry it, and clients render with local components. Core values are safety, native feel, and portability. | Cross-checks local README/intro docs. | A |
| A2UI Protocol v0.9 | `https://a2ui.org/specification/v0.9-a2ui/` | v0.9 is a draft page defining `createSurface`, `updateComponents`, `updateDataModel`, `deleteSurface`, the transport contract, and prompt-generate-validate loop. | Aligns with local `specification/v0_9` and confirms the implementation line. | A |
| A2UI Protocol v0.10 | `https://a2ui.org/specification/v0_10/docs/a2ui_protocol/` | v0.10 draft keeps the streaming JSON protocol axis and adds/reorganizes capabilities, metadata, action response, and related concepts. | Shows that v0.10 is online as draft, while this source pass remains v0.9-focused. | A |
| Roadmap | `https://a2ui.org/roadmap/` | v0.9 is marked current, feature complete, supported; v0.10/v1.0 are draft; v1.0 is targeted for Q4 2026. | Adds current official status and version planning. | A |
| Renderers Reference | `https://a2ui.org/reference/renderers/` | Renderer responsibilities include buffering/lifecycle/render/action; React/Lit/Angular/Flutter are maintained renderers; compliant renderers support adjacency list, data binding, incremental messages, and user actions. | Links directly to `web_core` and React renderer source verification. | A |
| Client Setup | `https://a2ui.org/guides/client-setup/` | React/Lit/Angular/Flutter support v0.8/v0.9; web renderers share `@a2ui/web_core`; custom catalog is the contract between agent and renderer. | Strengthens the conclusion that `web_core` and catalog are architecture centers. | A |
| Ecosystem Renderers | `https://a2ui.org/ecosystem/renderers/` | Lists community renderers and related projects; notes that community renderers are maintained by their authors. | Helps bound ecosystem maturity and extension risk. | A |
| GitHub repository | `https://github.com/google/A2UI` | Public repository, Apache-2.0; at retrieval it showed about 15k stars, 1.2k forks, 196 issues, 104 pull requests, and README links to quickstart, composer, theater, and roadmap. | Background for version, maintenance, and ecosystem attention. | A/B |

## 2. Project Collaboration and Integration Sources

| Source | Link or Path | Main Point | Time/Version | Confidence | Needs Source Verification |
|---|---|---|---|---|---|
| CrewAI A2UI docs | `https://docs.crewai.com/en/learn/a2ui` | CrewAI presents A2UI as an A2A extension: server scans agent output and wraps valid messages as `application/json+a2ui` DataParts; client injects A2UI instructions/catalog and tracks surface state. | Page showed CrewAI v1.14.0; retrieved 2026-05-28 | B | Yes; local SDK/A2A parts show a similar mechanism |
| CopilotKit A2UI docs | `https://docs.copilotkit.ai/google-adk/generative-ui/a2ui` | CopilotKit describes A2UI as a Google-led declarative Generative UI specification and distinguishes dynamic schema from fixed schema. | Retrieved 2026-05-28 | B | Partly; repository includes AG UI/CopilotKit quickstart links, but this pass did not run them |

## 3. Community and Third-Party Sources

| Source | Author/Origin | Main Point | Confidence | Needs Source Verification |
|---|---|---|---|---|
| A2UI ecosystem renderer list | Official A2UI ecosystem page | Community renderers or related projects exist for Android, React Native, SwiftUI, Vue, ShadCN, and others, but maintenance state must be checked per project. | A/B | Yes; ecosystem background only |
| Unofficial aggregators and Reddit discussions | Community | Mostly repeat the positioning that A2UI is Google's open-source agent UI protocol. | C | Not used for core conclusions |

## 4. Key External Claims

| External Claim | Source | Source-Verification Question | Verification Status | Conclusion |
|---|---|---|---|---|
| A2UI is a protocol, not a general frontend framework; the agent sends JSON and the client renders natively. | What is A2UI, README | Do local README, intro docs, and renderer docs agree? | Verified | They agree, and renderer/catalog source reflects the same boundary. |
| v0.9 is the main implementation line, while the online spec page still says Draft and the Roadmap says current/feature complete/supported. | v0.9 protocol, Roadmap | Is the local source mainly v0.9? | Verified | Local renderer/SDK main implementation is v0.9-centered; status wording must preserve both signals. |
| v0.10 exists online as draft documentation. | v0.10 protocol | Does the local repo include a v0.10 directory? | Verified | Local `specification/v0_10` exists, but this pass did not do source-level v0.10 research. |
| Web renderers share `@a2ui/web_core`. | Client Setup | Does local `renderers/web_core` own message/state/binding? | Verified | Verified through `MessageProcessor`, `DataModel`, and `GenericBinder`. |
| React/Lit/Angular/Flutter are maintained/stable renderers. | Roadmap, Renderers, Client Setup | Does the repo contain matching renderer/package directories? | Partly verified | React/web_core were deeply verified; Lit/Angular/Flutter were structurally confirmed only. |
| Custom catalog is the agent/renderer contract, and production should define its own components/functions. | Client Setup, v0.9 protocol | Does local Catalog runtime and SDK support custom catalog? | Verified | `Catalog`, `assemble_catalog.py`, and `A2uiSchemaManager` support this mode. |
| A2A, AG UI, SSE, WebSocket, REST/MCP can serve as transports. | v0.9/v0.10 protocol | Does the local SDK include A2A converters/parts? | Verified | A2A parts/converters were verified; AG UI/REST/MCP were not run. |
| CrewAI/CopilotKit have A2UI integration docs. | CrewAI, CopilotKit | Does the A2UI repository provide corresponding bridges or samples? | Partly verified | Local source includes A2A/ADK/CopilotKit quickstart links; this pass did not run third-party integrations. |

## 5. External/Source Differences or Wording Drift

| External Claim | Local Source/Docs | Judgment | Follow-Up |
|---|---|---|---|
| Roadmap: v0.9 is current, feature complete, and supported. | Local README still says v0.8 public preview/evolving; v0.9 protocol docs say Draft. | Current official status and older repository wording coexist. | Report both: implementation analysis is pinned to the fixed commit, while current status is supplemented by the Roadmap. |
| Roadmap: React renderer is stable. | Local React package and tests exist, with package version `0.10.0`. | Broadly consistent with source structure. | React deep dive is complete. |
| Ecosystem: many community renderers. | These community projects are not in the local repository. | Ecosystem background only, not implementation evidence. | Adoption notes mark maintenance verification as separate work. |
| CopilotKit docs mix older/newer operation names. | Local v0.9 spec uses `createSurface`, `updateComponents`, `updateDataModel`, `deleteSurface`. | Third-party integration docs may support multiple versions or be out of sync. | Core protocol conclusions rely on A2UI official specs and local source. |

## 6. Source Boundaries

- Core implementation analysis is pinned to source snapshot `e05dd9699dea21ba832059acb680f71022dd5a77`.
- GitHub issues, PRs, and discussions were only checked for entry points and rough counts; they were not triaged one by one.
- CrewAI/CopilotKit materials are ecosystem and integration context; their examples were not run.
- v0.10/v1.0 are version-planning background only in this pass, not source-level delta research.
