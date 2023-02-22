---
weight: 2
title: "Validation"
---
# Validation

BF Memory Bugs taxonomy can be used by bug reporting tools, as it is a structured extension over memory-related CWEs. All Memory Error consequences from the BF classes relate to one or more CWEs.

We have generated a digraph (Fig. 1) of all memory-related CWEs to show how they correspond to the possible BF Memory Error consequences. An edge starts at a child CWE and ends at a parent CWE. The outline of a CWE node indicates the CWE abstraction level: dashed triple line is for variant, double line is for base, single line is for class, and thick red line is for pillar. Bug reporting tools would use base or variant CWEs, but they may also use higher abstraction level CWEs if there is not enough specific information about the bug or if there is no related base CWE.

The digraph helped us identify four clusters of memory- related CWEs. All these CWEs can be tracked as children of the pillar CWE-664, with the only exception of CWE-476 (NULL Pointer Dereference). The largest cluster comprises the children of CWE-119, which are weaknesses associated with reading and writing outside the boundaries of an object. The second-largest cluster comprises the children of CWE- 400 and CWE-665, which are mainly weaknesses related to memory allocation and object initialization. The children of CWE-404, which are weaknesses associated with improper memory release, form the third cluster. The smallest cluster comprises CWE-704, CWE-588 and CWE-843, which are memory use or deallocation weaknesses due to the mismatch between pointer and object types.

The color of a CWE node (Fig. 1) indicates the BF memory class associated with that CWE. A BF class is associated with a CWE if the BF class has a Memory Error consequence covered by the CWE description. CWEs related to the BF MUS memory errors are presented in blue, CWEs related only to MAL are presented in pink, and CWEs related to both MAL and MDL are presented in green.

Most of the BF MUS Memory Error consequences relate to CWEs from the first cluster. The Memory Error consequences from BF MAL and BF MDL relate to CWEs across clusters. Note that the BF MAD class has no Memory Error consequences, so it does not directly relate to any CWE.

The BF Memory Bugs model reflects the lifecycle of an object. The pillar CWE-664 also reflects the “lifetime of creation, use, and release” of a resource. However, it is quite broad; it is the parent of many CWEs that are not strictly memory-related. We use asterisks (*) to denote CWEs that are about any resource. CWE-704 is not a memory-related CWE, but is visualized on the digraph to show all the child-parent relationships.

The clusters of memory CWEs do not strictly correspond to the phases of address formation, allocation, use, and deallocation. CWEs related to a phase appear in more than one cluster. In addition, CWE-118 and CWE-119 are strictly about memory but cover more than one phase.

Viewed as a structured extension, the BF Memory Bugs classes relate to CWEs through particular Memory Error consequences. For BF MAL: Memory Overflow – relates to CWEs: 400*, 770*, and 789; Memory Leak – to CWEs: 401, 404*, and 771*; Double Free – to CWE-415; Object Corruption – to CWEs: 404*, 590, 761, 762, and 763.

For BF MUS: Uninitialized Object – relates to CWEs: 457, 456, CWE-665*, 908*, and 909*; Not Cleared Object – to CWEs: 226*, 244, and 459*; NULL Pointer Dereference – to CWE-476; Untrusted Pointer Dereference – to CWEs: 119 and 822; Type Confusion – to CWEs: 588 and 843*; Use After Free – to CWEs: 119,416, and 825; Buffer Overflow – to CWEs: 118, 119, 120, 121, 122, 123, 125, 126, 466, 805, 806, 787, and 788; Buffer Underflow – to CWEs: 118, 119, 122, 123, 124, 125, 127, 466, 786, 787, 805, and 806; Unitialized Pointer Dereference – to CWEs: 119 and 824. There are no related CWEs to BF MUS Object Corruption.

For BF MDL: Memory Leak – relates to CWEs: 401, 404*, and 771*; Double free – to CWE-415; Object Corruption – to CWEs: 404*, 761, 762, and 763.

{{< svg src="images/memorycwes.svg" height="700" caption="Fig 1. A digraph of all memory related CWEs. Dashed triple line – variant, double line – base, single line – class, and thick red line – pillar. BF class correspondence: pink is only for MAL, green is for both MDL and MAL, and blue is for MUS." >}}
