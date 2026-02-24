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

## See also
- [Mutual Information](../info-theory/mutual-information.md)
- [Adjusted Rand Index (ARI)](../ml-metrics/adjusted-rand-index.md)
