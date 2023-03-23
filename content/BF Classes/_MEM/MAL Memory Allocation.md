﻿---
weight: 3
title: "MAL"
---
# BF Memory Allocation (MAL) Class

### MAL Definition
{{< definition >}}An object is allocated, extended, or reallocated (while extending) improperly.{{< /definition >}}

### MAL Taxonomy


{{< img src="images/BF Classes/_MEM/MAL.png" caption="Fig 1. Memory Allocation (MAL) Class" >}}

### Taxons Definitions
{{< rawhtml >}}
<table class="table">
		<tr>
			<td><strong>Operations</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Allocate </td>
	<td>Reserve space in memory for an object; defines its initial boundaries and size.</td>
	</tr>
	<tr>
			<td>Extend </td>
	<td>Reserve additional memory for an object in the same space; changes its boundaries and size.</td>
	</tr>
	<tr>
			<td>Reallocate-Extend </td>
	<td>Reserve a new larger piece of memory for an object at a new address, copy the object content there, reassign its pointer, and deallocate the previous piece of memory.</td>
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
			<td>Address </td>
	<td>The memory region allocated for an object. Its value is contained by (is data of) another object (a pointer).</td>
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
	<td>The entire operation or part of it is absent.</td>
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
			<td>   Forbidden Address </td>
	<td>The pointer points to an OS protected or non-existing address.</td>
	</tr>
	<tr>
			<td>   Single Owned Address </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Wrong Size </td>
	<td>The value used as size does not match the actual size of the object.</td>
	</tr>
	<tr>
			<td>Address Fault</td>
	<td>The used object address is wrong.</td>
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
			<td>   Wrong Position Pointer </td>
	<td>Points to a miscalculated position inside its object bounds.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Address Error</td>
	<td>The used object address is wrong.</td>
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
			<td>Size Error</td>
	<td>The used object size is wrong.</td>
	</tr>
	<tr>
			<td>   Not Enough Memory Allocated </td>
	<td>The allocated memory is too little for the data it should store.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>Undefined or exploitable system behavior caused by memory allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>   Memory Overflow </td>
	<td>More memory is requested than available.</td>
	</tr>
	<tr>
			<td>   Memory Leak </td>
	<td>These is an object with no pointer pointing to it.</td>
	</tr>
	<tr>
			<td>   Double Free </td>
	<td>An attempt to deallocate a deallocated an object or via an uninitialized pointer.</td>
	</tr>
	<tr>
			<td>   Object Corruption </td>
	<td>The object's data value is unintentionally altered.</td>
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
			<td>   Implicit </td>
	<td>The operation is performed without a function call.</td>
	</tr>
	<tr>
			<td>   Explicit </td>
	<td>The operation is performed by a function/ method) call.</td>
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
	<td>Shows where buggy/faulty operation code is running or with what privilege level).</td>
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
	<td>yyyddd.</td>
	</tr>
	
</table>
{{< /rawhtml >}}


### Sites

{{< rawhtml >}}
<table class="table">
		<tr>
			<td><strong></strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	
</table>
{{< /rawhtml >}}
	