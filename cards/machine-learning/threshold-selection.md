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
## Plot
```plot
fn: 1/(1+exp(-30*(x-0.5)))
xmin: 0
xmax: 1
ymin: -0.05
ymax: 1.05
height: 280
title: Thresholding behavior (smooth step approximation)
```

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

## How to Compute (Pseudocode)
```text
Input: validation scores p_hat[1..n], labels y[1..n], objective/constraint
Output: selected threshold t*

candidate_thresholds <- sorted unique scores (or a grid)
best_t <- default_threshold
best_value <- -infinity

for each threshold t in candidate_thresholds:
  predictions <- 1[p_hat >= t]
  metrics <- compute validation metrics/objective
  if metrics satisfy constraints and improve objective:
    update best_t, best_value

return best_t
```

## Complexity
- Time: \(O(nL)\) for a straightforward scan over \(L\) candidate thresholds on \(n\) validation examples (can be improved with sorting/cumulative counts)
- Space: \(O(n)\) for scores/labels and optional sorted copies
- Assumptions: Threshold is chosen on validation data; \(L\) depends on whether a full unique-score scan or a coarse grid is used

## See also
- [Confusion Matrix](../ml-metrics/confusion-matrix.md)
- [Class Imbalance](../machine-learning/class-imbalance.md)
