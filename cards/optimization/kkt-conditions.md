---
id: opt.kkt-conditions
title: KKT Conditions
tags: [optimization, convex-analysis]
related: [opt.lagrangian, opt.duality]
prereqs: [opt.lagrangian]
---

# KKT Conditions

## Formula
\[
\nabla_x \mathcal{L}(x,\lambda,\nu)=0,\quad g(x)\le 0,\quad h(x)=0,\quad \lambda\ge 0,\quad \lambda \odot g(x)=0
\]

## Parameters
- \(\mathcal{L}\): Lagrangian
- \(g(x)\le 0\): inequality constraints
- \(h(x)=0\): equality constraints
- \(\lambda\): inequality multipliers
- \(\nu\): equality multipliers

## What it means
First-order optimality conditions for constrained problems; for convex problems, they are also sufficient.

## Key properties
- Complementary slackness: each \(\lambda_i g_i(x)=0\)
- Feasibility + stationarity + dual feasibility

## Common gotchas
- KKT are necessary only under constraint qualification.
- For nonconvex problems, KKT points need not be global optima.

## See also
- [Lagrangian](../optimization/lagrangian.md)
