---
id: dl.selu
title: SELU (Scaled ELU)
tags: [deep-learning, neural-networks, activations]
related: [dl.elu, dl.relu, dl.activations]
prereqs: [dl.elu]
---

# SELU (Scaled ELU)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{SELU}(x)=\lambda
\begin{cases}
x, & x>0\\
\alpha(e^x-1), & x\le 0
\end{cases}
\]

</div>
## Plot
```plot
fn: 1.0507*((x+abs(x))/2 + 1.67326*(exp((x-abs(x))/2)-1))
xmin: -4
xmax: 4
ymin: -2
ymax: 4.5
height: 280
title: SELU(x) (default alpha, lambda)
```

<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar input (applied elementwise)
- \(\alpha,\lambda\): fixed constants chosen for self-normalizing behavior

</div>
## What it means
SELU rescales ELU to encourage activations to maintain stable mean/variance across layers under specific conditions.

## What it's used for
- Self-normalizing neural network setups.
- Hidden activations when architecture/initialization match SELU assumptions.

## Key properties
- Designed to preserve activation statistics approximately.
- Combines ELU-style negative branch with a scaling factor.

## Common gotchas
- Benefits depend on matching assumptions (initialization, architecture, normalization choices).
- Mixing SELU with arbitrary normalization/dropout variants can remove the intended effect.

## Example
SELU has the same piecewise shape as ELU but scaled by \(\lambda\), so positive inputs are amplified linearly.

## How to Compute (Pseudocode)
```text
Input: tensor/vector x
Output: y = SELU(x) applied elementwise

for each element x_i in x:
  y_i <- lambda * (x_i if x_i > 0 else alpha * (exp(x_i) - 1))
return y
```

## Complexity
- Time: \(O(m)\) elementwise operations for \(m\) inputs
- Space: \(O(m)\) for the output tensor/vector (or \(O(1)\) extra if done in place)
- Assumptions: Elementwise application over \(m\) scalars; exact constant factors depend on operations like \(\exp\), \(\tanh\), or \(\mathrm{erf}/\Phi\) approximations

## See also
- [ELU (Exponential Linear Unit)](../activations/elu.md)
- [Activation Functions](../activations/activations.md)
