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
## See also
- [Moment Generating Function](../probability-stats/mgf.md)
