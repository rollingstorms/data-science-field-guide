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

## See also
- [Normalized Mutual Information](../ml-metrics/normalized-mutual-information.md)
- [Fowlkes-Mallows Index](../ml-metrics/fowlkes-mallows-index.md)
