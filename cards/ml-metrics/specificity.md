---
id: ml.specificity
title: Specificity (True Negative Rate)
tags: [classification, evaluation, metrics]
related: [ml.sensitivity, ml.confusion-matrix]
prereqs: [ml.confusion-matrix]
---

# Specificity (True Negative Rate)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{Specificity}=\frac{TN}{TN+FP}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(TN\): true negatives
- \(FP\): false positives

</div>
## What it means
Specificity measures how well a classifier correctly rejects negative cases.

## What it's used for
- Medical screening and fraud detection when false positives are costly.
- ROC analysis (specificity = 1 - FPR).
## Key properties
- Range is \([0,1]\).
- Threshold-dependent metric.

## Common gotchas
- High specificity can come with low sensitivity if threshold is too strict.
- Undefined if there are no actual negatives.

## Example
A spam filter with low false positives has high specificity on legitimate email.

## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
- [Sensitivity](../ml-metrics/sensitivity.md)
