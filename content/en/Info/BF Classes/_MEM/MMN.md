---
weight: 3
title: "MMN"
---
## BF Memory Management (MMN) Bugs Class 

#### Definition
{{< definition >}}Memory Management (MMN) class – An object is allocated, resized, or deallocated improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_MEM/MMN.png" >}}

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
			<td>Allocate </td>
	<td>Allocate operation – Reserve space in memory for an object; defines its initial boundaries and size.</td>
	</tr>
	<tr>
			<td>Extend </td>
	<td>Extend operation – Reserve additional memory for an object in the same space; redefines its boundaries and size.</td>
	</tr>
	<tr>
			<td>Reallocate-Extend </td>
	<td>Reallocate-Extend operation – Reserve a new larger piece of memory for an object at a new address, reassign its pointer, and release the previous piece of memory.</td>
	</tr>
	<tr>
			<td>Reallocate-Reduce </td>
	<td>Reallocate-Reduce operation – Reserve a new smaller space in memory for an object at a new address, reassign the pointer, and release the previous piece of memory.</td>
	</tr>
	<tr>
			<td>Reduce </td>
	<td>Reduce operation – Release part of the object memory; redefines its boundaries and size.</td>
	</tr>
	<tr>
			<td>Deallocate </td>
	<td>Deallocate operation – Release the allocated memory of an object.</td>
	</tr>
	<tr>
			<td><strong>Operands</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data </td>
	<td>Data operand – The data value of an object – i.e., the actual value that is stored in memory.</td>
	</tr>
	<tr>
			<td>Address </td>
	<td>Address operand attribute – The memory address for an object. Its value is data of another object -- the object's pointer, used to reference and traverse it.</td>
	</tr>
	<tr>
			<td>Size </td>
	<td>Size operand – The size of an object – i.e., the amount of memory allocated for an object. Its value is data of another object.</td>
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
			<td>   Mismatched Operation </td>
	<td>Mismatched Operation bug - The deallocation function does not match the allocation function used for the same object.</td>
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
			<td>   Forbidden Address </td>
	<td>Forbidden Address fault/error – The pointer holds an OS protected address or a non-existing address.</td>
	</tr>
	<tr>
			<td>   Single Owned Address </td>
	<td>Single Owned Address fault/error – Exactly one pointer owns the object.</td>
	</tr>
	<tr>
			<td>   Wrong Size </td>
	<td>Wrong Size fault/error – The value used as size does not match the actual size of the object memory (e.g., to restrict pointer reposition or index increment/decrement in a repetition statement).</td>
	</tr>
	<tr>
			<td>Address Fault</td>
	<td>Address Fault/Error type – The object address in use is wrong.</td>
	</tr>
	<tr>
			<td>   Wild Pointer </td>
	<td>Wild Pointer fault/error – Holds an arbitrary address, because it has not been initialized or an erroneous allocation routine is used.</td>
	</tr>
	<tr>
			<td>   Dangling Pointer </td>
	<td>Dangling Pointer fault/error – Still holds the address of its successfully deallocated object (e.g., a pointer to a freed heap object or a returned by a function address of a stack object).</td>
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
			<td>Address Error</td>
	<td>Address Fault/Error type – The object address in use is wrong.</td>
	</tr>
	<tr>
			<td>   Wild Pointer </td>
	<td>Wild Pointer fault/error – Holds an arbitrary address, because it has not been initialized or an erroneous allocation routine is used.</td>
	</tr>
	<tr>
			<td>   Dangling Pointer </td>
	<td>Dangling Pointer fault/error – Still holds the address of its successfully deallocated object (e.g., a pointer to a freed heap object or a returned by a function address of a stack object).</td>
	</tr>
	<tr>
			<td>Size Error</td>
	<td>Size Fault/Error type – The object size in use is wrong.</td>
	</tr>
	<tr>
			<td>   Not Enough Memory </td>
	<td>Not Enough Memory fault/error – The allocated memory is too little for the data it should store.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>Memory Corruption/Disclosure final error type – An exploitable or undefined system behavior caused by memory addressing, allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>   Memory Overflow </td>
	<td>Memory Overflow final error – More memory is requested than available.</td>
	</tr>
	<tr>
			<td>   Memory Leak </td>
	<td>Memory Leak final error – An object has no pointer pointing to it.</td>
	</tr>
	<tr>
			<td>   Double Deallocate </td>
	<td>Double Deallocate final error – An attempt to deallocate a deallocated (freed) object.</td>
	</tr>
	<tr>
			<td>   Object Corruption </td>
	<td>Object Corruption final error – An object's data value is unintentionally altered.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the operation is performed.</td>
	</tr>
	<tr>
			<td>   Implicit </td>
	<td>Implicit operation attribute – The operation is performed without a function/method call.</td>
	</tr>
	<tr>
			<td>   Explicit </td>
	<td>Explicit operation attribute – The operation is via a function/method call.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the operation code resides within the software, firmware, or circuit logic code.</td>
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
	<td>Execution Space operation attribute type – Shows where the operation is executed or the privilege level at which it runs.</td>
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
	<td>/other/ – Other kinds of memory layout (e.g., Uninitialized Data Segment, Data Segment, and Code Segment could be used for C).</td>
	</tr>
	<tr>
			<td>         Size Kind </td>
	<td>Size Kind operand attribute type – Shows the object's limit for traversal.</td>
	</tr>
	<tr>
			<td>            Actual </td>
	<td>Actual operand attribute – The size of the allocated memory of an object.</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

