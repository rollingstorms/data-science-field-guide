---
id: opt.rmsprop
title: RMSProp
tags: [optimization, deep-learning]
related: [opt.adam, opt.momentum]
prereqs: [opt.stochastic-gradient-descent]
---

# RMSProp

<div class="formula" markdown="1">
## Formula
\[
s_t=\rho s_{t-1}+(1-\rho)g_t^2
\]
\[
\theta_{t+1}=\theta_t-\eta \frac{g_t}{\sqrt{s_t}+\epsilon}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g_t\): gradient
- \(s_t\): running average of squared gradients
- \(\rho\): decay rate
- \(\eta\): learning rate

</div>
## What it means
RMSProp rescales updates by a running estimate of gradient magnitude, giving adaptive per-parameter learning rates.

## What it's used for
- Training deep networks with noisy gradients.
- Historical precursor to Adam.

## Key properties
- Large-gradient directions get smaller updates.
- Helps when gradient scales differ across parameters.

## Common gotchas
- Often sensitive to learning-rate tuning.
- Multiple variants exist across frameworks.

## Example
Parameters with consistently large gradients receive smaller effective step sizes.

## See also
- [Adam Optimizer](../optimization/adam.md)
- [Momentum](../optimization/momentum.md)
