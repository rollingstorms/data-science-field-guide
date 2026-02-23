---
id: opt.momentum
title: Momentum (SGD with Momentum)
tags: [optimization, deep-learning]
related: [opt.stochastic-gradient-descent, opt.adam]
prereqs: [opt.stochastic-gradient-descent]
---

# Momentum (SGD with Momentum)

<div class="formula" markdown="1">
## Formula
\[
v_t = \beta v_{t-1} + g_t,\qquad
\theta_{t+1}=\theta_t-\eta v_t
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g_t\): gradient
- \(v_t\): velocity / running direction
- \(\beta\): momentum coefficient
- \(\eta\): learning rate

</div>
## What it means
Momentum smooths noisy gradients by accumulating a running direction, often speeding optimization.

## What it's used for
- Faster SGD training in deep networks.
- Reducing oscillations in steep directions.

## Key properties
- Adds inertia to updates.
- Works especially well with learning-rate schedules.

## Common gotchas
- Too-large \(\beta\) or learning rate can destabilize training.
- Implementation conventions differ (classical vs damped variants).

## Example
With momentum, parameters keep moving in a consistent downhill direction even if mini-batch gradients are noisy.

## See also
- [Stochastic Gradient Descent](../optimization/stochastic-gradient-descent.md)
- [RMSProp](../optimization/rmsprop.md)
