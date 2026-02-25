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

## How to Compute (Pseudocode)
```text
Input: token representations X
Output: transformed token representations

for each token vector x in X:
  h <- activation(W1 x + b1)
  y <- W2 h + b2
  emit y
return all token outputs
```

## Complexity
- Time: \(O(B L d d_{ff})\) for batch size \(B\), sequence length \(L\), model width \(d\), and FFN hidden width \(d_{ff}\) (dense implementation)
- Space: \(O(B L d_{ff})\) for hidden activations plus output/storage tensors (training caches add more)
- Assumptions: Position-wise dense FFN with shared weights across tokens; activation cost is lower-order relative to matrix multiplies

## See also
- [MLP (Multi-Layer Perceptron)](../deep-learning/mlp.md)
- [Transformer](../deep-learning/transformer.md)
