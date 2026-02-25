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
## Plot
```plot
fns: x | x^0.8
colors: #111111 | #ff6b2c
labels: Perfect calibration | Example reliability curve
xmin: 0
xmax: 1
ymin: 0
ymax: 1.05
height: 280
title: Reliability curve and ideal diagonal (ECE intuition)
```

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
## How to Compute (Pseudocode)
```text
Input: predicted confidences p[1..N], labels y[1..N], number of bins M
Output: ECE

partition predictions into bins B_1..B_M
ECE <- 0
for each bin B_m:
  if B_m is empty:
    continue
  conf_m <- average confidence in B_m
  acc_m <- empirical accuracy in B_m
  ECE <- ECE + (|B_m|/N) * abs(acc_m - conf_m)
return ECE
```

## Complexity
- Time: \(O(N + M)\) after bin assignment (often \(O(N)\) overall for fixed bins)
- Space: \(O(M)\) for bin aggregates/counters (plus optional stored bin assignments)
- Assumptions: Fixed-bin ECE shown; adaptive binning and multiclass calibration variants use different procedures

## See also
- [Brier Score](../ml-metrics/brier-score.md)
