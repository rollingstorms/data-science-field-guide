---
id: info.kl-divergence
title: KL Divergence (Relative Entropy)
tags: [information-theory, probability, optimization]
related: [info.cross-entropy, ml.log-loss]
prereqs: [info.entropy.shannon]
---

# KL Divergence (Relative Entropy)

## Formula
\[
D_{\mathrm{KL}}(P\|Q) = \sum_x p(x)\,\log\frac{p(x)}{q(x)}
\]

\[
D_{\mathrm{KL}}(P\|Q) = \int p(x)\,\log\frac{p(x)}{q(x)}\,dx
\]

## Parameters
- \(P\): true distribution (often “data”)
- \(Q\): approximate / model distribution
- Top equation: discrete case
- Bottom equation: continuous case

## What it means
“How many extra nats/bits” you spend coding samples from \(P\) using a code optimized for \(Q\).

## Key properties
- \(D_{\mathrm{KL}}(P\|Q) \ge 0\) (equals 0 iff \(P=Q\) a.e.)
- Not symmetric: \(D_{\mathrm{KL}}(P\|Q) \ne D_{\mathrm{KL}}(Q\|P)\)
- Not a metric (no triangle inequality)
- Relation to cross-entropy:
  \[
  H(P,Q) = H(P) + D_{\mathrm{KL}}(P\|Q)
  \]

## Common gotchas
- If \(q(x)=0\) where \(p(x)>0\), KL is infinite.
- Requires matching support between \(P\) and \(Q\).
