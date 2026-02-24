---
id: stat.benjamini-hochberg
title: Benjamini-Hochberg Procedure
tags: [statistics, hypothesis-testing, fdr]
related: [stat.false-discovery-rate]
prereqs: [stat.false-discovery-rate]
---

# Benjamini-Hochberg Procedure

<div class="formula" markdown="1">
## Formula
\[
p_{(k)} \le \frac{k}{m}q
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p_{(k)}\): \(k\)-th smallest p-value
- \(m\): number of hypotheses
- \(q\): target FDR level

</div>
## What it means
Benjamini-Hochberg controls FDR by finding the largest ordered p-value under a linear threshold.

## What it's used for
- Practical FDR control in many-testing workflows.
- Post-hoc filtering of significant findings.
## Key properties
- Sort p-values, find largest passing index, reject all smaller p-values.
- Widely used because it is simple and more powerful than Bonferroni in many settings.

## Common gotchas
- Applied p-values should come from a coherent hypothesis family.
- Dependencies among tests can affect guarantees.

## Example
Sort 500 p-values, find the largest \(k\) meeting the BH line, and reject the first \(k\).

## See also
- [P-Value](../probability-stats/p-value.md)
