---
weight: 6
title: "MDL"
---
# Memory Deallocation Bugs (MDL) Class

### Definition

We define Memory Deallocation Bugs (MDL) as follows:

{{< definition >}}An object is dealocated, reduced, or reallocated (while reducing) improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts MDL causes, attributes and consequences.

{{< img src="images/MUS.png" height="530" caption="Fig 1. Memory Deallocation Bugs (MDL) Class" >}}

### Operations

The MDL operations are: Deallocate, Reduce, Reallocate–Reduce. They reflect improper release of an object.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Deallocate</td>
            <td>Releases the allocated memory of an object.</td>
          </tr>
          <tr>
            <td>Reduce</td>
            <td>Deallocates part of the object memory; redefines its bound- aries and size.</td>
          </tr>
          <tr>
            <td>Reallocate–Reduce</td>
            <td>Allocates a new smaller space in memory for an object at a new address, copies part of the object
              content there, reassigns the pointer, and deallocates the previous piece of memory.</td>
          </tr>

        </table>
{{< /rawhtml >}}

### Causes

The graph of causes shows that there are three main causes for Memory Deallocation bugs: Improper Operation, Improper Pointer, and Improper Object.

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
            <td>Wild Pointer</td>
            <td>Points to an arbitrary address, because it has not been initialized or an erroneous allocation routine
              is used.</td>
          </tr>
          <tr>
            <td>Dangling Pointer</td>
            <td>Still points to the address of its successfully deallo- cated object.</td>
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

The graph of consequences shows _Improper Pointer for Next Operation_, _Improper object for Next Operation_, and _Memory Error_.

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


        </table>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Object for Next Operation</th>
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
            <td>Memory Leak</td>
            <td>An object has no pointer pointing to it.</td>
          </tr>
          <tr>
            <td>Double Free</td>
            <td>Attempt to deallocate a deallocated object or via an uninitialized pointer.</td>
          </tr>
          <tr>
            <td>Object Corruption</td>
            <td>Object data is unintentionally altered.</td>
          </tr>


        </table>
{{< /rawhtml >}}

### Attributes

The attributes of MDL are:

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
            <td>Implicit</td>
            <td>The operation is performed without a function call.</td>
          </tr>
          <tr>
            <td>Explicit</td>
            <td>The operation is performed by a function/ method) call.</td>
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
            <td rowspan="3" style="vertical-align: middle;">Ownership</td>
            <td>None</td>
            <td>The object has no owner.</td>
          </tr>
          <tr>
            <td>Single</td>
            <td>The object has one owner.</td>
          </tr>
          <tr>
            <td>Shared</td>
            <td>The object has more than one owner.</td>
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

MDL sites are any deallocation routine (e.g., `free()`) or the `del` operator, any end of scope for implicit allocated variables, any OOP destructor, or any reduction routine (e.g., `realloc()`) or removing elements from a container object.

<!--### Application

Application examples are provided [here](/Examples/_MEM/MAL.md).-->