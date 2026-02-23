---
id: dl.swish-silu
title: Swish / SiLU
tags: [deep-learning, neural-networks, activations]
related: [dl.gelu, dl.sigmoid, dl.activations]
prereqs: [dl.activations]
---

# Swish / SiLU

<div class="formula" markdown="1">
## Formula
\[
\mathrm{Swish}(x)=x\,\sigma(\beta x)
\]

\[
\mathrm{SiLU}(x)=x\,\sigma(x)\quad (\beta=1)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)
- \(\sigma(\cdot)\): sigmoid function
- \(\beta\): slope parameter (fixed or learned)

</div>
## What it means
Swish/SiLU multiplies the input by a sigmoid gate, giving a smooth activation that can suppress or pass values gradually.

## What it's used for
- Hidden activations in modern CNNs/MLPs/transformer variants.
- Alternative to ReLU/GELU in some architectures.

## Key properties
- Smooth and non-monotonic.
- SiLU is a special case of Swish with \(\beta=1\).

## Common gotchas
- "Swish" and "SiLU" are often used interchangeably, but Swish can include \(\beta\neq 1\).
- Slightly more compute than ReLU.

## Example
At \(x=0\), \(\mathrm{SiLU}(0)=0\). For large positive \(x\), \(\mathrm{SiLU}(x)\approx x\).

## See also
- [GELU](../activations/gelu.md)
- [Sigmoid](../activations/sigmoid.md)
