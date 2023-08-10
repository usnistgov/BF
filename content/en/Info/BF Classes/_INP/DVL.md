---
weight: 3
title: "DVL"
---
## BF Data Validation (DVL) Bugs Class <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

#### Definition
{{< definition >}}Data are validated (syntax check) or sanitized (escape, filter, repair) improperly.{{< /definition >}}

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
	<td>Check data syntax (proper form/grammar) in order to accept (and possibly sanitize) or reject it (incl. check for missing symbols/elements).</td>
	</tr>
	<tr>
			<td>Sanitize </td>
	<td>Modify data (neutralize/escape, filter/remove, repair/add symbols) to make it valid (well-formed).</td>
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
			<td>   Erroneous Code </td>
	<td>The operation implementation has a bug.</td>
	</tr>
	<tr>
			<td>Specification Defect Bug</td>
	<td>An error in the rules (policy, algorithm, keying material) used by the operation, that when implemented becomes the bug causing the chain of weaknesses underlying a software security vulnerability. It must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Under-Restrictive Policy </td>
	<td>Accepts bad data.</td>
	</tr>
	<tr>
			<td>   Over-Restrictive Policy </td>
	<td>Rejects good data.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Corrupted Data </td>
	<td>Unintentionally modified data due to a previous weakness (e.g., with a decompress or a decrypt operation); would lead to invalid data for next weakness.</td>
	</tr>
	<tr>
			<td>   Tampered Data </td>
	<td>Maliciously modified data due to a previous weakness (e.g., with a deserialize, authorize, or crypto verify operation); would lead to injection.</td>
	</tr>
	<tr>
			<td>   Corrupted Policy Data </td>
	<td>Unintentionally modified policy data (the values the policy checks for) due to a previous weakness.</td>
	</tr>
	<tr>
			<td>   Tampered Policy Data </td>
	<td>Maliciously modified policy data (the values the policy checks for) due to a previous weakness.</td>
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
			<td>   Invalid Data </td>
	<td>Data with harmed syntax due to sanitization errors.</td>
	</tr>
	<tr>
			<td>Injection Final Error</td>
	<td>An undefined or exploitable system behavior caused by 'code separation' data validation bugs.</td>
	</tr>
	<tr>
			<td>   Query Injection </td>
	<td>Maliciously inserted condition parts (e.g., or 1==1) or entire commands (e.g., drop table) into an input used to construct a database query.</td>
	</tr>
	<tr>
			<td>   Command Injection </td>
	<td>Maliciously inserted new commands into the input to a command sent to an OS or a server.</td>
	</tr>
	<tr>
			<td>   Source Code Injection </td>
	<td>Maliciously inserted new code (incl. with <> elements) into an input used as a part of an executing application code.</td>
	</tr>
	<tr>
			<td>   Parameter Injection </td>
	<td>Maliciously inserted of data (e.g., with & parameter separator) into an input used as a parameter/argument in other parts of the code.</td>
	</tr>
	<tr>
			<td>   File Injection </td>
	<td>Maliciously inserted data (e.g., with .. and / or with file entries) into an input used to access/modify files or as a file content.</td>
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
			<td>   Safelist </td>
	<td>A policy based on a set of known good content.</td>
	</tr>
	<tr>
			<td>   Denylist </td>
	<td>A policy based on a set of known bad content; helps reject outright maliciously malformed data.</td>
	</tr>
	<tr>
			<td>   Format </td>
	<td>A policy based on syntax format (e.g., defined via regular expression).</td>
	</tr>
	<tr>
			<td>   Length </td>
	<td>A policy based on allowed number of characters in data. Note that this is not about the data value as size of an object.</td>
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
			<td>   Local </td>
	<td>The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
	</tr>
	<tr>
			<td>   Admin </td>
	<td>The bugged code runs in an environment with access control policy with unlimited (admin user) permission.</td>
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
			<td>         Data State </td>
	<td>Shows where the data come from.</td>
	</tr>
	<tr>
			<td>            Entered </td>
	<td>The data are from a user via a user interface (e.g., text field).</td>
	</tr>
	<tr>
			<td>            Stored </td>
	<td>The data are from a permanent storage (e.g., file, database on a storage device).</td>
	</tr>
	<tr>
			<td>            In Use </td>
	<td>The data are from a volatile storage (e.g., RAM, cache memory).</td>
	</tr>
	<tr>
			<td>            Transferred </td>
	<td>The data are from another device via a network (e.g., connecting analog device or another computer).</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

