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
