---
id: ml.silhouette-score
title: Silhouette Score
tags: [clustering, evaluation]
related: [graph.spectral-clustering, ml.davies-bouldin-index, ml.calinski-harabasz-score]
prereqs: []
---

# Silhouette Score

<div class="formula" markdown="1">
## Formula
\[
s(i)=\frac{b(i)-a(i)}{\max\{a(i),\,b(i)\}}
\]

\[
\mathrm{Silhouette}=\frac{1}{n}\sum_{i=1}^n s(i)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(a(i)\): mean distance from point \(i\) to points in its own cluster
- \(b(i)\): smallest mean distance from point \(i\) to another cluster (nearest cluster)
- \(n\): number of points

</div>
## What it means
Measures how well each point fits its assigned cluster versus neighboring clusters.

## What it's used for
- Comparing clustering quality across different \(k\).
- Detecting overlapping or poorly separated clusters.

## Key properties
- Range \([-1,1]\)
- Higher is better
- Works with any distance metric (not just Euclidean)

## Common gotchas
- Expensive for large datasets if pairwise distances are computed naively.
- Favors convex/spherical clusters more than irregular density-based shapes.

## Example
If a point has \(a(i)=0.4\) and \(b(i)=1.0\), then
\(s(i)=(1.0-0.4)/1.0=0.6\).

## How to Compute (Pseudocode)
```text
Input: data points, cluster labels (and metric-specific settings)
Output: silhouette score

compute the per-cluster and/or per-point quantities required by the metric
aggregate them according to the metric definition
return the metric value
```

## Complexity
- Time: Depends on the metric and implementation; many clustering validation metrics require at least \(O(n)\) scans, and some need pairwise distances (up to \(O(n^2)\))
- Space: Depends on whether pairwise distances are materialized (from \(O(1)\)/\(O(k)\) summaries up to \(O(n^2)\))
- Assumptions: \(n\) points and cluster labels are given; exact cost depends on distance computation/caching and metric-specific formulas

## See also
- [Davies-Bouldin Index](../ml-metrics/davies-bouldin-index.md)
- [Calinski-Harabasz Score](../ml-metrics/calinski-harabasz-score.md)
