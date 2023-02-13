---
title: "ISOIECJTCTR"
bookHidden: true
---
# ISO/IEC JTC1/SC22/WG23 Technical Report "Guidance to Avoiding Vulnerabilities in Programming Languages

ISO/IEC/JTC 1/SC 22/WG 23 is working on a Technical Report (RT), which includes a "taxonomic hierarchy of vulnerabilities", giving each vulnerability an arbitrary three-letter code [1]. The general part, TR 24772-1, is an and applies to all languages. There are many supplements, one for each language -- for example, TR24772-2 Ada, TR24772-3 C, and TR24772-9 C++.

The heart of the TR is specific suggestions to avoid vulnerabilities that arise from "constructs that incompletely specified, exhibit undefined behavior, are implementation-dependent, or are difficult to use correctly." The classes of vulnerabilities can also be used to "select source code evaluation tools that can discover and eliminate some constructs that could lead to vulnerabilities". Some suggestions are, "Assume all input is malicious", "Use appropriate combinations of black-lists and white-lists ...", "Use sanitizers to scrub input ...", "Compare multiple attributes of the file to improve the likelihood that the file is the expected one", and "Restrict the use of shared directories".

### A.2 Outline of Programming Language Vulnerabilities

A.2.1. Types  
A.2.1.1. Representation  
A.2.1.1.1. \[IHN\] Type System  
A.2.1.1.2. \[STR\] Bit Representations  
A.2.1.2. Floating-point  
A.2.1.2.1. \[PLF\] Floating-point Arithmetic  
A.2.1.3. Enumerated Types  
A.2.1.3.1. \[CCB\] Enumerator Issues  
A.2.1.4. Integers  
A.2.1.4.1. \[FLC\] Numeric Conversion Errors  
A.2.3. Declarations and Definitions  
A.2.3.1. \[NAI\] Choice of Clear Names  
A.2.3.2. \[WXQ\] Dead store  
A.2.3.3. \[YZS\] Unused Variable  
A.2.5. Control Flow  
A.2.5.1. Conditional Statements  
A.2.5.1.1. \[CLL\] Switch Statements and Static Analysis  
A.2.5.1.2. \[EOJ\] Demarcation of Control Flow  
A.2.5.2. Loops  
A.2.5.2.1. \[TEX\] Loop Control Variables  
A.2.5.2.2. \[XZH\] Off-by-one Error  
A.2.9. Macros  
A.2.9.1. \[NMP\] Pre-processor Directives  
A.2.10. Compile/Run Time  
A.2.10.1 \[MXB\] Suppression of Language-Defined Run-Time Checking  
A.2.10.2 \[SKL\] Provision of Inherently Unsafe Operations  
A.2.11. Language Specification Issues  
A.2.11.1. \[BRS\] Obscure Language Features  
A.2.11.2. \[BQF\] Unspecified Behaviour  
  
A.3 Outline of Application Vulnerabilities  
A.3.1. Design Issues  
A.3.1.1. \[BVQ\] Unspecified Functionality  
A.3.1.2 \[REU\] Fault Tolerance and Failure Strategies  
A.3.1.3. \[KLK\] Distinguished Values in Data Types  
A.3.2. Environment  
A.3.2.1. \[XYN\] Adherence to Least Privilege  
A.3.2.2. \[XYO\] Privilege Sandbox Issues  
A.3.2.3. \[XYS\] Executing or Loading Untrusted Code  
A.3.3. Resource Management  
A.3.3.1. Memory Management  
A.3.3.1.1. \[XZX\] Memory Locking  
A.3.4 Concurrency and Parallelism  
A.3.4.1 \[CGY\] Inadequately Secure Communication of Shared Resources  
A.3.5. Flaws in Security Functions  
A.3.5.1. \[XZS\] Missing Required Cryptographic Step  
A.3.5.2. \[MVX\] Use of a One-Way Hash without a Salt  
A.3.5.2. Authentication  
A.3.5.2.1. \[XZR\] Improperly Verified Signature  
A.3.5.2.2. \[XYM\] Insufficiently Protected Credentials  

### References

\[1\] [ISO/IEC/JTC 1/SC 22/WG 23 DOCUMENT REGISTER](http://www.open-std.org/JTC1/SC22/WG23/docs/documents).