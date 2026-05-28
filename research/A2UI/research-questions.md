# Research Questions

| ID | Question | Status | Conclusion Summary | Main Evidence |
|---|---|---|---|---|
| RQ-001 | What is A2UI's positioning? | Verified | A2UI is a protocol and implementation set where agents output declarative JSON UI and clients render it with local components. | EVD-001, EVD-002, EVD-003 |
| RQ-002 | What are v0.9 protocol objects? | Verified | v0.9 uses four server-to-client messages to manage surfaces, components, data model, and deletion lifecycle. | EVD-007, EVD-008, EVD-009 |
| RQ-003 | Why are components flattened? | Verified | A flat adjacency-list supports ID references, incremental updates, and LLM-friendly output. | EVD-004, EVD-005, EVD-016 |
| RQ-004 | Where is the core React renderer logic? | Verified | React mainly adapts components; state, binding, action, and catalog logic mostly live in `web_core`. | EVD-014, EVD-015, EVD-017, EVD-018 |
| RQ-005 | How does data binding work? | Verified | JSON Pointer, DataModel, DataContext, and GenericBinder connect dynamic values, setters, template child lists, and validation to the data model. | EVD-011, EVD-019, EVD-020, EVD-021 |
| RQ-006 | How does user interaction return to the agent? | Verified | GenericBinder turns actions into closures, resolves context at trigger time, SurfaceModel dispatches client actions, and the sample shell sends them to the agent. | EVD-012, EVD-022, EVD-023, EVD-031 |
| RQ-007 | What boundary does Catalog define? | Verified | Catalog defines component schema, function schema/implementation, and theme schema. Renderer capabilities can expose supported catalogs, and the SDK can select or inline catalogs. | EVD-013, EVD-024, EVD-025, EVD-026 |
| RQ-008 | Is the Python SDK only prompt assistance? | Verified | No. It includes schema manager, catalog selection, JSON repair, validation, ADK toolset, and A2A part/event conversion. | EVD-027, EVD-028, EVD-029, EVD-030 |
| RQ-009 | How mature is the current state? | Verified | Local README keeps public preview/evolving wording; the official Roadmap marks v0.9 current/feature complete/supported and v0.10/v1.0 as draft/target versions. | EVD-006, EVD-010, EVD-034, EVD-037, EVD-038 |
| RQ-010 | What should production adoption improve first? | Inference | Prioritize custom catalog, stronger validator/conformance, transport/action policy, explicit data-model sync policy, and protocol-version pinning. | EVD-013, EVD-026, EVD-030, EVD-033, EVD-040 |
| RQ-011 | What is the ecosystem/integration state? | Partly verified | Official pages list renderers and ecosystem entries; CrewAI/CopilotKit have integration docs, but this pass did not run third-party integrations. | EVD-039, EVD-041, EVD-042, EVD-043 |

## Still to Verify

- Cross-renderer behavior consistency needs a fuller conformance and UI test matrix.
- The v0.10 specification directory exists, but v0.10 was not the main target of this pass. Future protocol tracking needs a separate delta research pass.
- Real A2A/AG UI interoperability needs a concrete agent server and host client.
- GitHub issues, PRs, and discussions were checked only for public status and entry points, not individually triaged.
