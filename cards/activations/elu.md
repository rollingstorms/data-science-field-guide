---
id: dl.elu
title: ELU (Exponential Linear Unit)
tags: [deep-learning, neural-networks, activations]
related: [dl.relu, dl.leaky-relu, dl.selu]
prereqs: [dl.activations]
---

# ELU (Exponential Linear Unit)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{ELU}(x)=
\begin{cases}
x, & x>0\\
\alpha(e^x-1), & x\le 0
\end{cases}
\]

</div>
## Plot
```plot
fn: (x+abs(x))/2 + (exp((x-abs(x))/2)-1)
xmin: -4
xmax: 4
ymin: -1.2
ymax: 4
height: 280
title: ELU(x) (alpha=1)
```

<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)
- \(\alpha>0\): negative-side scale

</div>
## What it means
ELU behaves like ReLU for positive inputs but uses a smooth exponential curve for negative inputs.

## What it's used for
- Hidden-layer activations as a ReLU alternative.
- Reducing hard-zero behavior on the negative side.

## Key properties
- Smooth for \(x\neq 0\) and bounded below by \(-\alpha\).
- Negative outputs can help keep activations closer to zero mean.

## Common gotchas
- More expensive than ReLU due to exponentials.
- Hyperparameter \(\alpha\) affects behavior and is sometimes left implicit.

## Example
With \(\alpha=1\), \(\mathrm{ELU}(-1)=e^{-1}-1\approx -0.632\).

## How to Compute (Pseudocode)
```text
Input: tensor/vector x
Output: y = ELU(x) applied elementwise

for each element x_i in x:
  y_i <- x_i if x_i > 0 else alpha * (exp(x_i) - 1)
return y
```

## Complexity
- Time: \(O(m)\) elementwise operations for \(m\) inputs
- Space: \(O(m)\) for the output tensor/vector (or \(O(1)\) extra if done in place)
- Assumptions: Elementwise application over \(m\) scalars; exact constant factors depend on operations like \(\exp\), \(\tanh\), or \(\mathrm{erf}/\Phi\) approximations

## See also
- [ReLU (Rectified Linear Unit)](../activations/relu.md)
- [SELU](../activations/selu.md)
