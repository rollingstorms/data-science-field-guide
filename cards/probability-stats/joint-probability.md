---
id: prob.joint-probability
title: Joint Probability
tags: [probability, statistics, joint]
related: [prob.independence, prob.marginal-probability]
prereqs: []
---

# Joint Probability

<div class="formula" markdown="1">
## Formula
\[
P(A\cap B)=P(A,B)
\]

\[
P(A,B)=P(A\mid B)P(B)=P(B\mid A)P(A)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A,B\): events (or random variables/events derived from them)
- \(P(A,B)\): probability both occur

</div>
## What it means
Joint probability is the probability of two events happening together. This is the "prob times prob" idea, but exact multiplication requires conditional probability or independence.

## What it's used for
- Building multivariate distributions.
- Deriving Bayes' rule, marginals, and conditional probabilities.

## Key properties
- Symmetric: \(P(A,B)=P(B,A)\).
- Not generally equal to \(P(A)P(B)\) unless \(A\) and \(B\) are independent.

## Common gotchas
- Multiplying marginals directly is only valid under independence.
- \(P(A,B)\) and \(P(A\mid B)\) are different objects.

## Example
If \(P(A)=0.4\) and \(P(B\mid A)=0.5\), then \(P(A,B)=0.5\cdot 0.4=0.2\).

## See also
- [Independence](../probability-stats/independence.md)
- [Bayes' Rule](../probability-stats/bayes-rule.md)
