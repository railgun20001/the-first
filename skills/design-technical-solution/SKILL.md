---
name: design-technical-solution
description: Design and baseline a software project's production technology, architecture, data and API boundaries, security, SEO, performance, business and visual component strategy, testing, build, preliminary deployment, and required environment. Use after requirements and experience are accepted, when a major technical direction changes, when deployment assumptions are unclear, or before installing project tooling. Inspect the actual environment only after the solution is accepted, and install nothing without explicit consent.
---

# Design Technical Solution

Choose the minimum production solution that satisfies accepted outcomes and constraints. Do not let familiarity with a framework redefine the product.

## Confirm prerequisites and evidence

1. Read project instructions, `THE-FIRST.md`, accepted requirements, accepted experience decisions, and relevant feedback rules.
2. Confirm requirement and experience gates are accepted or explicitly skipped by the user. Keep discussion-only options unaccepted when gates are still open.
3. Inspect current source, dependencies, lock files, schemas, migrations, interfaces, tests, build, CI, containers, infrastructure, deployment notes, and actual runtime evidence available.
4. Identify existing components and platform capabilities before proposing new dependencies or duplicated abstractions.
5. Separate required quality attributes from speculative scale, premature optimization, and preferences.

## Derive the production shape

Resolve the accepted scope's material decisions:

### System and delivery boundaries

- Web, app, service, desktop, CLI, plugin, worker, or a justified combination.
- Repository and module boundaries.
- Client, server, background, third-party, and trust boundaries.
- Rendering and delivery model, including SEO only when it is an accepted business need.

### Technology and data

- Languages, frameworks, package managers, and supported version ranges.
- Data ownership, models, persistence, transactions, migration, backup, retention, and recovery.
- API, event, file, or module contracts and compatibility policy.
- Caching, search, queues, concurrency, and distributed state only when evidence or constraints require them.
- Authentication, authorization, secrets, privacy, auditing, input validation, and destructive-action safeguards.

### Components and experience implementation

- Business components and their responsibilities.
- Existing shared components to reuse.
- Visual components to build, reuse from the project, or obtain from an already-installed UI library.
- Any new UI dependency, its accessibility and styling constraints, and why native or existing options are insufficient.
- Accepted prototype behavior to preserve without copying disposable prototype architecture.

### Quality and verification

- Performance, capacity, availability, offline, compatibility, localization, and accessibility mechanisms tied to accepted targets.
- Static, unit, contract, integration, browser, device, security, migration, and performance checks needed for the real risks.
- Build artifacts, configuration boundaries, environment parity, and quality gates.

Do not invent interfaces, services, databases, caches, queues, or abstractions for hypothetical future requirements.

## Compare only meaningful alternatives

When a real trade-off exists, compare at least two viable options by:

- Ability to guarantee the accepted outcome.
- Compatibility with current code, data, and team constraints.
- New state, dependencies, operational boundaries, and failure modes.
- Security, recovery, reversibility, migration, and verification cost.
- Assumptions that remain unverified.

If the existing stack satisfies the constraints, select it directly and state the evidence. Do not stage a ceremonial comparison to justify a rewrite.

Record the decision, rejected alternative, reason, boundary, and revisit trigger in the existing architecture source. Use an ADR-like section only when the project already uses it or the decision has lasting alternatives worth preserving.

## Design preliminary deployment now

Decide enough deployment detail to prove the architecture is deliverable:

- Local, single-host, multi-host, container, managed platform, or vendor deployment.
- Local build, CI build, GitHub build, image build, artifact or image registry, and promotion path.
- Runtime topology, persistent volumes, networking, ports, domains, certificates, and secrets.
- Configuration ownership and environment differences.
- Database and data migration order, compatibility window, backup, and restore.
- Health checks, logs, monitoring, smoke tests, and business validation.
- Rollback unit, trigger, procedure, and known irreversible steps.

This is the accepted deployment design, not authorization to create infrastructure, publish artifacts, migrate data, or deploy.

## Reuse documentation and request acceptance

Apply `dialogue_mode` through `$using-the-first`. In `deep` mode, finish its focused co-creation checkpoint before presenting the technical solution for acceptance; in `fast` mode, ask only unresolved decisions that would materially change the production shape or risk.

Update existing architecture and deployment sources first. If no source can hold the solution, follow project conventions and fall back to `docs/project/technical-solution.md`. Keep preliminary deployment in the same source rather than creating a duplicate runbook prematurely.

Present:

1. Selected production shape and boundaries.
2. Technology, data, interface, security, and component decisions.
3. Quality and test strategy.
4. Preliminary deployment and rollback design.
5. Rejected alternatives and revisit conditions where material.
6. Assumptions, risks, and evidence that still require environment or integration checks.

Set the phase to `awaiting_user_acceptance`. Do not inspect broadly for speculative tools or install anything before explicit acceptance.

## Inspect the environment after acceptance

Once the technical solution is accepted, inspect only what it requires:

- Operating system, architecture, permission boundary, and shell.
- Git, required runtimes, package managers, compilers, SDKs, browsers, and supported versions.
- Docker, databases, vendor CLIs, certificates, ports, services, proxies, and credentials only when required.
- Lock files, existing project dependencies, and conflicts with installed versions.

Classify findings as:

- Satisfied.
- Required and missing.
- Recommended but not required.
- Optional enhancement.
- Not verifiable in the current environment.

For every proposed installation or upgrade, show before acting:

1. Exact item and version boundary.
2. Why the accepted solution needs it.
3. Official or project-approved source and exact command.
4. User, project, or system scope and expected file or configuration changes.
5. Conflict and operational risk.
6. Verification command.
7. Uninstall or rollback path.

Ask for explicit consent covering all, selected, manual, declined, or redesigned outcomes. Consent for one item never authorizes another item, an unrelated upgrade, a service signup, or production access.

After authorized installation, verify the actual version and behavior, record evidence through `$track-project-progress`, and report failures honestly. If installation is declined, record the resulting development limit and offer manual steps or a smaller alternative.

When the environment outcome is recorded, route to `$develop-feature-slices`.

Report the result, evidence, recommended user review, suggested next step, and any acceptance or installation request in the project language.
