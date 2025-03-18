---
weight: 1
bookCollapseSection: false
title: "BF _INP API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF _INP API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BF _INP API queries and generates the BF Taxonomy in graphical formats.

- BF /_INP Excerpt  &rarr; no Key required: <br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT/_INP](https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT/_INP) <br/>

- BF /_INP Full &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT/_INP?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT/_INP?key=YOUR_KEY)

  - With Definitions:<br/>
      [https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT/_INP?ShowDefinitions=true&key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT/_INP?ShowDefinitions=true&key=YOUR_KEY)

  <!-- - Queried by BF Class taxon values: Class, Operation, Operand, Bug, Fault, Error, FinalError, and Attribute -- e.g., :<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT?Fault=NULL%20Pointer&key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomyPPT?Fault=NULL%20Pointer&key=YOUR_KEY) -->

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>
        
  C#
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      var response = await BFClient.SendRequest("BFFormalLanguage/BFTaxonomyPPT/_INP/api", HttpMethod.Get);
      response.EnsureSuccessStatusCode();
      var zipData = await response.Content.ReadAsStreamAsync();


  Python //to be added//
_______________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>