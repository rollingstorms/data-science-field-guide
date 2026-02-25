---
id: ml.random-forest
title: Random Forest
tags: [machine-learning, models]
related: [ml.decision-tree, stat.bootstrap]
prereqs: []
---

# Random Forest

<div class="formula" markdown="1">
## Formula
\[
\hat f(x)=\frac{1}{B}\sum_{b=1}^{B} T_b(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(T_b\): tree grown on a bootstrap sample with feature subsampling
- \(B\): number of trees

</div>
## What it means
Random forest averages many decorrelated trees to reduce variance and improve generalization.

## What it's used for
- Strong tabular baseline.
- Feature importance and robust nonlinear modeling.
## Key properties
- Usually needs less tuning than boosting.
- Out-of-bag estimates can provide quick validation signals.

## Common gotchas
- Impurity-based importances can be biased toward high-cardinality features.
- Large forests can be memory-heavy.

## Example
A fraud model averages 500 trees trained on bootstrap samples and random feature subsets.

## How to Compute (Pseudocode)
```text
Input: training data X, y; number of trees B; tree settings
Output: trained forest {T_1, ..., T_B}

forest <- empty list
for b from 1 to B:
  draw a bootstrap sample of the training data
  grow a decision tree using random feature subsampling at each split
  add the tree T_b to forest

# Prediction
for query x:
  aggregate tree predictions (average for regression, vote/probability average for classification)
```

## Complexity
- Time: Training scales roughly linearly with the number of trees \(B\), times the cost of training one randomized tree; prediction scales with \(B\) times per-tree traversal cost
- Space: Typically \(O(B \cdot \mathrm{tree\_size})\) for storing the ensemble, plus training data storage
- Assumptions: Exact complexity depends on tree depth limits, split search strategy, feature subsampling, and whether trees are trained in parallel

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
