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

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
