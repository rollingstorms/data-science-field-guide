---
id: ml.dbscan
title: DBSCAN
tags: [machine-learning, clustering, unsupervised-learning]
related: [ml.density-based-clustering-validation, ml.feature-scaling]
prereqs: []
---

# DBSCAN

<div class="formula" markdown="1">
## Formula
\[
\text{core point } x_i: |\{x_j: d(x_i,x_j)\le \varepsilon\}| \ge \text{MinPts}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\varepsilon\): neighborhood radius
- \(\text{MinPts}\): minimum points for a dense region

</div>
## What it means
Density-based clustering groups points in dense regions and labels sparse points as noise.

## What it's used for
- Finding arbitrarily shaped clusters.
- Outlier-aware clustering without specifying \(K\).
## Key properties
- Naturally identifies noise points.
- Works poorly when cluster densities differ strongly.

## Common gotchas
- Feature scaling and distance choice matter a lot.
- Parameter tuning can be difficult in high dimensions.

## Example
GPS points form route clusters while isolated points remain labeled as noise.

## How to Compute (Pseudocode)
```text
Input: points x[1..n], radius eps, MinPts
Output: cluster labels (including noise)

mark all points as unvisited
cluster_id <- 0

for each point p:
  if p is visited:
    continue
  mark p visited
  N <- neighbors within distance eps of p
  if size(N) < MinPts:
    label p as noise (tentatively)
    continue

  cluster_id <- cluster_id + 1
  assign p to cluster_id
  expand cluster by repeatedly visiting neighbors:
    if a neighbor q is unvisited, mark visited and query its eps-neighbors
    if q is a core point, add its neighbors to the expansion frontier
    assign density-reachable points to cluster_id

return labels
```

## Complexity
- Time: Depends on neighborhood-query implementation; typically \(O(n\log n)\) to \(O(n^2)\), with \(O(n^2)\) worst case for naive distance checks
- Space: \(O(n)\) to \(O(n^2)\) depending on whether neighborhoods/distances are materialized
- Assumptions: \(n\) points; indexing structures (KD-tree/ball tree/grid) and data dimensionality strongly affect runtime

