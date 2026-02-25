---
id: info.data-processing-inequality
title: Data Processing Inequality
tags: [information-theory, dependence]
related: [info.mutual-information]
prereqs: [info.mutual-information]
---

# Data Processing Inequality

<div class="formula" markdown="1">
## Formula
\[
X \rightarrow Y \rightarrow Z \quad \Rightarrow \quad I(X;Z) \le I(X;Y)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\to Y\to Z\): Markov chain (\(Z\) depends on \(X\) only through \(Y\))
- \(I(\cdot;\cdot)\): mutual information

</div>
## What it means
Processing data cannot increase the information it contains about the source.



## What it's used for
- Showing that post-processing cannot increase information.
- Proving bounds in pipelines \(X\to Y\to Z\).
## Key properties
- Equality holds if \(Z\) is a sufficient statistic of \(Y\) for \(X\)
- Applies to any (possibly randomized) processing

## Common gotchas
- Requires the Markov condition; arbitrary transformations can violate it.
- "Information" here is mutual information, not entropy.



## Example
If \(Y=X\) and \(Z\) is a constant, then
\(I(X;Z)=0 \le I(X;Y)=H(X)\).
## How to Compute (Pseudocode)
```text
Input: joint model/data for X -> Y -> Z and an estimation/computation method for mutual information
Output: numerical check of the DPI inequality (or symbolic proof setup)

verify/assume the Markov chain condition X -> Y -> Z
compute or estimate I(X;Y)
compute or estimate I(X;Z)
check that I(X;Z) <= I(X;Y)
return the inequality comparison
```

## Complexity
- Time: Depends on how mutual information is computed/estimated (discrete tables, density estimation, or model-based calculations)
- Space: Depends on the representation of the distributions/data and the MI estimator
- Assumptions: This is a verification workflow for the theorem; the theorem statement itself is not an algorithm and exact cost is estimator-dependent

## See also
- [Mutual Information](../info-theory/mutual-information.md)
