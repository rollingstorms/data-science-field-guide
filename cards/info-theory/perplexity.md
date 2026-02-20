---
id: info.perplexity
title: Perplexity
tags: [information-theory, ml]
related: [info.cross-entropy, info.entropy.shannon]
prereqs: [info.cross-entropy]
---

# Perplexity

## Formula
\[
\operatorname{PP}(P,Q) = \exp\big(H(P,Q)\big)
\]

## Parameters
- \(H(P,Q)\): cross-entropy
- \(\exp\): exponential (use \(2^{H}\) if log base is 2)

## What it means
Effective number of equally likely choices under the model \(Q\).

## Key properties
- Lower perplexity means better predictive performance
- \(\operatorname{PP} = e^{H}\) (nats) or \(2^{H}\) (bits)

## Common gotchas
- Perplexity values depend on the log base and tokenization.
- Not comparable across datasets with different vocabularies.

## See also
- [Cross Entropy](../info-theory/cross-entropy.md)
