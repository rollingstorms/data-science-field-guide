---
id: opt.adamw
title: AdamW Optimizer
tags: [optimization, deep-learning]
related: [opt.adam, opt.weight-decay]
prereqs: [opt.adam]
---

# AdamW Optimizer

<div class="formula" markdown="1">
## Formula
\[
\theta_{t+1}=\theta_t-\eta \frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}-\eta\lambda\theta_t
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\theta_t\): parameters
- \(\hat m_t,\hat v_t\): Adam moment estimates
- \(\eta\): learning rate
- \(\lambda\): weight decay coefficient

</div>
## What it means
AdamW applies decoupled weight decay, separating parameter shrinkage from the gradient-based Adam update.

## What it's used for
- Modern training of Transformers and large neural networks.
- Better control of regularization than L2-inside-Adam.

## Key properties
- Decoupled weight decay behaves differently from adding \(\lambda\|\theta\|^2\) to the loss under Adam.
- Usually preferred over vanilla Adam for deep learning.

## Common gotchas
- Excluding biases/norm parameters from weight decay is common but implementation-specific.
- "weight_decay" flags in libraries may not all behave identically.

## Example
A common setup is AdamW with warmup + cosine decay for Transformer training.

## How to Compute (Pseudocode)
```text
Input: gradients g_t, parameters theta, lr eta, Adam hyperparameters, weight decay lambda, steps T
Output: updated parameters theta

perform the Adam moment updates and bias correction
for each parameter element:
  theta <- theta - eta * adam_update(theta, g_t)
  theta <- theta - eta * lambda * theta    # decoupled weight decay
return theta
```

## Complexity
- Time: \(O(Tp)\) elementwise optimizer-state updates once gradients are available (plus gradient computation cost)
- Space: \(O(p)\) additional Adam moment buffers, similar to Adam
- Assumptions: \(p\) parameters; decoupled decay shown conceptually (implementations may fuse the operations)

## See also
- [Adam Optimizer](../optimization/adam.md)
- [Weight Decay](../optimization/weight-decay.md)
