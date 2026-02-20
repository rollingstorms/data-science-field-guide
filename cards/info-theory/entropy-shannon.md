---
id: info.entropy.shannon
title: Shannon Entropy
tags: [information-theory, probability]
related: [info.cross-entropy, info.kl-divergence, ml.perplexity]
prereqs: [prob.probability-mass-function]
---

# Shannon Entropy

## Formula
\[
H(X) = -\sum_{x} p(x)\,\log p(x)
\]

## Parameters
- \(p(x)\): probability of outcome \(x\)
- log base 2 → bits; base \(e\) → nats

## What it means
Expected uncertainty (“average surprise”) of outcomes of \(X\).

## Key properties
- \(0 \le H(X) \le \log |\mathcal{X}|\) for finite \(\mathcal{X}\)
- Maximized by uniform distribution
- \(H(X)=0\) if \(X\) is deterministic

## Common gotchas
- Don’t mix log bases when comparing numeric values.
- Continuous version is **differential entropy** (behaves differently).

## Quick example
For \(p=[0.5, 0.5]\), \(H=1\) bit (base 2).
