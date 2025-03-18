---
weight: 1
title: "Model"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Data Type (\_DAT) Bugs Model <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

Data Type bugs could be introduced at any of the _declaration_, _name resolution_, _data type conversion_, or _data type related computation" phases. Each data type related bug or weakness involves one data type operation: _Declare_, _Define_, _Refer_, _Call_, _Cast_, _Coerce_, _Calculate_, or _Evaluate_.

The BF Data Type Bugs model (Figure 1) helped us identify the phases and the operations where such bugs could occur. The phases correspond to the BF Data Type classes: _Declaration Bugs (DCL)_, _Name Resolution (NRS)_, _Type Conversion Bugs (TCV)_, and _Type Computation Bugs (TCM)_. All data type operations are grouped by phase. The presented proper flow of operations helps bugs/weaknesses caused by a missing operation.
<br/><br/>
{{< img src="images/BF Models/_DAT Model.svg" caption="Figure 1. BF Data Type Bugs Model. Comprises phases, corresponding to the BF classes DCL, NRS, TCV, and TCM. Shows the data type operations flow: blue arrows – the main flow; purple arrows – flow when resolved data types get bound to objects, functions, or generic data types according to their declarations; blue arrows – flow when casting (explicit conversion) is expected before the call; green arrows – flow when the value will get coerced (implicitly converted) to the parameter data type or the return data type, correspondingly" >}}
<br/>
The operations under DCL are on declaring entities and on defining objects data and functions implementations: _Declare_ and _Define_.

The operations under NRS are on resolving referred names and on binding their data types and the objects data, and on resolving called functions and binding their implementations: _Refer_ and _Call_.The NRS operations are tied to the name resolution and binding that the Type System performs. Figure 2 shows the corresponding sub-model. Note that the object data value is bound via the _Initialize_ and _Write_ operations of the BF Memory Use Bugs (MUS) class.
<br/><br/>
{{< img src="images/BF Models/_DAT 2 Model.svg" caption="Figure 2. Name Resolution and Biding" >}}
<br/>
The operations under TCV are on explicit conversion and on implicit conversion into a different data type of a passed in/out of a function data value: _Cast_ and _Coerce_.

The operations under TCM are on calculating (an arithmetic operation – part of an algebraic expression) and on evaluating (a boolean operation – part of a condition): _Calculate_ and _Evaluate_.

The possible flow between operations from different phases is depicted with arrows in Figure 1. A declared and defined entity is referred in source code via its name. Names, referred to in remote scopes, get resolved via resolved names- paces; resolved data types get bound to objects, functions, or generic data types according to their declarations (see the purple arrow flow). A resolved and bound object may be converted to another data type and used in computations as an argument or as a return of a called function, or to call a member function. A passed in argument is expected to be of the declared parameter data type and the passed out result is expected to be of the return data type. Otherwise, casting (explicit conversion) is expected before the call (see the blue arrows flow) or the value will get coerced (implicitly converted) to the parameter data type or the return data type, correspondingly (see the green arrows flow). Note that the green arrows flow is about passed in/out objects – it starts only from NRS Call, it never starts from DCL Declare. The presented operations flow helps in identifying possible chains of bugs and weaknesses.

## BF Type Safety

The BF Data Type (_DAT)  Bugs Model addresses temporal type safety by defining the proper flow of operations along the x-axis. For example, data must declared propely to aviod wrap-around (e.g., integer overflow). 

The[Data Validation (DVL)](/BF/info/bf-classes/_inp/dvl) and [DVR](/BF/info/bf-classes/_inp/dvr) BF classes define the list of possible consequences when these temporal rules are not followed.

