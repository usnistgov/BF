---
weight: 4
bookCollapseSection: false
title: "BF Taxonomy API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Taxonomy API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The current BF Taxonomy comprizes the BF Input/Output Check(_INP), Memory Corruption/Dusclosure (_MEM), and Data Type (_DAT) Class Types and the BF Failure (_FLR) Class Type.

The BF Taxonomy API queries and generates the BF Taxonomy in machine-readable (XML, JSON) formats.

- BF Full &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomy.xml?key=`YOUR_KEY`](https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomy.xml?key=YOUR_KEY) </br>
  [https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomy.json?key=`YOUR_KEY`](https://samate.nist.gov/services/BF/BFFormalLanguage/BFTaxonomy.json?key=YOUR_KEY)

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>

  C# <br/>
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //result in XML
      var responseXML = await client.GetAsync("BFFormalLanguage/BFTaxonomy.xml");
      responseXML.EnsureSuccessStatusCode();        
      var resultXML = await responseXML.Content.ReadAsStringAsync();

      //result in JSON
      HttpResponseMessage responseJSON = await client.GetAsync("BFFormalLanguage/BFTaxonomy.json");       
      responseJSON.EnsureSuccessStatusCode();         
      var resulJSON = await responseJSON.Content.ReadAsStringAsync();

   Python
      
    //to be added//
 _______________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>