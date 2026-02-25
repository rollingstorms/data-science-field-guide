---
id: dl.activations
title: Activation Functions
tags: [deep-learning, neural-networks]
related: [dl.relu, dl.gelu, dl.swish-silu]
prereqs: []
---

# Activation Functions

<div class="formula" markdown="1">
## Formula
\[
h = \phi(Wx + b)
\]

</div>
## Plot
```plot
fns: (x+abs(x))/2 | 1/(1+exp(-x)) | tanh(x)
colors: #ff6b2c | #1f6feb | #111111
labels: ReLU | Sigmoid | Tanh
xmin: -4
xmax: 4
ymin: -1.2
ymax: 4
height: 300
title: Common activation shapes (illustrative)
```

<div class="parameters" markdown="1">
## Parameters
- \(x\): input vector
- \(W,b\): weights and bias
- \(\phi\): nonlinear activation (e.g., ReLU, sigmoid, tanh, GELU)
- \(h\): activated output

</div>
## What it means
Activation functions add nonlinearity to neural networks so stacked layers can represent more than a single linear transformation.

## What it's used for
- Building expressive neural networks.
- Controlling gradient flow and output ranges.

## Key properties
- Without nonlinear activations, deep linear layers collapse into one linear map.
- Different activations trade off smoothness, sparsity, and saturation behavior.

## Common gotchas
- Sigmoid/tanh can saturate and slow training in deep nets.
- ReLU can produce "dead" units when activations stay negative.

## Example
For ReLU, if \(z=[-2,0.5]\), then \(\phi(z)=[0,0.5]\).

## How to Compute (Pseudocode)
```text
Input: pre-activation vector z = W x + b, activation function phi
Output: activated vector h

for each component i:
  h[i] <- phi(z[i])
return h
```

## Complexity
- Time: \(O(m)\) elementwise activation work for an \(m\)-dimensional pre-activation vector (excluding the matrix multiply to compute \(Wx+b\))
- Space: \(O(m)\) for the activated output vector
- Assumptions: Elementwise activations (softmax is a notable non-elementwise exception and has its own card)

## See also
- [ReLU (Rectified Linear Unit)](../activations/relu.md)
- [GELU](../activations/gelu.md)
- [Swish / SiLU](../activations/swish-silu.md)
- [Sigmoid](../activations/sigmoid.md)
- [Tanh](../activations/tanh.md)
- [Softmax](../activations/softmax.md)
