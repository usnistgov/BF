---
weight: 3
title: "DCL"
---
## BF Declaration (DCL) Bugs Class <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

#### Definition
{{< definition >}}Declaration (DCL) class – An object, a function, a type, or a namespace is declared or defined improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_DAT/DCL.png" >}}

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
			<td>Declare </td>
	<td>Declare operation – Specify the name and type of an object; the name, return type, and parameters of a function; or the name and type parameters of a type.</td>
	</tr>
	<tr>
			<td>Define </td>
	<td>Define operation – Specify the implementation of a function; or the member objects and functions of a type. (The data of an object is specified at its initialization – see MAD and MUS.)</td>
	</tr>
	<tr>
			<td><strong>Operands</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Name </td>
	<td>Name operand – The declared identifier for an entity.</td>
	</tr>
	<tr>
			<td>Type </td>
	<td>Type operand – The data type of an object – the set of allowed values (e.g., char is within [-128, 127]) and the operations allowed over them (e.g., +, *, mod).</td>
	</tr>
	<tr>
			<td><strong>Causes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Code Bug</td>
	<td>Code Bug type – Defect in the implementation of the operation – proper operands over an improper operation. A first cause for the chain of weaknesses underlying a software security vulnerability. Must be fixed to resolve the vulnerability.</td>
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
			<td>   Erroneous Code </td>
	<td>Erroneous Code bug - There is a coding error in the implementation of the operation.</td>
	</tr>
	<tr>
			<td>Specification Bug</td>
	<td>Specification Bug type – Defect in the design of the operation – proper operands over an improper operation. A first cause for the chain of weaknesses underlying a software security vulnerability. Must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Missing Modifier </td>
	<td>A required behavioral restriction is absent.</td>
	</tr>
	<tr>
			<td>   Wrong Modifier </td>
	<td>A wrong behavioral restriction is specified.</td>
	</tr>
	<tr>
			<td>   Anonymous Scope </td>
	<td>The declaration is in an unnamed scope.</td>
	</tr>
	<tr>
			<td>   Wrong Scope </td>
	<td></td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>Type Fault/Error type – The the set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type Resolved </td>
	<td>Wrong Type Resolved fault/error – A data type is resolved from a wrong scope.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Name Error</td>
	<td>Name Fault/Error type – The fully resolved name is wrong.</td>
	</tr>
	<tr>
			<td>   Missing Overridden Function </td>
	<td>Missing Overridden Function fault/error – Function implementation in a particular subclass is absent.</td>
	</tr>
	<tr>
			<td>   Missing Overloaded Function </td>
	<td>Missing Overloaded Function fault/error – Code for particular function parameters' data types is absent.</td>
	</tr>
	<tr>
			<td>Type Error</td>
	<td>Type Fault/Error type – The the set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type </td>
	<td>Wrong Type fault/error – A data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>   Incomplete Type </td>
	<td>Incomplete Type fault/error – A specific constructor, method, or overloaded function is missing.</td>
	</tr>
	<tr>
			<td>   Wrong Generic Type </td>
	<td>Wrong Generic Type fault/error – A generic object is instantiated via wrong type argument.</td>
	</tr>
	<tr>
			<td>   Confused Subtype </td>
	<td>Confused Subtype fault/error – The object invoking an overridden function is of wrong subtype data type.</td>
	</tr>
	<tr>
			<td>   Wrong Argument Type </td>
	<td>Wrong Argument Type fault/error – An argument to an overloaded function is of incorrect data type.</td>
	</tr>
	<tr>
			<td>Access Final Error</td>
	<td>Access exploitable error type – An exploitable or undefined  system behavior caused by 'name access' declaration bugs.</td>
	</tr>
	<tr>
			<td>   Wrong Access Object </td>
	<td>Wrong Access Object exploitable error – An unauthorized access to an object; allows access to sensitive data or to member functions.</td>
	</tr>
	<tr>
			<td>   Wrong Access Type </td>
	<td>Wrong Access Type exploitable error – An unauthorized access to a data type; allows access to member objects and functions.</td>
	</tr>
	<tr>
			<td>   Wrong Access Function </td>
	<td>Wrong Access Function exploitable error – An unauthorized access to a function; allows its execution.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the buggy/faulty operation code is performed.</td>
	</tr>
	<tr>
			<td>   Simple </td>
	<td>Simple operation attribute – The operation is via non-polymorphic types.</td>
	</tr>
	<tr>
			<td>   Generics </td>
	<td>Generics operation attribute – The operation is via parameterization by types.</td>
	</tr>
	<tr>
			<td>   Overriding </td>
	<td>Overriding operation attribute – The operation is via functions with the same name as one in the base type but implemented in different subtypes.</td>
	</tr>
	<tr>
			<td>   Overloading </td>
	<td>Overloading operation attribute – The operation is via functions with the same name in the same declaration scope, but implemented with different signature.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the buggy/faulty operation code is in software or firmware.</td>
	</tr>
	<tr>
			<td>   Codebase </td>
	<td>Codebase operation attribute – The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>   Third-Party </td>
	<td>Third-Party operation attribute – The operation code is in a third-party software.</td>
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
	<td>Execution Space operation attribute type – Shows where the buggy/faulty operation code is running or with what privilege level.</td>
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
			<td>         Name Kind </td>
	<td>Name Kind operand attribute type – Shows the entity with this name.</td>
	</tr>
	<tr>
			<td>            Object </td>
	<td>Object operand attribute – A memory region used to store data.</td>
	</tr>
	<tr>
			<td>            Function </td>
	<td>Function operand attribute – An organized block of code that when called takes in data, processes it, and produces a result(s).</td>
	</tr>
	<tr>
			<td>            Data Type </td>
	<td>Data Type operand attribute – A set of allowed values and the operations allowed over them.</td>
	</tr>
	<tr>
			<td>            Namespace </td>
	<td>Namespace operand attribute – An organization of entities' names, utilized to avoid names collision.</td>
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

