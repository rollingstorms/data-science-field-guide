---
id: signal.sampling-theorem
title: Nyquist-Shannon Sampling Theorem
tags: [signal-processing, sampling]
related: [signal.aliasing]
prereqs: [signal.fourier-transform]
---

# Nyquist-Shannon Sampling Theorem

<div class="formula" markdown="1">
## Formula
\[
\text{If } f_s \ge 2B,\quad x(t)=\sum_{n=-\infty}^{\infty} x(nT)\,\operatorname{sinc}\left(\frac{t-nT}{T}\right)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(B\): signal bandwidth (Hz)
- \(f_s=1/T\): sampling frequency

</div>
## What it means
Bandlimited signals can be perfectly reconstructed from uniform samples.



## What it's used for
- Choosing sampling rates for bandlimited signals.
- Preventing aliasing in data acquisition.
## Key properties
- Nyquist rate is \(2B\)
- Reconstruction uses sinc interpolation

## Common gotchas
- Bandlimiting is an assumption; practical signals need anti-alias filters.
- Sampling below Nyquist causes irreversible aliasing.



## Example
If a signal is bandlimited to 3 kHz, any
\(f_s>6\) kHz (e.g., 8 kHz) is sufficient.
## How to Compute (Pseudocode)
```text
Input: estimated signal bandwidth B, candidate sampling rate f_s
Output: sampling-rate check (and reconstruction workflow note)

nyquist_rate <- 2 * B
if f_s >= nyquist_rate:
  report "sampling theorem condition satisfied (ideal bandlimited case)"
else:
  report "aliasing risk: below Nyquist rate"

# Practical workflow note:
# apply anti-alias filtering before sampling; ideal reconstruction uses sinc interpolation
```

## Complexity
- Time: \(O(1)\) for the Nyquist-rate check itself
- Space: \(O(1)\)
- Assumptions: This is a design/check workflow for the theorem condition; practical reconstruction/filtering cost depends on the implementation and signal length

## See also
- [Aliasing](../signal-processing/aliasing.md)
