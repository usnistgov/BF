---
title: "CWE"
bookHidden: true
---
# Common Weakness Enumeration (CWE)

The Common Weakness Enumeration (CWE) is an "encyclopedia" of over 600 types of software weaknesses [\[1\]](#ref). Some of the classes are buffer overflow, directory traversal, OS injection, race condition, cross-site scripting, hard-coded password and insecure random numbers. CWE is a widely-used compilation, which has gone through many iterations. Many tools and projects are based on it. Each CWE has a variety of information, such as description summary, extended description, white box definition, consequences, examples, background details and other notes, recorded occurrences (Common Vulnerabilities and Exposures or CVE), mitigations, relations to other CWEs, and references.

### Examples

#### CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')

> "The software constructs all or part of an SQL command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended SQL command when it is sent to a downstream component." [2]

#### CWE-226: Sensitive Information Uncleared Before Release

> "The software does not fully clear previously used information in a data structure, file, or other resource, before making that resource available to a party in another control sphere." [3]

### Notes

CWEs are a rich source of material for software developers and superior to anything that existed before. _However, for very formal, exacting work, CWE definitions are often inaccurate, imprecise or ambiguous, and the various definitions within one CWE can be inconsistent. Each CWE bundles many stages, such as likely attacks, resources affected and consequences. The coverage is uneven, with some combinations of attributes well represented and others not appearing at all._

<ul><i>

An extreme example is path traversal. There are a dozen CWEs for path traversal under [CWE-23: Relative Path Traversal](https://cwe.mitre.org/data/definitions/23.html), each one having a specific combination of relative or absolute paths, forward or backward slashes - singly or repeated, between one and three directory steps, and two or more dots, which indicate the parent directory.

Another example is buffer overflows. [CWE-121](https://cwe.mitre.org/data/definitions/121.html) is write outside of a buffer on the stack, [CWE-122](https://cwe.mitre.org/data/definitions/122.html) is write outside of a buffer in the heap, [CWE-127](https://cwe.mitre.org/data/definitions/127.html) is read before the beginning of a buffer and [CWE-126](https://cwe.mitre.org/data/definitions/126.html) is read after the end of a buffer. But there are no CWEs specifically for read outside a buffer on the stack vs. in the heap.

The description summary of [CWE-119: Improper Restriction of Operations within the Bounds of a Memory Buffer](https://cwe.mitre.org/data/definitions/119.html) is "The software performs operations on a memory buffer, but it can read from or write to a memory location that is outside of the intended boundary of the buffer." Note that "read from or write to a memory location" is not explicitly tied to the buffer! Most humans would, of course, assume that it means the software can access through a buffer a memory location that is not allocated to that buffer.

</i></ul>

### References

\[1\] The MITRE Corporation. [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/).

\[2\] The MITRE Corporation. CWE Common Weakness Enumeration. [CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')](https://cwe.mitre.org/data/definitions/89.html).

\[3\] The MITRE Corporation. CWE Common Weakness Enumeration. [CWE-226: Sensitive Information Uncleared Before Release](https://cwe.mitre.org/data/definitions/226.html).