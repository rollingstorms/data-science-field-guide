---
id: info.fisher-information
title: Fisher Information
tags: [information-theory, statistics]
related: [prob.expectation, prob.variance]
prereqs: [prob.expectation]
---

# Fisher Information

<div class="formula" markdown="1">
## Formula
\[
\mathcal{I}(\theta) = \mathbb{E}\left[\left(\frac{\partial}{\partial\theta} \log p(X;\theta)\right)^2\right]
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\theta\): parameter
- \(p(X;\theta)\): likelihood
- Expectation is over \(X\sim p(\cdot;\theta)\)

</div>
## What it means
Measures how sensitive the likelihood is to changes in \(\theta\).



## What it's used for
- Lower-bounding estimator variance (Cramer-Rao).
- Sensitivity of likelihood to parameter changes.
## Key properties
- \(\mathcal{I}(\theta) = -\mathbb{E}[\partial^2_{\theta} \log p(X;\theta)]\) under regularity
- Cramer-Rao: \(\operatorname{Var}(\hat\theta) \ge 1/\mathcal{I}(\theta)\)

## Common gotchas
- Regularity conditions are required for the second-derivative form.
- For vector \(\theta\), Fisher information is a matrix.



## Example
For \(X\sim\mathcal{N}(\mu,\sigma^2)\) with known \(\sigma\),
\(I(\mu)=1/\sigma^2\).
## See also
- [Expectation](../probability-stats/expectation.md)
