---
id: prob.bernoulli-distribution
title: Bernoulli Distribution
tags: [probability, statistics, distribution, discrete]
related: [prob.bernoulli-trial]
prereqs: []
---

# Bernoulli Distribution

<div class="formula" markdown="1">
## Formula
\[
P(X=1)=p,\quad P(X=0)=1-p
\]

\[
\mathbb{E}[X]=p,\quad \operatorname{Var}(X)=p(1-p)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): binary random variable
- \(p\): success probability

</div>
## What it means
Models a single binary outcome.



## What it's used for
- Modeling success/failure events.
- Building block of the binomial distribution.

## Key properties
- Support \(\{0,1\}\).
- Mean and variance depend only on \(p\).

## Common gotchas
- Coding as \(\{-1,1\}\) changes mean and variance.
- For repeated trials, use the binomial distribution.

## Example
If \(p=0.3\), then \(P(X=1)=0.3\), \(P(X=0)=0.7\).
