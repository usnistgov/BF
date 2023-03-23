---
weight: 3
title: "ENC"
---
# BF Encryption (ENC) Class

### ENC Definition
{{< definition >}}Sensitive data are improperly encrypted or ciphertext is improperly decrypted.{{< /definition >}}

### ENC Taxonomy


{{< img src="images/BF Classes/_CRY/ENC.png" caption="Fig 1. Encryption (ENC) Class." >}}

### Taxons Definitions
{{< rawhtml >}}
<table class="table">
		<tr>
			<td><strong>Operations</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Encrypt </td>
	<td>Transform sensitive data (plaintext) into unintelligible form (ciphertext) using a cryptographic algorithm and key(s). The goal is to ensyre confidentiality.</td>
	</tr>
	<tr>
			<td>Decrypt </td>
	<td>Transform encripted data (ciphertext) into plaintext using a cryptographic algorithm and key(s).</td>
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
			<td>   Modified Algorithm </td>
	<td>A cryptographic step is removed, changed, or added.</td>
	</tr>
	<tr>
			<td>   Weak Protocol </td>
	<td>xxx.</td>
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
			<td>   Unverified Data </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Hardcoded Key </td>
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
			<td>   Random Bits </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Repeated IV </td>
	<td>The initialization vector (IV) -- the starting nonce of an encryption cryptographic algorithm -- is not unique.</td>
	</tr>
	<tr>
			<td>   Shared Secrets </td>
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
			<td>   Corrupted Data </td>
	<td>Unintentionally modified data due to a previous weakness (e.g., with a decompress or a decrypt operation); would lead to invalid data for next weakness.</td>
	</tr>
	<tr>
			<td>   Meaningless Data </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Weak Cyphertext </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>Data Security Final Error</td>
	<td>yyyddd</td>
	</tr>
	<tr>
			<td>   Revealed Plaintext </td>
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
			<td>   Symmetric Algorithm </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Asymmetric Algorithm </td>
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
			<td>            Secret </td>
	<td>xxx A secret key used to both encrypt and decrypt -- known only by its owners.</td>
	</tr>
	<tr>
			<td>            Private </td>
	<td>xxx A private key used to encrypt -- known only by its owner.</td>
	</tr>
	<tr>
			<td>            Public </td>
	<td>xxx A public key used to decrypt -- published for all the world to see.</td>
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
			<td>            Transferred </td>
	<td>Data comes via network (e.g., connecting analog device or another computer).</td>
	</tr>
	<tr>
			<td>            In Use </td>
	<td>Data comes from volatile storage (e.g., RAM, cache memory).</td>
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
	