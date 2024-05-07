---
weight: 1
bookCollapseSection: false
title: "BF Concepts"
---
# BF Software Security Concepts <br/>_`Irena Bojanova, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

We can observe a security vulnerability leads to a security failure. However, what are the building blocks of a vulnerability? What is the defect in software that triggers a vulnerability? How does it propagate through errors until a final, exploitable error is reached? How do the underlying weaknesses of a vulnerability relate to these propagating errors? 

The following software security concepts definitions were developed iteratively, while creating the BF software security vulnerability model. They facilitated the reasoning about and the creation of the BF weakness taxonomies, allowing precise descriptions of existing vulnerabilities. 

*   A _software security vulnerability_ is a chain of weaknesses linked by causality. It starts with a bug and ends with a final error, which if exploited leads to a security failure.

*   A _software security weakness_ is a _'(bug, operation, error)'_ or '(fault, operation, error)' triple. It is an instance of a weakness type that relates to a distinct phase of software execution, the operations specific for that phase and the operands required as input to those operations.

*   A _software security bug_ is a code or specification defect -- an operation defect. 

*   A _software fault_ is a name, data, type, address, or size error -- an operand error. Name is in reference to a resolved or bound object, function, data type, or namespace. The others are in reference to an object.

*   A _software error_ is the result from an operation with a bug or a faulty operand. It becomes a next fault or is a final error.

*   A _software security final error_ is an exploitable or undefined system behavior that leads to a security failure. 

*   A _security failure_ is a violation of a system security requirement. 

A _chain of weaknesses_ starts with a bug, propagates through errors that become faults, and ends with a final error. The final error is the one exploited by attackers towards a security failure. For example, missing input validation may propagate to integer overflow, followed by buffer overflow, which if exploited may lead to a remote code execution failure.

The bug must be fixed to resolve the vulnerability; while, in most cases, fixing a fault would only mitigate the vulnerability. To fix a bug (code or specification defect), lines of code or configuration files, etc., must be changed. The bug is a concrete error; it is a wrong sequence of bits that must be changed. Fixing a specification is also code related, as it requires fixing its implementation. 

A security failure may be caused by the converging final errors of several vulnerabilities. The bug in at least one of the chains must be fixed to avoid the failure.

Using the BF software security concepts definitions, a vulnerability description can be formalized at a high-level with the following rules (the complete current BF LL1 grammar is available here: [BF Formal Language)](/BF/info/formalism/bf-formal-language/)).
<br/>


    START := Vulnerability Converge
    Vulnerability := Bug Operation Error
    Error := Fault Operation Error | FinalError
    Converge :=  Vulnerability Converge | Failure END
    

I. Bojanova and C. E. Galhardo, "Bug, Fault, Error, or Weakness: Demystifying Software Security Vulnerabilities," IT Professional, vol. 25, no. 1, pp. 7-12, Jan.-Feb. 2023, doi: [10.1109/MITP.2023.3238631](https://doi.ieeecomputersociety.org/10.1109/MITP.2023.3238631), [Local Download](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=936191) .
