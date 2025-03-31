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

The current BF Taxonomy comprizes the BF Input/Output Check(_INP), Memory Corruption/Dusclosure (_MEM), and Data Type (_DAT) Class Types and the BF Failure (_FLR) Class Type.

//Exclusive Rights Only//

The BF LL1 ACFG API queries BF and generates the corresponding (i.e., filtered) BF LL1 ACFG in EBNF format.

- BF LL1 ACFG &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage?key=YOUR_KEY) </br>

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>

  C# <br/>
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      var responseEBNF = await client.GetAsync("BFFormalLanguage");
      responseEBNF.EnsureSuccessStatusCode();        
      var result = await responseEBNF.Content.ReadAsStringAsync();

   Python
      
    //to be added//
 _______________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>