# Review Guide

## What Reviewers Should Prioritize

1. Does the change solve the stated problem?
2. Are edge cases handled?
3. Is the implementation easy to maintain?
4. Is the user experience clear?
5. Are privacy, security, and data risks controlled?
6. Is validation convincing?

## Review Comment Style

Use severity prefixes:

- `[P0]` Must fix before merge.
- `[P1]` Should fix before merge.
- `[P2]` Should consider, but may be follow-up.
- `[P3]` Optional polish.

Good review comments include:

- The specific risk.
- The exact file or behavior.
- A suggested fix or question.

## When to Request Changes

Request changes when:

- The PR can break a core workflow.
- CI fails for a relevant reason.
- Acceptance criteria are missing.
- Sensitive data may be exposed.
- The implementation is hard to safely maintain.

## When to Approve

Approve when:

- The change is understandable.
- Validation is adequate.
- Known risks are documented.
- Follow-up work is tracked.
