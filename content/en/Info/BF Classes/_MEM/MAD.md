---
weight: 3
title: "MAD"
---
## BF Memory Addressing (MAD) Bugs Class <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

#### Definition
{{< definition >}}Memory Addressing (MAD) class – The pointer to an object is initialized, repositioned, or reassigned to an improper memory address.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_MEM/MAD.png" >}}

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
			<td>Initialize Pointer </td>
	<td>Initialize Pointer operation – Change the undefined data value of a pointer to a meaningful object address; and position the pointer at the start of the object.</td>
	</tr>
	<tr>
			<td>Reposition </td>
	<td>Reposition operation – Change the pointer to another position inside its object.</td>
	</tr>
	<tr>
			<td>Reassign </td>
	<td>Reassign operation – Direct the pointer to a different object.</td>
	</tr>
	<tr>
			<td><strong>Operands</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data </td>
	<td>Data operand – The data value of an object – stored in object's memory.</td>
	</tr>
	<tr>
			<td>Type </td>
	<td>Type operand – The data type of an object – the set of allowed values (e.g., char is within [-128, 127]) and the operations allowed over them (e.g., +, *, mod).</td>
	</tr>
	<tr>
			<td>Address </td>
	<td>Address operand attribute – The memory address for an object. It is data of another object, the object's pointer, used to reference and traverse the object.</td>
	</tr>
	<tr>
			<td>Size </td>
	<td>Size operand – The memory size of an object – the number of bytes allocated for an object in memory. Its value is contained by (is data of) of another object.</td>
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
			<td>   Erroneous Code </td>
	<td>Erroneous Code bug - There is a coding error in the implementation of the operation.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Data Fault/Error type – The object data has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Hardcoded Address </td>
	<td>Hardcoded Address fault/error – The pointer holds a wrong specific address.</td>
	</tr>
	<tr>
			<td>   Single Owned Address </td>
	<td>Single Owned Address fault/error – Exactly one pointer owns the object.</td>
	</tr>
	<tr>
			<td>   Wrong Index </td>
	<td>Wrong Index fault/error – Incorrect index position – hardcoded or from computation.</td>
	</tr>
	<tr>
			<td>   Wrong Size </td>
	<td>Wrong Size fault/error – The value used as size does not match the actual size of the object (e.g., to restrict pointer repositioning or index increment/decrement in a repetition statement).</td>
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
			<td>   Wrong Index Type </td>
	<td>Wrong Index Type fault/error – An index is of incorrect data type.</td>
	</tr>
	<tr>
			<td>   Casted Pointer </td>
	<td>Casted Pointer fault/error – The pointer does not match the type of the object due to wrong type casting.</td>
	</tr>
	<tr>
			<td>Address Fault</td>
	<td>Address Fault/Error type – The object address in use is wrong.</td>
	</tr>
	<tr>
			<td>   NULL Pointer </td>
	<td></td>
	</tr>
	<tr>
			<td>   Wild Pointer </td>
	<td>Wild Pointer fault/error – Holds an arbitrary address, because it has not been initialized or an erroneous allocation routine is used.</td>
	</tr>
	<tr>
			<td>   Dangling Pointer </td>
	<td>Dangling Pointer fault/error – Still holds the address of its successfully deallocated object (e.g., pointer to a freed heap object or with a returned by a function stack object address).</td>
	</tr>
	<tr>
			<td>   Untrusted Pointer </td>
	<td>Untrusted Pointer fault/error – The pointer is modified to an improperly checked address.</td>
	</tr>
	<tr>
			<td>   Over Bounds Pointer </td>
	<td>Over Bounds Pointer fault/error – Holds an address above the upper boundary of its object.</td>
	</tr>
	<tr>
			<td>   Under Bounds Pointer </td>
	<td>Under Bounds Pointer fault/error – Holds an address below the lower boundary of its object.</td>
	</tr>
	<tr>
			<td>   Wrong Position Pointer </td>
	<td>Wrong Position Pointer fault/error – Holds the address of a miscalculated position inside its object bounds.</td>
	</tr>
	<tr>
			<td>Size Fault</td>
	<td>Size Fault/Error type – The object size in use is wrong.</td>
	</tr>
	<tr>
			<td>   Not Enough Memory </td>
	<td>Not Enough Memory fault/error – The allocated memory is too little for the data it should store.</td>
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
			<td>   NULL Pointer </td>
	<td>NULL Pointer fault/error – Does not point to a valid object; usually holds the zero memory address.</td>
	</tr>
	<tr>
			<td>   Forbidden Address </td>
	<td>Forbidden Address fault/error – The pointer holds an OS protected address (includs the zero address -- a NULL pointer) or non-existing address.</td>
	</tr>
	<tr>
			<td>Type Error</td>
	<td>Type Fault/Error type – The the set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Casted Pointer </td>
	<td>Casted Pointer fault/error – The pointer does not match the type of the object due to wrong type casting.</td>
	</tr>
	<tr>
			<td>Address Error</td>
	<td>Address Fault/Error type – The object address in use is wrong.</td>
	</tr>
	<tr>
			<td>   Wild Pointer </td>
	<td>Wild Pointer fault/error – Holds an arbitrary address, because it has not been initialized or an erroneous allocation routine is used.</td>
	</tr>
	<tr>
			<td>   Dangling Pointer </td>
	<td>Dangling Pointer fault/error – Still holds the address of its successfully deallocated object (e.g., pointer to a freed heap object or with a returned by a function stack object address).</td>
	</tr>
	<tr>
			<td>   Untrusted Pointer </td>
	<td>Untrusted Pointer fault/error – The pointer is modified to an improperly checked address.</td>
	</tr>
	<tr>
			<td>   Over Bounds Pointer </td>
	<td>Over Bounds Pointer fault/error – Holds an address above the upper boundary of its object.</td>
	</tr>
	<tr>
			<td>   Under Bounds Pointer </td>
	<td>Under Bounds Pointer fault/error – Holds an address below the lower boundary of its object.</td>
	</tr>
	<tr>
			<td>   Wrong Position Pointer </td>
	<td>Wrong Position Pointer fault/error – Holds the address of a miscalculated position inside its object bounds.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>Memory Corruption/Disclosure exploitable error type – An exploitable or undefined system behavior caused by memory addressing, allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>   Memory Leak </td>
	<td>Memory Leak exploitable error – An object has no pointer pointing to it.</td>
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
			<td>   Direct </td>
	<td>Direct operation attribute – The operation is on a particular object element.</td>
	</tr>
	<tr>
			<td>   Sequential </td>
	<td>Sequential operation attribute – The operation is via iterating over the object elements.</td>
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
			<td>   Userland </td>
	<td>Userland operation attribute – The bugged code runs in an environment with privilege levels, but in unprivileged mode (e.g., ring 3 in x86 architecture).</td>
	</tr>
	<tr>
			<td>   Kernel </td>
	<td>Kernel operation attribute – The bugged code runs in an environment with privilege levels with access privileged instructions (e.g., ring 0 in x86 architecture).</td>
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
			<td>         Address State </td>
	<td>Address State operand attribute type - Shows where the address is in the memory layout.</td>
	</tr>
	<tr>
			<td>            Stack </td>
	<td>Stack operand attribute – The object is a non-static local variable (defined in a function, a passed parameter, or a function return address).</td>
	</tr>
	<tr>
			<td>            Heap </td>
	<td>Heap operand attribute – The object is a dynamically allocated data structure (e.g., via malloc() and new).</td>
	</tr>
	<tr>
			<td>            /other/ </td>
	<td>/other/ – Other kinds of memory layout (e.g. Uninitialized Data Segment, Data Segment, and Code Segment could be used for C).</td>
	</tr>
	<tr>
			<td>         Size Kind </td>
	<td>Size Kind operand attribute type – Shows the object's limit for traversal.</td>
	</tr>
	<tr>
			<td>            Actual </td>
	<td>Actual operand attribute – The real size of an object.</td>
	</tr>
	<tr>
			<td>            Used </td>
	<td>Used operand attribute – A supplied size for an object.</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

