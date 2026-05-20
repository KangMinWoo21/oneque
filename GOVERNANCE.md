# Governance

## Roles

- Maintainer: owns repository settings, releases, branch protection, and final merge decisions.
- Reviewer: checks correctness, risk, and maintainability.
- Contributor: implements scoped issues and keeps PRs reviewable.
- Product owner: clarifies priorities, acceptance criteria, and user impact.

## Decision Making

Use Notion Decision Log for decisions that affect product direction, data model, architecture, launch, or team process.

Each decision should include:

- Decision
- Context
- Owner
- Impact
- Follow-up

## Merge Policy

Default merge method: squash merge.

Merge only when:

- CI passes.
- Required review is complete.
- Conversations are resolved.
- The PR description includes validation.

## Escalation

Use `status:blocked` when work cannot continue. The issue or PR should explain:

- What is blocked.
- Who can unblock it.
- What decision or resource is needed.
