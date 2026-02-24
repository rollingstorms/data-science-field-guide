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
## See also
- [Cross Entropy](../info-theory/cross-entropy.md)
