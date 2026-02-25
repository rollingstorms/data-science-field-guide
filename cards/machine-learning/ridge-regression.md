---
id: ml.ridge-regression
title: Ridge Regression (L2)
tags: [machine-learning, regression, regularization]
related: [ml.linear-regression, ml.lasso-regression, opt.regularization]
prereqs: [ml.linear-regression]
---

# Ridge Regression (L2)

<div class="formula" markdown="1">
## Formula
\[\n\hat{\beta}=\arg\min_\beta \|y-X\beta\|_2^2 + \lambda\|\beta\|_2^2\n\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X,y\): data and targets
- \(\beta\): coefficients
- \(\lambda\): regularization strength
- \(\alpha\): L1/L2 mixing weight (elastic net only)

</div>
## What it means
Adds an L2 penalty to linear regression to shrink coefficients and reduce variance.

## What it's used for
- Handling multicollinearity.
- Improving generalization in high-dimensional settings.
## Key properties
- Usually keeps all coefficients nonzero.
- Penalty strength \(\lambda\) is tuned by validation/CV.

## Common gotchas
- Must scale features before tuning \(\lambda\) in most workflows.
- Interpretation changes because coefficients are biased toward 0.

## Example
Ridge is often a strong baseline when many correlated features exist.

## How to Compute (Pseudocode)
```text
Input: design matrix X (n x d), targets y, regularization lambda
Output: ridge coefficients beta

# One common closed-form solve
A <- X^T X + lambda * I
b <- X^T y
beta <- solve_linear_system(A, b)
return beta
```

## Complexity
- Time: Dense direct solving is typically \(O(nd^2 + d^3)\) (forming \(X^T X\) and solving the \(d \times d\) system)
- Space: Typically \(O(nd + d^2)\) for dense data plus the normal-equation matrix
- Assumptions: \(n\) samples, \(d\) features; iterative solvers (especially for large sparse data) have different costs and memory profiles

## See also
- [Linear Regression](../machine-learning/linear-regression.md)
- [Regularization (L1/L2)](../optimization/regularization.md)
