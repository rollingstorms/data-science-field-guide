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
## See also
- [Aliasing](../signal-processing/aliasing.md)
