---
id: graph.network-significance-profile
title: Network Significance Profile
tags: [graphs, motifs, statistics]
related: [prob.z-score]
prereqs: [prob.z-score]
---

# Network Significance Profile

<div class="formula" markdown="1">
## Formula
\[
\mathrm{SP}_i = \frac{Z_i}{\sqrt{\sum_j Z_j^2}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(Z_i\): z-score for motif \(i\) (observed vs null)
- \(\mathrm{SP}_i\): normalized significance profile component

</div>
## What it means
A unit-length vector of motif z-scores that summarizes a network's motif structure.



## What it's used for
- Comparing networks by motif patterns.
- Clustering or classifying graphs by structural signatures.

## Key properties
- \(\sum_i \mathrm{SP}_i^2 = 1\) (L2 normalization).
- Preserves relative motif significance.

## Common gotchas
- Depends on the choice of null model for \(Z_i\).
- Unstable when all \(Z_i\) are near zero.

## Example
If \(Z=[2,1]\), then \(\mathrm{SP}=[2/\sqrt{5}, 1/\sqrt{5}]\).

## How to Compute (Pseudocode)
```text
Input: motif z-scores Z[1..m]
Output: significance profile SP[1..m]

norm <- sqrt(sum_{i=1..m} Z[i]^2)
if norm == 0:
  handle degenerate case (for example, return zeros or mark undefined)
for i from 1 to m:
  SP[i] <- Z[i] / norm

return SP
```

## Complexity
- Time: \(O(m)\) for \(m\) motif z-scores
- Space: \(O(m)\) for the output profile (or \(O(1)\) extra if normalizing in place)
- Assumptions: Motif z-scores are already computed; the cost of motif counting/null-model estimation is excluded and can dominate overall runtime

## See also
- [Graph Motifs](../graphs/graph-motifs.md)
- [Z-Score](../probability-stats/z-score.md)
