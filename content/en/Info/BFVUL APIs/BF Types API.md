---
weight: 3
bookCollapseSection: false
title: "BF Types API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF Types API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BF Types API generates the BF Types for the provided BF Vulnerability Specification(s). 

- BF Vulnerability Specifications with added BF Class, Bug, Fault, Error, Final Error, and Attribute Types as applicable &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:

  [https://samate.nist.gov/services/BF/BFVUL/BFTypes?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFVUL/BFTypes?key=YOUR_KEY)<br/>

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>
        
  C#
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //replace YOUR_FILES_NAMES
      string[] fileNames = YOUR_FILES_NAMES;

      var content = new MultipartFormDataContent();
      foreach (var fileName in fileNames)
          content.Add(new StreamContent(File.OpenRead(fileName)), "files", Path.GetFileName(fileName));

      var response = await client.PostAsync("BFVUL/BFTypes/api", content);
      response.EnsureSuccessStatusCode();
      var zipData = await response.Content.ReadAsStreamAsync();
      
      //replace YOUR_FOLDER
      zipData.CopyTo(File.Create(Path.Combine(YOUR_FOLDER, "bfv.zip")));

  Python
      
    //to be added//
_________________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>