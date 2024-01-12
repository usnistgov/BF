---
weight: 3
title: "DVR"
---
## BF Data Verification (DVR) Bugs Class <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

#### Definition
{{< definition >}}Data Verification (DVR) class – Data are verified (semantics check) or corrected (assign, remove) improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_INP/DVR.png" >}}

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
			<td>Verify </td>
	<td>Verify operation – Check data semantics (proper value/meaning) in order to accept (and possibly correct) or reject it.</td>
	</tr>
	<tr>
			<td>Correct </td>
	<td>Correct operation – Modify data (assign new value, remove) to make it accurate.</td>
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
			<td><strong>Causes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Code Bug</td>
	<td>Code Bug Type – A code operation defect – proper operands over an improper operation. A first cause for the chain of weaknesses underlying a software security vulnerability. Must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Missing Code </td>
	<td></td>
	</tr>
	<tr>
			<td>   Erroneous Code </td>
	<td></td>
	</tr>
	<tr>
			<td>Specification Bug</td>
	<td>Specification Bug Type – A specification operation defect – proper operands over an improper operation. A first cause for the chain of weaknesses underlying a software security vulnerability. Must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Under-Restrictive Policy </td>
	<td></td>
	</tr>
	<tr>
			<td>   Over-Restrictive Policy </td>
	<td></td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Data Fault/Error Type – The object data has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Invalid Data </td>
	<td>Invalid Data fault/error – Data with harmed syntax due to sanitization errors.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Data Fault/Error Type – The object data has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Wrong Value </td>
	<td>Wrong Value fault/error – The value of the data is not accurate (e.g., outside of a range).</td>
	</tr>
	<tr>
			<td>   Inconsistent Value </td>
	<td>Inconsistent Value fault/error – Data value does not correspond to the value of a related data (e.g., inconstancy between the value of a size variable and the actual buffer size).</td>
	</tr>
	<tr>
			<td>Type Error</td>
	<td>Type Fault/Error Type – The the set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type </td>
	<td>Wrong Type fault/error – A data type range or structure is not correct.</td>
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
			<td>   Value </td>
	<td>Value operation attribute – Checking data for a specific value (incl. NULL or list of values).</td>
	</tr>
	<tr>
			<td>   Quantity </td>
	<td>Quantity operation attribute – Checking data for a specific measurable value (e.g., size, time, rate, frequency).</td>
	</tr>
	<tr>
			<td>   Range </td>
	<td>Range operation attribute – Checking data are within a (min, max) interval.</td>
	</tr>
	<tr>
			<td>   Data Type </td>
	<td>Data Type operation attribute – A set of allowed values and the operations allowed over them.</td>
	</tr>
	<tr>
			<td>   Other Rules </td>
	<td>Other Rules operation attribute – Check data against other business logic.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the buggy/faulty operation code is in the program – in what kind of software.</td>
	</tr>
	<tr>
			<td>   Codebase </td>
	<td>Codebase operation attribute – The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>   Third-Party </td>
	<td>Third-Party operation attribute – The operation is in a third-party software.</td>
	</tr>
	<tr>
			<td>   Standard Library </td>
	<td>Standard Library operation attribute – The operation is in the standard library for a particular programming language.</td>
	</tr>
	<tr>
			<td>   Compiler/Interpreter </td>
	<td>Compiler/Interpreter operation attribute – The operation is in the language processor that allows execution or creates executables (compiler, assembler, interpreter).</td>
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
			<td>         Data State </td>
	<td>Data State operand attribute type operand attribute – Shows where the data come from.</td>
	</tr>
	<tr>
			<td>            Entered </td>
	<td>Entered operand attribute – The data are from a user via a user interface (e.g., text field).</td>
	</tr>
	<tr>
			<td>            Stored </td>
	<td>Stored operand attribute – The data are from a permanent storage (e.g., file, database on a storage device).</td>
	</tr>
	<tr>
			<td>            In Use </td>
	<td>In Use operand attribute – The data are from a volatile storage (e.g., RAM, cache memory).</td>
	</tr>
	<tr>
			<td>            Transferred </td>
	<td>Transferred operand attribute – The data are from another device via a network (e.g., connecting analog device or another computer).</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

