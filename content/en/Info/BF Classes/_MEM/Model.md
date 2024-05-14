---
weight: 1
title: "Model"
---
# BF Memory (\_MEM) Bugs Model <br/>_`Irena Bojanova, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

Each memory related bug or weakness involves one memory operation. Each _operation_ is over a region of memory or over the address needed to reach it. That memory is used for storing data and has an important property: it is finite. It has _boundaries_ and it has _size_. This piece of memory, with a well-defined size is called an _object_; It is of a primitive data type or a data structure. The memory address should be held by at least one _pointer_ or determined as an offset on the stack, otherwise the object will be unreachable. The operands to a memory operation are the object and the pointer, which as properties of the object are: data (value), data type, address, and size.  

Memory bugs could be introduced at any of the phases of an object’s lifecycle: _address formation_, _allocation_, _use_, and _deallocation_. The phases correspond to the BF memory bugs classes: Memory Addressing Bugs (MAD), Memory Management Bugs (MMN) -- cover both the Memory Allocation (MAL) and the Memory Deallocation (MDL phases), and Memory Use Bugs (MUS). 

The BF Memory Bugs Model helps identify where in these phases bugs could occur (Figure 1). The phases correspond to the BF memory bugs classes: Memory Addressing Bugs (MAD), Memory Allocation Bugs (MAL), Memory Use Bugs (MUS), and , Memory Deallocation Bugs (MDL). All possible memory operations are grouped by phase. The presented operations flow helps in identifying possible chains of bugs/weaknesses. <br/><br/>_`For simplicity, BF now combines MAL and MDL in one Memory Management Bugs (MMN) class.`_ 
<br/><br/>

{{< img src="images/BF Models/_MEM Model.svg" caption="Figure 1. BF Memory Bugs Model. Comprises the MAD, MAL, MUS, and MDL phases, corresponding to the BF classes MAD, MMN (combining the MAL and MDL phases), and MUS. Shows the memory operations flow: blue arrows – the main flow; green arrows – flow for allocation at a specific address; red – extra flow in case of reallocation. (Note that for simplicity, BF combines MAL and MDL in one Memory Management Bugs (MMN) class)" >}}
<br/>
The operations under MAD (Figure 1) are on forming or modifying a pointer: _Initialize_, _Reposition_, and _Reassign_. Bugs in pointer initialization could result in pointers to meaningless objects. Moving a pointer via a bugged Reposition could get it pointing outside the object bounds. Bugs in Reassign could connect a pointer to a wrong object.

The operations under MUS are on reading or writing the content of an object through one of its pointers: _Initialize_, _Read_, _Write_, _Clear_, and _Dereference_. Bugs in object initialization could lead to use of random or malicious data. Bugs in write could alter data wrongly. Bugs in Clear could leak confidential information such as passwords and cryptographic private keys. Bugs in Dereference are practically unsuccessful reading or unsuccessful writing.

The operations under MMN are on creating an object or extending it through one of its pointers: Allocate, Extend, and Reallocate–Extend (i.e., the MAL phase), and operations on destroying or reducing an object through one of its pointers: Deallocate, Reduce, and Reallocate–Reduce (i.e., the MDL phase). The MMN operations affect the boundaries and the size of the object. Bugs in Reallocate may concern multiple pointers to the same object. Allocation in excess or failure to deallocate unused objects could exhaust memory. Excessive reduction of allocated memory could lead to an object that is too small for the data it needs to store.

The possible flow between operations from different phases is depicted on Figure 1 with colored arrows: blue is for the main flow; green is for allocation at a specific address; red is for the extra flow in case of reallocation.

Following the blue arrows, the very first operation is MMN Allocate (i.e., MAL Allocate) an object. Following the green arrows, the first operation is MAD Initialize Pointer. Next operation, following the blue arrows, should be MAD Initialize the Pointer to the address returned by Allocate. While, following the green arrows, next operation should be MMN Allocate (i.e., MAL Allocate) an object at the address the pointer holds.

After an object is allocated and its pointer is initialized, it can be used via MUS Read or MUS Write. The boundaries and the size of an object are set at allocation, then they can be changed by any MMN operation.

If an object is owned by more than one pointer, MMN Reallocate (i.e., MAL Reallocate and MDL Reallocate) should be followed by MAD Reposition over all these owners. A MMN Deallocate (i.e., MDL Deallocate) an object operation should properly be followed by MAD Reassign of all its pointers to either `NULL` or another object.

## BF Memory Safety

The BF Memory (_MEM) Bugs Model addresses temporal memory safety by defining the proper flow of operations over the owner (pointer) or object along the x-axis. It also addresses spatial memory safety via the operations that affect object boundaries along the y-axis. For example, an object must be allocated before use and deallcated before its pointer is reassigned, it must not be read before it is initialized and must be cleared before it is deallocated, and it must not be used after it is deallocated. These correspond to unintialized/uncleared object, memory leaks, and use after free/return safety. The size of the object is always strictly defined, and the pointer must not exceed its boundaries. This corresponds to buffer overflow/underflow safety. 

The BF [Memory Addressing Bugs (MAD)](/BF/info/bf-classes/_mem/mad/), [Memory Management Bugs (MMN)](/BF/info/bf-classes/_mem/mmn/), and [Memory Use Bugs (MUS)](/BF/info/bf-classes/_mem/mus/) classes define the list of possible consequences when these temporal or spatial rules are not followed.
