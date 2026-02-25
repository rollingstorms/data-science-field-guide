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

## How to Compute (Pseudocode)
```text
Input: token sequence batch, masking policy, encoder-style LM
Output: MLM training loss

sample/select masked positions according to the masking policy
replace/mask tokens at selected positions
run the model to obtain logits for all positions
compute loss only on masked positions
return masked-token prediction loss
```

## Complexity
- Time: Depends on model architecture; usually dominated by encoder forward/backward passes over the sequence batch
- Space: Depends on model activations and sequence length; masking bookkeeping is typically small overhead
- Assumptions: BERT-style MLM workflow shown; masking ratios/policies affect constants but not the dominant model-compute term

## See also
- [Language Model](../nlp/language-model.md)
- [Causal Language Modeling](../nlp/causal-language-modeling.md)
