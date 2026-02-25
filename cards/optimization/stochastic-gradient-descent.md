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
If \(g=2\), \(x=1\), \(\alpha=0.1\), then
\(x_{\text{new}}=1-0.1\cdot2=0.8\).
## How to Compute (Pseudocode)
```text
Input: data D, stochastic gradient estimator g(.), initial parameters theta, learning-rate schedule eta_t, steps T
Output: trained parameters theta

theta <- theta0
for t from 1 to T:
  sample a mini-batch B_t from D
  g_t <- stochastic_gradient(theta, B_t)
  theta <- theta - eta_t * g_t
return theta
```

## Complexity
- Time: \(O(T \cdot \mathrm{BatchGradCost})\); for dense models this is often proportional to batch size \(b\) and parameter count \(p\)
- Space: Typically \(O(p)\) model/gradient state plus mini-batch storage
- Assumptions: \(T\) update steps, mini-batch SGD workflow; data pipeline and hardware parallelism strongly affect runtime

## See also
- [Gradient Descent](../optimization/gradient-descent.md)
