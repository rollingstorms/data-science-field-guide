---
id: dl.batch-normalization
title: Batch Normalization
tags: [deep-learning, neural-networks, normalization]
related: [dl.layer-normalization]
prereqs: []
---

# Batch Normalization

<div class="formula" markdown="1">
## Formula
\[
\hat{x}=\frac{x-\mu_B}{\sqrt{\sigma_B^2+\epsilon}},\qquad y=\gamma \hat{x}+\beta
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mu_B,\sigma_B^2\): batch mean and variance
- \(\gamma,\beta\): learnable scale and shift
- \(\epsilon\): numerical stability constant

</div>
## What it means
Normalizes activations using batch statistics during training, then applies a learnable affine transform.

## What it's used for
- Stabilizing and speeding up training in many CNN/MLP architectures.
- Reducing sensitivity to initialization and learning rate.

## Key properties
- Uses batch statistics in training and running estimates at inference.
- Behavior depends on batch size and axis conventions.

## Common gotchas
- Small batch sizes can make BN noisy.
- BN is less common than LN inside Transformers.

## Example
CNN activations are often batch-normalized after convolution and before nonlinear activation.

## How to Compute (Pseudocode)
```text
Input: batch activations x, learned gamma/beta, epsilon, mode
Output: normalized activations y

if training:
  compute batch mean and variance over the normalization axes
  normalize x using batch statistics
  update running mean/variance estimates
else:
  normalize x using running mean/variance
apply affine transform y <- gamma * x_hat + beta
return y
```

## Complexity
- Time: \(O(m)\) per batch for \(m\) normalized activation values (plus reduction operations for mean/variance)
- Space: \(O(m)\) for activations and normalized outputs, plus \(O(c)\) running stats/affine parameters for normalized channels/features
- Assumptions: Exact axes and constants depend on BN variant (1D/2D/3D) and tensor layout

## See also
- [Layer Normalization](../deep-learning/layer-normalization.md)
- [MLP (Multi-Layer Perceptron)](../deep-learning/mlp.md)
