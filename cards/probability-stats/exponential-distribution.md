---
id: prob.exponential-distribution
title: Exponential Distribution
tags: [probability, statistics, distribution, continuous]
related: [prob.poisson-distribution, prob.gamma-distribution]
prereqs: [prob.pdf, prob.cdf]
---

# Exponential Distribution

<div class="formula" markdown="1">
## Formula
\[
f(x)=\lambda e^{-\lambda x},\quad x\ge 0
\]
\[
F(x)=1-e^{-\lambda x}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\lambda>0\): rate
- \(x\ge 0\): waiting time

</div>
## What it means
Models waiting times between events in a Poisson process.

## What it's used for
- Time-to-event modeling with constant hazard.
- Queueing and reliability basics.

## Key properties
- Memoryless continuous distribution.
- Mean \(1/\lambda\), variance \(1/\lambda^2\).

## Common gotchas
- Rate \(\lambda\) vs scale \(1/\lambda\) parameterizations are both used.
- Not appropriate when hazard changes over time.

## Example
If \(\lambda=2\) per hour, expected waiting time is \(0.5\) hours.

## See also
- [Poisson Distribution](../probability-stats/poisson-distribution.md)
- [Gamma Distribution](../probability-stats/gamma-distribution.md)
