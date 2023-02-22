---
weight: 2
title: "Validation"
---
# Validation

In this section, we analyze the correspondence of the input, output, and injection-related CWEs to the two new BF DVL and DVR classes. We show that the BF classes cover all related CWEs, and potentially beyond, while providing a better structured way for describing these kinds of bugs/weaknesses.

The BF classes ensure precise causal descriptions, as a weakness is described via one cause, one operation, and one consequence, while the CWEs only enumerate weaknesses. The CWEs exhaustive list approach is prone to gaps in coverage: some weakness types may be missing. The CWEs also have overlaps in coverage, including via over detailing (e.g., CWE-23 children’s path traversal variations). While by their nature, the BF classes are complete and orthogonal, assuring no gaps and no overlaps in coverage. We map a CWE to a BF class by an operation and/or a consequence from the lists defining the BF class. Through these relationships, the BF classes can be viewed as structured extensions to the input, output, and injection-related CWEs.

The BF Data Check Bugs classes relate to particular CWEs by BF DVL and DVR operations and/or consequences. We generated a digraph of all input- and output-check-related CWEs, including the injection-related CWEs, to show this correspondence both by operation (Fig. 1) and by conse- quence (Fig. 2). In the digraph, an edge starts at a parent CWE and ends at a child CWE. The outline style of a CWE node indicates the CWE level of abstraction: pillar, class, base, or variant.

Almost all of the 162 CWEs, visualized on the digraph, can be tracked as descendants of the pillar CWE-707; exceptions are CWEs 15, 73 (its child 114), 98, 134, 183, 184, 185 (and its children 186 and 625), 428, 472, 565, and 913.

Analyzing the digraph, we see that the pillar CWE- 707 reflects neutralization of malformed messages; it is quite broad. It is the parent of several CWEs that are not strictly input/output check related.

The digraph helped us identify seven distinct clusters of CWEs with parent CWEs 20, 22, 41, 74, 116, 138, and 228.

Most CWEs are about input check. CWEs-116 and its children, CWEs 117 and 644, are about output check. CWEs 80, 81, 82, 83, 84, 85, 86, and 87 are about both input check and output check.

In Fig. 1, the outline color of a CWE node indicates the BF class(es) and operation(s) associated with that CWE: DVL Validate, DVL Sanitize, DVR Verify, and DVL Validate and DVR Verify. There are no CWEs that relate to DVR Correct. The CWE-20 cluster is the only one that corresponds to DVR Verify. However, some of its descendants correspond also to DVL Validate. The CWE-41 and CWE-228 (except 3 nodes) clusters correspond to DVL Validate. The rest of the clusters, CWE-22, CWE-74, CWE-116, and CWE-138, correspond to DVL Sanitize.

The digraph on Fig. 2 illustrates how the CWEs map to BF DVL and DVR by consequence.

In Fig. 2, the outline color of a CWE node indicates the BF class consequence associated with that CWE: Query Injection, Command Injection, Source Code Injection, Pa- rameter Injection, File Injection, Invalid Data, Wrong Value, Inconsistent Value, or Wrong Type.

The CWE-74 cluster is all about injection; the largest group there is Source Code Injection, then are Query Injection and Command Injection, and a few nodes of File Injection and Parameter Injection. CWEs 74, 75, 76, 913, 914 are not colored, as they are about general injection errors. The CWE-22 and CWE-41 clusters are all about File Injection. The CWE-138 cluster is mostly about Parameter Injection and some Source Code Injection. Some of the CWE-138 nodes correspond to the DVL Invalid Data for Next Operation consequence. The CWE-20 cluster (which is DVR related) has nodes corresponding to the DVR Wrong Data for Next Operation consequences; however, some of these CWEs describe only causes and do not list consequences.

All relationships to input, output, and injection CWEs (Fig. 2) by BF DVL and BF DVR consequences are as follows:

1.  The DVL class relates to CWEs through its Wrong Data for Next Operation consequence as follows:
    * Invalid Data – CWEs: 138, 153, 155, 158, 159, 160, 162, and 164.
2.  The DVL class relates to CWEs also through its Injec- tion Error consequences as follows:
    * Query Injection – CWEs: 89, 90, 91, 564, 643, 652, and 943;
    * Command Injection – CWEs: 77, 78, and 624;
    * Source Code Injection – CWEs: 79, 80, 81, 83, 82, 85, 86, 87, 94, 95, 96, 97, 98, 149, 692, 917, and 1336;
    * Parameter Injection – CWEs: 88, 93, 113, 134, 140, 141, 142, 143, 144, 145, 146, 147, 148, 150, 151, 152, 154, and 157;
    * File Injection – CWEs: 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 73, 99, 117, 641, and 1236.
3.  The DVR class relates to CWEs through its Wrong Data for Next Operation consequence as follows:
    * Wrong Value – CWEs: 129, 170, 606, 781, 1285, and 1289;
    * Inconsistent Value – CWEs: 130, 230, 232, and 1288;
    * Wrong Type – CWEs: 1284, and 1287.
4.  The following CWEs reflect only DVL or DVR causes: 102, 105, 106, 108, 109, 183, 184, 185, 186, 228, 229, 231, 233, 234, 235, 236, 237, 238, 239, 240, 554, 625, 1173, and 1174.

The BF Data Check Bugs classes present a taxonomy with structured cause/consequence relations that is complete and orthogonal. It could be viewed as a structured extension over the CWEs related to Injection Errors, Invalid Data, Wrong Value, Inconsistent Value, and Wrong Type (Fig. 2). It is a taxonomy that explains the causal relationships between weaknesses and would be easier to use than the nested hierarchical CWEs.

Many bug reporting tools use the CWE to describe found bugs/weaknesses. As a structured extension over the input, output, and injection CWEs, the BF Data Check taxonomy can be used to report found data check bugs/weaknesses (including those leading to injection errors). Fig. 1 shows how input/output and injection CWEs translate to BF DVL and BF DVR by operation; Fig. 2 shows how they translate by consequences.

{{< svg src="images/dvldvrclass.svg" height="800" caption="Fig. 1: A digraph of the input- and output-check-related CWEs (including injection-related CWEs), mapped by BF DVL and BF DVR operations. Each node represents a CWE by its identifier (ID). Each arrow represent a parent-child relationship" >}}

{{< svg src="images/dvldvrcons.svg" height="800" caption="Fig. 2: A digraph of the input- and output-check-related CWEs (including the injection-related CWEs), mapped by BF DVL and BF DVR consequences. Each node represents a CWE by its identifier (ID). Each arrow represent a parent-child relationship" >}}