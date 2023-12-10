---
weight: 5
bookCollapseSection: false
title: "Why BF?"
---
# Why BF? <br/>_`Irena Bojanova, Inventor, Creator, PI,  Bugs Framework (BF)`_

The Bugs Framework aims to have the expressiveness power to clearly describe any software bug or weakness, underlying any vulnerability. It builds on the following commonly used repositories of software weaknesses and vulnerabilities, while considering the problems that they have.

*   [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/) – a community-developed list of software and hardware weaknesses types.
*   [Common Vulnerabilities and Exposures (CVE)](https://cve.mitre.org/) – a catalog of publicly disclosed cybersecurity vulnerabilities. Over 25,000 were documented in 2022 only.
*   [National Vulnerabilities Database (NVD)](https://nvd.nist.gov/) – the US government repository that links all CVEs to CWEs.

## Repository Problems

CWE and CVE are widely used, but they have some problems. Many CWEs and CVEs have imprecise descriptions and unclear causality. CWE also has gaps and overlaps in coverage.

*   The following is an example of an imprecise CWE definition.

CWE-502: Deserialization of Untrusted Data: The application deserializes untrusted data without sufficiently verifying that the resulting data will be valid.

It’s not clear here what “sufficiently” means. “Verifying that data is valid” is also confusing. It should say “... without validating and verifying it”.

*   Gaps and overlaps in CWEs lead to confusion. As an example, if we arrange buffer overflow CWEs by read or write, over or under the bounds, on the stack or heap, the gaps and overlaps can be easily spotted.
<br/><br/>
{{< img src="images/Home/BOFtable.png" height="150">}}

*   Unclear causality in CVEs leads to wrong CWE assignments. For example, in this CVE, luck of input validation leads to integer overflow and then to buffer overflow.

[CVE-2018-5907](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-5907): Possible buffer overflow in msm\_adsp\_stream\_callback\_put due to lack of input validation of user-provided data that leads to integer overflow in all Android releases (Android for MSM, Firefox OS for MSM, QRD Android) from CAF using the Linux kernel.

NVD labels it with CWE-190 – Integer Overflow or Wraparound, while the cause is CWE-20 – Improper Input Validation.

The full chain is: CWE 20 – CWE 190 – CWE 119, the last one being – Improper Restriction of Operations within the Bounds of a Memory Buffer.



