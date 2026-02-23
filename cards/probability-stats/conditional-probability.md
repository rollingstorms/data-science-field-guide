---
id: prob.conditional-probability
title: Conditional Probability
tags: [probability, statistics, conditional]
related: [prob.joint-probability, prob.bayes-rule]
prereqs: []
---

# Conditional Probability

<div class="formula" markdown="1">
## Formula
\[
P(A\mid B)=\frac{P(A,B)}{P(B)} \quad \text{for } P(B)>0
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A,B\): events
- \(P(A\mid B)\): probability of \(A\) after restricting to cases where \(B\) occurred

</div>
## What it means
Conditional probability updates probabilities when you already know some event \(B\) happened.

## What it's used for
- Reasoning with evidence.
- Factorizing joint probabilities.

## Key properties
- Product rule: \(P(A,B)=P(A\mid B)P(B)\).
- If \(A\perp B\), then \(P(A\mid B)=P(A)\).

## Common gotchas
- Conditioning on rare events can dramatically change probabilities.
- \(P(A\mid B)\) and \(P(B\mid A)\) are usually not equal.

## Example
From a deck, let \(A=\) "card is a king", \(B=\) "card is a face card." Then \(P(A\mid B)=4/12=1/3\).

## See also
- [Bayes' Rule](../probability-stats/bayes-rule.md)
- [Joint Probability](../probability-stats/joint-probability.md)
