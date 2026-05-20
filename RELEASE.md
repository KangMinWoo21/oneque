# Release Process

This project uses small, reviewable releases.

## Versioning

Use date-based release notes until the product needs semantic versioning:

- `YYYY.MM.DD` for operational releases.
- `v0.x.y` only when packaging or public distribution requires it.

## Release Checklist

- [ ] All planned PRs are merged.
- [ ] CI is passing on `main`.
- [ ] Known risks are documented.
- [ ] User-facing copy and docs are updated.
- [ ] Notion project status is updated.
- [ ] Rollback plan is clear.

## Release Notes Format

```markdown
## YYYY-MM-DD

### Added
- 

### Changed
- 

### Fixed
- 

### Known Risks
- 
```

## Hotfixes

For urgent fixes:

1. Create `fix/<issue-number>-short-name`.
2. Keep the PR as small as possible.
3. Require one reviewer if available.
4. Merge after CI passes.
5. Add a short release note and link the issue.
