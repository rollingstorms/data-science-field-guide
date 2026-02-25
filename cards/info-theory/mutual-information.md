---
id: info.mutual-information
title: Mutual Information
tags: [information-theory, probability, dependence]
related: [info.entropy.shannon, info.conditional-entropy, info.kl-divergence]
prereqs: [info.entropy.shannon]
---

# Mutual Information

<div class="formula" markdown="1">
## Formula
\[
I(X;Y) = \sum_{x,y} p(x,y)\,\log\frac{p(x,y)}{p(x)\,p(y)}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X,Y\): random variables
- \(p(x,y)\): joint distribution
- \(p(x), p(y)\): marginals

</div>
## What it means
How much knowing \(X\) reduces uncertainty about \(Y\) (and vice versa).



## What it's used for
- Measuring dependence between variables.
- Feature selection and representation learning.
## Key properties
- \(I(X;Y) \ge 0\), equality iff \(X\) and \(Y\) are independent
- Symmetric: \(I(X;Y)=I(Y;X)\)
- Relation to entropy: \(I(X;Y)=H(X)-H(X\mid Y)\)

## Common gotchas
- Estimating MI from finite samples is biased and nontrivial.
- For continuous variables, MI uses densities and integrals.



## Example
If \(Y=X\) and \(X\) is a fair bit, then \(I(X;Y)=1\) bit.
## How to Compute (Pseudocode)
```text
Input: joint probabilities p_xy[x,y], log base b
Output: mutual_information

compute marginals p_x[x] and p_y[y] from p_xy

total <- 0
for each pair (x, y):
  if p_xy[x,y] == 0:
    continue
  total <- total + p_xy[x,y] * log_base_b( p_xy[x,y] / (p_x[x] * p_y[y]) )

return total
```

## Complexity
- Time: \(O(k_x k_y)\) for a dense discrete joint table
- Space: \(O(k_x + k_y)\) additional space for marginals (excluding the joint table)
- Assumptions: \(k_x\) and \(k_y\) are support sizes of \(X\) and \(Y\); continuous MI uses density estimation/integration instead

## See also
- [Shannon Entropy](../info-theory/entropy-shannon.md)
- [KL Divergence](../info-theory/kl-divergence.md)
