# Card Spec

This spec defines the canonical card format for the handbook.

## Source of truth
- **Markdown body + YAML frontmatter**.
- Frontmatter stores metadata only (id/title/tags/related/prereqs).
- Content lives in the Markdown body.

## Required sections (order is strict)
1. `## Formula`
2. `## Parameters`
3. `## What it means`
4. `## Key properties`
5. `## Common gotchas`
6. `## Quick example` (optional)
7. `## See also` (optional)

## Section labels
- Use `##` headings for sections.

## Equations
- Display math allowed: `\[ ... \]`.
- Inline math allowed: `\( ... \)`.

## Style intent
- Formula is the hero (largest text on the page).
- Parameters are medium.
- Explanatory text is smaller (encyclopedia style).

## Valid example skeleton

```markdown
---
id: domain.topic
heading: Title
...
---

# Title

## Formula
\[
...
\]

## Parameters
- ...

## What it means
...

## Key properties
- ...

## Common gotchas
- ...

## Quick example
...

## See also
- ...
```
