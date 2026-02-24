---
id: prob.markov-inequality
title: Markov's Inequality
tags: [probability, bounds]
related: [prob.expectation]
prereqs: [prob.expectation]
---

# Markov's Inequality

<div class="formula" markdown="1">
## Formula
\[
P(X \ge a) \le \frac{\mathbb{E}[X]}{a},\quad a>0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\ge 0\): nonnegative random variable
- \(a\): positive threshold

</div>
## What it means
Upper-bounds tail probability using only the mean.



## What it's used for
- Upper-bounding tail probabilities for nonnegative variables.
- Quick conservative risk bounds.
## Key properties
- Very general but often loose
- Basis for Chebyshev and other bounds

## Common gotchas
- Requires \(X\ge 0\).
- Bound can be vacuous if \(a\) is small.



## Example
If \(E[X]=2\), then \(P(X\ge 6)\le 2/6=1/3\).
## See also
- [Chebyshev's Inequality](../probability-stats/chebyshev-inequality.md)
