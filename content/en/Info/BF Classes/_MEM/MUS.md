---
weight: 3
title: "MUS"
---
## BF Memory Use (MUS) Class 

#### Definition
{{< definition >}}Memory Use (MUS) class – An object is initialized, read, written, or cleared improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_MEM/MUS.png" >}}

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
			<td>Initialize Object </td>
	<td>Initialize Object operation – Change the undefined data value of an object to a meaningful one – e.g., after an object is allocated.</td>
	</tr>
	<tr>
			<td>Read </td>
	<td>Read operation – Retrieve the data value of an object from memory.</td>
	</tr>
	<tr>
			<td>Write </td>
	<td>Write operation – Change the data value of an object in memory to another meaningful value.</td>
	</tr>
	<tr>
			<td>Clear </td>
	<td>Clear operation – Change the meaningful data value of an object to a non-meaningful one (e.g., via zeroization) – e.g., before object deallocation.</td>
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
	<td>Size operand – The memory size of an object – the number of bytes allocated for an object in memory. Its value is contained by (is data of) of another object.</td>
	</tr>
	<tr>
			<td><strong>Causes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Code Bug</td>
	<td>Code Bug type – An error in the implementation of an operation – proper operands over an improper operation. A first cause for the chain of weaknesses underlying a software security vulnerability. Must be fixed to resolve the vulnerability.</td>
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
	<td>Data Fault/Error type – The data of an object has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   NULL Pointer </td>
	<td>NULL Pointer fault/error – The pointer does not point to a valid object; usually holds the zero memory address.</td>
	</tr>
	<tr>
			<td>   Forbidden Address </td>
	<td>Forbidden Address fault/error – The pointer holds an OS protected address or a non-existing address.</td>
	</tr>
	<tr>
			<td>   Wrong Size </td>
	<td>Wrong Size fault/error – The value used as size or length (i.e., the number of elements) does not match an object's memory size or length (e.g., to limit a pointer reposition or index increment/decrement in a repetition statement).</td>
	</tr>
	<tr>
			<td>Type Fault</td>
	<td>Type Fault/Error type – The set or range of allowed values of an entity is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Cast Pointer </td>
	<td>Cast Pointer fault/error – A pointer is type cast to a data type that is incompatible with its object's data type.</td>
	</tr>
	<tr>
			<td>Address Fault</td>
	<td>Address Fault/Error type – The address of an object is wrong.</td>
	</tr>
	<tr>
			<td>   Wild Pointer </td>
	<td>Wild Pointer fault/error – Holds an arbitrary address, because it has not been initialized or an erroneous allocation routine is used.</td>
	</tr>
	<tr>
			<td>   Dangling Pointer </td>
	<td>Dangling Pointer fault/error – Still holds the address of its successfully deallocated object (e.g., a pointer to a freed heap object or address of a stack object returned by a function).</td>
	</tr>
	<tr>
			<td>   Untrusted Pointer </td>
	<td>Untrusted Pointer fault/error – The pointer is modified to an improperly checked address.</td>
	</tr>
	<tr>
			<td>   Overbound Pointer </td>
	<td>Overbound Pointer fault/error – Holds an address that is above the upper boundary of its object.</td>
	</tr>
	<tr>
			<td>   Underbound Pointer </td>
	<td>Underbound Pointer fault/error – Holds an address that is below the lower boundary of its object.</td>
	</tr>
	<tr>
			<td>   Wrong Position Pointer </td>
	<td>Wrong Position Pointer fault/error – Holds the address of a miscalculated position inside its object bounds.</td>
	</tr>
	<tr>
			<td>Size Fault</td>
	<td>Type Fault/Error type – The set or range of allowed values of an entity is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Insufficient Size </td>
	<td>Insufficient Size fault/error – The allocated memory is too little for the data it should store.</td>
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
			<td>   Uninitialized Object </td>
	<td>Uninitialized Object fault/error – The object was never assigned a meaningful value.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>Memory Corruption/Disclosure final error type – An exploitable or undefined system behavior caused by memory addressing, allocation, use, or deallocation bugs.</td>
	</tr>
	<tr>
			<td>   Not Cleared Object </td>
	<td>Not Cleared Object final error – An object's data value is not changed to a non-meaningful one before deallocation.</td>
	</tr>
	<tr>
			<td>   Object Corruption </td>
	<td>Object Corruption final error – An object's data value is unintentionally altered.</td>
	</tr>
	<tr>
			<td>   Type Confusion </td>
	<td>Type Confusion final error – A casted pointer and its object have incompatible data types.</td>
	</tr>
	<tr>
			<td>   Use After Deallocate </td>
	<td>use after free or use after return) final error – An attempt to use (dereference, read, write, or clear) a deallocated object (e.g., via a pointer to a freed or reallocated heap object -- use after free) or out of scope object (e.g., via a returned by a function pointer to a stack object -- use after return).</td>
	</tr>
	<tr>
			<td>   Buffer Overflow </td>
	<td>Buffer Overflow final error – Write data above the upper bound of an object (i.e., buffer overwrite).</td>
	</tr>
	<tr>
			<td>   Buffer Underflow </td>
	<td>Buffer Underflow final error – Write data below the lower bound of an object (i.e., buffer under-write).</td>
	</tr>
	<tr>
			<td>   Buffer Over-Read </td>
	<td>Buffer Over-Read final error – Read data above the upper bound of an object.</td>
	</tr>
	<tr>
			<td>   Buffer Under-Read </td>
	<td>Buffer Under-Read final error – Read data below the lower bound of an object.</td>
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
			<td>   Direct </td>
	<td>Direct operation attribute – The operation is on a particular object element.</td>
	</tr>
	<tr>
			<td>   Sequential </td>
	<td>Sequential operation attribute – The operation is via iterating over the object elements.</td>
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
			<td>         Address Kind </td>
	<td>Address Kind operand attribute type - Shows how much memory is accessed (i.e., the span) outside the bounds of an object.</td>
	</tr>
	<tr>
			<td>            Huge </td>
	<td></td>
	</tr>
	<tr>
			<td>            Moderate </td>
	<td></td>
	</tr>
	<tr>
			<td>            Little </td>
	<td></td>
	</tr>
	<tr>
			<td>         Address State </td>
	<td>Address State operand attribute type – Shows where the address is (i.e., its location) in the memory layout.</td>
	</tr>
	<tr>
			<td>            Stack </td>
	<td></td>
	</tr>
	<tr>
			<td>            Heap </td>
	<td></td>
	</tr>
	<tr>
			<td>            /other/ </td>
	<td></td>
	</tr>
	<tr>
			<td>         Size Kind </td>
	<td>Size Kind operand attribute type – Shows what is used as the size or length (i.e., the number of elements) of an object - e.g., as the limit for traversal over the elements.</td>
	</tr>
	<tr>
			<td>            Actual </td>
	<td>Actual operand attribute – The real size or length (i.e., the number of elements) of the allocated memory for an object.</td>
	</tr>
	<tr>
			<td>            Used </td>
	<td>Used operand attribute – A supplied value to be used as the size or length (i.e., the number of elements) of an object.</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

