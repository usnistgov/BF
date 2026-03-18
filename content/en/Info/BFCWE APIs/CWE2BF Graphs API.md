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

The CWE2BF Graphs APP/API generates CWE-to-BF Di-Graph Mappings by BF Class, Operation, Error, of Final Error in graphical formats.

<!-- - BF CWE2BF Graphs 
  [https://10.210.91.216:7654/BFCWE/CWEBFPPT](https://10.210.91.216:7654/BFCWE/CWEBFPPT)

- Programatically  <br/> -->

//To be added//
        
  <!-- C#
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://10.210.91.216:7654") };

      //to be updated <-- replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //replace YOUR_CWEBF.xml_FILE_NAME and YOUR_CurrentCWEBF.xml_FILE_NAME 

      XXXXXXXXXXXXXXXXX -- not finished xxxxxxxxxxxxxxxxxxxxxxxxx

      var fileContent = new MultipartFormDataContent();
      foreach (var fileName in fileNames)
          fileContent.Add(new StreamContent(File.OpenRead(fileName)), "files", Path.GetFileName(fileName));

      //xxx var response = await BFClient.SendRequest("BFSpecification/CWEBFPPT/api", HttpMethod.Post, fileContent);
      response.EnsureSuccessStatusCode();
      var zipData = await response.Content.ReadAsStreamAsync();  
   
      //replace YOUR_FOLDER 
      zipData.CopyTo(File.Create(Path.Combine(YOUR_FOLDER, "CWEBFppt.zip")));

  Python
      
    //to be added// -->
_________________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>