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
## See also
- [Average Precision](../ml-metrics/average-precision.md)
