---
id: nlp.language-model
title: Language Model
tags: [nlp, llms, probability]
related: [nlp.next-token-prediction, nlp.causal-language-modeling, nlp.masked-language-modeling]
prereqs: [prob.conditional-probability]
---

# Language Model

<div class="formula" markdown="1">
## Formula
\[
P(x_1,\dots,x_T)=\prod_{t=1}^T P(x_t\mid x_{\lt t})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x_t\): token at position \(t\)
- \(x_{\lt t}\): previous tokens (context)

</div>
## What it means
A language model assigns probabilities to token sequences.

## What it's used for
- Text generation, scoring, and autocomplete.
- Representation learning and downstream NLP tasks.

## Key properties
- Sequence probability factorizes into conditional probabilities.
- Training often minimizes negative log-likelihood / cross-entropy.

## Common gotchas
- Tokenization strongly affects modeling behavior.
- High likelihood does not guarantee factual correctness.

## Example
A language model can score whether one sentence is more likely than another under its learned distribution.

## How to Compute (Pseudocode)
```text
Input: token sequence x_1..x_T and a language model
Output: sequence probability (or log-probability)

logp <- 0
for t from 1 to T:
  obtain P(x_t | x_{<t}) from the model (or the model-specific factorization)
  logp <- logp + log P(x_t | x_{<t})
return exp(logp) or logp
```

## Complexity
- Time: Depends on the language model architecture and sequence length \(T\); evaluating all conditionals is typically linear in the number of positions times per-step model cost (or one batched forward pass in training)
- Space: Depends on model size, sequence length, and whether caches/activations are stored
- Assumptions: Autoregressive factorization shown; encoder-only or masked objectives use different training/evaluation workflows

## See also
- [Next-Token Prediction](../nlp/next-token-prediction.md)
- [Causal Language Modeling](../nlp/causal-language-modeling.md)
