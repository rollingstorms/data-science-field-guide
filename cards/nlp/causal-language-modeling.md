---
id: nlp.causal-language-modeling
title: Causal Language Modeling
tags: [nlp, llms, transformers]
related: [nlp.next-token-prediction, dl.self-attention]
prereqs: [nlp.language-model]
---

# Causal Language Modeling

<div class="formula" markdown="1">
## Formula
\[
\mathcal{L}=-\sum_{t=1}^T \log P(x_t\mid x_{<t})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x_t\): token at position \(t\)
- \(x_{<t}\): past context only
- \(\mathcal{L}\): training loss

</div>
## What it means
Causal language modeling trains a model to predict each token using only earlier tokens.

## What it's used for
- Decoder-only LLM training.
- Autoregressive text generation.

## Key properties
- Uses causal masking in self-attention.
- Training and generation objectives align naturally.

## Common gotchas
- "Teacher forcing" during training differs from free-running generation at inference.
- Sequence packing can leak context if masking is wrong.

## Example
Given "The sky is", the model predicts the next token distribution for words like "blue".

## See also
- [Next-Token Prediction](../nlp/next-token-prediction.md)
- [Self-Attention](../deep-learning/self-attention.md)
