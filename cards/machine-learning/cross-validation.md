---
id: ml.cross-validation
title: Cross-Validation
tags: [machine-learning, evaluation, model-selection]
related: [ml.train-val-test-split, ml.bias-variance-tradeoff]
prereqs: [ml.train-val-test-split]
---

# Cross-Validation

<div class="formula" markdown="1">
## Formula
\[
\mathrm{CVScore}=\frac{1}{K}\sum_{k=1}^{K} M\big(f^{(-k)}, \mathcal{D}^{(k)}\big)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(K\): number of folds
- \(f^{(-k)}\): model trained on all folds except \(k\)
- \(\mathcal{D}^{(k)}\): validation fold
- \(M\): metric

</div>
## What it means
Estimates out-of-sample performance by repeatedly training on subsets and validating on held-out folds.

## What it's used for
- Hyperparameter tuning.
- Comparing models when data is limited.
## Key properties
- Reduces variance of a single split estimate.
- Stratified K-fold is common for class imbalance.

## Common gotchas
- Preprocessing must be fit inside each fold to avoid leakage.
- CV score can still be optimistic if tuning choices are repeatedly adapted.

## Example
Use 5-fold CV to select regularization strength, then refit on train+val before final test evaluation.

## See also
- [Train/Validation/Test Split](../machine-learning/train-validation-test-split.md)
