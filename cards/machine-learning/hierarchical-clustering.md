---
id: ml.hierarchical-clustering
title: Hierarchical Clustering
tags: [machine-learning, clustering, unsupervised-learning]
related: [ml.davies-bouldin-index, ml.calinski-harabasz-score]
prereqs: []
---

# Hierarchical Clustering

<div class="formula" markdown="1">
## Formula
\[
d(A\cup B,C)=\text{linkage}(A,B,C)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A,B,C\): clusters
- linkage: single/complete/average/Ward choice

</div>
## What it means
Builds a tree of nested clusters by repeatedly merging (agglomerative) or splitting groups.

## What it's used for
- Exploratory clustering when \(K\) is unknown.
- Dendrogram-based analysis of structure.
## Key properties
- Produces a hierarchy, not just one partition.
- Result depends strongly on distance metric and linkage.

## Common gotchas
- Computationally expensive on large datasets.
- Different linkage choices can change conclusions a lot.

## Example
Analysts cut a dendrogram at a chosen height to obtain a working number of clusters.

## How to Compute (Pseudocode)
```text
Input: data points, distance metric, linkage rule
Output: dendrogram / merge tree

start with each point as its own cluster
compute pairwise cluster distances (initially point distances)
while more than one cluster remains:
  find the closest pair of clusters A, B under the linkage rule
  merge A and B into a new cluster
  update distances from the new cluster to all other clusters

return the merge history (dendrogram)
```

## Complexity
- Time: Depends on the implementation/linkage; naive agglomerative clustering is often \(O(n^3)\), while common optimized implementations are around \(O(n^2)\) memory and \(O(n^2 \log n)\) or \(O(n^2)\) time for some linkage choices
- Space: Typically \(O(n^2)\) to store pairwise distances or proximity structures
- Assumptions: \(n\) points; exact complexity depends on linkage type, distance updates, and implementation details

