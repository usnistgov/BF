---
weight: 1
bookCollapseSection: false
title: "BF Graphs API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Graphs API <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The current BF Taxonomy comprizes the BF Input/Output Check(_INP), Memory Corruption/Dusclosure (_MEM), and Data Type (_DAT) Class Types and the BF Failure (_FLR) Class Type.

The BF Graphs API generates and filters the BF Taxonomy in graphical formats.

- BF Excerpt  &rarr; no Key required: <br/>
  [https://samate.nist.gov/services/BF/BFTaxonomy/ppt](https://samate.nist.gov/services/BF/BFTaxonomy/ppt) <br/>

- BF Full &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:<br/>
  [https://samate.nist.gov/services/BF/BFTaxonomy/ppt?key=`YOUR_KEY`](https://samate.nist.gov/services/BF/BFTaxonomy/ppt?key=YOUR_KEY)

  - With Definitions Table:<br/>
      [https://samate.nist.gov/services/BF/BFTaxonomy/ppt?ShowDefinitions=true&key=`YOUR_KEY`](https://samate.nist.gov/services/BF/BFTaxonomy/ppt?ShowDefinitions=true&key=YOUR_KEY)

  - Queried by BF Class Type:<br/>
  [https://samate.nist.gov/services/BF/BFTaxonomy/ppt?classType=_INP&key=`YOUR_KEY`](https://samate.nist.gov/services/BF/BFTaxonomy/ppt?classType=_INP&key=YOUR_KEY)

  - Queried by BF Class taxon values: Class, Operation, Operand, Bug, Fault, Error, FinalError, and Attribute -- e.g., :<br/>
  [https://samate.nist.gov/services/BF/BFTaxonomy/ppt?Fault=NULL%20Pointer&key=`YOUR_KEY`](https://samate.nist.gov/services/BF/BFTaxonomy/ppt?Fault=NULL%20Pointer&key=YOUR_KEY)

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>
        
  C# - simplified
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      var response = await BFClient.SendRequest("BFTaxonomy/ppt/api", HttpMethod.Get);
      response.EnsureSuccessStatusCode();
      var zipData = await response.Content.ReadAsStreamAsync();


  Python //to be added//
_______________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>