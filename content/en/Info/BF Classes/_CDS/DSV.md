---
weight: 3
title: "DSV"
---
## BF Data Integrity and Source Verification (DSV) Bugs Class <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

#### Definition
{{< definition >}}Data Integrity and Source Verification (DSV) class – Data/Source is crypto verified improperly.{{< /definition >}}

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
	<td>Crypto Authenticate is Sing plainttext data digitally with a source private key, or using MAC with a key.</td>
	</tr>
	<tr>
			<td>Crypto Verify </td>
	<td>Crypto Verify operation – Check signed data are not altered or prove source using source public key or MAC with a key.</td>
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
			<td>   Added Code </td>
	<td>Added Code bug - An inappropriate code is added to the implementation of an algorithm.</td>
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
			<td>   Weak Key </td>
	<td>Weak Key fault/error – The key is of an insufficiant length.</td>
	</tr>
	<tr>
			<td>   Weak Random Bits </td>
	<td>Weak Random Bits fault/error – yyyddd.</td>
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
			<td>   Unverified Data </td>
	<td>Unverified Data fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>   Unverified Key </td>
	<td>Unverified Key fault/error – yyyddd.</td>
	</tr>
	<tr>
			<td>Data Security Final Error</td>
	<td>Data Security exploitable error type – xxx</td>
	</tr>
	<tr>
			<td>   Revealed Key </td>
	<td>Revealed Key exploitable error – An initialization vectors (IVs) is exposed.</td>
	</tr>
	<tr>
			<td>   Forged Signature </td>
	<td></td>
	</tr>
	<tr>
			<td>   Spoofed Identity </td>
	<td>Spoofed Identity exploitable error – yyyddd</td>
	</tr>
	<tr>
			<td><strong>Operations Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism </td>
	<td>Mechanism operation attribute type – Shows how the buggy/faulty operation code is performed.</td>
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
	<td>Source Code operation attribute type – Shows where the buggy/faulty operation code is in software or firmware.</td>
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
	<td>Execution Space operation attribute type – Shows where the buggy/faulty operation code is running or with what privilege level.</td>
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
	<td>Data Kind operand attribute type – Shows the category or type of data.</td>
	</tr>
	<tr>
			<td>            Secret </td>
	<td>Secret operand attribute – Known only by its more than one owners.</td>
	</tr>
	<tr>
			<td>            Private </td>
	<td>Private operand attribute – Known only by its only owner.</td>
	</tr>
	<tr>
			<td>            Public </td>
	<td>Public operand attribute – Published for all the world to see.</td>
	</tr>
	<tr>
			<td>         Data State </td>
	<td>Data State operand attribute type operand attribute – Shows where the data come from.</td>
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

