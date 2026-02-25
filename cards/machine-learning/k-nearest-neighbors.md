---
id: ml.k-nearest-neighbors
title: K-Nearest Neighbors (k-NN)
tags: [machine-learning, supervised-learning, classification]
related: [ml.k-means-clustering, ml.feature-scaling, ml.cross-validation]
prereqs: [linalg.norms]
---

# K-Nearest Neighbors (k-NN)

<div class="formula" markdown="1">
## Formula
\[
\mathcal{N}_k(x)=\text{k nearest training points to } x
\]

\[
\hat y=
\begin{cases}
\mathrm{mode}\{y_i: x_i\in \mathcal{N}_k(x)\}, & \text{classification}\\
\frac{1}{k}\sum_{x_i\in \mathcal{N}_k(x)} y_i, & \text{regression}
\end{cases}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): query point
- \(\mathcal{N}_k(x)\): set of \(k\) nearest neighbors of \(x\)
- \(k\): number of neighbors
- \(y_i\): label/target of neighbor \(x_i\)

</div>
## What it means
k-NN predicts using the labels/targets of nearby training examples in feature space.

## What it's used for
- Simple baseline for classification and regression.
- Nonlinear decision boundaries without explicit parametric training.
- Local similarity-based prediction.
## Key properties
- Instance-based (lazy) learner: most computation happens at prediction time.
- Strongly depends on distance metric and feature scaling.
- Smaller \(k\) lowers bias but increases variance.

## Common gotchas
- k-NN is not a clustering algorithm; it is typically supervised.
- Unscaled features can dominate distance calculations.
- Prediction can be slow on large datasets without indexing/approximate search.
- Class imbalance can bias majority-vote outcomes.

## Example
To classify a new point, find its 5 nearest labeled examples and predict the majority class among them.

## How to Compute (Pseudocode)
```text
Input: training set {(x_i, y_i)}, query point x, neighbors k
Output: prediction y_hat

for each training point x_i:
  d[i] <- distance(x, x_i)

idx <- indices of the k smallest distances in d
if classification:
  return majority_vote(y_i for i in idx)
if regression:
  return average(y_i for i in idx)
```

## Complexity
- Time: Training/store phase is typically \(O(nd)\) just to store data; naive prediction is \(O(nd + n\log n)\) per query (or \(O(nd + n)\) with partial selection)
- Space: \(O(nd)\) to store \(n\) training points with \(d\) features (plus labels)
- Assumptions: \(n\) training examples, \(d\) features, brute-force neighbor search; tree/ANN indexes change prediction-time complexity and constants

## See also
- [K-Means Clustering](../machine-learning/k-means-clustering.md)
- [Feature Scaling (Standardization vs Normalization)](../machine-learning/feature-scaling.md)
- [Cross-Validation](../machine-learning/cross-validation.md)
