---
id: prob.chebyshev-inequality
title: Chebyshev's Inequality
tags: [probability, bounds]
related: [prob.variance]
prereqs: [prob.variance]
---

# Chebyshev's Inequality

<div class="formula" markdown="1">
## Formula
\[
P(|X-\mu| \ge k\sigma) \le \frac{1}{k^2},\quad k>0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mu=\mathbb{E}[X]\)
- \(\sigma=\sqrt{\operatorname{Var}(X)}\)

</div>
## What it means
Bounds the probability of large deviations using only mean and variance.



## What it's used for
- Bounding tail probabilities with only mean/variance.
- Concentration guarantees without distribution assumptions.
## Key properties
- Distribution-free
- Often loose for light-tailed distributions

## Common gotchas
- Applies to any distribution with finite variance.
- Use sharper bounds when additional assumptions are known.



## Example
If \(\sigma=2\), then
\(P(|X-\mu|\ge 4)\le (2^2/4^2)=1/4\).
## How to Compute (Pseudocode)
```text
Input: assumptions/quantities required by the theorem or inequality (for example means, variances, sample size)
Output: bound, approximation, or theorem-based diagnostic

verify the theorem/inequality assumptions (at least approximately/in modeling terms)
compute the bound or approximation using the card formula
return the resulting bound/approximation and note its conditions
```

## Complexity
- Time: Usually \(O(1)\) once the required summary quantities are available
- Space: \(O(1)\)
- Assumptions: This is a formula-application workflow; estimating required moments/parameters from data can dominate cost (often \(O(n)\))

## See also
- [Variance](../probability-stats/variance.md)
