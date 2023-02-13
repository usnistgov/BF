---
weight: 1
title: "Model"
---
# BF Data Type Bugs Model

Data Type bugs could be introduced at any of the declaration, name resolution, data type conversion, or data type related computation phases. Each data type related bug or weakness involves one data type operation: _Declare_, _Define_, _Refer_, _Call_, _Cast_, _Coerce_, _Calculate_, or _Evaluate_.

The BF Data Type Bugs model (Fig. 1) helped us identify the phases and the operations where such bugs could occur. The phases correspond to the BF Data Type Bugs classes: _Declaration Bugs (DCL)_, _Name Resolution (NRS)_, _Type Conversion Bugs (TCV)_, and _Type Computation Bugs (TCM)_. All data type operations are grouped by phase.

The operations under DCL (Fig. 1) are on declaring entities and on defining objects data and functions implementations: _Declare_ and _Define_.

The operations under NRS (Fig. 1) are on resolving referred names and on binding their data types and the objects data, and on resolving called functions and binding their implementations: _Refer_ and _Call_.The NRS operations are tied to the name resolution and binding that the Type System performs. Fig. 2 shows the corresponding sub-model. Note that the object data value is bound via the _Initialize_ and _Write_ operations of the BF Memory Use Bugs (MUS) class.

The operations under TCV (Fig. 1) are on explicit conversion and on implicit conversion into a different data type of a passed in/out of a function data value: _Cast_ and _Coerce_.

The operations under TCM (Fig. 1) are on calculating an arithmetic operation (part of an algebraic expression) and on evaluating a boolean operation (part of a condition): _Calculate_ and _Evaluate_.

The possible flow between operations from different phases is depicted with arrows in Fig. 1. A declared and defined entity is referred in source code via its name. Names, referred to in remote scopes, get resolved via resolved names- paces; resolved data types get bound to objects, functions, or generic data types according to their declarations (see the purple arrow flow). A resolved and bound object may be converted to another data type and used in computations as an argument or as a return of a called function, or to call a member function. A passed in argument is expected to be of the declared parameter data type and the passed out result is expected to be of the return data type. Otherwise, casting (explicit conversion) is expected before the call (see the blue arrows flow) or the value will get coerced (implicitly converted) to the parameter data type or the return data type, correspondingly (see the green arrows flow). Note that the green arrows flow is about passed in/out objects – it starts only from NRS Call, it never starts from DCL Declare. The presented operations flow helps in identifying possible chains of bugs and weaknesses.

{{< img src="images/DAT.png" height="500" caption="Fig 1. The BF Data Type Bugs model. Comprises phases, corresponding to the BF classes DCL, NRS, TCV, and TCM. Shows the data type operations flow." >}}

