---
name: develop-feature-slices
description: Plan, implement, test, review, and commit one observable feature slice at a time after requirements, experience, technical solution, and environment outcomes are accepted. Use when production development is authorized, when a large feature needs decomposition, when resuming an active slice, or when user corrections must be distilled into durable regression rules. Require human slice acceptance by default, provide self-check steps, preserve unrelated Git work, and create focused functional commits.
---

# Develop Feature Slices

Deliver small, complete user outcomes instead of large batches of plausible but unverified code.

## Verify readiness

Before planning or editing:

1. Read project instructions, `THE-FIRST.md`, accepted requirements, experience decisions, technical solution, environment outcome, and feedback rules relevant to the scope.
2. Confirm the project is in `development` and the required phase gates are accepted. Do not treat a plan or prototype as production authorization.
3. Inspect Git branch, HEAD, working tree, staged changes, relevant history, and repository conventions.
4. Trace the real implementation path, existing components, dependencies, schemas, callers, tests, build, and runtime boundaries.
5. Identify unrelated user or concurrent changes and keep them out of the slice.

If the project is not a Git repository, explain that focused feature commits are unavailable and request permission before initializing Git. If permission is declined, continue only if the user accepts that limitation and record it.

## Define vertical feature slices

Split accepted scope into the smallest slices that each deliver an observable user or system outcome across the necessary layers. Do not split only by technical layer when that leaves nothing meaningful to review.

For each slice, define:

- A stable slice ID and title.
- Requirement and source-of-truth links.
- Observable result and target user.
- Included and explicitly excluded behavior.
- Interface, data, visual, migration, deployment, and compatibility impact.
- Acceptance criteria, including failure and boundary behavior.
- Automated verification and the shortest human self-check.
- Relevant user-feedback rules and regression guards.
- Dependencies on other slices and the safe rollback unit.

Order slices to validate high-impact assumptions early while preserving a usable repository. Present the slice list for acceptance before starting a large body of work.

Default to one active slice. A user may pre-authorize a specific bounded batch, but each slice still needs its own verification, state, and functional commit. Never turn a bounded approval into indefinite autonomous execution.

## Implement one slice

1. Mark only the selected slice active in `THE-FIRST.md`.
2. Search for existing project patterns, shared components, platform features, standard-library support, and already-installed dependencies before adding code or packages.
3. Make the minimum coherent change at the shared root cause or real system boundary. Do not add speculative abstractions or unrelated cleanup.
4. Preserve product semantics, compatibility, validation, security, accessibility, and data safety.
5. If a new dependency, runtime, service, migration, or external write becomes necessary but was not accepted, stop and return to `$design-technical-solution` or request the specific authorization.
6. Keep detailed requirements and design decisions in their authoritative sources; update `THE-FIRST.md` only with links and slice state.

Do not use large code output as evidence of progress. A slice is implemented only when the repository contains the change.

A documentation sentence can satisfy a requirement only when documentation is the intended outcome. For product, engineering, workflow, deployment, or runtime requirements, verify the corresponding implementation and evidence; do not mark them complete because their wording appears in a README, UI, plan, state file, or completion message. Apply `$guard-artifact-scope` when a changed artifact mixes these concerns.

## Verify proportionally to risk

Before human review:

1. Add the smallest meaningful automated test that would fail if the behavior regressed.
2. Protect existing invariants with regression coverage where the change can break them.
3. Cover critical failure, boundary, migration, permission, concurrency, security, or performance behavior where applicable.
4. Run relevant formatting or static checks without rewriting unrelated files.
5. Run the narrow test first, then the broader project checks required by risk and repository policy.
6. Perform browser, device, integration, or runtime checks when static and unit evidence cannot prove the user-visible behavior.
7. Do not lower thresholds, exclude files, weaken assertions, or label skipped checks as passed.

Record exactly what was checked and distinguish static, unit, integration, browser, CI, staging, production technical, and production business evidence.

## Provide human self-check and wait

Report in the project language:

1. **Result** — the observable slice outcome and actual files or surfaces changed.
2. **Evidence** — checks run, outcomes, and unverified boundaries.
3. **Recommended user action** — the shortest reproducible self-check, including setup, actions, and expected result.
4. **Suggested next step** — accept, request changes, or investigate a named boundary.
5. **Awaiting confirmation** — request explicit slice acceptance unless the exact slice was pre-authorized for automatic acceptance.

Do not mark the slice complete or create its completion commit before acceptance.

## Distill requested changes

When the user requests a modification:

1. Summarize the feedback briefly.
2. State the underlying outcome to preserve.
3. Propose a durable rule or clearly scoped exception.
4. Name affected surfaces and future slices.
5. Update acceptance criteria and the appropriate automated, self-check, or visual regression guard.
6. Ask the user to correct the interpretation when it would become a broad rule.
7. Record the accepted rule through `$track-project-progress`.
8. Re-implement and re-run relevant verification before requesting acceptance again.

Do not preserve raw conversation dumps. On every later slice, reread rules that affect its scope.

## Create the functional commit after acceptance

Once the slice is accepted:

1. Re-inspect `git status`, unstaged diff, staged diff, and affected untracked files.
2. Update authoritative docs and `THE-FIRST.md` with the accepted outcome, checks, slice ID, and `commit: pending`.
3. Stage only exact related paths or hunks. Never default to all files in a mixed worktree.
4. Review staged names and content, then run `git diff --cached --check` and the final relevant checks.
5. Commit one independently understandable feature with a concise project-language message; conventional commit types may remain in English.
6. Read the resulting commit hash and report it as evidence.
7. Update the working `THE-FIRST.md` commit field with that hash. A commit cannot contain its own final hash, so do not recursively amend it. Include the hash in the next authorized progress-only or feature commit; when immediate versioned persistence is required, create a separate focused progress commit.
8. Never push unless the user explicitly authorized the project and target remote.

If unrelated changes cannot be isolated safely, stop before committing and explain the overlap.

## Advance deliberately

After the accepted functional commit:

- Mark the slice complete and update its evidence.
- Reconcile any external authoritative tracker when authorized.
- Report the result, commit, validation, recommended user action, and next slice suggestion.
- Start the next slice only after its scope is accepted or covered by a prior bounded authorization.
- When all accepted slices are complete, route to `$deploy-project` for deployment readiness; do not deploy automatically.
