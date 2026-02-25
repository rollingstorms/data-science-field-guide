---
id: dl.relu
title: ReLU (Rectified Linear Unit)
tags: [deep-learning, neural-networks, activations]
related: [dl.leaky-relu, dl.gelu, dl.activations]
prereqs: [dl.activations]
---

# ReLU (Rectified Linear Unit)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{ReLU}(x)=\max(0,x)
\]

</div>
## Plot
```plot
fn: (x+abs(x))/2
xmin: -4
xmax: 4
ymin: -1
ymax: 4
height: 280
title: ReLU(x)
```

<div class="parameters" markdown="1">
## Parameters
- \(x\): scalar (applied elementwise to vectors/tensors)

</div>
## What it means
ReLU keeps positive values and clips negative values to zero.

## What it's used for
- Default hidden-layer activation in many MLPs and CNNs.
- Sparse activations and simple, fast computation.

## Key properties
- Piecewise linear and non-saturating for \(x>0\).
- Derivative is \(1\) for \(x>0\), \(0\) for \(x<0\) (undefined at 0; set by convention).

## Common gotchas
- Dead ReLUs: neurons can get stuck outputting zero.
- Not zero-centered, which can affect optimization dynamics.

## Example
\(\mathrm{ReLU}([-2,0,3])=[0,0,3]\).

## How to Compute (Pseudocode)
```text
Input: tensor/vector x
Output: y = ReLU(x) applied elementwise

for each element x_i in x:
  y_i <- max(0, x_i)
return y
```

## Complexity
- Time: \(O(m)\) elementwise operations for \(m\) inputs
- Space: \(O(m)\) for the output tensor/vector (or \(O(1)\) extra if done in place)
- Assumptions: Elementwise application over \(m\) scalars; exact constant factors depend on operations like \(\exp\), \(\tanh\), or \(\mathrm{erf}/\Phi\) approximations

## See also
- [Leaky ReLU](../activations/leaky-relu.md)
- [GELU](../activations/gelu.md)
