---
title: "SFP"
bookHidden: true
---
# Software Fault Patterns (SFP)

The Software Fault Patterns (SFP) [1] are a clustering of CWEs into related weakness categories. Each cluster is factored into formally defined attributes, with sites ("footholds"), conditions, properties, sources, sinks, etc. This work overcomes the problem of combinations of attributes in CWE. For instance, the SFP factored attributes are more clear than the irregular coverage of CWEs.

"Software Fault Patterns (SFP) is a generalized description of an identifiable family of _computations_ that are:

* Described as patterns with an invariant core and variant parts.
* Aligned with injury.
* Aligned with operational views and risk through events.
* Fully identifiable in code (discernable).
* Aligned with CWE.
* With formally defined characteristics." [2]

SFP categorizes 632 CWEs plus there are 8 deprecated CWEs, so the CWEs defined as weaknesses total 640. In addition, there are: 21 primary clusters, 62 secondary clusters, 310 discernible CWEs, 36 unique SFPs. [3]

### Clusters and SFPs

| Primary Clusters | Secondary Cluster | SFP |
| --- | --- | --- |
| 1\. Risky Values | 1\. Glitch in Computation | SFP1 |
| 2\. Unused Entities | 1\. Unused Entities | SFP2 |
| 3\. API | 1\. Use of an Improper API | SFP3 |
| 4\. Exception Management | 1\. Unchecked Status Condition  <br>2\. Ambiguous Exception Type  <br>3\. Incorrect exception Behavior | SFP4  <br>SFP5  <br>SFP6 |
| 5\. Memory Access | 1\. Faulty Pointer Use  <br>2\. Faulty Buffer Access  <br>3\. Faulty String Expansion  <br>4\. Incorrect Buffer Length Computation  <br>5\. Improper NULL Termination | SFP7  <br>SFP8  <br>SFP9  <br>SFP10  <br>SFP11 |
| 6\. Memory Management | 1\. Faulty Memory Release | SFP12 |
| 7\. Resource Management | 1\. Unrestricted Consumption  <br>2\. Failure to release resource  <br>3\. Faulty Resource Use  <br>4\. Life Cycle | SFP13  <br>SFP14  <br>SFP15 |
| 8\. Path Resolution | 1\. Path Traversal  <br>2\. Failed Chroot Jail  <br>3\. Link in Resource Name Resolution | SFP16  <br>SFP17  <br>SFP18 |
| 9\. Synchronization | 1\. Missing Lock  <br>2\. Race Condition Window  <br>3\. Multiple Locks/Unlocks  <br>4\. Unrestricted Lock | SFP19  <br>SFP20  <br>SFP21  <br>SFP22 |
| 10\. Information Leak | 1\. Exposed Data  <br>2\. State Disclosure  <br>3\. Exposure Through Temporary files  <br>4\. Other Exposures  <br>5\. Insecure Session Management | SFP23 |
| 11\. Tainted Input | 1\. Tainted Input to Command  <br>2\. Tainted Input to Variable  <br>3\. Composite Tainted Input  <br>4\. Faulty input Transformation  <br>5\. Incorrect Input Handling  <br>6\. Tainted Input to Environment | SFP24  <br>SFP25  <br>SFP26  <br>  <br>  <br>SFP27 |
| 12\. Entry Points | 1\. Unexpected Access Points | SFP28 |
| 13\. Authentication | 1\. Authentication Bypass  <br>2\. Faulty Endpoint Authentication  <br>3\. Missing Endpoint Authentication  <br>4\. Digital Certificate  <br>5\. Missing Authentication  <br>6\. Insecure Authentication Policy  <br>7\. Multiple binds to the Same Port  <br>8\. Hardcoded Sensitive Data  <br>9\. Unrestricted Authentication | SFP29  <br>SFP30  <br>  <br>SFP31  <br>  <br>SFP32  <br>SFP33  <br>SFP34 |
| 14\. Access Control | 1\. Insecure Resource Access  <br>2\. Insecure Resource Permissions  <br>3\. Access Management | SFP35 |
| 15\. Privilege | 1\. Privilege | SFP36 |
| 16\. Channel | 1\. Channel Attack  <br>2\. Protocol Error |     |
| 17\. Cryptography | 1\. Broken Cryptography  <br>2\. Weak Cryptography |     |
| 18\. Malware | 1\. Malicious Code  <br>2\. Covert Channel |     |
| 19\. Predictability | 1\. Predictability |     |
| 20\. UI | 1\. Feature  <br>2\. Information Loss  <br>3\. Security |     |
| 21\. Other | 1\. Architecture  <br>2\. Design  <br>3\. Implementation  <br>4\. Compiler |     |

### Example

#### SFP 8 Faulty Buffer Access

<ul>

"Primary Cluster: Memory Access; Secondary Cluster: Faulty Buffer Access

A weakness where the code path has all of the following:

* an end statement that performs a Buffer Access Operation and where exactly one of the following is true:

* the access position of the Buffer Access Operation is outside of the buffer
or* the access position of the Buffer access Operation is inside the buffer and the size of the data being accessed is greater than the remaining size of the buffer at the access position.

This is where the Buffer Access Operation is a statement that performs access to a data item of a certain size at access position. The access position of a Buffer access Operation is related to a certain buffer and can be either inside the buffer or outside of the buffer.

Parameters:

* Access: Reads, Writes
* Buffer: Stack, Heap
* Access Position: Array with index, Pointer." [\[3\]](#ref)

</ul>

### Notes

SFP is an excellent advance. _However, SFP does not tie fault clusters to causes or chains of fault patterns nor to consequences of a particular vulnerability. In addition, since they were derived from CWEs, more work is needed for embedded or mobile concerns, such as, battery drain, physical sensors (e.g. Global Positioning System (GPS) location, gyroscope, microphone, camera) and wireless communications._

### References

\[1\] N. Mansourov and D. Campara, "[System Assurance: Beyond Detecting Vulnerabilities](https://www.elsevier.com/books/system-assurance/mansourov/978-0-12-381414-2)." Morgan Kaufmann. 2010. pp. 176-188.

\[2\] N. Mansourov. [DoD Software Fault Patterns](https://apps.dtic.mil/docs/citations/ADB381215). KDM Analytics, Inc. 2011.

\[3\] B. A. Calloni, D. Campara, and N. Mansourov. White Box Definitions of Software Fault Patterns. Final Report. Lockheed Martin Corporation and KDM Analytics, Inc. 2011.