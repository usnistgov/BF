---
weight: 4
title: "_MEM BFCVE"
---
# \_MEM BFCVE Challenge <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

Let's start creating of a labeled dataset of memory related software security vulnerability specifications using BF's [memory bugs formalism (taxonomy and LL(1) formal grammar)](/BF/info/bf-classes/_mem/).

There are 60 426 memory related CVEs (as of August 2023). To start with, we query the CVE for entries with CWEs assigned by NVD, where the CWEs also map by operation to BF Memory Corruption and Disclosure classes. We then order them by their severity scores according to the [Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/) and select maximum ten CVEs per operation -- thus reducing the count to 91 most severe CVEs per _MEM BF operation. 

##### First set of steps:
1. Explore the 91 CVEs listed below. Each one has a memory related underlying weakness identified via our [CWE2BF mappings](/BF/info/bf-classes/_mem/cwe2bf/) and the NVD CWE to CVE assignments.
2. Identify a CVE for wchich you can find the Bug Report, the Code with Bug, and the Code with Fix (locate the specific GitHub repository with the Diffs). See how these are listed for the examples in [BFCVE](/BF/info/bfcve/) on the left. 

##### Second set of steps:
3. Get to know the [BF Memory Bugs Model](/BF/info/bf-classes/_mem/model/).
4. Get to know the taxonomies of the [BF Memory Corruption/Disclosure Classes](/BF/info/bf-classes/_mem/).
5. Get to know the [BF Tool](/BF/info/tools/bf-tool).
6. Collaborate on creating a BF specification of your CVE.
</br>
`Important Note:` Use the "NVD CWE" and "BF Chain(s) Indentifiable from NVD CWE" columns only as possibly useful guidance. In some cases, a listed CWE may be a wrongly assigned one by NVD, so please notify us if you encounter such. In some cases, the listed chains may be wrong or not the only possible, as the CWE information may be wrong or limited. 

##### Third set of steps:
7. Open in a text editor the .bfcve file where you saved the BF CVE description usign the BF Tool. 
8. Copy the entire content of the .bfcve file. This is your BF CVE specification in XML format.
9. Submit the the copied .bfcve content and the links to the Bug Report, the Code with Bug, and the Code with Fix here: 

<div style="text-align:center">{{< button href="https://forms.gle/RoLYtEQwq3u3wieKA">}}Submit your Findings{{< /button >}}</div>

<!-- <td style="color: purple"> -->
<table border-collapse="collapse" border-left="1px solid black" border-right="1px solid black"><tr><td>

\_MEM CVEs</td><td>CVSS</td><td>BF Class</td><td>BF Operation</td><td>NVD CWE</td><td border-collapse="collapse" border-left="1px solid black" border-right="1px solid black">BF Chain(s) Indentifiable from NVD CWE</td></tr><tr><td>
[CVE-2022-1699](https://nvd.nist.gov/vuln/detail/CVE-2022-1699)</td><td>9.9</td><td>MMN</td><td>Allocate</td><td rowspan="9" valign="middle">[CWE-400](https://cwe.mitre.org/data/definitions/400.html)</td><td rowspan="9" valign="middle"><ul><li>(Missing Code, Verify, Wrong Value) →<br>→ (Wrong Size, Allocate, Memory Overflow)<br><li>(SingleOwnedAddress, Reassign, MemoryLeak)<br><li>(MissingCode, Deallocate, MemoryLeak)</ul></td></tr><tr><td>
[CVE-2022-2259](https://nvd.nist.gov/vuln/detail/CVE-2022-1699)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>
[CVE-2022-16492](https://nvd.nist.gov/vuln/detail/CVE-2022-16492)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>
[CVE-2021-1275](https://nvd.nist.gov/vuln/detail/CVE-2021-1275)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>
[CVE-2018-19282](https://nvd.nist.gov/vuln/detail/CVE-2018-19282)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>
[CVE-2018-16491](https://nvd.nist.gov/vuln/detail/CVE-2018-16491)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>
[CVE-2018-16486](https://nvd.nist.gov/vuln/detail/CVE-2018-16486)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>
[CVE-2018-11936](https://nvd.nist.gov/vuln/detail/CVE-2018-11936)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>
[CVE-2017-9119](https://nvd.nist.gov/vuln/detail/CVE-2017-9119)</td><td>9.8</td><td>MMN</td><td>Allocate</td></tr><td>																									
[CVE-2017-6713](https://nvd.nist.gov/vuln/detail/CVE-2017-6713)</td><td>9.8</td><td>MMN</td><td>Allocate</td><td>[CWE-770](https://cwe.mitre.org/data/definitions/770.html)</td><td>(Missing Code, Verify, Wrong Value) →<br>→ (Wrong Size, Allocate, Memory Overflow)</td></tr><tr><td>
[CVE-2022-22150](https://nvd.nist.gov/vuln/detail/CVE-2022-22150)</td><td>8.8</td><td>MUS</td><td>Clear</td><td>[CWE-460](https://cwe.mitre.org/data/definitions/460.html)</td><td>(Missing Code/Erroneous Code, Deallocate, Memory Leak)</td></tr><tr><td>																									
[CVE-2018-18924](https://nvd.nist.gov/vuln/detail/CVE-2018-18924)</td><td>8.8</td><td>MUS</td><td>Clear</td><td rowspan="9" valign="middle">[CWE-459](https://cwe.mitre.org/data/definitions/459.html)</td><td rowspan="9" valign="middle">(Erroneous Code, Clear, Not Cleared Object)</td></tr><tr><td>
[CVE-2021-37089](https://nvd.nist.gov/vuln/detail/CVE-2021-37089)</td><td>7.8</td><td>MUS</td><td>Clear</td></tr><td>
[CVE-2018-19961](https://nvd.nist.gov/vuln/detail/CVE-2018-19961)</td><td>7.8</td><td>MUS</td><td>Clear</td></tr><td>
[CVE-2018-18281](https://nvd.nist.gov/vuln/detail/CVE-2018-18281)</td><td>7.8</td><td>MUS</td><td>Clear</td></tr><td>
[CVE-2021-45706](https://nvd.nist.gov/vuln/detail/CVE-2021-45706)</td><td>7.5</td><td>MUS</td><td>Clear</td></tr><td>
[CVE-2021-45330](https://nvd.nist.gov/vuln/detail/CVE-2021-45330)</td><td>7.5</td><td>MUS</td><td>Clear</td></tr><td>
[CVE-2021-32928](https://nvd.nist.gov/vuln/detail/CVE-2021-32928)</td><td>7.5</td><td>MUS</td><td>Clear</td></tr><td>
[CVE-2020-13451](https://nvd.nist.gov/vuln/detail/CVE-2020-13451)</td><td>7.5</td><td>MUS</td><td>Clear</td></tr><td>
[CVE-2019-11514](https://nvd.nist.gov/vuln/detail/CVE-2019-11514)</td><td>7.5</td><td>MUS</td><td>Clear</td></tr><td>																									
[CVE-2022-22086](https://nvd.nist.gov/vuln/detail/CVE-2022-22086)</td><td>10</td><td>MMN</td><td>Deallocate</td><td rowspan="8" valign="middle">[CWE-415](https://cwe.mitre.org/data/definitions/415.html)</td><td rowspan="8" valign="middle">(Erroneous Code, Deallocate, Double Free)</td></tr><tr><td>
[CVE-2022-20127](https://nvd.nist.gov/vuln/detail/CVE-2022-20127)</td><td>10</td><td>MMN</td><td>Deallocate</td></tr><td>
[CVE-2021-37120](https://nvd.nist.gov/vuln/detail/CVE-2021-37120)</td><td>10</td><td>MMN</td><td>Deallocate</td></tr><td>
[CVE-2021-1910](https://nvd.nist.gov/vuln/detail/CVE-2021-1910)</td><td>10</td><td>MMN</td><td>Deallocate</td></tr><td>
[CVE-2020-8432](https://nvd.nist.gov/vuln/detail/CVE-2020-8432)</td><td>10</td><td>MMN</td><td>Deallocate</td></tr><td>
[CVE-2019-15504](https://nvd.nist.gov/vuln/detail/CVE-2019-15504)</td><td>10</td><td>MMN</td><td>Deallocate</td></tr><td>
[CVE-2018-20961](https://nvd.nist.gov/vuln/detail/CVE-2018-20961)</td><td>10</td><td>MMN</td><td>Deallocate</td></tr><td>
[CVE-2018-0101](https://nvd.nist.gov/vuln/detail/CVE-2018-0101)</td><td>10</td><td>MMN</td><td>Deallocate</td></tr><td>																									
[CVE-2020-6016](https://nvd.nist.gov/vuln/detail/CVE-2020-6016)</td><td>10</td><td>MMN</td><td>Deallocate</td><td>[CWE-590](https://cwe.mitre.org/data/definitions/590.html)</td><td>(Mismatched Operation, Deallocate, Object Corruption)</td></tr><tr><td>																									
[CVE-2020-0103](https://nvd.nist.gov/vuln/detail/CVE-2020-0103)</td><td>10</td><td>MMN</td><td>Deallocate</td><td>[CWE-763](https://cwe.mitre.org/data/definitions/763.html)</td><td>(Mismatched Operation, Deallocate, Object Corruption)</td></tr><tr><td>																									
[CVE-2022-28350](https://nvd.nist.gov/vuln/detail/CVE-2022-28350)</td><td>10</td><td>MUS</td><td>Dereference</td><td rowspan="14" valign="middle">[CWE-416](https://cwe.mitre.org/data/definitions/416.html)</td><td rowspan="14" valign="middle">(Dangling Pointer, Read/Write/Dereference, Use After Free)</td></tr><tr><td>
[CVE-2022-28349](https://nvd.nist.gov/vuln/detail/CVE-2022-28349)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2022-28348](https://nvd.nist.gov/vuln/detail/CVE-2022-28348)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2022-21806](https://nvd.nist.gov/vuln/detail/CVE-2022-21806)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2021-37045](https://nvd.nist.gov/vuln/detail/CVE-2021-37045)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2021-21941](https://nvd.nist.gov/vuln/detail/CVE-2021-21941)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2021-21941](https://nvd.nist.gov/vuln/detail/CVE-2021-21941)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2021-1976](https://nvd.nist.gov/vuln/detail/CVE-2021-1976)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2020-9633](https://nvd.nist.gov/vuln/detail/CVE-2020-9633)</td><td>10</td><td>MUS</td><td>Dereference</td></tr><td>
[CVE-2022-28350](https://nvd.nist.gov/vuln/detail/CVE-2022-28350)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>
[CVE-2022-28349](https://nvd.nist.gov/vuln/detail/CVE-2022-28349)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>
[CVE-2022-28348](https://nvd.nist.gov/vuln/detail/CVE-2022-28348)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>
[CVE-2022-21806](https://nvd.nist.gov/vuln/detail/CVE-2022-21806)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>
[CVE-2021-37045](https://nvd.nist.gov/vuln/detail/CVE-2021-37045)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>																									
[CVE-2021-1946](https://nvd.nist.gov/vuln/detail/CVE-2021-1946)</td><td>10</td><td>MUS</td><td>Dereference</td><td>[CWE-476](https://cwe.mitre.org/data/definitions/476.html)</td><td>(NULL Pointer, Dereference, NULL Pointer Dereference)</td></tr><tr><td>																									
[CVE-2021-1829](https://nvd.nist.gov/vuln/detail/CVE-2021-1829)</td><td>10</td><td>MUS</td><td>Dereference</td><td>[CWE-843](https://cwe.mitre.org/data/definitions/843.html)</td><td>(Wrong Object Type Resolved, Coerce, Wrong Type)
→<br>→ (Casted Pointer, Read/Write/Dereference, Type Confusion)</td></tr><tr><td>																									
[CVE-2019-15900](https://nvd.nist.gov/vuln/detail/CVE-2019-15900)</td><td>10</td><td>MUS</td><td>Initalize Object</td><td rowspan="9" valign="middle">[CWE-908](https://cwe.mitre.org/data/definitions/908.html)</td><td rowspan="9" valign="middle">(Missing Code, Initialize Object, Uninitialized Object) →<br>→ (Uninitialized Object, . . . , . . . )</td></tr><tr><td>
[CVE-2019-14052](https://nvd.nist.gov/vuln/detail/CVE-2019-14052)</td><td>10</td><td>MUS</td><td>Initalize Object</td></tr><td>
[CVE-2019-10541](https://nvd.nist.gov/vuln/detail/CVE-2019-10541)</td><td>10</td><td>MUS</td><td>Initalize Object</td></tr><td>
[CVE-2021-1619](https://nvd.nist.gov/vuln/detail/CVE-2021-1619)</td><td>9.8</td><td>MUS</td><td>Initalize Object</td></tr><td>
[CVE-2019-9805](https://nvd.nist.gov/vuln/detail/CVE-2019-9805)</td><td>9.8</td><td>MUS</td><td>Initalize Object</td></tr><td>
[CVE-2019-7321](https://nvd.nist.gov/vuln/detail/CVE-2019-7321)</td><td>9.8</td><td>MUS</td><td>Initalize Object</td></tr><td>
[CVE-2019-5067](https://nvd.nist.gov/vuln/detail/CVE-2019-5067)</td><td>9.8</td><td>MUS</td><td>Initalize Object</td></tr><td>
[CVE-2019-12730](https://nvd.nist.gov/vuln/detail/CVE-2019-12730)</td><td>9.8</td><td>MUS</td><td>Initalize Object</td></tr><td>
[CVE-2019-0006](https://nvd.nist.gov/vuln/detail/CVE-2019-0006)</td><td>9.8</td><td>MUS</td><td>Initalize Object</td></tr><td>																									
[CVE-2017-13715](https://nvd.nist.gov/vuln/detail/CVE-2017-13715)</td><td>10</td><td>MUS</td><td>Initalize Object</td><td>[CWE-665](https://cwe.mitre.org/data/definitions/665.html)</td><td>(Missing Code/Erroneous Code, Initialize Object, Uninitialized Object)</td></tr><tr><td>																									
[CVE-2021-28216](https://nvd.nist.gov/vuln/detail/CVE-2021-28216)</td><td>4.6</td><td>MAD</td><td>Initalize Pointer</td><td>[CWE-587](https://cwe.mitre.org/data/definitions/587.html)</td><td>(Hard Coded Address, Initialize/Reassign, Wild Pointer)</td></tr><tr><td>																									
[CVE-2022-20238](https://nvd.nist.gov/vuln/detail/CVE-2022-20238)</td><td>10</td><td>MUS</td><td>Read</td><td rowspan="4" valign="middle">[CWE-119](https://cwe.mitre.org/data/definitions/119.html)</td><td rowspan="4" valign="middle">(Missing Code, Verify, Wrong Value) →<br>→ (Wrong Index, Reassign, Over Bounds Pointer/Under Bounds Pointer) →<br>→ (Over Bounds Pointer/Under Bounds Pointer, Read/Write, Buffer Overflow/Buffer Underflow/Buffer Over-Read/Buffer Under-Read)</td></tr><tr><td>
[CVE-2021-40393](https://nvd.nist.gov/vuln/detail/CVE-2021-40393)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>
[CVE-2021-39708](https://nvd.nist.gov/vuln/detail/CVE-2021-39708)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>
[CVE-2021-27692](https://nvd.nist.gov/vuln/detail/CVE-2021-27692)</td><td>10</td><td>MUS</td><td>Read</td></tr><td>																									
[CVE-2021-40050](https://nvd.nist.gov/vuln/detail/CVE-2021-40050)</td><td>10</td><td>MUS</td><td>Read</td><td>[CWE-125](https://cwe.mitre.org/data/definitions/125.html)</td><td>(Erroneous Code, Calculate, Wrong Result) →<br>→ (Wrong Index, Reposition, Over Bounds Pointer/Under Bounds Pointer) →<br>→ (Over Bounds Pointer/Under Bounds Pointer, Read, Buffer Over-Read/Buffer Under-Read)</td></tr><tr><td>																									
[CVE-2022-41837](https://nvd.nist.gov/vuln/detail/CVE-2022-41837)</td><td>9.8</td><td>MAD</td><td>Reassign</td><td rowspan="2" valign="middle">[CWE-562](https://cwe.mitre.org/data/definitions/562.html)</td><td rowspan="2" valign="middle">(Erroneous Code, Reassign, Wild Pointer)</td></tr><tr><td>
[CVE-2021-21798](https://nvd.nist.gov/vuln/detail/CVE-2021-21798)</td><td>8.8</td><td>MAD</td><td>Reassign</td></tr><td>																									
[CVE-2021-34792](https://nvd.nist.gov/vuln/detail/CVE-2021-34792)</td><td>8.6</td><td>MAD</td><td>Reassign</td><td rowspan="7" valign="middle">[CWE-401](https://cwe.mitre.org/data/definitions/401.html)</td><td rowspan="7" valign="middle">(Single Owned Address, Reassign, Memory Leak)</td></tr><tr><td>
[CVE-2021-34698](https://nvd.nist.gov/vuln/detail/CVE-2021-34698)</td><td>8.6</td><td>MAD</td><td>Reassign</td></tr><td>
[CVE-2021-1387](https://nvd.nist.gov/vuln/detail/CVE-2021-1387)</td><td>8.6</td><td>MAD</td><td>Reassign</td></tr><td>
[CVE-2021-1313](https://nvd.nist.gov/vuln/detail/CVE-2021-1313)</td><td>8.6</td><td>MAD</td><td>Reassign</td></tr><td>
[CVE-2020-3572](https://nvd.nist.gov/vuln/detail/CVE-2020-3572)</td><td>8.6</td><td>MAD</td><td>Reassign</td></tr><td>
[CVE-2020-3373](https://nvd.nist.gov/vuln/detail/CVE-2020-3373)</td><td>8.6</td><td>MAD</td><td>Reassign</td></tr><td>
[CVE-2020-3203](https://nvd.nist.gov/vuln/detail/CVE-2020-3203)</td><td>8.6</td><td>MAD</td><td>Reassign</td></tr><td>																									
[CVE-2021-34720](https://nvd.nist.gov/vuln/detail/CVE-2021-34720)</td><td>8.6</td><td>MAD</td><td>Reassign</td><td>[CWE-771](https://cwe.mitre.org/data/definitions/771.html)</td><td>(Single Owned Address, Reassign, Memory Leak)</td></tr><tr><td>																									
[CVE-2020-6112](https://nvd.nist.gov/vuln/detail/CVE-2020-6112)</td><td>8.8</td><td>MAD</td><td>Reposition</td><td rowspan="9" valign="middle">[CWE-823](https://cwe.mitre.org/data/definitions/823.html)</td><td rowspan="9" valign="middle"><ul><li>(Missing Code, Verify, Wrong Value) →<br>→  (Wrong Index, Resposition, Over Bounds Pointer)<br><li>(Erroneous Code, Calculate, Wrong Result) →<br>→ (Wrong Index, Resposition, Over Bounds Pointer)</ul></td></tr><tr><td>
[CVE-2022-0685](https://nvd.nist.gov/vuln/detail/CVE-2022-0685)</td><td>8.4</td><td>MAD</td><td>Reposition</td></tr><td>
[CVE-2022-0614](https://nvd.nist.gov/vuln/detail/CVE-2022-0614)</td><td>8.4</td><td>MAD</td><td>Reposition</td></tr><td>
[CVE-2022-0554](https://nvd.nist.gov/vuln/detail/CVE-2022-0554)</td><td>8.4</td><td>MAD</td><td>Reposition</td></tr><td>
[CVE-2022-0729](https://nvd.nist.gov/vuln/detail/CVE-2022-0729)</td><td>7.8</td><td>MAD</td><td>Reposition</td></tr><td>
[CVE-2020-13573](https://nvd.nist.gov/vuln/detail/CVE-2020-13573)</td><td>7.5</td><td>MAD</td><td>Reposition</td></tr><td>
[CVE-2016-2161](https://nvd.nist.gov/vuln/detail/CVE-2016-2161)</td><td>7.5</td><td>MAD</td><td>Reposition</td></tr><td>
[CVE-2021-1352](https://nvd.nist.gov/vuln/detail/CVE-2021-1352)</td><td>7.4</td><td>MAD</td><td>Reposition</td></tr><td>
[CVE-2021-3889](https://nvd.nist.gov/vuln/detail/CVE-2021-3889)</td><td>7.1</td><td>MAD</td><td>Reposition</td></tr><td>																										
[CVE-2021-3319](https://nvd.nist.gov/vuln/detail/CVE-2021-3319)</td><td>7.5</td><td>MAD</td><td>Reposition</td><td>[CWE-588](https://cwe.mitre.org/data/definitions/588.html)</td><td>(Erroneous Code, Cast, Wrong Type) →<br>→
(Casted Pointer, Read/Write/Dereference, Type Confusion)</td></tr><tr><td>																																			
[CVE-2022-32032](https://nvd.nist.gov/vuln/detail/CVE-2022-32032)</td><td>10</td><td>MUS</td><td>Write</td><td rowspan="8" valign="middle">[CWE-787](https://cwe.mitre.org/data/definitions/787.html)</td><td rowspan="8" valign="middle">(Hard Coded Address, Initialize/Reassign, Wild Pointer)</td></tr><tr><td>
[CVE-2022-30926](https://nvd.nist.gov/vuln/detail/CVE-2022-30926)</td><td>10</td><td>MUS</td><td>Write</td></tr><td>
[CVE-2022-30925](https://nvd.nist.gov/vuln/detail/CVE-2022-30925)</td><td>10</td><td>MUS</td><td>Write</td></tr><td>
[CVE-2022-30924](https://nvd.nist.gov/vuln/detail/CVE-2022-30924)</td><td>10</td><td>MUS</td><td>Write</td></tr><td>
[CVE-2022-30923](https://nvd.nist.gov/vuln/detail/CVE-2022-30923)</td><td>10</td><td>MUS</td><td>Write</td></tr><td>
[CVE-2022-30922](https://nvd.nist.gov/vuln/detail/CVE-2022-30922)</td><td>10</td><td>MUS</td><td>Write</td></tr><td>
[CVE-2022-30921](https://nvd.nist.gov/vuln/detail/CVE-2022-30921)</td><td>10</td><td>MUS</td><td>Write</td></tr><td>
[CVE-2022-30920](https://nvd.nist.gov/vuln/detail/CVE-2022-30920)</td><td>10</td><td>MUS</td><td>Write</td></tr><td>														
[CVE-2022-32454](https://nvd.nist.gov/vuln/detail/CVE-2022-32454)</td><td>10</td><td>MUS</td><td>Write</td><td>[CWE-121](https://cwe.mitre.org/data/definitions/121.html)</td><td>(Over Bounds Pointer/Under Bounds Pointer, Write,
Buffer Overflow/Buffer Underflow)</td></tr><tr><td>																									
[CVE-2022-31209](https://nvd.nist.gov/vuln/detail/CVE-2022-31209)</td><td>10</td><td>MUS</td><td>Write</td><td>[CWE-120](https://cwe.mitre.org/data/definitions/120.html)</td><td>(Missing Code, Verify, Wrong Value) →<br>→
(Wrong Size, Allocate, Not Enough Memory Allocated) →<br>→ (Not Enough Memory Allocated, Write, Buffer Overflow)</td></tr>

</table>