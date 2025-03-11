---
weight: 3
bookCollapseSection: false
title: "BF Tool Help"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Tool Help<br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

1. Download the BF Tool 

2. Set the directories for generated BF Specification Graphs and the POWERPNT.EXE in the BF.dll.config file.

3. Download the BF Tool Examples.

4. Start the BF Tool (run BFTool.exe).

5. Open a BF Tool Example or create a new BF Vulnerability Specification.

{{< img src="images/Tools/BFTool.svg" caption="Figure 1. BF GUI Tool" >}}

If a CVE is being specified, the user can select CVE Year and CVE ID in the CVE Details GroupBox to display its description, vendor, and product from the CVE repository and its CVSS severity score from the NVD. To create a BFCVE specification of that CVE, the user is guided to define an initial weakness, possible propagation weaknesses, and a final weakness leading to a failure. If a vulnerability has only one underlying weakness, it would be both the initial and final weakness.

To start defining a weakness, the user has to select a BF weakness class from the BF Class TreeView in the Weakness GroupBox container, where the classes are grouped by BF class types as parent nodes. The selection of a class populates the five TreeView controls in the Weakness GroupBox container: Bug/Fault, Operand, Error/Final Error, Operation Attributes, and Operand Attributes. To specify the weakness, the user has to select child nodes from the five TreeView controls and enter comments in the text boxes beneath them.

The BF tool can enforce that the initial weakness starts with a bug and the rest of the weaknesses start with a fault. However, this is not necessary for partial specifications or if a vulnerability starts with a hardware defect-induced fault. The Bug/Fault label changes to Bug when the initial weakness is viewed and to Fault when the propagation or final weakness is viewed. In the case of a bug, the child nodes are only allowed under the Code and Specification nodes. In the case of a fault, the child nodes are only allowed under the Data, Type, and Address nodes. Tooltips with term definitions are displayed over all TreeView nodes. The BF tool also enforces that the weakness with the final error consequence is the final weakness leading to a failure.

Once a weakness is specified, the user can proceed via the >> button and create the next weakness of the vulnerability chain. Weakness chaining is restricted by the error-to-fault by type match rule, which --- to a large extent --- also restricts to meaningful operation flow, as the BF classes are developed to adhere to the BF bugs models that are specific to their BF class types. The Generate BF Description button displays a draft BF description based on the selected values from the five TreeView controls and Comment text boxes.