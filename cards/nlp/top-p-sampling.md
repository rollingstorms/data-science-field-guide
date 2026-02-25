---
id: nlp.top-p-sampling
title: Top-p Sampling (Nucleus)
tags: [nlp, llms, decoding]
related: [nlp.top-k-sampling, nlp.temperature-sampling]
prereqs: [nlp.next-token-prediction]
---

# Top-p Sampling (Nucleus)

<div class="formula" markdown="1">
## Formula
\[
S=\min\left\{A:\sum_{i\in A} P(i)\ge p\right\}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(P(i)\): next-token probability
- \(p\in(0,1]\): cumulative probability threshold
- \(S\): smallest set of top tokens whose total probability reaches \(p\)

</div>
## What it means
Top-p sampling keeps a dynamic set of likely tokens whose cumulative probability mass reaches threshold \(p\), then samples from that set.

## What it's used for
- Adaptive decoding that follows distribution sharpness.
- Common default in LLM generation.

## Key properties
- Candidate set size varies by step.
- Often more adaptive than fixed top-k.

## Common gotchas
- Very high \(p\) can include too much tail noise.
- Very low \(p\) can reduce diversity too much.

## Example
If the distribution is very sharp, top-p with \(p=0.9\) may keep only a handful of tokens.

## How to Compute (Pseudocode)
```text
Input: next-token probabilities/logits and nucleus threshold p
Output: sampled token

compute probabilities (or sorted logits -> probabilities)
sort tokens by probability descending
accumulate probability mass until cumulative mass >= p
keep that smallest prefix set, renormalize, and sample one token
return token
```

## Complexity
- Time: Often dominated by sorting/ranking over vocabulary \(V\) per decoding step (commonly \(O(V\log V)\) unless approximated), excluding model forward-pass cost
- Space: \(O(V)\) for probabilities/logits and sorted indices, plus the selected nucleus set
- Assumptions: One decoding step shown; implementations may use partial sorting or fused filters to reduce constants

## See also
- [Top-k Sampling](../nlp/top-k-sampling.md)
- [Temperature (Sampling)](../nlp/temperature-sampling.md)
