---
id: prob.poisson-distribution
title: Poisson Distribution
tags: [probability, statistics, distribution, discrete]
related: [prob.bernoulli-trial, prob.expectation, prob.variance]
prereqs: [prob.pmf]
---

# Poisson Distribution

<div class="formula" markdown="1">
## Formula
\[
X\sim \mathrm{Poisson}(\lambda),\qquad
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\dots
\]

\[
\mathbb{E}[X]=\lambda,\qquad \operatorname{Var}(X)=\lambda
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\lambda>0\): average count/rate in a fixed interval
- \(k\): nonnegative integer count

</div>
## What it means
Models the number of events occurring in a fixed interval when events happen independently at an approximately constant rate.

## What it's used for
- Count data (arrivals, defects, clicks per interval).
- Rare-event approximations to binomial counts.

## Key properties
- Discrete distribution on nonnegative integers.
- Mean equals variance (\(\lambda\)).

## Common gotchas
- "Poison" is a common typo; the distribution is "Poisson."
- If variance is much larger than mean, a plain Poisson model may fit poorly (overdispersion).

## Example
If \(\lambda=2\), then \(P(X=0)=e^{-2}\approx 0.135\).

## See also
- [Bernoulli Trial](../probability-stats/bernoulli-trial.md)
- [PMF (Probability Mass Function)](../probability-stats/pmf.md)
