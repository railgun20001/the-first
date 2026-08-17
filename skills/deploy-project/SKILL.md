---
name: deploy-project
description: Prepare, authorize, execute, verify, document, and roll back software deployment using the accepted technical and preliminary deployment solution. Use when accepted feature slices are ready for staging or production, when deployment configuration or runbooks must be completed, or when a user asks to build, publish artifacts, push images, migrate data, provision infrastructure, change DNS, or release. Require explicit authorization for each material external effect and distinguish local, CI, staging, production technical, and business acceptance evidence.
---

# Deploy Project

Turn an accepted deployment design into controlled, observable implementation. Production activity is never implied by development completion.

## Reconfirm readiness

Before changing deployment state:

1. Read project instructions, `THE-FIRST.md`, accepted requirements, technical and deployment sources, active feedback rules, completed feature slices, and existing runbooks.
2. Verify all release-scope slices are accepted and committed. List intentionally deferred work.
3. Inspect actual Git branch, commit, tags, working tree, build configuration, lock files, migrations, infrastructure, CI, container definitions, and deployment target state available to the current environment.
4. Confirm the preliminary deployment design still matches the current code, data, environment, target platform, and user intent.
5. Surface stale assumptions, uncommitted release changes, missing access, or environment drift before proceeding.

Do not turn a green local suite, a successful build, or an old runbook into proof that production is ready.

## Complete the deployment contract

Resolve and document:

- Exact source commit, version, artifact, or image digest.
- Target environment, hosts, services, regions, topology, domains, and ports.
- Build location, reproducibility, artifact storage, image registry, and promotion path.
- Configuration owners, secret references, certificates, and environment-specific values. Never copy secret values into project documents or `THE-FIRST.md`.
- Persistent storage, database migrations, compatibility window, maintenance needs, and irreversible operations.
- Backup scope, restore check, rollback unit, rollback trigger, and recovery owner.
- Health checks, logs, metrics, alerts, smoke tests, and business acceptance path.
- Expected user impact, downtime, communication, and release window where relevant.

Reuse an existing deployment source or runbook. If none exists, follow project conventions and fall back to `docs/project/deployment-runbook.md`.

## Request exact authorization

Separate materially different effects. State the target, command or operation class, expected impact, verification, and rollback before asking permission for any of these when applicable:

- Creating or modifying infrastructure.
- Creating accounts, services, repositories, registries, or cloud resources.
- Building or uploading public or private artifacts.
- Pushing images or source branches.
- Changing DNS, certificates, firewalls, routing, or environment configuration.
- Running database or data migrations.
- Restarting, scaling, replacing, or releasing services.
- Deleting, overwriting, or irreversibly transforming data or resources.

Authorization for a dry run, build, staging deploy, or one target does not authorize production or another target. If access is unavailable, provide exact operator steps and retain a handoff state rather than pretending execution occurred.

## Validate the safest available path first

Before production when the project supports it:

1. Validate configuration and required variables without exposing secrets.
2. Build from the intended commit using the accepted toolchain.
3. Run required static, unit, integration, migration, security, and packaging checks.
4. Verify artifact identity, contents, provenance, and startup behavior.
5. Exercise migrations and rollback on isolated or representative data when feasible.
6. Deploy to a local, ephemeral, or staging environment and run technical smoke tests and the critical business path.
7. Record what the safer environment cannot prove about production.

Do not create an extra environment merely for ceremony. Use the minimum existing safe boundary that can falsify the deployment design.

## Execute step by step

For an authorized deployment:

1. Capture pre-deploy health and the rollback reference.
2. Confirm backup completion or explicitly accepted absence.
3. Execute only the approved next operation.
4. Inspect its actual output and target state before dependent operations.
5. Stop on unexpected failure, drift, or an invalidated assumption.
6. Preserve logs and evidence without leaking secrets.
7. Use the approved rollback when its trigger is reached; do not improvise a destructive recovery.
8. After technical health passes, run the user-visible business checks.

Never chain high-impact operations so later steps run after an unchecked failure.

## Report evidence precisely

Classify results separately:

- Local validation.
- CI validation.
- Staging technical validation.
- Staging business acceptance.
- Production technical validation.
- Production business acceptance.

For each, record target, source version, command or check, result, timestamp, observer, and remaining boundary. A successful health endpoint does not prove the complete business workflow.

Update the existing release record or runbook, and use `$track-project-progress` to link the evidence, deployment status, rollback outcome, and next action. Commit deployment configuration or documentation changes as focused repository changes before pushing when the project requires Git delivery.

## Close with human acceptance or handoff

Provide:

1. **Result** — what was built, changed, deployed, rolled back, or left ready for an operator.
2. **Evidence** — each verified environment and its actual scope.
3. **Recommended user action** — the shortest production or handoff business acceptance path.
4. **Suggested next step** — accept, monitor, roll back, or resolve a named issue.
5. **Awaiting confirmation** — request production business acceptance when deployment occurred.

Mark the project `complete` only after the user accepts the delivered outcome or explicitly accepts a documented deployment handoff without execution. Otherwise preserve the exact deployment phase, blocker, and next action.
