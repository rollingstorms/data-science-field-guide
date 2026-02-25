---
id: ml.model-interpretability
title: Model Interpretability
tags: [machine-learning, interpretability]
related: []
prereqs: []
---

# Model Interpretability

<div class="formula" markdown="1">
## Formula
\[
\hat y = f(x) \quad \Rightarrow \quad \text{interpretability asks how } x \text{ drives } \hat y
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(f\): trained model
- \(x\): input features

</div>
## What it means
Model interpretability covers tools and practices for understanding why models behave as they do globally and locally.

## What it's used for
- Debugging, stakeholder trust, compliance, and feature audits.
- Comparing models beyond aggregate metrics.
## Key properties
- Includes intrinsic interpretability (simple models) and post-hoc explanations.
- Local explanations do not automatically imply causal effects.

## Common gotchas
- Explanation methods can disagree.
- Correlated features can make importances unstable or misleading.

## Example
Use global feature importance plus local examples to review a credit-risk model before launch.

## How to Compute (Pseudocode)
```text
Input: trained model, evaluation data, interpretability goals (global/local)
Output: interpretation report/artifacts

choose interpretation methods appropriate for the model and question
  examples: feature importance, PDP/ICE, SHAP, local examples, error slices
compute explanations on held-out or representative data
cross-check explanations against domain constraints and known correlations
summarize global patterns and local examples with caveats
```

## Complexity
- Time: Depends on the chosen explanation methods and model evaluation costs (for example, SHAP and permutation methods can be expensive)
- Space: Depends on stored explanation outputs, sampled datasets, and visualization artifacts
- Assumptions: Interpretability is a workflow umbrella; downstream methods determine actual runtime/memory complexity

