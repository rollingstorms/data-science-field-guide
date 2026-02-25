---
id: info.joint-entropy
title: Joint Entropy
tags: [information-theory, probability]
related: [info.entropy.shannon, info.conditional-entropy]
prereqs: [info.entropy.shannon]
---

# Joint Entropy

<div class="formula" markdown="1">
## Formula
\[
H(X,Y) = -\sum_{x,y} p(x,y)\,\log p(x,y)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X,Y\): random variables
- \(p(x,y)\): joint distribution

</div>
## What it means
Uncertainty of the pair \((X,Y)\) considered together.



## What it's used for
- Total uncertainty of multiple variables.
- Computing dependence via \(H(X,Y)=H(X)+H(Y)-I(X;Y)\).
## Key properties
- \(H(X,Y) = H(X) + H(Y\mid X)\)
- \(H(X,Y) \le H(X)+H(Y)\) with equality iff independent

## Common gotchas
- Joint entropy is not the same as sum of entropies unless independence holds.
- Continuous case uses differential entropy.



## Example
Two independent fair coins give \(H(X,Y)=2\) bits.
## How to Compute (Pseudocode)
```text
Input: joint probabilities p_xy[x,y], log base b
Output: joint_entropy

total <- 0
for each pair (x, y):
  if p_xy[x,y] == 0:
    continue  // treat 0 * log(0) as 0
  total <- total - p_xy[x,y] * log_base_b(p_xy[x,y])

return total
```

## Complexity
- Time: \(O(k_x k_y)\) for a dense discrete joint table
- Space: \(O(1)\) additional space
- Assumptions: \(k_x\) and \(k_y\) are support sizes; continuous joint entropy uses differential-entropy analogs

## See also
- [Conditional Entropy](../info-theory/conditional-entropy.md)
