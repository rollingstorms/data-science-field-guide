---
id: prob.characteristic-function
title: Characteristic Function
tags: [probability, distributions]
related: [prob.mgf]
prereqs: [prob.expectation]
---

# Characteristic Function

<div class="formula" markdown="1">
## Formula
\[
\varphi_X(t) = \mathbb{E}[e^{itX}]
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(t\): real parameter
- \(i=\sqrt{-1}\)

</div>
## What it means
Fourier transform of the probability distribution of \(X\).



## What it's used for
- Uniquely identifying distributions.
- Proving convergence in distribution.
## Key properties
- Always exists
- Determines the distribution uniquely

## Common gotchas
- Don't confuse with MGF; \(i\) makes it bounded.
- Inversion formulas require regularity conditions.



## Example
If \(X\) is Bernoulli(0.5), then
\(arphi_X(t)=0.5(1+e^{it})\).
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
- [Moment Generating Function](../probability-stats/mgf.md)
