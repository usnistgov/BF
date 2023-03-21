﻿---
weight: 1
title: "CVE-2021-21834"
---
# BF Description of [CVE-2021-21834](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-21834)

### BF Taxonomy

{{< img src="images/BFCVE Descriptions/CWE-468-Example-1.png" caption="Fig 1. BF Descriptions of CWE-468-Example-1." >}}

	
{{< rawhtml >}}
<table class="table">
		<tr>
			<td>**Classes**</td>
	<td>**Definition**</td>
	</tr>
	<tr>
			<td>**Operations**</td>
	<td>**Definition**</td>
	</tr>
	<tr>
			<td>**Causes/Consequences**</td>
	<td>**Definition**</td>
	</tr>
	<tr>
			<td>Code Defect Bug</td>
	<td>The bug in the operation. It is the first cause for the chain of weaknesses comprising a software security vulnerability. It has to be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>      Wrong Code</td>
	<td>An inappropriate data type is specified; or an inappropriate function/operator is used.</td>
	</tr>
	<tr>
			<td>Type </td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>      Wrong Type</td>
	<td>Data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>      Wrong Argument Type</td>
	<td>Argument to an overloaded function is of wrong data type.</td>
	</tr>
	<tr>
			<td>Name </td>
	<td>The resolved name is wrong.</td>
	</tr>
	<tr>
			<td>      Wrong Overloaded Function Bound</td>
	<td>Wrong overloaded implementation is bound due to wrong function arguments.</td>
	</tr>
	<tr>
			<td>Data Error/Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>      Wrong Result</td>
	<td>Incorrect value from type conversion or computation.</td>
	</tr>
	<tr>
			<td>      Wrong Index</td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Address Error/Fault</td>
	<td>The used object address is wrong.</td>
	</tr>
	<tr>
			<td>      Over Bounds Pointer</td>
	<td>Points above the upper boundary of its object.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>Undefined or exploitable system behavior caused by memory allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>      Buffer Overflow</td>
	<td>Writes above the upper bound of an object -- aka Buffer Over-Write.</td>
	</tr>
	<tr>
			<td>**Operation Attributes**</td>
	<td>**Definition**</td>
	</tr>
	<tr>
			<td>Mechanism</td>
	<td>Shows how the buggy/faulty operation code is performed.</td>
	</tr>
	<tr>
			<td>      Pass In</td>
	<td>Supply "in" arguments' data values to a function/ operator.</td>
	</tr>
	<tr>
			<td>      Ad-hoc Bind</td>
	<td>Resolve overloaded function via signature and set implementation.</td>
	</tr>
	<tr>
			<td>      Operator</td>
	<td>A function with a symbolic name that implements a mathematical, relational or logical operation.</td>
	</tr>
	<tr>
			<td>      Direct</td>
	<td>The operation is performed over a particular object element.</td>
	</tr>
	<tr>
			<td>Source Code</td>
	<td>Shows where the buggy/faulty operation code is in the program -- in what kind of software.</td>
	</tr>
	<tr>
			<td>      Codebase</td>
	<td>The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>Execution Space</td>
	<td>Shows where buggy/faulty operation code is running or with what privilege level).</td>
	</tr>
	<tr>
			<td>      Local</td>
	<td>The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
	</tr>
	<tr>
			<td>      Userland</td>
	<td>The bugged code runs in an environment with privilege levels, but in unprivileged mode (e.g., ring 3 in x86 architecture).</td>
	</tr>
	<tr>
			<td>**Operand Attributes**</td>
	<td>**Definition**</td>
	</tr>
	<tr>
			<td>Data Kind</td>
	<td>Shows what kind the data value is.</td>
	</tr>
	<tr>
			<td>      Pointer</td>
	<td>A holder of the memory address of an object.</td>
	</tr>
	<tr>
			<td>Type Kind</td>
	<td>Shows what kind the data type composition is.</td>
	</tr>
	<tr>
			<td>      Primitive</td>
	<td>A scalar data type that mimics the hardware units - e.g., int (long, short, signed), float, double, string, Boolean. A primitive data type is only language defined and is not built from other data types.</td>
	</tr>
	<tr>
			<td>Name Kind</td>
	<td>Shows what kind the named entity is.</td>
	</tr>
	<tr>
			<td>      Object</td>
	<td>A memory region used to store data.</td>
	</tr>
	<tr>
			<td>Address State</td>
	<td>Shows where the allocated memory is.</td>
	</tr>
	<tr>
			<td>      Stack</td>
	<td>The object is a non-static local variable (defined in a function, a passed parameter, or a function return address).</td>
	</tr>
	<tr>
			<td>Size Kind</td>
	<td>Shows what kind the size this is.</td>
	</tr>
	<tr>
			<td>      Actual</td>
	<td>The size of the object.</td>
	</tr>
	<tr>
			<td>Address Kind</td>
	<td>Shows how much memory is accessed outside object's bounds.</td>
	</tr>
	<tr>
			<td>      Litle</td>
	<td></td>
	</tr>
	
</table>
{{< /rawhtml >}}
	