---
weight: 2
bookCollapseSection: false
title: "BF Approach and Features"
---
# Bugs Framework (BF) Approach<br/>_`Irena Bojanova, Inventor, Creator, PI,  Bugs Framework (BF)`_

## Current State of the Art

The current state of the art in describing and linking software security weaknesses and vulnerabilities are the Common Weakness Enumeration (CWE), the Common Vulnerabilities and Exposures (CVE), and the National Vulnerabilities Database (NVD). CWE is community-developed list of software and hardware weaknesses types, CVE is a catalog of publicly disclosed cybersecurity vulnerabilities, and NVD links CVEs to CWEs and assigns 'Common Vulnerability Scoring System' (SVCC) severity scores.

CWE, CVE, and NVD are widely used, but they have some problems. Many CWEs and CVEs have imprecise descriptions and unclear causality. CWE also has gaps and overlaps in coverage. Additionally, there is no strict methodology for tracking a vulnerability’s weaknesses, nor tools to aid users in the creation and visualization of weakness and vulnerability  descriptions. 

The Bugs Framework (BF) aims to address all these CWE and CVE problems. It has the expressiveness power to clearly describe any software bug or weakness, underlying any vulnerability.

## BF Features

To solve the CWE and CVE problems of imprecise descriptions and unclear causality, BF is being developed as a structured classification system. The BF description of a vulnerability provides causal relationships – forming a chain of underlying weaknesses, leading to a failure. To avoid CWEs gaps and overlaps, BF is being developed as a complete, orthogonal taxonomy. The BF system comprises also a formal language with powerful syntax and semantics for specifying software security weaknesses and vulnerabilities and supporting tools.

### Causation

BF describes a _bug_ or a _weakness_ as an improper state and its transition. The transitions is to another weakness or to a failure. An improper state is defined by an (`operation`, `operand{{< sub "1" >}}`, `···`, `operand{{< sub "n" >}}`) tuple, for which at least one element is improper. 

The initial state (depicted in blue on Figure 1) is always caused by a bug; a code or specification defect within the operation, which if fixed will resolve the vulnerability. A propagation (intermediate) state (in light purple) is caused by at least one faulty (ill-formed) operand. The final state (in dark purple) -- the failure -- is caused by a final, exploitable error (a undefined system behavior), which usually directly relates to a CWE. An error is the result of an improper state from the operation over the operands. It propagates to an improper operand for a next improper state. For example, on Figure 1, Operation 1 from Improper State 1 is improper, due to a Bug, and results in Improper Operand 2i, leading to Improper State 2. The last operation results in an Exploitable Error, leading to a failure.

<br/>
 {{<img src="images/BF Models/BF Causation.svg" caption="Figure 1. BF Causality -- a bug or a weakness relates an improper state and its transition. The improper state is defined by an (`operation`, `operand 1`, `···`, `operand n`) tuple, for which at least one element is improper.The transition from that state is to another weakness or to a failure." >}}
<br/>

### Chaining 

BF describes a _vulnerability_ as a chain of improper states and their transitions (see Figure 2). Each improper state corresponds to an instance of a BF class. The initial state has an improper operation over proper operands. The transition states have proper operations with at least one improper operand. All improper states propagate by the error from one state becoming the fault for the next state. I other words, the transition from the initial state is by improper operation (an operation that has a bug) over proper operands; the transitions from intermediate states are by proper operations with at least one improper operand (the operand is at fault).

<br/><br/>
{{<img src="images/BF Models/BF Chaining.svg" caption="Figure 2. BF features: Chaining weaknesses – A vulnerability as a chain of improper states and their transitions" >}}
<br/>

### Converging

In some cases, several vulnerabilities must be present for an exploit to be harmful. The final errors resulting from different chains converge to cause a failure (see  Figure 4). The bug in at least one of the chains must be fixed to avoid that failure. Operations or operands improperness define the causes. A consequence is the result of the operation over the operands. It becomes the cause for a next weakness or a failure. 

<br/>
 {{<img src="images/BF Models/BF Converging.svg" caption="Figure 4. Converging software security vulnerabilities, leading to a security failure." >}}
<br/>

### Backtracking

The improper operation or improper operand is the cause for that weakness. The improper result from an operation over its operands is the consequence from that weakness, and it becomes a cause for a next weakness or a failure. Knowing the failure and all the transitions at execution, we should be able to find the bug (see Figure 3)– simply go backwards by operand until an operation is improper – fixing the bug within that operation will resolve the vulnerability.

<br/>
 {{<img src="images/BF Models/BF Backtracking.svg" caption="Figure 3. BF features: Backtracking from a failure to the bug – knowing the failure, go backwards by improper operand until an operation is improper – fixing the bug within that operation will resolve the vulnerability." >}}
<br/>

### Classification System

The Bugs Framework (BF) approach is different from the CWE exhaustive list approach. BF is a classification system! 

The taxonomy of a particular bug or weakness is based on one BF class. Its description is an instance of a taxonomic BF class with one cause, one operation, one consequence, and their attributes. The operation binds the cause→consequence relation – e.g., deallocation via a dangling pointer leads to a failure known as double free.

So, each BF class is a taxonomic  category  of  a  weakness type, defined by:

*   A set of operations
*   All valid cause→consequence relations
*   A set of attributes.

It relates to a distinct phase of software execution, the operations specific for that phase and the operands required as input to those operations. Operations or operands improperness define the causes. A consequence is the result of the operation over the operands (see figure 5). It becomes the cause for a next weakness or is a final error, leading to a failure. The attributes describe the operations and the operands. They help us understand the severity of the bug or the weakness. The BF description of a weakness is an instance of a taxonomic BF class with one operation, one cause, one consequence, and their attributes. Any vulnerability then can be described as a chain of such instances and their consequence–cause transitions.

<br/>
 {{<img src="images/BF Models/BF Cause-Consequence-Cause.svg" caption="Figure 5. A consequence is the result of the operation over the operands. It becomes the cause for a next weakness or is a final, exploitable error, leading to a failure." >}}
<br/>

The Bugs Framework (BF) is being created as a classification system of software security bugs, faults, and weaknesses that allows unambiguous formal specification of the software security vulnerabilities that exploit them. Please visit the appropriate webpages to see details on the following BF components:

<div style="text-indent: 40px">

➢ _Bugs models_ with possible flow of operations

➢ A structured, complete, orthogonal, language and domain independent weakness _[taxonomy](/BF/info/bf-classes)_

➢ A  _[vulnerability model](/BF/info/vulnerability-model/bf-vulnerability-model/)_ of weakness chains leading to failures

➢ An _LL(1) formal language_ for specification of weaknesses and vulnerabilities

➢ A _database_ for querying weakness and vulnerability repositories and scoring systems towards BF

➢ _Tools_ for generation of BF CWE  and BF CVE formal specifications and  visualization of BF classes and BF specifications. 