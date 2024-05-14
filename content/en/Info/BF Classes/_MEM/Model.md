---
weight: 1
title: "Model"
---
# BF Memory (\_MEM) Bugs Model <br/>_`Irena Bojanova, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

Each memory related bug or fault involves one memory operation. Each _operation_ is over a region of memory or over the address needed to reach it. That memory is used for storing data and has an important property: it is finite. It has _boundaries_ and it has _size_. This piece of memory, with a well-defined size is called an _object_; It is of a primitive data type or a data structure. The memory address should be held by at least one _pointer_ or determined as an offset on the stack, otherwise the object will be unreachable. The operands to a memory operation relate to the object properties: data (value), data type, address, and size.  

Memory bugs or faults could occur at any phase of an object's life cycle: _memory addressing_ (MAD), _memory allocation_ (MAL), _memory use_ (MUS), or  _memory deallocation_ (MDL). The phases determine the BF Memory Corruption/Disclosure bugs classes: Memory Addressing (MAD); Memory Management (MMN), which combines the MAL and MDL phases; and Memory Use (MUS).

The Memory (_MEM) Bugs Model (Figure 1) represents the execution phases with orthogonal sets of operations in which particular types of bugs or faults could occur. It also defines the proper flow of operations within and between closely related execution phases, which helps identify possible chains of weaknesses towards a failure and missing operations (e.i., _Missing Code_ bugs) backwards from a failure.
<br/><br/>
<br/><br/>

{{< img src="images/BF Models/_MEM Model.svg" caption="Figure 1. BF Memory Bugs Model. Comprises the MAD, MAL, MUS, and MDL phases, corresponding to the BF classes MAD, MMN (combining the MAL and MDL phases), and MUS. Shows the memory operations flow: blue arrows – the main flow; green arrows – flow for allocation at a specific address; red – extra flow in case of reallocation." >}}

_`For simplicity, BF combines the MAL and MDL execution phases in one Memory Management Bugs (MMN) class.`_ 
<br/><br/>
The operations under MAD (Figure 1) are on forming or modifying a pointer: _Initialize_, _Reposition_, and _Reassign_. Bugs in pointer initialization could result in pointers to meaningless objects. Moving a pointer via a bugged Reposition could get it pointing outside the object bounds. Bugs in Reassign could connect a pointer to a wrong object.

The operations under MUS are on reading or writing the content of an object through one of its pointers: _Initialize_, _Read_, _Write_, _Clear_, and _Dereference_. Bugs in object initialization could lead to use of random or malicious data. Bugs in write could alter data wrongly. Bugs in Clear could leak confidential information such as passwords and cryptographic private keys. Bugs in Dereference are practically unsuccessful reading or unsuccessful writing.

The operations under MMN are on creating an object or extending it through one of its pointers: Allocate, Extend, and Reallocate–Extend (i.e., the MAL phase), and operations on destroying or reducing an object through one of its pointers: Deallocate, Reduce, and Reallocate–Reduce (i.e., the MDL phase). The MMN operations affect the boundaries and the size of the object. Bugs in Reallocate may concern multiple pointers to the same object. Allocation in excess or failure to deallocate unused objects could exhaust memory. Excessive reduction of allocated memory could lead to an object that is too small for the data it needs to store.

The proper flow between operations from different phases is depicted on Figure 1 with colored arrows: blue is for the main flow; green is for allocation at a specific address; red is for the extra flow in case of reallocation.

Following the blue arrows, the very first operation is MMN Allocate (i.e., MAL Allocate) an object. Following the green arrows, the first operation is MAD Initialize Pointer. Next operation, following the blue arrows, should be MAD Initialize the Pointer to the address returned by Allocate. While, following the green arrows, next operation should be MMN Allocate (i.e., MAL Allocate) an object at the address the pointer holds.

After an object is allocated and its pointer is initialized, it can be used via MUS Read or MUS Write. The boundaries and the size of an object are set at allocation, then they can be changed by any MMN operation.

If an object is owned by more than one pointer, MMN Reallocate (i.e., MAL Reallocate and MDL Reallocate) should be followed by MAD Reposition over all these owners. A MMN Deallocate (i.e., MDL Deallocate) an object operation should properly be followed by MAD Reassign of all its pointers to either `NULL` or another object.

## BF Memory Safety

The BF Memory (_MEM) Bugs Model addresses temporal memory safety by defining the proper flow of operations over the owner (pointer) or the object along the x-axis. It also addresses spatial memory safety via the operations that affect object boundaries along the y-axis. 

The BF Memory Bugs Model captures temporal memory safety by defining the proper flow of operations over the owner (pointer) or the object along the x-axis. It also captures spatial memory safety via the operations that affect object boundaries along the y-axis. 

For example, a pointer must be initialized before it is used, repositioned after reallocation of its object, and reassigned after deallocation of its object. These correspond to Wild Pointer and  Dangling Pointer.

An object must be allocated before use and deallocated before its pointer is reassigned, it must not be read before it is initialized and must be cleared before it is deallocated, and it must not be used after it is deallocated. These correspond to uninitialized/uncleared object, memory leaks, and use after free/return safety. 

The size of the object is always strictly defined, and the pointer must not exceed its boundaries. This corresponds to buffer overflow/underflow safety. 

The BF [Memory Addressing Bugs (MAD)](/BF/info/bf-classes/_mem/mad/), [Memory Management Bugs (MMN)](/BF/info/bf-classes/_mem/mmn/), and [Memory Use Bugs (MUS)](/BF/info/bf-classes/_mem/mus/) classes define the sets of all possible causes (bugs and faults) and consequences (errors and final errors).
