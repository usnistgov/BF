---
weight: 4
bookCollapseSection: false
title: "BF Methodology"
---
# BF Methodology <br/>_`Irena Bojanova, Inventor, Creator, PI, Lead, Bugs Framework (BF), 2014 – ~~~~`_

The methodology for developing a BF class is as follows (see Figure 1): First, we identify the software execution phase, where a specific kind of bugs could occur. Then, we identify the operations for that phase. On step 3, we define a BF model showing operations flow. Then, we identify all causes. The initial causes are always improper operations. The intermediate causes are improper operands. On steps 5 and 6, we identify all consequences that propagate as causes to other weaknesses and all the final errors. Then we identify the possible failures. On step 8, we identify the attributes helpful to describe such a bug or weakness. On step 9, we try to identify possible sites in code. This step is applicable mainly for low level bugs.
<br/><br/>
{{< img src="images/BF methodology.png" height="250" caption="Figure 1. BF Methodology" >}}
<br/>
We create bugs models to help us identify the BF classes. They show the phases, where particular types of bugs could occur, and the possible flow of operations. For example, the [BF Memory Bugs Model](/BF/info/bf-classes/_mem/model/) shows the identifies phases and operations for memory addressing, allocation, use, and deallocation bugs. It assures the corresponding BF classes MAD, MAL, MUS, and MDL do not overlap in operations.

<!-- Methodology for Developing a BF Class 
Identify a software phase in which a kind of bugs may be introduced– this would define the new BF class.
Identify the operations for that phase– these would define the values of the main attribute Operation. 
Identify the operands (inputs) for those operations– these would define the main input_i attributes, where input_i are class specific.
Identify all improper results from the operations– these would define the consequences 
Define a BF model of operations flow – could include closely related BF classes. 
Identify all improper operation states– these would define the “Improper Operation” list of causes.
Identify all improper states of operands– these would define the “Improper input_i” list of causes.
Identify  all  consequences  that  propagate  as  causes  to another bug (all improper results that are input to operations in next bugs)– these would define the “Improper input_i” list of consequences.
Identify  all  consequences that do not propagate to other bugs– these would define the “Software Collapse” list of consequences, and other class specific consequences that may lead to other consequences, but are not causes of other bugs.
Identify specific Descriptive Attributes for operations and inputs.
Define the BF class graph. -->


<!-- The methodology for developing a BF class is as follows (see Figure 1): 
1.  Identify the software execution phase, where a specific kind of bugs could occur. 
2.  Identify the operations for that phase. 
3.  Define a BF model showing operations flow. 
4.  Identify all causes. The initial causes are always improper operations. The intermediate causes are improper operands. 
5.  Identify all consequences that propagate as causes to other weaknesses.
6.  Identify all consequences that are final errors leading to failures. 
7.  Identify all possible failures. 
8.  Identify the attributes helpful to describe such a bug or weakness. 
9.  Identify possible sites in code. This step is applicable mainly for low level bugs. -->