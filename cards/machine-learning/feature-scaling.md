---
id: ml.feature-scaling
title: Feature Scaling (Standardization vs Normalization)
tags: [machine-learning, preprocessing, features]
related: [ml.categorical-encoding, ml.imputation]
prereqs: [prob.mean, prob.standard-deviation]
---

# Feature Scaling (Standardization vs Normalization)

<div class="formula" markdown="1">
## Formula
\[
z = \frac{x-\mu}{\sigma}
\]

\[
x' = \frac{x-x_{min}}{x_{max}-x_{min}}
\]

</div>
## Plot
```plot
fn: x/10
xmin: 0
xmax: 10
ymin: -0.05
ymax: 1.05
height: 280
title: Example min-max scaling to [0,1]
```

<div class="parameters" markdown="1">
## Parameters
- First formula: standardization (z-score).
- Second formula: min-max normalization.

</div>
## What it means
Rescales numeric features so optimization and distance-based methods behave more predictably.

## What it's used for
- Preprocessing for linear models, SVMs, k-NN, k-means, and neural networks.
- Comparing coefficient magnitudes more sensibly.
## Key properties
- Standardization centers and scales by spread.
- Min-max normalization maps to a bounded range but is sensitive to outliers.

## Common gotchas
- Fit scaling parameters on training data only.
- Tree-based models often need less scaling than distance-based models.

## Example
Standardize income and age before logistic regression so regularization treats them comparably.

## How to Compute (Pseudocode)
```text
Input: training feature column x and scaling method
Output: fitted scaling parameters and transformed values

if standardization:
  compute mu <- mean(x_train), sigma <- std(x_train)
  transform each value as (x - mu) / sigma
if min-max scaling:
  compute x_min, x_max on training data
  transform each value as (x - x_min) / (x_max - x_min)

store fitted parameters for reuse on validation/test/production data
```

## Complexity
- Time: \(O(n)\) per numeric feature to fit summary statistics and \(O(n)\) to transform \(n\) values
- Space: \(O(1)\) fitted state per feature (plus transformed output storage)
- Assumptions: \(n\) values in one feature column; extending to \(d\) features scales roughly linearly in \(d\)

## See also
- [Z-Score](../probability-stats/z-score.md)
- [K-Means Clustering](../machine-learning/k-means-clustering.md)
