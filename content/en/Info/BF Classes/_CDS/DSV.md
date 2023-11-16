---
weight: 3
title: "DSV"
---
## BF Data Integrity and Source Verification (DSV) Bugs Class <br/>_`Irena Bojanova, Inventor/Creator, PI, Bugs Framework (BF)`_

#### Definition
{{< definition >}}Data/Source is crypto verified improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_CDS/DSV.png" >}}

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
			<td>Crypto Authenticate </td>
	<td>Sing plainttext data digitally with a source private key, or using MAC with a key.</td>
	</tr>
	<tr>
			<td>Crypto Verify </td>
	<td>Check signed data are not altered or prove source using source public key or MAC with a key.</td>
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
	<td>The operation has a bug, which is the first cause for the chain of weaknesses underlying a software security vulnerability. The bug must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Missing Code </td>
	<td>The entire operation implementation or a part of its specification is absent.</td>
	</tr>
	<tr>
			<td>   Added Code </td>
	<td>The operation implementation adds a step to its specification.</td>
	</tr>
	<tr>
			<td>   Erroneous Code </td>
	<td>The operation implementation has a bug.</td>
	</tr>
	<tr>
			<td>Specification Defect Bug</td>
	<td>A specification (algorithm, protocol) of an operation an error or a rule (policy, keying material) used by the operation has an error, which when implemented becomes the bug causing the chain of weaknesses underlying a software security vulnerability. It must be fixed to fix the bug and to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Wrong Algorithm </td>
	<td>An inadequate, weak (incl. due to Insecure Mode of Operation), risky, or broken cryptographic algorithm or step.</td>
	</tr>
	<tr>
			<td>   Weak Protocol </td>
	<td>xxx.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>The object data has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Weak Ciphertext </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Weak Key </td>
	<td>The key is of an insufficiant length.</td>
	</tr>
	<tr>
			<td>   Weak Random Bits </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>The object data has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Unverified Data </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Unverified Key </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Data Security Final Error</td>
	<td>yyyddd</td>
	</tr>
	<tr>
			<td>   Revealed Key </td>
	<td>An initialization vectors (IVs) is exposed.</td>
	</tr>
	<tr>
			<td>   Forged Signature </td>
	<td></td>
	</tr>
	<tr>
			<td>   Spoofed Identity </td>
	<td>yyyddd</td>
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
			<td>   Hash + RND </td>
	<td>Hash Function + Random Numbers.</td>
	</tr>
	<tr>
			<td>   MAC </td>
	<td>Message Authentication Code.</td>
	</tr>
	<tr>
			<td>   Digital Signature </td>
	<td>yyyddd.</td>
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
			<td>         Data Kind </td>
	<td>Shows what the data value is.</td>
	</tr>
	<tr>
			<td>            Secret </td>
	<td>Known only by its more than one owners.</td>
	</tr>
	<tr>
			<td>            Private </td>
	<td>Known only by its only owner.</td>
	</tr>
	<tr>
			<td>            Public </td>
	<td>Published for all the world to see.</td>
	</tr>
	<tr>
			<td>         Data State </td>
	<td>Shows where the data come from.</td>
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

