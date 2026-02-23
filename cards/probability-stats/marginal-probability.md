---
id: prob.marginal-probability
title: Marginal Probability
tags: [probability, statistics, joint]
related: [prob.joint-probability, prob.conditional-probability]
prereqs: [prob.joint-probability]
---

# Marginal Probability

<div class="formula" markdown="1">
## Formula
\[
P(A)=\sum_b P(A,b) \quad \text{(discrete)}
\]

\[
f_X(x)=\int f_{X,Y}(x,y)\,dy \quad \text{(continuous)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(P(A,b)\): joint probability over \(A\) and values/events \(b\)
- \(f_{X,Y}\): joint density
- \(f_X\): marginal density of \(X\)

</div>
## What it means
A marginal probability is the probability of one variable/event after summing or integrating out the others.

## What it's used for
- Reducing joint distributions to single-variable distributions.
- Computing denominators in conditional probabilities and Bayes' rule.

## Key properties
- Marginalization preserves total probability.
- Sometimes called "summing out" a variable.

## Common gotchas
- Do not confuse marginalization with conditioning.
- In continuous cases, use integration, not summation.

## Example
If \(P(X=1,Y=0)=0.2\) and \(P(X=1,Y=1)=0.3\), then \(P(X=1)=0.5\).

## See also
- [Joint Probability](../probability-stats/joint-probability.md)
- [Law of Total Probability](../probability-stats/total-probability.md)
