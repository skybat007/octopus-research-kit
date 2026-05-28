# Design Philosophy

## 1. Safe Like Data, Expressive Like Code

README clearly positions A2UI as "the agent sends declarative JSON intent, and the client renders it with a native component library." The design philosophy is that the agent does not execute arbitrary code or directly control DOM/native UI; it outputs verifiable data structures.

Source support:

- JSON Schema constrains messages and component fields.
- Catalog defines available components and functions.
- Validator checks schema, topology, and paths.
- Renderer only executes locally registered component/function implementations.

## 2. Renderer as Browser, Catalog as DOM/Capability Boundary

Official renderer docs compare the renderer to a browser: it parses messages, manages lifecycle, renders native UI, and handles user interaction. A2UI does not expose "browser power" directly to the agent; it exposes host-supported components and functions through a catalog.

Reusable idea: when building agent UI, do not let the agent select arbitrary frontend code. Give it a strict, business-auditable UI vocabulary.

## 3. Prompt-First but Schema-Backed

The v0.9 evolution guide describes a shift from structured-output-first to prompt-first, while schema became more modular. This is a pragmatic tradeoff: LLMs can more easily generate complex UI from prompt examples, but post-generation validation becomes more important.

This design does not abandon schema. It uses schema for:

- Prompt injection.
- Catalog instructions.
- Tool-result validation.
- Renderer message validation.
- Conformance.

## 4. Flat Graph Over Nested Trees

A2UI chooses a flat component list plus ID refs instead of deeply nested JSON. This supports two goals:

- More stable LLM generation: components can be declared one by one without maintaining deep bracket nesting.
- Natural streaming/patching: root or shell can arrive first, then children can be filled incrementally.

This judgment is supported by the components docs, v0.9 protocol, and renderer `DeferredChild` implementation.

## 5. Data Model Is Shared Context, Not Hidden Widget State

Data binding docs and `DataModel` source show that A2UI encourages UI state to live in a JSON data model and binds UI through JSON Pointer. Input components can write back to the data model, and actions can send selected context to the agent.

This lets agent and client collaborate around the same data model, but it also introduces production questions: which data can be sent back, when, and whether it contains sensitive information all require policy.

## 6. Local Functions Are Host-Controlled Capabilities

Actions docs distinguish events from local functions. Events go to the agent; functions execute locally in the renderer. Basic functions include validation/formatting and `openUrl`. This means A2UI's function mechanism does not let the agent run code; it lets the host pre-register limited capabilities.

In production, local functions should be treated as capability policy, not ordinary utility functions.

## 7. Multi-Transport, Multi-Renderer Portability

A2UI is not bound to a transport or to React. README and renderer docs emphasize that it can be carried through A2A, AG UI, or other transports and mapped to web, Flutter, or other host frameworks.

Reusable idea: protocol layer only cares about ordered messages and metadata; renderer layer cares about local components; SDK layer cares about generation and validation. Separating the three makes the system easier to extend across clients.

## 8. Preview-First Evolution

The local README still keeps v0.8 public-preview wording, while the code has a v0.9 main implementation and a v0.10 directory. The official Roadmap marks v0.9 current/supported and v0.10/v1.0 as draft/target versions. For users, the right approach is to learn the architecture and abstractions, then pin a version and wrap compatibility when adopting in production, rather than depending directly on unconfirmed evolving APIs.

## Design Principles Worth Learning

- Give the agent a small and clear expression space.
- Design the UI-generation protocol together with validator, renderer, and tests.
- Data binding, actions, and validation should be first-class protocol concepts, not scattered frontend glue code.
- Catalog should be the shared contract among business design system, agent prompt, and renderer implementation.
- Streaming UI needs incremental support in the data structure, not only transport chunking.
