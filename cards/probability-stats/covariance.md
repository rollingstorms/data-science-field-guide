---
id: prob.covariance
title: Covariance
tags: [statistics, dependence]
related: [prob.variance, prob.correlation]
prereqs: [prob.expectation, prob.variance]
---

# Covariance

## Formula
\[
\operatorname{Cov}(X,Y) = \mathbb{E}[(X-\mu_X)(Y-\mu_Y)] = \mathbb{E}[XY] - \mu_X\mu_Y
\]

## Parameters
- \(\mu_X=\mathbb{E}[X]\), \(\mu_Y=\mathbb{E}[Y]\)

## What it means
Measures linear co-variation between two random variables.

## Key properties
- \(\operatorname{Cov}(X,X)=\operatorname{Var}(X)\)
- If \(X\) and \(Y\) are independent, \(\operatorname{Cov}(X,Y)=0\)

## Common gotchas
- Zero covariance does not imply independence (unless jointly Gaussian).
- Units are the product of the units of \(X\) and \(Y\).

## See also
- [Correlation](../probability-stats/correlation.md)
