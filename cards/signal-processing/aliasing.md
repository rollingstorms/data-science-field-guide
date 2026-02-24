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
## See also
- [Nyquist-Shannon Sampling Theorem](../signal-processing/sampling-theorem.md)
