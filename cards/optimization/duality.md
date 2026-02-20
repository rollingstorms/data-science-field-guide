---
id: opt.duality
title: Lagrangian Duality
tags: [optimization, convex-analysis]
related: [opt.lagrangian, opt.kkt-conditions]
prereqs: [opt.lagrangian]
---

# Lagrangian Duality

## Formula
\[
\max_{\lambda\ge 0,\,\nu}\; \phi(\lambda,\nu) \quad \text{where}\quad \phi(\lambda,\nu)=\inf_x \mathcal{L}(x,\lambda,\nu)
\]

## Parameters
- \(\mathcal{L}\): Lagrangian
- \(\phi\): dual function

## What it means
Transforms a constrained primal problem into a (often easier) dual problem.

## Key properties
- Weak duality: dual value \(\le\) primal value
- Strong duality holds under Slater's condition for convex problems

## Common gotchas
- Dual optimum can be strictly less than primal in nonconvex settings.
- Dual variables correspond to constraints, not data.

## See also
- [Lagrangian](../optimization/lagrangian.md)
