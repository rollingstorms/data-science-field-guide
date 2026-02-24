---
id: prob.normal-distribution
title: Normal Distribution (Gaussian)
tags: [probability, statistics, distribution, continuous]
related: [prob.z-score, prob.cdf, prob.central-limit-theorem]
prereqs: [prob.pdf, prob.mean, prob.variance]
---

# Normal Distribution (Gaussian)

<div class="formula" markdown="1">
## Formula
\[
X\sim \mathcal{N}(\mu,\sigma^2),\qquad
f(x)=\frac{1}{\sqrt{2\pi\sigma^2}}\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
\]

</div>
## Plot
```plot
fn: exp(-(x^2)/2)/sqrt(2*pi)
xmin: -4
xmax: 4
ymin: 0
ymax: 0.45
height: 280
title: Standard normal PDF (mu=0, sigma=1)
```

<div class="parameters" markdown="1">
## Parameters
- \(\mu\): mean (center)
- \(\sigma^2\): variance (spread), with \(\sigma>0\)

</div>
## What it means
The Normal distribution is a bell-shaped continuous distribution centered at \(\mu\), with spread controlled by \(\sigma\). It is the standard model behind many approximation results.

## What it's used for
- Modeling measurement noise and natural variation.
- Approximation via the Central Limit Theorem.
- Standardization with z-scores.

## Key properties
- Symmetric about \(\mu\).
- Mean \(=\mu\), variance \(=\sigma^2\).
- Standard Normal is \(\mathcal{N}(0,1)\).

## Common gotchas
- "Standard distribution" usually means the standard normal \(\mathcal{N}(0,1)\), not any normal.
- Exact probabilities require the CDF; there is no elementary antiderivative of the PDF.

## Example
If \(Z\sim \mathcal{N}(0,1)\), then \(P(Z\le 0)=0.5\) by symmetry.

## See also
- [Z-Score](../probability-stats/z-score.md)
- [Central Limit Theorem](../probability-stats/central-limit-theorem.md)
