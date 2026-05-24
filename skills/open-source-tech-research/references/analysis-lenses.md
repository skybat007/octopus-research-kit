# Analysis Lenses

Use these lenses to decide what to inspect. Choose only the lenses relevant to the framework and user goal.

## Architecture

- module boundaries
- dependency direction
- public API versus internal API
- runtime composition
- extension points
- plugin or provider model

## Lifecycle

- bootstrap
- configuration loading
- initialization
- execution
- shutdown
- cleanup

## Data and State

- domain model
- context propagation
- mutable versus immutable state
- cache and persistence
- serialization boundaries
- concurrency safety

## Runtime Flow

- user API to core execution
- CLI command to handler
- request to response
- scheduler to task execution
- event to listener
- graph/state machine transition

## Reliability

- error handling
- retry
- timeout
- cancellation
- idempotency
- observability

## Extensibility

- interfaces and abstract classes
- registry
- hooks
- middleware
- strategy/provider model
- code generation

## Refactor Learning

- what complexity the design isolates
- what boundaries are explicit
- what coupling remains
- what can be copied as a pattern
- what depends too much on the original ecosystem

## Comparison

- positioning
- runtime model
- tool or plugin model
- workflow or DAG support
- memory or context model
- engineering maturity
- enterprise integration cost

## Adoption

- directly reusable designs
- designs requiring adaptation
- designs to avoid copying
- mapping to the target system
- migration prerequisites
- phased validation plan
