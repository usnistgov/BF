---
weight: 5
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

# BFVUL Backward API <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

The BFVUL Backward API provides the BFVUL Tool backwards bugs identification functionality. 

The BF formalism supports a deeper understanding of vulnerabilites as chains of weaknesses and allows for backward bug identficaton from a failure. It enables the development of new statc and dynamic analysis, simulaton, and emulaton algorithms. AI or formal methods-enabled capabilites could be used to identfy bugs and detect, analyze, prioritze, and resolve or mitgate vulnerabilites (i.e., fix the bug or a fault of each vulnerability, respectvely) to secure critcal infrastructure and supply chains.

- UI &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required:

  [https://samate.nist.gov/services/BF/BFVUL.xml/BFBackward/IEX?finalError=Query%20Injection](https://samate.nist.gov/services/BF/BFVUL.xml/BFBackward/IEX?finalError=Query%20Injection) </br>
  [https://samate.nist.gov/services/BF/BFVUL.json/BFBackward/IEX?finalError=Query%20Injection](https://samate.nist.gov/services/BF/BFVUL.json/BFBackward/IEX?finalError=Query%20Injection)

- API &rarr; [Key](https://forms.gle/SRZyva5Vn1i4dQQ2A) required: <br/>

  C#

      HttpClient client = new HttpClient() { BaseAddress = new Uri("https://samate.nist.gov/services/BF") };

      //replace YOUR_USER_NAME and YOUR_KEY
      client.DefaultRequestHeaders.Add("user", YOUR_USER_NAME);
      client.DefaultRequestHeaders.Add("key", YOUR_KEY);

      using var request = new HttpRequestMessage(HttpMethod.Post, "BFVUL/BFBackward/IEX/api") { Content = content };
      request.Headers.Accept.Add(MediaTypeNames.Application.Xml); //for XML
      //request.Headers.Accept.Add(MediaTypeNames.Application.Json); //for JSON

      var response = await client.SendAsync(request);
      response.EnsureSuccessStatusCode();
      var result = await response.Content.ReadAsStringAsync();

  Python
      
    //to be added//

BF CITATION: <br/>
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>