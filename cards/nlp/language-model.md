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
P(x_1,\dots,x_T)=\prod_{t=1}^T P(x_t\mid x_{<t})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x_t\): token at position \(t\)
- \(x_{<t}\): previous tokens (context)

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

## See also
- [Next-Token Prediction](../nlp/next-token-prediction.md)
- [Causal Language Modeling](../nlp/causal-language-modeling.md)
