---
weight: 2
title: "_MEM BFCVE"
---
# Memory Related BFCVE Challenge <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

The [Common Vulnerabilities and Exposures (CVE)](https://www.cve.org/) repository has 228 000 software vulnerability entrees (as of August 2023) and 25K+ are being added each year. Systematic labeling of this huge set of CVEs benefits greatly the  advances in modern artificial intelligence (AI) Cybersecurity research. The [National Vulnerability Database (NVD)](https://nvd.nist.gov/), with input from the security community, labels CVEs with [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/) entries. However, this has proven to be difficult as CWE has imprecise descriptions, gaps and overlaps in covarage.

The BF memory bugs taxonomies are precisely defined (see [BF Memory Corruption/Disclosure Classes](/BF/info/bf-classes/_mem/)) and being an LL1 grammer, BF provides a formal structure for describing software security vulnerabilities. Let's together  contribute to the creation of a labeled dataset of software security vulnerability descriptions via BF. 

There are 60 426 memory related CVEs (as of August 2023). We query the CVE for entries with CWEs assigned by NVD, where the CWEs also map to BF Memory Corruption and Disclosure classes by operation. We then order them by their severity scores according to the [Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/) and select maximum ten CVEs per operation -- thus reducing the count to 91 most severe CVEs per _MEM BF operation to start with. 

##### The first set of steps for this _Memory BFCVE Challenge_:
1. Explore the CVEs listed below. Each one has memory related underlying weaknesses and was identified via the corresponding [CWE2BF mappings](/BF/info/bf-classes/_mem/cwe2bf/) and the CWE to CVE assignments by NVD.
2. Identify at least one CVE for wchich you can find the Bug Report, the Code with Bug, and the Code with Fix (locate the specific GitHub repository with the Diffs). See how these are listed for the examples in [BFCVE](/BF/info/bfcve/) on the left. 

##### The second set of steps for this _Memory BFCVE Challenge_:
3. Get to know the [BF Memory Bugs Model](/BF/info/bf-classes/_mem/model/).
4. Get to know the taxonomies of the [BF Memory Corruption/Disclosure Classes](/BF/info/bf-classes/_mem/).
5. Get to know the [BF Tool](/BF/info/tools/bf-tool).
6. Collaborate on creating BF descriptions of your CVEs.

##### The third set of steps for this _Memory BFCVE Challenge_:
7. Open in a text editor the .bfcve file where you saved the BF CVE description usign the BF Tool. 
8. Copy the entire content of the .bfcve file. This is your BF CVE specification in XML format.
9. Submit the the copied .bfcve content and the links to the Bug Report, the Code with Bug, and the Code with Fix here: 

    {{< button href="https://forms.gle/RoLYtEQwq3u3wieKA">}}Submit your Findings{{< /button >}}


<table><tr><td>

Most Resent Severe Memory Related CVEs</td><td>by BF Operation</td><td>CVSS</td></tr><tr><td>
[CVE-2022-1699](https://nvd.nist.gov/vuln/detail/CVE-2022-1699)</td><td>Allocate</td><td>9.9</td></tr><tr><td>
[CVE-2019-2259](https://nvd.nist.gov/vuln/detail/CVE-2019-2259)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2019-2259](https://nvd.nist.gov/vuln/detail/CVE-2019-2259)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2018-19282](https://nvd.nist.gov/vuln/detail/CVE-2018-19282)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2018-16492](https://nvd.nist.gov/vuln/detail/CVE-2018-16492)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2018-16491](https://nvd.nist.gov/vuln/detail/CVE-2018-16491)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2018-16486](https://nvd.nist.gov/vuln/detail/CVE-2018-16486)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2018-11936](https://nvd.nist.gov/vuln/detail/CVE-2018-11936)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2017-9119](https://nvd.nist.gov/vuln/detail/CVE-2017-9119)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2017-6713](https://nvd.nist.gov/vuln/detail/CVE-2017-6713)</td><td>Allocate</td><td>9.8</td></tr><tr><td>
[CVE-2018-18924](https://nvd.nist.gov/vuln/detail/CVE-2018-18924)</td><td>Clear</td><td>8.8</td></tr><tr><td>
[CVE-2021-37089](https://nvd.nist.gov/vuln/detail/CVE-2021-37089)</td><td>Clear</td><td>7.8</td></tr><tr><td>
[CVE-2018-19961](https://nvd.nist.gov/vuln/detail/CVE-2018-19961)</td><td>Clear</td><td>7.8</td></tr><tr><td>
[CVE-2018-18281](https://nvd.nist.gov/vuln/detail/CVE-2018-18281)</td><td>Clear</td><td>7.8</td></tr><tr><td>
[CVE-2021-45706](https://nvd.nist.gov/vuln/detail/CVE-2021-45706)</td><td>Clear</td><td>7.5</td></tr><tr><td>
[CVE-2021-45330](https://nvd.nist.gov/vuln/detail/CVE-2021-45330)</td><td>Clear</td><td>7.5</td></tr><tr><td>
[CVE-2021-32928](https://nvd.nist.gov/vuln/detail/CVE-2021-32928)</td><td>Clear</td><td>7.5</td></tr><tr><td>
[CVE-2020-13451](https://nvd.nist.gov/vuln/detail/CVE-2020-13451)</td><td>Clear</td><td>7.5</td></tr><tr><td>
[CVE-2019-11514](https://nvd.nist.gov/vuln/detail/CVE-2019-11514)</td><td>Clear</td><td>7.5</td></tr><tr><td>
[CVE-2017-17090](https://nvd.nist.gov/vuln/detail/CVE-2017-17090)</td><td>Clear</td><td>7.5</td></tr><tr><td>
[CVE-2022-22086](https://nvd.nist.gov/vuln/detail/CVE-2022-22086)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2022-20127](https://nvd.nist.gov/vuln/detail/CVE-2022-20127)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2021-37120](https://nvd.nist.gov/vuln/detail/CVE-2021-37120)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2021-1910](https://nvd.nist.gov/vuln/detail/CVE-2021-1910)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2020-8432](https://nvd.nist.gov/vuln/detail/CVE-2020-8432)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2020-6016](https://nvd.nist.gov/vuln/detail/CVE-2020-6016)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2020-0103](https://nvd.nist.gov/vuln/detail/CVE-2020-0103)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2019-15504](https://nvd.nist.gov/vuln/detail/CVE-2019-15504)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2018-20961](https://nvd.nist.gov/vuln/detail/CVE-2018-20961)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2018-0101](https://nvd.nist.gov/vuln/detail/CVE-2018-0101)</td><td>Deallocate</td><td>10</td></tr><tr><td>
[CVE-2022-28350](https://nvd.nist.gov/vuln/detail/CVE-2022-28350)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2022-28349](https://nvd.nist.gov/vuln/detail/CVE-2022-28349)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2022-28348](https://nvd.nist.gov/vuln/detail/CVE-2022-28348)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2022-21806](https://nvd.nist.gov/vuln/detail/CVE-2022-21806)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2021-37045](https://nvd.nist.gov/vuln/detail/CVE-2021-37045)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2021-21941](https://nvd.nist.gov/vuln/detail/CVE-2021-21941)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2021-1976](https://nvd.nist.gov/vuln/detail/CVE-2021-1976)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2021-1946](https://nvd.nist.gov/vuln/detail/CVE-2021-1946)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2021-1829](https://nvd.nist.gov/vuln/detail/CVE-2021-1829)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2020-9633](https://nvd.nist.gov/vuln/detail/CVE-2020-9633)</td><td>Dereference</td><td>10</td></tr><tr><td>
[CVE-2022-28350](https://nvd.nist.gov/vuln/detail/CVE-2022-28350)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2022-28349](https://nvd.nist.gov/vuln/detail/CVE-2022-28349)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2022-28348](https://nvd.nist.gov/vuln/detail/CVE-2022-28348)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2022-21806](https://nvd.nist.gov/vuln/detail/CVE-2022-21806)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2022-20238](https://nvd.nist.gov/vuln/detail/CVE-2022-20238)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2021-40393](https://nvd.nist.gov/vuln/detail/CVE-2021-40393)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2021-40050](https://nvd.nist.gov/vuln/detail/CVE-2021-40050)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2021-39708](https://nvd.nist.gov/vuln/detail/CVE-2021-39708)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2021-37045](https://nvd.nist.gov/vuln/detail/CVE-2021-37045)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2021-27692](https://nvd.nist.gov/vuln/detail/CVE-2021-27692)</td><td>Read</td><td>10</td></tr><tr><td>
[CVE-2022-41837](https://nvd.nist.gov/vuln/detail/CVE-2022-41837)</td><td>Reassign</td><td>9.8</td></tr><tr><td>
[CVE-2021-21798](https://nvd.nist.gov/vuln/detail/CVE-2021-21798)</td><td>Reassign</td><td>8.8</td></tr><tr><td>
[CVE-2021-34720](https://nvd.nist.gov/vuln/detail/CVE-2021-34720)</td><td>Reassign</td><td>8.6</td></tr><tr><td>
[CVE-2021-28216](https://nvd.nist.gov/vuln/detail/CVE-2021-28216)</td><td>Reassign</td><td>4.6</td></tr><tr><td>
[CVE-2020-8974](https://nvd.nist.gov/vuln/detail/CVE-2020-8974)</td><td>Reassign</td><td>n/a</td></tr><tr><td>
[CVE-2021-3319](https://nvd.nist.gov/vuln/detail/CVE-2021-3319)</td><td>Reposition</td><td>7.5</td></tr><tr><td>
[CVE-2021-3510](https://nvd.nist.gov/vuln/detail/CVE-2021-3510)</td><td>Reposition</td><td>5</td></tr><tr><td>
[CVE-2022-32454](https://nvd.nist.gov/vuln/detail/CVE-2022-32454)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-32032](https://nvd.nist.gov/vuln/detail/CVE-2022-32032)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-31209](https://nvd.nist.gov/vuln/detail/CVE-2022-31209)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-30926](https://nvd.nist.gov/vuln/detail/CVE-2022-30926)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-30925](https://nvd.nist.gov/vuln/detail/CVE-2022-30925)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-30924](https://nvd.nist.gov/vuln/detail/CVE-2022-30924)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-30923](https://nvd.nist.gov/vuln/detail/CVE-2022-30923)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-30922](https://nvd.nist.gov/vuln/detail/CVE-2022-30922)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-30921](https://nvd.nist.gov/vuln/detail/CVE-2022-30921)</td><td>Write</td><td>10</td></tr><tr><td>
[CVE-2022-30920](https://nvd.nist.gov/vuln/detail/CVE-2022-30920)</td><td>Write</td><td>10</td></tr>

</table>