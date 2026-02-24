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
## Plot (optional)
```plot
# Single curve example:
# fn: 1/(1+exp(-x))
#
# Or multi-curve example:
# fns: x | x^0.8
# colors: #111111 | #ff6b2c
# labels: ideal | model
#
# Or bar chart example:
# type: bars
# xs: 0 | 1 | 2
# ys: 0.2 | 0.5 | 0.3
#
xmin: 0
xmax: 1
ymin: 0
ymax: 1
height: 280
title: Example plot (optional)
```

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
