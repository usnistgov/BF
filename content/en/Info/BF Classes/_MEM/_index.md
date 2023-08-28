---
weight: 3
bookCollapseSection: true
title: "_MEM"
---
# BF Memory Corruption/Disclosure (_MEM) Class Type <br/> _`Irena Bojanova, PI and Lead, Bugs Framework (BF)`_

Each memory related bug or weakness involves one memory operation. Each _operation_ is over a region of memory or over the address needed to reach it. That memory is used for storing data and has an important property: it is finite. It has _boundaries_ and it has _size_. We call this piece of memory, with a well-defined size, an _object_. It is used to store a primitive data or a data structure. The memory address should be held by at least one _pointer_ or determined as an offset on the stack, otherwise the object will be unreachable. The object and the pointer are the operands of the memory operation.

Memory bugs could be introduced at any of the phases of an object’s lifecycle: _address formation_, _allocation_, _use_, and _deallocation_. The [BF Memory Bugs Model](/Info/BF%20Classes/_MEM/Model) helps identify where in these phases bugs could occur: 

The phases correspond to the BF memory bugs classes: [Memory Addressing Bugs (MAD)](/Info/BF%20Classes/_MEM/MAD), [Memory Management Bugs (MMN)](/Info/BF%20Classes/_MEM/MMN) -- covers both the Memory Allocation (MAL) and the Memory Deallocation (MDL phases), and [Memory Use Bugs (MUS)](/Info/BF%20Classes/_MEM/MUS).

For navigation to the _MEM model and classes use the BF>_MEM menu on the left.