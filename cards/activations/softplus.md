---
id: dl.softplus
title: Softplus
tags: [deep-learning, neural-networks, activations]
related: [dl.relu, dl.sigmoid, dl.activations]
prereqs: [dl.activations]
---

# Softplus

<div class="formula" markdown="1">
## Formula
\[
\mathrm{Softplus}(x)=\log(1+e^x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)

</div>
## What it means
Softplus is a smooth approximation to ReLU.

## What it's used for
- When a smooth nonlinearity is preferred over ReLU.
- Enforcing positive outputs (e.g., scale/rate parameters).

## Key properties
- Smooth and strictly positive.
- Derivative is sigmoid: \(\frac{d}{dx}\mathrm{Softplus}(x)=\sigma(x)\).

## Common gotchas
- Can be slower than ReLU.
- For very negative inputs, outputs are near zero but not exactly zero.

## Example
\(\mathrm{Softplus}(0)=\log 2 \approx 0.693\).

## See also
- [ReLU (Rectified Linear Unit)](../activations/relu.md)
- [Sigmoid](../activations/sigmoid.md)
