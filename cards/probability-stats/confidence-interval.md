---
id: stat.confidence-interval
title: Confidence Interval
tags: [statistics, inference]
related: [stat.p-value, prob.z-score]
prereqs: [prob.normal-distribution]
---

# Confidence Interval

<div class="formula" markdown="1">
## Formula
\[
\hat{\theta}\ \pm\ z_{\alpha/2}\,\mathrm{SE}(\hat{\theta})
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\hat{\theta}\): estimator
- \(\mathrm{SE}(\hat{\theta})\): standard error
- \(z_{\alpha/2}\): critical value for target confidence level (normal approximation)

</div>
## What it means
A confidence interval is a data-derived range produced by a procedure that captures the true parameter with a stated long-run frequency.

## What it's used for
- Quantifying estimator uncertainty.
- Reporting effect sizes with uncertainty, not just point estimates.

## Key properties
- Interpretation is about the procedure, not the realized interval containing a random parameter.
- Width depends on variance, sample size, and confidence level.

## Common gotchas
- A 95% CI does not mean "95% probability the parameter is in this specific interval" (frequentist meaning).
- Approximation formulas may fail in small samples or non-normal settings.

## Example
Estimate a mean and report \(\hat\mu \pm 1.96\cdot \mathrm{SE}(\hat\mu)\) for an approximate 95% CI.

## How to Compute (Pseudocode)
```text
Input: estimator theta_hat, standard error estimate SE(theta_hat), confidence level, critical-value method
Output: confidence interval

compute the critical value for the chosen confidence level/test distribution
compute margin <- critical_value * SE(theta_hat)
return [theta_hat - margin, theta_hat + margin]   # or a one-sided variant
```

## Complexity
- Time: \(O(1)\) once the estimator and standard error are available
- Space: \(O(1)\)
- Assumptions: The dominant cost is usually estimating \(\hat\theta\) and \(SE(\hat\theta)\), not the interval arithmetic itself

## See also
- [P-Value](../probability-stats/p-value.md)
- [Z-Score](../probability-stats/z-score.md)
