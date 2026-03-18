---
weight: 7
bookCollapseSection: false
title: "BF LL1 ACFG API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF LL1 ACFG API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The current BF Taxonomy comprises the BF Input/Output Check(_INP), Memory Corruption/Disclosure (_MEM), and Data Type (_DAT) Class Types and the BF Failure (_FLR) Class Type.

//Exclusive Rights Only//

The BF LL1 ACFG APP/API queries BF and generates the corresponding (i.e., filtered) BF LL1 ACFG in EBNF format.

- UI  <br/>
  [https://BFservice.coming.soon/BFFormalLanguage](https://BFservice.coming.soon/BFFormalLanguage) </br>

- API  <br/>

  C# <br/>
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://BFservice.coming.soon") };

      //to be updated <-- replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      var responseEBNF = await client.GetAsync("BFFormalLanguage");
      responseEBNF.EnsureSuccessStatusCode();        
      var result = await responseEBNF.Content.ReadAsStringAsync();

   Python
      
    //to be added//
_______________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>