---
weight: 1
title: "_INP BFCVE"
---
# \_INP BFCVE Challenge <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

Let's start creating of a labeled dataset of input/output check related software security vulnerability specifications using BF's [input/output check bugs formalism (taxonomy and LL(1) formal grammar)](/BF/info/bf-classes/_inp/).

There are 70 736 input/output check related CVEs (as of August 2023). To start with, we query the CVE for entries with CWEs assigned by NVD, where the CWEs also map by operation to BF Input/Output Check classes. We then order them by their severity scores according to the [Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/) and select maximum thirty CVEs per operation -- thus reducing the count to 91 most severe CVEs per _INP BF operation . 

##### First set of steps:

1. Explore the CVEs listed below. Each one has input/output check related underlying weaknesses and was identified via the corresponding [CWE2BF mappings](/BF/info/bf-classes/_inp/cwe2bf/) and the CWE to CVE assignments by NVD.
2. Identify at least one CVE for wchich you can find the Bug Report, the Code with Bug, and the Code with Fix (locate the specific GitHub repository with the Diffs). See how these are listed for the examples in [BFCVE](/BF/info/bfcve/) on the left. 

##### Second set of steps:

3. Get to know the [BF Input/Output Check Bugs Model](/BF/info/bf-classes/_inp/model/).
4. Get to know the taxonomies of the [BF Input/Output Check Classes](/BF/info/bf-classes/_inp/).
5. Get to know the [BF Tool](/BF/info/tools/bf-tool).
6. Collaborate on creating BF descriptions of your CVEs.

##### Third set of steps:
7. Open in a text editor the .bfcve file where you saved the BF CVE description usign the BF Tool. 
8. Copy the entire content of the .bfcve file. This is your BF CVE specification in XML format.
9. Submit the the copied .bfcve content and the links to the Bug Report, the Code with Bug, and the Code with Fix here: 

<div style="text-align:center">{{{< button href="https://forms.gle/8gL4pev5XHqbpX6t5">}}Submit your Findings{{< /button >}}</div>


//90 CVEs list to be added//