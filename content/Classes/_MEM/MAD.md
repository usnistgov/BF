---
weight: 3
title: "MAD"
---
# Memory Addressing Bugs (MAD) Class

### Definition

We define Memory Addressing Bugs (MAD) as follows:

{{< definition >}}The pointer to an object is initialized, repositioned, or reassigned to an improper memory address.{{< /definition >}}

### Taxonomy

Fig. 1 depicts MAD causes, attributes and consequences.

{{< img src="images/MAD.png" height="470" caption="Fig 1. Memory Addressing Bugs (MAD) Class" >}}

### Operations

The MAD operations are: Initialize (Pointer), Reassign, Reposition. They reflect improper formation of an address.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Initialize (pointer)</td>
            <td>The first assign of an object address to a pointer; positions the pointer at the start of the object.
            </td>
          </tr>
          <tr>
            <td>Reposition</td>
            <td>Changes the pointer to another position inside its object.</td>
          </tr>
          <tr>
            <td>Reassign</td>
            <td>
              Changes the pointer to a different object.</td>
          </tr>

        </table>
{{< /rawhtml >}}

### Causes

The graph of causes shows that there are three main causes for memory addressing bugs: Improper Operation, Improper Pointer, and Improper Object.

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
            <td>Hardcoded Address</td>
            <td>The pointer points a wrong specific address.</td>
          </tr>
          <tr>
            <td>Casted Pointer</td>
            <td>The pointer does not match the type of the object, due to wrong type casting.</td>
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
            <td>Wrong Size Used</td>
            <td>The value used as size does not match the real size of the object.</td>
          </tr>
          <tr>
            <td>Not Enough Allocated</td>
            <td>The allocated memory is too little for the data it should store.</td>
          </tr>

        </table>
{{< /rawhtml >}}

### Consequences

The graph of consequences shows _Improper Pointer for Next Operation_ as a consequence which means a MAD bug is always followed by another memory bug (such as [MAL](/Classes/_MEM/MAL.md), [MUS](/Classes/_MEM/MUS.md), [MDL](/Classes/_MEM/MDL.md))

{{< rawhtml >}}
<table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Pointer for Next Operation</th>
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
{{< /rawhtml >}}

### Attributes

The attributes of MAD are:

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

MAD sites are any changes to an owner via assignment (`=`) or repositioning via an index (`[]`) or pointer arithmetics (e.g., `p++` and `p--`).

### Application

Application examples can be found here: [CVE-2014-0160](/Examples/CVE-2014-0160). 