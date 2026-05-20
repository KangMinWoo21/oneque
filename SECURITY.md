# Security Policy

## Reporting

Do not open public GitHub issues for secrets, credentials, personal data exposure, or exploitable vulnerabilities.

Use a private channel agreed by the maintainers until GitHub private vulnerability reporting is enabled.

## Secrets

- Never commit API keys, tokens, certificates, or private credentials.
- Store local secrets in ignored environment files.
- Rotate any secret that may have been exposed.

## Data Handling

This workspace may contain business plans, documents, PDFs, and operational material. Treat them as private unless explicitly approved for public release.

Before sharing screenshots or logs:

- Remove personal data.
- Remove access tokens and URLs with credentials.
- Remove private customer, partner, or financial details.

## Dependency Updates

When dependencies are introduced later:

- Prefer maintained packages.
- Review install scripts.
- Pin lockfiles.
- Let CI run before merging.
