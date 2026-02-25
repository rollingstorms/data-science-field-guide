---
id: dl.residual-connection
title: Residual Connection (Skip Connection)
tags: [deep-learning, neural-networks]
related: [dl.layer-normalization, dl.transformer]
prereqs: []
---

# Residual Connection (Skip Connection)

<div class="formula" markdown="1">
## Formula
\[
y = x + F(x)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(x\): input
- \(F(x)\): learned transformation (e.g., attention or MLP sublayer)
- \(y\): output with skip connection

</div>
## What it means
A residual connection adds the input directly to a sublayer output, making it easier to preserve and refine information.

## What it's used for
- Deep networks (ResNets, Transformers).
- Improving gradient flow in deep stacks.

## Key properties
- Lets layers learn residual corrections rather than full mappings.
- Helps optimization of very deep models.

## Common gotchas
- Dimensions must match (or require a projection).
- Large residual magnitudes can destabilize training without normalization/scaling.

## Example
Transformer sublayers often use \(x + \mathrm{Attention}(x)\) and \(x + \mathrm{MLP}(x)\).

## How to Compute (Pseudocode)
```text
Input: tensor x and sublayer F
Output: residual output y

u <- F(x)
y <- x + u
return y
```

## Complexity
- Time: \(O(m)\) for the elementwise add over \(m\) values, plus the cost of computing \(F(x)\)
- Space: \(O(m)\) for the output tensor (and any sublayer intermediates)
- Assumptions: Shapes match for the residual add (or a projection is used before addition)

## See also
- [Layer Normalization](../deep-learning/layer-normalization.md)
- [Transformer](../deep-learning/transformer.md)
