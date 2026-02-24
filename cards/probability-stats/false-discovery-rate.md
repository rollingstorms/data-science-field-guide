---
id: stat.false-discovery-rate
title: False Discovery Rate (FDR)
tags: [statistics, hypothesis-testing, inference]
related: [stat.benjamini-hochberg, stat.multiple-hypothesis-testing]
prereqs: [stat.multiple-hypothesis-testing]
---

# False Discovery Rate (FDR)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{FDR}=\mathbb{E}\left[\frac{V}{\max(R,1)}\right]
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(V\): number of false rejections
- \(R\): total number of rejections

</div>
## What it means
FDR is the expected fraction of rejected hypotheses that are false positives.

## What it's used for
- Large-scale testing where some false positives are tolerable but should be controlled.
- Reporting discoveries in exploratory analysis.
## Key properties
- Less conservative than strict family-wise error control.
- Commonly controlled using Benjamini-Hochberg.

## Common gotchas
- FDR is an expectation, not a guarantee for one experiment.
- Interpretation depends on how hypotheses are defined and selected.

## Example
In gene screening, controlling FDR at 5% balances discovery count and false positives.

## See also
- [P-Value](../probability-stats/p-value.md)
