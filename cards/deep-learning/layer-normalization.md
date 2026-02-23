---
id: dl.layer-normalization
title: Layer Normalization
tags: [deep-learning, neural-networks, normalization]
related: [dl.batch-normalization, dl.residual-connection]
prereqs: []
---

# Layer Normalization

<div class="formula" markdown="1">
## Formula
\[
\mu = \frac{1}{d}\sum_{i=1}^d x_i,\quad
\sigma^2=\frac{1}{d}\sum_{i=1}^d (x_i-\mu)^2
\]
\[
\mathrm{LN}(x)=\gamma \odot \frac{x-\mu}{\sqrt{\sigma^2+\epsilon}}+\beta
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\in\mathbb{R}^d\): features for one example/token
- \(\gamma,\beta\): learnable scale and shift
- \(\epsilon\): numerical stability constant

</div>
## What it means
Normalizes features within a single example/token, then applies a learned affine transform.

## What it's used for
- Stabilizing training in Transformers.
- Reducing sensitivity to activation scale.

## Key properties
- Independent of batch size.
- Common in pre-norm and post-norm Transformer variants.

## Common gotchas
- Normalize over the correct axis (feature dimension, not batch).
- Pre-norm vs post-norm changes training dynamics.

## Example
In a Transformer block, layer norm is applied before or after attention/MLP sublayers depending on architecture.

## See also
- [Batch Normalization](../deep-learning/batch-normalization.md)
- [Residual Connection](../deep-learning/residual-connection.md)
