---
id: prob.bayes-rule
title: Bayes' Rule
tags: [probability, conditional, inference]
related: [prob.total-probability, prob.conditional-probability]
prereqs: [prob.conditional-probability]
---

# Bayes' Rule

## Formula
\[
P(A\mid B) = \frac{P(B\mid A)\,P(A)}{P(B)}
\]

## Parameters
- \(A,B\): events with \(P(B)>0\)
- \(P(A)\): prior probability
- \(P(B\mid A)\): likelihood
- \(P(A\mid B)\): posterior probability

## What it means
Updates belief about \(A\) after observing \(B\).

## Key properties
- Follows from the product rule: \(P(A,B)=P(A\mid B)P(B)=P(B\mid A)P(A)\)
- Normalization uses \(P(B)\), often computed via total probability

## Common gotchas
- Confusing \(P(A\mid B)\) with \(P(B\mid A)\) (base-rate fallacy).
- Forgetting to ensure \(P(B)>0\).

## See also
- [Law of Total Probability](../probability-stats/total-probability.md)
