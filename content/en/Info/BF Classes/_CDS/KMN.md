---
weight: 3
title: "KMN"
---
## BF Key Management (KMN) Bugs Class 

#### Definition
{{< definition >}}Key Management (KMN) class – Cryptographic keying material is generated, stored, distributed, used, or destroyed improperly.{{< /definition >}}

####  Taxonomy


{{< img src="images/BF Classes/_CDS/KMN.png" >}}

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
	<td>Generate/Select operation – yyyddd.</td>
	</tr>
	<tr>
			<td>Store </td>
	<td>Store operation – yyyddd.</td>
	</tr>
	<tr>
			<td>Distribute </td>
	<td>Distribute operation – yyyddd.</td>
	</tr>
	<tr>
			<td>Use </td>
	<td>Use operation – yyyddd.</td>
	</tr>
	<tr>
			<td>Destroy </td>
	<td>Destroy operation – yyyddd.</td>
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
	<td>Code Bug type – An error in the implementation of an operation – proper operands over an improper operation. It is the roor cause of a security vulnerability. Must be fixed to resolve the vulnerability.</td>
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
	<td>Specification Bug type – A defect in the metadata or algorithm of an operation – proper operands over an improper operation. It is the roor cause of a security vulnerability. It must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Wrong Algorithm </td>
	<td></td>
	</tr>
	<tr>
			<td>Data Fault</td>
	<td>Data Fault/Error type – The data of an object has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Weak Keying Material </td>
	<td>Weak Keying Material fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td><strong>Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data Error</td>
	<td>Data Fault/Error type – The data of an object has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
			<td>   Weak Keying Material </td>
	<td>Weak Keying Material fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>Data Security Final Error</td>
	<td>Data Security final error type – xxx</td>
	</tr>
	<tr>
			<td>   Revealed IV </td>
	<td>Revealed IV final error – A secret, public, or private key is exposed.</td>
	</tr>
	<tr>
			<td>   Revealed Shared Secrets </td>
	<td>Revealed Shared Secrets final error – A pre-master or other secret is exposed.</td>
	</tr>
	<tr>
			<td>   Revealed Domain Parameter </td>
	<td>Revealed Domain Parameter final error – A xxx is exposed.</td>
	</tr>
	<tr>
			<td>   Revealed Random Bits </td>
	<td>Revealed Random Bits final error – A random number (inlc. a salt or a nonce) is exposed.</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the operation the operation with a bug or faulty operand is performed.</td>
	</tr>
	<tr>
			<td>   Hash + RND </td>
	<td>Hash + RND operation attribute – The operation uses Hash Function + Random Numbers.</td>
	</tr>
	<tr>
			<td>   MAC </td>
	<td>MAC operation attribute – The operation is via Message Authentication Code.</td>
	</tr>
	<tr>
			<td>   Digital Signature </td>
	<td>Digital Signature operation attribute – The operation is via digital signature.</td>
	</tr>
	<tr>
			<td>Source Code </td>
	<td>Source Code operation attribute type – Shows where the code of the operation with a bug or faulty operand resides within the software, firmware, or hardware.</td>
	</tr>
	<tr>
			<td>   Codebase </td>
	<td>Codebase operation attribute – The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>   Third-Party </td>
	<td>Third-Party operation attribute – The operation code is in a third-party source.</td>
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
	<td>Execution Space operation attribute type – Shows where the operation with a bug or faulty operand is executed and the privilege level at which it runs.</td>
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
	<td>Data Kind operand attribute type – Shows what the type or category of data is.</td>
	</tr>
	<tr>
			<td>            Hashes </td>
	<td>Hashes operand attribute – Fixed-length bit strings mapped by a hash function from arbitrary length bit strings. They are used for integrity authentication. They are cryptographic data.</td>
	</tr>
	<tr>
			<td>            Keying Material </td>
	<td>Keying Material operand attribute – Cryptographic keys (secret, public, private) and other crypto algorithm parameters (initialization vectors (IVs), shared secrets (e.g., pre-master secrets), domain parameters, and random bits (eandom number - RBG seeds, salt, nonce). </td>
	</tr>
	<tr>
			<td>            Digital Certificate </td>
	<td>Digital Certificate operand attribute – yyyddd They are sensitive data.</td>
	</tr>
	<tr>
			<td>         Data State </td>
	<td>Data State operand attribute type – Shows where the data comes from.</td>
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

