---
id: nlp.next-token-prediction
title: Next-Token Prediction
tags: [nlp, llms, transformers]
related: [nlp.language-model, nlp.causal-language-modeling]
prereqs: [nlp.language-model]
---

# Next-Token Prediction

<div class="formula" markdown="1">
## Formula
\[
\hat{x}_{t+1}\sim P(\cdot \mid x_{\le t})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x_{\le t}\): prompt/context tokens up to time \(t\)
- \(P(\cdot \mid x_{\le t})\): predicted distribution over next token

</div>
## What it means
The model predicts a probability distribution for the next token given the current context.

## What it's used for
- Autoregressive generation.
- Scoring and completion tasks.

## Key properties
- Repeated next-token prediction produces full sequence generation.
- Sampling/decoding strategy affects output diversity and quality.

## Common gotchas
- Greedy next-token choice is not always best globally.
- Context length limits what the model can condition on.

## Example
After "2 + 2 =", a model assigns high probability to token "4".

## How to Compute (Pseudocode)
```text
Input: context tokens x_{<=t}, language model, decoding rule
Output: next-token prediction/distribution

run the model on the context to obtain next-token logits/probabilities
apply a decoding rule (greedy, temperature, top-k, top-p, etc.)
return the next-token distribution or sampled/selected token
```

## Complexity
- Time: Depends on the language model forward pass and decoding rule; decoding-rule postprocessing is usually smaller than model inference cost
- Space: Depends on model activations/cache and vocabulary logits for the current step
- Assumptions: One decoding step shown; autoregressive generation repeats this process for each generated token

## See also
- [Language Model](../nlp/language-model.md)
- [Temperature (Sampling)](../nlp/temperature-sampling.md)
