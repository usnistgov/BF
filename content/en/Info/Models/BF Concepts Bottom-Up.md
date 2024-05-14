---
weight: 1
bookCollapseSection: false
title: "BF Concepts Bottom-Up"
---
# BF Security Concepts -- Software and Hardware<br/>_`Irena Bojanova, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

'A _security bug_ type or a _fault_ type relates to a distinct phase of execution of software, firmware (including microcode), or hardware circuit logic that is defined by a set of operations and their input operands and output results.

Examples of operations are dereference, write, or deallocate memory, data type-related condition evaluation, and encryption of plain text. Examples of operands include object address, data type, and size.'

The BF defines the concepts of bug, fault, error, final error, weakness, vulnerability, and failure in the context of cybersecurity to provide the level of detail needed to understand and specify the causation within a weakness, as well as the causation and propagation between weaknesses and between vulnerabilities. 

*   A _security bug_ is a code or specification defect (i.e., an operation defect) in software, firmware, or hardware logic --- proper operands over an improper operation. Specification refers to the operation's metadata or algorithm. A bug could be introduced by a programmer, the result of a design flaw, or induced by a hardware defect. A bug could also resurface from design flows, such as system configuration or environment change. A hardware defect may be due to overheating, electromagnetic fields, wear and tear, or other factors.

*   A _fault_ is a name, data, type, address, or size error (i.e., an operand error) --- that is, an improper operand over a proper operation. 'Name' is the identifier of a resolved or bound object, function, data type, or namespace. 'Data,' 'type,' 'address,' and 'size' are properties of an object. A fault could result from a bug or be induced by a hardware defect. 

*   An _error_ is a result of an operation with a bug or faulty operand that propagates to a fault for another operation.

*   A _security final error_ is an exploitable or undefined system behavior that results from an operation with a bug or faulty operand introducing an exploit vector. 

*   A _security weakness_ is a _( ⟨ bug, operation ⟩ → error)_, _( ⟨ fault, operation⟩ → error )_, _( ⟨ bug, operation ⟩ → final error )_, or _( ⟨ fault, operation ⟩ → final error )_ causation triple. 

*   A _security vulnerability_ is a causal chain of weaknesses that starts with a bug or hardware defect-induced fault, propagates through errors that become faults, and ends with a final error. The first weakness relates to its root cause, and the last weakness relates to its sink.

*   A _security failure_ is a violation of a system security requirement and results from an exploit via a vector supplied by a final vulnerability error. 

The BF security concept definitions are contextually visualized in Fig. 1.

{{< img src="images/BF Models/BF Security Concepts.svg" height="750" caption="Figure 1. BF security concepts." >}}


Fixing the bug or starting fault of a vulnerability will resolve it and any other vulnerability with the same root cause. Fixing a fault or the final error at the sink may only mitigate the vulnerability. Occasionally, for an exploit to be harmful, several vulnerabilities must converge at their final errors. Fixing the bug or the starting fault of at least one of the chains would avoid the failure. An exploit of a vulnerability may result in a fault starting a new faults-only vulnerability. Fixing the bug or starting fault of the first vulnerability will resolve the entire chain of vulnerabilities. 

The definitions for the BF concepts will be further detailed in the forthcoming SP 800-231A, _Bugs Framework: Security Concepts_.

Using the BF software security concepts definitions, a vulnerability description can be formalized at a high-level with the following rules.
<br/>
    S ::= (Vulnerability (⊕ Vulnerability)? Failure+) + ε
    Vulnerability ::= Weakness+
    Weakness ::= Cause Operation Consequence
    Cause ::= Bug | Fault
    Consequence ::= Error | FinalError

 The complete current BF left-to-right leftmost derivation one-symbol lookahead (LL(1)) attribute context-free grammar (ACFG) is available at: [BF Formal Language)](/BF/info/formalism/bf-formal-language/).