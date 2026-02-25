---
id: dl.dropout
title: Dropout
tags: [deep-learning, regularization]
related: [opt.regularization, dl.mlp]
prereqs: []
---

# Dropout

<div class="formula" markdown="1">
## Formula
\[
\tilde{h} = \frac{m \odot h}{1-p},\quad m_i \sim \mathrm{Bernoulli}(1-p)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(h\): activations
- \(m\): random mask
- \(p\): dropout probability

</div>
## What it means
Randomly zeroes activations during training to reduce co-adaptation and overfitting.

## What it's used for
- Regularization in MLPs/CNNs/Transformers.
- Improving generalization on limited data.

## Key properties
- Applied during training, typically disabled at inference.
- Inverted dropout scales by \(1/(1-p)\) during training.

## Common gotchas
- Too much dropout can underfit.
- Placement (attention weights vs activations vs residual path) matters.

## Example
With \(p=0.1\), about 10% of activations are zeroed each training step.

## How to Compute (Pseudocode)
```text
Input: activations h, dropout rate p, mode (train/inference)
Output: dropout-transformed activations

if inference mode:
  return h
sample mask m with m_i ~ Bernoulli(1-p)
return (m * h) / (1-p)   # inverted dropout
```

## Complexity
- Time: \(O(m)\) elementwise masking/scaling for \(m\) activation values
- Space: \(O(m)\) for the sampled mask during training (or less if fused/implicit)
- Assumptions: Inverted-dropout formulation; total training cost is dominated by surrounding forward/backward computations

## See also
- [MLP (Multi-Layer Perceptron)](../deep-learning/mlp.md)
- [Regularization (L1/L2)](../optimization/regularization.md)
