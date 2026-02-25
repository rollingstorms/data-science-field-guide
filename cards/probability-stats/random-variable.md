---
id: prob.random-variable
title: Random Variable
tags: [probability, statistics, random-variable]
related: [prob.probability-distribution, prob.cdf]
prereqs: []
---

# Random Variable

<div class="formula" markdown="1">
## Formula
\[
X:\Omega \to \mathbb{R}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\Omega\): sample space (all outcomes)
- \(X\): function assigning a numeric value to each outcome

</div>
## What it means
A random variable converts outcomes of a random experiment into numbers so we can compute probabilities, averages, and other statistics.

## What it's used for
- Defining distributions, expectations, and variances.
- Modeling numeric uncertainty from experiments or data.

## Key properties
- Can be discrete, continuous, or mixed.
- Probability statements like \(P(X \le x)\) are defined from the underlying experiment.

## Common gotchas
- A random variable is a function, not "the outcome itself."
- Different random variables can be defined on the same sample space.

## Example
If \(\Omega=\{\text{HH},\text{HT},\text{TH},\text{TT}\}\) for two coin flips, let \(X\) be the number of heads. Then \(X(\text{HT})=1\), \(X(\text{HH})=2\).

## How to Compute (Pseudocode)
```text
Input: sample space outcomes and a numeric mapping rule X
Output: random-variable values X(omega)

for each outcome omega in the sample space representation:
  assign X(omega) according to the modeling rule
return the random variable mapping (or sampled values under that mapping)
```

## Complexity
- Time: Depends on how outcomes are represented and whether you are defining the mapping symbolically or evaluating it on sampled outcomes
- Space: Depends on whether the mapping is symbolic or materialized over many outcomes/samples
- Assumptions: Conceptual definition card; practical computation usually happens via sampled data or a known distribution model

## See also
- [Probability Distribution](../probability-stats/probability-distribution.md)
- [CDF (Cumulative Distribution Function)](../probability-stats/cdf.md)
