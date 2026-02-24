---
id: ml.threshold-selection
title: Threshold Selection
tags: [machine-learning, classification, decision-making]
related: [ml.confusion-matrix, ml.probability-calibration]
prereqs: [ml.confusion-matrix]
---

# Threshold Selection

<div class="formula" markdown="1">
## Formula
\[
\hat y = \mathbf{1}[\hat p \ge t]
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\hat p\): predicted score/probability
- \(t\): decision threshold

</div>
## What it means
Converts scores or probabilities into decisions by choosing a cutoff aligned with business costs and constraints.

## What it's used for
- Balancing precision/recall or sensitivity/specificity.
- Operating-point selection under cost or capacity limits.
## Key properties
- The best threshold depends on objective, prevalence, and calibration.
- Threshold should often be selected on validation data, not test data.

## Common gotchas
- Defaulting to 0.5 is rarely justified in imbalanced or cost-sensitive settings.
- Thresholds can drift when class prevalence shifts.

## Example
Choose a threshold that keeps false positives under a review-team capacity while maximizing recall.

## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
- [Class Imbalance](../machine-learning/class-imbalance.md)
