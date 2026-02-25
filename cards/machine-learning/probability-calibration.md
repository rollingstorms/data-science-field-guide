---
id: ml.probability-calibration
title: Probability Calibration
tags: [machine-learning, classification, calibration]
related: [ml.calibration-error, ml.threshold-selection]
prereqs: [ml.logistic-regression]
---

# Probability Calibration

<div class="formula" markdown="1">
## Formula
\[
P(Y=1\mid \hat p = p) \approx p
\]

</div>
## Plot
```plot
fns: x | x^0.8
colors: #111111 | #ff6b2c
labels: Perfect calibration | Example model
xmin: 0
xmax: 1
ymin: 0
ymax: 1.05
height: 280
title: Reliability curve vs ideal diagonal
```

<div class="parameters" markdown="1">
## Parameters
- \(\hat p\): predicted probability
- \(p\): probability value/bin target

</div>
## What it means
A classifier is calibrated when predicted probabilities match observed frequencies.

## What it's used for
- Risk estimation, ranking-to-decision systems, and cost-sensitive thresholding.
- Comparing models beyond discrimination metrics like AUC.
## Key properties
- A model can have high AUC and poor calibration.
- Calibration can be improved post hoc (Platt scaling, isotonic regression).

## Common gotchas
- Calibrating on the test set leaks information.
- Calibration can drift over time as prevalence changes.

## Example
If predictions near 0.8 occur 80% positive in reality, that bin is well calibrated.

## How to Compute (Pseudocode)
```text
Input: model scores/probabilities on calibration set, labels
Output: calibrated prediction function g(. )

fit a calibration model g using held-out calibration data
  examples: Platt scaling (logistic) or isotonic regression

for a new model score p_hat:
  return g(p_hat)
```

## Complexity
- Time: Depends on the calibration method (for example, Platt scaling is typically cheap iterative optimization; isotonic regression is near-linear after sorting)
- Space: \(O(n)\) to store calibration examples or fitted calibration map (method-dependent)
- Assumptions: \(n\) is calibration-set size; calibration is fit on held-out data separate from the final test set

## See also
- [Calibration Error](../ml-metrics/calibration-error.md)
- [Threshold Selection](../machine-learning/threshold-selection.md)
