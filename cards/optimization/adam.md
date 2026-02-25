---
id: opt.adam
title: Adam Optimizer
tags: [optimization, deep-learning]
related: [opt.adamw, opt.momentum, opt.rmsprop]
prereqs: [opt.stochastic-gradient-descent]
---

# Adam Optimizer

<div class="formula" markdown="1">
## Formula
\[
m_t=\beta_1 m_{t-1}+(1-\beta_1)g_t,\quad
v_t=\beta_2 v_{t-1}+(1-\beta_2)g_t^2
\]

\[
\theta_{t+1}=\theta_t-\eta \frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g_t\): gradient at step \(t\)
- \(m_t,v_t\): first and second moment estimates
- \(\beta_1,\beta_2\): decay rates
- \(\eta\): learning rate

</div>
## What it means
Adam combines momentum and adaptive per-parameter step sizes using running gradient statistics.

## What it's used for
- Default optimizer for many deep learning models.
- Fast convergence on noisy, high-dimensional problems.

## Key properties
- Uses bias correction for early steps.
- Often works with less tuning than SGD.

## Common gotchas
- Can generalize worse than SGD in some settings.
- Weight decay should usually use AdamW-style decoupling.

## Example
Transformer training often starts with Adam/AdamW plus learning-rate warmup.

## How to Compute (Pseudocode)
```text
Input: gradients g_t, parameters theta, lr eta, betas beta1,beta2, epsilon, steps T
Output: updated parameters theta

initialize m <- 0, v <- 0
for t from 1 to T:
  m <- beta1 * m + (1 - beta1) * g_t
  v <- beta2 * v + (1 - beta2) * (g_t * g_t)
  m_hat <- m / (1 - beta1^t)
  v_hat <- v / (1 - beta2^t)
  theta <- theta - eta * m_hat / (sqrt(v_hat) + epsilon)
return theta
```

## Complexity
- Time: \(O(Tp)\) elementwise optimizer-state updates once gradients are available (plus gradient computation cost)
- Space: \(O(p)\) additional space for first- and second-moment accumulators (about 2 extra parameter-sized buffers)
- Assumptions: \(p\) parameters; bias-corrected Adam update shown; backprop/gradient computation usually dominates end-to-end training cost

## See also
- [AdamW Optimizer](../optimization/adamw.md)
- [Momentum](../optimization/momentum.md)
