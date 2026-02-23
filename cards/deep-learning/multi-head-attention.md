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

## See also
- [Attention](../deep-learning/attention.md)
- [Transformer](../deep-learning/transformer.md)
