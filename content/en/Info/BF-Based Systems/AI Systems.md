---
weight: 3
bookCollapseSection: false
title: "BF for AI"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF–Based ML/AI Systems <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

> From AI@NIST Day 2025:
> * AI can reinvent Cybersecurity R&D — but only if we do it right.
> * Today, we focus on mitigating vulnerabilities, not fixing their root causes.
> * Why? 
> → Because human-written bug reports and vulnerability descriptions — narratives AI cannot fully understand — remain our primary source.
> * The result
> → Assurance tools often disagree, and AI security tools may hallucinate.
> * I’m Irena Bojanova from the Information Technology Laboratory (ITL) at NIST. I have created the NIST Bugs Framework — BF — a formal system that defines vulnerabilities as chains of weaknesses leading to failures. BF is not simply a database, but it may comprehensively augment the [Common Vulnerabilities and Exposures](https://www.cve.org/) and the [National Vulnerability Database (NVD)](https://nvd.nist.gov/). 
> * BF makes vulnerabilities machine-understandable. With it, AI can generate precise vulnerability descriptions, bug reports, and security rules — forming the basis for informed counterintelligence measures.*

A BF-Based AI Vulnerability System utilizes ML/AI-enabled capabilities to identify bugs and detect, analyze, prioritize, and resolve or mitigate vulnerabilities (i.e., fix the bug or a fault of each vulnerability). The automated analysis via AI models requires comprehensively labeled vulnerability datasets.

A BF Vulnerability AI Model is trained (see Figure 1) via BF data, vulnerable code, and ready BF vulnerability specifications. The steps from the dashed rectangle are BF specific.
<br/>
{{< img src="images/Construct-Adapt-a-BF-Based-Vulnerability-AI-Model.svg" height="750" caption="Figure 1. Construct/Adapt a BF-Based Vulnerability AI Model">}}

* BF Context Data is formed by the BF Security Concepts Definitions, BF Taxonomy, BF Taxon Definitions, and BF Semantic Graphs and Matrices.
* BF Training Dataset is formed by vulnerability source code and preliminary developed BF Vulnerability Specifications

BF-based AI systems (see Figure 2) utilize BF AI Models to generate BF Specifications, which are then validated and verified by the BF Parser, and then validated against the generated BF Partial CVE specifications and Backward State Tree. The rest of the steps on Figure 2 are the same as for BF-based traditional systems (see Figure 1 in BF–Based Traditional Systems). The steps from the dashed rectangle are BF specific.
<br/>
{{< img src="images/BF-Based-ML-AI-Vulnerability-System.svg" height="750" caption="Figure 2. BF-Based ML/AI Vulnerability System" >}}

<hr />

See also:

{{< img src="images/AI@NIST-Day-2025-BF-AI-Systems-Irena-Bojanova-02-26-2026.svg" caption="Figure 3. BF–Based ML/AI Systems for Formal Hardware & Software Vulnerability Specification" >}}

{{< img src="images/NVD-BF-ITL-Science-Day-2025-Irena Bojanova-03-26-2026.svg" caption="Figure 4. NVD–BF (or NVD<sup>BF</sup>) Formal Vulnerability Classifications Platform" >}}

_______________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>