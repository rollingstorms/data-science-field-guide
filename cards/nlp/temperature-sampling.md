---
id: nlp.temperature-sampling
title: Temperature (Sampling)
tags: [nlp, llms, decoding]
related: [nlp.top-k-sampling, nlp.top-p-sampling]
prereqs: [nlp.next-token-prediction]
---

# Temperature (Sampling)

<div class="formula" markdown="1">
## Formula
\[
P_i^{(T)}=\frac{\exp(z_i/T)}{\sum_j \exp(z_j/T)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(z_i\): logit for token \(i\)
- \(T>0\): temperature

</div>
## What it means
Temperature rescales logits before softmax to control randomness in sampling.

## What it's used for
- Adjusting creativity/diversity in generation.
- Decoding calibration with top-k/top-p sampling.

## Key properties
- Lower \(T\) makes output distribution sharper.
- Higher \(T\) makes output distribution flatter.

## Common gotchas
- Very low \(T\) can become repetitive.
- Very high \(T\) can produce incoherent text.

## Example
At \(T=0.7\), top tokens become more concentrated than at \(T=1.0\).

## See also
- [Top-k Sampling](../nlp/top-k-sampling.md)
- [Top-p Sampling (Nucleus)](../nlp/top-p-sampling.md)
