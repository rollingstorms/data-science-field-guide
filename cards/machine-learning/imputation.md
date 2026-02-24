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
- \(	ilde{x}_{ij}\): imputed value

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

## See also
- [Missing Data](../machine-learning/missing-data.md)
- [Data Leakage](../machine-learning/data-leakage.md)
