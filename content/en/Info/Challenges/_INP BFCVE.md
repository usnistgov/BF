---
weight: 1
title: "_INP BFCVE"
---
## Input/Output Check Related BFCVE Challenge <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

The [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) repository has 228 000 software vulnerability entrees (as of August 2023) and 25K+ are being added each year. Systematic labeling of this huge set of CVEs benefits greatly the  advances in modern artificial intelligence (AI) Cybersecurity research. The [National Vulnerability Database (NVD)](https://nvd.nist.gov/), with input from the security community, labels CVEs with [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/) entries. However, this has proven to be difficult as CWE has imprecise descriptions, gaps and overlaps in covarage.

The BF input/output check bugs taxonomies are precisely defined (see [BF Input/Output Check Classes](/BF/info/bf-classes/_inp/)) and being an LL1 grammer, BF provides a formal structure for describing software security vulnerabilities. Let's together  contribute to the creation of a labeled dataset of software security vulnerability descriptions via BF. 

There are 70 736 input/output check related CVEs (as of August 2023). We query the CVE for entries with CWEs assigned by NVD, where the CWEs also map to BF Input/Output Check classes by operation. We then order them by their severity scores according to the [Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/) and select maximum thirty CVEs per operation -- thus reducing the count to 90 most severe CVEs per _INP BF operation to start with. 

##### The first set of steps for this _Input/Output Check BFCVE Challenge_:

1. Explore the CVEs listed below. Each one has input/output check related underlying weaknesses and was identified via the corresponding [CWE2BF mappings](/BF/info/bf-classes/_inp/cwe2bf/) and the CWE to CVE assignments by NVD.
2. Identify at least one CVE for wchich you can find the Bug Report, the Code with Bug, and the Code with Fix (locate the specific GitHub repository with the Diffs). See how these are listed for the examples in [BFCVE](/BF/info/bfcve/) on the left. 

##### The second set of steps for this _Input/Output Check BFCVE Challenge_:

3. Get to know the [BF Input/Output Check Bugs Model](/BF/info/bf-classes/_inp/model/).
4. Get to know the taxonomies of the [BF Input/Output Check Classes](/BF/info/bf-classes/_inp/).
5. Get to know the [BF Tool](/BF/info/tools/bf-tool).
6. Collaborate on creating BF descriptions of your CVEs.

##### The third set of steps for this _Input/Output Check BFCVE Challenge_:
7. Open in a text editor the .bfcve file where you saved the BF CVE description usign the BF Tool. 
8. Copy the entire content of the .bfcve file. This is your BF CVE specification in XML format.
9. Submit the the copied .bfcve content and the links to the Bug Report, the Code with Bug, and the Code with Fix here: 

    {{< button href="https://forms.gle/8gL4pev5XHqbpX6t5">}}Submit your Findings{{< /button >}}


//90 CVEs list to be added//