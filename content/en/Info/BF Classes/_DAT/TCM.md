---
weight: 3
title: "TCM"
---
## BF Type Computation (TCM) Bugs Class 

#### Definition
{{< definition >}}Type Computation (TCM) class – An arithmetic expression (over numbers, strings, or pointers) is calculated improperly, or a boolean condition is evaluated improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_DAT/TCM.png" >}}

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
			<td>Calculate </td>
	<td>Calculate operation – Find the result of a numeric, pointer, or string operation.</td>
	</tr>
	<tr>
			<td>Evaluate </td>
	<td>Evaluate operation – Find the result of a Boolean condition (incl. comparison).</td>
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
			<td>Data </td>
	<td>Data operand – The data value of an object – stored in object's memory.</td>
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
			<td>   Wrong Code </td>
	<td>Wrong Code bug - An incorrect operator or function is used, or an incorrect data type is specified.</td>
	</tr>
	<tr>
			<td>   Erroneous Code </td>
	<td>Erroneous Code bug - There is a coding error in the implementation of the operation.</td>
	</tr>
	<tr>
			<td>Name Fault</td>
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
			<td>Data Fault</td>
	<td>Data Fault/Error type – The object data has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Wrong Argument </td>
	<td>Wrong Argument fault/error – Inaccurate input data value, i.e., non-verified for harmed semantics.</td>
	</tr>
	<tr>
			<td>   Reference vs. Object </td>
	<td>Reference vs. Object fault/error – Object's address instead of object's data value.</td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>Type Fault/Error type – The the set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type </td>
	<td>Wrong Type fault/error – A data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>   Wrong Object Type Resolved </td>
	<td>Wrong Object Type Resolved fault/error – An object is resolved from a wrong scope, so its data type might be wrong (e.g. a parent vs a child data type).</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Data Fault/Error type – The object data has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Wrong Result </td>
	<td>Wrong Result fault/error – Incorrect value – from type conversion or computation.</td>
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
			<td>   Wrap Around </td>
	<td>Wrap Around fault/error – A moved around-the-clock value over its data type upper or lower range, as it exceeds that range. (Integer Over-/Under-flow is a wrapped-around the upper/lower range integer value; may become very small/large and change to the opposite sign.</td>
	</tr>
	<tr>
			<td>Type Compute Final Error</td>
	<td>Type Compute exploitable error type – An exploitable or undefined system behavior caused by 'arithmetic' type computation bugs.</td>
	</tr>
	<tr>
			<td>   Undefined </td>
	<td>Undefined exploitable error – The Type System cannon represent the calculated result (e.g. division by 0).</td>
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
			<td>   Function </td>
	<td>Function operation attribute – The operation is via a function.</td>
	</tr>
	<tr>
			<td>   Operator </td>
	<td>Operator operation attribute – The operation is via a function with a symbolic name that implements a mathematical, relational or logical operation.</td>
	</tr>
	<tr>
			<td>   Method </td>
	<td>Method operation attribute – The operation is via a member function of an OOP class.</td>
	</tr>
	<tr>
			<td>   Lambda Expression </td>
	<td>Lambda Expression operation attribute – The operation is performed via an anonymous function, implemented within another function.</td>
	</tr>
	<tr>
			<td>   Procedure </td>
	<td>Procedure operation attribute – The operation is via a function with a void return type.</td>
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
			<td>         Name State </td>
	<td>Name State operand attribute type – Shows the stage of the entity name.</td>
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
	<td>Data Kind operand attribute type – Shows the category or type of data.</td>
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
	<td>Boolean operand attribute – A truth/falcity value – true or false; 1 or 0.</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

