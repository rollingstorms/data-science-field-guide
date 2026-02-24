---
id: ml.class-imbalance
title: Class Imbalance
tags: [machine-learning, classification, evaluation]
related: [ml.confusion-matrix, ml.average-precision, ml.threshold-selection]
prereqs: [ml.confusion-matrix]
---

# Class Imbalance

<div class="formula" markdown="1">
## Formula
\[
\pi = P(y=1),\quad \pi \ll 0.5\ \text{(rare positive class)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\pi\): positive class prevalence

</div>
## What it means
Class imbalance means one class is much rarer than another, which changes training and evaluation behavior.

## What it's used for
- Choosing metrics (PR AUC, recall, precision, cost-based metrics).
- Resampling, class weighting, threshold tuning.
## Key properties
- Accuracy becomes less informative as imbalance increases.
- Probability calibration and thresholding matter more than default 0.5 cuts.

## Common gotchas
- Oversampling before splitting can leak duplicates into validation/test.
- SMOTE-like methods need careful validation setup.

## Example
With 1% fraud prevalence, a model predicting all negatives gets 99% accuracy but zero recall.

## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
- [Threshold Selection](../machine-learning/threshold-selection.md)
