---
id: prob.conditional-expectation
title: Conditional Expectation
tags: [probability, statistics]
related: [prob.expectation, prob.variance]
prereqs: [prob.expectation]
---

# Conditional Expectation

<div class="formula" markdown="1">
## Formula
\[
\mathbb{E}[X\mid Y] = \sum_x x\,p(x\mid Y) \quad\text{or}\quad \mathbb{E}[X\mid Y] = \int x\,p(x\mid Y)\,dx
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(Y\): conditioning variable
- \(p(x\mid Y)\): conditional distribution

</div>
## What it means
Best mean-squared predictor of \(X\) given \(Y\).



## What it's used for
- Best mean-squared predictor given information.
- Computing expected values given events.
## Key properties
- Law of total expectation: \(\mathbb{E}[\mathbb{E}[X\mid Y]] = \mathbb{E}[X]\)
- \(\mathbb{E}[g(Y)X\mid Y]=g(Y)\,\mathbb{E}[X\mid Y]\)

## Common gotchas
- \(\mathbb{E}[X\mid Y]\) is a random variable, not a constant.
- Conditioning can reduce variance but not always pointwise.



## Example
If \(E[X\mid Y=1]=3\) and \(E[X\mid Y=0]=1\),
then \(E[X\mid Y]\) equals 3 when \(Y=1\) and 1 when \(Y=0\).
## See also
- [Expectation](../probability-stats/expectation.md)
