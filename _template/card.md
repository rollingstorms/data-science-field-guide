---
id: entropy.shannon
title: Shannon Entropy
tags: [information-theory, probability, uncertainty]
related: [cross-entropy, kl-divergence, perplexity]
prereqs: [probability.distribution]
---

# Shannon Entropy

## Formula
\[
H(X) = -\sum_{x \in \mathcal{X}} p(x)\,\log p(x)
\]

## Parameters
- \(X\): discrete random variable
- \(p(x)\): probability mass function
- \(\log\): choose base 2 for **bits**, base \(e\) for **nats**

## What it means (1–3 sentences)
Entropy measures expected “surprise” / uncertainty in a random variable.

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

## Quick example
If \(p=[0.5,0.5]\), then \(H=1\) bit (base 2).

## See also
- [KL Divergence](../info-theory/kl-divergence.md)
- [Cross Entropy](../info-theory/cross-entropy.md)
