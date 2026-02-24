---
id: ml.roc-curve
title: ROC Curve
tags: [classification, evaluation]
related: [ml.auc-roc, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# ROC Curve

<div class="formula" markdown="1">
## Formula
\[
\mathcal{C} = \{(\mathrm{FPR}(t),\,\mathrm{TPR}(t)) : t \in \mathbb{R}\}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathrm{TPR} = \mathrm{Recall}\)
- \(\mathrm{FPR} = \mathrm{FP}/(\mathrm{FP}+\mathrm{TN})\)
- \(t\): decision threshold

</div>
## What it means
Tradeoff between true-positive rate and false-positive rate across thresholds.



## What it's used for
- Visualizing TPR vs FPR across thresholds.
- Comparing classifiers independent of a threshold.
## Key properties
- AUC-ROC is threshold-invariant
- Equivalent to ranking performance under mild assumptions

## Common gotchas
- Can look overly optimistic under extreme class imbalance.
- Uses \(\mathrm{TN}\), unlike PR curves.



## Example
Two thresholds might give points
\((\mathrm{FPR},\mathrm{TPR})=(0.1,0.8)\) and \((0.3,0.9)\).
## See also
- [AUC-ROC](../ml-metrics/auc-roc.md)
