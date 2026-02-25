---
id: info.js-divergence
title: Jensen-Shannon Divergence
tags: [information-theory, divergence]
related: [info.kl-divergence, info.cross-entropy]
prereqs: [info.kl-divergence]
---

# Jensen-Shannon Divergence

<div class="formula" markdown="1">
## Formula
\[
\operatorname{JSD}(P\|Q) = \frac{1}{2} D_{\mathrm{KL}}(P\|M) + \frac{1}{2} D_{\mathrm{KL}}(Q\|M),\quad M=\frac{1}{2}(P+Q)
\]

</div>
## Plot
```plot
fn: (-(0.5*x+0.25)*log(0.5*x+0.25)-(0.75-0.5*x)*log(0.75-0.5*x) + 0.5*(x*log(x)+(1-x)*log(1-x)) + 0.5*(0.5*log(0.5)+0.5*log(0.5)))/log(2)
xmin: 0.001
xmax: 0.999
ymin: 0
ymax: 0.35
height: 280
title: Bernoulli JSD(P || Bern(0.5)) (bits)
```

<div class="parameters" markdown="1">
## Parameters
- \(P,Q\): distributions
- \(M\): mixture distribution

</div>
## What it means
A symmetric, smoothed divergence between two distributions.



## What it's used for
- Symmetric distance-like measure between distributions.
- Comparing topic models or embedding distributions.
## Key properties
- Symmetric and finite for discrete distributions
- \(0 \le \operatorname{JSD}(P\|Q) \le \log 2\) (base 2)

## Common gotchas
- JSD is not a true metric unless you take \(\sqrt{\operatorname{JSD}}\).
- Bounds depend on log base.



## Example
If \(P=Q\), then \(\mathrm{JS}(P,Q)=0\).
## How to Compute (Pseudocode)
```text
Input: discrete probabilities p[1..k], q[1..k], log base b
Output: js_divergence

for i from 1 to k:
  m[i] <- 0.5 * (p[i] + q[i])

js_divergence <- 0.5 * KL(p || m) + 0.5 * KL(q || m)
return js_divergence
```

## Complexity
- Time: \(O(k)\) assuming linear-time KL computations on discrete arrays
- Space: \(O(k)\) if materializing the mixture distribution \(m\) (or \(O(1)\) extra if streamed)
- Assumptions: \(k\) is the number of outcomes in the shared discrete support; KL subroutine handles zero-probability terms safely

## See also
- [KL Divergence](../info-theory/kl-divergence.md)
