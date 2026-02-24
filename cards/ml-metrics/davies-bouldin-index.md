---
id: ml.davies-bouldin-index
title: Davies-Bouldin Index
tags: [clustering, evaluation]
related: [ml.silhouette-score, ml.calinski-harabasz-score]
prereqs: []
---

# Davies-Bouldin Index

<div class="formula" markdown="1">
## Formula
\[
\mathrm{DB}=\frac{1}{k}\sum_{i=1}^k \max_{j\ne i}\left(\frac{S_i+S_j}{M_{ij}}\right)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(k\): number of clusters
- \(S_i\): within-cluster scatter for cluster \(i\) (e.g., mean distance to centroid)
- \(M_{ij}\): distance between centroids of clusters \(i\) and \(j\)

</div>
## What it means
Compares cluster spread to separation; each cluster is penalized by its most similar other cluster.

## What it's used for
- Internal validation when no ground-truth labels exist.
- Choosing \(k\) for centroid-based clustering.

## Key properties
- Lower is better
- Uses both compactness and separation
- Fast to compute once centroids/scatters are available

## Common gotchas
- Assumes centroid/spread summaries are meaningful.
- Can be misleading for non-convex clusters.

## Example
If each cluster has a nearby overlapping neighbor, the max ratios are large, so DB increases (worse clustering).

## See also
- [Silhouette Score](../ml-metrics/silhouette-score.md)
- [Calinski-Harabasz Score](../ml-metrics/calinski-harabasz-score.md)
