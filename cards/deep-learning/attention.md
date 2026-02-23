---
id: dl.attention
title: Attention
tags: [deep-learning, transformers, nlp]
related: [dl.self-attention, dl.cross-attention]
prereqs: []
---

# Attention

<div class="formula" markdown="1">
## Formula
\[
\mathrm{Attention}(Q,K,V)=\mathrm{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(Q\): queries
- \(K\): keys
- \(V\): values
- \(d_k\): key dimension (scaling term)

</div>
## What it means
Attention computes weighted combinations of value vectors, where weights are determined by similarity between queries and keys.

## What it's used for
- Letting models dynamically focus on relevant tokens/features.
- Sequence modeling in transformers and multimodal models.

## Key properties
- Weights are data-dependent (not fixed convolution kernels).
- Softmax-normalized weights make each output a convex combination of values (row-wise).

## Common gotchas
- Attention weights are not always faithful explanations.
- Omitting scaling by \(\sqrt{d_k}\) can destabilize training for large dimensions.

## Example
If a query strongly matches the key for token 3, the output becomes a weighted average dominated by value 3.

## See also
- [Self-Attention](../deep-learning/self-attention.md)
- [Cross-Attention](../deep-learning/cross-attention.md)
