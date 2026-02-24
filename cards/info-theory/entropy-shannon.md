---
id: info.entropy.shannon
title: Shannon Entropy
tags: [information-theory, probability]
related: [info.cross-entropy, info.kl-divergence, ml.perplexity]
prereqs: [prob.probability-mass-function]
---

# Shannon Entropy

<div class="formula" markdown="1">
## Formula
\[
H(X) = -\sum_{x} p(x)\,\log p(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p(x)\): probability of outcome \(x\)
- log base 2 → bits; base \(e\) → nats

</div>
## What it means
Expected uncertainty (“average surprise”) of outcomes of \(X\).



## What it's used for
- Measuring uncertainty and minimum coding length.
- Comparing randomness of distributions.
## Key properties
- \(0 \le H(X) \le \log |\mathcal{X}|\) for finite \(\mathcal{X}\)
- Maximized by uniform distribution
- \(H(X)=0\) if \(X\) is deterministic

## Common gotchas
- Don’t mix log bases when comparing numeric values.
- Continuous version is **differential entropy** (behaves differently).

## Example
For a fair coin \(p=[0.5,0.5]\), \(H=1\) bit (log base 2).
