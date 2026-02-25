---
id: ml.density-based-clustering-validation
title: Density-Based Clustering Validation (DBCV)
tags: [clustering, evaluation, density-based]
related: [ml.silhouette-score, graph.spectral-clustering]
prereqs: []
---

# Density-Based Clustering Validation (DBCV)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{DBCV}
=
\sum_{i=1}^k \frac{|C_i|}{n}\,V(C_i)
\]

\[
V(C_i)=\frac{\mathrm{Sep}(C_i)-\mathrm{Spar}(C_i)}
{\max\{\mathrm{Sep}(C_i),\mathrm{Spar}(C_i)\}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(C_i\): cluster \(i\)
- \(|C_i|\): size of cluster \(i\)
- \(n\): total number of clustered points
- \(\mathrm{Spar}(C_i)\): density-based sparseness (internal density weakness)
- \(\mathrm{Sep}(C_i)\): density-based separation from the nearest other cluster

</div>
## What it means
Internal clustering score designed for density-based clusters (e.g., arbitrary shapes), balancing density separation against internal sparseness.

## What it's used for
- Evaluating DBSCAN/HDBSCAN-style clustering.
- Comparing density-based clusterings where centroid-based metrics fail.

## Key properties
- Typically interpreted on \([-1,1]\) with higher better
- Better aligned with non-convex clusters than centroid-based indices

## Common gotchas
- Multiple DBCV implementations differ in exact density graph details.
- Noise/outlier handling is implementation-specific and can change the score.

## Example
If clusters are internally dense and well-separated in density space, \(\mathrm{Sep}\gg \mathrm{Spar}\), so DBCV is high.

## How to Compute (Pseudocode)
```text
Input: data points, cluster labels (and metric-specific settings)
Output: density-based clustering validation metric

compute the per-cluster and/or per-point quantities required by the metric
aggregate them according to the metric definition
return the metric value
```

## Complexity
- Time: Depends on the metric and implementation; many clustering validation metrics require at least \(O(n)\) scans, and some need pairwise distances (up to \(O(n^2)\))
- Space: Depends on whether pairwise distances are materialized (from \(O(1)\)/\(O(k)\) summaries up to \(O(n^2)\))
- Assumptions: \(n\) points and cluster labels are given; exact cost depends on distance computation/caching and metric-specific formulas

## See also
- [Silhouette Score](../ml-metrics/silhouette-score.md)
