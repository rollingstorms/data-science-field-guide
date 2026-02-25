---
id: dl.multi-head-attention
title: Multi-Head Attention
tags: [deep-learning, transformers]
related: [dl.attention, dl.self-attention, dl.cross-attention]
prereqs: [dl.attention]
---

# Multi-Head Attention

<div class="formula" markdown="1">
## Formula
\[
\mathrm{MHA}(Q,K,V)=\mathrm{Concat}(\mathrm{head}_1,\dots,\mathrm{head}_h)W_O
\]

\[
\mathrm{head}_i=\mathrm{Attention}(QW_i^Q,KW_i^K,VW_i^V)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(h\): number of heads
- \(W_i^Q,W_i^K,W_i^V\): per-head projections
- \(W_O\): output projection

</div>
## What it means
Runs several attention mechanisms in parallel so the model can attend to different patterns/subspaces at once.

## What it's used for
- Core attention module in Transformers.
- Improving representational flexibility vs single-head attention.

## Key properties
- Same input can produce multiple distinct attention maps.
- Output dimension is typically restored by \(W_O\).

## Common gotchas
- Head dimension must match implementation constraints.
- More heads does not always mean better performance.

## Example
One head may focus on local syntax while another captures long-range dependencies.

## How to Compute (Pseudocode)
```text
Input: Q, K, V and number of heads h
Output: multi-head attention output

for each head i in 1..h:
  project Q, K, V into head i subspace
  compute head_i <- Attention(Q_i, K_i, V_i)
concat all head_i outputs
apply output projection W_O
return result
```

## Complexity
- Time: Same asymptotic order as attention with projection overhead, often summarized as \(O(h L^2 d_h) \approx O(L^2 d)\) for dense self-attention
- Space: Includes per-head attention matrices (overall still quadratic in sequence length for dense attention)
- Assumptions: Hidden dimension \(d = h d_h\); dense attention implementation without sparsity/linear-attention approximations

## See also
- [Attention](../deep-learning/attention.md)
- [Transformer](../deep-learning/transformer.md)
