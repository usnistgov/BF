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

##### Force-Directed Graph Instructions
- `Drag a node to rearrange the graph.`
- `Click a node to pin it.`
- `Double click a node to remove the pin and let the node rearrange the graph.`
- `Ctrl+Right click and drag to zoom/unzoom.`

<script type="module">

  window.loadForceGraph = function(model, containerId = 'container') {
    const isNist = window.location.hostname.includes('nist.gov');
    const basePath = isNist ? '/BF' : '';
    const fullmodel = `${basePath}/js/Force Graph/Models/${model}`;
    const scriptUrl = `${basePath}/js/Force Graph/Controlers/FG_Controler.js?data=${encodeURIComponent(fullmodel)}&container=${containerId}`;

    return import(scriptUrl).catch(err => console.error(`Failed to load D3 graph script for model: ${model}`, err)
    );
  };
</script>

<!-- #### Same Operation
<div id="container"></div> 
<script type="module" defer>
  loadForceGraph('_INP_Operations.js');
</script> -->

#### Same Final Error
<div id="container"></div> 
<script type="module" defer>
  loadForceGraph('_INP_Final_Errors.js');
</script>

<!-- #### Same Triple
<div id="container"></div> 
<script type="module" defer>
  loadForceGraph('_INP_Same_Chains.js');
</script>   -->