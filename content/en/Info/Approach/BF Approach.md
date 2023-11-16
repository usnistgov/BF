---
weight: 1
bookCollapseSection: false
title: "Approach"
---
# BF Approach <br/>_`Irena Bojanova, Inventor/Creator, PI, Bugs Framework (BF)`_

The Bugs Framework (BF) approach is different from the CWE exhaustive list approach. BF is a classification. 

Each BF class is a taxonomic category of a weakness type. It relates to a distinct phase of software execution, the operations specific for that phase and the operands required as input to those operations.

BF describes a _bug_ or a _weakness_ as an improper state and its transition. The transitions is to another weakness or to a failure. 

An improper state is defined by the tuple (`operation`, `operand{{< sub "1" >}}`, `···`, `operand{{< sub "n" >}}`), where at least one element is improper. 

The initial state is always caused by a bug; a code or specification defect within the operation, which if fixed will resolve the vulnerability. 

An transition state is caused by a fault; at least one faulty (ill-formed) operand.  

The final state, the failure, is caused by a final error (undefined or exploitable system behavior), which usually directly relates to a CWE. 

An error is the result of an improper state from the operation over the operands. It propagates to an improper operand for a next improper state.

BF describes a _vulnerability_ as a chain of improper states and their transitions (see Figure 1). 

Each improper state is an instance of a BF class. The initial state has an improper operation over proper operands. The transition states have proper operations with at least one improper operand. All improper states propagate by the error from one state becoming the fault for the next state.
<br/><br/>
{{< img src="images/BF Models/BF Vulnerability Model.svg" height="350" caption="Figure 1. A vulnerability as a chain of improper states and their transitions" >}}
<br/>
Operations or operands improperness define the causes. 

A consequence is the result of the operation over the operands. It becomes the cause for a next weakness or a failure.

A BF class is a taxonomic category of a weakness type, defined by:

*   A set of operations
*   All valid cause→consequence relations
*   A set of attributes.

The taxonomy of a particular bug or weakness is based on one BF class. Its description is an instance of a taxonomic BF class with one cause, one operation, one consequence, and their attributes. The operation binds the cause→consequence relation – e.g., deallocation via a dangling pointer leads to a failure known as double free.

In some cases, several vulnerabilities must be present for an exploit to be harmful. The final errors resulting from different chains converge to cause a failure (see  Figure 2). The bug in at least one of the chains must be fixed to avoid that failure.  

<br/>
 {{< img src="images/BF Models/ConvergingChains.svg" height="350" caption="Figure 2. Converging software security vulnerabilities, leading to a security failure." >}}
<br/>
