---
id: ml.elastic-net
title: Elastic Net
tags: [machine-learning, regression, regularization]
related: [ml.ridge-regression, ml.lasso-regression, opt.regularization]
prereqs: [ml.linear-regression]
---

# Elastic Net

<div class="formula" markdown="1">
## Formula
\[\n\hat{\beta}=\arg\min_\beta \|y-X\beta\|_2^2 + \lambda\big(\alpha\|\beta\|_1+(1-\alpha)\|\beta\|_2^2\big)\n\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X,y\): data and targets
- \(\beta\): coefficients
- \(\lambda\): regularization strength
- \(\alpha\): L1/L2 mixing weight (elastic net only)

</div>
## What it means
Combines L1 and L2 penalties to balance sparsity and stability.

## What it's used for
- Correlated high-dimensional features.
- Regularized linear/logistic models with sparse structure.
## Key properties
- Interpolates between ridge and lasso using \(\alpha\).
- Often more stable than pure lasso with correlated predictors.

## Common gotchas
- Need to tune both \(\lambda\) and \(\alpha\).
- Scaling features is still important.

## Example
Elastic net is common for text and genomics where predictors are numerous and correlated.

## How to Compute (Pseudocode)
```text
Input: design matrix X, targets y, regularization lambda, mixing alpha
Output: elastic-net coefficients beta

initialize beta
repeat until convergence:
  for each coordinate j:
    compute partial residual excluding feature j
    apply coordinate update with L1 soft-thresholding and L2 shrinkage terms

return beta
```

## Complexity
- Time: Depends on the solver; coordinate-descent implementations are often analyzed similarly to lasso, roughly \(O(Tnd)\) for \(T\) passes on dense data
- Space: Typically \(O(nd + d)\) for dense data and coefficient/work vectors
- Assumptions: \(n\) samples, \(d\) features; costs depend on sparsity, convergence tolerance, and whether a regularization path over many \((\lambda, \alpha)\) settings is computed

## See also
- [Linear Regression](../machine-learning/linear-regression.md)
- [Regularization (L1/L2)](../optimization/regularization.md)
