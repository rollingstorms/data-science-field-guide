---
id: prob.central-limit-theorem
title: Central Limit Theorem
tags: [probability, asymptotics]
related: [prob.variance]
prereqs: [prob.variance]
---

# Central Limit Theorem

## Formula
\[
\frac{\sqrt{n}(\bar{X}_n-\mu)}{\sigma} \xrightarrow[]{\;d\;} \mathcal{N}(0,1)
\]

## Parameters
- \(X_i\): i.i.d. with mean \(\mu\) and std \(\sigma\)
- \(\bar{X}_n\): sample mean

## What it means
Normalized sums of i.i.d. variables converge in distribution to a Gaussian.

## Key properties
- Explains why Gaussian approximations are common
- Many variants exist (Lyapunov, Lindeberg)

## Common gotchas
- Convergence in distribution is not the same as convergence in probability.
- Heavy tails can violate conditions.

## See also
- [Variance](../probability-stats/variance.md)
