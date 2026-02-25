---
id: info.channel-capacity
title: Channel Capacity
tags: [information-theory]
related: [info.mutual-information]
prereqs: [info.mutual-information]
---

# Channel Capacity

<div class="formula" markdown="1">
## Formula
\[
C = \max_{p(x)} I(X;Y)
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(p(x)\): input distribution
- \(I(X;Y)\): mutual information between channel input and output

</div>
## What it means
Maximum achievable information rate of a channel with arbitrarily small error.



## What it's used for
- Upper-bounding the reliable communication rate of a channel.
- Designing coding schemes near capacity.
## Key properties
- For memoryless channels, capacity is per channel use
- Achievable by suitable coding as block length grows

## Common gotchas
- Capacity depends on channel model and constraints (e.g., power limits).
- Achievability requires coding, not just choosing \(p(x)\).



## Example
For a binary symmetric channel with flip prob \(p\),
\(C=1-H_2(p)\); e.g., \(p=0.1\) gives \(C=1-H_2(0.1)\).
## How to Compute (Pseudocode)
```text
Input: channel model p(y|x), input constraints, optimization method
Output: channel capacity estimate C and optimizing input distribution p*(x) (if found)

parameterize or represent candidate input distributions p(x)
for each candidate (or during iterative optimization):
  compute mutual information I(X;Y) under p(x) and p(y|x)
maximize I(X;Y) over valid p(x)
return C = max I(X;Y) and the optimizer p*(x)
```

## Complexity
- Time: Depends on the channel model and optimization method (closed forms exist for some channels; numerical optimization/Blahut-Arimoto-style procedures are iterative)
- Space: Depends on the channel alphabet/model representation and optimizer state
- Assumptions: This is a computational optimization workflow for capacity; discrete memoryless and continuous constrained channels use different methods and costs

## See also
- [Mutual Information](../info-theory/mutual-information.md)
