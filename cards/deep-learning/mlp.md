---
id: dl.mlp
title: MLP (Multi-Layer Perceptron)
tags: [deep-learning, neural-networks]
related: [dl.activations, dl.attention]
prereqs: []
---

# MLP (Multi-Layer Perceptron)

<div class="formula" markdown="1">
## Formula
\[
h^{(1)}=\phi(W^{(1)}x+b^{(1)}),\quad
h^{(\ell+1)}=\phi(W^{(\ell+1)}h^{(\ell)}+b^{(\ell+1)})
\]

\[
\hat{y}=W^{(L)}h^{(L-1)}+b^{(L)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): input vector
- \(W^{(\ell)}, b^{(\ell)}\): weights and biases at layer \(\ell\)
- \(\phi\): activation function (e.g., ReLU, GELU)
- \(\hat{y}\): output (logit, regression value, etc.)

</div>
## What it means
An MLP is a feedforward neural network made of stacked linear layers plus nonlinear activations.

## What it's used for
- Tabular data modeling and generic function approximation.
- Classifier/regressor heads on top of learned embeddings.
- Transformer feedforward blocks (position-wise MLPs).

## Key properties
- Universal approximation (with sufficient width under standard conditions).
- Capacity depends on depth, width, activation choice, and regularization.

## Common gotchas
- Without activations, stacked layers collapse to a single linear map.
- MLPs do not explicitly model sequence order or graph structure on their own.

## Example
A 2-layer MLP classifier might map \(x\in\mathbb{R}^{d}\) to hidden size 128 with GELU, then to class logits with a final linear layer.

## See also
- [Activation Functions](../activations/activations.md)
- [Attention](../deep-learning/attention.md)
