---
id: entropy.shannon
title: Shannon Entropy
tags: [information-theory, probability, uncertainty]
related: [cross-entropy, kl-divergence, perplexity]
prereqs: [probability.distribution]
---

# Shannon Entropy

<div class="formula" markdown="1">
## Formula
\[
H(X) = -\sum_{x \in \mathcal{X}} p(x)\,\log p(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): discrete random variable
- \(p(x)\): probability mass function
- \(\log\): choose base 2 for **bits**, base \(e\) for **nats**

</div>
## What it means (1–3 sentences)
Entropy measures expected “surprise” / uncertainty in a random variable.

## What it's used for
- TODO: add a practical use case.

## Key properties
- \(H(X)\ge 0\)
- Maximum when uniform: \(H(X)=\log|\mathcal{X}|\)
- Minimum 0 when deterministic

## Intuition / geometry
- Larger when probability is spread out
- Smaller when concentrated

## Common gotchas
- Continuous entropy uses differential entropy (can be negative)
- Base of log changes units by a constant factor

## Example
TODO: add a small numeric example.

## See also
- [KL Divergence](../info-theory/kl-divergence.md)
- [Cross Entropy](../info-theory/cross-entropy.md)
