---
id: ml.cohen-kappa
title: Cohen's Kappa
tags: [classification, evaluation]
related: [ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Cohen's Kappa

<div class="formula" markdown="1">
## Formula
\[
\kappa = \frac{p_o - p_e}{1 - p_e}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p_o\): observed agreement
- \(p_e\): expected agreement by chance

</div>
## What it means
Agreement between two labelers/classifiers adjusted for chance.



## What it's used for
- Measuring agreement between two labelers/classifiers.
- Adjusting for chance agreement.
## Key properties
- Range \([-1,1]\)
- \(\kappa=0\) means chance-level agreement

## Common gotchas
- Sensitive to label prevalence (the "kappa paradox").
- Different weighting schemes exist for ordinal labels.



## Example
If \(p_o=0.8\) and \(p_e=0.5\),
\(\kappa=(0.8-0.5)/(1-0.5)=0.6\).
## How to Compute (Pseudocode)
```text
Input: true labels and predicted labels (or sets/masks, depending on the metric)
Output: Cohen kappa score

build the contingency table / overlap counts needed by the metric
compute the metric numerator and denominator from those counts
apply any normalization/adjustment terms required by the definition
return the score
```

## Complexity
- Time: Typically \(O(n)\) to accumulate counts over \(n\) labeled examples once labels/sets are aligned (plus optional \(O(k^2)\) work on contingency tables for some metrics)
- Space: Depends on the contingency-table size (from \(O(1)\) count accumulators to \(O(k_1 k_2)\) for label-table storage)
- Assumptions: Exact complexity depends on binary-mask vs multiclass-label formulation and whether pair-count terms are computed from counts or explicit pairs

## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
