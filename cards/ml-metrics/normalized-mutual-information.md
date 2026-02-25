---
id: ml.normalized-mutual-information
title: Normalized Mutual Information (NMI)
tags: [clustering, evaluation, information-theory]
related: [info.mutual-information, ml.adjusted-rand-index]
prereqs: [info.mutual-information]
---

# Normalized Mutual Information (NMI)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{NMI}(U,V)=\frac{I(U;V)}{\sqrt{H(U)\,H(V)}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(U,V\): two cluster labelings / partitions
- \(I(U;V)\): mutual information between partitions
- \(H(U),H(V)\): entropies of the partitions

</div>
## What it means
Measures how much information two clusterings share, normalized to reduce scale effects.

## What it's used for
- External clustering evaluation against reference labels.
- Comparing agreement across runs/algorithms.

## Key properties
- Usually in \([0,1]\), with \(1\) indicating identical partitions (up to permutation)
- Invariant to label permutation
- Several normalization variants exist

## Common gotchas
- Libraries may use different normalizations (geometric mean, arithmetic mean, max).
- Compare scores only when using the same NMI definition.

## Example
If two partitions are identical up to label names, NMI is 1.

## How to Compute (Pseudocode)
```text
Input: true labels and predicted labels (or sets/masks, depending on the metric)
Output: NMI score

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
- [Mutual Information](../info-theory/mutual-information.md)
- [Adjusted Rand Index (ARI)](../ml-metrics/adjusted-rand-index.md)
