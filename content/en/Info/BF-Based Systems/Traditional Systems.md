---
weight: 2
bookCollapseSection: false
title: "Traditional Systems"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF–Based Traditional Systems <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

A traditional BF-based vulnerability system identifies a vulnerability in code (e.g., via static and dynamic analysis, or simulation/emulation) and specifies it as a chain of BF Weaknesses (see Figure 1). 

{{< img src="images/BF-Based-Traditional-Vulnerability-System.svg" height="1600" caption="Figure 1. BF-Based Traditional Vulnerability System" >}}

The steps from the dashed rectangle are BF specific.

* Identify a real-world vulnerability described in vulnerability reports and repositories (e.g., CVE, NVD, CWE, etc.) that has also disclosed code with fix (GitHub, etc.).
* Utilize the BF Vulnerability structure via the BFVUL APIs.
* Load the BF Taxonomy, Operation Flow Graphs, Valid Relations and Valid Transitions matrices via the BF Taxonomy, and BF Formal Language (BFFL) APIs.
* Analyze Vulnerability Descriptions and Code.
* Identify BF Failure and BF Final Error or BF Weakness (at Sink, Source, etc.).
* Generate Partial BFCVE specifications via the BFCVEPre BFCVEs Partial API.
* Generate BF Backward State Tree via the BFCVEPre BFBackward API.
* Identify the underlying BF Weaknesses chain via static/dynamic analysis or simulation/emulation.
* Create/Refine BF Specification via the BF Tool.
* Validate/Verify BF Specification via the BFFLL BF Parser API.
* Generate BF Specification in Machine-Readable Formats via the BFVUL BFVULs, Files, and Types APIs.
* Generate BF Specification in Graphical Formats via the BFVUL Graphs API.
* Generate BF Description of the BF Vulnerability specification via the BFVUL BF Description API.
_______________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>