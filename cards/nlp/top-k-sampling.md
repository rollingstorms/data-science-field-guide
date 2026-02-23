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

## See also
- [Temperature (Sampling)](../nlp/temperature-sampling.md)
- [Top-p Sampling (Nucleus)](../nlp/top-p-sampling.md)
