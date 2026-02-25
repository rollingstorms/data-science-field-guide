---
id: prob.mgf
title: Moment Generating Function
tags: [probability, distributions]
related: [prob.characteristic-function]
prereqs: [prob.expectation]
---

# Moment Generating Function

<div class="formula" markdown="1">
## Formula
\[
M_X(t) = \mathbb{E}[e^{tX}]
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(t\): real parameter
- \(X\): random variable

</div>
## What it means
Encodes all moments of \(X\) (when it exists) via derivatives at \(t=0\).



## What it's used for
- Computing moments and sums of independent variables.
- Proving distributional convergence.
## Key properties
- \(M_X^{(k)}(0)=\mathbb{E}[X^k]\)
- If it exists in a neighborhood of 0, it uniquely determines the distribution

## Common gotchas
- MGF may not exist for heavy-tailed distributions.
- Use characteristic function when MGF diverges.



## Example
For \(X\sim\mathrm{Bernoulli}(p)\),
\(M_X(t)=(1-p)+p e^t\).
## How to Compute (Pseudocode)
```text
Input: quantities required by the card formula (distribution parameters, samples, or test setup)
Output: card-specific statistic/probability/result

compute any required summary quantities from data or model parameters
apply the card formula or workflow
return the resulting value(s)
```

## Complexity
- Time: Depends on whether the card is applied analytically, numerically, or from sample data (common sample-statistic workflows are often linear in sample size)
- Space: Depends on whether summaries are streamed or full samples/tables are materialized
- Assumptions: Exact runtime/memory is method-dependent and driven by the chosen estimator/test/distribution representation

## See also
- [Characteristic Function](../probability-stats/characteristic-function.md)
