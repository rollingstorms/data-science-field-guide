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
- \(	ext{MinPts}\): minimum points for a dense region

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
