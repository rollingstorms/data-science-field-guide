---
id: prob.bernoulli-trial
title: Bernoulli Trial
tags: [probability, statistics, sampling]
related: [prob.bernoulli-distribution, prob.mean]
prereqs: [prob.bernoulli-distribution]
---

# Bernoulli Trial

<div class="formula" markdown="1">
## Formula
\[
X \sim \mathrm{Bernoulli}(p),\quad X\in\{0,1\}
\]

\[
\hat p = \frac{1}{n}\sum_{i=1}^n X_i
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p\): success probability
- \(X_i\): trial outcomes
- \(\hat p\): sample estimate of \(p\)

</div>
## What it means
A single random experiment with two outcomes (success/failure).



## What it's used for
- Modeling binary events.
- Estimating a success probability from samples.

## Key properties
- \(\hat p\) is the sample mean of outcomes.
- Repeated trials lead to a binomial count.

## Common gotchas
- Outcomes must be independent for standard estimators.
- Be explicit about what counts as "success".

## Example
If 3 successes in 10 trials, \(\hat p=0.3\).
