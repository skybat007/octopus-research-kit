# Glossary

## Research Brief

The entry document for a research effort, also called the Research Charter. It defines the target, version, background, goals, scope, key questions, deliverables, and acceptance criteria.

## Source Map

A map of the source tree. It explains repository structure, core modules, entry points, tests, examples, and recommended reading order.

## Source Inventory

A structured source inventory, usually `references/source-inventory.json`, generated deterministically from local source by scripts. It records file counts, primary languages, top-level directories, build files, entry candidates, tests, examples, docs, and configuration. It is a reading aid, not an architecture conclusion.

## Research Dashboard

The browser reading entry for research, usually made of `dashboard.html` and `docs.html`. `dashboard.html` organizes README, Markdown research documents, visual architecture diagrams, and evidence viewers. `docs.html` renders Markdown/JSON as UTF-8 to avoid browser encoding issues when opening raw `.md` files. The dashboard does not replace Markdown or add architecture conclusions. Process materials such as `references/source-inventory.json` are not shown as first-level reading entries by default.

## Visual Architecture

An interactive architecture view, usually made of `visual/architecture.html`, `visual/architecture.visual.js`, `visual/evidence.html`, and `visual/evidence.visual.js`. It supports complex layered diagrams, multi-view architecture diagrams, flow diagrams, and extension-point diagrams that are hard to express in Markdown/Mermaid. It visually complements `architecture.md`; it does not replace evidence indexes or source verification. Evidence IDs are hidden from the diagram surface by default and kept in the diagram design note, `architecture.visual.js`, `evidence.visual.js`, or `evidence-index.md`.

## External Research

Research over external materials. It records official docs, release notes, issues, PRs, discussions, community articles, and third-party analysis, along with credibility level and source-verification needs.

## Research Questions

A list of source-verifiable questions derived from external materials, repository docs, and user goals. It also records source-verification status.

## Runtime Flow

A runtime trace showing how one real call travels from an external entry point into core execution.

## Key Abstraction

An interface, class, function, data structure, lifecycle object, or protocol that carries a key design responsibility in the framework.

## Extension Point

A mechanism intentionally opened for external extension, such as hooks, plugins, providers, registries, middleware, tools, skills, adapters, or similar seams.

## Evidence Index

The evidence log for key conclusions and supporting evidence. It prevents unsupported inference.

## Adoption Notes

Notes about what to learn from the open-source framework, what can be adapted only with context, what should not be copied directly, applicable preconditions, and open validation questions.

## Research Review

A review document that checks whether versioning, scope, evidence, architecture diagrams, design philosophy, open questions, and adoption notes are reliable.

## Source Fact

A fact directly visible in source code, configuration, tests, or runnable examples.

## Official Fact

A fact stated by the official website, official README, official docs, official examples, or release notes.

## Doc Fact

A fact stated by repository docs or design docs. If the source is public official material, prefer `official fact`.

## Collaboration Fact

A traceable fact from an issue, PR, discussion, or commit message.

## Community Fact

A claim from third-party articles, videos, talks, or user practice reports. It must not be the only evidence for a core conclusion.

## Test Fact

A fact demonstrated by tests, examples, or benchmarks.

## Inference

A judgment derived from multiple facts. The reasoning chain must be explicit.

## Pending

Not enough evidence yet. Do not present it as a confirmed conclusion.
