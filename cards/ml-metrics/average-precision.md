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
## How to Compute (Pseudocode)
```text
Input: scores p_hat[1..n], labels y[1..n]
Output: average precision (AP)

sort examples by score descending
sweep down the ranked list and compute precision/recall at each positive instance
accumulate the precision-weighted recall increments
return AP
```

## Complexity
- Time: \(O(n\log n)\) due to sorting, plus a linear sweep over the ranked list
- Space: \(O(n)\) for sorted scores/labels (and optional precision-recall arrays)
- Assumptions: Binary relevance ranking setup; AP conventions can differ slightly across libraries/interpolation rules

## See also
- [Precision-Recall Curve](../ml-metrics/pr-curve.md)
