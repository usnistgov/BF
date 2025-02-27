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

The BF API generates and filters the BF Taxonomy in XML and JSON formats.

- BF Excerpt

  [https://samate.nist.gov/services/BF/BF/api/xml](https://samate.nist.gov/services/BF/BF/api/xml)<br/>
  [https://samate.nist.gov/services/BF/BF/api/json](https://samate.nist.gov/services/BF/BF/api/json)

- BF Full &rarr; with [BF API Key](https://forms.gle/SRZyva5Vn1i4dQQ2A)

  https://samate.nist.gov/services/BF/BF/api/xml?key=yourAPIkey </br>
  https://samate.nist.gov/services/BF/BF/api/json?key=yourAPIkey

<table>
<td>
C# 

      string apiUrl = "https://samate.nist.gov/services/BF/BF/api/xml";
      string username = ;
      string apiKey = ;

      using HttpClient client = new HttpClient();
      client.DefaultRequestHeaders.Add("usernameH", "YourName");
      client.DefaultRequestHeaders.Add("apiKeyH", "YourAPIKey");

      HttpResponseMessage response = await client.GetAsync(apiUrl);
      response.EnsureSuccessStatusCode();      
      
      var result = await response.Content.ReadAsStringAsync();
      //use result
</td>
<td>
Python
    
    api_url = "https://samate.nist.gov/services/BF/BF/api/xml"
    username = "YourName"
    api_key = "YourAPIKey"
    headers = { "usernameH": username, "apiKeyH": api_key }

    response = requests.get(api_url, headers=headers)
    try:
        response.raise_for_status()
        print(result)
    except requests.exceptions.RequestException as error:
        #use error to notify about a "Request Error
    
    result = response.text
      //use result
</td>
</table>

  BF can be queried by BF taxon values --- e.g., 

  - by Read operation: 

    [https://samate.nist.gov/services/BF/BF/api/xml?operation=Read](https://samate.nist.gov/services/BF/BF/api/xml?operation=Read) </br>

  <!-- - ClassType: [https://samate.nist.gov/services/BF/BF/api/xml?classType=_MEM](https://samate.nist.gov/services/BF/BF/api/xml?ClassType=_MEM) </br>

  - Class, Operation, Operand: [https://samate.nist.gov/services/BF/BF/api/xml?class=MUS&class=DVL](https://samate.nist.gov/services/BF/BF/api/xml?class=MUS&class=DVL) </br>

  - Bug/Fault, Error/FinalError: [https://samate.nist.gov/services/BF/BF/api/xml?fault=NULL+Pointer](https://samate.nist.gov/services/BF/BF/api/xml?fault=NULL+Pointer) </br>

  - Attributes: [https://samate.nist.gov/services/BF/BF/api/xml?attribute=Sequential](https://samate.nist.gov/services/BF/BF/api/xml?Attribute=Sequential) </br>

  - Failure: [https://samate.nist.gov/services/BF/BF/api/xml?classType=_FLR](https://samate.nist.gov/services/BF/BF/api/xml?ClassType=_FLR) </br> -->

  _______________________________
  The BF API also generates graphical representation of BF:
  - BF PPT Excerpt

    [https://samate.nist.gov/services/BF/BF/ppt](https://samate.nist.gov/services/BF/BF/ppt)<br/>


- BF PPT Full &rarr; with [BF API Key](https://forms.gle/SRZyva5Vn1i4dQQ2A)

  https://samate.nist.gov/services/BF/BF/ppt?key=yourAPIkey 

_______________________________

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>