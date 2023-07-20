---
weight: 3
title: "TCV"
---
# BF Type Conversion (TCV) Class

### Definition
{{< definition >}}Data are converted or coerced into other type improperly.{{< /definition >}}

###  Taxonomy


{{< img src="images/BF Classes/_DAT/TCV.png" >}}

<table>
<tr>
<td>
<button class="btn btn-primary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTable" aria-expanded="false" aria-controls="collapseTable">Show/Hide Definitions</button>
</td>
</tr>
</table>
	
{{< rawhtml >}}
<div class="collapse" id="collapseTable">
<table>
<tr>
			<td><strong>Operations</strong></td>
	<td><strong>Definition</strong></td>
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
			<td><strong>Operands</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Name </td>
	<td>The declared identifier for an entity.</td>
	</tr>
	<tr>
			<td>Data </td>
	<td>The data value of an object -- stored in object's memory.</td>
	</tr>
	<tr>
			<td>Type </td>
	<td>The data type of an object -- the set of allowed values (e.g., char is within [-128, 127]) and the operations allowed over them (e.g., +, *, mod).</td>
	</tr>
	<tr>
			<td><strong>Causes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Code Defect Bug</td>
	<td>A bug is in the operation. It is the first cause for the chain of weaknesses underlying a software security vulnerability. It must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Wrong Code </td>
	<td>An inappropriate data type is specified; or an inappropriate function/operator is used.</td>
	</tr>
	<tr>
			<td>   Missing Code </td>
	<td>The entire operation implementation or a part of its specification is absent.</td>
	</tr>
	<tr>
			<td>Name Fault</td>
	<td>The resolved name is wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Object Resolved </td>
	<td>zzzxxx Object is resolved from wrong scope.</td>
	</tr>
	<tr>
			<td>   Wrong Object Type Resolved </td>
	<td>zzzxxx Object is resolved from wrong scope, so its data type might be wrong (xxx parent vs child type).</td>
	</tr>
	<tr>
			<td>   Missing Overloaded Function </td>
	<td>Code for particular function parameters' data types is absent.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Under Range </td>
	<td>Data value is smaller than type's lower range.</td>
	</tr>
	<tr>
			<td>   Over Range </td>
	<td>Data value is larger than type's upper range.</td>
	</tr>
	<tr>
			<td>   Flipped Sign </td>
	<td>Sign bit is overwritten from type related calculation.</td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type </td>
	<td>A data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>   Mismatched Argument </td>
	<td>An argument is not of the paraneter data type.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Type Error</td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type </td>
	<td>A data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Wrong Value </td>
	<td>Data value is not accurate value (e.g., outside of a range).</td>
	</tr>
	<tr>
			<td>   Flipped Sign </td>
	<td>Sign bit is overwritten from type related calculation.</td>
	</tr>
	<tr>
			<td>   Truncated Value </td>
	<td>Rightmost bits of value that won’t fit type size are cut off.</td>
	</tr>
	<tr>
			<td>   Distorted Value </td>
	<td>Incorrect value (although fits type size) due to sign flip or signed/unsigned and vice versa conversions.</td>
	</tr>
	<tr>
			<td>   Rounded Value </td>
	<td>Real number value precision loss.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Shows how the buggy/faulty operation code is performed.</td>
	</tr>
	<tr>
			<td>   Pass In </td>
	<td>Supplying "in" arguments' data values to a function/ operator.</td>
	</tr>
	<tr>
			<td>   Pass Out </td>
	<td>Supplying "out" or "in/out" arguments' data values or a return value to a function/ operator.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Shows where the buggy/faulty operation code is in the program -- in what kind of software.</td>
	</tr>
	<tr>
			<td>   Codebase </td>
	<td>The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>   Third-Party </td>
	<td>The operation is in a third-party software.</td>
	</tr>
	<tr>
			<td>   Standard Library </td>
	<td>The operation is in the standard library for a particular programming language.</td>
	</tr>
	<tr>
			<td>   Compiler/Interpreter </td>
	<td>The operation is in the language processor that allows execution or creates executables (compiler, assembler, interpreter).</td>
	</tr>
	<tr>
			<td>Execution Space </td>
	<td>Shows where the buggy/faulty operation code is running or with what privilege level).</td>
	</tr>
	<tr>
			<td>   Local </td>
	<td>The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
	</tr>
	<tr>
			<td>   Admin </td>
	<td>The bugged code runs in an environment with access control policy with unlimited (admin user) permission.</td>
	</tr>
	<tr>
			<td>   Bare-Metal </td>
	<td>The bugged code runs in an environment without privilege control. Usually, the program is the only software running and has total access to the hardware.</td>
	</tr>
	<tr>
			<td><strong>Operands Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>         Name State </td>
	<td>Shows at what stage the entity name is.</td>
	</tr>
	<tr>
			<td>            Resolved </td>
	<td>The name scope is known to the The Type System.</td>
	</tr>
	<tr>
			<td>            Bound </td>
	<td>The name is linked to a declared (or inferred) data type and a defined object's data or a called function implementation.</td>
	</tr>
	<tr>
			<td>         Data Kind </td>
	<td>Shows what the data value is.</td>
	</tr>
	<tr>
			<td>            Numeric </td>
	<td>A number -- a sequence of digits.</td>
	</tr>
	<tr>
			<td>            Text </td>
	<td>A string -- a sequence of symbols.</td>
	</tr>
	<tr>
			<td>            Pointer </td>
	<td>A holder of the memory address of an object.</td>
	</tr>
	<tr>
			<td>            Boolean </td>
	<td>A truth value -- true or false; 1 or 0.</td>
	</tr>
	<tr>
			<td>         Type Kind </td>
	<td>Shows what the data type composition is.</td>
	</tr>
	<tr>
			<td>            Primitive </td>
	<td>A scalar data type that mimics the hardware units - e.g., int (long, short, signed), float, double, string, Boolean. A primitive data type is only language defined and is not built from other data types.</td>
	</tr>
	<tr>
			<td>            Structure </td>
	<td>A composite data type - e.g., array, list, map, class. A structured data type is built from other data types and has primitive or structured members.</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

