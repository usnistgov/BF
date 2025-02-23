---
weight: 1
bookCollapseSection: false
title: "BF Tool"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF GUI Tool for Formal Vulnerability Specification <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

//to be added//

<!-- The BF GUI Tool guides the specification of a security vulnerability as a chain of underlying weaknesses. A security bug causes the first weakness, which leads to an error. This error becomes the cause (i.e., the fault) of the next weakness and propagates through subsequent weaknesses until a final error is reached, enabling a security failure. The causation within a weakness is by a meaningful <cause, operation>→consequence relation. The causation between weaknesses is by error type to fault type match and operation flow or error↷fault by value propagation.

- Download  --- with BF API Key &rarr; [Inquiry](https://forms.gle/SRZyva5Vn1i4dQQ2A)

  http://localhost:4567/BFToolApp?key=yourAPIkey


{{< img src="images/Tools/BFTool.svg" caption="Figure 1. BF GUI Tool" >}}

If a CVE is being specified, the user can select CVE Year and CVE ID in the CVE Details GroupBox to display its description, vendor, and product from the CVE repository and its CVSS severity score from the NVD. To create a BFCVE specification of that CVE, the user is guided to define an initial weakness, possible propagation weaknesses, and a final weakness leading to a failure. If a vulnerability has only one underlying weakness, it would be both the initial and final weakness.

To start defining a weakness, the user has to select a BF weakness class from the BF Class TreeView in the Weakness GroupBox container, where the classes are grouped by BF class types as parent nodes. The selection of a class populates the five TreeView controls in the Weakness GroupBox container: Bug/Fault, Operand, Error/Final Error, Operation Attributes, and Operand Attributes. To specify the weakness, the user has to select child nodes from the five TreeView controls and enter comments in the text boxes beneath them.

The BF tool can enforce that the initial weakness starts with a bug and the rest of the weaknesses start with a fault. However, this is not necessary for partial specifications or if a vulnerability starts with a hardware defect-induced fault. The Bug/Fault label changes to Bug when the initial weakness is viewed and to Fault when the propagation or final weakness is viewed. In the case of a bug, the child nodes are only allowed under the Code and Specification nodes. In the case of a fault, the child nodes are only allowed under the Data, Type, and Address nodes. Tooltips with term definitions are displayed over all TreeView nodes. The BF tool also enforces that the weakness with the final error consequence is the final weakness leading to a failure.

Once a weakness is specified, the user can proceed via the >> button and create the next weakness of the vulnerability chain. Weakness chaining is restricted by the error-to-fault by type match rule, which --- to a large extent --- also restricts to meaningful operation flow, as the BF classes are developed to adhere to the BF bugs models that are specific to their BF class types. The Generate BF Description button displays a draft BF description based on the selected values from the five TreeView controls and Comment text boxes.

The BF tool demonstrates how the BF taxonomy and causation and propagation rules tie together into the strict BF formal language. It uses the BFCVE tool functionality to generate graphical representations of the BF formal specifications to enhance understanding. 

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/> -->