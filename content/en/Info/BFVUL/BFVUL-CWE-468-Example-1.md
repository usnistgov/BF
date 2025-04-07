
---
weight: 2
title: "BFVUL-CWE-468-Example-1"
carousel: true
---

<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F">
</script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-PJ364XPP9F');
</script>


## BF Specification of CWE-468 Example 1

<div>
<div class="row">
<div class="col-5">
<div>
<div style="text-align:center">
<img src="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1(simple)-0.png" alt="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1(simple)-0.png"/> 
		</div>
</div>

</div>
<div class="col">
<div class="row">
<div >
//generated//
Wrong Code to Cast (char *)(p + 1) instead of (char *)p + 1 via Pass In Pointer Primitive in Codebase Local leads to Wrong Type (int instead of char) 
, which propagates to Wrong Argument Type Ad-hoc Bind Call (+ operator) Object Primitive Codebase in Local  that results in Wrong Overloaded Function Bound (+(int*,int) instead of  +(char*,int)) 
, which propagates to Wrong Overloaded Function Bound Operator Calculate Pointer Bound Codebase in Local  that results in Wrong Result (( Pointer position )) 
, which propagates to Wrong Index Direct Reposition Stack Actual Codebase in Userland  that results in Overbound Pointer 
, which propagates to Overbound Pointer Direct Read Litle Stack Actual Codebase in Userland  that results in Buffer Over-Read , which can be exploited toward Information Exposure (IEX) (confidentiality loss) security failure.
</div>
</div>

<div class ="row">
<div>
<div id="carouselControls" class="carousel slide" data-interval="false" data-wrap="false">
<div class="carousel-inner">

<div class="carousel-item active" style="text-align:center">
				
<img src="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-1.png" alt="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-1.png"/> 
</div>
			
<div class="carousel-item" style="text-align:center">
				
<img src="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-2.png" alt="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-2.png"/> 
</div>
			
<div class="carousel-item" style="text-align:center">
				
<img src="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-3.png" alt="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-3.png"/> 
</div>
			
<div class="carousel-item" style="text-align:center">
				
<img src="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-4.png" alt="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-4.png"/> 
</div>
			
<div class="carousel-item" style="text-align:center">
				
<img src="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-5.png" alt="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-5.png"/> 
</div>
			
<div class="carousel-item" style="text-align:center">
				
<img src="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-6.png" alt="../../../../BF/images/BFVulnerability/BFVUL-CWE-468-Example-1-6.png"/> 
</div>
			
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<table>
<tr>
<td>

<br/><button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTable" aria-expanded="false" aria-controls="collapseTable">Show/Hide Definitions</button>
</td><td>

<br/>vendor:product: 
</td><td>

<br/>[Bug Report](https://cwe.mitre.org/data/definitions/468.html)
</td><td>

<br/>Code with Fix
</td><td>

<br/>[Code with Bug](https://cwe.mitre.org/data/definitions/468.html)
</td><td>

<br/>[NVD Entry](https://nvd.nist.gov/vuln/detail/)
</td>
</tr>
</table>


<div class="collapse" id="collapseTable">
<table>
		<tr>
		<td>
				<strong>Class</strong>
			</td>
	<td>
				<strong>Definition</strong>
			</td>
	</tr>
	<tr>
		<td>TCV</td>
	<td>Type Conversion (TCV) class – Data are converted or coerced into other type improperly.</td>
	</tr>
	<tr>
		<td>NRS</td>
	<td>Name Resolution (NRS) class – The name of an object, a function, or a type is resolved improperly or bound to an improper type or implementation.</td>
	</tr>
	<tr>
		<td>TCM</td>
	<td>Type Computation (TCM) class – An arithmetic expression (over numbers, strings, or pointers) is calculated improperly, or a boolean condition is evaluated improperly.</td>
	</tr>
	<tr>
		<td>MAD</td>
	<td>Memory Addressing (MAD) class – The pointer to an object is initialized, dereferenced, repositioned, or reassigned to an improper memory address.</td>
	</tr>
	<tr>
		<td>MUS</td>
	<td>Memory Use (MUS) class – An object is initialized, read, written, or cleared improperly.</td>
	</tr>
	<tr>
		<td>
				<strong>Operation</strong>
			</td>
	<td>
				<strong>Definition</strong>
			</td>
	</tr>
	<tr>
		<td>Cast</td>
	<td>Cast operation – Explicitly convert the value of an object to another data type.</td>
	</tr>
	<tr>
		<td>Call</td>
	<td>Call operation – Invoke a function implementation. The Type System binds a function implementation to the resolved function name. A polymorphic function implementation is first resolved and then bound.</td>
	</tr>
	<tr>
		<td>Calculate</td>
	<td>Calculate operation – Find the result of a numeric, pointer, or string operation.</td>
	</tr>
	<tr>
		<td>Reposition</td>
	<td>Reposition operation – Change the pointer to another position inside its object.</td>
	</tr>
	<tr>
		<td>Read</td>
	<td>Read operation – Retrieve the data value of an object from memory.</td>
	</tr>
	<tr>
		<td>
				<strong>Cause/Consequence</strong>
			</td>
	<td>
				<strong>Definition</strong>
			</td>
	</tr>
	<tr>
		<td>Code Bug</td>
	<td>Code Bug type – An error in the implementation of an operation – proper operands over an improper operation. It is the roor cause of a security vulnerability. Must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
		<td>   Wrong Code</td>
	<td>Wrong Code bug - An incorrect operator or function is used, or an incorrect data type is specified.</td>
	</tr>
	<tr>
		<td>Type </td>
	<td>Type error (or fault) type – The set or range of allowed values of an entity is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
		<td>   Wrong Type</td>
	<td>Wrong Type error (or fault) – A data type range or structure is not correct.</td>
	</tr>
	<tr>
		<td>   Wrong Argument Type</td>
	<td>Wrong Argument Type error (or fault) – An argument to an overloaded function is of incorrect data type.</td>
	</tr>
	<tr>
		<td>Name Error/Fault</td>
	<td>Name error (or fault) type – The fully resolved name of an entity is wrong.</td>
	</tr>
	<tr>
		<td>   Wrong Overloaded Function Bound</td>
	<td>Wrong Overloaded Function Bound error (or fault) – Wrong overloaded implementation is bound due to wrong function arguments.</td>
	</tr>
	<tr>
		<td>Data Error/Fault</td>
	<td>Data error (or fault) type – The data of an object has harmed semantics or inconsistent or wrong value.</td>
	</tr>
	<tr>
		<td>   Wrong Result</td>
	<td>Wrong Result error (or fault) – Incorrect value – from type conversion or computation.</td>
	</tr>
	<tr>
		<td>   Wrong Index</td>
	<td>Wrong Index error (or fault) – Incorrect index position – hardcoded or from computation.</td>
	</tr>
	<tr>
		<td>Address Error/Fault</td>
	<td>Address error (or fault) type – The address of an object is wrong.</td>
	</tr>
	<tr>
		<td>   Overbound Pointer</td>
	<td>Overbound Pointer error (or fault) – Holds an address that is above the upper boundary of its object.</td>
	</tr>
	<tr>
		<td>Memory Corruption/Disclosure Final Error</td>
	<td>Memory Corruption/Disclosure final error/exploit vector type – An exploitable or undefined system behavior caused by memory addressing, allocation, use, or deallocation bugs.</td>
	</tr>
	<tr>
		<td>   Buffer Over-Read</td>
	<td>Buffer Over-Read final error – Read data above the upper bound of an object.</td>
	</tr>
	<tr>
		<td>
				<strong>Operation Attribute</strong>
			</td>
	<td>
				<strong>Definition</strong>
			</td>
	</tr>
	<tr>
		<td>Mechanism</td>
	<td>Mechanism operation attribute type – Shows how the operation with a bug or faulty operand is performed.</td>
	</tr>
	<tr>
		<td>   Pass In</td>
	<td>Pass In operation attribute – The operation is via in arguments' values to a function/ operator.</td>
	</tr>
	<tr>
		<td>   Ad-hoc Bind</td>
	<td>Ad-hoc Bind operation attribute – The operation resolves an overloaded function via signature and sets its implementation.</td>
	</tr>
	<tr>
		<td>   Operator</td>
	<td>Operator operation attribute – The operation is via a function with a symbolic name that implements a mathematical, relational or logical operation.</td>
	</tr>
	<tr>
		<td>   Direct</td>
	<td>Direct operation attribute – The operation is on a particular object element.</td>
	</tr>
	<tr>
		<td>Source Code</td>
	<td>Source Code operation attribute type – Shows where the code of the operation with a bug or faulty operand resides within the software, firmware, or hardware.</td>
	</tr>
	<tr>
		<td>   Codebase</td>
	<td>Codebase operation attribute – The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
		<td>Execution Space</td>
	<td>Execution Space operation attribute type – Shows where the operation with a bug or faulty operand is executed and the privilege level at which it runs.</td>
	</tr>
	<tr>
		<td>   Local</td>
	<td>Local operation attribute – The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
	</tr>
	<tr>
		<td>   Userland</td>
	<td>Userland operation attribute – The bugged code runs in an environment with privilege levels, but in unprivileged mode (e.g., ring 3 in x86 architecture).</td>
	</tr>
	<tr>
		<td>
				<strong>Operand Attribute</strong>
			</td>
	<td>
				<strong>Definition</strong>
			</td>
	</tr>
	<tr>
		<td>Data Kind</td>
	<td>Data Kind operand attribute type – Shows what the type or category of data is.</td>
	</tr>
	<tr>
		<td>   Pointer</td>
	<td>Pointer operand attribute – A holder of the memory address of an object.</td>
	</tr>
	<tr>
		<td>Type Kind</td>
	<td>Type Kind operand attribute type – Shows what the data type composition is.</td>
	</tr>
	<tr>
		<td>   Primitive</td>
	<td>Primitive operand attribute – A scalar data type that mimics the hardware units - e.g., int (long, short, signed), float, double, string, Boolean. A primitive data type is only language defined and is not built from other data types.</td>
	</tr>
	<tr>
		<td>Name Kind</td>
	<td>Name Kind operand attribute type – Shows what the entity with this name is.</td>
	</tr>
	<tr>
		<td>   Object</td>
	<td>Object operand attribute – A memory region used to store data.</td>
	</tr>
	<tr>
		<td>Name State</td>
	<td>Name State operand attribute type – Shows what the stage of the entity name is.</td>
	</tr>
	<tr>
		<td>   Bound</td>
	<td>Bound operand attribute – The name is linked to a declared (or inferred) data type, a defined object's data, or a called function implementation.</td>
	</tr>
	<tr>
		<td>Address State</td>
	<td>Address State operand attribute type – Shows where the address is (i.e., its location) in the memory layout.</td>
	</tr>
	<tr>
		<td>   Stack</td>
	<td>The object is a non-static local variable (defined in a function, a passed parameter, or a function return address).</td>
	</tr>
	<tr>
		<td>Size Kind</td>
	<td>Size Kind operand attribute type – Shows what is used as the size or length (i.e., the number of elements) of an object - e.g., as the limit for traversal over the elements.</td>
	</tr>
	<tr>
		<td>   Actual</td>
	<td>Actual operand attribute – The real size or length (i.e., the number of elements) of the allocated memory for an object.</td>
	</tr>
	<tr>
		<td>Address </td>
	<td></td>
	</tr>
	<tr>
		<td>   Litle</td>
	<td></td>
	</tr>
	<tr>
		<td>
				<strong>Failure</strong>
			</td>
	<td>
				<strong>Definition</strong>
			</td>
	</tr>
	<tr>
		<td>IEX</td>
	<td>Information Exposure (IEX) – Inadvertent disclosure of information that leads to confidentiality loss.</td>
	</tr>
	
</table>
</div>
