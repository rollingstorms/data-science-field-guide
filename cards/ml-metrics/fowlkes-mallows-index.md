---
id: ml.fowlkes-mallows-index
title: Fowlkes-Mallows Index
tags: [clustering, evaluation, external-validation]
related: [ml.precision, ml.recall, ml.adjusted-rand-index]
prereqs: [ml.precision, ml.recall]
---

# Fowlkes-Mallows Index

<div class="formula" markdown="1">
## Formula
\[
\mathrm{FM}=\frac{\mathrm{TP}}{\sqrt{(\mathrm{TP}+\mathrm{FP})(\mathrm{TP}+\mathrm{FN})}}
=\sqrt{\mathrm{Precision}\cdot \mathrm{Recall}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathrm{TP},\mathrm{FP},\mathrm{FN}\): pair-counts over point pairs for two partitions
- Precision/Recall: computed on pairwise same-cluster decisions

</div>
## What it means
Geometric mean of pairwise precision and recall for clustering agreement.

## What it's used for
- External clustering validation against reference labels.
- Comparing clustering outputs using pairwise membership decisions.

## Key properties
- Range \([0,1]\), higher is better
- Invariant to cluster label permutations

## Common gotchas
- Pairwise counts scale as \(O(n^2)\) conceptually (implementations optimize this).
- Not adjusted for chance (unlike ARI).

## Example
If pairwise precision is \(0.81\) and recall is \(0.64\), then
\(\mathrm{FM}=\sqrt{0.81\cdot0.64}=0.72\).

## See also
- [Adjusted Rand Index (ARI)](../ml-metrics/adjusted-rand-index.md)
- [Precision](../ml-metrics/precision.md)
- [Recall](../ml-metrics/recall.md)
