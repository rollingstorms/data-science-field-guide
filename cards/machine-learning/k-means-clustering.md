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
