---
weight: 3
title: "KMN"
---
# BF Key Management (KMN) Class

### Definition
{{< definition >}}Cryptographic Keying Material is generated, stored, distributed, used, or destroyed improperly.{{< /definition >}}

###  Taxonomy


{{< img src="images/BF Classes/_CRY/KMN.png" >}}

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
			<td>Generate/Select </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Store </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Distribute </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Use </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Destroy </td>
	<td>yyyddd.</td>
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
			<td>   Added Code </td>
	<td>The operation implementation adds a step to its specification.</td>
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
			<td>   Wrong Algorithm </td>
	<td>An inadequate, weak (incl. due to Insecure Mode of Operation), risky, or broken cryptographic algorithm or step.</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Weak Keying Material </td>
	<td>yyyddd.</td>
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
			<td>   Weak Keying Material </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Data Security Final Error</td>
	<td>yyyddd</td>
	</tr>
	<tr>
			<td>   Revealed IV </td>
	<td>A secret, public, or private key is exposed.</td>
	</tr>
	<tr>
			<td>   Revealed Shared Secrets </td>
	<td>A pre-master or other secret is exposed.</td>
	</tr>
	<tr>
			<td>   Revealed Domain Parameter </td>
	<td>A xxx is exposed.</td>
	</tr>
	<tr>
			<td>   Revealed Random Bits </td>
	<td>A random number (inlc. a salt or a nonce) is exposed.</td>
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
			<td>            Hashes </td>
	<td>Fixed-length bit strings mapped by a hash function from arbitrary length bit strings. They are used for integrity authentication. They are cryptographic data.</td>
	</tr>
	<tr>
			<td>            Keying Material </td>
	<td>Cryptographic keys (secret, public, private) and other crypto algorithm parameters (initialization vectors (IVs), shared secrets (e.g. pre-master secrets), domain parameters, and random bits (eandom number - RBG seeds, salt, nonce). </td>
	</tr>
	<tr>
			<td>            Digital Certificate </td>
	<td>yyyddd They are sensitive data.</td>
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

