---
id: info.channel-capacity
title: Channel Capacity
tags: [information-theory]
related: [info.mutual-information]
prereqs: [info.mutual-information]
---

# Channel Capacity

## Formula
\[
C = \max_{p(x)} I(X;Y)
\]

## Parameters
- \(p(x)\): input distribution
- \(I(X;Y)\): mutual information between channel input and output

## What it means
Maximum achievable information rate of a channel with arbitrarily small error.

## Key properties
- For memoryless channels, capacity is per channel use
- Achievable by suitable coding as block length grows

## Common gotchas
- Capacity depends on channel model and constraints (e.g., power limits).
- Achievability requires coding, not just choosing \(p(x)\).

## See also
- [Mutual Information](../info-theory/mutual-information.md)
