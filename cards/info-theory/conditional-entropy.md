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
## How to Compute (Pseudocode)
```text
Input: joint probabilities p_xy[x,y], log base b
Output: conditional_entropy H(X|Y)

compute marginals p_y[y] from p_xy

total <- 0
for each pair (x, y):
  if p_xy[x,y] == 0:
    continue
  p_x_given_y <- p_xy[x,y] / p_y[y]
  total <- total - p_xy[x,y] * log_base_b(p_x_given_y)

return total
```

## Complexity
- Time: \(O(k_x k_y)\) for a dense discrete joint table
- Space: \(O(k_y)\) additional space for marginals of \(Y\)
- Assumptions: \(k_x\) and \(k_y\) are support sizes; assumes \(p_y[y] > 0\) whenever \(p_{xy}[x,y] > 0\)

## See also
- [Mutual Information](../info-theory/mutual-information.md)
