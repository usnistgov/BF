---
weight: 1
title: "Model"
---
# BF Memory Model

Each memory related bug or weakness involves one memory operation. Each _operation_ is over a region of memory or over the address needed to reach it. That memory is used for storing data and has an important property: it is finite. It has _boundaries_ and it has _size_. We call this piece of memory, with a well-defined size, an _object_. It is used to store a primitive data or a data structure. The memory address should be held by at least one _pointer_pointer or determined as an offset on the stack, otherwise the object will be unreachable. The object and the pointer are the operands of the memory operation.

Memory bugs could be introduced at any of the phases of an object’s lifecycle: _address formation_, _allocation_, _use_, and _deallocation_. The BF Memory Bugs Model helps identify where in these phases bugs could occur (Fig. 1). The phases correspond to the BF memory bugs classes: Memory Addressing Bugs (MAD), Memory Allocation Bugs (MAL), Memory Use Bugs (MUS), and Memory Deallocation Bugs (MDL). All possible memory operations are grouped by phase. The presented operations flow helps in identifying possible chains of bugs/weaknesses.

The operations under MAD (Fig. 1) are on forming or modifying a pointer: _Initialize_, _Reposition_, and _Reassign_. Bugs in pointer initialization could result in pointers to meaningless objects. Moving a pointer via a bugged Reposition could get it pointing outside the object bounds. Bugs in Reassign could connect a pointer to a wrong object.

The operations under MUS are on reading or writing the content of an object through one of its pointers: _Initialize_, _Read_, _Write_, _Clear_, and _Dereference_. Bugs in object initial- ization could lead to use of random or malicious data. Bugs in write could alter data wrongly. Bugs in Clear could leak confidential information such as passwords and cryptographic private keys. Bugs in Dereference are practically unsuccessful reading or unsuccessful writing.

The operations under MAL are on creating an object or extending it through one of its pointers: _Allocate_, _Extend_, and _Reallocate–Extend_.The operations under MDL are on destroying or reducing an object through one of its pointer: _Deallocate_, _Reduce_, and _Reallocate–Reduce_. Both MAL and MDL operations affect the boundaries and the size of the object. Bugs in Reallocate may concern multiple pointers to the same object. Allocation in excess or failure to deallocate unused objects could exhaust memory. Excessive reduction of allocated memory could lead to an object that is too little for the data it needs to store.

The possible flow between operations from different phases is depicted on Fig. 1 with colored arrows: blue is for the main flow; green is for allocation requested at a specific address; red is for the extra flow in case of reallocation.

Following the blue arrows, the very first operation is MAL Allocate an object. Following the green arrows, the first operation is MAD Initialize a pointer. Next operation, following the blue arrows, should be MAD Initialize the pointer to the address returned by Allocate. While, following the green arrows, next operation should be MAL Allocate an object at the address the pointer holds.

After an object is allocated and its pointer is initialized, it can be used via MUS Read or MUS Write. The boundaries and the size of an object are set at allocation, then they can be changed by any MAL or MDL operation.

If an object is owned by more than one pointer, Reallocate (in MAL or MDL) should be followed by Reposition over all these owners. A Deallocate an object operation should properly be followed by Reassign of all its pointers to either `NULL` or another object.

{{< img src="images/MEM.png" height="700" caption="Fig 1. The BF Memory Bugs Model. Comprises four phases, corresponding to the BF classes MAD, MAL, MUS, and MDL. Shows the memory operations flow: blue arrows – the main flow; green arrows – flow for allocation at a specific address; red – extra flow in case of reallocation." >}}
