---
id: opt.weight-decay
title: Weight Decay
tags: [optimization, regularization, deep-learning]
related: [opt.regularization, opt.adamw]
prereqs: []
---

# Weight Decay

<div class="formula" markdown="1">
## Formula
\[
\theta_{t+1}=(1-\eta\lambda)\theta_t - \eta g_t
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\theta_t\): parameters
- \(g_t\): gradient update term
- \(\eta\): learning rate
- \(\lambda\): decay strength

</div>
## What it means
Weight decay shrinks parameters toward zero during training, discouraging overly large weights.

## What it's used for
- Regularization in neural network training.
- Improving generalization and optimization stability.

## Key properties
- In SGD, closely related to L2 regularization.
- In adaptive optimizers, decoupled decay (AdamW) is often preferred.

## Common gotchas
- Some parameters (biases, norm scales) are often excluded.
- Library APIs may implement L2 penalty instead of decoupled decay.

## Example
Applying weight decay to a large linear layer gradually reduces weight magnitudes unless supported by the data gradient.

## See also
- [AdamW Optimizer](../optimization/adamw.md)
- [Regularization (L1/L2)](../optimization/regularization.md)
