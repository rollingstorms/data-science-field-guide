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
converges to 0.6 as \(n	o\infty\).
## See also
- [Expectation](../probability-stats/expectation.md)
