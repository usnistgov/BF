---
weight: 3
bookCollapseSection: false
title: "BFCVE API"
---
# BF CVE API <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

BFCVE Version 1.0 comprizes the formal BF CVE specifications in XML format. 

To retrieve examplary formal BFCVE specifications use:

[https://samate.nist.gov/services/BF/BFCVE/api](https://samate.nist.gov/services/BF/BFCVE/api)

The BFCVE API queries the BFCVE specifications by BF taxon values -- e.g., ClassType, Class, Operation, Operand, Cause (bug or fault), Conseqeunce (error or finalError), Operation Attribute, Operand Attribute. 
Patrameters -- allow filtering by any BF taxon value -- e.g.,:
To filter the BFCVE use as parameters ClassType, Class, Cause (bug or fault), Conseqeunce (error or finalError), Operation, Operand, Operation Attribute, Operand Attribute, CVE IDe.g.,:
<!-- site -->

[https://samate.nist.gov/services/BF/BFCVE/api?classtype=_MEM](https://samate.nist.gov/services/BF/BFCVE/api?classtype=_MEM)

[https://samate.nist.gov/services/BF/BFCVE/api?cause=Wrong+Size](https://samate.nist.gov/services/BF/BFCVE/api?cause=Wrong+Size)

[https://samate.nist.gov/services/BF/BFCVE/api?operation=Read](https://samate.nist.gov/services/BF/BFCVE/api?operation=Read)

[https://samate.nist.gov/services/BF/BFCVE/api?failure=ACE](https://samate.nist.gov/services/BF/BFCVE/api?failure=ACE)

[https://samate.nist.gov/services/BF/BFCVE/api?id=CVE-2014-0160](https://samate.nist.gov/services/BF/BFCVE/api?id=CVE-2014-0160)

BFCVE could be quesried alsby by programming language, CVSS score (//to be added//), ...:

[https://samate.nist.gov/services/BF/BFCVE/api?language=C](https://samate.nist.gov/services/BF/BFCVE/api?language=C)

___________________________

The corresponding .bfcve files are also available at [https://github.com/ibojanova/BFCVE-Dataset/tree/main/BFCVE](https://github.com/ibojanova/BFCVE-Dataset/tree/main/BFCVE). They can be open with the [https://usnistgov.github.io/BF/info/tools/bf-tool](BF Tool).

</br>
CITATION 

_____________________________________________________________

Bojanova, I., Bugs Framework (BF) -- BFCVE API, NIST. Accessed: <span id="currentDate"></span>. [Online]. Available: [https://usnistgov.github.io/BF/info/apis/bf-api](https://usnistgov.github.io/BF/info/apis/bf-api).



<!-- [https://samate.nist.gov/BF/api/bfcve/](https://samate.nist.gov/BF/api/bfcve/) -->
<!-- samate-internal.nist.gov/BF/api/cve/CVE-111 -->

