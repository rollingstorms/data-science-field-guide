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
## Plot
```plot
fns: x | sqrt(x)
colors: #111111 | #ff6b2c
labels: Random baseline | Example model
xmin: 0
xmax: 1
ymin: 0
ymax: 1.05
height: 280
title: ROC curve with random baseline (illustrative)
```

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
## How to Compute (Pseudocode)
```text
Input: scores p_hat[1..n], labels y[1..n]
Output: ROC curve points

sort examples by score descending
sweep a threshold from high to low through unique scores
at each threshold, update confusion-matrix counts incrementally
record the corresponding curve point (TPR/FPR for ROC or Precision/Recall for PR)
return all curve points
```

## Complexity
- Time: \(O(n\log n)\) due to sorting, plus a linear threshold sweep
- Space: \(O(n)\) for sorted scores/labels and output curve points
- Assumptions: Binary ranking scores; ties and interpolation conventions depend on the implementation

## See also
- [AUC-ROC](../ml-metrics/auc-roc.md)
