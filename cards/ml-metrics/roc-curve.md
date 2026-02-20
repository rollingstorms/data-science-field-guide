---
id: ml.roc-curve
title: ROC Curve
tags: [classification, evaluation]
related: [ml.auc-roc, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# ROC Curve

## Formula
\[
\mathcal{C} = \{(\mathrm{FPR}(t),\,\mathrm{TPR}(t)) : t \in \mathbb{R}\}
\]

## Parameters
- \(\mathrm{TPR} = \mathrm{Recall}\)
- \(\mathrm{FPR} = \mathrm{FP}/(\mathrm{FP}+\mathrm{TN})\)
- \(t\): decision threshold

## What it means
Tradeoff between true-positive rate and false-positive rate across thresholds.

## Key properties
- AUC-ROC is threshold-invariant
- Equivalent to ranking performance under mild assumptions

## Common gotchas
- Can look overly optimistic under extreme class imbalance.
- Uses \(\mathrm{TN}\), unlike PR curves.

## See also
- [AUC-ROC](../ml-metrics/auc-roc.md)
