# The First

English | [中文](README.zh-CN.md)

The First is a set of software-delivery workflow skills for AI coding tools. It keeps implementation behind explicit requirement, experience, technical, deployment, and feature-slice gates while preserving human ownership of product decisions and acceptance.

## When to use it

- Initialize a new project from an ambiguous idea.
- Add a substantial feature or re-establish direction in an existing project.
- Compare web, app, service, SEO, performance, and deployment needs before selecting a stack.
- Validate functionality and interaction with a minimal prototype before production implementation.
- Split a large feature into testable, reviewable, independently committed slices.
- Resume requirements, decisions, feedback rules, progress, and next actions in a new conversation.
- Confirm environments, builds, migrations, health checks, and rollback before deployment.

## Core principles

1. Inspect before asking; confirm outcomes before choosing technology.
2. Reuse existing PRDs, tasks, designs, contracts, tests, configuration, and runbooks.
3. Use `THE-FIRST.md` for process state and document links, not as a second requirements or architecture document.
4. Require human acceptance at requirement, experience, technical, feature-slice, and deployment gates.
5. For user-facing products, deliver an operable frontend/UI or game client before or alongside substantial backend work; use it for review, not as a post-backend demo.
6. Require matching authorization before installing software, writing externally, pushing code, or deploying.
7. Map the active slice's requirements and acceptance checks to implementation surfaces and verification before coding; do not complete it without row-by-row evidence.
8. Distill user corrections into durable rules before applying them to code, acceptance, and regression protection.
9. Create one focused Git commit after a feature is verified and accepted.
10. Report results, evidence, recommended user actions, and the suggested next step after meaningful work.

## Workflow

```text
start or resume
  → inspect project instructions, Git, and existing sources of truth
  → create the THE-FIRST.md index
  → clarify and accept requirements
  → build or prototype an operable frontend/UI or game client for early review
  → decide architecture, component strategy, and preliminary deployment
  → inspect the environment and install missing items only with consent
  → lock the active slice's requirement, implementation, and verification mapping
  → build, test, and accept one feature slice at a time
  → preserve user feedback as regression rules
  → commit each accepted feature
  → deploy, verify, and prepare rollback only with authorization
```

The First does not run every stage continuously by default. It waits at phase and feature-slice gates. A user may pre-authorize a small, bounded batch, but that never becomes unlimited autonomous development.

## Dialogue depth

The project index records `dialogue_mode: fast|deep`:

- `deep` is the default for new products, experience direction, architecture, security, payment, or major slice changes. Before the relevant acceptance gate, the AI asks one or more independent high-impact questions together, explains why each matters, and provides a recommended default with its main trade-off. It holds dependent questions for the next round.
- `fast` asks only about decisions that evidence cannot answer and that would block or materially change the result. Switch to it by saying "Switch to fast mode."

In its first response, The First states that deep co-creation is active and explains how to switch to fast mode. A deep checkpoint usually contains three to seven questions and stops earlier when fewer matter. After summarizing decided, deferred, and risky items, normal execution resumes. Dialogue depth does not add an acceptance gate or grant permission to write, install, push, or deploy.

## Skills

| Skill | Purpose |
|---|---|
| `using-the-first` | Detect a new or resumed project, read instructions, Git, `THE-FIRST.md`, and linked sources, then route to the current phase |
| `guard-artifact-scope` | Separate product content, user boundaries, engineering constraints, workflow rules, and verification so development instructions do not masquerade as product outcomes |
| `clarify-project-requirements` | Clarify outcomes, audience, scope, brand, engineering name, critical requirements, and acceptance criteria |
| `design-product-experience` | Shape information architecture, visual direction, interaction states, and an optional minimal prototype |
| `design-technical-solution` | Decide the stack, boundaries, component strategy, testing, preliminary deployment, and environment needs |
| `develop-feature-slices` | Deliver reviewable feature slices with tests, self-check steps, retained feedback, and focused commits |
| `deploy-project` | Implement authorized deployment, migration, health checks, business acceptance, and rollback |
| `track-project-progress` | Maintain cross-conversation state, source links, slices, feedback, and verification evidence |

`guard-artifact-scope` is a cross-phase guard. The AI invokes it implicitly only when one artifact mixes reader-facing product content with internal constraints and a concrete scope conflict remains. Routine document edits stay with their phase skill; explicit invocation remains available, and the guard adds no separate phase or acceptance gate.

## Sources of truth and documentation modes

The First does not assume one document represents an entire project. It identifies authority by domain, for example:

- Requirements: accepted PRD, issue, or product decision.
- Experience: accepted design, design system, or existing product behavior.
- Interfaces and data: schemas, types, migrations, and contract tests.
- Deployment: infrastructure, CI, containers, and runbooks.
- Implementation state: source, tests, commits, and observed runtime evidence.

Choose one documentation mode during initialization:

- `index_only`: the recommended default; create an index without moving documents.
- `normalize_in_place`: improve headings, status, and cross-links without changing paths.
- `structural_migration`: propose an exact migration first, then move or merge documents only after approval and in a separate commit.

Only when the project has no reusable location does The First fall back to:

- `docs/project/requirements.md`
- `docs/project/experience.md`
- `docs/project/technical-solution.md`
- `docs/project/deployment-runbook.md`

## Cross-conversation continuity

The First maintains a version-controlled `THE-FIRST.md` at the project root. A new conversation reads it together with project instructions, Git state, and linked sources of truth before resuming work.

The file contains:

- Project identity and current phase.
- A source-of-truth index.
- Accepted decisions and blockers.
- Feature slices, acceptance, tests, and commit evidence.
- Row-by-row requirement, implementation, and verification coverage for the active slice.
- Distilled user feedback and regression rules.
- External tracker links.
- What the next conversation should read and do.

It never stores credentials, production secrets, long chat transcripts, or full copies of existing documents.

## Frontend/client-first review

For user-facing products, The First defaults to an operable frontend/UI or game client before or alongside substantial backend work. Review the accepted primary flow and material states with static or contract-shaped mock data, then let that accepted surface guide the API, server, and persistence work. The exceptional frontend-first path may complete the client flow before backend implementation.

This is not permission to call a mock-backed screen backend-complete: server authority, validation, security, persistence, and integration still need their own implementation and evidence.

## Minimal prototypes

Prototypes are optional and only validate functionality, information structure, and interaction:

- No production backend, permissions system, or database.
- Static mock data only.
- Reuse an existing frontend's display capabilities when available.
- Use plain HTML, CSS, and JavaScript for simple new-project prototypes.
- Use Vue 3 and Vite only when interaction complexity justifies them.
- Prototype tooling never becomes the production stack by default; prefer a planned or existing client when it can provide the same review surface.

## Environment and installation consent

The AI inspects only the environment required by an accepted technical solution. Missing items are classified as required, recommended, optional, or unverifiable, with purpose, commands, impact, verification, and rollback. The user may approve all, approve selected items, install manually, decline, or revise the technical solution.

## Staged development and Git

Every feature slice has an observable result, scope, acceptance criteria, automated verification, and human self-check steps. Before coding, the AI maps stable requirement or acceptance references to intended implementation surfaces and verification. After coding, it records actual source or runtime evidence for every row. Any in-scope row without evidence keeps the slice incomplete. A slice is not complete before acceptance. When the user requests a correction, the AI records the underlying intent, durable rule, affected scope, and regression protection.

Only accepted features are committed. The AI inspects the working tree and index, stages only relevant paths or hunks, and preserves unrelated changes. Project code is not pushed unless the user explicitly authorizes that project push.

## Installation

### Codex

```powershell
codex plugin marketplace add railgun20001/the-first
codex plugin add the-first@the-first
```

Verify:

```powershell
codex plugin list --json
```

### Claude Code

```powershell
claude plugin marketplace add railgun20001/the-first
claude plugin install the-first@the-first
```

Verify:

```powershell
claude plugin list
claude plugin details the-first@the-first
```

### Other Agent Skills tools

Clone this repository and add the directories under `skills/` to the tool's supported skills search path. Tools differ in automatic triggering, interactive questions, and task-list support; The First falls back to ordinary conversation and file operations where needed. The project does not claim native support for tools it has not tested.

## Uninstall

Codex:

```powershell
codex plugin remove the-first@the-first
codex plugin marketplace remove the-first
```

Claude Code:

```powershell
claude plugin uninstall the-first@the-first
claude plugin marketplace remove the-first
```

Uninstalling the plugin does not remove `THE-FIRST.md` or project documentation.

## Boundaries

The First has no background service, telemetry, MCP server, database, or autonomous hosting. It does not force GitHub Issues, Linear, a framework, a UI library, or a deployment vendor, and it never creates cloud resources, changes production, or accepts work without matching authorization.

## License

[MIT](LICENSE)
