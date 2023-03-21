---
weight: 3
title: "DCL"
---
# Declaration (DCL) Class

### Definition

We define Declaration (DCL) as follows:

{{< definition >}}An object, a function, a type, or a namespace is declared or defined improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts DCL causes, attributes and consequences.

{{< img src="images/BF classes/_DAT-DCL.png" caption="Fig 1. Declaration (DCL) Class" >}}


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
			<td>Missing Code </td>
	<td>The entire operation or part of it is absent.</td>
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
			<td>Specification Defect Bug</td>
	<td>An error in the rules (policy, algorithm, keying material, domain parameter) used by the operation, that when implemented becomes the bug causing the chain of weaknesses comprising a software security vulnerability. It must be fixed to resolve the vulnerab</td>
	</tr>
	<tr>
			<td>Missing Modifier </td>
	<td>A required behavioral restriction is absent.</td>
	</tr>
	<tr>
			<td>Wrong Modifier </td>
	<td>A wrong behavioral restriction is specified.</td>
	</tr>
	<tr>
			<td>Anonymous Scope </td>
	<td>The declaration is in an unnamed scope.</td>
	</tr>
	<tr>
			<td>Wrong Scope </td>
	<td>The declaration should be in another scope.</td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>Wrong Type Resolved </td>
	<td>zzzxxx Data type is resolved from wrong scope.</td>
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
			<td>Name Error</td>
	<td>The resolved name is wrong.</td>
	</tr>
	<tr>
			<td>Missing Overridden Function </td>
	<td>Function implementation in a particular subclass is absent.</td>
	</tr>
	<tr>
			<td>Missing Overloaded Function </td>
	<td>Code for particular function parameters' data types is absent.</td>
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
			<td>Incomplete Type </td>
	<td>Specific constructor, method, or overloaded function is missing.</td>
	</tr>
	<tr>
			<td>Wrong Generic Type </td>
	<td>Generic object instantiated via wrong type argument.</td>
	</tr>
	<tr>
			<td>Confused Subtype </td>
	<td>Object invoking an overridden function is of wrong subtype data type.</td>
	</tr>
	<tr>
			<td>Wrong Argument Type </td>
	<td>Argument to an overloaded function is of wrong data type.</td>
	</tr>
	<tr>
			<td>Access Final Error</td>
	<td>Undefined or exploitable system behavior caused by 'name access' declaration bugs.</td>
	</tr>
	<tr>
			<td>Wrong Access Object </td>
	<td>Unauthorized access to an object; allows access to sensitive data or to member functions.</td>
	</tr>
	<tr>
			<td>Wrong Access Type </td>
	<td>Unauthorized access to a data type; allows access to member objects and functions.</td>
	</tr>
	<tr>
			<td>Wrong Access Function </td>
	<td>Unauthorized access to a function; allows its execution.</td>
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
			<td>Declare </td>
	<td>Specify the name and type of an object; the name, return type, and parameters of a function; or the name and type parameters of a type.</td>
	</tr>
	<tr>
			<td>Define </td>
	<td>Specify the data of an object; the implementation of a function; or the member objects and functions of a type.</td>
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
			<td>Simple </td>
	<td>Non-polymorphic.</td>
	</tr>
	<tr>
			<td>Generics </td>
	<td>Parameterized by type.</td>
	</tr>
	<tr>
			<td>Overriding </td>
	<td>Functions with the same name as one in the base type but implemented in different subtypes.</td>
	</tr>
	<tr>
			<td>Overloading </td>
	<td>Functions with the same name in the same declaration scope, but implemented with different signature.</td>
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
			<td>Kind Attribute</td>
	<td>Shows what kind the named entity is.</td>
	</tr>
	<tr>
			<td>Object </td>
	<td>A memory region used to store data.</td>
	</tr>
	<tr>
			<td>Function </td>
	<td>An organized block of code that when called takes in data, processes it, and produces a result(s).</td>
	</tr>
	<tr>
			<td>Data Type </td>
	<td>A set of allowed values and the operations allowed over them.</td>
	</tr>
	<tr>
			<td>Namespace </td>
	<td>An organization of entities' names, utilized to avoid names collision.</td>
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
	