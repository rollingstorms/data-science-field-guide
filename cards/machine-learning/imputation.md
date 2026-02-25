---
id: ml.imputation
title: Imputation
tags: [machine-learning, preprocessing, data-quality]
related: [ml.missing-data, ml.data-leakage]
prereqs: [ml.missing-data]
---

# Imputation

<div class="formula" markdown="1">
## Formula
\[
\tilde{x}_{ij}=\begin{cases}
x_{ij}, & x_{ij}\ \text{observed}\\
g(x_{\cdot j}), & x_{ij}\ \text{missing}
\end{cases}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g\): imputation rule (mean/median/mode/model/KNN/etc.)
- \(\tilde{x}_{ij}\): imputed value

</div>
## What it means
Replaces missing values with estimated values so downstream models can train and score.

## What it's used for
- Simple imputation baselines.
- Pipeline preprocessing for tabular models.
## Key properties
- Imputation should be fit on the training split only.
- Median is more robust than mean for skewed data.

## Common gotchas
- Single imputation understates uncertainty for inference tasks.
- Using target information to impute predictors can leak labels.

## Example
Median-impute income and add a binary "income_missing" indicator column.

## How to Compute (Pseudocode)
```text
Input: training data with missing values, imputation rule g
Output: fitted imputer and transformed dataset

fit imputer parameters on training data only
  examples: column mean/median/mode, KNN stats, or model-based parameters
for each missing entry:
  replace it using the fitted rule g
optionally add missingness indicator columns
return transformed data and fitted imputer state
```

## Complexity
- Time: Depends on the imputation method (simple mean/median imputation is often \(O(nd)\); KNN/model-based imputers can be much more expensive)
- Space: Depends on the method and data representation; simple imputers store \(O(d)\) fitted statistics
- Assumptions: \(n\) samples, \(d\) features; fitting and applying are both performed inside the training/pipeline workflow to avoid leakage

## See also
- [Missing Data](../machine-learning/missing-data.md)
- [Data Leakage](../machine-learning/data-leakage.md)
