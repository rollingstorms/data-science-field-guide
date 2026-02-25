---
id: ml.adjusted-rand-index
title: Adjusted Rand Index (ARI)
tags: [clustering, evaluation, external-validation]
related: [ml.normalized-mutual-information, ml.fowlkes-mallows-index]
prereqs: []
---

# Adjusted Rand Index (ARI)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{ARI}=\frac{\mathrm{RI}-\mathbb{E}[\mathrm{RI}]}
{\max(\mathrm{RI})-\mathbb{E}[\mathrm{RI}]}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathrm{RI}\): Rand Index (pairwise agreement between two partitions)
- \(\mathbb{E}[\mathrm{RI}]\): expected RI under random label assignments

</div>
## What it means
Measures agreement between predicted clusters and ground-truth labels, adjusted for chance.

## What it's used for
- External clustering evaluation when reference labels are available.
- Comparing clustering algorithms across datasets.

## Key properties
- Range is approximately \([-1,1]\), with \(1\) perfect match
- \(0\) is chance-level agreement
- Invariant to label permutation

## Common gotchas
- Requires ground-truth labels (not an internal metric).
- Sensitive to how noise/unassigned points are handled.

## Example
If two clusterings match exactly up to label renaming, \(\mathrm{ARI}=1\).

## How to Compute (Pseudocode)
```text
Input: true labels and predicted labels (or sets/masks, depending on the metric)
Output: ARI score

build the contingency table / overlap counts needed by the metric
compute the metric numerator and denominator from those counts
apply any normalization/adjustment terms required by the definition
return the score
```

## Complexity
- Time: Typically \(O(n)\) to accumulate counts over \(n\) labeled examples once labels/sets are aligned (plus optional \(O(k^2)\) work on contingency tables for some metrics)
- Space: Depends on the contingency-table size (from \(O(1)\) count accumulators to \(O(k_1 k_2)\) for label-table storage)
- Assumptions: Exact complexity depends on binary-mask vs multiclass-label formulation and whether pair-count terms are computed from counts or explicit pairs

## See also
- [Normalized Mutual Information](../ml-metrics/normalized-mutual-information.md)
- [Fowlkes-Mallows Index](../ml-metrics/fowlkes-mallows-index.md)
