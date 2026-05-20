# GitHub Setup Playbook

Use this after creating or choosing the GitHub repository.

## 1. Create or Connect the Repository

If this folder is not yet a git repository:

```powershell
git init
git add .
git commit -m "chore: set up collaboration workflow"
git branch -M main
git remote add origin https://github.com/OWNER/REPO.git
git push -u origin main
```

If the repository already exists, add the remote and push to a setup branch instead:

```powershell
git remote add origin https://github.com/OWNER/REPO.git
git checkout -b chore/github-collaboration-setup
git add .
git commit -m "chore: set up github collaboration workflow"
git push -u origin chore/github-collaboration-setup
```

## 2. Replace CODEOWNERS Placeholders

Update `.github/CODEOWNERS` after teams exist:

- Replace `@your-org/maintainers`.
- Replace `@your-org/product`.
- Replace `@your-org/engineering`.

If this is a solo repo, use your GitHub username instead.

## 3. Create Labels

Create these labels in GitHub:

The canonical machine-readable list lives in `.github/labels.yml`.

| Label | Color | Purpose |
| --- | --- | --- |
| `type:bug` | `d73a4a` | Defect |
| `type:feature` | `0e8a16` | User-facing feature |
| `type:task` | `1d76db` | Work item |
| `type:docs` | `0075ca` | Documentation |
| `type:chore` | `cfd3d7` | Maintenance |
| `priority:high` | `b60205` | Urgent or important |
| `priority:medium` | `fbca04` | Normal priority |
| `priority:low` | `0e8a16` | Low priority |
| `area:app` | `5319e7` | App code |
| `area:docs` | `0075ca` | Docs/content |
| `area:ops` | `6f42c1` | Workflow/automation |
| `area:design` | `cc317c` | UX/UI |
| `area:growth` | `fbca04` | Business/growth |
| `status:triage` | `ededed` | Needs review |
| `status:ready` | `c2e0c6` | Ready to start |
| `status:in-progress` | `bfdadc` | Being worked |
| `status:review` | `d4c5f9` | Needs review |
| `status:blocked` | `e99695` | Blocked |
| `risk:high` | `b60205` | High-risk change |
| `risk:medium` | `fbca04` | Medium-risk change |
| `risk:low` | `0e8a16` | Low-risk change |
| `dependencies` | `0366d6` | Dependency updates |

## 4. Create a GitHub Project

Recommended project views:

- Board by status.
- Table by priority.
- Roadmap by target date.
- Saved filter: `is:open label:status:blocked`.
- Saved filter: `is:pr is:open review:required`.

Recommended fields:

- Status
- Priority
- Area
- Owner
- Target date
- Risk
- Notion link

## 5. Enable Branch Protection

Protect `main`:

- Require pull request before merging.
- Require at least 1 approval.
- Dismiss stale approvals.
- Require conversation resolution.
- Require CI status check: `Validate project`.
- Block force pushes.
- Block branch deletion.
- Prefer squash merge.

## 6. Enable Repository Hygiene

Recommended settings:

- Enable Dependabot alerts.
- Enable Dependabot security updates.
- Enable secret scanning if available.
- Disable direct pushes to `main`.
- Keep issues and projects enabled.
- Use draft PRs for work in progress.

## 7. Working Agreement

Use GitHub for execution and Notion for context:

- Notion Request Inbox -> GitHub issue when work becomes actionable.
- Notion Decision Log -> PR links when decisions affect implementation.
- GitHub issue -> PR -> CI -> review -> merge.
- Release notes -> Notion project status update.

## 8. Bootstrap Issues

Create the operating setup issues from `docs/BOOTSTRAP_ISSUES.md`.

These issues make the remaining repository setup visible instead of leaving it as tribal knowledge.
