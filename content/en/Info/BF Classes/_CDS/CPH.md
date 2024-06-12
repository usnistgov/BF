---
weight: 3
title: "CPH"
---
## BF Cipher (CPH) Bugs Class 

#### Definition
{{< definition >}}Cipher (CPH) class – Sensitive data are improperly encrypted or ciphertext is improperly decrypted.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_CDS/CPH.png" >}}

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
	<td>Encrypt operation – Transform (encipher) intelligible data (plaintext) into unintelligible form (ciphertext) using a cryptographic algorithm and key(s). The goal is to ensure confidentiality.</td>
	</tr>
	<tr>
			<td>Decrypt </td>
	<td>Decrypt operation – Transform (decipher) encripted data (ciphertext) into intelligible data (plaintext) using a cryptographic algorithm and key(s).</td>
	</tr>
	<tr>
			<td><strong>Operands</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data </td>
	<td>Data operand – The data value of an object – i.e., the actual value that is stored in memory.</td>
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
			<td>   Added Code </td>
	<td>Added Code bug - An inappropriate code is added to the implementation of an algorithm.</td>
	</tr>
	<tr>
			<td>   Erroneous Code </td>
	<td>Erroneous Code bug - There is a coding error in the implementation of the operation.</td>
	</tr>
	<tr>
			<td>Specification Bug</td>
	<td>Specification Bug type – Defect in the metadata or algorithm of the operation – proper operands over an improper operation. It is always the first cause for the chain of weaknesses underlying a software security vulnerability. It must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Hardcoded Key </td>
	<td></td>
	</tr>
	<tr>
			<td>   Wrong Algorithm </td>
	<td></td>
	</tr>
	<tr>
			<td>   Weak Protocol </td>
	<td></td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Data Fault/Error type – The object data has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Weak Ciphertext </td>
	<td>Weak Ciphertext fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>   Unverified Data </td>
	<td>Unverified Data fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>   Weak Key </td>
	<td>Weak Key fault/error – The key is of an insufficiant length.</td>
	</tr>
	<tr>
			<td>   Weak Random Bits </td>
	<td>Weak Random Bits fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>   Repeated IV </td>
	<td>Repeated IV fault/error – The initialization vector (IV) – the starting nonce of an encryption cryptographic algorithm – is not unique.</td>
	</tr>
	<tr>
			<td>   Weak Shared Secrets </td>
	<td>Weak Shared Secrets fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>   Revealed Key </td>
	<td>Revealed Key fault/error – xxx.</td>
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
			<td>   Corrupted Data </td>
	<td>Corrupted Data fault/error – The data is modified unintentionally due to a previous weakness (e.g., with a decompress or a decrypt operation); would lead to invalid data for next weakness.</td>
	</tr>
	<tr>
			<td>   Meaningless Data </td>
	<td>Meaningless Data fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>   Weak Ciphertext </td>
	<td>Weak Ciphertext fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>   Revealed Key </td>
	<td>Revealed Key fault/error – xxx.</td>
	</tr>
	<tr>
			<td>Data Security Final Error</td>
	<td>Data Security final error type – xxx</td>
	</tr>
	<tr>
			<td>   Revealed Plaintext </td>
	<td>Revealed Plaintext final error – Intelligible data that has meaning and can be understood without the application of decryption is exposed.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the operation is performed.</td>
	</tr>
	<tr>
			<td>   Symmetric Algorithm </td>
	<td>Symmetric Algorithm operation attribute – The operation is via a key encryption scheme that uses one shared key. Known also as 'secret key algorithm' (e.g., Serpent, Blowfish).</td>
	</tr>
	<tr>
			<td>   Asymmetric Algorithm </td>
	<td>Asymmetric Algorithm operation attribute – The operation is via a key encryption scheme with two keys: public and private. Known also as 'public key algorithm' (e.g., Diffie-Hellman, RSA).</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the operation code resides within the software, firmware, or circuit logic code.</td>
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
	<td>Execution Space operation attribute type – Shows where the operation is executed or the privilege level at which it runs.</td>
	</tr>
	<tr>
			<td>   Userland </td>
	<td>Userland operation attribute – The bugged code runs in an environment with privilege levels, but in unprivileged mode (e.g., ring 3 in x86 architecture).</td>
	</tr>
	<tr>
			<td>   Kernel </td>
	<td>Kernel operation attribute – The bugged code runs in an environment with privilege levels with access privileged instructions (e.g., ring 0 in x86 architecture).</td>
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
			<td>         Data Kind </td>
	<td>Data Kind operand attribute type – Shows the type or category of data.</td>
	</tr>
	<tr>
			<td>            Credentials </td>
	<td>Credentials operand attribute – Passwords, tokens, smart cards, digital certificates, biometrics (fingerprint, hand configuration, retina, iris, voice.) They are sensitive data.</td>
	</tr>
	<tr>
			<td>            System Data </td>
	<td>System Data operand attribute – OS's configurations, logs, Web usage. They are sensitive data.</td>
	</tr>
	<tr>
			<td>            State Data </td>
	<td>State Data operand attribute – A snapshot of software behavior. They are sensitive data.</td>
	</tr>
	<tr>
			<td>            Cryptographic </td>
	<td>Cryptographic operand attribute – Hashes, keys (secret, public, private) and other crypto algorithm parameters (initialization vectors (IVs), shared secrets (e.g., pre-master secrets), domain parameters, and random bits (eandom number - RBG seeds, salt, nonce). They are sensitive data.</td>
	</tr>
	<tr>
			<td>            Digital Document </td>
	<td>Digital Document operand attribute – yyyddd They are sensitive data.</td>
	</tr>
	<tr>
			<td>         Data State </td>
	<td>Data State operand attribute type – Shows where the data came from.</td>
	</tr>
	<tr>
			<td>            Stored </td>
	<td>Stored operand attribute – Data are from a permanent storage (e.g., file, database on a storage device); they are at rest.</td>
	</tr>
	<tr>
			<td>            Transferred </td>
	<td>Transferred operand attribute – Data are from another device via a network (e.g., connecting analog device or another computer).</td>
	</tr>
	<tr>
			<td>            In Use </td>
	<td>In Use operand attribute – Data are from a volatile storage (e.g., RAM, cache memory).</td>
	</tr>
	
</table>
</div>
{{< /rawhtml >}}

