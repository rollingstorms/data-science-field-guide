---
id: info.entropy-rate
title: Entropy Rate
tags: [information-theory, stochastic-processes]
related: [info.entropy.shannon]
prereqs: [info.entropy.shannon]
---

# Entropy Rate

<div class="formula" markdown="1">
## Formula
\[
\bar{H} = \lim_{n\to\infty} \frac{1}{n} H(X_1,\ldots,X_n)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\{X_t\}\): stochastic process
- \(H(X_1,\ldots,X_n)\): joint entropy

</div>
## What it means
Average uncertainty per symbol in a long sequence.



## What it's used for
- Per-symbol uncertainty in stochastic processes.
- Comparing compression limits of sources over time.
## Key properties
- For stationary processes: \(\bar{H} = \lim_{n\to\infty} H(X_n\mid X_1^{n-1})\)
- For i.i.d. processes: \(\bar{H} = H(X_1)\)

## Common gotchas
- The limit may not exist without stationarity/ergodicity.
- Differential entropy rate can be negative.



## Example
For IID Bernoulli(\(p\)), the entropy rate is
\(H_\infty = H(p)\).
## How to Compute (Pseudocode)
```text
Input: stochastic process model or sequence data, block size n
Output: entropy-rate estimate

# Common practical route: estimate using conditional entropy of finite context
estimate H(X_n | X_1, ..., X_{n-1}) from the model/data
increase n until the estimate stabilizes (if feasible)
return stabilized value as an entropy-rate estimate
```

## Complexity
- Time: Depends on the process model and estimation method (counting-, model-, and compression-based estimators have different costs)
- Space: Depends on the estimator and state/context representation
- Assumptions: Entropy rate is often estimated from finite-order approximations on finite data; asymptotic limits are a theoretical definition

## See also
- [Shannon Entropy](../info-theory/entropy-shannon.md)
