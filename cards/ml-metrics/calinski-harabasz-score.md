---
id: ml.calinski-harabasz-score
title: Calinski-Harabasz Score
tags: [clustering, evaluation]
related: [ml.silhouette-score, ml.davies-bouldin-index]
prereqs: []
---

# Calinski-Harabasz Score

<div class="formula" markdown="1">
## Formula
\[
\mathrm{CH}
=
\frac{\operatorname{tr}(B_k)/(k-1)}{\operatorname{tr}(W_k)/(n-k)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(n\): number of points
- \(k\): number of clusters
- \(W_k\): within-cluster dispersion matrix
- \(B_k\): between-cluster dispersion matrix
- \(\operatorname{tr}(\cdot)\): matrix trace

</div>
## What it means
Ratio of between-cluster dispersion to within-cluster dispersion, adjusted for degrees of freedom.

## What it's used for
- Internal clustering validation.
- Selecting number of clusters \(k\) (often maximize CH).

## Key properties
- Higher is better
- Common for k-means-like clustering
- Scale-invariant under uniform scaling of distances

## Common gotchas
- Often favors larger \(k\) on some datasets.
- Less reliable for highly non-spherical or variable-density clusters.

## Example
If clusters are tight (small \(W_k\)) and far apart (large \(B_k\)), CH is large.

## See also
- [Silhouette Score](../ml-metrics/silhouette-score.md)
- [Davies-Bouldin Index](../ml-metrics/davies-bouldin-index.md)
