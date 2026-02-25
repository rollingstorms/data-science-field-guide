---
id: ml.lasso-regression
title: Lasso Regression (L1)
tags: [machine-learning, regression, regularization]
related: [ml.linear-regression, ml.elastic-net, opt.regularization]
prereqs: [ml.linear-regression]
---

# Lasso Regression (L1)

<div class="formula" markdown="1">
## Formula
\[\n\hat{\beta}=\arg\min_\beta \|y-X\beta\|_2^2 + \lambda\|\beta\|_1\n\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X,y\): data and targets
- \(\beta\): coefficients
- \(\lambda\): regularization strength
- \(\alpha\): L1/L2 mixing weight (elastic net only)

</div>
## What it means
Adds an L1 penalty, which can drive some coefficients exactly to zero and perform feature selection.

## What it's used for
- Sparse linear models.
- Feature selection when many weak features exist.
## Key properties
- Can produce exact zeros.
- Solution path changes with \(\lambda\) and feature scaling.

## Common gotchas
- With highly correlated features, lasso may choose one arbitrarily.
- Do not treat selected features as stable without resampling checks.

## Example
Lasso can shrink 500 features down to a smaller active set for a simpler model.

## How to Compute (Pseudocode)
```text
Input: design matrix X, targets y, regularization lambda
Output: lasso coefficients beta

initialize beta
repeat until convergence:
  for each coordinate j:
    compute partial residual excluding feature j
    update beta[j] using a soft-thresholding coordinate step

return beta
```

## Complexity
- Time: Depends on the solver; a common coordinate-descent view is roughly \(O(Tnd)\) for \(T\) passes over \(d\) coordinates with dense data
- Space: Typically \(O(nd + d)\) for dense data and coefficient/work vectors
- Assumptions: \(n\) samples, \(d\) features; complexity depends on sparsity, screening rules, and convergence tolerance

## See also
- [Linear Regression](../machine-learning/linear-regression.md)
- [Regularization (L1/L2)](../optimization/regularization.md)
