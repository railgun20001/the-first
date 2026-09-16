---
name: guard-artifact-scope
description: Prevent internal constraints from leaking into reader-facing artifacts or becoming unsupported product claims. Use if named. Invoke implicitly only when one artifact mixes product content with engineering, workflow, editorial, verification, or history constraints and a concrete unresolved scope conflict remains. Artifact type alone is not a trigger; skip routine phase-owned edits.
---

# Guard Artifact Scope

Constraints may govern an artifact without becoming content in that artifact. Apply this skill quietly and keep the current workflow moving.

## Invoke only for a real conflict

Explicit invocation always applies. Otherwise invoke only when both conditions hold:

- One artifact spans reader-facing product content and an internal engineering, workflow, editorial, verification, or history constraint.
- An unresolved risk exists of misplacing that constraint or claiming an outcome without evidence.

Do not invoke it merely because the task edits a README, UI string, PRD, technical document, release note, or handoff. Continue without it when the phase skill already identifies each statement's owner and proof.

Do not create a new phase, gate, status, or confirmation step. Ask only when the conflict would materially change the artifact or product.

## Establish the artifact contract

1. Identify the readers and the decision or action the artifact supports.
2. Identify its authoritative domain and reuse that domain's source of truth.
3. Separate product behavior and user boundaries from internal constraints.
4. Include a statement only when it changes a reader's action, is needed to use the product safely, communicates a real capability or limitation, or belongs in this artifact's authority.

Otherwise omit it or keep it in the correct technical, workflow, verification, or decision source. Do not create a document just to record the classification.

Preserve necessary errors, empty states, permissions, destructive confirmations, accessibility text, legal or privacy notices, security warnings, and compatibility requirements. Concision never overrides safety or usability.

## Match claims to proof

A documentation sentence can satisfy a requirement only when documentation is the intended outcome. Otherwise verify product, code, configuration, workflow, or runtime behavior. Engineering invariants need source and checks; workflow rules need state and Git evidence; experience rules need rendered output and acceptance evidence.

Never report a non-documentation requirement as implemented merely because its wording appears in a README, UI, plan, status file, or completion message.

## Review the artifact before delivery

Remove prompt or plan wording without reader value, unsupported claims, history presented as capability, unnecessary comparisons, and repeated explanations. Verify completeness for the readers, then report the result and matching evidence rather than every omitted internal instruction.
