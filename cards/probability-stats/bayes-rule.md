---
id: prob.bayes-rule
title: Bayes' Rule
tags: [probability, conditional, inference]
related: [prob.total-probability, prob.conditional-probability]
prereqs: [prob.conditional-probability]
---

# Bayes' Rule

<div class="formula" markdown="1">
## Formula
\[
P(A\mid B) = \frac{P(B\mid A)\,P(A)}{P(B)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A,B\): events with \(P(B)>0\)
- \(P(A)\): prior probability
- \(P(B\mid A)\): likelihood
- \(P(A\mid B)\): posterior probability

</div>
## What it means
Updates belief about \(A\) after observing \(B\).



## What it's used for
- Updating beliefs with evidence.
- Interpreting diagnostic tests.
## Key properties
- Follows from the product rule: \(P(A,B)=P(A\mid B)P(B)=P(B\mid A)P(A)\)
- Normalization uses \(P(B)\), often computed via total probability

## Common gotchas
- Confusing \(P(A\mid B)\) with \(P(B\mid A)\) (base-rate fallacy).
- Forgetting to ensure \(P(B)>0\).



## Example
If \(P(D)=0.01\), \(P(+\mid D)=0.99\), \(P(+\mid
eg D)=0.05\),
then \(P(D\mid +)=0.0099/(0.0099+0.0495)pprox0.167\).
## See also
- [Law of Total Probability](../probability-stats/total-probability.md)
