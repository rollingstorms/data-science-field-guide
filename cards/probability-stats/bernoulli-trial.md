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

## How to Compute (Pseudocode)
```text
Input: success probability p and number of trials n (or observed binary outcomes)
Output: Bernoulli trial simulation/outcome summary

for i from 1 to n:
  sample X_i in {0,1} with P(X_i=1)=p   # or record observed outcomes
compute summary statistics such as sample proportion if needed
return outcomes (and summaries)
```

## Complexity
- Time: \(O(n)\) for \(n\) simulated/observed trials
- Space: \(O(n)\) to store all outcomes (or \(O(1)\) extra if only accumulating counts)
- Assumptions: Independent Bernoulli-trial workflow shown; exact PMF/probability formulas are separate computations

