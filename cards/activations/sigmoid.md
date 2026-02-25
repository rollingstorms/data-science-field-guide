---
id: dl.sigmoid
title: Sigmoid (Logistic)
tags: [deep-learning, neural-networks, activations, probability]
related: [dl.tanh, dl.softmax, dl.activations]
prereqs: [dl.activations]
---

# Sigmoid (Logistic)

<div class="formula" markdown="1">
## Formula
\[
\sigma(x)=\frac{1}{1+e^{-x}}
\]

</div>
## Plot
```plot
fn: 1/(1+exp(-x))
xmin: -6
xmax: 6
ymin: -0.1
ymax: 1.1
height: 280
title: Sigmoid(x)
```

<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)

</div>
## What it means
Sigmoid maps real numbers to \((0,1)\), making outputs interpretable as probabilities in binary settings.

## What it's used for
- Binary classification output layers.
- Gates in recurrent architectures (e.g., LSTM/GRU).

## Key properties
- Smooth, monotonic, bounded in \((0,1)\).
- Derivative: \(\sigma'(x)=\sigma(x)(1-\sigma(x))\).

## Common gotchas
- Saturates for large \(|x|\), causing small gradients.
- Less common for deep hidden layers than ReLU/GELU.

## Example
\(\sigma(0)=0.5\), \(\sigma(4)\approx 0.982\).

## How to Compute (Pseudocode)
```text
Input: tensor/vector x
Output: y = sigmoid(x) applied elementwise

for each element x_i in x:
  y_i <- 1 / (1 + exp(-x_i))
return y
```

## Complexity
- Time: \(O(m)\) elementwise operations for \(m\) inputs
- Space: \(O(m)\) for the output tensor/vector (or \(O(1)\) extra if done in place)
- Assumptions: Elementwise application over \(m\) scalars; exact constant factors depend on operations like \(\exp\), \(\tanh\), or \(\mathrm{erf}/\Phi\) approximations

## See also
- [Tanh](../activations/tanh.md)
- [Softmax](../activations/softmax.md)
