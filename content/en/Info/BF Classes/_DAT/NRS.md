---
weight: 3
title: "NRS"
---
## BF Name Resolution (NRS) Bugs Class 

#### Definition
{{< definition >}}Name Resolution (NRS) class – The name of an object, a function, or a type is resolved improperly or bound to an improper type or implementation.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_DAT/NRS.png" >}}

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
			<td>Refer </td>
	<td>Refer operation – Use a name in local or remote scopes of source code. The Type System resolves the name and binds a data type to it.</td>
	</tr>
	<tr>
			<td>Call </td>
	<td>Call operation – Invoke a function implementation. The Type System binds a function implementation to the resolved function name. A polymorphic function implementation is first resolved and then bound.</td>
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
			<td>   Erroneous Code </td>
	<td>Erroneous Code bug - There is a coding error in the implementation of the operation.</td>
	</tr>
	<tr>
			<td>Specification Bug</td>
	<td>Specification Bug type – Defect in the design of the operation – proper operands over an improper operation. A first cause for the chain of weaknesses underlying a software security vulnerability. Must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Missing Qualifier </td>
	<td>A namespace include is absent; or a scope is not specified i na fully qualified name.</td>
	</tr>
	<tr>
			<td>   Wrong Qualifier </td>
	<td>A wrongn amespace is included, or a wrong scope is specified in a fully qualified name.</td>
	</tr>
	<tr>
			<td>Name Fault</td>
	<td>Name Fault/Error type – The fully resolved name is wrong.</td>
	</tr>
	<tr>
			<td>   Missing Overridden Function </td>
	<td>Missing Overridden Function fault/error – The function implementation in a particular subclass is absent.</td>
	</tr>
	<tr>
			<td>   Missing Overloaded Function </td>
	<td>Missing Overloaded Function fault/error – Code for particular function parameters' data types is absent.</td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>Type Fault/Error type – The the set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
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
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Name Error</td>
	<td>Name Fault/Error type – The fully resolved name is wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Object Resolved </td>
	<td>Wrong Object Resolved fault/error – The object is resolved from wrong scope.</td>
	</tr>
	<tr>
			<td>   Wrong Function Resolved </td>
	<td>Wrong Function Resolved fault/error – The function is resolved from wrong scope.</td>
	</tr>
	<tr>
			<td>   Wrong Generic Function Bound </td>
	<td>Wrong Generic Function Bound fault/error – Code for a wrong data type is bound due to wrong generic type arguments.</td>
	</tr>
	<tr>
			<td>   Wrong Overridden Function Bound </td>
	<td>Wrong Overridden Function Bound fault/error – Code from wrong subtype is bound due to a wrong invoking subtype object.</td>
	</tr>
	<tr>
			<td>   Wrong Overloaded Function Bound </td>
	<td>Wrong Overloaded Function Bound fault/error – Wrong overloaded implementation is bound due to wrong function arguments.</td>
	</tr>
	<tr>
			<td>Type Error</td>
	<td>Type Fault/Error type – The the set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Object Type Resolved </td>
	<td>Wrong Object Type Resolved fault/error – An object is resolved from a wrong scope, so its data type might be wrong (e.g., a parent vs a child data type).</td>
	</tr>
	<tr>
			<td>   Wrong Type Resolved </td>
	<td>Wrong Type Resolved fault/error – A data type is resolved from a wrong scope.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the operation code is performed.</td>
	</tr>
	<tr>
			<td>   Resolve </td>
	<td>Resolve operation attribute – The operation is via looking up a name and if needed determining its data type (infer from value, through hierarchy, via generic type attribute).</td>
	</tr>
	<tr>
			<td>   Bind </td>
	<td>Bind operation attribute – The operation connects object data type, function return type, parameter data type, or simple function implementation.</td>
	</tr>
	<tr>
			<td>   Early Bind </td>
	<td>Early Bind operation attribute – The operation resolves a subtype and set a generic function implementation.</td>
	</tr>
	<tr>
			<td>   Late Bind </td>
	<td>Late Bind operation attribute – The operation resolves an overridden function via subtype object and set implementation.</td>
	</tr>
	<tr>
			<td>   Ad-hoc Bind </td>
	<td>Ad-hoc Bind operation attribute – The operation resolves an overloaded function via signature and set implementation.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the operation code is in software or firmware.</td>
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
	<td>Execution Space operation attribute type – Shows where the operation code is running or with what privilege level.</td>
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

