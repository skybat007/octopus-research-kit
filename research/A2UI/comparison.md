# Comparison

## Comparison Boundary

This pass includes web research over the official site, GitHub, Roadmap, and integration docs, but it does not benchmark the latest versions of competing projects. External comparison is therefore limited to architecture-level observations. More reliable comparison comes from inside the repository: the v0.8.1 to v0.9 evolution guide, A2A/AG UI binding docs, React sample, and renderer implementation.

## A2UI vs Direct HTML/JS Generation

| Dimension | A2UI | Direct HTML/JS |
|---|---|---|
| Security boundary | Agent outputs JSON; host only executes local catalog implementations | Agent may generate scripts, styles, and DOM behavior, requiring extra sandboxing |
| Verifiability | JSON Schema + validator + catalog | HTML/JS is harder to validate and has a larger behavior space |
| Native feel | Renderer maps to React/Flutter/native components | Often web-view or iframe oriented |
| Multi-client reuse | One protocol can be implemented by many renderers | HTML/JS reuse is weaker on non-web clients |
| Expressiveness | Catalog-limited | More expressive, but riskier |

Conclusion: A2UI is better for safe, controlled, design-system-constrained agent UI. It is less suitable for letting agents freely create arbitrary UI, animation, or frontend logic.

## A2UI v0.8.1 vs v0.9

| Dimension | v0.8.1 | v0.9 |
|---|---|---|
| Generation strategy | More structured-output-first | Prompt-first, with schema/post-validation more important |
| Messages | Older messages such as `beginRendering` | `createSurface`, `updateComponents`, `updateDataModel`, `deleteSurface` |
| Schema organization | More centralized | Modular common types, server-to-client schema, and basic catalogs |
| Component discriminator | Older field shape | Flattened `component` property |
| Root | Older convention | Explicit `root` component id rule |
| Catalog | Older integration | Clearer `catalogId`, catalog schema composition |

Conclusion: v0.9 is the main research surface for current code and docs. Production evaluation should start from v0.9 while tracking v0.10 evolution.

## A2UI vs A2A/AG UI

Repository docs treat A2A/AG UI as transport/binding layers, while A2UI is the UI payload protocol. In other words:

- A2A can carry A2UI DataParts.
- AG UI can be another event/message carrier.
- A2UI focuses on surfaces, components, data model, catalog, and renderer.

Conclusion: A2UI does not replace A2A. It fills the layer for "how renderable UI is represented inside messages."

## Basic Catalog vs Custom Catalog

| Dimension | Basic Catalog | Custom Catalog |
|---|---|---|
| Goal | General, portable, quick start | Business/design-system production use |
| Components | Generic components such as Text, Image, Row, Column, Card, Button, TextField | Orders, approvals, reports, charts, business forms, and similar domain components |
| Security policy | General constraints | Can add business action, URL, and field policy |
| LLM prompt | Generic examples | Domain examples |
| Production fit | Useful fallback | Recommended main path |

Conclusion: Basic Catalog is good for learning and demos. Production value comes from defining your own catalog with the same mechanism.

## React Renderer vs web_core

| Dimension | React renderer | web_core |
|---|---|---|
| Responsibility | Render React components and provide Basic Catalog React implementations | Message processing, state model, data binding, actions, and catalog runtime |
| Reuse value | Direct use in React projects | Useful for multiple web renderers or custom renderer work |
| Complexity | Relatively thin | Where core complexity lives |

Conclusion: Studying A2UI should not stop at React components; the real architecture center is `web_core`.
