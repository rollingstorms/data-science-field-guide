---
id: dl.transformer
title: Transformer
tags: [deep-learning, transformers, nlp]
related: [dl.attention, dl.multi-head-attention, dl.positional-encoding]
prereqs: [dl.self-attention, dl.mlp]
---

# Transformer

<div class="formula" markdown="1">
## Formula
\[
\mathrm{TransformerBlock}(X)=\mathrm{FFN}\big(\mathrm{AttnBlock}(X)\big)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): sequence representations
- \(\mathrm{AttnBlock}\): (self-/cross-)attention + residual + normalization
- \(\mathrm{FFN}\): position-wise feedforward network + residual + normalization

</div>
## What it means
A Transformer is a sequence model built from attention and feedforward blocks instead of recurrence or convolutions.

## What it's used for
- Language models and translation.
- Vision/audio/multimodal sequence modeling.

## Key properties
- Highly parallelizable over tokens during training.
- Captures long-range interactions via attention.

## Common gotchas
- Needs positional information because attention alone is permutation-equivariant.
- Memory cost grows quickly with sequence length for standard attention.

## Example
A decoder-only Transformer stacks masked self-attention + MLP blocks to predict the next token.

## See also
- [Attention](../deep-learning/attention.md)
- [Multi-Head Attention](../deep-learning/multi-head-attention.md)
