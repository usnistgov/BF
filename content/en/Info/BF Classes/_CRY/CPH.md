---
weight: 3
title: "CPH"
---
# BF Cipher (CPH) Class <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

### Definition
{{< definition >}}Sensitive data are improperly encrypted or ciphertext is improperly decrypted.{{< /definition >}}

###  Taxonomy


{{< img src="images/BF Classes/_CRY/CPH.png" >}}

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
			<td>Encrypt </td>
	<td>Transform (encipher) intelligible data (plaintext) into unintelligible form (ciphertext) using a cryptographic algorithm and key(s). The goal is to ensure confidentiality.</td>
	</tr>
	<tr>
			<td>Decrypt </td>
	<td>Transform(decipher) encripted data (ciphertext) into plaintext using a cryptographic algorithm and key(s).</td>
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
			<td>   Hardcoded Key </td>
	<td></td>
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
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Weak Ciphertext </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Unverified Data </td>
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
			<td>   Repeated IV </td>
	<td>The initialization vector (IV) -- the starting nonce of an encryption cryptographic algorithm -- is not unique.</td>
	</tr>
	<tr>
			<td>   Weak Shared Secrets </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Revealed Key </td>
	<td></td>
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
			<td>   Weak Ciphertext </td>
	<td>yyyddd.</td>
	</tr>
	<tr>
			<td>   Revealed Key </td>
	<td></td>
	</tr>
	<tr>
			<td>Data Security Final Error</td>
	<td>yyyddd</td>
	</tr>
	<tr>
			<td>   Revealed Plaintext </td>
	<td>Intelligible data that has meaning and can be understood without the application of decryption is exposed.</td>
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
	<td>A key encryption scheme that uses one shared key. Known also as 'secret key algorithm' (e.g. Serpent, Blowfish).</td>
	</tr>
	<tr>
			<td>   Asymmetric Algorithm </td>
	<td>A key encryption scheme that uses two keys: public and private. Known also as 'public key algorithm' (e.g. Diffie-Hellman, RSA).</td>
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
			<td>            Credentials </td>
	<td>Passwords, tokens, smart cards, digital certificates, biometrics (fingerprint, hand configuration, retina, iris, voice.) They are sensitive data.</td>
	</tr>
	<tr>
			<td>            System Data </td>
	<td>OS's configurations, logs, Web usage. They are sensitive data.</td>
	</tr>
	<tr>
			<td>            State Data </td>
	<td>A snapshot of software behavior. They are sensitive data.</td>
	</tr>
	<tr>
			<td>            Cryptographic </td>
	<td>Hashes, keys (secret, public, private) and other crypto algorithm parameters (initialization vectors (IVs), shared secrets (e.g. pre-master secrets), domain parameters, and random bits (eandom number - RBG seeds, salt, nonce). They are sensitive data.</td>
	</tr>
	<tr>
			<td>            Digital Document </td>
	<td>yyyddd They are sensitive data.</td>
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
			<td>            Transferred </td>
	<td>The data are from another device via a network (e.g., connecting analog device or another computer).</td>
	</tr>
	<tr>
			<td>            In Use </td>
	<td>The data are from a volatile storage (e.g., RAM, cache memory).</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

