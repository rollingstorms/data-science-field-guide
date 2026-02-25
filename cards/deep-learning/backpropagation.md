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

## How to Compute (Pseudocode)
```text
Input: computation graph, loss L
Output: gradients for parameters and intermediates

run forward pass and cache needed intermediates
initialize upstream gradient dL/dL <- 1
traverse graph in reverse topological order:
  apply each node's local derivative rule
  accumulate gradients for parent nodes/parameters
return parameter gradients
```

## Complexity
- Time: Typically on the same order as the forward pass (often a small constant-factor multiple), plus gradient accumulation overhead
- Space: Depends on stored activations/intermediates for the backward pass (activation memory often dominates)
- Assumptions: Reverse-mode autodiff for scalar loss; checkpointing/recomputation strategies trade time for memory

## See also
- [Chain Rule](../calculus/chain-rule.md)
- [Gradient](../calculus/gradient.md)
