---
id: prob.probability-distribution
title: Probability Distribution
tags: [probability, statistics, distribution]
related: [prob.pmf, prob.pdf, prob.cdf]
prereqs: [prob.random-variable]
---

# Probability Distribution

<div class="formula" markdown="1">
## Formula
\[
\text{Distribution of }X \text{ is the rule that gives } P(X \in A)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(A\): event/set of values

</div>
## What it means
A distribution specifies how probability mass or density is assigned across the possible values of a random variable.

## What it's used for
- Computing probabilities and expectations.
- Choosing statistical models (e.g., Bernoulli, Normal, Poisson).

## Key properties
- Discrete distributions use a PMF.
- Continuous distributions use a PDF (plus integration).
- The CDF works for both discrete and continuous cases.

## Common gotchas
- A PDF value is not itself a probability.
- The same family (e.g., Normal) can represent many distributions with different parameters.

## Example
For a fair die roll \(X\in\{1,\dots,6\}\), the distribution is \(P(X=k)=1/6\) for each \(k\).

## See also
- [PMF (Probability Mass Function)](../probability-stats/pmf.md)
- [PDF (Probability Density Function)](../probability-stats/pdf.md)
- [CDF (Cumulative Distribution Function)](../probability-stats/cdf.md)
