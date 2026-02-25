---
id: ml.k-means-clustering
title: K-Means Clustering
tags: [machine-learning, clustering, unsupervised-learning]
related: [ml.silhouette-score, ml.feature-scaling]
prereqs: []
---

# K-Means Clustering

<div class="formula" markdown="1">
## Formula
\[
\min_{\{C_k,\mu_k\}}\sum_{k=1}^{K}\sum_{x_i\in C_k}\|x_i-\mu_k\|_2^2
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(K\): number of clusters
- \(\mu_k\): cluster centroid
- \(C_k\): assigned points

</div>
## What it means
Partitions data into \(K\) clusters by alternating assignment and centroid updates.

## What it's used for
- Unsupervised segmentation and prototype-based summarization.
- Preprocessing for compression or downstream labeling.
## Key properties
- Sensitive to initialization and feature scaling.
- Assumes roughly spherical clusters under Euclidean distance.

## Common gotchas
- Empty clusters and local minima can occur.
- Use multiple restarts or k-means++ initialization.

## Example
Customer vectors are assigned to the nearest centroid, then centroids are recomputed iteratively.

## How to Compute (Pseudocode)
```text
Input: data points x[1..n] in R^d, number of clusters K, iterations T
Output: centroids mu[1..K], assignments c[1..n]

initialize centroids mu[1..K] (for example, k-means++)

for iter from 1 to T:
  # Assignment step
  for each point x_i:
    c[i] <- index of nearest centroid

  # Update step
  for each cluster k:
    mu[k] <- mean of points assigned to cluster k
    if cluster k is empty:
      reinitialize mu[k]

  if assignments/centroids stop changing enough:
    break

return mu, c
```

## Complexity
- Time: \(O(TnKd)\) for \(T\) iterations, \(n\) points, \(K\) clusters, and \(d\) features (dominant cost is assignment step)
- Space: \(O(nd + Kd + n)\) including data, centroids, and assignments
- Assumptions: Dense Euclidean k-means with full-batch updates; initialization and restart costs are excluded from the main bound

