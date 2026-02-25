---
id: info.cross-entropy
title: Cross Entropy
tags: [information-theory, probability, ml]
related: [info.entropy.shannon, info.kl-divergence, ml.log-loss]
prereqs: [info.entropy.shannon]
---

# Cross Entropy

<div class="formula" markdown="1">
## Formula
\[
H(P,Q) = -\sum_x p(x)\,\log q(x)
\]

\[
H(P,Q) = -\int p(x)\,\log q(x)\,dx
\]

</div>
## Plot
```plot
fn: -(0.7*log(x)+0.3*log(1-x))/log(2)
xmin: 0.001
xmax: 0.999
ymin: 0
ymax: 8
height: 280
title: Bernoulli cross-entropy H(P,Q) with P(1)=0.7 (bits)
```

<div class="parameters" markdown="1">
## Parameters
- \(P\): true/data distribution
- \(Q\): model/approximation distribution
- Top equation: discrete case
- Bottom equation: continuous case

</div>

## What it means
Expected code length when encoding samples from \(P\) using a code optimized for \(Q\).



## What it's used for
- Loss for probabilistic classifiers (log-loss).
- Measuring mismatch between true and model distributions.
## Key properties
- Relation to KL: \(H(P,Q) = H(P) + D_{\mathrm{KL}}(P\|Q)\)
- Minimized when \(Q=P\)
- Depends on choice of log base (bits vs nats)

## Common gotchas
- If \(q(x)=0\) where \(p(x)>0\), cross-entropy is infinite.
- In ML, "log loss" is cross-entropy up to a sign.



## Example
If \(p=[1,0]\) and \(q=[0.8,0.2]\),
\(H(p,q)=-\log 0.8\).

## How to Compute (Pseudocode)
```text
Input: discrete probabilities p[1..k], q[1..k], log base b
Output: cross_entropy

total <- 0
for i from 1 to k:
  total <- total - p[i] * log_base_b(q[i])

return total
```

## Complexity
- Time: \(O(k)\) for the discrete sum
- Space: \(O(1)\) additional space
- Assumptions: \(k\) is the number of outcomes in the discrete support; continuous cross-entropy is computed via integration/approximation instead

## See also
- [KL Divergence](../info-theory/kl-divergence.md)
- [Shannon Entropy](../info-theory/entropy-shannon.md)
