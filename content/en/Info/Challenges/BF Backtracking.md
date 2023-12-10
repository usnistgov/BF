---
weight: 3
title: "BF Backtracking"
---
# BF Backtracking -- from Failure to Bug<br/>_`Irena Bojanova, Inventor, Creator, PI,  Bugs Framework (BF)`_

Create tools bactracking from failure to bug utilizing the BE taxonomy, and causation and propagation rules - including BF matrices of meaningful (cause, operation, conseqeunce) weakness triples.

BF describes a _vulnerability_ as a chain of improper states and their transitions (see Figure 1). Each improper state corresponds to an instance of a BF class. The initial state has an improper operation over proper operands. The transition states have proper operations with at least one improper operand. All improper states propagate by the error from one state becoming the fault for the next state. I other words, the transition from the initial state is by improper operation (an operation that has a bug) over proper operands; the transitions from intermediate states are by proper operations with at least one improper operand (the operand is at fault). The improper operation or improper operand is the cause for that weakness. The improper result from an operation over its operands is the consequence from that weakness, and it becomes a cause for a next weakness or a failure. Knowing the failure and all the transitions at execution, we should be able to find the bug (see Figure 3)– simply go backwards by operand until an operation is improper – fixing the bug within that operation will resolve the vulnerability.

<br/>
 {{< img src="images/BF Models/BF Backtracking.svg" caption="Figure 1. BF features: Backtracking from a failure to the bug – knowing the failure, go backwards by improper operand until an operation is improper – fixing the bug within that operation will resolve the vulnerability." >}}
<br/>

//more to be added//