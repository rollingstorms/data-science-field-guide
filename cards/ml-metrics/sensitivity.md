---
id: ml.sensitivity
title: Sensitivity (True Positive Rate)
tags: [classification, evaluation, metrics]
related: [ml.recall, ml.specificity, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Sensitivity (True Positive Rate)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{Sensitivity}=\frac{TP}{TP+FN}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(TP\): true positives
- \(FN\): false negatives

</div>
## What it means
Sensitivity measures how well a classifier captures actual positive cases.

## What it's used for
- Detection tasks where misses are costly (disease, fraud, safety alerts).
- ROC analysis (same as recall/TPR).
## Key properties
- Equivalent to recall in binary classification.
- Threshold-dependent metric.

## Common gotchas
- High sensitivity may increase false positives.
- Undefined if there are no actual positives.

## Example
A disease screening test tuned to catch nearly all true cases aims for high sensitivity.

## How to Compute (Pseudocode)
```text
Input: confusion-matrix counts
Output: sensitivity

compute the required numerator/denominator from TP, FP, FN, TN
if denominator == 0:
  return undefined (or use a task-specific convention)
return numerator / denominator
```

## Complexity
- Time: \(O(1)\) once confusion-matrix counts are available
- Space: \(O(1)\)
- Assumptions: Binary classification formula shown; computing the confusion matrix itself is typically \(O(n)\)

## See also
- [Recall](../ml-metrics/recall.md)
- [Specificity](../ml-metrics/specificity.md)
