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
## How to Compute (Pseudocode)
```text
Input: distribution/model (or sample-based estimate) and target function/value definition
Output: expectation quantity

if a discrete distribution is available:
  compute a weighted sum over support values
if a continuous density is available:
  compute an integral (analytically or numerically)
if estimating from samples:
  compute the sample average of the target quantity
return the expectation (or estimate)
```

## Complexity
- Time: Depends on representation (support size, numerical quadrature, or sample count); sample averages are typically \(O(n)\)
- Space: \(O(1)\) extra accumulation space for streaming/sample-average computations (more for grids/tables)
- Assumptions: Exact analytic expectations and numerical/sample estimates use different workflows and error tradeoffs

## See also
- [Variance](../probability-stats/variance.md)
