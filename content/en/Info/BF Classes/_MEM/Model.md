---
weight: 1
title: "Bugs Model"
---
# BF Memory Corruption/Disclosure Bugs Model <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

Each memory related bug or weakness involves one memory operation. Each _operation_ is over a region of memory or over the address needed to reach it. That memory is used for storing data and has an important property: it is finite. It has _boundaries_ and it has _size_. We call this piece of memory, with a well-defined size, an _object_. It is used to store a primitive data or a data structure. The memory address should be held by at least one _pointer_ or determined as an offset on the stack, otherwise the object will be unreachable. The object and the pointer are the operands of the memory operation.

Memory bugs could be introduced at any of the phases of an object’s lifecycle: _address formation_, _allocation_, _use_, and _deallocation_. The phases correspond to the BF memory bugs classes: Memory Addressing Bugs (MAD), Memory Management Bugs (MMN) -- cover both the Memory Allocation (MAL) and the Memory Deallocation (MDL phases), and Memory Use Bugs (MUS). 

The BF Memory Bugs Model helps identify where in these phases bugs could occur (Figure 1). The phases correspond to the BF memory bugs classes: Memory Addressing Bugs (MAD), Memory Allocation Bugs (MAL), Memory Use Bugs (MUS), and , Memory Deallocation Bugs (MDL). All possible memory operations are grouped by phase. The presented operations flow helps in identifying possible chains of bugs/weaknesses. <br/><br/>_`For simplicity, BF combines MAL and MDL in one Memory Management Bugs (MMN) class.`_ 
<br/><br/>

{{< img src="images/BF Models/_MEM.svg" caption="Figure 1. BF Memory Corruption/Disclosure Bugs Model. Comprises the MAD, MAL, MUS, and MDL phases, corresponding to the BF classes MAD, MMN (combining the MAL and MDL phases), and MUS. Shows the memory operations flow: blue arrows – the main flow; green arrows – flow for allocation at a specific address; red – extra flow in case of reallocation. (Note that for simplicity, BF combines MAL and MDL in one Memory Management Bugs (MMN) class)" >}}
<br/>
The operations under MAD (Figure 1) are on forming or modifying a pointer: _Initialize_, _Reposition_, and _Reassign_. Bugs in pointer initialization could result in pointers to meaningless objects. Moving a pointer via a bugged Reposition could get it pointing outside the object bounds. Bugs in Reassign could connect a pointer to a wrong object.

The operations under MUS are on reading or writing the content of an object through one of its pointers: _Initialize_, _Read_, _Write_, _Clear_, and _Dereference_. Bugs in object initial- ization could lead to use of random or malicious data. Bugs in write could alter data wrongly. Bugs in Clear could leak confidential information such as passwords and cryptographic private keys. Bugs in Dereference are practically unsuccessful reading or unsuccessful writing.

The operations under MMN are on creating an object or extending it through one of its pointers: Allocate, Extend, and Reallocate–Extend, and operations on destroying or reducing an object through one of its pointer: Deallocate, Reduce, and Reallocate–Reduce. The MMN operations affect the boundaries and the size of the object. Bugs in Reallocate may concern multiple pointers to the same object. Allocation in excess or failure to deallocate unused objects could exhaust memory. Excessive reduction of allocated memory could lead to an object that is too little for the data it needs to store.

The possible flow between operations from different phases is depicted on Figure 1 with colored arrows: blue is for the main flow; green is for allocation requested at a specific address; red is for the extra flow in case of reallocation.

Following the blue arrows, the very first operation is MAL Allocate an object. Following the green arrows, the first operation is MAD Initialize Pointer. Next operation, following the blue arrows, should be MAD Initialize the Pointer to the address returned by Allocate. While, following the green arrows, next operation should be MAL Allocate an object at the address the pointer holds.

After an object is allocated and its pointer is initialized, it can be used via MUS Read or MUS Write. The boundaries and the size of an object are set at allocation, then they can be changed by any MMN operation.

If an object is owned by more than one pointer, MMN Reallocate should be followed by MAD Reposition over all these owners. A MMN Deallocate an object operation should properly be followed by MAD Reassign of all its pointers to either `NULL` or another object.