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

## How to Compute (Pseudocode)
```text
Input: p-values p[1..m] and target FDR level q
Output: rejected hypothesis set

sort p-values ascending with their hypothesis indices
find the largest k such that p_(k) <= (k/m) * q
reject hypotheses corresponding to p_(1), ..., p_(k)
return rejected set
```

## Complexity
- Time: \(O(m\log m)\) due to sorting \(m\) p-values
- Space: \(O(m)\) for sorted p-values/indices
- Assumptions: BH procedure shown; dependence structure affects guarantees but not the basic computational pattern

## See also
- [P-Value](../probability-stats/p-value.md)
