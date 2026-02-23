---
id: nlp.masked-language-modeling
title: Masked Language Modeling (MLM)
tags: [nlp, transformers, pretraining]
related: [nlp.language-model, nlp.causal-language-modeling]
prereqs: [nlp.language-model]
---

# Masked Language Modeling (MLM)

<div class="formula" markdown="1">
## Formula
\[
\mathcal{L}=-\sum_{t\in M}\log P(x_t\mid x_{\setminus M})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(M\): set of masked positions
- \(x_{\setminus M}\): observed tokens with masked positions hidden/replaced

</div>
## What it means
MLM trains a model to reconstruct masked tokens using surrounding context.

## What it's used for
- Encoder-style pretraining (e.g., BERT-like models).
- Learning bidirectional contextual representations.

## Key properties
- Uses both left and right context.
- Loss is computed only on selected masked positions.

## Common gotchas
- Pretraining masking strategy affects downstream performance.
- MLM is not directly autoregressive generation training.

## Example
Input: "Paris is the [MASK] of France" and the model predicts "capital."

## See also
- [Language Model](../nlp/language-model.md)
- [Causal Language Modeling](../nlp/causal-language-modeling.md)
