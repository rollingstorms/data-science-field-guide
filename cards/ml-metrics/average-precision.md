---
id: ml.average-precision
title: Average Precision
tags: [classification, evaluation]
related: [ml.pr-curve]
prereqs: [ml.pr-curve]
---

# Average Precision

<div class="formula" markdown="1">
## Formula
\[
\operatorname{AP} = \sum_k (R_k - R_{k-1})\,P_k
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
title: Example PR curve shape for AP intuition
```

<div class="parameters" markdown="1">
## Parameters
- \(P_k\): precision at threshold \(k\)
- \(R_k\): recall at threshold \(k\)

</div>
## What it means
Area under the precision-recall curve using a stepwise approximation.



## What it's used for
- Summarizing precision-recall performance over thresholds.
- Information retrieval and imbalanced classification.
## Key properties
- \(0 \le \operatorname{AP} \le 1\)
- For ranked lists, AP summarizes precision at each recall increase

## Common gotchas
- Different libraries use different interpolation schemes.
- AP differs from AUC-PR if interpolation changes.



## Example
If every positive is ranked before any negative,
AP = 1.0.
## See also
- [Precision-Recall Curve](../ml-metrics/pr-curve.md)
