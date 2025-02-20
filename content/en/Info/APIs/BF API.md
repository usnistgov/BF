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

The current BF Taxonomy comprizes the BF Input/Output check(_INP), Memory Corruption/Dusclosure (_MEM), and Data Type (_DAT) Weakness Class Types and the BF Failure (_FLR) Class Type.

The BF API generates and filters the BF Taxonomy in XML and JSON formats.

- BF excerpt --- without BF API Key

  [https://samate.nist.gov/services/BF/BF/api/xml](https://samate.nist.gov/services/BF/BF/api/xml) </br>
  [https://samate.nist.gov/services/BF/BF/api/json](https://samate.nist.gov/services/BF/BF/api/json)

- BF full  --- with BF API Key &rarr; [Inquiry](https://forms.gle/SRZyva5Vn1i4dQQ2A)

  https://samate.nist.gov/services/BF/BF/api/xml?key=yourAPIkey </br>
  https://samate.nist.gov/services/BF/BF/api/xml?key=yourAPIkey

  C#

      string apiUrl = "https://samate.nist.gov/services/BF/BF/api/xml";
      string username = "YourName";
      string apiKey = "YourAPIKey";

      using (HttpClient client = new HttpClient())
      {
          client.DefaultRequestHeaders.Add("usernameH", username);
          client.DefaultRequestHeaders.Add("apiKeyH", apiKey);

          HttpResponseMessage response = await client.GetAsync(apiUrl);

          if (response.IsSuccessStatusCode)
          {
              string responseData = await response.Content.ReadAsStringAsync();
              Console.WriteLine("Response Data: " + responseData);
          }
          else
              Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
      }


  BF can be queried by BF taxon values --- e.g., 

  - ClassType: [https://samate.nist.gov/services/BF/BF/api?classType=_MEM](https://samate.nist.gov/services/BF/BF/api?ClassType=_MEM) </br>

  - Class, Operation, Operand: [https://samate.nist.gov/services/BF/BF/api?class=MUS&class=DVL](https://samate.nist.gov/services/BF/BF/api?class=MUS&class=DVL) </br>

  - Bug/Fault, Error/FinalError: [https://samate.nist.gov/services/BF/BF/api?fault=NULL+Pointer](https://samate.nist.gov/services/BF/BF/api?fault=NULL+Pointer) </br>

  - Attributes: [https://samate.nist.gov/services/BF/BF/api?Attribute=Sequential](https://samate.nist.gov/services/BF/BF/api?Attribute=Sequential) </br>

  - Failure: [https://samate.nist.gov/services/BF/BF/api?classType=_FLR](https://samate.nist.gov/services/BF/BF/api?ClassType=_FLR) </br>
  
BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>