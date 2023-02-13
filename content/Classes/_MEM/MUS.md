---
weight: 5
title: "MUS"
---
# Memory Use Bugs (MUS) CLass

### Definition

We define Memory Use Bugs (MUS) as follows:

{{< definition >}}An object is initialized, read. written, or cleared, improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts MUS causes, attributes and consequences.

{{< img src="images/MUS.png" height="600" caption="Fig 1. Memory Use Bugs (MUS) Class" >}}

### Operations

The MUS operations are: Initialize (Object), Dereference, Read, Write, Clear. They reflect improper use of an object.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Initialize (object)</td>
            <td>The first write into an object, after it is allocated.</td>
          </tr>
          <tr>
            <td>Read</td>
            <td>Gets content from an object.</td>
          </tr>
          <tr>
            <td>Write</td>
            <td>Puts content into an object.</td>
          </tr>
          <tr>
            <td>Clear</td>
            <td>The very last write into an object, before it is deallocated.</td>
          </tr>
          <tr>
            <td>Dereference</td>
            <td>Overreaches Initialize, Read, Write, and Clear, focus is on object access, no matter if it’s for reading
              or for writing.</td>
          </tr>

        </table>
{{< /rawhtml >}}

### Causes

The graph of causes shows that there are three main causes for memory allocation bugs: Improper Operation, Improper Pointer, and Improper Object.

{{< rawhtml >}}
<table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Operation</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Missing</td>
            <td>The operation is absent.</td>
          </tr>
          <tr>
            <td>Mismatched</td>
            <td>The deallocation function does not match the allocation function used for the same object.</td>
          </tr>
          <tr>
            <td>Erroneous</td>
            <td>There is a bug in the implementation of the operation.</td>
          </tr>

        </table>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Pointer</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>NULL Pointer</td>
            <td>Points to the zero address, a specific invalid address.</td>
          </tr>
          <tr>
            <td>Wild Pointer</td>
            <td>Points to an arbitrary address, because it has not been initialized or an erroneous allocation routine
              is used.</td>
          </tr>
          <tr>
            <td>Dangling Pointer</td>
            <td>Still points to the address of its successfully deallo- cated object.</td>
          </tr>
          <tr>
            <td>Over Bounds</td>
            <td>Points over the bounds of its object.</td>
          </tr>
          <tr>
            <td>Under Bounds</td>
            <td>Points under the bounds of its object.</td>
          </tr>
          <tr>
            <td>Untrusted Pointer</td>
            <td>The pointer is modified to an improperly checked address.</td>
          </tr>
          <tr>
            <td>Wrong Position</td>
            <td>Points to a miscalculated position inside object bounds.</td>
          </tr>
          <tr>
            <td>Casted Pointer</td>
            <td>The pointer does not match the type of the object, due to wrong type casting.</td>
          </tr>
          <tr>
            <td>Forbidden Address</td>
            <td>The pointer points to an OS protected or non-existing address.</td>
          </tr>

        </table>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Object</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Not Enough Allocated</td>
            <td>The allocated memory is too little for the data it should store.</td>
          </tr>

        </table>
{{< /rawhtml >}}

### Consequences

The graph of consequences shows _Memory Error_ as a consequence.

{{< rawhtml >}}
<table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Memory Error</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Uninitialized Object</td>
            <td>Object data is not filled in before use.</td>
          </tr>
          <tr>
            <td>Not Cleared Object</td>
            <td>Object data not overwritten before deallocation.</td>
          </tr>
          <tr>
            <td>NULL Pointer Dereference</td>
            <td>Attempt to access an object for read or write through a NULL pointer.</td>
          </tr>
          <tr>
            <td>Untrusted Pointer Dereference</td>
            <td>Attempt to access an object via an altered pointer (not legitimate derefer- ence of tainted pointers).
            </td>
          </tr>

          <tr>
            <td>Object Corruption</td>
            <td>Object data is unintentionally altered.</td>
          </tr>
          <tr>
            <td>Type Confusion</td>
            <td>Pointer and object have different types.</td>
          </tr>
          <tr>
            <td>Use After Free</td>
            <td>Attempt to use a deallocated object.</td>
          </tr>
          <tr>
            <td>Buffer Overflow</td>
            <td>Read or write above the object upper bound.</td>
          </tr>
          <tr>
            <td>Buffer Underflow</td>
            <td>Read or write below the object lower bounds.</td>
          </tr>
          <tr>
            <td>Unitialized Pointer Derefereance</td>
            <td>An attempt to access an object for read or write via an uninitialized pointer.</td>
          </tr>


        </table>
{{< /rawhtml >}}

### Attributes

The attributes of MUS are:

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td rowspan="2" style="vertical-align: middle;">Mechanism</td>
            <td>Direct</td>
            <td>The operation is performed over a particular object element.</td>
          </tr>
          <tr>
            <td>Sequential</td>
            <td>The operation is performed after iterating over the object elements.</td>
          </tr>
          <tr>
            <td rowspan="4" style="vertical-align: middle;">Source Code</td>
            <td>Codebase</td>
            <td>The operation is in programmer’s code – in the application itself.</td>
          </tr>
          <tr>
            <td>Third Party</td>
            <td>The operation is in a third party library.</td>
          </tr>
          <tr>
            <td>Standard Library</td>
            <td>The operation is in the standard library for a particular programming language.</td>
          </tr>
          <tr>
            <td>Language Processor</td>
            <td>The operation is in the tool that allows execution or creates executable (compiler, assembler,
              interpreter).</td>
          </tr>
          <tr>
            <td rowspan="3" style="vertical-align: middle;">Execution Space</td>
            <td>Userland</td>
            <td>The bugged code runs in an environment with privilege levels, but in unprivileged mode (e.g., ring 3 in
              x86 architecture).</td>
          </tr>
          <tr>
            <td>Kernel</td>
            <td>The bugged code runs in an environment with privilege levels with access privileged instruc- tions
              (e.g., ring 0 in x86 architecture).</td>
          </tr>
          <tr>
            <td>Bare-Metal</td>
            <td>The bugged code runs in an environment with-out privilege control. Usually, the program is the only
              software running and has total access to the hardware.</td>
          </tr>
          <tr>
            <td rowspan="3" style="vertical-align: middle;">Span</td>
            <td>Little</td>
            <td>A few bytes of memory are accessed.</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>Several bytes of memory are accessed, but less than 1 KB.</td>
          </tr>
          <tr>
            <td>Huge</td>
            <td>More than 1 KB of memory is accessed.</td>
          </tr>

          <tr>
            <td rowspan="2" style="vertical-align: middle;">Location</td>
            <td>Stack</td>
            <td>The object is a non-static local variable (defined in a function, a passed parameters, or a function
              return address).</td>
          </tr>
          <tr>
            <td>Heap</td>
            <td>The object is a dynamically allocated data structure (e.g., via malloc() and new).</td>
          </tr>

        </table>
{{< /rawhtml >}}

### Sites

MUS sites are any dereference operators in the source code (`*`, `[]`, `->`, `.`).

### Application

Application examples can be found here: [CVE-2014-0160](/Examples/CVE-2014-0160), [CVE-2018-20991](/Examples/CVE-2018-20991). 