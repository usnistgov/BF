---
weight: 3
bookCollapseSection: false
title: "BFCVE API"
---
# BF CVE API <br/>_`Irena Bojanova, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

BFCVE Version 1.0 comprizes the formal BF CVE specifications in XML format. IT's corresponding .bfcve files are also available at [https://github.com/ibojanova/BFCVE-Dataset/tree/main/BFCVE](https://github.com/ibojanova/BFCVE-Dataset/tree/main/BFCVE).

To retrieve examplary formal BFCVE specifications use:

[https://samate.nist.gov/services/BF/BFCVE/api](https://samate.nist.gov/services/BF/BFCVE/api)

The BFCVE API queries the BFCVE specifications by BF taxon values -- e.g., ClassType, Class, Operation, Operand, Cause (bug or fault), Conseqeunce (error or finalError), Operation Attribute, Operand Attribute. 
Patrameters -- allow filtering by any BF taxon value -- e.g.,:
To filter the BFCVE use as parameters ClassType, Class, Cause (bug or fault), Conseqeunce (error or finalError), Operation, Operand, Operation Attribute, Operand Attribute, e.g.,:
<!-- site -->

[https://samate.nist.gov/services/BF/BFCVE/api?classtype=_MEM](https://samate.nist.gov/services/BF/BFCVE/api?classtype=_MEM)

[https://samate.nist.gov/services/BF/BFCVE/api?cause=Wrong+Size](https://samate.nist.gov/services/BF/BFCVE/api?cause=Wrong+Size)

[https://samate.nist.gov/services/BF/BFCVE/api?operation=Read](https://samate.nist.gov/services/BF/BFCVE/api?operation=Read)

[https://samate.nist.gov/services/BF/BFCVE/api?failure=ACE](https://samate.nist.gov/services/BF/BFCVE/api?failure=ACE)

BFCVE could be quesried alsby by programming language, CVSS score (//to be added//), ...:

[https://samate.nist.gov/services/BF/BFCVE/api?language=C](https://samate.nist.gov/services/BF/BFCVE/api?language=C)

</br>
CITATION </br>
_____________________________________________________________</br></br>
Irena Bojanova, NIST Bugs Framework (BF) API, Accessed: <span id="currentDate"></span>. [Online]. Available: [https://usnistgov.github.io/BF/info/apis/bf-api](https://usnistgov.github.io/BF/info/apis/bf-api).
</br></br>
//more explanations to be added//



<!-- [https://samate.nist.gov/BF/api/bfcve/](https://samate.nist.gov/BF/api/bfcve/) -->
<!-- samate-internal.nist.gov/BF/api/cve/CVE-111 -->
