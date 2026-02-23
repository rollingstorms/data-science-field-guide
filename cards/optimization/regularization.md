---
id: opt.regularization
title: Regularization (L1/L2)
tags: [optimization, statistics, deep-learning]
related: [opt.weight-decay, dl.dropout]
prereqs: []
---

# Regularization (L1/L2)

<div class="formula" markdown="1">
## Formula
\[
\mathcal{L}_{\text{reg}} = \mathcal{L} + \lambda \|\theta\|_1
\quad \text{or} \quad
\mathcal{L}_{\text{reg}} = \mathcal{L} + \lambda \|\theta\|_2^2
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\mathcal{L}\): original loss
- \(\theta\): model parameters
- \(\lambda\): regularization strength

</div>
## What it means
Regularization adds penalties to discourage overly complex models and improve generalization.

## What it's used for
- Reducing overfitting.
- Encouraging sparse weights (L1) or smaller weights (L2).

## Key properties
- L1 promotes sparsity.
- L2 shrinks weights smoothly and is common in practice.

## Common gotchas
- Too much regularization underfits.
- L2 penalty and decoupled weight decay are not identical under adaptive optimizers.

## Example
Adding an L2 penalty can improve validation performance even if training loss increases slightly.

## See also
- [Weight Decay](../optimization/weight-decay.md)
- [Dropout](../deep-learning/dropout.md)
