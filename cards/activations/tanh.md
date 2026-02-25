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
## Plot
```plot
fn: tanh(x)
xmin: -4
xmax: 4
ymin: -1.2
ymax: 1.2
height: 280
title: tanh(x)
```

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

## How to Compute (Pseudocode)
```text
Input: tensor/vector x
Output: y = tanh(x) applied elementwise

for each element x_i in x:
  y_i <- tanh(x_i)
return y
```

## Complexity
- Time: \(O(m)\) elementwise operations for \(m\) inputs
- Space: \(O(m)\) for the output tensor/vector (or \(O(1)\) extra if done in place)
- Assumptions: Elementwise application over \(m\) scalars; exact constant factors depend on operations like \(\exp\), \(\tanh\), or \(\mathrm{erf}/\Phi\) approximations

## See also
- [Sigmoid](../activations/sigmoid.md)
- [ReLU (Rectified Linear Unit)](../activations/relu.md)
