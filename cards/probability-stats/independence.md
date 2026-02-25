---
id: prob.independence
title: Independence
tags: [probability, statistics, conditional]
related: [prob.joint-probability, prob.covariance]
prereqs: [prob.joint-probability]
---

# Independence

<div class="formula" markdown="1">
## Formula
\[
A \perp B \iff P(A,B)=P(A)P(B)
\]

\[
X \perp Y \iff p_{X,Y}(x,y)=p_X(x)p_Y(y)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(A,B\): events
- \(X,Y\): random variables
- \(p_{X,Y}\): joint PMF/PDF

</div>
## What it means
Independence means knowing one event/variable does not change probabilities for the other.

## What it's used for
- Simplifying probability calculations.
- Modeling assumptions in statistics and machine learning.

## Key properties
- If \(A\perp B\), then \(P(A\mid B)=P(A)\) (when \(P(B)>0\)).
- Independence implies zero covariance under finite moments, but not vice versa in general.

## Common gotchas
- "Uncorrelated" does not always mean independent.
- Pairwise independence does not imply mutual independence for 3+ variables.

## Example
Two independent fair coin flips: \(A=\) first flip is heads, \(B=\) second flip is heads. Then \(P(A,B)=1/4=(1/2)(1/2)\).

## How to Compute (Pseudocode)
```text
Input: probabilities or data estimates for events/variables A and B
Output: independence check/result

compute/obtain P(A), P(B), and P(A,B)
compare P(A,B) to P(A) * P(B) (within tolerance if estimated numerically)
return whether independence appears to hold under the chosen criterion
```

## Complexity
- Time: \(O(1)\) once the relevant probabilities are available (or data-estimation cost if computed from samples)
- Space: \(O(1)\)
- Assumptions: Exact equality is a theoretical property; empirical checks require estimation error/tolerance handling

## See also
- [Joint Probability](../probability-stats/joint-probability.md)
- [Correlation](../probability-stats/correlation.md)
