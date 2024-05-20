---
weight: 3
title: "DVL"
---
## BF Data Validation (DVL) Bugs Class 

#### Definition
{{< definition >}}Data Validation (DVL) class – Data are validated (syntax check) or sanitized (escape, filter, repair) improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_INP/DVL.png" >}}

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
			<td>Validate </td>
	<td>Validate operation – Check data syntax (e.g., proper form or grammar, including missing symbols or elements) in order to accept (and possibly sanitize) or reject it.</td>
	</tr>
	<tr>
			<td>Sanitize </td>
	<td>Sanitize operation – Modify data (e.g., neutralize/escape, filter/remove, repair/add symbols) to make it valid (well-formed).</td>
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
			<td>Specification Bug</td>
	<td>Specification Bug type – Defect in the design of the operation – proper operands over an improper operation. A first cause for the chain of weaknesses underlying a software security vulnerability. Must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Under-Restrictive Policy </td>
	<td>Accepts bad data.</td>
	</tr>
	<tr>
			<td>   Over-Restrictive Policy </td>
	<td>Rejectsgooddata.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Data Fault/Error type – The object data has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Corrupted Data </td>
	<td>Corrupted Data fault/error – The data is modified unintentionally due to a previous weakness (e.g., with a decompress or a decrypt operation); would lead to invalid data for next weakness.</td>
	</tr>
	<tr>
			<td>   Tampered Data </td>
	<td>Tampered Data fault/error – Maliciously modified data due to a previous weakness (e.g., with a deserialize, authorize, or crypto verify operation); would lead to injection.</td>
	</tr>
	<tr>
			<td>   Corrupted Policy Data </td>
	<td>Corrupted Policy Data fault/error –  Policy data is modified unintentionally (the values the policy checks for) due to a previous weakness.</td>
	</tr>
	<tr>
			<td>   Tampered Policy Data </td>
	<td>Tampered Policy Data fault/error – Maliciously modified policy data (the values the policy checks for) due to a previous weakness.</td>
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
			<td>   Invalid Data </td>
	<td>Invalid Data fault/error – The data has harmed syntax due to sanitization errors.</td>
	</tr>
	<tr>
			<td>Injection Final Error</td>
	<td>Injection exploitable error type – An exploitable or undefined  system behavior caused by 'code separation' data validation bugs.</td>
	</tr>
	<tr>
			<td>   Query Injection </td>
	<td>Query Injection exploitable error – Maliciously inserted condition parts (e.g., or 1==1) or entire commands (e.g., drop table) into an input used to construct a database query.</td>
	</tr>
	<tr>
			<td>   Command Injection </td>
	<td>Command Injection exploitable error – Maliciously inserted new commands into the input to a command sent to an OS or a server.</td>
	</tr>
	<tr>
			<td>   Source Code Injection </td>
	<td>Source Code Injection exploitable error – Maliciously inserted new code (incl. with <> elements) into an input used as a part of an executing application code.</td>
	</tr>
	<tr>
			<td>   Parameter Injection </td>
	<td>Parameter Injection exploitable error – Maliciously inserted data (e.g., with & parameter separator) into an input used as a parameter/argument in other parts of the code.</td>
	</tr>
	<tr>
			<td>   File Injection </td>
	<td>File Injection exploitable error – Maliciously inserted data (e.g., with .. and / or with file entries) into an input used to access/modify files or as a file content.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the operation code is performed.</td>
	</tr>
	<tr>
			<td>   Safelist </td>
	<td>Safelist operation attribute – The operation is via a policy based on a set of known good content.</td>
	</tr>
	<tr>
			<td>   Denylist </td>
	<td>Denylist operation attribute – The operation is via a policy based on a set of known bad content; helps reject outright maliciously malformed data.</td>
	</tr>
	<tr>
			<td>   Format </td>
	<td>Format operation attribute – The operation is via a policy based on syntax format (e.g., defined via regular expression).</td>
	</tr>
	<tr>
			<td>   Length </td>
	<td>Length operation attribute – The operation uses a policy based on allowed number of characters in data. Note that this is not about the data value as size of an object.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the operation code is in software or firmware.</td>
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
	<td>Execution Space operation attribute type – Shows where the operation code is running or with what privilege level.</td>
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
	<td>Entered operand attribute – Data are from a user via a user interface (e.g., input field of a dialog or a command prompt).</td>
	</tr>
	<tr>
			<td>            Stored </td>
	<td>Stored operand attribute – Data are from a permanent storage (e.g., file, database on a storage device); they are at rest.</td>
	</tr>
	<tr>
			<td>            In Use </td>
	<td>In Use operand attribute – Data are from a volatile storage (e.g., RAM, cache memory).</td>
	</tr>
	<tr>
			<td>            Transferred </td>
	<td>Transferred operand attribute – Data are from another device via a network (e.g., connecting analog device or another computer).</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

