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
## Plot
```plot
type: bars
xs: 0 | 1 | 2 | 3
ys: 42 | 8 | 6 | 44
xmin: -0.5
xmax: 3.5
ymin: 0
ymax: 50
height: 280
title: Example counts: TP, FP, FN, TN (bar view)
```

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

## How to Compute (Pseudocode)
```text
Input: true labels y[1..n], predicted labels y_hat[1..n] (binary)
Output: TP, FP, FN, TN counts

initialize TP, FP, FN, TN <- 0
for i from 1 to n:
  update the appropriate count based on (y[i], y_hat[i])
return TP, FP, FN, TN
```

## Complexity
- Time: \(O(n)\) for \(n\) labeled predictions
- Space: \(O(1)\) extra space for the four counts
- Assumptions: Binary classification confusion matrix; multiclass confusion matrices use \(K\times K\) count tables

## See also
- [Precision](../ml-metrics/precision.md)
- [Recall](../ml-metrics/recall.md)
