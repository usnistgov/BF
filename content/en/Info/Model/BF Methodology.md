---
weight: 3
bookCollapseSection: false
title: "BF Methodology"
---
# BF Methodology <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

The methodology for developing a BF class is as follows (see Figure 1): First, we identify the software execution phase, where a specific kind of bugs could occur. Then, we identify the operations for that phase. On step 3, we define a BF model showing operations flow. Then, we identify all causes. The initial causes are always improper operations. The intermediate causes are improper operands. On steps 5 and 6, we identify all consequences that propagate as causes to other weaknesses and all the final errors. Then we identify the possible failures. On step 8, we identify the attributes helpful to describe such a bug or weakness. On step 9, we try to identify possible sites in code. This step is applicable mainly for low level bugs.
<br/><br/>
{{< img src="images/BF methodology.png" height="250" caption="Figure 1. BF Methodology" >}}
<br/>
We create bugs models to help us identify the BF classes. They show the phases, where particular types of bugs could occur, and the possible flow of operations. For example, the [Memory Bugs Model] (/Info/BF/_MEM/Model.md) shows the identifies phases and operations for memory addressing, allocation, use, and deallocation bugs. It assures the corresponding BF classes MAD, MAL, MUS, and MDL do not overlap in operations.



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