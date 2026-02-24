---
id: ml.confusion-matrix
title: Confusion Matrix
tags: [classification, evaluation, metrics]
related: [ml.precision, ml.recall, ml.specificity, ml.sensitivity]
prereqs: []
---

# Confusion Matrix

<div class="formula" markdown="1">
## Formula
\[
\begin{array}{c|cc}
 & \hat y=1 & \hat y=0 \\\hline
y=1 & TP & FN \\
y=0 & FP & TN
\end{array}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- TP, FP, TN, FN: classification outcome counts

</div>
## What it means
Tabulates prediction outcomes against true labels for a chosen threshold.

## What it's used for
- Deriving threshold-dependent metrics like precision, recall, specificity, and accuracy.
- Error analysis by type.
## Key properties
- Changes when the decision threshold changes.
- Supports cost-sensitive evaluation by weighting error types.

## Common gotchas
- A single confusion matrix can hide threshold tradeoffs.
- Class imbalance can make accuracy look misleading.

## Example
If fraud is rare, inspect FP and FN directly rather than relying on accuracy alone.

## See also
- [Precision](../ml-metrics/precision.md)
- [Recall](../ml-metrics/recall.md)
