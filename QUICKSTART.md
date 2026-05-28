# Quickstart

This guide helps you start an open-source framework research effort quickly.

## 1. Choose a Research Target

First, make the target explicit. For example:

```text
I want to study LangGraph's state-graph execution model.
I want to study the Spring Framework Bean lifecycle.
I want to study Vue's reactivity system.
I want to study Netty's Reactor threading model.
```

Try to include:

- Code source: a local path or GitHub repository
- Version: tag, commit, release, or current branch
- Goal: learn the architecture, understand design philosophy, trace a runtime flow, or capture reusable design patterns

## 2. Create a Research Directory

Create one directory per framework under `research/`:

```text
research/<framework-name>/
```

Recommended minimum contents:

```text
README.md
research-brief.md
external-research.md
research-questions.md
source-map.md
architecture.md
visual/
  architecture.html
  architecture.visual.js
  evidence.html
  evidence.visual.js
key-abstractions.md
extension-points.md
runtime-flows.md
design-philosophy.md
comparison.md
adoption-notes.md
evidence-index.md
research-review.md
references/
```

You can copy starter templates from `docs/tech-research-guide/templates/`.

## 3. Write the Research Brief First

`research-brief.md` is the contract for one research effort. It answers:

- Why this target is being studied
- Which modules are in scope
- Which modules are out of scope
- Which key questions must be answered
- Which documents must be produced
- What evidence standard conclusions must meet

You can also think of it as the Research Charter: define what this research must make clear before reading source broadly.

If the goal is still unclear, write open questions first instead of jumping into large-scale source reading.

## 4. Use the Research Skill

When asking an agent to analyze open-source source code, produce architecture documents, or extract design philosophy, trigger:

```text
open-source-tech-research
```

Example:

```text
Use open-source-tech-research to analyze /path/to/langgraph's state-graph execution model and generate research documents under research/langgraph/.
```

## 5. Pin Evidence

Every important conclusion should trace back to evidence:

- File paths
- Classes, functions, configuration, or tests
- Line numbers or stable anchors
- Official docs, README, release notes, issues, PRs, or community references
- Whether the conclusion is a source fact, official fact, community fact, or evidence-backed inference

Record this in:

```text
evidence-index.md
```

If local source is available, generate a structured source inventory first:

```bash
node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source
```

`--source-root` is a runtime input only. Generated outputs should not contain personal absolute local paths.

## 6. Generate Reading Entry Points

For complex research efforts, generate the dashboard, UTF-8 Markdown reader, visual architecture diagram, and evidence viewer:

```bash
node docs/tech-research-guide/scripts/build-evidence-visual.js research/<framework-name> --source-root /absolute/path/to/source
node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>
node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>
```

The dashboard is a reading entry point, not a new knowledge source. Core conclusions remain in Markdown and `evidence-index.md`.

## 7. Capture Adoption Notes

The final research step is not "summarize it." It is to answer:

- Which patterns are worth adopting
- Which designs should not be copied directly
- Which ideas need context-specific adaptation
- Which questions still require runtime checks, test verification, or more external research

Use:

```text
adoption-notes.md
```

## More Entry Points

- [Tech Research Guide](docs/tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [AI Tech Research Quickstart](docs/tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [Template directory](docs/tech-research-guide/templates/)
- [Example research directory](research/example-framework/README.md)
- [Research skill](skills/open-source-tech-research/SKILL.md)
