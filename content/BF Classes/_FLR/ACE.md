---
weight: 3
title: "ACE"
---
# Arbitrary Code Execution Failure (ACE) Class

### Definition

We define Arbitrary Code Execution Failure (ACE) as follows:

{{< definition >}}Execution of unauthorized commands or code execution -- everything could be lost.{{< /definition >}}

### Taxonomy

Fig. 1 depicts ACE causes, attributes and consequences.

{{< img src="images/BF classes/_FLR-ACE.png" caption="Fig 1. Arbitrary Code Execution Failure (ACE) Class" >}}


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
			<td>Access </td>
	<td>Undefined or exploitable system behavior caused by 'name access' declaration bugs.</td>
	</tr>
	<tr>
			<td>Wrong Access Function </td>
	<td>Unauthorized access to a function; allows its execution.</td>
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
			<td>Injection </td>
	<td>Undefined or exploitable system behavior caused by 'code separation' data validation bugs.</td>
	</tr>
	<tr>
			<td>Command Injection </td>
	<td>Maliciously inserted new commands into the input to a command sent to an OS or a server.</td>
	</tr>
	<tr>
			<td>File Injection </td>
	<td>Maliciously inserted data (e.g., with .. and / or with file entries) into an input used to access/modify files or as a file content.</td>
	</tr>
	<tr>
			<td>Parameter Injection </td>
	<td>Maliciously inserted of data (e.g., with & parameter separator) into an input used as a parameter/argument in other parts of the code.</td>
	</tr>
	<tr>
			<td>Query Injection </td>
	<td>Maliciously inserted condition parts (e.g., or 1==1) or entire commands (e.g., drop table) into an input used to construct a database query.</td>
	</tr>
	<tr>
			<td>Source Code Injection </td>
	<td>Maliciously inserted new code (incl. with <> elements) into an input used as a part of an executing application code.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure </td>
	<td>Undefined or exploitable system behavior caused by memory allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>Memory Overflow </td>
	<td>More memory is requested than available.</td>
	</tr>
	<tr>
			<td>Memory Leak </td>
	<td>These is an object with no pointer pointing to it.</td>
	</tr>
	<tr>
			<td>Double Free </td>
	<td>An attempt to deallocate a deallocated an object or via an uninitialized pointer.</td>
	</tr>
	<tr>
			<td>Object Corruption </td>
	<td>The object's data value is unintentionally altered.</td>
	</tr>
	<tr>
			<td>Uninitialized Object </td>
	<td>The object's data value is non-meaningful.</td>
	</tr>
	<tr>
			<td>Not Cleared Object </td>
	<td>The object's data value is not changed to a non-meaningful one before deallocation.</td>
	</tr>
	<tr>
			<td>NULL Pointer Dereference </td>
	<td>An attempt to access an object for reading or writing via a NULL pointer.</td>
	</tr>
	<tr>
			<td>Untrusted Pointer Dereference </td>
	<td>An attempt to access an object via an altered pointer (not legitimate dereference of a tainted pointer).</td>
	</tr>
	<tr>
			<td>Type Confusion </td>
	<td>The object and its pointer have different types.</td>
	</tr>
	<tr>
			<td>Use After Free </td>
	<td>An attempt to use a deallocated object.</td>
	</tr>
	<tr>
			<td>Buffer Overflow </td>
	<td>Writes above the upper bound of an object -- aka Buffer Over-Write.</td>
	</tr>
	<tr>
			<td>Buffer Underflow </td>
	<td>Writes below the upper bound of an object -- aka Buffer Under-Write.</td>
	</tr>
	<tr>
			<td>Buffer Over-Read </td>
	<td>Reads above the upper bound of an object.</td>
	</tr>
	<tr>
			<td>Buffer Under-Read </td>
	<td>Reads below the upper bound of an object.</td>
	</tr>
	<tr>
			<td>Uninitialized Pointer Dereference </td>
	<td>An attempt to access an object for reading or writing via an uninitialized pointer.</td>
	</tr>
	<tr>
			<td>Type Compute </td>
	<td>Undefined or exploitable system behavior caused by 'arithmetic' type computation bugs.</td>
	</tr>
	<tr>
			<td>Undefined </td>
	<td>The Type System cannon represent the calculated result (e.g. division by 0).</td>
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
			<td>Address Error</td>
	<td>The used object address is wrong.</td>
	</tr>
	<tr>
			<td>RCE Consequence </td>
	<td></td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>Undefined or exploitable system behavior caused by memory allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>Buffer Overflow </td>
	<td>Writes above the upper bound of an object -- aka Buffer Over-Write.</td>
	</tr>
	<tr>
			<td>Buffer Underflow </td>
	<td>Writes below the upper bound of an object -- aka Buffer Under-Write.</td>
	</tr>
	<tr>
			<td>Buffer Over-Read </td>
	<td>Reads above the upper bound of an object.</td>
	</tr>
	<tr>
			<td>Buffer Under-Read </td>
	<td>Reads below the upper bound of an object.</td>
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
			<td>ACE Operation </td>
	<td>yyyddd.</td>
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
			<td>Code Execution Attribute</td>
	<td></td>
	</tr>
	<tr>
			<td>Local </td>
	<td></td>
	</tr>
	<tr>
			<td>Remote </td>
	<td></td>
	</tr>
	<tr>
			<td>
				**Operands**
			</td>
	<td>
				**Definition**
			</td>
	</tr>
	
</table>
{{< /rawhtml >}}
	