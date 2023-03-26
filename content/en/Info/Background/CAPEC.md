---
title: "CAPEC"
bookHidden: true
---
# Common Attack Pattern Enumeration and Classification (CAPEC)

The Common Attack Pattern Enumeration and Classification (CAPEC) "is a comprehensive dictionary and classification taxonomy of known attacks that can be used by analysts, developers, testers, and educators to advance community understanding and enhance defenses" [1].

### Examples

#### CAPEC-66: SQL Injection

> "This attack exploits target software that constructs SQL statements based on user input. An attacker crafts input strings so that when the target software constructs SQL statements based on the input, the resulting SQL statement performs actions other than those the application intended..." [2]

#### CAPEC-540: Overread Buffers

> "An adversary attacks a target by providing input that causes an application to read beyond the boundary of a defined buffer. This typically occurs when a value influencing where to start or stop reading is set to reflect positions outside of the valid memory location of the buffer. This type of attack may result in exposure of sensitive information, a system crash, or arbitrary code execution." [3]

### References

\[1\] The MITRE Corporation. [Common Attack Pattern Enumeration and Classification (CAPEC)](https://capec.mitre.org/).

\[2\] The MITRE Corporation. CAPEC Common Attack Pattern Enumeration and Classification. [CAPEC-66: SQL Injection](https://capec.mitre.org/data/definitions/66.html).

\[3\] The MITRE Corporation. CAPEC Common Attack Pattern Enumeration and Classification. [CAPEC-540: Overread Buffers](https://capec.mitre.org/data/definitions/540.html).