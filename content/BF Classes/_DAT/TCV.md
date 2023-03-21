---
weight: 3
title: "TCV"
---
# Type Conversion (TCV) Class

### Definition

We define Type Conversion (TCV) as follows:

{{< definition >}}Data are converted or coerced into other type improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts TCV causes, attributes and consequences.

{{< img src="images/BF classes/_DAT-TCV.png" caption="Fig 1. Type Conversion (TCV) Class" >}}


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
			<td>Missing Code </td>
	<td>The entire operation or part of it is absent.</td>
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
			<td>Wrong Object Type Resolved </td>
	<td>zzzxxx Object is resolved from wrong scope, so its data type might be wrong (xxx parent vs child type).</td>
	</tr>
	<tr>
			<td>Missing Overloaded Function </td>
	<td>Code for particular function parameters' data types is absent.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
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
			<td>Type Fault</td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>Wrong Type </td>
	<td>Data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>Mismatched Argument </td>
	<td></td>
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
			<td>Type Error</td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>Wrong Type </td>
	<td>Data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>Wrong Value </td>
	<td>Data value is not accurate value (e.g., outside of a range).</td>
	</tr>
	<tr>
			<td>Truncated Value </td>
	<td>Rightmost bits of value that won’t fit type size are cut off.</td>
	</tr>
	<tr>
			<td>Distorted Value </td>
	<td>Incorrect value (although fits type size) due to sign flip or signed/unsigned and vice versa conversions.</td>
	</tr>
	<tr>
			<td>Rounded Value </td>
	<td>Real number value precision loss.</td>
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
			<td>Cast </td>
	<td>Explicitly convert the value of an object to another data type.</td>
	</tr>
	<tr>
			<td>Coerce </td>
	<td>Implicitly (forced by the Type System) convert the value of a passed in/out argument or the return into the corresponding parameter or return data type. (Type Coercion is known also as Type Juggling.</td>
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
			<td>Pass In </td>
	<td>Supply "in" arguments' data values to a function/ operator.</td>
	</tr>
	<tr>
			<td>Pass Out </td>
	<td>Supply "out" or "in/out" arguments' data values or a return value to a function/ operator.</td>
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
	