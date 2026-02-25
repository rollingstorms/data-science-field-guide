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
- [Expectation](../probability-stats/expectation.md)
