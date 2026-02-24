---
id: opt.stochastic-gradient-descent
title: Stochastic Gradient Descent
tags: [optimization, stochastic]
related: [opt.gradient-descent]
prereqs: [opt.gradient-descent]
---

# Stochastic Gradient Descent

<div class="formula" markdown="1">
## Formula
\[
x_{k+1} = x_k - \eta_k\,g_k,\quad \mathbb{E}[g_k\mid x_k]=\nabla f(x_k)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g_k\): stochastic gradient estimate
- \(\eta_k\): step size

</div>
## What it means
Uses noisy gradient estimates to optimize large-scale objectives.



## What it's used for
- Large-scale learning with noisy gradients.
- Online or streaming optimization.
## Key properties
- Cheap per-iteration updates
- Converges in expectation under step-size schedules

## Common gotchas
- Variance can slow convergence; use momentum/averaging.
- Requires careful tuning of \(\eta_k\).



## Example
If \(g=2\), \(x=1\), \(lpha=0.1\), then
\(x_{	ext{new}}=1-0.1\cdot2=0.8\).
## See also
- [Gradient Descent](../optimization/gradient-descent.md)
