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

Going backward from the failure, the BFVUL tool builds a connected acyclic undirected graph (i.e., a tree whose root is the failure) of all possible weakness chains with type-based backward fault type↤error type match and fault value↤error value propagation or --- for weaknesses of the same BF class type --- direct match. The chains undergo scrutiny to ensure further alignment with the BF formal language semantics, the causation matrices of meaningful <cause, operation>⟶consequence within weakness relations, the graphs of meaningful (operation₁, …, operationₙ) bug or fault state paths, and the matrices of meaningful consequence↷cause between weaknesses propagations. The identified failure and final weakness triple dramatically reduce the number of generated possible paths in the acyclic graph. This is also a good starting point for specifying vulnerabilities that are not recorded in the CVE.

The CVE Code with Fix can then be examined by security researchers or utilizing AI and compared with the generated chains of weakness triples to pinpoint the unique unambiguous BF vulnerability specification. For that, the BF tool functionality and automated code analysis --- including via large language models (LLMs) --- can be used.

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
<l style="font-size: 16px; color: #7D3368"> Bojanova I (2024) Bugs Framework (BF): Formalizing Cybersecurity Weaknesses and Vulnerabilities. (National Institute of Standards and Technology, Gaithersburg, MD), NIST Special Publication (SP), NIST SP 800-231. [https://doi.org/10.6028/NIST.SP.800-231](https://doi.org/10.6028/NIST.SP.800-231)</l>  <br/>

______________________________________
Provide your indended BF use via the [BF Form](https://forms.gle/SRZyva5Vn1i4dQQ2A).