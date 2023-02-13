---
weight: 1
title: "BOF"
---
# Buffer Overflow (BOF) Class

### Definition

We define Buffer Overflow (BOF) as:

{{< definition >}}The software accesses through an array a memory location that is outside the boundaries of that array.{{< /definition >}} [1]

Often referred to as a "buffer," an array is a contiguously allocated set of objects [1], called elements. An array has a definite size, that is, a definite number of elements are allocated to it. The software should not use the array name to access anything outside the boundary of the allocated elements. The elements are all of the same data type and are accessed by integer offsets.

If the software can utilize the array name (more generally, array handle) to access any memory other than the allocated objects, it falls into this class.

### Type

Low-level (language related).

### Taxonomy

Fig. 1 depicts BOF causes, attributes and consequences.

{{< img src="images/BOFModelv4.png" height="400" caption="Fig 1. Buffer Overflow (BOF) Class" >}}

### Attributes

**Access** – Read, Write.

This is the access operation causing buffer overflow.

**Boundary** – Below, Above.

This indicated which end of the array is violated.

**Location** \- Heap, Stack.

This indicates what part of memory the array is allocated in.

**Magnitude** \- Small, Moderate, Far.

This indicates how far outside the boundary the violation extends – one to a few bytes; eight to dozens bytes; or hundreds, thousands or more bytes.

**Data Size** \- Little, Some, Huge.

This indicates how much data is accessed beyond the boundary.

**Excursion** \- Continuous, Discrete.

This indicates whether the violating access was preceded by consecutive accesses of elements within the array (continuous) or the violation was just accessing outside of the array (discrete).

_Any of the attributes may be "any," "don't care" or "unknown." For example, strict bounds checking is equally effective regardless of the location, magnitude, data size or excursion of the violation. Keeping return addresses in a separate stack helps prevent problems occurring from write accesses when the array location is the stack._

### Causes

In the graph of causes, _Data Exceeds Array_ may be caused by an _Input \[that is\] Not Checked Properly_ or by an _Incorrect Calculation_. The specific cases of _Data Exceeds Array_ are _Array Too Small_ and _Too Much Data_. Too Much Data may be caused by _No NULL Termination_. _Wrong Index_ \[or\] _Pointer Out of Range_ may be caused by _Incorrect Calculation_, too, or by an _Incorrect Conversion_.

The specific cases of _Incorrect Calculation_ are _Missing Factor_, _Incorrect Argument_, _Off By One_, _Integer Coercion_, _Integer Overflow_, _Wrap-around_ and _Integer Underflow_.

_Array Too Small_ indicates the array was allocated smaller than it should have been. This may occur because the programmer leaves out a factor, like the size of a header, uses the wrong variable, or forgets room for a null to terminate a string.

_Too Much Data_ indicates more data is accessed than was anticipated. This may occur because the string is not NULL terminated or the amount of data is calculated differently than the size of the buffer (e.g. Heartbleed).

Exposition: When we examine code, we can say in some cases that the programmer allocated the array too small, such as in CVE-2015-0235 - Ghost. The code computes the size of a buffer needed, but leaves out one factor, which makes the buffer four bytes short. In other cases, too much data was accessed, such as in CVE-2014-0160 - Heartbleed. A string was stored in an array, but instead of computing the length of the string, the code used a length from the input, which was not checked against the string. This can cause the code to read far more from the buffer than was allocated. In both cases, the size of the data exceeds the size of the array. Just looking at the code, it may be difficult to determine which case it is - it needs semantic content. That's why the two are sub-causes of one cause.

### Consequences

The graph of consequences shows what could happen due to the fault. _Resource Exhaustion_ refers to Memory and CPU.

### Sites

BOF may occur at the use of `[ ]` or the use of unary `*` operator with arrays in the C language. Sites also include the use of many string library functions, such as `strcpy()` or `strcat()`.

### Related BF Classes

BF classes related to BOF are: IEX, ATN, &lt;<content to be added&gt;>.

### Related CWEs and SFP

CWEs related to BOF are [CWE-118](https://cwe.mitre.org/data/definitions/118.html), [CWE-119](https://cwe.mitre.org/data/definitions/119.html), [CWE-120](https://cwe.mitre.org/data/definitions/120.html), [CWE-121](https://cwe.mitre.org/data/definitions/121.html), [CWE-122](https://cwe.mitre.org/data/definitions/122.html), [CWE-123](https://cwe.mitre.org/data/definitions/123.html), [CWE-124](https://cwe.mitre.org/data/definitions/124.html), [CWE-125](https://cwe.mitre.org/data/definitions/125.html), [CWE-126](https://cwe.mitre.org/data/definitions/126.html), [CWE-127](https://cwe.mitre.org/data/definitions/127.html), [CWE-129](https://cwe.mitre.org/data/definitions/129.html), [CWE-680](https://cwe.mitre.org/data/definitions/680.html), [CWE-786](https://cwe.mitre.org/data/definitions/786.html), [CWE-787](https://cwe.mitre.org/data/definitions/787.html), [CWE-788](https://cwe.mitre.org/data/definitions/788.html), [CWE-823](https://cwe.mitre.org/data/definitions/823.html).

BF BOF description of these CWEs are provided here.

The only related SFP cluster is [SFP8 Faulty Buffer Access under Primary Cluster: Memory Access](http://www.dtic.mil/docs/citations/ADB381215).

BF Descriptions of BOF Related CWEs are provided [here](https://docs.google.com/document/d/1W2Tc91lehPQLAgTP3vmV-n3ze5SzxKv82O_MJwKsKmM/edit).

### Application

Application examples are provided [here](/Old/Examples/BOF.md).

### References

\[1\] I. Bojanova, P. E. Black, Y. Yesha, and Y. Wu, “The Bugs Framework (BF): A Structured approach to express bugs”, Proceedings of IEEE International Conference on Software Quality, Reliability and Security (QRS), 2016, , pp. 175-182.

\[2\] Information Technology -- Programming Languages – C”, ISO/IEC 9899:2011. Committee Draft-April 12, 2011 N1570, The International Organization for Standardization and the International Electrotechnical Commission (ISO/IEC) Joint Technical Committee JTC 1, Information technology, Subcommittee SC 22, Programming languages, their environments and system software interfaces. Working Group WG 14 - C. Tech. Rep. 2011.