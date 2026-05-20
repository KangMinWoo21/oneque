# Contributing

This repository uses a lightweight professional workflow: small issues, short-lived branches, reviewed pull requests, and visible decisions.

## Work Intake

1. Create or pick a GitHub issue before starting meaningful work.
2. Link the relevant Notion page when context lives in the Team Dashboard.
3. Assign an owner, priority, and target date when the work has a deadline.
4. Keep one issue focused on one outcome.

## Branch Naming

Use short, searchable branch names:

- `feature/<issue-number>-short-name`
- `fix/<issue-number>-short-name`
- `docs/<issue-number>-short-name`
- `chore/<issue-number>-short-name`

Examples:

- `feature/12-request-inbox-form`
- `fix/18-mobile-layout-overlap`
- `docs/21-github-workflow`

## Commit Style

Use clear, scoped commits:

- `feat: add request inbox form`
- `fix: handle empty task due date`
- `docs: document release process`
- `chore: update github templates`

## Pull Requests

Every PR should:

- Stay small enough to review in one sitting.
- Link the issue and relevant Notion page.
- Explain why the change exists, not only what changed.
- Include validation steps.
- Include screenshots for UI changes.
- Avoid unrelated refactors.

## Review Standard

Reviewers should check:

- Correctness and edge cases.
- User impact and copy clarity.
- Maintainability.
- Test or validation coverage.
- Security, privacy, and data exposure risks.

Approve only when the PR is understandable, validated, and safely reversible.

## Definition of Done

A change is done when:

- Acceptance criteria are met.
- CI passes.
- At least one reviewer approved, unless the repo is temporarily solo-maintained.
- Relevant docs, Notion pages, or GitHub issues are updated.
- Rollback or follow-up work is clear.
