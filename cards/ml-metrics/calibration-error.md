---
id: ml.calibration-error
title: Calibration Error (ECE)
tags: [calibration, evaluation]
related: [ml.brier-score]
prereqs: [ml.brier-score]
---

# Calibration Error (ECE)

## Formula
\[
\operatorname{ECE} = \sum_{m=1}^M \frac{n_m}{N}\,\big|\operatorname{acc}(B_m) - \operatorname{conf}(B_m)\big|
\]

## Parameters
- \(B_m\): probability bin \(m\)
- \(n_m\): samples in bin \(m\)
- \(\operatorname{acc}\): empirical accuracy in bin
- \(\operatorname{conf}\): average predicted confidence in bin

## What it means
Measures mismatch between predicted probabilities and observed frequencies.

## Key properties
- Lower is better; 0 is perfectly calibrated
- Depends on binning choice

## Common gotchas
- ECE is sensitive to number of bins and binning strategy.
- Not differentiable; not suited as a direct training loss.

## See also
- [Brier Score](../ml-metrics/brier-score.md)
