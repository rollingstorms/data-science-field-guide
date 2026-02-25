---
id: dl.self-attention
title: Self-Attention
tags: [deep-learning, transformers, nlp]
related: [dl.attention, dl.cross-attention]
prereqs: [dl.attention]
---

# Self-Attention

<div class="formula" markdown="1">
## Formula
\[
Q = XW_{Q},\quad K = XW_{K},\quad V = XW_{V}
\]

\[
\operatorname{SelfAttn}(X)=\operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt{d_{k}}}\right)V
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): input sequence representations
- \(W_{Q},W_{K},W_{V}\): learned projection matrices
- \(Q,K,V\): queries, keys, values all derived from the same \(X\)

</div>
## What it means
Self-attention lets each token attend to other tokens in the same sequence (and often itself) to build context-aware representations.

## What it's used for
- Transformer encoder/decoder blocks.
- Capturing long-range dependencies without recurrence.

## Key properties
- Parallelizable across sequence positions.
- Can represent pairwise interactions between all tokens in a layer.

## Common gotchas
- Quadratic memory/time in sequence length for standard implementations.
- Causal masking is required for autoregressive decoding.

## Example
In "The animal didn't cross because it was tired," self-attention can help "it" attend to "animal."

## How to Compute (Pseudocode)
```text
Input: sequence representations X
Output: context-aware sequence representations

Q <- X W_Q
K <- X W_K
V <- X W_V
scores <- (Q K^T) / sqrt(d_k)
apply mask if needed (for example, causal mask)
weights <- softmax(scores)
return weights V
```

## Complexity
- Time: Typically \(O(L^2 d)\) for sequence length \(L\) and hidden/head dimension \(d\) in dense self-attention
- Space: Typically \(O(L^2)\) attention-score/weight memory (per head, per batch element), plus projections and outputs
- Assumptions: Standard dense self-attention; multi-head/batch factors multiply constants and memory usage

## See also
- [Attention](../deep-learning/attention.md)
- [Cross-Attention](../deep-learning/cross-attention.md)
