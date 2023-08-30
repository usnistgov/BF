---
weight: 1
bookCollapseSection: false
title: "BF Welcome"
url: /
---
<!-- <l style="color: #7D3368; font-size:32px">xxx</> -->
# Welcome to Bugs Framework (BF) -- <l style="color: #0428AE">Software Developers 'Best Friend'<l/><l style="color: black">!<l/><br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

The NIST Bugs Framework (BF) is a language and domain independent, 
<div style="text-indent: 40px">➢ structured,</div></br>
<div style="text-indent: 80px">➢ orthogonal,</div><br/>
<div style="text-indent: 120px">➢ complete classification system of software security bugs and weaknesses that allows precise descriptions of vulnerabilities that exploit them.</div>
<br/>
<div style="text-indent: 120px">

`Important Note:`</br>
Any BF application publication that lists classes not futured on this website is a misrepresentation of BF. If in doubt, please [seek guidance from the BF PI](/BF/info/contact/bf-contact) to avoid spreading misinformation.

<br/>_Structured_ means a weakness is described via one _cause_, one _operation_, one _consequence_, and _attributes_ from the lists defining a BF class -- _(bug, operation, error)_ and _(fault, operation, error)_ triples are used to create precise causal descriptions (see [BF definitions](/BF/info/model/bf-concepts/)).This assures precise causal descriptions.
<br/><br/>
_Orthogonal_ means the sets of operations of any two BF classes do not overlap. This assures BF  weakness types do not overlap. 
<br/><br/>
_Complete_ means once BF is fully developed, it will have the expressiveness power to describe any software bug or weakness. This assures there are no gaps in coverage. 
<br/><br/>
_Classification system_ means bugs and weaknesses chain via cause–consequence–cause transitions. This assures back-tracking from the failure through errors to the bug. 
<br/><br/>
_Language and domain independent_ means BF is applicable for source code in any programming language and is technology independent.
<br/><br/>

All the above together allow creation of precise weakness and vulnerability descriptions. 

Each BF class is a taxonomic  category  of  a  weakness type. It relates to a distinct phase of software execution, the operations specific for that phase and the operands required as input to those operations. Operations or operands improperness define the causes. A consequence is the result of the operation over the operands. It becomes the cause for a next weakness or is a final error, leading to a failure. The attributes describe the operations and the operands. They help in understanding the severity of the bug/weakness.

Each BF class has a strict definition and a taxonomy. The taxonomy of a class comprises:

*   A set of operations – where such bugs could happen
*   A set of causes – the possible improper operations (bugs) and improper operands (faults)
*   A set of consequences – the possible errors (that become faults for next weaknesses) and the possible final errors (that become exploits)
*   A matrix of valid cause–operation–consequence relations
*   A set of attributes for the operations and the operands
*   A set of attributes with values – for the operations and the operands.

`Citation: I. Bojanova, NIST, The Bugs Framework (BF), Accessed: 2023-08-29, 2023. [Online]. Available: https://samate.nist.gov/BF/.` 

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