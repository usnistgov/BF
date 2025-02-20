---
weight: 3
bookCollapseSection: false
title: "BFCVE API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF CVE API <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

The BFCVE API generates and filters BF CVE specifications in XML (JSON to be added) format. 

To retrieve an EXCERPT of the formal BFCVE specifications use:

[https://samate.nist.gov/services/BF/BFCVE/api](https://samate.nist.gov/services/BF/BFCVE/api)

The BFCVE API queries the BFCVE specifications by BF taxon values -- e.g., ClassType, Class, Operation, Operand, Cause (bug or fault), Conseqeunce (error or finalError), Operation Attribute, Operand Attribute. 

To filter the BFCVE use parameters such as Cause (bug or fault), Conseqeunce (error or finalError), Operation, Operand, Operation Attribute, Operand Attribute, CVE ID -- e.g.,:
<!-- site -->

[https://samate.nist.gov/services/BF/BFCVE/api?classtype=_MEM](https://samate.nist.gov/services/BF/BFCVE/api?classtype=_MEM)

[https://samate.nist.gov/services/BF/BFCVE/api?cause=Wrong+Size](https://samate.nist.gov/services/BF/BFCVE/api?cause=Wrong+Size)

[https://samate.nist.gov/services/BF/BFCVE/api?operation=Read](https://samate.nist.gov/services/BF/BFCVE/api?operation=Read)

[https://samate.nist.gov/services/BF/BFCVE/api?failure=ACE](https://samate.nist.gov/services/BF/BFCVE/api?failure=ACE)

[https://samate.nist.gov/services/BF/BFCVE/api?id=CVE-2014-0160](https://samate.nist.gov/services/BF/BFCVE/api?id=CVE-2014-0160)

BFCVE could be quesried alsby by programming language, CVSS score (//to be added//), ...:

[https://samate.nist.gov/services/BF/BFCVE/api?language=C](https://samate.nist.gov/services/BF/BFCVE/api?language=C)


______________________________________
Provide your indended BF use via the [BF Form](https://forms.gle/SRZyva5Vn1i4dQQ2A).



<!-- The corresponding .bfcve files are also available at [https://github.com/ibojanova/BFCVE-Dataset/tree/main/BFCVE](https://github.com/ibojanova/BFCVE-Dataset/tree/main/BFCVE). They can be open with the [https://usnistgov.github.io/BF/info/tools/bf-tool](BF Tool). -->


<!-- [https://samate.nist.gov/BF/api/bfcve/](https://samate.nist.gov/BF/api/bfcve/) -->
<!-- samate-internal.nist.gov/BF/api/cve/CVE-111 -->

