# Skills

A skill is a set of local instructions stored in a `SKILL.md` file.

## Available skills

- open-source-tech-research: 开源技术调研 Skill。用于分析开源框架源码、生成技术架构文档、源码地图、核心流程、设计思想和重构启发。 (file: ./skills/open-source-tech-research/SKILL.md)

## How to use skills

- Trigger rule: If the user names `open-source-tech-research`, or asks to research, analyze, read, compare, or document an open-source framework or unfamiliar codebase, use it in that turn.
- Load rule: Open the skill's `SKILL.md` first, then only load additional files referenced there when needed.
- Path rule: Resolve relative paths relative to the selected skill directory indicated by the skill's `file` path.

# Tech Research

When the task is about technical research rather than implementation, follow `docs/tech-research-guide/TECH_RESEARCH_GUIDE.md`.

Use `docs/research/<framework-name>/` for each research target. A research directory should normally contain:

- `README.md`
- `research-brief.md`
- `source-map.md`
- `architecture.md`
- `key-abstractions.md`
- `extension-points.md`
- `runtime-flows.md`
- `design-philosophy.md`
- `comparison.md`
- `adoption-notes.md`
- `refactor-opportunities.md`
- `refactor-insights.md`
- `evidence-index.md`
- `research-review.md`
- `references/`

Key rule: important research conclusions must be tied to source evidence, such as files, classes, functions, tests, config, docs, line numbers, or commit/version information. Mark assumptions and inferences explicitly.

# Spec Coding

复杂开发任务进入 Coding 前，先阅读 `docs/spec-coding-guide/SPEC_CODING_GUIDE.md`。
