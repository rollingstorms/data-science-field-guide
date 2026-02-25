---
id: ml.missing-data
title: Missing Data
tags: [machine-learning, data-quality, preprocessing]
related: [ml.imputation]
prereqs: []
---

# Missing Data

<div class="formula" markdown="1">
## Formula
\[
X = X_{obs} \cup X_{mis}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X_{obs}\): observed values
- \(X_{mis}\): missing values

</div>
## What it means
Missing values are not just blanks; the mechanism behind missingness affects bias and valid analysis choices.

## What it's used for
- Data quality audits.
- Choosing deletion vs imputation vs model-based handling.
## Key properties
- Common mechanisms: MCAR, MAR, MNAR.
- Missingness itself can be predictive and worth modeling.

## Common gotchas
- Dropping rows can change the target distribution.
- Imputation without a missingness indicator can hide useful signal.

## Example
A medical lab test missing because only severe patients receive it is not random missingness.

## How to Compute (Pseudocode)
```text
Input: dataset with missing values
Output: missingness audit and handling plan

compute missing-value counts/rates per feature and optionally per subgroup
identify likely missingness mechanisms (MCAR/MAR/MNAR assumptions)
choose handling strategy (drop, impute, model-based, indicators)
validate impact on downstream model performance and bias
```

## Complexity
- Time: Typically \(O(nd)\) for an initial missingness audit over \(n\) samples and \(d\) features, plus the cost of the chosen handling method
- Space: \(O(d)\) for summary statistics (plus any transformed datasets or imputation state)
- Assumptions: Audit workflow shown; imputation/modeling costs depend on the selected method and pipeline implementation

## See also
- [Imputation](../machine-learning/imputation.md)
