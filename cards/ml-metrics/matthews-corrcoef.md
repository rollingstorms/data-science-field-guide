---
id: ml.matthews-corrcoef
title: Matthews Correlation Coefficient
tags: [classification, evaluation]
related: [ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Matthews Correlation Coefficient

## Formula
\[
\operatorname{MCC} = \frac{\mathrm{TP}\cdot\mathrm{TN}-\mathrm{FP}\cdot\mathrm{FN}}{\sqrt{(\mathrm{TP}+\mathrm{FP})(\mathrm{TP}+\mathrm{FN})(\mathrm{TN}+\mathrm{FP})(\mathrm{TN}+\mathrm{FN})}}
\]

## Parameters
- \(\mathrm{TP},\mathrm{TN},\mathrm{FP},\mathrm{FN}\): confusion matrix counts

## What it means
Correlation between predicted and true labels for binary classification.

## Key properties
- Range \([-1,1]\); 1 is perfect, 0 is random, -1 is total disagreement
- Robust under class imbalance

## Common gotchas
- Undefined when any denominator term is zero.
- For multiclass, use the generalized MCC formula.

## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
