---
weight: 3
title: "TCV"
---
## BF Type Conversion (TCV) Bugs Class 

#### Definition
{{< definition >}}Type Conversion (TCV) class – Data are converted or coerced into other type improperly.{{< /definition >}}

####  Taxonomy


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
	<td>Cast operation – Explicitly convert the value of an object to another data type.</td>
	</tr>
	<tr>
			<td>Coerce </td>
	<td>Coerce operation – Implicitly (forced by the Type System) convert the value of a passed in/out argument or the return into the corresponding parameter or return data type. (Type Coercion is known also as Type Juggling.)</td>
	</tr>
	<tr>
			<td><strong>Operands</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Name </td>
	<td>Name operand – The identifier of an object, function, or data type entity used to reference it.</td>
	</tr>
	<tr>
			<td>Data </td>
	<td>Data operand – The data value of an object – i.e., the actual value that is stored in memory.</td>
	</tr>
	<tr>
			<td>Type </td>
	<td>Type operand – The data type of an object – i.e., the set of allowed values (e.g., char is within [-128, 127]) and operations over them (e.g., +, *, mod).</td>
	</tr>
	<tr>
			<td><strong>Causes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Code Bug</td>
	<td>Code Bug type – An error in the implementation of an operation – proper operands over an improper operation. It is the roor cause of a security vulnerability. Must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Missing Code </td>
	<td>Missing Code bug - The operation is entirely absent.</td>
	</tr>
	<tr>
			<td>   Wrong Code </td>
	<td>Wrong Code bug - An incorrect operator or function is used, or an incorrect data type is specified.</td>
	</tr>
	<tr>
			<td>Name Fault</td>
	<td>Name Fault/Error type – The fully resolved name of an entity is wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Object Resolved </td>
	<td>Wrong Object Resolved fault/error – The object is resolved from wrong scope.</td>
	</tr>
	<tr>
			<td>   Missing Overloaded Function </td>
	<td>Missing Overloaded Function fault/error – Code for particular function parameters' data types is absent.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Data Fault/Error type – The data of an object has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Under Range </td>
	<td>Under Range fault/error – The data value is smaller than the lower range of its type.</td>
	</tr>
	<tr>
			<td>   Over Range </td>
	<td>Over Range fault/error – The data value is larger than the upper range of its type.</td>
	</tr>
	<tr>
			<td>   Flipped Sign </td>
	<td>Flipped Sign fault/error – Sign bit is overwritten from type related calculation.</td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>Type Fault/Error type – The set or range of allowed values of an entity is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type </td>
	<td>Wrong Type fault/error – A data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>   Wrong Object Type Resolved </td>
	<td>Wrong Object Type Resolved fault/error – An object is resolved from a wrong scope, so its data type might be wrong (e.g., a parent vs a child data type).</td>
	</tr>
	<tr>
			<td>   Mismatched Argument </td>
	<td>Mismatched Argument fault/error – An argument is not of the parameter data type.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Data Fault/Error type – The data of an object has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Wrong Value </td>
	<td>Wrong Value fault/error – The data value is not accurate (e.g., outside of a range).</td>
	</tr>
	<tr>
			<td>   Flipped Sign </td>
	<td>Flipped Sign fault/error – Sign bit is overwritten from type related calculation.</td>
	</tr>
	<tr>
			<td>   Truncated Value </td>
	<td>Truncated Value fault/error – The rightmost bits of a data value that won’t fit the data type size are cut off.</td>
	</tr>
	<tr>
			<td>   Distorted Value </td>
	<td>Distorted Value fault/error – The data value is incorrect (although is fits the type size) due to a sign flip or signed/unsigned or unsigned/signed cast.</td>
	</tr>
	<tr>
			<td>   Rounded Value </td>
	<td>Rounded Value fault/error – Precision loss of a real number.</td>
	</tr>
	<tr>
			<td>Type Error</td>
	<td>Type Fault/Error type – The set or range of allowed values of an entity is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Cast Pointer </td>
	<td>Cast Pointer fault/error – A pointer is type cast to a data type that is incompatible with its object's data type.</td>
	</tr>
	<tr>
			<td>   Downcast Pointer </td>
	<td>Downcast Pointer fault/error – A pointer is cast to a subtype (base to subclass or subclass to subclass) that is incompatible with its object's data type. The object may invoke an overridden function is of a wrong subtype.</td>
	</tr>
	<tr>
			<td>   Wrong Type </td>
	<td>Wrong Type fault/error – A data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>Type Conversion Final Error</td>
	<td></td>
	</tr>
	<tr>
			<td>   Subtype Confusion </td>
	<td>Subtype Confusion final error – A downcast pointer and its object have incompatible data types.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the operation the operation with a bug or faulty operand is performed.</td>
	</tr>
	<tr>
			<td>   Pass In </td>
	<td>Pass In operation attribute – The operation is via in arguments' values to a function/ operator.</td>
	</tr>
	<tr>
			<td>   Pass Out </td>
	<td>Pass Out operation attribute – The operation is via out or in/out arguments' values or a return value to a function/ operator.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the code of the operation with a bug or faulty operand resides within the software, firmware, or hardware.</td>
	</tr>
	<tr>
			<td>   Codebase </td>
	<td>Codebase operation attribute – The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>   Third-Party </td>
	<td>Third-Party operation attribute – The operation code is in a third-party source.</td>
	</tr>
	<tr>
			<td>   Standard Library </td>
	<td>Standard Library operation attribute – The operation code is in the standard library for a particular programming language.</td>
	</tr>
	<tr>
			<td>   Compiler/Interpreter </td>
	<td>Compiler/Interpreter operation attribute – The operation code is in the language processor that allows execution or creates executables (interpreter, compiler, assembler).</td>
	</tr>
	<tr>
			<td>Execution Space </td>
	<td>Execution Space operation attribute type – Shows where the operation with a bug or faulty operand is executed and the privilege level at which it runs.</td>
	</tr>
	<tr>
			<td>   Local </td>
	<td>Local operation attribute – The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
	</tr>
	<tr>
			<td>   Admin </td>
	<td>Admin operation attribute – The bugged code runs in an environment with access control policy with unlimited (admin user) permission.</td>
	</tr>
	<tr>
			<td>   Bare-Metal </td>
	<td>Bare-Metal operation attribute – The bugged code runs in an environment without privilege control. Usually, the program is the only software running and has total access to the hardware.</td>
	</tr>
	<tr>
			<td><strong>Operands Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>         Name State </td>
	<td>Name State operand attribute type – Shows what the stage of the entity name is.</td>
	</tr>
	<tr>
			<td>            Resolved </td>
	<td>Resolved operand attribute – The name scope is known to the Type System.</td>
	</tr>
	<tr>
			<td>            Bound </td>
	<td>Bound operand attribute – The name is linked to a declared (or inferred) data type, a defined object's data, or a called function implementation.</td>
	</tr>
	<tr>
			<td>         Data Kind </td>
	<td>Data Kind operand attribute type – Shows what the type or category of data is.</td>
	</tr>
	<tr>
			<td>            Numeric </td>
	<td>Numeric operand attribute – A number – a sequence of digits.</td>
	</tr>
	<tr>
			<td>            Text </td>
	<td>Text operand attribute – A string – a sequence of symbols.</td>
	</tr>
	<tr>
			<td>            Pointer </td>
	<td>Pointer operand attribute – A holder of the memory address of an object.</td>
	</tr>
	<tr>
			<td>            Boolean </td>
	<td>Boolean operand attribute – A truth/falsity value – true or false; 1 or 0.</td>
	</tr>
	<tr>
			<td>         Type Kind </td>
	<td>Type Kind operand attribute type – Shows what the data type composition is.</td>
	</tr>
	<tr>
			<td>            Primitive </td>
	<td>Primitive operand attribute – A scalar data type that mimics the hardware units - e.g., int (long, short, signed), float, double, string, Boolean. A primitive data type is only language defined and is not built from other data types.</td>
	</tr>
	<tr>
			<td>            Structure </td>
	<td>Structure operand attribute – A composite data type - e.g., array, list, map, class. A structured data type is built from other data types and has primitive or structured members.</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

