---
id: opt.lagrangian
title: Lagrangian
tags: [optimization, constraints]
related: [opt.kkt-conditions, opt.duality]
prereqs: [opt.constrained-optimization]
---

# Lagrangian

## Formula
\[
\mathcal{L}(x,\lambda,\nu) = f(x) + \lambda^T g(x) + \nu^T h(x)
\]

## Parameters
- \(x\): primal variables
- \(g(x)\le 0\): inequality constraints
- \(h(x)=0\): equality constraints
- \(\lambda\ge 0\), \(\nu\): Lagrange multipliers

## What it means
Converts constrained optimization into an unconstrained objective by penalizing constraint violations.

## Key properties
- Stationary points of \(\mathcal{L}\) are candidates for constrained optima
- Leads to the dual function: \(\phi(\lambda,\nu)=\inf_x \mathcal{L}(x,\lambda,\nu)\)

## Common gotchas
- Multipliers are not "penalty weights" unless you fix them; they are variables.
- Inequality constraints require \(\lambda\ge 0\).

## See also
- [KKT Conditions](../optimization/kkt-conditions.md)
