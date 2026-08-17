---
name: track-project-progress
description: Maintain the version-controlled THE-FIRST.md project index so decisions, document authority, human acceptance, feature slices, user feedback, verification evidence, commits, trackers, blockers, and next actions survive conversation changes. Use after meaningful project progress, phase or slice transitions, accepted feedback, commits, deployment events, or when a user asks for status, handoff, continuity, or progress reconciliation.
---

# Track Project Progress

Preserve only the state needed to resume reliably. Keep detailed requirements, designs, architecture, tests, and runbooks in their existing sources of truth.

## Reconcile before updating

1. Read applicable project instructions and `THE-FIRST.md`.
2. Inspect actual Git state, relevant commits, linked documents, tests, and external tracker items available in the current environment.
3. Separate verified facts from plans, user proposals, AI assumptions, and stale status.
4. If sources conflict, report the conflict and its impact. Do not overwrite one source merely to make the index appear consistent.
5. Never put credentials, secrets, personal data, or long conversation transcripts into the index.

## Maintain the state contract

Keep these frontmatter keys and enum values stable:

```yaml
---
the_first_schema: 1
phase: requirements
status: in_progress
documentation_mode: index_only
active_slice: null
updated_at: YYYY-MM-DD
---
```

Allowed phases:

- `requirements`
- `experience`
- `technical`
- `development`
- `deployment`
- `complete`

Allowed statuses:

- `not_started`
- `in_progress`
- `awaiting_user_acceptance`
- `accepted`
- `blocked`
- `complete`

Allowed documentation modes:

- `index_only`
- `normalize_in_place`
- `structural_migration`

Do not mark a phase or feature accepted without explicit human acceptance. Do not infer acceptance from silence, a passing test, or permission to continue inspecting.

## Keep a domain-specific source index

Record each source with its domain, authority, scope, current status, and last confirmation date. Typical domains include requirements, experience, API, data, deployment, testing, and implementation.

- Link to existing authoritative material rather than copying it.
- When an external tracker is authoritative for task status, store only its identifier, link, role, and summarized current state.
- When no source exists, record the gap. Create a fallback document only through the responsible phase skill.
- Keep historical sources when they explain an active compatibility constraint; otherwise mark them superseded instead of treating them as current.

## Record transitions and evidence

After meaningful work, update only affected sections:

- Current phase, gate, blockers, and next action.
- Accepted decisions with date, detailed source, and accepting party.
- Feature slice outcome, status, acceptance source, verification evidence, and commit.
- Recent verification with the exact scope and boundary: static, unit, integration, browser, CI, staging, production technical, or production business acceptance.
- External tracker summary when it changed.

Never convert "planned", "implemented", "tests passed", "locally observed", and "accepted in production" into one generic completed state.

## Distill feedback for future slices

When the user requests a modification, write a concise proposed record containing:

1. The feedback summary.
2. The underlying outcome the user wants preserved.
3. A durable rule, or an explicitly scoped one-time exception.
4. Affected pages, modules, components, documents, or future slices.
5. Updated acceptance criteria, automated test, self-check, or visual regression guard.
6. Resolution status and commit when complete.

Show the distilled meaning to the user before making it a project-wide rule. On future slices, read and apply all rules relevant to that scope.

## Handle documentation modes safely

- `index_only`: update links and state only. Do not move documents.
- `normalize_in_place`: improve structure and cross-links without changing paths.
- `structural_migration`: inventory files and inbound references, propose an exact old-to-new map and rollback, obtain approval, migrate in a dedicated change, verify links, and commit separately.

Do not delete or merge material with uncertain ownership or independent value.

## Create a useful handoff

End the `Next conversation` section with concrete instructions:

1. What project instructions to read.
2. Which Git state and active slice to verify.
3. Which linked sources govern the current phase.
4. Which feedback rules apply.
5. The single next action and current acceptance gate.

Then report the result, evidence, recommended user action, and suggested next step in the project language.
