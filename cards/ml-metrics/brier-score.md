---
id: ml.brier-score
title: Brier Score
tags: [calibration, evaluation]
related: [ml.calibration-error, ml.log-loss]
prereqs: [prob.expectation]
---

# Brier Score

## Formula
\[
\operatorname{BS} = \frac{1}{N}\sum_{i=1}^N (p_i - y_i)^2
\]

## Parameters
- \(p_i\): predicted probability for positive class
- \(y_i\in\{0,1\}\): true label

## What it means
Mean squared error of probabilistic predictions.

## Key properties
- Lower is better; 0 is perfect
- Decomposes into calibration and refinement components

## Common gotchas
- Extends to multiclass via vector probabilities and squared error.
- Not a proper scoring rule for some multi-label setups.

## See also
- [Calibration Error](../ml-metrics/calibration-error.md)
