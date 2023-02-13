---
weight: 4
title: "MAL"
---
# Memory Allocation Bugs (MAL) Class

### Definition

We define Memory Allocation Bugs (MAL) as follows:

{{< definition >}}An object is allocated, extended, or reallocated (while extending) improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts MAL causes, attributes and consequences.

{{< img src="images/MAL.png" height="530" caption="Fig 1. Memory Allocation Bugs (MAL) Class" >}}

### Operations

The MAL operations are: Allocate, Extend, and Reallocate–Extend. They reflect improper formation of an object.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Allocate</td>
            <td>Reserves space in memory for an object; defines its initial boundaries and size.</td>
          </tr>
          <tr>
            <td>Extend</td>
            <td>Allocates additional memory for an object in the same space; redefines its boundaries and size.</td>
          </tr>
          <tr>
            <td>Reallocate–Extend</td>
            <td>
              Allocates a new larger piece of memory for an object at a new address, copies the object content there,
              reassigns its pointer, and deallocates the previous piece of memory.</td>
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
          <tr>
            <td>Single Owner of Object</td>
            <td>The only pointer of an already allocated object is used to allocate a new object.</td>
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

        </table>
{{< /rawhtml >}}

### Consequences

The graph of consequences shows _Improper Pointer for Next Operation_, _Improper object for Next Operation_, and _Memory Error_ as consequences.

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
            <td>Memory Overflow</td>
            <td>More memory requested than available.</td>
          </tr>
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

The attributes of MAL are:

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

MAL sites are any allocation routine (e.g., `malloc()`) or the `new` operator, any declaration of a variable with implicit allocation, any OOP constructor, or any extension routine (e.g., `realloc()`) or adding elements to a container object.

### Application

Application examples can be found here: [CVE-2021-21834](/Examples/CVE-2021-21834.md). 