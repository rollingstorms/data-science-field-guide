---
id: info.js-divergence
title: Jensen-Shannon Divergence
tags: [information-theory, divergence]
related: [info.kl-divergence, info.cross-entropy]
prereqs: [info.kl-divergence]
---

# Jensen-Shannon Divergence

## Formula
\[
\operatorname{JSD}(P\|Q) = \frac{1}{2} D_{\mathrm{KL}}(P\|M) + \frac{1}{2} D_{\mathrm{KL}}(Q\|M),\quad M=\frac{1}{2}(P+Q)
\]

## Parameters
- \(P,Q\): distributions
- \(M\): mixture distribution

## What it means
A symmetric, smoothed divergence between two distributions.

## Key properties
- Symmetric and finite for discrete distributions
- \(0 \le \operatorname{JSD}(P\|Q) \le \log 2\) (base 2)

## Common gotchas
- JSD is not a true metric unless you take \(\sqrt{\operatorname{JSD}}\).
- Bounds depend on log base.

## See also
- [KL Divergence](../info-theory/kl-divergence.md)
