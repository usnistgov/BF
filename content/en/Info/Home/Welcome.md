---
weight: 1
bookCollapseSection: false
title: "Welcome"
url: /
---
# Welcome to Bugs Framework! <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

Bugs Framework (BF) is a language and domain independent,

     ➢ Structured  
          ➢ Complete  
               ➢ Orthogonal  

classification system of software security bugs and weaknesses that allows precise descriptions of vulnerabilities that exploit such weaknesses.

_Structured_ means a weakness is described via one cause, one operation, one consequence, and one value per attribute from the lists defining a BF class. This assures precise causal descriptions. _Complete_ means BF has the expressiveness power to describe any software bug or weakness. This assures there are no gaps in coverage. _Orthogonal_ means the sets of operations of any two BF classes do not overlap. This assures there are no overlaps in coverage. _Classification system_ means bugs and weaknesses chain via cause–consequence–cause transitions. This assures back-tracking from the failure through errors to the bug. All these together resolve the imprecise descriptions problem. BF is also applicable for source code in any programming language and is technology independent. 

Each BF class is a taxonomic  category  of  a  weakness type. It relates to a distinct phase of software execution, the operations specific for that phase and 
the operands required as input to those operations. Operations or operands improperness define the causes. A consequence is the result of the operation over the operands. It becomes the cause for a next weakness or is a final error, leading to a failure. The attributes describe the operations and the operands. 
They help us understand the severity of the bug or the weakness.

Each BF class has a strict definition and a taxonomy. The taxonomy of a class comprises:

*   A set of operations – where such bugs could happen
*   A set of causes – the possible improper operations (bugs) and improper operands (faults)
*   A set of consequences – the possible errors (that become faults for next weaknesses) and the possible
final errors (that become exploits)
*   A matrix of valid cause–operation–consequence relations
*   A set of attributes for the operations and the operands
*   A set of attributes with values – for the operations and the operands.
<br/><br/>
Please watch the BF intro presentation:
<br/><br/>

{{< rawhtml >}} 

<!-- <video width=100% controls autoplay>
    <source src="https://youtu.be/v5Ne1fu72hE" type="video/mp4">
</video> -->


{{< /rawhtml >}}

{{< rawhtml >}} 

<video width=100% controls autoplay>
    <source src="//cfscloud.nist.gov/midas_uploads/3048\BF/videos/BF - Website - IB.mp4" type="video/mp4">
    Your browser does not support the video tag.  
</video>

{{< /rawhtml >}}
