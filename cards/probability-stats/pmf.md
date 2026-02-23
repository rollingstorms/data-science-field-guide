---
id: prob.pmf
title: PMF (Probability Mass Function)
tags: [probability, statistics, distribution, discrete]
related: [prob.pdf, prob.cdf, prob.probability-distribution]
prereqs: [prob.random-variable]
---

# PMF (Probability Mass Function)

<div class="formula" markdown="1">
## Formula
\[
p_X(x)=P(X=x)
\]

\[
\sum_x p_X(x)=1
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): discrete random variable
- \(p_X(x)\): probability that \(X\) equals value \(x\)

</div>
## What it means
The PMF gives the probability of each exact outcome for a discrete random variable.

## What it's used for
- Computing event probabilities by summing over outcomes.
- Defining expectations for discrete variables.

## Key properties
- \(0 \le p_X(x) \le 1\) for all \(x\).
- Probabilities over all possible values sum to 1.

## Common gotchas
- PMFs apply to discrete variables, not continuous ones.
- Zero probability at a value does not necessarily mean impossible in limiting models.

## Example
For a fair die, \(p_X(4)=1/6\) and \(P(X\in\{1,2\})=p_X(1)+p_X(2)=1/3\).

## See also
- [PDF (Probability Density Function)](../probability-stats/pdf.md)
- [CDF (Cumulative Distribution Function)](../probability-stats/cdf.md)
