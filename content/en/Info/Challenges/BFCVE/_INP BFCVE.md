---
weight: 6
title: "_INP BFCVE"
---
# \_INP BFCVE Challenge <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

Let's start creating of a labeled dataset of input/output check related software security vulnerability specifications using BF's [input/output check bugs formalism (taxonomy and LL(1) formal grammar)](/BF/info/bf-classes/_inp/).

There are 70 736 input/output check related CVEs (as of August 2023). To start with, we query the CVE for entries with CWEs assigned by NVD, where the CWEs also map by operation to BF Input/Output Check classes. We then order them by their severity scores according to the [Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/) and select maximum thirty CVEs per operation -- thus reducing the count to the most severe CVEs per _INP BF operation . 

##### First set of steps:

1. Explore the CVEs listed below. Each one has input/output check related underlying weaknesses and was identified via the corresponding [CWE2BF mappings](/BF/info/bf-classes/_inp/cwe2bf/) and the CWE to CVE assignments by NVD.
2. Identify at least one CVE for wchich you can find the Bug Report, the Code with Bug, and the Code with Fix (locate the specific GitHub repository with the Diffs). See how these are listed for the examples in [BFCVE](BF/info/bf-cve/overview/) on the left. 

##### Second set of steps:

3. Get to know the [BF Input/Output Check Bugs Model](/BF/info/bf-classes/_inp/model/).
4. Get to know the taxonomies of the [BF Input/Output Check Classes](/BF/info/bf-classes/_inp/).
5. Get to know the [BF Tool](/BF/info/tools/bf-tool).
6. Collaborate on creating BF descriptions of your CVEs.
</br>
`Important Note:` Use the "NVD CWE" and "BF Chain(s) Indentifiable from NVD CWE" columns only as possibly useful guidance. In some cases, a listed CWE may be a wrongly assigned one by NVD, so please notify us if you encounter such. In some cases, the listed chains may be wrong or not the only possible, as the CWE information (from which they are retrieved) may be wrong or limited. 


##### Third set of steps:
7. Open in a text editor the .bfcve file where you saved the BF CVE description usign the BF Tool. 
8. Copy the entire content of the .bfcve file. This is your BF CVE specification in XML format.
9. Submit the copied .bfcve content and the links to the Bug Report, the Code with Bug, and the Code with Fix here: 

<div style="text-align:center">{{< button href="https://forms.gle/8gL4pev5XHqbpX6t5">}}Submit your BF CVE pecification {{< /button >}}</div>


<table border-collapse="collapse" border-left="1px solid black" border-right="1px solid black"><tr><td>

\_INP CVEs</td><td>CVSS</td><td>BF Class</td><td>BF Operation</td><td>NVD CWE</td><td border-collapse="collapse" border-left="1px solid black" border-right="1px solid black">BF Chain(s) Indentifiable from NVD CWE</td></tr><tr><td>

[CVE-2022-32054](https://nvd.nist.gov/vuln/detail/CVE-2022-32054)</td><td>10</td><td>DVL</td><td>Sanitize</td><td rowspan="3" valign="middle">[CWE-94](https://cwe.mitre.org/data/definitions/94.html)</td><td rowspan="3" valign="middle">(Missing Code/Erroneous Code, DVL Sanitize, Source Code Injection)</td></tr><tr><td>
[CVE-2023-1283](https://nvd.nist.gov/vuln/detail/CVE-2023-1283)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2023-2583](https://nvd.nist.gov/vuln/detail/CVE-2023-2583)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>

<!-- [CVE-2020-15568](https://nvd.nist.gov/vuln/detail/CVE-2020-15568)</td><td>10</td><td>DVL</td><td>Validate</td><td>[CWE-913](https://cwe.mitre.org/data/definitions/913.html)</td><td>I HAVE THIS UNDER DAT DCL</td></tr><tr><td> -->
                                                                                                                                                                                                        
[CVE-2022-30493](https://nvd.nist.gov/vuln/detail/CVE-2022-30493)</td><td>10</td><td>DVL</td><td>Sanitize</td><td>[CWE-89](https://cwe.mitre.org/data/definitions/89.html)</td><td>(Missing Code/Erroneous Code, DVL Sanitize, Query Injection)</td></tr><tr><td>

[CVE-2022-30329](https://nvd.nist.gov/vuln/detail/CVE-2022-30329)</td><td>10</td><td>DVL</td><td>Sanitize</td><td rowspan="20" valign="middle">[CWE-78](https://cwe.mitre.org/data/definitions/78.html)</td><td rowspan="20" valign="middle">(Missing Code/Erroneous Code, DVL Sanitize, Command Injection)</td></tr><tr><td>
[CVE-2022-30525](https://nvd.nist.gov/vuln/detail/CVE-2022-30525)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-30541](https://nvd.nist.gov/vuln/detail/CVE-2022-30541)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-30603](https://nvd.nist.gov/vuln/detail/CVE-2022-30603)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-31137](https://nvd.nist.gov/vuln/detail/CVE-2022-31137)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-31479](https://nvd.nist.gov/vuln/detail/CVE-2022-31479)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-31794](https://nvd.nist.gov/vuln/detail/CVE-2022-31794)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-31795](https://nvd.nist.gov/vuln/detail/CVE-2022-31795)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-32534](https://nvd.nist.gov/vuln/detail/CVE-2022-32534)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-32773](https://nvd.nist.gov/vuln/detail/CVE-2022-32773)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33189](https://nvd.nist.gov/vuln/detail/CVE-2022-33189)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33192](https://nvd.nist.gov/vuln/detail/CVE-2022-33192)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33193](https://nvd.nist.gov/vuln/detail/CVE-2022-33193)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33194](https://nvd.nist.gov/vuln/detail/CVE-2022-33194)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33195](https://nvd.nist.gov/vuln/detail/CVE-2022-33195)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33204](https://nvd.nist.gov/vuln/detail/CVE-2022-33204)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33205](https://nvd.nist.gov/vuln/detail/CVE-2022-33205)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33206](https://nvd.nist.gov/vuln/detail/CVE-2022-33206)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-33207](https://nvd.nist.gov/vuln/detail/CVE-2022-33207)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2023-2564](https://nvd.nist.gov/vuln/detail/CVE-2023-2564)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>

[CVE-2022-31311](https://nvd.nist.gov/vuln/detail/CVE-2022-31311)</td><td>10</td><td>DVL</td><td>Sanitize</td><td rowspan="3" valign="middle">[CWE-77](https://cwe.mitre.org/data/definitions/77.html)</td><td rowspan="3" valign="middle">(Missing Code/Erroneous Code, DVL Sanitize, Command Injection)</td></tr><tr><td>
[CVE-2022-31446](https://nvd.nist.gov/vuln/detail/CVE-2022-31446)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>
[CVE-2022-32449](https://nvd.nist.gov/vuln/detail/CVE-2022-32449)</td><td>10</td><td>DVL</td><td>Sanitize</td></tr><td>

[CVE-2023-3765](https://nvd.nist.gov/vuln/detail/CVE-2023-3765)</td><td>10</td><td>DVL</td><td>Sanitize</td><td>[CWE-36](https://cwe.mitre.org/data/definitions/36.html)</td><td>(Erroneous Code, DVL Sanitize, File Injection)</td></tr><tr><td>

[CVE-2023-1177](https://nvd.nist.gov/vuln/detail/CVE-2023-1177)</td><td>10</td><td>DVL</td><td>Sanitize</td><td>[CWE-29](https://cwe.mitre.org/data/definitions/29.html)</td><td>(Under Restrictive Policy, DVL Sanitize, File Injection)</td></tr><tr><td>

[CVE-2023-2356](https://nvd.nist.gov/vuln/detail/CVE-2023-2356)</td><td>10</td><td>DVL</td><td>Sanitize</td><td>[CWE-23](https://cwe.mitre.org/data/definitions/23.html)</td><td>(Under-Restrictive Policy, DVL Sanitize, File Injection)</td></tr><tr><td>

[CVE-2023-2356](https://nvd.nist.gov/vuln/detail/CVE-2023-2356)</td><td>10</td><td>DVL</td><td>Sanitize</td><td>[CWE-23](https://cwe.mitre.org/data/definitions/23.html)</td><td>(Under-Restrictive Policy, DVL Sanitize, File Injection)</td></tr><tr><td>

[CVE-2020-3847](https://nvd.nist.gov/vuln/detail/CVE-2020-3847)</td><td>10</td><td>DVR</td><td>Verify</td><td rowspan="51" valign="middle">[CWE-20](https://cwe.mitre.org/data/definitions/20.html)</td><td rowspan="51" valign="middle"><ul><li>(Missing Code/Erroneous Code, DVL Validate, Invalid Data)<br><li>(Missing Code/Eroneous Code, DVR Verify, Wrong Value/Incosnistent Value/Wrong Type)</ul></td></tr><tr><td>
[CVE-2020-6962](https://nvd.nist.gov/vuln/detail/CVE-2020-6962)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2020-6963](https://nvd.nist.gov/vuln/detail/CVE-2020-6963)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2020-8087](https://nvd.nist.gov/vuln/detail/CVE-2020-8087)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2020-8445](https://nvd.nist.gov/vuln/detail/CVE-2020-8445)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-1965](https://nvd.nist.gov/vuln/detail/CVE-2021-1965)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-21985](https://nvd.nist.gov/vuln/detail/CVE-2021-21985)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-25437](https://nvd.nist.gov/vuln/detail/CVE-2021-25437)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-26606](https://nvd.nist.gov/vuln/detail/CVE-2021-26606)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-26607](https://nvd.nist.gov/vuln/detail/CVE-2021-26607)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-26622](https://nvd.nist.gov/vuln/detail/CVE-2021-26622)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-26624](https://nvd.nist.gov/vuln/detail/CVE-2021-26624)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-32974](https://nvd.nist.gov/vuln/detail/CVE-2021-32974)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-33527](https://nvd.nist.gov/vuln/detail/CVE-2021-33527)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-43033](https://nvd.nist.gov/vuln/detail/CVE-2021-43033)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-44734](https://nvd.nist.gov/vuln/detail/CVE-2021-44734)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-24086](https://nvd.nist.gov/vuln/detail/CVE-2022-24086)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-24720](https://nvd.nist.gov/vuln/detail/CVE-2022-24720)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-25163](https://nvd.nist.gov/vuln/detail/CVE-2022-25163)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-27228](https://nvd.nist.gov/vuln/detail/CVE-2022-27228)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-29499](https://nvd.nist.gov/vuln/detail/CVE-2022-29499)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-29539](https://nvd.nist.gov/vuln/detail/CVE-2022-29539)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-32534](https://nvd.nist.gov/vuln/detail/CVE-2022-32534)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2020-15181](https://nvd.nist.gov/vuln/detail/CVE-2020-15181)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-24647](https://nvd.nist.gov/vuln/detail/CVE-2020-24647)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-24649](https://nvd.nist.gov/vuln/detail/CVE-2020-24649)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-24679](https://nvd.nist.gov/vuln/detail/CVE-2020-24679)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-25765](https://nvd.nist.gov/vuln/detail/CVE-2020-25765)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-25787](https://nvd.nist.gov/vuln/detail/CVE-2020-25787)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-3847](https://nvd.nist.gov/vuln/detail/CVE-2020-3847)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-6962](https://nvd.nist.gov/vuln/detail/CVE-2020-6962)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-6963](https://nvd.nist.gov/vuln/detail/CVE-2020-6963)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-8087](https://nvd.nist.gov/vuln/detail/CVE-2020-8087)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2020-8445](https://nvd.nist.gov/vuln/detail/CVE-2020-8445)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-1965](https://nvd.nist.gov/vuln/detail/CVE-2021-1965)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-21985](https://nvd.nist.gov/vuln/detail/CVE-2021-21985)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-25437](https://nvd.nist.gov/vuln/detail/CVE-2021-25437)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-26606](https://nvd.nist.gov/vuln/detail/CVE-2021-26606)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-26607](https://nvd.nist.gov/vuln/detail/CVE-2021-26607)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-26622](https://nvd.nist.gov/vuln/detail/CVE-2021-26622)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-26624](https://nvd.nist.gov/vuln/detail/CVE-2021-26624)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-32974](https://nvd.nist.gov/vuln/detail/CVE-2021-32974)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-33527](https://nvd.nist.gov/vuln/detail/CVE-2021-33527)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-43033](https://nvd.nist.gov/vuln/detail/CVE-2021-43033)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2021-44734](https://nvd.nist.gov/vuln/detail/CVE-2021-44734)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2022-24086](https://nvd.nist.gov/vuln/detail/CVE-2022-24086)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2022-24720](https://nvd.nist.gov/vuln/detail/CVE-2022-24720)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2022-25163](https://nvd.nist.gov/vuln/detail/CVE-2022-25163)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2022-27228](https://nvd.nist.gov/vuln/detail/CVE-2022-27228)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2022-29499](https://nvd.nist.gov/vuln/detail/CVE-2022-29499)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2022-29539](https://nvd.nist.gov/vuln/detail/CVE-2022-29539)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>
[CVE-2022-32534](https://nvd.nist.gov/vuln/detail/CVE-2022-32534)</td><td>10</td><td>DVL</td><td>Validate</td></tr><td>

[CVE-2020-3673](https://nvd.nist.gov/vuln/detail/CVE-2020-3673)</td><td>10</td><td>DVR</td><td>Verify</td><td rowspan="3" valign="middle">[CWE-129](https://cwe.mitre.org/data/definitions/129.html)</td><td rowspan="3" valign="middle">(Missing Code/Erroneous Code, DVR Verify, Wrong Value)</td></tr><tr><td>
[CVE-2021-1933](https://nvd.nist.gov/vuln/detail/CVE-2021-1933)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-22333](https://nvd.nist.gov/vuln/detail/CVE-2021-22333)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>

[CVE-2021-21950](https://nvd.nist.gov/vuln/detail/CVE-2021-21950)</td><td>10</td><td>DVR</td><td>Verify</td><td rowspan="4" valign="middle">[CWE-1284](https://cwe.mitre.org/data/definitions/1284.html)</td><td rowspan="4" valign="middle">(Missing Code/Erroneous Code, DVR Verify, Wrong Value/Inconsistent Value)</td></tr><tr><td>
[CVE-2021-21951](https://nvd.nist.gov/vuln/detail/CVE-2021-21951)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2021-21960](https://nvd.nist.gov/vuln/detail/CVE-2021-21960)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>
[CVE-2022-20699](https://nvd.nist.gov/vuln/detail/CVE-2022-20699)</td><td>10</td><td>DVR</td><td>Verify</td></tr><td>

</table>