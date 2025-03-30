---
weight: 5
bookCollapseSection: false
title: "BF Relations API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Relations API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

//Only with BF Exclusive Rights//

The BF Relations API generates datasets of Meaningful `<cause, operation>→consequence` BF Weakness Triples 
<!-- 
- BF Weakness Relations Excerpt &rarr; no Key required: 

  [https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFRelations](https://samate.nist.gov/services/BF/BFFormalLanguage.xml/Relations)<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFRelations](https://samate.nist.gov/services/BFFormalLanguage.json/Relations) -->

- BF Meaningful Weakness Triples &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:

  [https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFRelations?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFRelations?key=YOUR_KEY)<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFRelations?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFRelations?key=YOUR_KEY)

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>

  C# <br/>
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //result in XML
      var responseXML = await client.GetAsync("BFFormalLanguage.xml/BFRelations/api");
      responseXML.EnsureSuccessStatusCode();        
      var resultXML = await responseXML.Content.ReadAsStringAsync();

      //result in JSON
      var responseJSON = await client.GetAsync("BFFormalLanguage.json/BFRelations/api");       
      responseJSON.EnsureSuccessStatusCode();         
      var resulJSON = await responseJSON.Content.ReadAsStringAsync();

   Python
      
    //to be added//
_________________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>