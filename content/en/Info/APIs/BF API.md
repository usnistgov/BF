---
weight: 2
bookCollapseSection: false
title: "BF API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BF API <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

The current BF Taxonomy comprizes the BF Input/Output Check(_INP), Memory Corruption/Dusclosure (_MEM), and Data Type (_DAT) Class Types and the BF Failure (_FLR) Class Type.

The BF API generates and filters the BF Taxonomy in text (XML, JSON), and graphical (PPT, PNG) formats.

- BF Excerpt

  [https://samate.nist.gov/services/BF/BF.xml](https://samate.nist.gov/services/BF/BF.xml)<br/>
  [https://samate.nist.gov/services/BF/BF.json](https://samate.nist.gov/services/BF/BF.json) </br>
   [https://samate.nist.gov/services/BF/BF/ppt](https://samate.nist.gov/services/BF/BF/ppt) <br/>

- BF Full &rarr; with [BF API Key](https://forms.gle/SRZyva5Vn1i4dQQ2A)

  https://samate.nist.gov/services/BF/BF.xml?key=yourAPIkey </br>
  https://samate.nist.gov/services/BF/BF.json?key=yourAPIkey </br>
  https://samate.nist.gov/services/BF/BF/ppt?key=yourAPIkey 

<table>
<td>
Python
    
    headers = { "user": `YourUserName`, "key": `YourKey` }
    response = requests.get("https://samate.nist.gov/services/BF/BF.xml", headers=headers)
    response.raise_for_status()
    result = response.text
</td>
<td>
C# 
      
    using HttpClient client = new HttpClient();
    client.DefaultRequestHeaders.Add("user", `YourUserName`);
    client.DefaultRequestHeaders.Add("key", `YourKey`);
    HttpResponseMessage response = await client.GetAsync("https://samate.nist.gov/services/BF/BF.xml");
    response.EnsureSuccessStatusCode();            
    var result = await response.Content.ReadAsStringAsync();
</td>
</table>

  BF can be queried by BF taxon values --- e.g., 

  - by Read operation: 

    [https://samate.nist.gov/services/BF/BF.xml?operation=Read](https://samate.nist.gov/services/BF/BF.xml?operation=Read) </br>

  - ClassType: [https://samate.nist.gov/services/BF/BF.xml?classType=_MEM](https://samate.nist.gov/services/BF/BF.xml?ClassType=_MEM) </br>

  - Class, Operation, Operand: [https://samate.nist.gov/services/BF/BF.xml?class=MUS&class=DVL](https://samate.nist.gov/services/BF/BF.xml?class=MUS&class=DVL) </br>

  - Bug/Fault, Error/FinalError: [https://samate.nist.gov/services/BF/BF.xml?fault=NULL+Pointer](https://samate.nist.gov/services/BF/BF.xml?fault=NULL+Pointer) </br>

  - Attributes: [https://samate.nist.gov/services/BF/BF.xml?attribute=Sequential](https://samate.nist.gov/services/BF/BF.xml?Attribute=Sequential) </br>

  - Failure: [https://samate.nist.gov/services/BF/BF.xml?classType=_FLR](https://samate.nist.gov/services/BF/BF.xml?ClassType=_FLR) </br>

 _______________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>