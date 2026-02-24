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
## See also
- [Mutual Information](../info-theory/mutual-information.md)
