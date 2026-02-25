---
id: opt.gradient-clipping
title: Gradient Clipping
tags: [optimization, deep-learning]
related: [dl.backpropagation, opt.stochastic-gradient-descent]
prereqs: [dl.backpropagation]
---

# Gradient Clipping

<div class="formula" markdown="1">
## Formula
\[
g \leftarrow g \cdot \min\!\left(1,\frac{\tau}{\|g\|}\right)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(g\): gradient vector (or concatenated parameter gradients)
- \(\tau\): clipping threshold (max norm)

</div>
## What it means
Gradient clipping limits gradient magnitude to prevent unstable, excessively large parameter updates.

## What it's used for
- Stabilizing training (especially RNNs and large models).
- Reducing exploding-gradient failures.

## Key properties
- Norm clipping preserves gradient direction when clipping occurs.
- Value clipping (per-component) is a different method.

## Common gotchas
- Too-small thresholds slow learning.
- Clipping frequency can indicate upstream instability (LR too high, bad initialization).

## Example
If \(\|g\|=10\) and \(\tau=1\), the gradient is scaled down by \(0.1\).

## How to Compute (Pseudocode)
```text
Input: gradient vector/tensor collection g, clipping threshold tau
Output: clipped gradient g_clipped

norm_g <- l2_norm(g)
scale <- min(1, tau / norm_g)
g_clipped <- scale * g
return g_clipped
```

## Complexity
- Time: \(O(p)\) to compute the gradient norm and rescale \(p\) parameters (once gradients are available)
- Space: \(O(1)\) extra space beyond the gradient storage (or \(O(p)\) if writing to a separate clipped copy)
- Assumptions: Norm clipping shown; value clipping and per-parameter-group clipping use different rules but similar linear-time scans

## See also
- [Backpropagation](../deep-learning/backpropagation.md)
- [Adam Optimizer](../optimization/adam.md)
