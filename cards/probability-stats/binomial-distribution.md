---
id: prob.binomial-distribution
title: Binomial Distribution
tags: [probability, statistics, distribution, discrete]
related: [prob.bernoulli-distribution, prob.poisson-distribution]
prereqs: [prob.bernoulli-distribution, prob.pmf]
---

# Binomial Distribution

<div class="formula" markdown="1">
## Formula
\[
X\sim \mathrm{Binomial}(n,p),\qquad
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(n\): number of trials
- \(p\): success probability per trial
- \(k\): number of successes

</div>
## What it means
Models the number of successes in \(n\) independent Bernoulli trials with the same success probability.

## What it's used for
- Count outcomes from repeated yes/no trials.
- Baseline model for proportions.

## Key properties
- Mean \(np\), variance \(np(1-p)\).
- Support \(k=0,1,\dots,n\).

## Common gotchas
- Requires independent trials with constant \(p\).
- Poisson is only an approximation in a specific rare-event regime.

## Example
Number of heads in 10 fair coin flips is \(\mathrm{Binomial}(10,0.5)\).

## See also
- [Bernoulli Distribution](../probability-stats/bernoulli-distribution.md)
- [Poisson Distribution](../probability-stats/poisson-distribution.md)
