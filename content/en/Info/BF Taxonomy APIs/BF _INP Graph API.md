---
weight: 1
bookCollapseSection: false
title: "BF _INP Graph API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF \_INP Graph API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BF \_INP APP/API queries the BF \_INP Class Type queries BF and generates the BF \_INP Taxonomy in graphical format.

<!-- - BF /_INP Taxonomy Excerpt  &rarr; no Key required: <br/>
  [https://<<coming soon>>/BFTaxonomy/PPT/_INP](https://<<coming soon>>/BFTaxonomy/PPT/_INP) <br/> -->

- UI 
  [https://<<coming soon>>/BFTaxonomy/PPT/_INP](https://<<coming soon>>/BFTaxonomy/PPT/_INP)

  - With Definitions:<br/>
      [https://<<coming soon>>/BFTaxonomy/PPT/_INP?ShowDefinitions=true](https://<<coming soon>>/BFTaxonomy/PPT/_INP?ShowDefinitions=true)

  <!-- - Queried by BF Class taxon values: Class, Operation, Operand, Bug, Fault, Error, FinalError, and Attribute -- e.g., :<br/>
  [https://<<coming soon>>/BFTaxonomy/PPT?Fault=NULL%20Pointer](https://<<coming soon>>/BFTaxonomy/PPT?Fault=NULL%20Pointer) -->

- API  <br/>
        
  C#
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://<<coming soon>>") };

      //to be updated <-- replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      var response = await client.GetAsync("BFTaxonomy/PPT/_INP/api");
      response.EnsureSuccessStatusCode();
      var zipData = await response.Content.ReadAsStreamAsync();


  Python 
  
  //to be added//
_______________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>