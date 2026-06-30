---
weight: 1
title: "D3 Input/Output Check CWEs"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# <l style="color: #6366f1">Input/Output Check CWEs to BF Classes <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_</l>

### Same Chains

<div style="text-align: right;">
    <button id="save-btn" type="button" style="width: 160px;">Save SVG</button>
</div>

<div style="text-align: right; margin-top: 10px;">
    <button id="reload-btn" type="button" style="width: 160px;">Reset Simulation</button>
</div>

<div style="text-align: right; margin-top: 10px;">
    <button id="unpin-btn" type="button" style="width: 160px;">Unpin All Nodes</button>
</div>

<div id="container"></div>
<script type="module">
  const isNist = window.location.hostname.includes('nist.gov');
  const scriptPath = isNist ? '/BF/js/CWEBF_INP-Same-Chains.js' : '/js/CWEBF_INP-Same-Chains.js';  
  // Dynamically import the module directly into memory
  import(scriptPath).catch(err => console.error("Failed to load D3 graph script:", err));
</script>