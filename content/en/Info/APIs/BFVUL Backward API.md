---
weight: 3
bookCollapseSection: false
title: "BFVUL Backward API"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# BFVUL Backward API <br/>_`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~~`_

//to be added//

<!-- The BFVUL Backward API provides the BFVUL Tool backwards bugs identification functionality. 

The BF formalism supports a deeper understanding of vulnerabilites as chains of weaknesses and allows for backward bug identficaton from a failure. It enables the development of new statc and dynamic analysis, simulaton, and emulaton algorithms. AI or formal methods-enabled capabilites could be used to identfy bugs and detect, analyze, prioritze, and resolve or mitgate vulnerabilites (i.e., fix the bug or a fault of each vulnerability, respectvely) to secure critcal infrastructure and supply chains.

- BFVUL Backwards --- with BF API Key &rarr; [Inquiry](https://forms.gle/SRZyva5Vn1i4dQQ2A)

  https://samate.nist.gov/services/BF/BF/api/xml?key=yourAPIkey </br>
  https://samate.nist.gov/services/BF/BF/api/xml?key=yourAPIkey

  C# code

      string apiUrl = "https://samate.nist.gov/services/BF/BFVULBackward/api";
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


BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/> -->