---
id: ml.gradient-boosting
title: Gradient Boosting
tags: [machine-learning, models]
related: [ml.decision-tree, opt.early-stopping]
prereqs: []
---

# Gradient Boosting

<div class="formula" markdown="1">
## Formula
\[
F_m(x)=F_{m-1}(x)+\eta\,h_m(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(F_m\): boosted model after step \(m\)
- \(h_m\): weak learner fit to residuals/gradients
- \(\eta\): learning rate

</div>
## What it means
Gradient boosting builds an additive model by sequentially fitting weak learners to reduce current errors.

## What it's used for
- High-performing tabular models (XGBoost/LightGBM/CatBoost family).
- Flexible classification and regression.
## Key properties
- Bias can be reduced with enough trees; variance controlled by shrinkage and regularization.
- Handles nonlinearities and interactions well.

## Common gotchas
- Can overfit if too many deep trees or high learning rate.
- Careful validation and early stopping are important.

## Example
Use shallow trees with a small learning rate and early stopping on validation AUC.

## How to Compute (Pseudocode)
```text
Input: training data X, y; rounds M; learning rate eta; weak learner family
Output: boosted model F_M

initialize model F_0(x) (for example, constant baseline)
for m from 1 to M:
  compute pseudo-residuals / gradients from current model F_{m-1}
  fit weak learner h_m to the residual targets
  choose step size (or use eta)
  update F_m(x) <- F_{m-1}(x) + eta * h_m(x)
  optionally monitor validation metric for early stopping

return F_M
```

## Complexity
- Time: Roughly \(M\) times the cost of fitting one weak learner plus gradient/residual computation (commonly dominated by tree fitting in tree-boosting implementations)
- Space: Depends on the number of learners \(M\) and learner size, plus training data and gradient/residual buffers
- Assumptions: Exact complexity depends on weak learner type, tree depth/histogram methods, subsampling, and regularization/early-stopping settings

## See also
- [Cross-Validation](../machine-learning/cross-validation.md)
