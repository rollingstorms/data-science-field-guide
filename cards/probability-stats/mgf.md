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
## See also
- [Characteristic Function](../probability-stats/characteristic-function.md)
