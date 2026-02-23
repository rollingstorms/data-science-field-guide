---
id: dl.gelu
title: GELU (Gaussian Error Linear Unit)
tags: [deep-learning, neural-networks, activations, transformers]
related: [dl.relu, dl.swish-silu, dl.activations]
prereqs: [dl.activations]
---

# GELU (Gaussian Error Linear Unit)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{GELU}(x)=x\,\Phi(x)
\]

\[
\approx \frac{1}{2}x\left(1+\tanh\!\left(\sqrt{\frac{2}{\pi}}\left(x+0.044715x^3\right)\right)\right)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)
- \(\Phi(x)\): standard normal CDF

</div>
## What it means
GELU smoothly gates inputs by their magnitude, rather than hard-thresholding like ReLU.

## What it's used for
- Common hidden activation in Transformer MLP blocks.
- Deep models where smooth activations can help optimization.

## Key properties
- Smooth and non-monotonic.
- Behaves roughly like a softened ReLU for positive inputs.

## Common gotchas
- More expensive than ReLU if not using an approximation.
- Implementation details vary (exact vs approximate GELU).

## Example
For large positive \(x\), \(\mathrm{GELU}(x)\approx x\); for large negative \(x\), \(\mathrm{GELU}(x)\approx 0\).

## See also
- [ReLU (Rectified Linear Unit)](../activations/relu.md)
- [Swish / SiLU](../activations/swish-silu.md)
