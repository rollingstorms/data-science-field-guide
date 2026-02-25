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

## How to Compute (Pseudocode)
```text
Input: dataset D, model/hyperparameters, metric M, folds K
Output: cross-validation score

split D into K folds (often stratified)
scores <- empty list

for k from 1 to K:
  train_data <- all folds except fold k
  val_data <- fold k
  fit preprocessing + model on train_data
  score_k <- evaluate metric M on val_data
  append score_k to scores

return average(scores)
```

## Complexity
- Time: Approximately \(K\) times the cost of fitting/evaluating the model pipeline on one train/validation split
- Space: Depends on the model/pipeline and data representation; typically includes one fold split plus model state
- Assumptions: Preprocessing is refit inside each fold; hyperparameter search multiplies this cost further by the number of candidate settings

## See also
- [Train/Validation/Test Split](../machine-learning/train-validation-test-split.md)
