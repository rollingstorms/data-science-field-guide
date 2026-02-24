---
id: prob.expectation
title: Expectation
tags: [probability, statistics]
related: [prob.variance, prob.conditional-expectation]
prereqs: [prob.random-variable]
---

# Expectation

<div class="formula" markdown="1">
## Formula
\[
\mathbb{E}[X] = \sum_x x\,p(x) \quad\text{or}\quad \mathbb{E}[X] = \int x\,p(x)\,dx
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(p(x)\): pmf or pdf

</div>
## What it means
Long-run average value of \(X\).



## What it's used for
- Summarizing the average outcome of a random variable.
- Computing risk or average loss.
## Key properties
- Linearity: \(\mathbb{E}[aX+bY]=a\mathbb{E}[X]+b\mathbb{E}[Y]\)
- \(\mathbb{E}[X]=\sum_x x\,P(X=x)\) for discrete

## Common gotchas
- Expectation may not exist if tails are too heavy.
- \(\mathbb{E}[g(X)]\neq g(\mathbb{E}[X])\) in general.



## Example
For a fair die,
\(E[X]=(1+2+3+4+5+6)/6=3.5\).
## See also
- [Variance](../probability-stats/variance.md)
