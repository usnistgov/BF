---
weight: 3
title: "MAD Class"
---
# BF Memory Addressing (MAD) Class <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework Project`_

### Definition
{{< definition >}}The pointer to an object is initialized, repositioned, or reassigned to an improper memory address.{{< /definition >}}

###  Taxonomy


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
			<td>Initialize (pointer) </td>
	<td>Change the undefined data value of a pointer to a meaningful object address; and position the pointer at the start of the object.</td>
	</tr>
	<tr>
			<td>Reposition </td>
	<td>Change the pointer to another position inside its object.</td>
	</tr>
	<tr>
			<td>Reassign </td>
	<td>Direct the pointer to a different object.</td>
	</tr>
	<tr>
			<td><strong>Operands</strong></td>
	<td><strong>Definition</strong></td>
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
			<td>Address </td>
	<td>The memory region allocated for an object. Its value is contained by (is data of) another object (a pointer).</td>
	</tr>
	<tr>
			<td>Size </td>
	<td>The memory size of an object -- the number of bytes allocated for an object in memory. Its value is contained by (is data of) of another object.</td>
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
			<td>   Missing Code </td>
	<td>The entire operation implementation or a part of its specification is absent.</td>
	</tr>
	<tr>
			<td>   Mismatched Operation </td>
	<td>The deallocation function does not match the allocation function used for the same object.</td>
	</tr>
	<tr>
			<td>   Erroneous Code </td>
	<td>The operation implementation has a bug.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Hardcoded Address </td>
	<td>The pointer points a wrong specific address.</td>
	</tr>
	<tr>
			<td>   Wrong Index </td>
	<td>Incorrect index position.</td>
	</tr>
	<tr>
			<td>   Wrong Size </td>
	<td>The value used as size does not match the actual size of the object.</td>
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
			<td>   Wrong Index Type </td>
	<td>An index is of incorrect data type.</td>
	</tr>
	<tr>
			<td>   Casted Pointer </td>
	<td>The pointer does not match the type of the object due to wrong type casting.</td>
	</tr>
	<tr>
			<td>Address Fault</td>
	<td>The object address in use is wrong.</td>
	</tr>
	<tr>
			<td>   NULL Pointer </td>
	<td>Points to the zero address, a specific invalid address.</td>
	</tr>
	<tr>
			<td>   Wild Pointer </td>
	<td>Points to an arbitrary address, because it has not been initialized or an erroneous allocation routine is used.</td>
	</tr>
	<tr>
			<td>   Dangling Pointer </td>
	<td>Still points to the address of its successfully deallocated object.</td>
	</tr>
	<tr>
			<td>   Untrusted Pointer </td>
	<td>The pointer is modified to an improperly checked address.</td>
	</tr>
	<tr>
			<td>   Over Bounds Pointer </td>
	<td>Points above the upper boundary of its object.</td>
	</tr>
	<tr>
			<td>   Under Bounds Pointer </td>
	<td>Points below the lower boundary of its object.</td>
	</tr>
	<tr>
			<td>   Wrong Position Pointer </td>
	<td>Points to a miscalculated position inside its object bounds.</td>
	</tr>
	<tr>
			<td>Size Fault</td>
	<td>The object size in use is wrong.</td>
	</tr>
	<tr>
			<td>   Not Enough Memory </td>
	<td>The allocated memory is too little for the data it should store.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Forbidden Address </td>
	<td>The pointer points to an OS protected or non-existing address.</td>
	</tr>
	<tr>
			<td>Type Error</td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Casted Pointer </td>
	<td>The pointer does not match the type of the object due to wrong type casting.</td>
	</tr>
	<tr>
			<td>Address Error</td>
	<td>The object address in use is wrong.</td>
	</tr>
	<tr>
			<td>   NULL Pointer </td>
	<td>Points to the zero address, a specific invalid address.</td>
	</tr>
	<tr>
			<td>   Wild Pointer </td>
	<td>Points to an arbitrary address, because it has not been initialized or an erroneous allocation routine is used.</td>
	</tr>
	<tr>
			<td>   Dangling Pointer </td>
	<td>Still points to the address of its successfully deallocated object.</td>
	</tr>
	<tr>
			<td>   Untrusted Pointer </td>
	<td>The pointer is modified to an improperly checked address.</td>
	</tr>
	<tr>
			<td>   Over Bounds Pointer </td>
	<td>Points above the upper boundary of its object.</td>
	</tr>
	<tr>
			<td>   Under Bounds Pointer </td>
	<td>Points below the lower boundary of its object.</td>
	</tr>
	<tr>
			<td>   Wrong Position Pointer </td>
	<td>Points to a miscalculated position inside its object bounds.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>An undefined or exploitable system behavior caused by memory addressing, allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>   Memory Leak </td>
	<td>An object has no pointer pointing to it.</td>
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
			<td>   Direct </td>
	<td>The operation is performed on a particular object element.</td>
	</tr>
	<tr>
			<td>   Sequential </td>
	<td>The operation is performed after iterating over the object elements.</td>
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
			<td>   Userland </td>
	<td>The bugged code runs in an environment with privilege levels, but in unprivileged mode (e.g., ring 3 in x86 architecture).</td>
	</tr>
	<tr>
			<td>   Kernel </td>
	<td>The bugged code runs in an environment with privilege levels with access privileged instructions (e.g., ring 0 in x86 architecture).</td>
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
			<td>         Address State </td>
	<td>Shows where the allocated memory is.</td>
	</tr>
	<tr>
			<td>            Stack </td>
	<td>The object is a non-static local variable (defined in a function, a passed parameter, or a function return address).</td>
	</tr>
	<tr>
			<td>            Heap </td>
	<td>The object is a dynamically allocated data structure (e.g., via malloc() and new).</td>
	</tr>
	<tr>
			<td>            /other/ </td>
	<td>Other kinds of memory layout (e.g. Uninitialized Data Segment, Data Segment, and Code Segment could be used for C).</td>
	</tr>
	<tr>
			<td>         Size Kind </td>
	<td>Shows what the limit for iteration over object's elements is.</td>
	</tr>
	<tr>
			<td>            Actual </td>
	<td>The real size of an object.</td>
	</tr>
	<tr>
			<td>            Used </td>
	<td>A supplied size for an object.</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

