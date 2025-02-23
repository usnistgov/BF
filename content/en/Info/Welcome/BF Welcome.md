---
weight: 2
bookCollapseSection: false
title: "BF Welcome"
url: /
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

<!-- <l style="color: #7D3368; font-size:32px">xxx</> -->
<!-- <div style="text-indent: 40px"> </div>-->
# NIST Bugs Framework (BF): <br> <l style="color: #0428AE">Formalizing Cybersecurity Security Weaknesses and Vulnerabilities</l><br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_
<!-- ## <l style="color: #0428AE">Formalizing Software Security Bugs, Weaknesses, and Vulnerabilities</l><l style="color: black">!<l/><br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_</l> -->
<!-- Software Developers 'Best Friend' -->
_____________________________________

[NIST SP 800-231 Bug Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities](https://doi.org/10.6028/NIST.SP.800-231) <br>
[NIST CSRC: NIST Releases SP 800-231](https://csrc.nist.gov/News/2024/bugs-framework-nist-publishes-sp-800231) <br>
[NIST CSRC Publications: SP 800-231](https://csrc.nist.gov/pubs/sp/800/231/final)

`The US Government has filed a patent application "Bugs Framework (BF): Formalizing Software Security Weaknesses and Vulnerabilities". To obtainin a license, please contact the NIST Technology Partnerships Office (TPO) at: [tpo@nist.gov](tpo@nist.gov).`

<!-- `The US Government has filed a patent application for the "Bugs Framework (BF) System and Methods". For collaboration, research, or implementation options, contact the NIST Technology Partnerships Office (TPO) at: [tpo@nist.gov](tpo@nist.gov).` -->
_____________________________________

The Bugs Framework (BF) is a classification of security bugs and related faults that features a formal language for the unambiguous specification of software and hardware security weaknesses and vulnerabilities. BF bugs models, multidimensional weakness and failure taxonomies, and vulnerability models define the lexis, syntax, and semantics of the BF formal language and form the basis for the definition of secure coding principles. The BF formalism supports a deeper understanding of vulnerabilities as chains of weaknesses that adhere to strict causation, propagation, and composition rules. It enables the generation of comprehensively labeled weakness and vulnerability datasets and multidimensional vulnerability classifications. It also enables the development of new algorithms for code analysis and the use of AI models and formal methods to identify bugs and detect, analyze, prioritize, and resolve or mitigate vulnerabilities. 

The BF is a formal system that comprises:

- _[Definitions](/BF/info/formalism/bf-concepts/)_ of bug, fault, error, final error, weakness, vulnerability, exploit vector, and failure in the context of cybersecurity to elucidate causation and propagation rules

- _Bugs models_ that define distinct execution phases with orthogonal sets of operations in which specific bugs and faults could occur and the proper flow of operations 

- Structured, multidimensional, orthogonal, and context-free _[weakness taxonomies](/BF/info/bf-classes)_ as weakness class types and a _failure taxonomy_ as a failure class type 

- A _[vulnerability state model](/BF/info/models/bf-vulnerability-state-model/)_ as a chain of improper-state (operation, operand₁, …, operandₙ) tuples with a bug in the operation or a fault of an operand that enables a failure 

- A _[vulnerability specification model](/BF/info/models/bf-vulnerability-specification-model/)_ as a chain of ⟨cause, operation⟩→consequence instances of BF weakness classes that ends with an instance of a BF failure class 

- A _formal language_ for the unambiguous causal specification of security weaknesses and vulnerabilities

- _Secure coding principles_, such as input/output check safety, memory safety, and data type safety

- _Tools_ that facilitate the generation of CWE2BF and CVE2BF mappings and formal weakness and vulnerability specifications and their graphical representations 

- Comprehensively labeled _weakness_ and _vulnerability datasets_

- Multidimensional _vulnerability classifications_ by common properties and similarities based on the BF taxonomies and secure coding principles

The BF taxonomies are structured, orthogonal, multidimensional, and context-free. _Structured_ means that a weakness is expressed as a ⟨cause, operation⟩→consequence triple with a precise causal relation. The transition from a weakness is expressed as an error→fault or final error→exploit vector propagation. These ensure clear causality within a weakness, between weaknesses, and for an exploit toward a failure.

_Orthogonal_ means that the intersection of the sets of operations of any two BF classes is the empty set. It ensures that the BF weakness types do not overlap in coverage.

_Multidimensional_ means that weaknesses are organized not only by their operations but also by their causes, consequences, and operation and operand attributes. It ensures the BF's expressive power.

_Context-free_ means an operation cannot have different meanings depending on the language or domain. It ensures that the BF is applicable for code in any programming language and for any platform or application technology.

The BF formal language is generated by the BF LL(1) ACFG, whose lexis, syntax, and semantics reflect the BF weakness and failure taxonomies and bugs and vulnerability models that utilize the strict BF concept definitions for security bug, final error, weakness, vulnerability, exploit vector, and failure, as well as fault and error. The LL(1) CFG is pivotal, as it ensures precise, unambiguous specifications.

The BF bugs models and weakness taxonomies are developed iteratively according to the BF methodology and alongside the BF, BFCWE, and BFCVE tools.

The BF formalism guarantees precise descriptions with clear causality of weaknesses (including [CWE](https://cwe.mitre.org/) and vulnerabilities (including [CVE](https://cve.mitre.org/)) and complete, orthogonal, and context-free weakness-type coverage. It forms the basis for the formal definition of secure coding principles, such as memory safety. It also enables the creation of comprehensively labeled weakness and vulnerability datasets, vulnerability classifications, and BF-based systems for bug identification and vulnerability detection, analysis, and resolution or mitigation.

_____________________________________

IN THE NEWS: <br>
[NIST Launches Bugs Framework’ to promote precision in cyber vulnerability classification](https://insidecybersecurity.com/share/16087), Inside Cybersecurity, acob Livesay, July 31, 2024 <br>
[NIST official details efforts to improve automation for vulnerability management through new framework](https://insidecybersecurity.com/share/16091), Inside Cybersecurity, Jacob Livesay, July 31, 2024 <br>

_____________________________________

## BF Intro Presentations

<br/>
{{< rawhtml >}} 
BF Terminology and Existing Repositories:
<br/><br/>
<div class="row">
<div class="col-9">
{{< youtube TYoJAfo3Mu0 >}}
</div>
</div>

<div class="row">
<div class="col-9">
<br/><br/>
BF Goals, Features, and Taxonomy <br/>
(contuniation of the previous presentation):
<br/><br/>
{{< youtube QnCPXHLi7JQ >}}
</div>
</div>

<div class="row">
<div class="col-9">
<br/><br/>
BF Hands On and Potential Impacts <br/>
(contuniation of the previous presentation):
<br/><br/>
{{< youtube XfAuRp5GcrE >}}
</div>
</div>

{{< /rawhtml >}}

<br/><br/>


<script>
    document.addEventListener('DOMContentLoaded', function() {
        const currentDateElement = document.getElementById('currentDate');
        const currentDate = new Date().toLocaleString('en-US', {
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit'
        });
        currentDateElement.textContent = currentDate;
    });
</script>

_____________________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>

BF WEBSITE CITATION: <br/> 
<l style="font-size: 16px; color: #7D3368"> Bojanova I, NIST Bugs Framework (BF), Accessed: <span id="currentDate"></span>. [Online]. Available: [https://usnistgov.github.io/BF](https://usnistgov.github.io/BF).</l>

<!-- <l style="font-size: 15px; color: #7D3368">Note: Any BF-application publication that lists classes not featured on this website is a misrepresentation of BF. If in doubt, please [seek guidance from the BF PI](/BF/info/contact/bf-contact).  -->