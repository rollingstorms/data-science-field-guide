---
id: prob.median
title: Median
tags: [probability, statistics, central-tendency]
related: [prob.mean]
prereqs: []
---

# Median

<div class="formula" markdown="1">
## Formula
\[
\mathrm{median}(X) = m \text{ such that } P(X\le m)\ge \tfrac{1}{2} \text{ and } P(X\ge m)\ge \tfrac{1}{2}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(X\): random variable
- \(m\): median value

</div>
## What it means
Middle value that splits the distribution into two halves.



## What it's used for
- Robust measure of central tendency.
- Summarizing skewed data.

## Key properties
- Minimizes expected absolute deviation.
- Insensitive to outliers compared to the mean.

## Common gotchas
- For even-sized samples, the median is often defined as the average of the two middle values.
- Not unique if the distribution has a flat region.

## Example
For \([1, 2, 10]\), median is 2. For \([1, 2, 10, 11]\), median is \((2+10)/2=6\).
