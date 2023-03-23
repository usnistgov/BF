---
weight: 3
title: "KMN"
---
# BF Key Management (KMN) Class

### KMN Definition
{{< definition >}}Cryptographic keys and Keying Material are generated, stored, distributed, used, or destroyed improperly.{{< /definition >}}

### KMN Taxonomy


{{< img src="images/BF Classes/_CRY/KMN.png" caption="Fig 1. Key Management (KMN) Class." >}}

### Taxons Definitions
{{< rawhtml >}}
<table class="table">
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
	<td>The entire operation or part of it is absent.</td>
	</tr>
	<tr>
			<td>   Erroneous Code </td>
	<td>The operation implementation has a bug.</td>
	</tr>
	<tr>
			<td>Specification Defect Bug</td>
	<td>An error in the rules (policy, algorithm, keying material, domain parameter) used by the operation, that when implemented becomes the bug causing the chain of weaknesses underlying a software security vulnerability. It must be fixed to resolve the vulnerab</td>
	</tr>
	<tr>
			<td>   Modified Algorithm </td>
	<td>A cryptographic step is removed, changed, or added.</td>
	</tr>
	<tr>
			<td>   Inadequate Algorithm </td>
	<td>xxx.</td>
	</tr>
	<tr>
			<td>   Weak Algorithm </td>
	<td>xxx (incl. due to Insecure Mode of Operation) encryption algorithm or step</td>
	</tr>
	<tr>
			<td>   Risky/Broken Algorithm </td>
	<td>xxx</td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Weak Key </td>
	<td>The key is known, too small, xxx.</td>
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
			<td>   Weak Key </td>
	<td>The key is known, too small, xxx.</td>
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
			<td>   Revealed Key </td>
	<td>yyyddd</td>
	</tr>
	<tr>
			<td>   Revealed Keying Material </td>
	<td>Cryptographic keys (secret, public, private) and other crypto algorithm parameters (initialization vectors (IVs), shared secrets (e.g. pre-master secrets), domain parameters, RBG seeds/random bits (numbers, inlc. salts, nonces), passwords. </td>
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
			<td>         Data Kind </td>
	<td>Shows what kind the data value is.</td>
	</tr>
	<tr>
			<td>            Hashes </td>
	<td>xxx Hash functions are used for integrity authentication. They are cryptographic data.</td>
	</tr>
	<tr>
			<td>            Keying Material </td>
	<td>Cryptographic keys, initialization vectors, shared secrets, domain parameters, random bits (seeds, salts, nonces). They are cryptographic data.</td>
	</tr>
	<tr>
			<td>            Digital Certificate </td>
	<td>yyyddd They are sensitive data.</td>
	</tr>
	<tr>
			<td>         Data State </td>
	<td>Shows where the data is or where the data is coming from.</td>
	</tr>
	<tr>
			<td>            Entered </td>
	<td>Data comes from user interface (e.g., text field).</td>
	</tr>
	<tr>
			<td>            Stored </td>
	<td>Data comes from permanent storage (e.g., file, database on a storage device).</td>
	</tr>
	<tr>
			<td>            In Use </td>
	<td>Data comes from volatile storage (e.g., RAM, cache memory).</td>
	</tr>
	<tr>
			<td>            Transferred </td>
	<td>Data comes via network (e.g., connecting analog device or another computer).</td>
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
	