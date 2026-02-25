---
id: prob.central-limit-theorem
title: Central Limit Theorem
tags: [probability, asymptotics]
related: [prob.variance]
prereqs: [prob.variance]
---

# Central Limit Theorem

<div class="formula" markdown="1">
## Formula
\[
\frac{\sqrt{n}(\bar{X}_n-\mu)}{\sigma} \xrightarrow[]{\;d\;} \mathcal{N}(0,1)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X_i\): i.i.d. with mean \(\mu\) and std \(\sigma\)
- \(\bar{X}_n\): sample mean

</div>
## What it means
Normalized sums of i.i.d. variables converge in distribution to a Gaussian.



## What it's used for
- Approximating sums/means with a normal distribution.
- Justifying confidence intervals.
## Key properties
- Explains why Gaussian approximations are common
- Many variants exist (Lyapunov, Lindeberg)

## Common gotchas
- Convergence in distribution is not the same as convergence in probability.
- Heavy tails can violate conditions.



## Example
For 100 fair coin flips, the sample mean is
approximately \(\mathcal{N}(0.5, 0.25/100)\).
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
