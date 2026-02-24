---
id: dl.leaky-relu
title: Leaky ReLU
tags: [deep-learning, neural-networks, activations]
related: [dl.relu, dl.elu, dl.activations]
prereqs: [dl.activations]
---

# Leaky ReLU

<div class="formula" markdown="1">
## Formula
\[
f(x)=\max(\alpha x, x),\quad \alpha \in (0,1)
\]

</div>
## Plot
```plot
fn: 0.55*x + 0.45*abs(x)
xmin: -4
xmax: 4
ymin: -1
ymax: 4
height: 280
title: Leaky ReLU (alpha=0.1)
```

<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)
- \(\alpha\): small negative slope (e.g., \(0.01\))

</div>
## What it means
Like ReLU, but negative inputs keep a small nonzero slope instead of being fully zeroed out.

## What it's used for
- Reducing dead-neuron issues from standard ReLU.
- Hidden activations in feedforward and convolutional networks.

## Key properties
- Piecewise linear.
- Gradient on negative side is \(\alpha\), not 0.

## Common gotchas
- \(\alpha\) is a hyperparameter unless using PReLU (learned slope).
- Still not smooth at \(x=0\).

## Example
With \(\alpha=0.01\), \(f([-2,3])=[-0.02,3]\).

## See also
- [ReLU (Rectified Linear Unit)](../activations/relu.md)
- [ELU](../activations/elu.md)
