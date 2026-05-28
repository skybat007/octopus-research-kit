# Design Philosophy

Status: draft
Last Updated: 2026-05-25

## 1. Product Philosophy: Gateway as Control Plane, Not Product Body

The README and the official Gateway architecture both describe OpenClaw as a personal AI assistant running on the user's own device. The Gateway is the control plane, while the product is the assistant. [C-001][EXT-OC-001] This shapes the architecture:

- The Gateway must be stable, observable, and configurable.
- User interaction can happen through existing channels, Control UI, CLI, mobile clients, and device nodes.
- Multi-channel operation is not an add-on feature; it is part of the product form.

Lesson for other systems: if the real value is "an assistant that continuously serves the user," do not restrict the product boundary to a single web UI or bot.

## 2. Local-First + Operator-Controlled Security

OpenClaw emphasizes running on the user's own device under the user's own rules, and it currently prioritizes security and safe defaults. [C-015] The README also states that main-session tools run on the host by default, while group/channel use should control risk through sandboxing and related configuration. [C-016]

This is a "high capability, explicit risk" design:

- Keep high capability for single-user local use.
- Require explicit DM policy, pairing, sandbox, and auth decisions for multi-user, remote, or group entries.
- Convenience should not hide important security decisions. [C-015]

## 3. Core Stays Plugin-Agnostic

The root `AGENTS.md` is explicit about architecture boundaries: core remains plugin-agnostic; plugins integrate through SDKs, manifest metadata, runtime helpers, and documented barrels; owner-specific behavior belongs in owner plugins. [C-003]

This is one of OpenClaw's core engineering ideas:

- Core owns generic extension seams.
- Provider, channel, and owner-specific policies stay in plugins.
- If a plugin cannot do something, prefer extending the plugin API instead of putting special cases into core.

## 4. Metadata Before Runtime

OpenClaw's plugin system reads the manifest before deciding whether to load runtime code. The manifest supports configuration validation, capability ownership, activation planning, UI hints, owner maps, and related control-plane needs without executing plugin code. [C-010]

The tradeoff behind this idea:

- Startup and diagnostics can be faster and safer.
- Configuration errors can surface before runtime activation.
- Plugin runtime loading becomes an explicit action instead of executing every plugin immediately.

## 5. Capability Ownership Before Hook Universality

OpenClaw supports many hooks, but both local docs and the official Plugin internals describe capability registration as the intended native-plugin direction. Legacy hook-only support is a compatibility baseline, not the preferred new design. [C-010][EXT-OC-003]

This matters because hook systems can easily become implicit business buses. OpenClaw's direction is:

- Express stable capabilities through capability/register contracts.
- Use hooks for lifecycle interception.
- Keep legacy hook-only support compatible, but avoid expanding it as the main design path.

## 6. Hot Paths Carry Resolved Facts

The root architecture rules require hot paths to carry prepared facts forward, such as provider id, model ref, channel id, target, capability family, and attachment class. Request-time broad discovery should be avoided. [C-003]

This is a maintainability and performance principle for complex platforms:

- Resolve facts early.
- Pass canonical values through context.
- Avoid making every layer guess, search, or normalize independently.

## 7. Explicit Trust at the Ingress Boundary

`agentCommand` is a trusted local/CLI entrypoint and defaults to owner trust. `agentCommandFromIngress` requires network entries to explicitly declare `senderIsOwner` and `allowModelOverride`. [C-008]

This is safer than "checking parameters deep in the stack and guessing permissions":

- Trust decisions are concentrated at the entry layer.
- Deep runtime code does not implicitly escalate permissions.
- Code audits can begin at the ingress boundary.

## 8. Terminal-First Setup

The VISION document says OpenClaw is currently terminal-first so users can see docs, auth, permissions, and security posture instead of having convenience hide them. [C-015]

The lesson for complex-system design: early complex systems do not always need a polished UI first. For critical security, authorization, and runtime-environment decisions, a CLI/wizard can be more transparent.

## 9. Design Tradeoff Summary

| Tradeoff | OpenClaw's Choice | Reusability |
|---|---|---|
| Capability vs security | High capability with explicit security boundaries | High |
| Core vs plugin | Generic core, plugin-owned owner policy | High |
| Hook vs capability | Capability first, hooks as supplement/compatibility | High |
| UI-first vs terminal-first | Terminal-first during setup | Medium |
| Single agent vs multi-agent | Default main agent, but multi-agent is a first-class model | High |
| Metadata vs runtime | Metadata first, runtime loaded by plan | High |
