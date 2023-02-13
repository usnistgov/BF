---
weight: 4
bookCollapseSection: false
title: " Approach"
---
# BF Approach

BF’s approach is different from CWE’s exhaustive list approach. BF is a classification. Each BF class is a taxonomic category of a weakness type. It relates to a distinct phase of software execution, the operations specific for that phase and the operands required as input to those operations.

BF describes a bug or a _weakness_ as an improper state and its transition. The transition is to another weakness or to a failure. An improper state is defined by the tuple (`operation`, `operand1`, `···`, `operandn`), where at least one element is improper. The initial state is always caused by a bug; a coding error within the operation, which if fixed will resolve the vulnerability. An intermediate state is caused by ill-formed data; it has at least one improper operand. Rarely an intermediate state may also have a bug, which if fixed will also resolve the vulnerability. The final state, the failure, is caused by a final error (undefined or exploitable system behavior), which usually directly relates to a CWE. A transition is the result of the operation over the operands.

BF describes a _vulnerability_ as a chain of improper states and their transitions (see Fig. 1). Each improper state is an instance of a BF class. The transition from the initial state is by improper operation over proper operands. The transitions from intermediate states are by proper operations with at least one improper operand.

{{< img src="images/BF chain.png" height="250" caption="Fig 1. A vulnerability as a chain of weaknesses." >}}

Operations or operands improperness define the causes. A consequence is the result of the operation over the operands. It becomes the cause for a next weakness or a failure.

A BF class is a taxonomic category of a weakness type, defined by:

*   A set of operations
*   All valid cause→consequence relations
*   A set of attributes.

The taxonomy of a particular bug or weakness is based on one BF class. Its description is an instance of a taxonomic BF class with one cause, one operation, one consequence, and their attributes. The operation binds the cause→consequence relation – e.g., deallocation via a dangling pointer leads to a failure known as double free.
