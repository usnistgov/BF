---
weight: 6
bookCollapseSection: false
title: "BF Transitions API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Transitions API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

//Exclusive Rights Only//

The BF Transitions API generates datasets of Meaningful `consequence↷cause` Propagations between weaknesses of the same BF Class Type, but with different corresponding BF Conseqeunce and BF Cause values
<!-- 
- BF Weakness Transitions Excerpt &rarr; no Key required: 

  [https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFTransitions](https://samate.nist.gov/services/BF/BFFormalLanguage.xml/Transitions)<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFTransitions](https://samate.nist.gov/services/BFFormalLanguage.json/Transitions) -->

- BF Weakness Propagations &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:

  [https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFTransitions?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage.xml/BFTransitions?key=YOUR_KEY)<br/>
  [https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFTransitions?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFFormalLanguage.json/BFTransitions?key=YOUR_KEY)

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>

  C# <br/>
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //result in XML
      var responseXML = await client.GetAsync("BFFormalLanguage.xml/BFTransitions/api");
      responseXML.EnsureSuccessStatusCode();        
      var resultXML = await responseXML.Content.ReadAsStringAsync();

      //result in JSON
      var responseJSON = await client.GetAsync("BFFormalLanguage.json/BFTransitions/api");       
      responseJSON.EnsureSuccessStatusCode();         
      var resulJSON = await responseJSON.Content.ReadAsStringAsync();

   Python
      
    //to be added//
    
_________________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>