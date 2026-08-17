---
name: guard-artifact-scope
description: Keep engineering, workflow, editorial, verification, and development-history constraints from leaking into the wrong deliverable or being repeated as if they were implemented product behavior. Use implicitly when creating or reviewing READMEs, product descriptions, UI copy, PRDs, prototypes, technical or deployment documents, release notes, marketplace listings, handoffs, and other artifacts assembled from mixed requirements. Explicit user invocation is optional.
---

# Guard Artifact Scope

Constraints may govern an artifact without becoming content in that artifact. Apply this skill quietly and keep the current workflow moving.

## Establish the artifact contract

Before creating or materially revising an artifact:

1. Identify its readers and the decision, action, or understanding it must support.
2. Identify the domain for which it is authoritative and the existing source of truth to reuse.
3. Separate content the reader needs from instructions that only govern how the work is performed.
4. Preserve the project language, conventions, and accepted product meaning.

Do not create a new phase, gate, status, or confirmation step. Ask the user only when an unresolved scope conflict would materially change the artifact or product.

## Classify source statements

Classify each material statement before deciding where it belongs:

| Type | Typical owner | Appropriate evidence |
|---|---|---|
| Product outcome or behavior | Product UI, accepted requirements, user documentation | Observable behavior and human acceptance |
| User-facing operating boundary | Installation, usage, compatibility, privacy, safety, or pricing documentation | Actual configuration and runtime behavior |
| Engineering invariant | Source, manifest, schema, architecture source, or technical decision | Dependency, build, integration, or runtime checks |
| Workflow constraint | Project instructions, workflow skill, state index, or Git history | Actual workflow state and repository evidence |
| Editorial instruction | The artifact's structure, tone, density, and wording | Review of the resulting artifact |
| Verification requirement | Tests, checklists, release evidence, or acceptance record | Executed checks and accurately scoped results |
| History, comparison, or rejected option | Decision record or maintainer documentation when still useful | Traceable decision source |

Do not turn classifications into a new form or document. Keep them internal unless the project already has an authoritative place for the relevant decision.

## Decide what the reader should see

Include a statement in the artifact only when at least one condition applies:

- It changes a reader's decision or next action.
- It is needed to install, configure, use, troubleshoot, or safely operate the product.
- It communicates a real user-visible capability, limitation, compatibility boundary, privacy effect, cost, or risk.
- The artifact is the authoritative source for that statement.

Otherwise omit it or place it in the correct technical, workflow, verification, or decision source. Prefer omission when the statement merely narrates the construction process, compares against an unrelated product, repeats what the interface already communicates, or defensively explains what was not built.

Preserve necessary error messages, empty-state guidance, permission boundaries, destructive-action confirmations, accessibility text, legal notices, privacy disclosures, security warnings, and compatibility requirements. Concision never overrides safety or usability.

## Match claims to proof

A documentation sentence can satisfy a requirement only when the intended outcome is documentation. For every other requirement, verify the actual product, code, configuration, manifest, workflow, or runtime behavior.

Examples:

- Treat "do not depend on another plugin" as an engineering invariant. Prove it with manifests, calls, and isolated installation; mention the other plugin publicly only when that relationship changes a user's decision.
- Treat "do not run autonomously" as user-facing only where it sets an important operating expectation; prove it through authorization and runtime behavior.
- Treat "keep the interface concise" as an experience rule. Remove redundant copy and verify the rendered interface instead of adding a sentence that announces the rule.
- Treat "commit each accepted feature separately" as a workflow rule. Prove it with scoped Git history, not product marketing copy.

Never report a non-documentation requirement as implemented merely because its wording appears in a README, UI, plan, status file, or completion message.

## Review the artifact before delivery

Remove or relocate:

- Prompt, plan, or acceptance wording copied into the deliverable without reader value.
- Unsupported claims that substitute for implementation evidence.
- Development history presented as a product capability.
- Negative comparisons that create an unnecessary relationship with another product.
- Repeated headings, helper text, slogans, or boundary statements already communicated nearby.

Then verify that the remaining artifact is complete for its readers. Report the artifact result and matching evidence; do not burden the user with an exhaustive list of every internal instruction that was intentionally omitted.
