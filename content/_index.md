---
title: "Overview"
---
# Welcome to the NIST Bugs Framework (BF) project!
Welcome to the NIST Bugs Framework (BF) project!

We are classifying software bugs and weaknesses to allow precise descriptions of vulnerabilities that exploit them.

The Bugs Framework (BF) is a …  
     ➢ Structured  
          ➢ Complete  
               ➢ Orthogonal  
                    ➢ Language independent  
     … classification of software bugs and weaknesses.

_Structured_ means a weakness is described via one cause, one operation, one consequence, and one value per attribute from the lists defining a BF class. This assures precise causal descriptions. Complete means BF has the expressiveness power to describe any software bug or weakness. This assures there are no gaps in coverage. Orthogonal means the sets of operations of any two BF classes do not overlap. This assures there are no overlaps in coverage. BF is also applicable for source code in any programming language.

Each BF class has:

*   A set of operations – where such bugs could happen
*   A set of causes – the possible improper operations and operands
*   A set of consequences – improper operands for next weakness and the possible final errors
*   A set of attributes with values – for the operations and the operands.

Please watch our short intro presentation: