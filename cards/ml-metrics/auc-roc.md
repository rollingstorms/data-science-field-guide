---
id: ml.auc-roc
title: ROC AUC
tags: [ml, metrics, ranking]
related: [ml.precision-recall-auc, ml.log-loss]
prereqs: [ml.confusion-matrix]
---

# ROC AUC

<div class="formula" markdown="1">
## Formula
\[
\mathrm{AUC} = P(s(x^+) > s(x^-)) + \tfrac{1}{2}P(s(x^+)=s(x^-))
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
title: AUC intuition from area under ROC (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(s(\cdot)\): score function
- \(x^+\): positive example
- \(x^-\): negative example

</div>
## What it means
AUC is the area under the ROC curve (TPR vs FPR) as you sweep a score threshold.



## What it's used for
- Measuring ranking quality of binary classifiers.
- Comparing models independent of a threshold.
## Key properties
- Threshold-independent ranking metric
- Invariant to any strictly monotone transform of scores

## Common gotchas
- AUC can look “good” under extreme class imbalance even when precision is poor
- If you care about top-of-list performance, consider PR AUC / precision@k

## Example
If all positives are scored above all negatives,
AUC = 1.0.

## How to Compute (Pseudocode)
```text
Input: ROC curve points (FPR, TPR) sorted by FPR
Output: ROC AUC

auc <- 0
for each consecutive pair of ROC points:
  auc <- auc + trapezoid_area_between_points
return auc
```

## Complexity
- Time: \(O(L)\) once \(L\) ROC curve points are available
- Space: \(O(1)\) extra space (excluding stored curve points)
- Assumptions: If starting from raw scores, ROC construction typically dominates at \(O(n\log n)\)

