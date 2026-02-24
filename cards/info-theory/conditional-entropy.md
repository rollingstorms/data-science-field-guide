---
id: info.conditional-entropy
title: Conditional Entropy
tags: [information-theory, probability]
related: [info.entropy.shannon, info.mutual-information]
prereqs: [info.entropy.shannon]
---

# Conditional Entropy

<div class="formula" markdown="1">
## Formula
\[
H(X\mid Y) = -\sum_{x,y} p(x,y)\,\log p(x\mid y)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X,Y\): random variables
- \(p(x\mid y)\): conditional distribution

</div>
## What it means
Remaining uncertainty about \(X\) after observing \(Y\).



## What it's used for
- Quantifying remaining uncertainty in \(X\) after observing \(Y\).
- Feature selection and information gain calculations.
## Key properties
- \(H(X\mid Y) = H(X,Y) - H(Y)\)
- \(H(X\mid Y) \le H(X)\)

## Common gotchas
- Conditioning reduces entropy on average, but not necessarily for each \(y\).
- For continuous variables, use differential entropy.



## Example
If \(Y=X\), then \(H(X\mid Y)=0\).
## See also
- [Mutual Information](../info-theory/mutual-information.md)
