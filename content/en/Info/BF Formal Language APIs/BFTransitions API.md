---
weight: 6
bookCollapseSection: false
title: "BF BFTransitions API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF BFTransitions API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

//Exclusive Rights Only//

The BF BFTransitions APP/API generates datasets of Meaningful `consequence↷cause` BFTransitions between weaknesses of the same BF Class Type, but with different corresponding BF Consequence and BF Cause values.
<!-- 
- BF Weakness BFTransitions Excerpt &rarr; no Key required: 

  [https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFBFTransitions](https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFTransitions)<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFBFTransitions](https://samate.nist.gov/services/BFFormalLanguage.json/BFTransitions) -->

- UI &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:

  [https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFBFTransitions](https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFBFTransitions)<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFBFTransitions](https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFBFTransitions)

- API &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>

  C# <br/>
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //result in XML
      var responseXML = await client.GetAsync("BFFormalLanguage.xml/BFBFTransitions/api");
      responseXML.EnsureSuccessStatusCode();        
      var resultXML = await responseXML.Content.ReadAsStringAsync();

      //result in JSON
      var responseJSON = await client.GetAsync("BFFormalLanguage.json/BFBFTransitions/api");       
      responseJSON.EnsureSuccessStatusCode();         
      var resulJSON = await responseJSON.Content.ReadAsStringAsync();

   Python
      
    //to be added//
    
_________________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>