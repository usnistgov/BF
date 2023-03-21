﻿---
weight: 3
title: "TCM"
---
# Type Computation (TCM) Class

### Definition

We define Type Computation (TCM) as follows:

{{< definition >}}A numeric, pointer, or string value is calculated improperly of a condition is evaluated improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts TCM causes, attributes and consequences.

{{< img src="images/BF classes/_DAT-TCM.png" caption="Fig 1. Type Computation (TCM) Class" >}}


{{< rawhtml >}}
<table class="table">
		<tr>
			<td>
				**Causes**
			</td>
	<td>
				**Definition**
			</td>
	</tr>
	<tr>
			<td>Code Defect Bug</td>
	<td>The bug in the operation. It is the first cause for the chain of weaknesses comprising a software security vulnerability. It has to be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>Wrong Code </td>
	<td>An inappropriate data type is specified; or an inappropriate function/operator is used.</td>
	</tr>
	<tr>
			<td>Erroneous Code </td>
	<td>The operation implementation has a bug.</td>
	</tr>
	<tr>
			<td>Name Fault</td>
	<td>The resolved name is wrong.</td>
	</tr>
	<tr>
			<td>Wrong Object Resolved </td>
	<td>zzzxxx Object is resolved from wrong scope.</td>
	</tr>
	<tr>
			<td>Wrong Function Resolved </td>
	<td>Function is resolved from wrong scope.</td>
	</tr>
	<tr>
			<td>Wrong Generic Function Bound </td>
	<td>Code for a wrong data type is bound due to wrong generic type arguments.</td>
	</tr>
	<tr>
			<td>Wrong Overridden Function Bound </td>
	<td>Code from wrong subtype is bound due to a wrong invoking subtype object.</td>
	</tr>
	<tr>
			<td>Wrong Overloaded Function Bound </td>
	<td>Wrong overloaded implementation is bound due to wrong function arguments.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>Wrong Argument </td>
	<td>Inaccurate input data value, i.e., non-verified for harmed semantics.</td>
	</tr>
	<tr>
			<td>Reference vs. Object </td>
	<td>Object's address instead of object's data value.</td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>Wrong Type </td>
	<td>Data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>Wrong Object Type Resolved </td>
	<td>zzzxxx Object is resolved from wrong scope, so its data type might be wrong (xxx parent vs child type).</td>
	</tr>
	<tr>
			<td>
				**Consequences**
			</td>
	<td>
				**Definition**
			</td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>Under Range </td>
	<td>Data value is smaller than type's lower range.</td>
	</tr>
	<tr>
			<td>Over Range </td>
	<td>Data value is larger than type's upper range.</td>
	</tr>
	<tr>
			<td>Flipped Sign </td>
	<td>Sign bit is overwritten from type related calculation.</td>
	</tr>
	<tr>
			<td>Wrong Result </td>
	<td>Incorrect value from type conversion or computation.</td>
	</tr>
	<tr>
			<td>Wrap Around </td>
	<td>A moved around-the-clock value over its data type upper or lower range, as it exceeds that range. (Integer Over-/Under-flow is a wrapped-around the upper/lower range integer value; may become very small/large and change to the opposite sign.</td>
	</tr>
	<tr>
			<td>Type Compute Final Error</td>
	<td>Undefined or exploitable system behavior caused by 'arithmetic' type computation bugs.</td>
	</tr>
	<tr>
			<td>Undefined </td>
	<td>The Type System cannon represent the calculated result (e.g. division by 0).</td>
	</tr>
	<tr>
			<td>
				**Operations**
			</td>
	<td>
				**Definition**
			</td>
	</tr>
	<tr>
			<td>Calculate </td>
	<td>Find the result of a numeric, pointer, or string operation.</td>
	</tr>
	<tr>
			<td>Evaluate </td>
	<td>Find the result of a Boolean condition (incl. comparison).</td>
	</tr>
	<tr>
			<td>
				**Operations Attributes**
			</td>
	<td>
				**Definition**
			</td>
	</tr>
	<tr>
			<td>Mechanism Attribute</td>
	<td>Shows how the buggy/faulty operation code is performed.</td>
	</tr>
	<tr>
			<td>Function </td>
	<td></td>
	</tr>
	<tr>
			<td>Operator </td>
	<td>A function with a symbolic name that implements a mathematical, relational or logical operation.</td>
	</tr>
	<tr>
			<td>Method </td>
	<td>A member function of an OOP class.</td>
	</tr>
	<tr>
			<td>Lambda Expression </td>
	<td>An anonymous function, implemented within another function.</td>
	</tr>
	<tr>
			<td>Procedure </td>
	<td>A function with a void return type.</td>
	</tr>
	<tr>
			<td>Source Code Attribute</td>
	<td>Shows where the buggy/faulty operation code is in the program -- in what kind of software.</td>
	</tr>
	<tr>
			<td>Codebase </td>
	<td>The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>Third-Party Library </td>
	<td>The operation is in a third-party library.</td>
	</tr>
	<tr>
			<td>Standard Library </td>
	<td>The operation is in the standard library for a particular programming language.</td>
	</tr>
	<tr>
			<td>Compiler/Interpreter </td>
	<td>The operation is in the language processor that allows execution or creates executables (compiler, assembler, interpreter).</td>
	</tr>
	<tr>
			<td>Execution Space Attribute</td>
	<td>Shows where buggy/faulty operation code is running or with what privilege level).</td>
	</tr>
	<tr>
			<td>Local </td>
	<td>The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
	</tr>
	<tr>
			<td>Admin </td>
	<td>The bugged code runs in an environment with access control policy with unlimited (admin user) permission.</td>
	</tr>
	<tr>
			<td>Bare-Metal </td>
	<td>The bugged code runs in an environment without privilege control. Usually, the program is the only software running and has total access to the hardware.</td>
	</tr>
	<tr>
			<td>
				**Operands**
			</td>
	<td>
				**Definition**
			</td>
	</tr>
	<tr>
			<td>Name </td>
	<td>The declared identifier for an entity.</td>
	</tr>
	<tr>
			<td>State Attribute</td>
	<td></td>
	</tr>
	<tr>
			<td>Bound </td>
	<td></td>
	</tr>
	<tr>
			<td>Resolved </td>
	<td></td>
	</tr>
	<tr>
			<td>Data </td>
	<td>The data value of an object -- stored in object's memory.</td>
	</tr>
	<tr>
			<td>Kind Attribute</td>
	<td>Shows what kind the data value is.</td>
	</tr>
	<tr>
			<td>Numeric </td>
	<td>A number -- a sequence of digits.</td>
	</tr>
	<tr>
			<td>Text </td>
	<td>A string -- a sequence of symbols.</td>
	</tr>
	<tr>
			<td>Pointer </td>
	<td>A holder of the memory address of an object.</td>
	</tr>
	<tr>
			<td>Boolean </td>
	<td>A truth value -- true or false; 1 or 0.</td>
	</tr>
	<tr>
			<td>Type </td>
	<td>The data type of an object -- the set or a range of values (e.g., char is within [-128, 127]) and the operations allowed over them (e.g., +, *, mod).</td>
	</tr>
	<tr>
			<td>Kind Attribute</td>
	<td>Shows what kind the data type composition is.</td>
	</tr>
	<tr>
			<td>Primitive </td>
	<td>A scalar data type that mimics the hardware units - e.g., int (long, short, signed), float, double, string, Boolean. A primitive data type is only language defined and is not built from other data types.</td>
	</tr>
	<tr>
			<td>Structure </td>
	<td>A composite data type - e.g., array, list, map, class. A structured data type is built from other data types and has primitive or structured members.</td>
	</tr>
	
</table>
{{< /rawhtml >}}
	