---
id: ml.pr-curve
title: Precision-Recall Curve
tags: [classification, evaluation]
related: [ml.precision, ml.recall, ml.average-precision]
prereqs: [ml.precision, ml.recall]
---

# Precision-Recall Curve

<div class="formula" markdown="1">
## Formula
\[
\mathcal{C} = \{(\mathrm{Precision}(t),\,\mathrm{Recall}(t)) : t \in \mathbb{R}\}
\]

</div>
## Plot
```plot
fn: 1/(1+2*x)
xmin: 0
xmax: 1
ymin: 0.3
ymax: 1.05
height: 280
title: Example precision-recall curve (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(t\): decision threshold

</div>
## What it means
Tradeoff between precision and recall across thresholds.



## What it's used for
- Visualizing precision vs recall across thresholds.
- Choosing operating points for imbalanced data.
## Key properties
- More informative than ROC for heavy class imbalance
- Area under PR curve equals average precision for common definitions

## Common gotchas
- Baseline is the positive class prevalence, not 0.5.
- Different interpolation conventions change AP.



## Example
Two thresholds might give points
\((\mathrm{Recall},\mathrm{Precision})=(0.9,0.6)\) and \((0.6,0.85)\).
## How to Compute (Pseudocode)
```text
Input: scores p_hat[1..n], labels y[1..n]
Output: PR curve points

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
- [Average Precision](../ml-metrics/average-precision.md)
