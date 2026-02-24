---
id: ml.calibration-error
title: Calibration Error (ECE)
tags: [calibration, evaluation]
related: [ml.brier-score]
prereqs: [ml.brier-score]
---

# Calibration Error (ECE)

<div class="formula" markdown="1">
## Formula
\[
\operatorname{ECE} = \sum_{m=1}^M \frac{n_m}{N}\,\big|\operatorname{acc}(B_m) - \operatorname{conf}(B_m)\big|
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(B_m\): probability bin \(m\)
- \(n_m\): samples in bin \(m\)
- \(\operatorname{acc}\): empirical accuracy in bin
- \(\operatorname{conf}\): average predicted confidence in bin

</div>
## What it means
Measures mismatch between predicted probabilities and observed frequencies.



## What it's used for
- Checking how well predicted probabilities match frequencies.
- Comparing calibration across models.
## Key properties
- Lower is better; 0 is perfectly calibrated
- Depends on binning choice

## Common gotchas
- ECE is sensitive to number of bins and binning strategy.
- Not differentiable; not suited as a direct training loss.



## Example
All predictions fall in one bin with \(\operatorname{conf}=0.8\)
\(\operatorname{acc}=0.75\) gives \(\mathrm{ECE}=|0.75-0.8|=0.05\).
## See also
- [Brier Score](../ml-metrics/brier-score.md)
