---
weight: 1
title: ""
---
# BF Description of [](https://cve.mitre.org/cgi-bin/cvename.cgi?name=) CWE-468 Example 1


### BF Taxonomy

<map name="image-map">
	<area target="" alt="The entire operation implementation or a part of its specification is absent." title="The entire operation implementation or a part of its specification is absent." href="" coords="271,121,27,87" shape="rect"/>
	<area target="" alt="Check data semantics (proper value/meaning) in order to accept (and possibly correct) or reject it." title="Check data semantics (proper value/meaning) in order to accept (and possibly correct) or reject it." href="" coords="346,121,510,88" shape="rect"/>
</map>

<table>
<tr>
<td rowspan="0" style="width:40%">
<img src="../../../../BF/images/BFCVE Examples/(simple)-0.png" usemap="#image-map="/>
</td>
<td>
xxx BF textual description xxx 
</td>
</tr>
<tr>
<td rowspan="0" class="text-center">
<div id="carouselControls" class="carousel slide" data-interval="false">
<div class="carousel-inner">

<div class="carousel-item">
				
<img src="../../../../BF/images/BFCVE Examples/-1.png" alt="..." usemap="#image-map="/>
</div>
		
<div class="carousel-item">
				
<img src="../../../../BF/images/BFCVE Examples/-2.png" alt="..." usemap="#image-map="/>
</div>
		
<div class="carousel-item">
				
<img src="../../../../BF/images/BFCVE Examples/-3.png" alt="..." usemap="#image-map="/>
</div>
		
<div class="carousel-item">
				
<img src="../../../../BF/images/BFCVE Examples/-4.png" alt="..." usemap="#image-map="/>
</div>
		
<div class="carousel-item active">
				
<img src="../../../../BF/images/BFCVE Examples/-5.png" alt="..." usemap="#image-map="/>
</div>
		
</div>
</div>
</td>
</tr>
</table>

<table>
<tr>
<td>
	<button class="btn btn-primary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTable" aria-expanded="false" aria-controls="collapseTable">Show/Hide Definitions</button>
</td>
<td class="text-center">Vendor: Product: XXXXXX</td><td>

[Source Code](https://bugs.wireshark.org/bugzilla/show_bug.cgi?id=8916)</td><td>
[Diff Fix](https://gitlab.com/wireshark/wireshark/-/tree/master)</td><td>
[NVD Entry](https://nvd.nist.gov/vuln/detail/CVE-2013-4390)</td><td>
[SARD Entry](https://samate.nist.gov/SARD/test-cases/231364)</td>
</tr>
</table>

{{< rawhtml >}}
<div class="collapse" id="collapseTable">
<div class="card card-body">
<table">
<tr>
			<td><strong>Classes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>TCV</td>
	<td>Data are converted or coerced into other type improperly.</td>
	</tr>
	<tr>
			<td>NRS</td>
	<td>The name of an object, a function, or a type is resolved improperly or bound to an improper type or implementation.</td>
	</tr>
	<tr>
			<td>TCM</td>
	<td>An arithmetic expression (over numbers, strings, or pointers) is calculated improperly, or a boolean condition is evaluated improperly.</td>
	</tr>
	<tr>
			<td>MAD</td>
	<td>The pointer to an object is initialized, repositioned, or reassigned to an improper memory address.</td>
	</tr>
	<tr>
			<td>MUS</td>
	<td>An object is initialized, read, written, or cleared improperly.</td>
	</tr>
	<tr>
			<td><strong>Operations</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Cast</td>
	<td>Explicitly convert the value of an object to another data type.</td>
	</tr>
	<tr>
			<td>Call</td>
	<td>Invoke a function implementation. The Type System binds a function implementation to the resolved function name. A polymorphic function implementation is first resolved and then bound.</td>
	</tr>
	<tr>
			<td>Calculate</td>
	<td>Find the result of a numeric, pointer, or string operation.</td>
	</tr>
	<tr>
			<td>Reposition</td>
	<td>Change the pointer to another position inside its object.</td>
	</tr>
	<tr>
			<td>Read</td>
	<td>Use the value of an object data.</td>
	</tr>
	<tr>
			<td><strong>Causes/Consequences</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Code Defect Bug</td>
	<td>A bug is in the operation. It is the first cause for the chain of weaknesses underlying a software security vulnerability. It must be fixed to resolve the vulnerability.</td>
	</tr>
	<tr>
			<td>   Wrong Code</td>
	<td>An inappropriate data type is specified; or an inappropriate function/operator is used.</td>
	</tr>
	<tr>
			<td>Type </td>
	<td>The set or range of allowed values is wrong or the operations allowed on them are wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Type</td>
	<td>A data type range or structure is not correct.</td>
	</tr>
	<tr>
			<td>   Wrong Argument Type</td>
	<td>An argument to an overloaded function is of incorrect data type.</td>
	</tr>
	<tr>
			<td>Name </td>
	<td>The resolved name is wrong.</td>
	</tr>
	<tr>
			<td>   Wrong Overloaded Function Bound</td>
	<td>Wrong overloaded implementation is bound due to wrong function arguments.</td>
	</tr>
	<tr>
			<td>Data Error/Fault</td>
	<td>Has harmed semantics or inconsistent or wrong value</td>
	</tr>
	<tr>
			<td>   Wrong Result</td>
	<td>Incorrect value from type conversion or computation.</td>
	</tr>
	<tr>
			<td>   Wrong Index</td>
	<td>Incorrect position.</td>
	</tr>
	<tr>
			<td>Address Error/Fault</td>
	<td>The used object address is wrong.</td>
	</tr>
	<tr>
			<td>   Over Bounds Pointer</td>
	<td>Points above the upper boundary of its object.</td>
	</tr>
	<tr>
			<td>Memory Corruption/Disclosure Final Error</td>
	<td>An undefined or exploitable system behavior caused by memory allocation, use, and deallocation bugs.</td>
	</tr>
	<tr>
			<td>   Buffer Overflow</td>
	<td>Writes above the upper bound of an object -- aka Buffer Over-Write.</td>
	</tr>
	<tr>
			<td><strong>Operation Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Mechanism</td>
	<td>Shows how the buggy/faulty operation code is performed.</td>
	</tr>
	<tr>
			<td>   Pass In</td>
	<td>Supplying "in" arguments' data values to a function/ operator.</td>
	</tr>
	<tr>
			<td>   Ad-hoc Bind</td>
	<td>Resolve overloaded function via signature and set implementation.</td>
	</tr>
	<tr>
			<td>   Operator</td>
	<td>A function with a symbolic name that implements a mathematical, relational or logical operation.</td>
	</tr>
	<tr>
			<td>   Direct</td>
	<td>The operation is performed over a particular object element.</td>
	</tr>
	<tr>
			<td>Source Code</td>
	<td>Shows where the buggy/faulty operation code is in the program -- in what kind of software.</td>
	</tr>
	<tr>
			<td>   Codebase</td>
	<td>The operation is in the programmer's code - in the application itself.</td>
	</tr>
	<tr>
			<td>Execution Space</td>
	<td>Shows where the buggy/faulty operation code is running or with what privilege level).</td>
	</tr>
	<tr>
			<td>   Local</td>
	<td>The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
	</tr>
	<tr>
			<td>   Userland</td>
	<td>The bugged code runs in an environment with privilege levels, but in unprivileged mode (e.g., ring 3 in x86 architecture).</td>
	</tr>
	<tr>
			<td><strong>Operand Attributes</strong></td>
	<td><strong>Definition</strong></td>
	</tr>
	<tr>
			<td>Data Kind</td>
	<td>Shows what the data value is.</td>
	</tr>
	<tr>
			<td>   Pointer</td>
	<td>A holder of the memory address of an object.</td>
	</tr>
	<tr>
			<td>Type Kind</td>
	<td>Shows what the data type composition is.</td>
	</tr>
	<tr>
			<td>   Primitive</td>
	<td>A scalar data type that mimics the hardware units - e.g., int (long, short, signed), float, double, string, Boolean. A primitive data type is only language defined and is not built from other data types.</td>
	</tr>
	<tr>
			<td>Name Kind</td>
	<td>Shows what the named entity is.</td>
	</tr>
	<tr>
			<td>   Object</td>
	<td>A memory region used to store data.</td>
	</tr>
	<tr>
			<td>Address State</td>
	<td>Shows where the allocated memory is.</td>
	</tr>
	<tr>
			<td>   Stack</td>
	<td>The object is a non-static local variable (defined in a function, a passed parameter, or a function return address).</td>
	</tr>
	<tr>
			<td>Size Kind</td>
	<td>Shows what the limit for iteration over object's elements is.</td>
	</tr>
	<tr>
			<td>   Actual</td>
	<td>The real size of an object.</td>
	</tr>
	<tr>
			<td>Address Kind</td>
	<td>Shows what the accessed outside object's bounds memory is.</td>
	</tr>
	<tr>
			<td>   Litle</td>
	<td></td>
	</tr>
	
</table>
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
{{< /rawhtml >}}
	