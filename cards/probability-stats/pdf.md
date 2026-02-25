---
id: prob.pdf
title: PDF (Probability Density Function)
tags: [probability, statistics, distribution, continuous]
related: [prob.pmf, prob.cdf, prob.probability-distribution]
prereqs: [prob.random-variable]
---

# PDF (Probability Density Function)

<div class="formula" markdown="1">
## Formula
\[
P(a \le X \le b)=\int_a^b f_X(x)\,dx
\]

\[
f_X(x)\ge 0,\quad \int_{-\infty}^{\infty} f_X(x)\,dx=1
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): continuous random variable
- \(f_X(x)\): density at value \(x\)

</div>
## What it means
A PDF describes how probability is distributed over a continuous variable. Probabilities come from area under the curve, not point values.

## What it's used for
- Computing interval probabilities by integration.
- Defining continuous models such as the Normal distribution.

## Key properties
- Probabilities are areas under \(f_X(x)\).
- \(P(X=x)=0\) for continuous \(X\) (under standard continuous models).

## Common gotchas
- \(f_X(x)\) can be greater than 1; that is still valid if total area is 1.
- The PDF itself is not a probability at a point.

## Example
If \(X\sim \mathrm{Uniform}(0,1)\), then \(f_X(x)=1\) on \([0,1]\), so \(P(0.2\le X\le 0.5)=0.3\).

## How to Compute (Pseudocode)
```text
Input: distribution specification and query value(s)
Output: PDF values (or probabilities from it)

for each query value/interval:
  evaluate the distribution rule for the card's representation
  (PMF: point probability, PDF: density, CDF: cumulative probability)
return the computed value(s)
```

## Complexity
- Time: Depends on the distribution family and number of queries (often \(O(q)\) for \(q\) query points once parameters are known)
- Space: \(O(q)\) for returned values (or \(O(1)\) for a single query)
- Assumptions: Parameter-estimation cost is excluded; exact formulas and numerical methods vary by distribution family

## See also
- [PMF (Probability Mass Function)](../probability-stats/pmf.md)
- [CDF (Cumulative Distribution Function)](../probability-stats/cdf.md)
