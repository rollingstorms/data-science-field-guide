---
id: info.perplexity
title: Perplexity
tags: [information-theory, ml]
related: [info.cross-entropy, info.entropy.shannon]
prereqs: [info.cross-entropy]
---

# Perplexity

<div class="formula" markdown="1">
## Formula
\[
\operatorname{PP}(P,Q) = \exp\big(H(P,Q)\big)
\]

</div>
## Plot
```plot
fn: exp((-(x*log(x)+(1-x)*log(1-x)))*1)
xmin: 0.001
xmax: 0.999
ymin: 1
ymax: 2.1
height: 280
title: exp(H) for binary entropy (natural-log convention)
```

<div class="parameters" markdown="1">
## Parameters
- \(H(P,Q)\): cross-entropy
- \(\exp\): exponential (use \(2^{H}\) if log base is 2)

</div>
## What it means
Effective number of equally likely choices under the model \(Q\).



## What it's used for
- Evaluating language models (lower is better).
- Interpreting average branching factor of a model.
## Key properties
- Lower perplexity means better predictive performance
- \(\operatorname{PP} = e^{H}\) (nats) or \(2^{H}\) (bits)

## Common gotchas
- Perplexity values depend on the log base and tokenization.
- Not comparable across datasets with different vocabularies.



## Example
If average cross-entropy is \(H=2\) bits, perplexity is
\(2^2=4\).
## How to Compute (Pseudocode)
```text
Input: cross-entropy H and log base convention
Output: perplexity

if H is measured in nats:
  return exp(H)
if H is measured in bits:
  return 2^H
```

## Complexity
- Time: \(O(1)\) once cross-entropy is known
- Space: \(O(1)\)
- Assumptions: The cost of computing cross-entropy itself is excluded; for a discrete support of size \(k\), that step is typically \(O(k)\)

## See also
- [Cross Entropy](../info-theory/cross-entropy.md)
