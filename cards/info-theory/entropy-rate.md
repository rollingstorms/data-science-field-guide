---
id: info.entropy-rate
title: Entropy Rate
tags: [information-theory, stochastic-processes]
related: [info.entropy.shannon]
prereqs: [info.entropy.shannon]
---

# Entropy Rate

## Formula
\[
\bar{H} = \lim_{n\to\infty} \frac{1}{n} H(X_1,\ldots,X_n)
\]

## Parameters
- \(\{X_t\}\): stochastic process
- \(H(X_1,\ldots,X_n)\): joint entropy

## What it means
Average uncertainty per symbol in a long sequence.

## Key properties
- For stationary processes: \(\bar{H} = \lim_{n\to\infty} H(X_n\mid X_1^{n-1})\)
- For i.i.d. processes: \(\bar{H} = H(X_1)\)

## Common gotchas
- The limit may not exist without stationarity/ergodicity.
- Differential entropy rate can be negative.

## See also
- [Shannon Entropy](../info-theory/entropy-shannon.md)
