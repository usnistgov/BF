---
weight: 3
title: "VRF"
---
# BF Verification (VRF) Class

### VRF Definition
{{< definition >}}Data crypto authenticated or crypto verified improperly.{{< /definition >}}

### VRF Taxonomy


{{< img src="images/BF Classes/_CRY/VRF.png" caption="Fig 1. Verification (VRF) Class." >}}

### Taxons Definitions
{{< rawhtml >}}
<table class="table">
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
	<td>Check signed data is not altered or prove source using source public key or MAC with a key.</td>
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
			<td>Data Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Weak Cyphertext </td>
	<td>yyyddd.</td>
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
			<td>   Unverified Data </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Unverified Key </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Unverified Keying Material </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Forged Signature </td>
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
			<td>            Credentials </td>
	<td>Passwords, tokens, smart cards, digital certificates, biometrics (fingerprint, hand configuration, retina, iris, voice.) They are sensitive data.</td>
	</tr>
	<tr>
			<td>            System Data </td>
	<td>xxx OS's configurations, logs, Web usage. They are sensitive data.</td>
	</tr>
	<tr>
			<td>            State Data </td>
	<td>xxx A snapshot of software behavior. They are sensitive data.</td>
	</tr>
	<tr>
			<td>            Cryptographic </td>
	<td>Hashes, keys, keying material. They are sensitive data.</td>
	</tr>
	<tr>
			<td>            Digital Document </td>
	<td>yyyddd They are sensitive data.</td>
	</tr>
	<tr>
			<td>         Data State </td>
	<td>Shows where the data is or where the data is coming from.</td>
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
	