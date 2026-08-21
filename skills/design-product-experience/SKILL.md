---
name: design-product-experience
description: Shape and validate a software product's information architecture, visual direction, interaction flows, interface states, responsiveness, accessibility, and optional minimal prototype before production implementation. Use after requirements are accepted, when interaction or visual behavior remains uncertain, when a user requests a prototype, or when existing designs and product behavior conflict.
---

# Design Product Experience

Validate what users will see and do early enough for people to change the product before backend work hardens the wrong behavior.

## Confirm the boundary

1. Read project instructions, `THE-FIRST.md`, accepted requirements, existing designs, design-system sources, current UI, and relevant feedback rules.
2. Confirm the requirement phase is accepted before producing implementation-ready experience decisions. For discussion-only exploration, keep proposals explicitly unaccepted.
3. Identify conflicts between requirements, designs, existing behavior, and component-library constraints. Ask the user to resolve material product conflicts.
4. Reuse established visual language and interaction patterns unless the accepted requirement calls for change.

## Define the experience

Cover only the surfaces relevant to accepted scope:

- Information architecture, navigation, entry points, and hierarchy.
- Primary and secondary user flows.
- Screen, page, panel, modal, or command states.
- Loading, empty, error, success, partial, disabled, permission, cancellation, and recovery behavior.
- Desktop, mobile, responsive, native, keyboard, and assistive-technology expectations.
- Content hierarchy, density, typography direction, color direction, and brand cues.
- Existing design-system or component-library behavior that must remain usable.
- Interaction feedback, destructive confirmations, focus management, and accessibility basics.

Describe observable behavior rather than inventing production component boundaries. Record business and visual component decisions for `$design-technical-solution`.

## Decide whether to prototype

Recommend a prototype only when it is cheaper than discussing or implementing an unresolved interaction. State the exact questions it will answer.

The user may choose no prototype. Record that choice and the evidence used instead.

When a prototype is useful:

1. Reuse an existing frontend's display tooling when this can remain isolated from production data and backend behavior.
2. For a simple new project, use plain HTML, CSS, and JavaScript.
3. Use Vue 3 and Vite only when interaction complexity materially benefits from component state and the tooling is already available or separately authorized.
4. Use static mock data only.
5. Do not implement a production backend, authentication system, database, infrastructure, or real external side effect.
6. Keep prototype tooling independent from the eventual production stack decision.
7. Before installing any missing prototype tool, explain its purpose, exact command, scope, verification, and rollback, then obtain explicit consent.

Do not make a prototype look complete by hiding missing states. Include the smallest set of states needed to validate the target interaction.

## Prefer a usable frontend or client

For user-facing products, default to a frontend/UI or game client that people can operate and review before, or alongside, substantial backend implementation. It must cover the accepted primary flow and its material states with mock or contract-shaped data; it is not a screenshot-only demo.

Use the accepted interface to expose missing decisions early, collect corrections, and stabilize the client-to-server contract. For games, treat the playable client, interaction, and UI as this surface. In the exceptional frontend-first path, a complete accepted client flow may define the backend work that follows; record the data, authority, and failure-state assumptions that still need production implementation.

Do not require a disposable prototype when an existing or planned production frontend/client can provide the same review surface. Do not claim mock-backed behavior is backend-complete, and do not let visual approval waive server authority, validation, security, persistence, or integration checks.

## Run human review

Provide a short review path that asks the user to exercise the key flow and inspect uncertain states. Collect feedback about outcomes and interaction, not merely visual preference.

When feedback arrives:

- Summarize the underlying intent.
- Propose a durable rule or a scoped exception.
- Update the experience source and acceptance check.
- Record the accepted rule through `$track-project-progress` so later slices reapply it.

The prototype is evidence, not final authority. Accepted user outcomes and current sources of truth override it. Production implementation should preserve accepted behavior without being required to copy prototype code or pixels.

## Reuse documentation

Update an existing design source first. When no source can hold the decisions, use project conventions and fall back to `docs/project/experience.md`. Put a new isolated prototype under the project's established prototype location, falling back to `prototype/`, and link it from `THE-FIRST.md`.

## Close the phase with a human gate

Apply `dialogue_mode` through `$using-the-first`. In `deep` mode, finish its focused co-creation checkpoint before presenting the experience for acceptance; in `fast` mode, ask only unresolved decisions that would materially change the product experience.

Present:

1. Accepted information structure and core flows.
2. Visual and interaction direction.
3. Required states and accessibility expectations.
4. Prototype status, review steps, and what it did or did not prove.
5. Business and visual component questions to resolve technically.
6. Updated sources and unverified boundaries.

Set the phase to `awaiting_user_acceptance`. After explicit acceptance, record it through `$track-project-progress` and route to `$design-technical-solution`.

Report the result, evidence, recommended user review, suggested next step, and the acceptance request.
