---
name: clarify-project-requirements
description: Clarify and baseline software project requirements before production design or implementation. Use for new projects, ambiguous feature requests, major scope changes, conflicting product sources, missing acceptance criteria, or when brand, engineering name, audience, platform, SEO, performance, security, privacy, accessibility, visual direction, prototype need, or scope boundaries are not yet accepted. Apply first-principles reasoning internally while speaking to users in plain language, and defer framework, database, API, hosting, and deployment questions when the initial product outcome is still vague.
---

# Clarify Project Requirements

Turn an idea into observable, accepted outcomes without disguising an unverified implementation choice as a requirement.

## Inspect before asking

1. Read applicable project instructions, `THE-FIRST.md`, and its requirement and experience sources.
2. Search existing PRDs, issues, roadmaps, user research, designs, schemas, tests, configuration, and current behavior.
3. Identify what each source governs, when it was accepted, and whether it conflicts with another source.
4. Answer discoverable questions from evidence. Ask the user only about intent, authority, trade-offs, missing constraints, and acceptance.
5. Stay read-only when the user requested discussion or design only.

Do not create a new PRD merely because the preferred template differs from the project's existing documents.

## Reason from outcomes

Maintain this reasoning chain internally:

`goal → verified facts → high-impact assumptions → constraints → observable behavior → minimum sufficient requirement → acceptance evidence`

Check each request:

- Remove proposed technologies from the sentence. What user or business outcome remains?
- Which statements have project or user evidence, and which are assumptions?
- Which assumption would reverse the project direction if false?
- Is the request describing an outcome, or prematurely selecting a mechanism?
- What must remain true in success, failure, and boundary cases?

Do not force the user to learn this vocabulary. Ask short, concrete questions and explain why a decision matters only when it changes scope or risk.

When the user does not yet know an answer, preserve it as an explicit unknown and offer a few outcome-oriented examples. Never make a default CRUD screen, framework, data store, or deployment shape stand in for an unconfirmed product requirement. For a vague initial idea, establish the outcome, audience, essential workflow, and success evidence before asking any production technology question. Ask for technology preferences only when they materially constrain the product or the project already has an accepted technical boundary.

## Use grill-me during requirements

Use this built-in adaptation of Matt Pocock's [grill-me](https://www.aihero.dev/skills-grill-me#skill-actions) whenever material requirement decisions remain. No separate skill installation is required. Unlike the standalone, explicitly invoked, stateless skill, this integration runs inside requirements and records confirmed decisions in the project's existing sources.

- Probe assumptions and consequences, not just the requested feature list: who needs the outcome, what happens on failure, where scope ends, and what would disprove success.
- Batch independent questions whose prerequisites are settled in the same round by default, following the [dialogue rules](../using-the-first/SKILL.md#choose-the-dialogue-depth). Number the questions so the user can answer them in one reply; follow dependent branches after their answers.
- Challenge inconsistent answers with a concrete counterexample and help the user choose; do not turn a recommendation or silence into agreement.
- When discussion cannot resolve an interaction, identify the smallest prototype or observation needed and route through the experience skill within existing authorization. Keep the requirement unknown until evidence resolves it.
- Stop questioning when material branches are resolved or explicitly deferred without blocking the accepted scope. Do not reopen settled branches or invent questions to fill a checkpoint.

Apply the [active progression loop](../using-the-first/SKILL.md#drive-the-next-action) after each answer. Show any remaining blocking question directly in the conversation; once resolved, baseline and continue within the original authorization without waiting for the user to say "start development".

## Build the minimum complete baseline

Adapt depth to the project, but resolve or explicitly defer these areas:

### Identity and audience

- Problem, target users, and the observable improvement.
- Brand or public product name.
- Engineering, package, repository, or application name.
- Stakeholders and who can accept the outcome.

Names may remain undecided, but record that state and whether it blocks technical or public work.

### Scope and behavior

- Must-have, should-have, deferred, and explicitly excluded outcomes.
- Main user flows and business rules.
- Empty, loading, error, permission, cancellation, and recovery behavior where relevant.
- Data ownership, lifecycle, import, export, and destructive actions.
- Integrations and externally controlled constraints.

### Product shape and quality

- Web, app, service, desktop, CLI, plugin, or a combination as a product need, not yet a framework choice.
- Whether public discovery and SEO are business requirements.
- User count, data scale, latency, throughput, availability, offline, compatibility, and localization expectations where they matter.
- Accessibility, security, privacy, audit, regulatory, and retention requirements.
- Visual direction, brand feeling, existing design system, and key interaction expectations.
- The uncertainty, if any, that a minimal prototype should resolve.

Do not demand invented numeric targets. When a number matters but is unknown, explain the decision it affects and help the user choose a realistic acceptance boundary.

## Define traceable acceptance

For each critical requirement, record:

- A stable reference. Reuse an existing issue, specification, or heading reference; create a minimal `REQ-###` only when no stable reference exists.
- The user-visible outcome.
- Preconditions and important failure behavior.
- Observable acceptance checks, with stable child references when one requirement has multiple independent checks.
- The authoritative source and accepting party.
- Whether it is accepted, proposed, deferred, or blocked.

Keep acceptance technology-neutral unless the technology itself is an explicit constraint.
Do not renumber an entire document merely to satisfy this workflow. Add references only where accepted implementation scope would otherwise be ambiguous.

## Reuse documentation

Apply this order:

1. Update the existing accepted requirement source.
2. If an external tracker is authoritative, update it only when authorized and link it from `THE-FIRST.md`.
3. If no suitable source exists, create the smallest useful requirement document under project conventions.
4. Use `docs/project/requirements.md` only as a fallback.

Update `$track-project-progress` with source links, accepted decisions, blockers, and the next gate. Do not copy detailed requirement content into `THE-FIRST.md`.

## Close the phase with evidence

Apply `dialogue_mode` through `$using-the-first`. In `deep` mode, finish its focused co-creation checkpoint before baselining requirements; in `fast` mode, ask only unresolved decisions that would materially change direction.

When closing requirements, present in the project language:

1. Confirmed goal and audience.
2. Brand and engineering names, including unresolved status.
3. Included, deferred, and excluded scope.
4. Critical requirements and acceptance checks.
5. Assumptions and unresolved questions that still change direction.
6. Whether a minimal prototype is recommended and what it would validate.
7. Updated sources and unverified boundaries.

When requirements have sufficient source evidence and no material unresolved conflict, mark the phase complete and route to `$design-product-experience`. Ask the user only for a decision that evidence cannot resolve, not to validate completed work.

Report the result, evidence, optional user review, suggested next step, and completion judgment.
