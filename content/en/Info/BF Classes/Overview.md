---
weight: 1
bookCollapseSection: true
title: "Overview"
---
# Bugs Framework (BF) Taxonomy <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

Please use the menu on the left to browse the BF Class Types: [_INP](/BF/info/bf-classes/_inp/), [_MEM](/BF/info/bf-classes/_mem/), [_DAT](/BF/info/bf-classes/_dat/), ...
<!-- [_CDS](/BF/info/bf-classes/_cds/), ... -->

Each BF class is a taxonomic  category  of  a  weakness type. It relates to a distinct phase of software execution, the operations specific for that phase and the operands required as input to those operations. Operations or operands improperness define the causes. A consequence is the result of the operation over the operands. It becomes the cause for a next weakness or is a final error, leading to a failure. The attributes describe the operations and the operands. They help in understanding the severity of the bug/weakness.

Each BF class has a strict definition and a taxonomy. The taxonomy of a class comprises:

* A set of operations – where such bugs could happen
* A set of causes – the possible improper operations (bugs) and improper operands (faults)
* A set of consequences – the possible errors (that become faults for next weaknesses) and the possible final errors (that become exploits)
* A matrix of valid cause–operation–consequence relations
* A set of attributes for the operations and the operands
* A set of attributes with values – for the operations and the operands.


//more to be added//