---
weight: 3
bookCollapseSection: false
title: "BFCVEs Pre API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BFCVEs Pre API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BFCVEs Pre APP/API generates datasets of preliminary BFCVE Specifications based on the BF Taxonomy and the NVD CVE-to-CWE and CWE2BF mappings per BF Class Type.<br/>
_INP BFCVEs Pre APP/API covers CVEs related to the BF Input/Output Check (_INP) Class Type.<br/>
_MEM BFCVEs Pre APP/API covers CVEs related to the BF Memory Corruption/Disclosure (_MEM) Class Type.<br/>
_DAT BFCVEs Pre APP/API covers CVEs related to the BF Data Type (_DAT) Class Type.<br/>

- UI 

  [https://10.210.91.216:7654/BFCVEPre.xml/_MEM](https://10.210.91.216:7654/BFCVEPre.xml/_MEM)<br/>
  [https://10.210.91.216:7654/BFCVEPre.json/_MEM](https://10.210.91.216:7654/BFCVEPre.json/_MEM)

  - Queried by CVE ID, CWE ID, CVSS; or BF Class taxon values: Class Tyoe, Class, Operation, Cause, and Conseqeunce-- e.g., :<br/>

    [https://10.210.91.216:7654/BFCVEPre.xml?class=MUS](https://10.210.91.216:7654/BFCVEPre.xml/_MEM?class=MUS)<br/>
    [https://10.210.91.216:7654/BFCVEPre.json?class=MUS](https://10.210.91.216:7654/BFCVEPre.json/_MEM?class=MUS)

- API  <br/>

  C# <br/>
        
      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://10.210.91.216:7654") };

      //to be updated <-- replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      //result in XML
      var responseXML = await client.GetAsync("BFCVEPre.xml/api");
      responseXML.EnsureSuccessStatusCode();        
      var resultXML = await responseXML.Content.ReadAsStringAsync();

      //result in JSON
      var responseJSON = await client.GetAsync("BFCVEPre.json/api");       
      responseJSON.EnsureSuccessStatusCode();         
      var resulJSON = await responseJSON.Content.ReadAsStringAsync();

   Python
      
    //to be added//
    
  _________________________________

BF PATENT PENDING<br/>
<l style="font-size: 16px; color: #7D3368">U.S. Patent Application No. PCT/US2025/038662 Bugs Framework (BF): A System for Formal Specification of Cybersecurity Weaknesses and Vulnerabilities, Definition of Secure Coding Principles, and Generation of Weakness and Vulnerability Datasets and Vulnerability Classifications. Inventor: Irena Bojanova, NIST.</l>  <br/>

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l> 