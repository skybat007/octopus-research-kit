# Adoption Notes

## Good Adoption Scenarios

- An agent needs to generate structured interfaces, but the product cannot accept executing model-generated code.
- The frontend already has a design system, and the agent should only compose UI within that vocabulary.
- The same agent UI output needs to be reused across multiple clients or renderers.
- Task-oriented UI such as forms, cards, lists, confirmation flows, data views, or light interaction panels.
- An A2A agent needs to return renderable UI in messages instead of plain text.

## Poor Direct-Adoption Scenarios

- Arbitrarily complex frontend logic, dynamic graphics, games, rich animation, or fully free layout.
- Browser-like rendering of arbitrary HTML/CSS/JS.
- A core product path that needs long-term API compatibility while UI capabilities are still moving.
- Open-ended applications that cannot define a clear catalog or action policy.

## Production Adoption Guidance

### 1. Pin Protocol Version

Use v0.9 as the PoC baseline and make every payload carry an explicit version. The official Roadmap marks v0.9 current/supported, but v0.10/v1.0 remain draft/planned. Application code should wrap A2UI behind a version adapter instead of depending on protocol details throughout business code.

### 2. Define a Custom Catalog

Do not rely on the Basic Catalog long term. A production catalog should at least include:

- Business component schemas.
- Action event allowlist.
- Function allowlist.
- URL/domain policy.
- Examples.
- Design-system token/theme schema.

### 3. Strengthen Validation

Beyond the SDK validator, the host should add:

- Surface/component count limits.
- Data-model size limits.
- Sensitive-field filtering for action context.
- Event/function permission checks.
- Policy for side-effect functions such as `openUrl`.
- Telemetry and rejection reasons.

### 4. Define DataModel Synchronization Policy

`sendDataModel` is convenient but can leak sensitive state. Recommended policy:

- Do not send full data models by default.
- Allowlist paths that can be sent.
- Prefer sending only necessary fields in action context.
- Classify user-input fields by privacy level.

### 5. Turn the React Shell Sample Into a Host SDK

Useful pieces from `samples/client/react/shell/src/App.tsx`:

- Initialize `MessageProcessor`.
- Register catalogs and action handler.
- Render each surface with `<A2uiSurface>`.
- Send actions to the agent.

For production, split the demo shell into:

- Transport client.
- Surface registry.
- Action policy.
- Error reporting.
- Catalog registry.
- Renderer host component.

### 6. Build Conformance

If extending multiple renderers or multiple language SDKs, first expand tests in the style of `agent_sdks/conformance/`:

- Parser cases.
- Validator cases.
- Catalog-selection cases.
- Dynamic-list binding cases.
- Action-context cases.
- Input round-trip cases.

## Reusable Architecture Patterns

- Schema/catalog-driven agent UI capability.
- Client-side renderer as safe interpreter.
- Data model + JSON Pointer as a shared agent/client state language.
- Generic binding layer separating protocol fields from UI component props.
- Capabilities handshake that lets the agent generate to client capability.
- Validator that checks not only schema, but also component topology.

## Main Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Protocol still evolving | API changes can break payload/renderer compatibility | Pin version, wrap adapters, track v0.10 |
| Weak catalog design | Agent output does not match product or security policy | Design catalog before connecting the agent |
| Data-model leakage | Action or `sendDataModel` sends sensitive information | Path allowlist, field redaction, full-sync disabled by default |
| Renderer differences | Multi-client behavior diverges | Conformance plus snapshot/integration tests |
| Function side effects | Capabilities such as `openUrl` can be abused | Host policy and permission prompt |
| LLM output drift | Invalid JSON or topology errors | SDK prompt, parse repair, validator, rejection loop |

## Recommended PoC Path

1. Pick a narrow business scenario, such as "order details + action confirmation."
2. Define a custom catalog with 5-8 business components.
3. Register component implementations in React.
4. Use the Python SDK to generate system prompt and validator.
5. Connect a demo agent through A2A DataPart or SSE.
6. Add action allowlist and data-model allowlist.
7. Freeze expected behavior with conformance cases.
