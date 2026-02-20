---
id: info.fisher-information
title: Fisher Information
tags: [information-theory, statistics]
related: [prob.expectation, prob.variance]
prereqs: [prob.expectation]
---

# Fisher Information

## Formula
\[
\mathcal{I}(\theta) = \mathbb{E}\left[\left(\frac{\partial}{\partial\theta} \log p(X;\theta)\right)^2\right]
\]

## Parameters
- \(\theta\): parameter
- \(p(X;\theta)\): likelihood
- Expectation is over \(X\sim p(\cdot;\theta)\)

## What it means
Measures how sensitive the likelihood is to changes in \(\theta\).

## Key properties
- \(\mathcal{I}(\theta) = -\mathbb{E}[\partial^2_{\theta} \log p(X;\theta)]\) under regularity
- Cramer-Rao: \(\operatorname{Var}(\hat\theta) \ge 1/\mathcal{I}(\theta)\)

## Common gotchas
- Regularity conditions are required for the second-derivative form.
- For vector \(\theta\), Fisher information is a matrix.

## See also
- [Expectation](../probability-stats/expectation.md)
