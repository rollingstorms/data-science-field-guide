---
id: opt.learning-rate-schedule
title: Learning Rate Schedule
tags: [optimization, deep-learning]
related: [opt.warmup, opt.stochastic-gradient-descent]
prereqs: [opt.stochastic-gradient-descent]
---

# Learning Rate Schedule

<div class="formula" markdown="1">
## Formula
\[
\eta_t = s(t)
\]

</div>
## Plot
```plot
fn: exp(-0.6*x)
xmin: 0
xmax: 8
ymin: 0
ymax: 1.05
height: 280
title: Example decay schedule (normalized)
```

<div class="parameters" markdown="1">
## Parameters
- \(\eta_t\): learning rate at step/epoch \(t\)
- \(s(t)\): schedule function (step, cosine, exponential, etc.)

</div>
## What it means
A learning-rate schedule changes the step size over training instead of keeping it constant.

## What it's used for
- Faster early training and better final convergence.
- Stabilizing large-model optimization.

## Key properties
- Common schedules: step decay, cosine decay, exponential decay.
- Often combined with warmup.

## Common gotchas
- Scheduler step timing (per step vs per epoch) matters.
- Misconfigured schedules can decay too fast and stall training.

## Example
Cosine decay starts high and gradually reduces the learning rate toward a small final value.

## How to Compute (Pseudocode)
```text
Input: current step/epoch t and a schedule definition s(t)
Output: learning rate eta_t

eta_t <- s(t)
return eta_t
```

## Complexity
- Time: \(O(1)\) per step for common closed-form schedules (step, cosine, exponential, linear)
- Space: \(O(1)\)
- Assumptions: Schedule value computation only; total training cost is dominated by optimizer/model updates over many steps

## See also
- [Warmup](../optimization/warmup.md)
- [AdamW Optimizer](../optimization/adamw.md)
