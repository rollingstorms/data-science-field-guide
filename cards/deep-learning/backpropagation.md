---
id: dl.backpropagation
title: Backpropagation
tags: [deep-learning, optimization, calculus]
related: [calc.chain-rule, opt.gradient-clipping]
prereqs: [calc.chain-rule, calc.gradient]
---

# Backpropagation

<div class="formula" markdown="1">
## Formula
\[
\frac{\partial \mathcal{L}}{\partial x}
=
\frac{\partial \mathcal{L}}{\partial y}
\frac{\partial y}{\partial x}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathcal{L}\): loss function
- \(x,y\): intermediate variables in a computation graph
- \(\partial \mathcal{L}/\partial(\cdot)\): gradients

</div>
## What it means
Backpropagation computes gradients efficiently by applying the chain rule backward through the computation graph.

## What it's used for
- Training neural networks with gradient-based optimizers.
- Automatic differentiation in deep learning frameworks.

## Key properties
- Reuses intermediate computations from the forward pass.
- Time complexity is typically a small constant factor of the forward pass.

## Common gotchas
- In-place ops and detached tensors can break gradient flow.
- Numerical instability can cause exploding/vanishing gradients.

## Example
For \(y=wx\) and loss \(\mathcal{L}(y)\), backprop computes \(\partial \mathcal{L}/\partial w=(\partial \mathcal{L}/\partial y)\,x\).

## See also
- [Chain Rule](../calculus/chain-rule.md)
- [Gradient](../calculus/gradient.md)
