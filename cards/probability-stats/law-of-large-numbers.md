---
id: prob.law-of-large-numbers
title: Law of Large Numbers
tags: [probability, asymptotics]
related: [prob.expectation]
prereqs: [prob.expectation]
---

# Law of Large Numbers

<div class="formula" markdown="1">
## Formula
\[
\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow[]{\;P\;} \mu
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X_i\): i.i.d. random variables
- \(\mu=\mathbb{E}[X_i]\)

</div>
## What it means
Sample averages converge in probability to the true mean.



## What it's used for
- Justifying empirical averages as estimates.
- Convergence guarantees for Monte Carlo.
## Key properties
- Weak LLN: convergence in probability
- Strong LLN: almost sure convergence (under stronger conditions)

## Common gotchas
- Requires identical distribution and finite mean.
- Convergence in probability does not imply convergence almost surely.



## Example
For coin flips with \(p=0.6\), the sample mean
converges to 0.6 as \(n\to\infty\).
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
- [Expectation](../probability-stats/expectation.md)
