# Project Workflow

This document defines how GitHub and Notion work together.

## Source of Truth

- GitHub issues track actionable work.
- GitHub pull requests track code and document changes.
- Notion stores operating context: decisions, meeting notes, plans, and resources.
- GitHub Actions verifies that changes are safe to merge.

## Board Columns

Use these issue states through labels or project columns:

- `status:triage`: needs clarification or prioritization.
- `status:ready`: ready to be picked up.
- `status:in-progress`: actively being worked.
- `status:review`: PR is open or review is needed.
- `status:blocked`: cannot proceed without external input.
- `status:done`: shipped or completed.

## Labels

Recommended labels:

- Type: `type:bug`, `type:feature`, `type:task`, `type:docs`, `type:chore`
- Priority: `priority:high`, `priority:medium`, `priority:low`
- Area: `area:app`, `area:docs`, `area:ops`, `area:design`, `area:growth`
- Status: `status:triage`, `status:ready`, `status:in-progress`, `status:review`, `status:blocked`
- Risk: `risk:high`, `risk:medium`, `risk:low`

## Weekly Operating Loop

1. Triage new issues and Notion Request Inbox items.
2. Move clear issues to `status:ready`.
3. Pick the smallest valuable work first.
4. Open draft PRs early for complex work.
5. Review merged work and close linked issues.
6. Move decisions from meeting notes into Decision Log.

## Daily Loop

1. Check blocked work.
2. Check in-progress PRs.
3. Review CI failures.
4. Update issue status and owner.
5. Record important decisions in Notion.

## Branch Protection Recommendation

Enable these settings on `main` once the GitHub repository exists:

- Require pull request before merging.
- Require at least 1 approval.
- Dismiss stale approvals when new commits are pushed.
- Require CI to pass.
- Require conversation resolution before merge.
- Restrict force pushes and deletions.
- Use squash merge by default.
