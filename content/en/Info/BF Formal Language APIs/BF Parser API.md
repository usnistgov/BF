---
weight: 41
bookCollapseSection: false
title: "BF Parser API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Parser API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BF Parser API performs Validation and Verification of BF Specifications in .bfv, .bfvul, and .bff formats. It is also incorporated in the BF GUI Tool.

- UI &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:

  [https://samate.nist.gov/services/BF/BFFormalLanguage/BFParser](https://samate.nist.gov/services/BF/BFFormalLanguage/BFParser)<br/>

- API &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>
        
  C#
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      using var content = new MultipartFormDataContent();
      // loop over your .bfv files --> fileName
        var file = new StreamContent(File.OpenRead(fileName));
        content.Add(file, "files", Path.GetFileName(fileName));      

      using var response = await client.PostAsync("BFFormalLanguage/BFParser/api", content);        
      response.EnsureSuccessStatusCode();
      var result = bool.Parse(await response.Content.ReadAsStringAsync());

  Python
      
    //to be added//
_________________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>
