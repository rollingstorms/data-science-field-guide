---
id: signal.aliasing
title: Aliasing
tags: [signal-processing, sampling]
related: [signal.sampling-theorem]
prereqs: [signal.sampling-theorem]
---

# Aliasing

<div class="formula" markdown="1">
## Formula
\[
\omega_{\text{alias}} = \omega + 2\pi k\quad (k\in\mathbb{Z})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\omega\): angular frequency
- \(k\): integer shift due to sampling

</div>
## What it means
High-frequency components become indistinguishable from lower frequencies after sampling.



## What it's used for
- Explaining artifacts from undersampling.
- Choosing safe sampling rates.
## Key properties
- Caused by sampling below the Nyquist rate
- Spectra repeat every \(2\pi\) in discrete time

## Common gotchas
- Anti-alias filtering is required before sampling.
- Aliasing can appear even with noisy measurements if bandwidth is not controlled.



## Example
A 9 Hz sine sampled at 10 Hz appears as a 1 Hz sine (alias).
## How to Compute (Pseudocode)
```text
Input: continuous frequency f, sampling rate f_s
Output: aliased frequency observed after sampling (baseband representative)

# Fold frequency into the principal interval around 0 (or [0, f_s/2] by convention)
f_alias <- f modulo f_s
if f_alias > f_s / 2:
  f_alias <- f_s - f_alias

return f_alias
```

## Complexity
- Time: \(O(1)\) for a single frequency alias-mapping calculation
- Space: \(O(1)\)
- Assumptions: Scalar-frequency alias mapping shown; conventions differ for signed frequency, angular frequency, and FFT-bin indexing

## See also
- [Nyquist-Shannon Sampling Theorem](../signal-processing/sampling-theorem.md)
