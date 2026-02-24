# Card Spec

This spec defines the canonical card format for the handbook.

## Source of truth
- **Markdown body + YAML frontmatter**.
- Frontmatter stores metadata only (id/title/tags/related/prereqs).
- Content lives in the Markdown body.
- Optional plot visuals live in an inline Markdown code fence (see `## Optional plot block`).

## Required sections (order is strict)
1. `## Formula`
2. `## Parameters`
3. `## What it means`
4. `## What it's used for`
5. `## Key properties`
6. `## Common gotchas`
7. `## Example`
8. `## See also` (optional)

## Section labels
- Use `##` headings for sections.
- `## Plot` is optional if you want a labeled plot section.

## Equations
- Display math allowed: `\[ ... \]`.
- Inline math allowed: `\( ... \)`.

## Optional plot block
- Plots are optional and should not be required for a valid card.
- Use a fenced code block with language `plot`.
- The renderer reads this block client-side in MkDocs and leaves cards without it unchanged.
- Recommended fields:
  - `fn` (single curve) or `fns` (multiple curves separated by `|`)
  - `type: bars` plus `xs` and `ys` for bar charts (each `|`-separated)
  - `xmin`, `xmax`, `ymin`, `ymax` (optional bounds)
  - `height`, `width` (optional pixel sizing)
  - `title`, `color`, `grid` (optional display settings)
  - `colors`, `labels` (optional `|`-separated lists for `fns`)

Example:

````markdown
## Plot
```plot
fns: tanh(x) | 1/(1+exp(-x))
colors: #ff6b2c | #1f6feb
labels: tanh | sigmoid
xmin: -4
xmax: 4
ymin: -1.2
ymax: 1.2
height: 280
title: tanh(x)
```
````

Bar chart example:

````markdown
## Plot
```plot
type: bars
xs: 0 | 1 | 2 | 3
ys: 0.1 | 0.3 | 0.4 | 0.2
xmin: -0.5
xmax: 3.5
ymin: 0
ymax: 0.5
title: Example PMF
```
````

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

## Plot
```plot
fn: sin(x)
xmin: -6.28
xmax: 6.28
ymin: -1.2
ymax: 1.2
```

## Parameters
- ...

## What it means
...

## What it's used for
...

## Key properties
- ...

## Common gotchas
- ...

## Example
...

## See also
- ...
```
