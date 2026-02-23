---
id: dl.tanh
title: Tanh (Hyperbolic Tangent)
tags: [deep-learning, neural-networks, activations]
related: [dl.sigmoid, dl.gelu, dl.activations]
prereqs: [dl.activations]
---

# Tanh (Hyperbolic Tangent)

<div class="formula" markdown="1">
## Formula
\[
\tanh(x)=\frac{e^x-e^{-x}}{e^x+e^{-x}}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)

</div>
## What it means
Tanh maps real inputs to \((-1,1)\), giving a zero-centered bounded activation.

## What it's used for
- Hidden activations in older MLP/RNN setups.
- State updates in recurrent models.

## Key properties
- Smooth, monotonic, odd function.
- Zero-centered output unlike sigmoid.

## Common gotchas
- Saturates for large \(|x|\), leading to vanishing gradients.
- Often outperformed by ReLU-family activations in deep feedforward networks.

## Example
\(\tanh(0)=0\), \(\tanh(2)\approx 0.964\).

## See also
- [Sigmoid](../activations/sigmoid.md)
- [ReLU (Rectified Linear Unit)](../activations/relu.md)
