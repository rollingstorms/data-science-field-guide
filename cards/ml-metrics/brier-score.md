---
id: ml.brier-score
title: Brier Score
tags: [calibration, evaluation]
related: [ml.calibration-error, ml.log-loss]
prereqs: [prob.expectation]
---

# Brier Score

<div class="formula" markdown="1">
## Formula
\[
\operatorname{BS} = \frac{1}{N}\sum_{i=1}^N (p_i - y_i)^2
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p_i\): predicted probability for positive class
- \(y_i\in\{0,1\}\): true label

</div>
## What it means
Mean squared error of probabilistic predictions.



## What it's used for
- Evaluating probabilistic forecasts (calibration + sharpness).
- Comparing predicted probabilities to outcomes.
## Key properties
- Lower is better; 0 is perfect
- Decomposes into calibration and refinement components

## Common gotchas
- Extends to multiclass via vector probabilities and squared error.
- Not a proper scoring rule for some multi-label setups.



## Example
For a single example with \(y=1\) and \(p=0.8\),
\((p-y)^2=(0.8-1)^2=0.04\).
## See also
- [Calibration Error](../ml-metrics/calibration-error.md)
