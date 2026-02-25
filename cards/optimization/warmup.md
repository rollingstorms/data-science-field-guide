---
id: opt.warmup
title: Learning Rate Warmup
tags: [optimization, deep-learning]
related: [opt.learning-rate-schedule, opt.adamw]
prereqs: [opt.learning-rate-schedule]
---

# Learning Rate Warmup

<div class="formula" markdown="1">
## Formula
\[
\eta_t = \eta_{\max}\frac{t}{T_{\text{warmup}}}
\quad \text{for } t \le T_{\text{warmup}}
\]

</div>
## Plot
```plot
fn: x
xmin: 0
xmax: 1
ymin: 0
ymax: 1.05
height: 280
title: Linear warmup phase (normalized)
```

<div class="parameters" markdown="1">
## Parameters
- \(\eta_t\): learning rate at step \(t\)
- \(\eta_{\max}\): target learning rate after warmup
- \(T_{\text{warmup}}\): number of warmup steps

</div>
## What it means
Warmup starts training with a small learning rate and ramps it up over the first steps.

## What it's used for
- Stabilizing early optimization in Transformers and large models.
- Preventing large unstable updates before statistics/activations settle.

## Key properties
- Usually only applied at the beginning of training.
- Commonly followed by cosine or inverse-sqrt decay.

## Common gotchas
- Too-short warmup can still explode; too-long warmup wastes training steps.
- Warmup should match the schedule step granularity.

## Example
Train with linear warmup for 1,000 steps, then cosine decay for the remaining steps.

## How to Compute (Pseudocode)
```text
Input: step t, warmup steps T_warmup, target lr eta_max, post-warmup schedule
Output: learning rate eta_t

if t <= T_warmup:
  eta_t <- eta_max * t / T_warmup
else:
  eta_t <- post_warmup_schedule(t)
return eta_t
```

## Complexity
- Time: \(O(1)\) per step to compute the warmup-adjusted learning rate
- Space: \(O(1)\)
- Assumptions: Schedule evaluation only; warmup is typically composed with a longer decay schedule and does not dominate training cost

## See also
- [Learning Rate Schedule](../optimization/learning-rate-schedule.md)
- [AdamW Optimizer](../optimization/adamw.md)
