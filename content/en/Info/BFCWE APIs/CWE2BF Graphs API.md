---
weight: 2
bookCollapseSection: false
title: "CWE2BF Graphs API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# CWE2BF Graphs API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The CWE2BF Graphs API generates CWE-to-BF Mappings by BF Class, Operation, Error, of Final Error in graphical formats.

- BF CWE2BF Graphs &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:<br/>
  [https://samate.nist.gov/services/BF/BFCWE/CWEBFPPT?key=YOUR_KEY](https://samate.nist.gov/services/BF/BFCWE/CWEBFPPT?key=YOUR_KEY)

- Programatically &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>

//To be added//
        
  <!-- C#
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //replace YOUR_CWEBF.xml_FILE_NAME and YOUR_CurrentCWEBF.xml_FILE_NAME 

      XXXXXXXXXXXXXXXXX -- not finished xxxxxxxxxxxxxxxxxxxxxxxxx

      var fileContent = new MultipartFormDataContent();
      foreach (var fileName in fileNames)
          fileContent.Add(new StreamContent(File.OpenRead(fileName)), "files", Path.GetFileName(fileName));

      var response = await BFClient.SendRequest("BFSpecification/CWEBFPPT/api", HttpMethod.Post, fileContent);
      response.EnsureSuccessStatusCode();
      var zipData = await response.Content.ReadAsStreamAsync();  
   
      //replace YOUR_FOLDER 
      zipData.CopyTo(File.Create(Path.Combine(YOUR_FOLDER, "CWEBFppt.zip")));

  Python
      
    //to be added// -->
_________________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>