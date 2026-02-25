---
id: nlp.top-k-sampling
title: Top-k Sampling
tags: [nlp, llms, decoding]
related: [nlp.temperature-sampling, nlp.top-p-sampling]
prereqs: [nlp.next-token-prediction]
---

# Top-k Sampling

<div class="formula" markdown="1">
## Formula
\[
P'(i)=
\begin{cases}
\frac{P(i)}{\sum_{j\in K}P(j)}, & i\in K\\
0, & i\notin K
\end{cases}
\]

\[
K=\text{indices of the top }k\text{ probabilities}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(P(i)\): next-token probability
- \(k\): number of highest-probability tokens kept

</div>
## What it means
Top-k sampling restricts sampling to the \(k\) most likely tokens, then renormalizes.

## What it's used for
- Preventing low-probability junk tokens during generation.
- Balancing diversity and coherence.

## Key properties
- Fixed-size candidate set each step.
- Often combined with temperature.

## Common gotchas
- Small \(k\) can become repetitive.
- Large \(k\) may reintroduce low-quality tails.

## Example
With \(k=50\), sampling only occurs among the 50 most likely next tokens.

## How to Compute (Pseudocode)
```text
Input: next-token probabilities/logits and top-k parameter k
Output: sampled token

compute probabilities (or logits ranking)
select the top-k tokens by probability/logit
renormalize probabilities over those k tokens only
sample one token from the truncated distribution
return token
```

## Complexity
- Time: Depends on top-k selection method; commonly \(O(V\log k)\) or \(O(V)\) selection per decoding step, plus renormalization over \(k\) tokens (excluding model forward-pass cost)
- Space: \(O(V)\) for logits/probabilities plus \(O(k)\) for the retained candidate set
- Assumptions: One decoding step shown; practical implementations may fuse temperature/top-k/top-p filtering

## See also
- [Temperature (Sampling)](../nlp/temperature-sampling.md)
- [Top-p Sampling (Nucleus)](../nlp/top-p-sampling.md)
