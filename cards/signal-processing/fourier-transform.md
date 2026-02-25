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
## How to Compute (Pseudocode)
```text
Input: signal x(t), frequency grid w[1..K]
Output: approximate transform values X[w_j]

for each frequency w_j in the grid:
  approximate X[w_j] <- integral of x(t) * exp(-i * w_j * t) over t
  # in practice: truncate the time range and use numerical quadrature or sampled approximations

return sampled transform values
```

## Complexity
- Time: Depends on the numerical method and discretization (for example, direct quadrature over \(K\) frequencies and \(T\) time samples is often \(O(KT)\))
- Space: Depends on discretization; typically at least \(O(K)\) for the sampled output
- Assumptions: Continuous Fourier transforms are usually computed numerically on truncated/sampled domains; exact symbolic transforms are a different workflow

## See also
- [Convolution](../signal-processing/convolution.md)
