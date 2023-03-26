---
weight: 3
title: "MUS"
---
# BF Memory Use (MUS) Class

### MUS Definition
{{< definition >}}An object is initialized, read, written, or cleared improperly.{{< /definition >}}

### MUS Taxonomy


{{< img src="images/BF Classes/_MEM/MUS.png" caption="Fig 1. Memory Use (MUS) Class" >}}

### Taxons Definitions
{{< rawhtml >}}
<table class="table">
		<tr>
			<td><strong>Operations</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Initialize (object) </td>
	<td>Change the undefined data value of an object to a meaningful one -- e.g., after an object is allocated.</td>
	</tr>
	<tr>
			<td>Dereference </td>
	<td>Access object for reading or for writing. It is relevant to the operations Initialize (object), Read, Write, and Clear.</td>
	</tr>
	<tr>
			<td>Read </td>
	<td>Use the value of an object data.</td>
	</tr>
	<tr>
			<td>Write </td>
	<td>Change the data value of an object to another meaningful value.</td>
	</tr>
	<tr>
			<td>Clear </td>
	<td>Change the meaningful value of an object to a non-meaningful one (e.g. via zeroization) -- e.g. before object's deallocated.</td>
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
	<td>The data type of an object -- the set or a range of values (e.g., char is within [-128, 127]) and the operations allowed over them (e.g., +, *, mod).</td>
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
			<td>   Forbidden Address </td>
	<td>The pointer points to an OS protected or non-existing address.</td>
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
			<td>   Casted Pointer </td>
	<td>The pointer does not match the type of the object, due to wrong type casting.</td>
	</tr>
	<tr>
			<td>Address Fault</td>
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
	<td>The used object size is wrong.</td>
	</tr>
	<tr>
			<td>   Not Enough Memory Allocated </td>
	<td>The allocated memory is too little for the data it should store.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>Undefined or exploitable system behavior caused by memory allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>   Uninitialized Object </td>
	<td>The object's data value is non-meaningful.</td>
	</tr>
	<tr>
			<td>   Not Cleared Object </td>
	<td>The object's data value is not changed to a non-meaningful one before deallocation.</td>
	</tr>
	<tr>
			<td>   NULL Pointer Dereference </td>
	<td>An attempt to access an object for reading or writing via a NULL pointer.</td>
	</tr>
	<tr>
			<td>   Untrusted Pointer Dereference </td>
	<td>An attempt to access an object via an altered pointer (not legitimate dereference of a tainted pointer).</td>
	</tr>
	<tr>
			<td>   Object Corruption </td>
	<td>The object's data value is unintentionally altered.</td>
	</tr>
	<tr>
			<td>   Type Confusion </td>
	<td>The object and its pointer have different types.</td>
	</tr>
	<tr>
			<td>   Use After Free </td>
	<td>An attempt to use a deallocated object.</td>
	</tr>
	<tr>
			<td>   Buffer Overflow </td>
	<td>Writes above the upper bound of an object -- aka Buffer Over-Write.</td>
	</tr>
	<tr>
			<td>   Buffer Underflow </td>
	<td>Writes below the upper bound of an object -- aka Buffer Under-Write.</td>
	</tr>
	<tr>
			<td>   Buffer Over-Read </td>
	<td>Reads above the upper bound of an object.</td>
	</tr>
	<tr>
			<td>   Buffer Under-Read </td>
	<td>Reads below the upper bound of an object.</td>
	</tr>
	<tr>
			<td>   Uninitialized Pointer Dereference </td>
	<td>An attempt to access an object for reading or writing via an uninitialized pointer.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism Attribute</td>
	<td>Shows how the buggy/faulty operation code is performed.</td>
	</tr>
	<tr>
			<td>   Direct </td>
	<td>The operation is performed over a particular object element.</td>
	</tr>
	<tr>
			<td>   Sequential </td>
	<td>The operation is performed after iterating over the object elements.</td>
	</tr>
	<tr>
			<td>Source Code Attribute</td>
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
			<td>Execution Space Attribute</td>
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
			<td>         Address Kind </td>
	<td>Shows how much memory is accessed outside object's bounds.</td>
	</tr>
	<tr>
			<td>            Huge </td>
	<td>More than 1 KB of memory.</td>
	</tr>
	<tr>
			<td>            Moderate </td>
	<td>Several bytes, but less than 1 KB, of memory.</td>
	</tr>
	<tr>
			<td>            Little </td>
	<td>Afew bites of memory.</td>
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
	<tr>
			<td>         Size Kind </td>
	<td>Shows what kind the size this is.</td>
	</tr>
	<tr>
			<td>            Actual </td>
	<td>The size of the object.</td>
	</tr>
	<tr>
			<td>            Used </td>
	<td>The maximum limit for iteration over object's elements.</td>
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
	