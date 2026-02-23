---
id: prob.multinomial-distribution
title: Multinomial Distribution
tags: [probability, statistics, distribution, discrete]
related: [prob.binomial-distribution, dl.softmax]
prereqs: [prob.binomial-distribution]
---

# Multinomial Distribution

<div class="formula" markdown="1">
## Formula
\[
P(X_1=x_1,\dots,X_K=x_K)=
\frac{n!}{x_1!\cdots x_K!}\prod_{i=1}^K p_i^{x_i}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(n\): number of trials
- \(K\): number of categories
- \(p_i\): category probabilities, \(\sum_i p_i=1\)
- \(x_i\): counts, \(\sum_i x_i=n\)

</div>
## What it means
Generalizes the binomial distribution to counts across more than two categories.

## What it's used for
- Class count models and categorical outcomes.
- Bag-of-words and count-vector modeling.

## Key properties
- Binomial is the \(K=2\) special case.
- Count vector sums to \(n\).

## Common gotchas
- Counts are dependent because they must sum to \(n\).
- Parameter vector \(p\) must sum exactly to 1.

## Example
Rolling a die \(n\) times yields a 6-category count vector modeled by a multinomial distribution.

## See also
- [Binomial Distribution](../probability-stats/binomial-distribution.md)
- [Softmax](../activations/softmax.md)
