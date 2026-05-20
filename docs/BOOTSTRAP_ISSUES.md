# Bootstrap Issues

Create these issues after repository issues are enabled for the GitHub App or through the GitHub UI.

## 1. Set Up Branch Protection For Main

Protect `main` so collaboration follows the workflow.

Checklist:

- [ ] Require PR before merge.
- [ ] Require at least 1 approval.
- [ ] Dismiss stale approvals when new commits are pushed.
- [ ] Require conversation resolution.
- [ ] Require CI check `Validate project`.
- [ ] Block force pushes.
- [ ] Block branch deletion.
- [ ] Prefer squash merge.

Suggested labels: `type:task`, `area:ops`, `priority:high`.

## 2. Create Labels And Project Views

Create the labels from `.github/labels.yml` and create a GitHub Project with board, table, roadmap, blocked, and PR-review views.

Checklist:

- [ ] Create type labels.
- [ ] Create priority labels.
- [ ] Create area labels.
- [ ] Create status labels.
- [ ] Create risk labels.
- [ ] Create project fields: Status, Priority, Area, Owner, Target date, Risk, Notion link.
- [ ] Create saved views from `docs/GITHUB_SETUP.md`.

Suggested labels: `type:task`, `area:ops`, `priority:medium`.

## 3. Replace CODEOWNERS Placeholders

Replace placeholder teams in `.github/CODEOWNERS`.

Checklist:

- [ ] Replace `@your-org/maintainers`.
- [ ] Replace `@your-org/product`.
- [ ] Replace `@your-org/engineering`.
- [ ] Confirm CODEOWNERS review requests work on a test PR.

Suggested labels: `type:task`, `area:ops`, `priority:high`.

## 4. Connect Notion Request Inbox To GitHub Issues

Define when a Notion request becomes a GitHub issue.

Checklist:

- [ ] Pick the owner who triages Notion Request Inbox.
- [ ] Decide which Notion fields map to GitHub issue fields.
- [ ] Link GitHub issues back to Notion when work starts.
- [ ] Close or archive Notion requests after GitHub issue completion.

Suggested labels: `type:task`, `area:ops`, `priority:medium`.

## 5. First Product Slice

Choose the first user-facing slice to ship through the new workflow.

Checklist:

- [ ] Create feature issue from template.
- [ ] Write acceptance criteria.
- [ ] Create branch from issue.
- [ ] Open draft PR early.
- [ ] Merge after CI and review.

Suggested labels: `type:feature`, `area:app`, `priority:high`.
