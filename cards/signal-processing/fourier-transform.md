---
id: signal.fourier-transform
title: Fourier Transform
tags: [signal-processing, frequency]
related: [signal.convolution, signal.dft]
prereqs: [signal.integral]
---

# Fourier Transform

<div class="formula" markdown="1">
## Formula
\[
X(\omega) = \int_{-\infty}^{\infty} x(t)\,e^{-i\omega t}\,dt
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x(t)\): time-domain signal
- \(X(\omega)\): frequency-domain representation

</div>
## What it means
Decomposes a signal into its frequency components.



## What it's used for
- Analyzing continuous-time signals by frequency.
- Solving linear differential equations.
## Key properties
- Inverse transform reconstructs \(x(t)\)
- Convolution in time becomes multiplication in frequency

## Common gotchas
- Different sign and \(2\pi\) conventions exist.
- Requires integrability or distributional interpretation.



## Example
The Fourier transform of \(\cos(2\pi f_0 t)\) is two impulses at
\(\pm f_0\).
## See also
- [Convolution](../signal-processing/convolution.md)
