---
id: prob.chi-square-test
title: Chi-Square Test
tags: [probability, statistics, hypothesis-testing]
related: []
prereqs: []
---

# Chi-Square Test

<div class="formula" markdown="1">
## Formula
\[
\chi^2 = \sum_{i} \frac{(O_i - E_i)^2}{E_i}
\]

</div>
<div class="parameters" markdown="1">
## Parameters
- \(O_i\): observed counts
- \(E_i\): expected counts under the null

</div>
## What it means
Compares observed counts to expected counts under a null model.



## What it's used for
- Goodness-of-fit tests for categorical distributions.
- Independence tests in contingency tables.

## Key properties
- Under \(H_0\), the statistic is approximately \(\chi^2\)-distributed.
- Degrees of freedom depend on the number of categories.

## Common gotchas
- Expected counts should not be too small (rule of thumb: \(E_i\ge 5\)).
- For small samples, consider exact tests.

## Example
Observed \([18, 22]\), expected \([20, 20]\):
\(\chi^2=(18-20)^2/20 + (22-20)^2/20=0.4\).
