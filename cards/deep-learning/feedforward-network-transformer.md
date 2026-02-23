---
id: dl.transformer-ffn
title: Feedforward Network (Transformer FFN)
tags: [deep-learning, transformers, mlp]
related: [dl.mlp, dl.transformer, dl.gelu]
prereqs: [dl.mlp]
---

# Feedforward Network (Transformer FFN)

<div class="formula" markdown="1">
## Formula
\[
\mathrm{FFN}(x)=W_2\,\phi(W_1x+b_1)+b_2
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): token representation
- \(W_1,W_2,b_1,b_2\): FFN parameters
- \(\phi\): activation (often GELU/ReLU/SwiGLU variants)

</div>
## What it means
A position-wise MLP applied independently to each token after attention in a Transformer block.

## What it's used for
- Nonlinear feature transformation after attention.
- Increasing model capacity with an expansion-projection pattern.

## Key properties
- Same weights reused across sequence positions.
- Often uses hidden width larger than model dimension.

## Common gotchas
- It is not a sequence-mixing step (attention does that).
- Activation choice affects model quality and speed.

## Example
A Transformer block may map \(d=768\) to \(3072\) with GELU, then back to \(768\).

## See also
- [MLP (Multi-Layer Perceptron)](../deep-learning/mlp.md)
- [Transformer](../deep-learning/transformer.md)
