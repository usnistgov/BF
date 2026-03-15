---
weight: 1
bookCollapseSection: false
title: "Overview"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF–Based Systems<br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BF supports the development of BF-based systems that solve specific cybersecurity-related problems – bug identification and triaging, vulnerability detection, analysis, prioritization, reporting, and resolution or mitigation. 

The processes for the development of a BF-based system involve the following:
* Bug Identification: Utilize steps from the methodology for the creation of BFCVE and BFVUL datasets, and identify and label the root cause of the vulnerability. 

* Vulnerability Detection: Utilize steps from the methodology for the creation of BFCVE and BFVUL datasets, and identify and label the weaknesses underlying the vulnerability. This may include automated analysis via static and dynamic code analysis tools, and simulation or emulation algorithms that reflect the BF methodologies. Given the formal specification of code and the BF definitions of weakness, vulnerability, and failure, formal methods may also be applied to detect vulnerabilities. 

AI and FM-enabled capabilities could be used to identify bugs and detect, analyze, prioritize, and resolve or mitigate vulnerabilities (i.e., fix the bug or a fault of each vulnerability, respectively) to secure critical infrastructure and supply chains.

* Report Generation: Utilize steps from the methodology for the creation of BFCVE and BFVUL datasets, and generate a BF formal specification, natural language description, and machine-readable and graphical representations of the vulnerability.

An LLM may also be prompted to generate the report for that CVE given a CVE description, examples, reports, other references, the code with bug, the code with fix, BF security concept definitions, machine-readable representations of BF taxonomies (including definitions for the taxons and taxon types), and exemplary BF specifications (i.e., entries from the BFCVE dataset).
* Severity and Prioritization: Determine the vulnerability severity score, and assess whether it needs to be resolved or mitigated urgently. This would be based on the BF-labeled weaknesses and operation and operand attributes per weakness and may include analysis of data from services and repositories, such as the EPSS, CVSS, and KEV.

* Resolution: Determine how the vulnerability should be resolved based on fixing the identified and BF-labeled bug of the vulnerability chain or more than one bug in the cases of converging vulnerabilities.

* Mitigations: Determine the possible ways to mitigate the detected vulnerability based on fixing one of the BF-labeled faults through the vulnerability chain. 
BF-based systems could be traditional (rule-based) systems or specialized ML/AI (model-based) or FM (formal methods) systems. The processes for the creation BF datasets of BF definitions, taxonomies, secure coding principles/ security riles, weakness specifications, vulnerability specifications, vulnerability classifications are used to create the input data for a traditional BF-based system or the training and validating data for the training process that transforms a generic AI model into a particular specialized AI system. The BF processes for the expression of the BF taxonomy and specifications create the output from the first two BF-based systems. A BF-based FM system, in turn, proves the correctness or existence of bugs/weaknesses and related vulnerabilities.

_______________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>