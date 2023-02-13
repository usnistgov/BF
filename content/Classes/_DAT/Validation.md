---
weight: 2
title: "Validation"
---
# Validation

In this section, we analyze the correspondence of the data type related CWEs, such as _Numeric Errors_ , _Type Errors_, and _String Errors_, to the four newly developed BF Data Type Bugs classes. We show that DCL, NRS, TCV, and TCM cover all data type related CWEs, and potentially beyond, while providing a better structured way for describing these kinds of bugs/weaknesses.

We identified data type related CWEs in three steps: 1) _CWE Filtering_: Since different types of bugs/weaknesses are described in CWE, we filtered a set of CWEs which de- scriptions contain keywords such as ”type”, ”string”, ”class”, ”cast”, and ”compare”. 2) _Automated Extraction_: Starting from the filtered CWEs and following their parent-child relationships, we extracted all the clusters of potentially data type related CWEs. 3) _Manual Review_: All the authors, who are a team of professional security researchers, performed iterative rounds of manual CWE reviews, identifying the type related CWEs among the extracted CWE clusters. Finally, we could collect 84 CWEs, 78 of which are data type related. The additional six CWEs: 573, 664, 668, 710, 758, and 1076 (shown with gray outline) were included only for parent-child completeness. We peer-reviewed their detailed descriptions, examples, and listed CVEs, as well as the corresponding literature; and performed weekly discussions brainstorming to confirm each of these CWEs is covered by the operations, causes, and/or consequences defining the BF _Data Type Bugs_ classes.

We mapped each of the identified CWEs to a BF _Data Type Bugs_ class based on the operations that are defined in DCL, NRS, TCV, and TCM and identified an operation for the CWE. Then, we generated digraphs of all data type related CWEs to show their correspondence to the BF _Data Type Bugs_ classes by operation (Fig. 1) and by consequence (Fig. 8). In the digraphs, each node is a CWE weakness, shown by its CWE ID, and the edges show the parent/child relationship. The outline style of a CWE node indicates the abstraction level: pillar, class, base, or variant.

In Fig. 1, the outline color of a CWE node indicates the BF class(es) and operation(s) associated with that CWE: DCL Declare, DCL Define, NRS Refer, NRS Call, TCV Cast, TCV Coerce, TCM Calculate, and TCM Evaluate.

Most of the CWEs, visualized on the digraphs, are covered by the DCL class. They relate to improper declaration and definition of structured data and are under the pillars CWE-664 (_Improper Control of a Resource Through its Life-time_) and CWE-668 (_Exposure of Resource_), and CWE-710 (_Improper Adherence to Coding Standards_), correspondingly.

Two other large clusters of data type related CWEs are covered by TCM. They relate to improper calculation and evaluation and are descendants of the pillars CWE-682 (_Incorrect Calculation_) and CWE-697 (_Incorrect Comparison_), correspondingly. Two of the CWE-628 (_Function Call with Incorrectly Specified Arguments_) descendants are also covered by TCM Calculate and Evaluate. In addition, CWE-351 (_Insufficient Type Distinction_) is covered by TCM Evaluate.

The CWEs covered by TCV are under CWE-704 (_Incorrect Type Conversion or Cast_). They mostly relate to improper coercion – CWE-843 (_Access of Resource Using Incompatible Type (’Type Confusion’)_) and the children of CWE-681 (_Incorrect Conversion between Numeric Types_). Only one CWE was identified as improper casting – CWE- 588 (_Attempt to Access Child of a Non-structure Pointer_).

Only a few CWEs are partly related to the NRS class, which is surprising as bugs related to polymorphic calls are not rare. Our explanation is that CWE considers improper name referring/resolving and improper function calling/binding to be part of a computation weakness. For in- stance, CWE-468 is under CWE-682 (_Incorrect Calculation_), but it lists an example that starts with a TCV bug leading to an NRS weakness, and is actually a five weaknesses chain.

Fig. 3 shows the percentages of data type related CWEs by BF class operation. It shows that most of these CWEs are about weaknesses that occur at declara- tion and definition (47.8% combined) of objects, types, and functions. Next are weaknesses related to performing data type related calculations or evaluations (28.9% combined). The least represented are the name resolution (at refer and call) and type conversion (at cast and coerce) weaknesses.

While the CWEs only enumerate weaknesses, the _Data Type Bugs_ classes ensure precise descriptions, as a weak- ness is described via one cause, one operation, and one consequence. The CWEs exhaustive list is prone to gaps in coverage and some weakness types may be missing. For example, in the type related categorization the CWEs are mainly focused on primitive data type errors, such as _Numeric Errors_ and _String Errors_, while our developed BF classes consider both primitive and structured data types. Besides that, the data type related CWEs focus mostly on types of errors that happen during arithmetic calculations and comparison evaluations, while the BF Data Type Bugs classes define type related bugs based on different stages of the data types development: from declaration and definition to resolution and usage.

The BF Data Type Bugs classes present a taxonomy with structured cause→consequence relations that is complete and orthogonal. It could be viewed as a structured extension over the CWEs related to Wrong Result, Rounded Value, Truncated Value, Wrap Around (incl. Integer Overflow), Under Range, Over Range Flipped Sign, Wrong Access, and Undefined Behaviour (see Fig. 2). It is a taxonomy that explains the causal relationships between weaknesses and would be easier to use than the nested hierarchical CWEs.

Many bug reporting tools use the CWE to describe detected bugs/weaknesses. As a structured extension over the data type related CWEs, the BF Data Type taxonomy can be used to report identified data type related bugs/weaknesses (including those leading to integers overflow, juggling, and pointer arithmetic errors). Fig. 1 shows how data type related CWEs translate to BF DCL, NRS, TCV, TCM by operation; Fig. 2 shows how they translate by consequences.

{{< svg src="images/CWE-graph--DCL-NRS-TCV-TCM-class.svg" height="650" caption="Fig. 1: A digraph of the data type related CWEs, mapped by DCL, NRS, TCV, and TCM operations. Each node represents a CWE ID. Each arrow represents a parent-child relationship." >}}

{{< svg src="images/CWE-graph--DCL-NRS-TCV-TCM-consequence.svg" height="800" caption="Fig. 2: A digraph of the data type related CWEs, mapped by BF DCL, NRS, TCV, and TCM consequences. Each node represents a CWE ID. Each arrow represents a parent-child relationship." >}}

{{< img src="images/piechart.png" height="300" caption="Fig 3. A diagram of the percentages of data type related CWEs by the operations of the BF Data Type Bugs classes." >}}
