---
name: using-the-first
description: Start or resume a human-governed software project workflow before substantial implementation begins. Use when a user wants to initialize a project, turn an idea into software, add a substantial feature, recover work in a new conversation, or explicitly asks to use The First. Inspect project truth sources and THE-FIRST.md, restore current decisions and feedback, enforce phase gates, and route to the appropriate The First skill. For a vague initial idea, do not ask about frameworks, databases, APIs, hosting, or deployment in the first response.
---

# Using The First

Keep the human responsible for product direction and acceptance. Prevent implementation from outrunning confirmed requirements, experience, technical constraints, deployment needs, and current project evidence.

On the first The First response in each conversation, state the current dialogue mode before asking questions or proposing work. When the default `deep` mode applies, say in the user's language that deep co-creation is active and that they can say `切换到快速推进模式` to switch. Do not ask the user to choose a mode before continuing.

## Handle a vague idea safely

When the user provides only a product category such as "build an admin panel":

1. If a project is available, inspect it before questioning the user.
2. In the first response, ask only about the desired outcome, target users, essential workflow, success evidence, and whether an existing project or source exists.
3. Ask a small, answerable set rather than the full lifecycle questionnaire. In `deep` dialogue mode, group independent questions in one message; ask separately only when a later question depends on the earlier answer.
4. Do not ask about frameworks, languages, databases, APIs, authentication mechanisms, hosting, containers, or deployment yet unless the user already stated one as a fixed constraint.
5. Do not suggest default CRUD, a starter stack, or implementation as the fallback for uncertainty.
6. Record unknowns and route to `$clarify-project-requirements`.

Technical questions become appropriate only after product intent and discoverable project facts establish which decisions matter.

Treat a first response that asks for a framework, language, database, API, authentication mechanism, hosting, container, or deployment preference as a workflow failure. In `fast` mode, end the first response after a small set such as:

- Who will use this and what outcome should improve?
- Which one to three workflows matter most?
- Is there an existing project, requirement source, or current product to inspect?

Do not append technical questions to this set.

In `deep` mode, ask the highest-impact independent questions from this set together, then wait for the answers before asking any dependent follow-up.

## Start with evidence

Before asking questions or proposing changes:

1. Locate the project root. Read applicable agent instructions, README files, contribution rules, and repository conventions.
2. Inspect Git when present: current branch, HEAD, working tree, staged changes, and recent relevant history. Preserve unrelated work.
3. Search for existing requirement documents, issues, designs, schemas, migrations, API contracts, tests, build files, CI, containers, infrastructure, deployment notes, and runbooks.
4. Read `THE-FIRST.md` when it exists, then read the sources it links for the current phase. Treat the index as a pointer, not proof that linked content is current.
5. Distinguish facts supported by project evidence from assumptions, proposals, and stale records.

Do not ask the user for information that the project can answer. Ask only about product intent, trade-offs, acceptance, authority, or unresolved conflicts.

## Choose the dialogue depth

Read `dialogue_mode` from `THE-FIRST.md` when present. Support exactly:

- `deep` (default): before requirement, experience, or technical acceptance, and before accepting an initial or materially changed slice plan, run one focused co-creation checkpoint.
- `fast`: ask only questions that cannot be answered from evidence and would block or materially change the result, safety, authorization, or current gate.

Treat a missing field as `deep`. Change the mode only when the user explicitly requests a different dialogue depth. When project writes are authorized, persist the choice in `THE-FIRST.md`; otherwise apply it only to the current conversation.

For a `deep` checkpoint:

1. Inspect project evidence first and exclude discoverable or already accepted decisions.
2. Identify only the current phase's highest-impact unknowns, usually three to seven; stop earlier when fewer matter.
3. Ask one or more independent questions in one message. Explain briefly why each matters and provide a recommended default with its main trade-off; keep dependent questions for the next round.
4. Wait for the answers before continuing down dependent decision paths. Do not implement while the checkpoint is open.
5. After the final answer, summarize what was decided, deferred, and still risky; update authorized truth sources and return to normal phase execution.

Do not use `deep` mode to repeat accepted questions, fill a quota, or interrupt implementation after the checkpoint unless new evidence would materially change the outcome, safety, or required authorization. Dialogue depth does not add a phase or acceptance gate and never authorizes writes, installation, external effects, pushes, or deployment.

## Respect the requested stage

- For discussion, explanation, review, or design-only requests, stay read-only.
- For diagnosis, explain the cause and evidence; do not implement unless requested.
- For implementation, require the applicable phase gates before writing production code.
- For installation, external writes, pushes, or deployment, require matching authorization even if earlier phases are accepted.
- Never interpret "continue" as permission for unbounded autonomous development. Continue only the current accepted phase or bounded feature slice.

## Route artifact scope when needed

Route through `$guard-artifact-scope` only when both conditions hold: one artifact mixes reader-facing product content with engineering, workflow, editorial, verification, or development-history constraints; and a concrete unresolved risk exists of putting a statement in the wrong artifact or presenting unimplemented behavior as complete.

An artifact type alone is not a trigger. Do not invoke it for routine README, UI copy, requirement, technical-document, release-note, handoff, or code edits when the responsible phase skill already establishes ownership and evidence. Explicit user invocation always applies. Otherwise apply it within the current phase without adding a phase or acceptance gate, then continue through the responsible phase skill.

## Initialize a project

When `THE-FIRST.md` is absent:

1. Inventory truth sources first.
2. Explain which sources already govern each domain and where conflicts or gaps exist.
3. Offer these documentation modes:
   - `index_only` (recommended): add an index and links without moving existing documents.
   - `normalize_in_place`: improve headings, status, and cross-links without changing paths.
   - `structural_migration`: propose an exact path and reference migration, then wait for explicit approval before changing structure.
4. Create `THE-FIRST.md` from [the project index template](references/the-first-template.md) only when project writes are authorized.
5. Use the project's language. Keep the frontmatter keys and enum values unchanged.
6. Route to `$clarify-project-requirements`. Do not start production implementation from the initial idea.

Use the project's existing documentation conventions. Create fallback documents under `docs/project/` only when no existing truth source can hold the missing information.

If the user cannot answer an early product question, record the unknown and offer concrete outcome examples to help them decide. Do not substitute a default CRUD page, framework, database, or other implementation as a supposedly safe requirement. For a vague initial idea, do not ask for technology preferences in the first response. First establish the outcome, audience, essential workflow, success evidence, and existing-project context; inspect that context before leaving production choices to the technical phase.

## Resume a project

When `THE-FIRST.md` exists:

1. Validate its frontmatter and current phase.
2. Compare its active slice, evidence, and commits with actual Git and linked sources.
3. Read feedback rules relevant to the current scope.
4. Surface missing links, stale state, or conflicts before proceeding.
5. Summarize the last accepted result, current gate, blockers, and next action.
6. Route using the current phase:

| Phase | Skill |
|---|---|
| `requirements` | `$clarify-project-requirements` |
| `experience` | `$design-product-experience` |
| `technical` | `$design-technical-solution` |
| `development` | `$develop-feature-slices` |
| `deployment` | `$deploy-project` |
| Any progress or handoff update | `$track-project-progress` |

If state, code, and an external tracker disagree, do not silently choose a winner. Explain the domain-specific conflict and restore consistency with the user.

## Enforce phase gates

Use the frontmatter status values exactly:

- `not_started`
- `in_progress`
- `awaiting_user_acceptance`
- `accepted`
- `blocked`
- `complete`

Only explicit human acceptance can change a phase or feature slice from `awaiting_user_acceptance` to `accepted`. A passing test, a plausible implementation, or an agent's confidence is not human acceptance.

Apply these transitions:

1. Requirements accepted → experience.
2. Experience accepted or explicitly skipped → technical.
3. Technical solution accepted → targeted environment inspection and installation consent.
4. Environment outcome recorded → development.
5. All accepted feature slices → deployment readiness.
6. Authorized deployment and acceptance, or an explicitly accepted handoff-only outcome → complete.

## Report meaningful steps

After completing meaningful work, respond in the user's or project's language with:

1. **Result** — what actually changed or was decided.
2. **Evidence** — what was inspected or verified, and what remains unverified.
3. **Recommended user action** — the shortest useful review or self-check.
4. **Suggested next step** — what should happen next and why.
5. **Awaiting confirmation** — include only at a phase or slice gate.

Never report planned work as completed, static evidence as runtime proof, or local checks as production acceptance.
