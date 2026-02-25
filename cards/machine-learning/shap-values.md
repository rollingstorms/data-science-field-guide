---
id: ml.shap-values
title: SHAP Values
tags: [machine-learning, interpretability]
related: []
prereqs: []
---

# SHAP Values

<div class="formula" markdown="1">
## Formula
\[
\phi_i = \sum_{S\subseteq F\setminus\{i\}} \frac{|S|!(|F|-|S|-1)!}{|F|!}\big(v(S\cup\{i\})-v(S)\big)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(\phi_i\): contribution of feature \(i\)
- \(F\): set of features
- \(v(S)\): model value for coalition \(S\)

</div>
## What it means
SHAP values attribute a prediction to features using a game-theoretic additive decomposition.

## What it's used for
- Local explanation of individual predictions.
- Global summaries by aggregating absolute SHAP values.
## Key properties
- Additive feature attributions sum to prediction difference from a baseline.
- Practical implementations use approximations for speed.

## Common gotchas
- Values depend on background/reference distribution choice.
- Correlated features can split credit in unintuitive ways.

## Example
For one loan application, SHAP can show high debt ratio pushing risk up while long employment pushes it down.

## How to Compute (Pseudocode)
```text
Input: trained model f, example x, background/reference data, SHAP method
Output: SHAP values phi for x

choose a SHAP algorithm appropriate for the model family
  examples: TreeSHAP for tree ensembles, KernelSHAP for model-agnostic approximation
compute baseline value from the background/reference data
estimate or compute feature contributions phi so that:
  baseline + sum(phi_i) approximates (or equals) the model output for x
return phi
```

## Complexity
- Time: Depends heavily on the SHAP method and model family (exact Shapley computation is exponential in the number of features; practical SHAP implementations use specialized algorithms or approximations)
- Space: Depends on the method, model, and background sample size
- Assumptions: This card describes the general SHAP workflow; TreeSHAP, KernelSHAP, and sampling-based methods have very different runtime/memory profiles

