---
id: info.entropy.shannon
title: Shannon Entropy
tags: [information-theory, probability]
related: [info.cross-entropy, info.kl-divergence, ml.perplexity]
prereqs: [prob.probability-mass-function]
---

# Shannon Entropy

<div class="formula" markdown="1">
## Formula
\[
H(X) = -\sum_{x} p(x)\,\log p(x)
\]

</div>
## Plot
```plot
fn: -(x*log(x)+(1-x)*log(1-x))/log(2)
xmin: 0.001
xmax: 0.999
ymin: 0
ymax: 1.05
height: 280
title: Binary entropy H(p)
```

<div class="parameters" markdown="1">
## Parameters
- \(p(x)\): probability of outcome \(x\)
- log base 2 → bits; base \(e\) → nats

</div>
## What it means
Expected uncertainty (“average surprise”) of outcomes of \(X\).



## What it's used for
- Measuring uncertainty and minimum coding length.
- Comparing randomness of distributions.
## Key properties
- \(0 \le H(X) \le \log |\mathcal{X}|\) for finite \(\mathcal{X}\)
- Maximized by uniform distribution
- \(H(X)=0\) if \(X\) is deterministic

## Common gotchas
- Don’t mix log bases when comparing numeric values.
- Continuous version is **differential entropy** (behaves differently).

## Example
For a fair coin \(p=[0.5,0.5]\), \(H=1\) bit (log base 2).

## How to Compute (Pseudocode)
```text
Input: discrete probabilities p[1..k], log base b
Output: entropy

total <- 0
for i from 1 to k:
  if p[i] == 0:
    continue  // treat 0 * log(0) as 0
  total <- total - p[i] * log_base_b(p[i])

return total
```

## Complexity
- Time: \(O(k)\) for the discrete sum
- Space: \(O(1)\) additional space
- Assumptions: \(k\) is the number of possible outcomes in the discrete support

