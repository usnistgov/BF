---
weight: 3
bookCollapseSection: false
title: "BFCVE Backward API"
---
# BFCVE Backward API <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

BF Version 1.0, comprizes the BF Data Type (_DAT), Input/Output check(_INP), and Memory Corruption/Dusclosure (_MEM) Class Types.

The BF BFCVE Backwards API allows quering the BF taxonomy for acyclic graphs with the possible chains from a particular Failure (IEX, DOS, ACE, TPR) and the Final Weakness as (Fault, Operation, Final Error) leading ot the Failure -- e.g.,:

[https://samate.nist.gov/services/BF/BFCVEbackward/api/IEX/xml?cause=Over%20Bounds%20Pointer&operation=Read&finalError=Buffer%20Over-Read](https://samate.nist.gov/services/BF/BFCVEbackward/api/IEX/xml?cause=Over%20Bounds%20Pointer&operation=Read&finalError=Buffer%20Over-Read)

<!-- Could be only by Failure and Final Operation and Final Error -- e.g.,:

[https://samate.nist.gov/services/BF/BFCVEbackward/api/ACE/xml?operation=Write&finalError=Buffer%20Overflow](https://samate.nist.gov/services/BF/BFCVEbackward/api/ACE/xml?operation=Write&finalError=Buffer%20Overflow)


Could be only by Failure and Final Error -- e.g.,:

[https://samate.nist.gov/services/BF/BFCVEbackward/api/DOS/xml?FinalError=NULL%20Pointer%20Dereference](https://samate.nist.gov/services/BF/BFCVEbackward/api/DOS/xml?FinalError=NULL%20Pointer%20Dereference)

Could be in JSON format:

[https://samate.nist.gov/services/BF/BFCVEbackward/api/IEX/json?operation=Write&finalError=Buffer%20Overflow](https://samate.nist.gov/services/BF/BFCVEbackward/api/IEX/json?operation=Write&finalError=Buffer%20Overflow)

[https://samate.nist.gov/services/BF/BFCVEbackward/api/IEX?operation=Write&finalError=Buffer%20Overflow](https://samate.nist.gov/services/BF/BFCVEbackward/api/IEX?operation=Write&finalError=Buffer%20Overflow) -- same as above -->


</br>
CITATION 

_____________________________________________________________

Bojanova, I., Bugs Framework (BF) -- BF BFCVEbackward API, NIST. Accessed: <span id="currentDate"></span>. [Online]. Available: [https://usnistgov.github.io/BF/info/apis/bf-BFCVEbackward-api](https://usnistgov.github.io/BF/info/apis/bf-BFCVEbackward-api).