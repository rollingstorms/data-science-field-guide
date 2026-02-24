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

## See also
- [Calibration Error](../ml-metrics/calibration-error.md)
- [Threshold Selection](../machine-learning/threshold-selection.md)
