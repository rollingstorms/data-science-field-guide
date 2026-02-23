---
id: dl.softmax
title: Softmax
tags: [deep-learning, neural-networks, activations, probability]
related: [dl.sigmoid, dl.attention, dl.activations]
prereqs: [dl.activations]
---

# Softmax

<div class="formula" markdown="1">
## Formula
\[
\mathrm{softmax}(z)_i=\frac{e^{z_i}}{\sum_j e^{z_j}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(z\): vector of logits
- \(\mathrm{softmax}(z)_i\): normalized probability for class/component \(i\)

</div>
## What it means
Softmax converts a vector of real-valued scores (logits) into a probability distribution over classes/components.

## What it's used for
- Multiclass classification output layers.
- Normalizing attention scores into attention weights.

## Key properties
- Outputs are nonnegative and sum to 1.
- Invariant to adding the same constant to all logits.

## Common gotchas
- Compute with the stability trick: subtract \(\max_i z_i\) before exponentiating.
- Large logits can make distributions overly sharp.

## Example
If \(z=[1,2]\), then \(\mathrm{softmax}(z)\approx [0.269,0.731]\).

## See also
- [Attention](../deep-learning/attention.md)
- [Sigmoid](../activations/sigmoid.md)
