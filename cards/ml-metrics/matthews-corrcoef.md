---
id: ml.matthews-corrcoef
title: Matthews Correlation Coefficient
tags: [classification, evaluation]
related: [ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Matthews Correlation Coefficient

<div class="formula" markdown="1">
## Formula
\[
\operatorname{MCC} = \frac{\mathrm{TP}\cdot\mathrm{TN}-\mathrm{FP}\cdot\mathrm{FN}}{\sqrt{(\mathrm{TP}+\mathrm{FP})(\mathrm{TP}+\mathrm{FN})(\mathrm{TN}+\mathrm{FP})(\mathrm{TN}+\mathrm{FN})}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathrm{TP},\mathrm{TN},\mathrm{FP},\mathrm{FN}\): confusion matrix counts

</div>
## What it means
Correlation between predicted and true labels for binary classification.



## What it's used for
- Balanced metric for imbalanced binary classification.
- Single-number summary of confusion matrix.
## Key properties
- Range \([-1,1]\); 1 is perfect, 0 is random, -1 is total disagreement
- Robust under class imbalance

## Common gotchas
- Undefined when any denominator term is zero.
- For multiclass, use the generalized MCC formula.



## Example
With \(\mathrm{TP}=8,\mathrm{FP}=2,\mathrm{FN}=1,\mathrm{TN}=9\),
\(\mathrm{MCC}=70/\sqrt{9900}pprox0.70\).
## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
