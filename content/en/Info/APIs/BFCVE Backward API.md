---
weight: 3
bookCollapseSection: false
title: "BFCVE Backward API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

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

______________________________________
Provide your indended BF use via the [BF Form](https://forms.gle/SRZyva5Vn1i4dQQ2A).