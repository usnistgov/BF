---
weight: 1
title: "BF CVE Challenge"
---
## Memory Related BFCVE Challenge <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

The [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) repository has 228K+ software vulnerability entrees (as of August 2023) and 25K+ are being added each year. Systematic labeling of this huge set of CVEs benefits greatly the  advances in modern artificial intelligence (AI) Cybersecurity research. The [National Vulnerability Database (NVD)](https://nvd.nist.gov/), with input from the security community, labels CVEs with [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/) entries. However, this has proven to be difficult as CWE has imprecise descriptions, gaps and overlaps in covarage.

The BF memory bugs taxonomy are precisely defined (see [BF Memory Corruption/Disclosure classes](Info/BF%20Classes/_MEM)) and being an LL1 grammer, BF provides a formal structure for describing software security vulnerabilities. Let's together  contribute to the creation of a labeled dataset of software security vulnerability descriptions via BF. 

There are 60,426 memory related CVEs (as of August 2023). We query the CVE for entries with CWEs assigned by NVD, where the CWEs also map to BF Memory Corruption and Disclosure classes by operation. We then order them by their severity scores according to the [Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/) and select maximum ten CVEs per operation -- thus reducing the count to 68 most severe CVEs per BF operation to start with. 

The steps for this _Memory BFCVE Challenge_ are as follows:

1. Explore the CVEs from the CVE list below. They have memory related underlying weaknesses and were identified through the corresponding [CWE2BF mappings](Info\BF%20Classes\_MEM\CWE2BF) and the CWE to CVE assignments by NVD.
2. Identify at least one CVE for wchich you can find the Bug Report, the Code with Bug, and the Code with Fix (preferably in a GitHub repository). See examples in [BFCVE](Info/BFCVE) on the left. 
2. While exploring the CVEs, request the [BF Tool download](Info/Tools/BF%20Tool). 
3. Get to know the [BF Memory Bugs Model](/Info/BF%20Classes/_MEM/Model).
4. Get to know the taxonomies of the [BF Memory Corruption/Disclosure classes](Info/BF%20Classes/_MEM).
5. Get to know the [BF Tool doenload](/BF/Info/Tools/BF Tool).
6. Describe the chains of weaknesses underlying your selected CVE usign the BF Tool.
7. Submit your generate .bfcve content here <br/><br/>
<div style="text-align:center">{{< button href="https://forms.gle/RoLYtEQwq3u3wieKA">}}Submit your BF CVE Description{{< /button >}}</div>
<table><tr><td>

[CVE-2022-1699](https://nvd.nist.gov/vuln/detail/CVE-2022-1699)<br/></td><td>
[CVE-2021-1275](https://nvd.nist.gov/vuln/detail/CVE-2021-1275)<br/></td><td>
[CVE-2019-2259](https://nvd.nist.gov/vuln/detail/CVE-2019-2259)<br/></td></tr><tr><td>
[CVE-2019-2259](https://nvd.nist.gov/vuln/detail/CVE-2019-2259)<br/></td><td>
[CVE-2018-19282](https://nvd.nist.gov/vuln/detail/CVE-2018-19282)<br/></td><td>
[CVE-2018-16492](https://nvd.nist.gov/vuln/detail/CVE-2018-16492)<br/></td></tr><tr><td>
[CVE-2018-16491](https://nvd.nist.gov/vuln/detail/CVE-2018-16491)<br/></td><td>
[CVE-2018-16486](https://nvd.nist.gov/vuln/detail/CVE-2018-16486)<br/></td><td>
[CVE-2018-11936](https://nvd.nist.gov/vuln/detail/CVE-2018-11936)<br/></td></tr><tr><td>
[CVE-2017-9119](https://nvd.nist.gov/vuln/detail/CVE-2017-9119)<br/></td><td>
[CVE-2017-6713](https://nvd.nist.gov/vuln/detail/CVE-2017-6713)<br/></td><td>
[CVE-2018-18924](https://nvd.nist.gov/vuln/detail/CVE-2018-18924)<br/></td></tr><tr><td>
[CVE-2021-37089](https://nvd.nist.gov/vuln/detail/CVE-2021-37089)<br/></td><td>
[CVE-2018-19961](https://nvd.nist.gov/vuln/detail/CVE-2018-19961)<br/></td><td>
[CVE-2018-18281](https://nvd.nist.gov/vuln/detail/CVE-2018-18281)<br/></td></tr><tr><td>
[CVE-2021-45706](https://nvd.nist.gov/vuln/detail/CVE-2021-45706)<br/></td><td>
[CVE-2021-45330](https://nvd.nist.gov/vuln/detail/CVE-2021-45330)<br/></td><td>
[CVE-2021-32928](https://nvd.nist.gov/vuln/detail/CVE-2021-32928)<br/></td></tr><tr><td>
[CVE-2020-13451](https://nvd.nist.gov/vuln/detail/CVE-2020-13451)<br/></td><td>
[CVE-2019-11514](https://nvd.nist.gov/vuln/detail/CVE-2019-11514)<br/></td><td>
[CVE-2017-17090](https://nvd.nist.gov/vuln/detail/CVE-2017-17090)<br/></td></tr><tr><td>
[CVE-2022-22086](https://nvd.nist.gov/vuln/detail/CVE-2022-22086)<br/></td><td>
[CVE-2022-20127](https://nvd.nist.gov/vuln/detail/CVE-2022-20127)<br/></td><td>
[CVE-2021-37120](https://nvd.nist.gov/vuln/detail/CVE-2021-37120)<br/></td></tr><tr><td>
[CVE-2021-1910](https://nvd.nist.gov/vuln/detail/CVE-2021-1910)<br/></td><td>
[CVE-2020-8432](https://nvd.nist.gov/vuln/detail/CVE-2020-8432)<br/></td><td>
[CVE-2020-6016](https://nvd.nist.gov/vuln/detail/CVE-2020-6016)<br/></td></tr><tr><td>
[CVE-2020-0103](https://nvd.nist.gov/vuln/detail/CVE-2020-0103)<br/></td><td>
[CVE-2019-15504](https://nvd.nist.gov/vuln/detail/CVE-2019-15504)<br/></td><td>
[CVE-2018-20961](https://nvd.nist.gov/vuln/detail/CVE-2018-20961)<br/></td></tr><tr><td>
[CVE-2018-0101](https://nvd.nist.gov/vuln/detail/CVE-2018-0101)<br/></td><td>
[CVE-2022-28350](https://nvd.nist.gov/vuln/detail/CVE-2022-28350)<br/></td><td>
[CVE-2022-28349](https://nvd.nist.gov/vuln/detail/CVE-2022-28349)<br/></td></tr><tr><td>
[CVE-2022-28348](https://nvd.nist.gov/vuln/detail/CVE-2022-28348)<br/></td><td>
[CVE-2022-21806](https://nvd.nist.gov/vuln/detail/CVE-2022-21806)<br/></td><td>
[CVE-2021-37045](https://nvd.nist.gov/vuln/detail/CVE-2021-37045)<br/></td></tr><tr><td>
[CVE-2021-21941](https://nvd.nist.gov/vuln/detail/CVE-2021-21941)<br/></td><td>
[CVE-2021-1976](https://nvd.nist.gov/vuln/detail/CVE-2021-1976)<br/></td><td>
[CVE-2021-1946](https://nvd.nist.gov/vuln/detail/CVE-2021-1946)<br/></td></tr><tr><td>
[CVE-2021-1829](https://nvd.nist.gov/vuln/detail/CVE-2021-1829)<br/></td><td>
[CVE-2020-9633](https://nvd.nist.gov/vuln/detail/CVE-2020-9633)<br/></td><td>
[CVE-2022-28350](https://nvd.nist.gov/vuln/detail/CVE-2022-28350)<br/></td></tr><tr><td>
[CVE-2022-28349](https://nvd.nist.gov/vuln/detail/CVE-2022-28349)<br/></td><td>
[CVE-2022-28348](https://nvd.nist.gov/vuln/detail/CVE-2022-28348)<br/></td><td>
[CVE-2022-21806](https://nvd.nist.gov/vuln/detail/CVE-2022-21806)<br/></td></tr><tr><td>
[CVE-2022-20238](https://nvd.nist.gov/vuln/detail/CVE-2022-20238)<br/></td><td>
[CVE-2021-40393](https://nvd.nist.gov/vuln/detail/CVE-2021-40393)<br/></td><td>
[CVE-2021-40050](https://nvd.nist.gov/vuln/detail/CVE-2021-40050)<br/></td></tr><tr><td>
[CVE-2021-39708](https://nvd.nist.gov/vuln/detail/CVE-2021-39708)<br/></td><td>
[CVE-2021-37045](https://nvd.nist.gov/vuln/detail/CVE-2021-37045)<br/></td><td>
[CVE-2021-27692](https://nvd.nist.gov/vuln/detail/CVE-2021-27692)<br/></td></tr><tr><td>
[CVE-2022-41837](https://nvd.nist.gov/vuln/detail/CVE-2022-41837)<br/></td><td>
[CVE-2021-21798](https://nvd.nist.gov/vuln/detail/CVE-2021-21798)<br/></td><td>
[CVE-2021-34720](https://nvd.nist.gov/vuln/detail/CVE-2021-34720)<br/></td></tr><tr><td>
[CVE-2021-28216](https://nvd.nist.gov/vuln/detail/CVE-2021-28216)<br/></td><td>
[CVE-2020-8974](https://nvd.nist.gov/vuln/detail/CVE-2020-8974)<br/></td><td>
[CVE-2021-3319](https://nvd.nist.gov/vuln/detail/CVE-2021-3319)<br/></td></tr><tr><td>
[CVE-2021-3510](https://nvd.nist.gov/vuln/detail/CVE-2021-3510)<br/></td><td>
[CVE-2022-32454](https://nvd.nist.gov/vuln/detail/CVE-2022-32454)<br/></td><td>
[CVE-2022-32032](https://nvd.nist.gov/vuln/detail/CVE-2022-32032)<br/></td></tr><tr><td>
[CVE-2022-31209](https://nvd.nist.gov/vuln/detail/CVE-2022-31209)<br/></td><td>
[CVE-2022-30926](https://nvd.nist.gov/vuln/detail/CVE-2022-30926)<br/></td><td>
[CVE-2022-30925](https://nvd.nist.gov/vuln/detail/CVE-2022-30925)<br/></td></tr><tr><td>
[CVE-2022-30924](https://nvd.nist.gov/vuln/detail/CVE-2022-30924)<br/></td><td>
[CVE-2022-30923](https://nvd.nist.gov/vuln/detail/CVE-2022-30923)<br/></td><td>
[CVE-2022-30922](https://nvd.nist.gov/vuln/detail/CVE-2022-30922)<br/></td></tr><tr><td>
[CVE-2022-30921](https://nvd.nist.gov/vuln/detail/CVE-2022-30921)<br/></td><td>
[CVE-2022-30920](https://nvd.nist.gov/vuln/detail/CVE-2022-30920)<br/></td></tr>

</table>