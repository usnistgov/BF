---
weight: 3
bookCollapseSection: false
title: "BF _DAT Graph API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF \_DAT Graph API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BF \_DAT APP/API queries BF \_DAT Class Type and generates the BF \_DAT Taxonomy in graphical format.

<!-- - BF _DAT Taxonomy Excerpt  &rarr; no Key required: <br/>
  [https://10.210.91.216:7654/BFTaxonomy/PPT/_DAT](https://10.210.91.216:7654/BFTaxonomy/PPT/_DAT) <br/> -->

- UI 
  [https://10.210.91.216:7654/BFTaxonomy/PPT/_DAT](https://10.210.91.216:7654/BFTaxonomy/PPT/_DAT)

  - With Definitions:<br/>
      [https://10.210.91.216:7654/BFTaxonomy/PPT/_DAT?ShowDefinitions=true](https://10.210.91.216:7654/BFTaxonomy/PPT/_DAT?ShowDefinitions=true)

  <!-- - Queried by BF Class taxon values: Class, Operation, Operand, Bug, Fault, Error, FinalError, and Attribute -- e.g., :<br/>
  [https://10.210.91.216:7654/BFTaxonomy/PPT?Fault=NULL%20Pointer](https://10.210.91.216:7654/BFTaxonomy/PPT?Fault=NULL%20Pointer) -->

- API  <br/>
        
  C#
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://10.210.91.216:7654") };

      //to be updated <-- replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      var response = await client.GetAsync("BFTaxonomy/PPT/_DAT/api");
      //var response = await client.GetAsync("BFTaxonomy/PPT/_DAT/api?ShowDefinitions=true");
      response.EnsureSuccessStatusCode();
      var zipData = await response.Content.ReadAsStreamAsync();


  Python 
  
  //to be added//
_______________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>