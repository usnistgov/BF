---
weight: 1
bookCollapseSection: false
title: "Why BF"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# Why BF? <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_

Once fully developed, the Bugs Framework will have the expressive power to clearly describe any software or hardware bug/weakness, underlying any vulnerability. It is being built as a formal classification system that aims to augment the current state or the art weakness and vulnerability repositories:

*   [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/) – a community-developed list of software and hardware weaknesses types.
*   [Common Vulnerabilities and Exposures (CVE)](https://cve.mitre.org/) – a catalog of publicly disclosed cybersecurity vulnerabilities. Over 25,000 were documented in 2022 only.
*   [National Vulnerabilities Database (NVD)](https://nvd.nist.gov/) – the US government repository that links all CVEs to CWEs.

## Repository Problems

The current state of the art in describing security weaknesses and vulnerabilities are the CWE and CVE. The current state of the art in labeling security weaknesses and vulnerabilities is the NVD, which assigns to a CVE the CWE weakness type that most closely matches the vulnerability. The Known Exploited Vulnerabilities (KEV) catalog is also closely related to the CVE. 

The CWE and CVE are widely used. The CWE is a community-developed list of software and hardware weakness types. It was developed to address the issue of categorizing software weaknesses and establish acceptable definitions and descriptions of these common weaknesses and recently added support for hardware weaknesses. Each CWE entry is assigned a `CWE-x` ID (identifier), where `x` is one to four digits. It provides a weakness-type description, an extended description, modes of introduction, possible mitigations, detection methods, and demonstrative examples. 

The CVE is a catalog of publicly disclosed security vulnerabilities. It was initiated to address the problem of having no common naming convention and no common enumeration of the vulnerabilities in disparate databases. Each CVE entry is assigned a `CVE-yyyy-x` ID, where `yyyy` is the year of disclosure and `x` is a unique sequential number. Each CVE entry provides a vulnerability description, references to reports, and possibly links to proof of concept and code. 

The CWE and CVE adopted a one-dimensional list (i.e., enumeration) approach to organizing the entries by unique IDs with natural language descriptions. The CWE added tree-based pillar, class, base, variant, and compound abstractions. Both repositories are regularly refined, and new weakness types, vulnerabilities, and related content are added. 

The NVD maps CVE entries to CWE entries and assigns Common Vulnerability Scoring System (CVSS) \cite{CVSS-PM, CVSS} severity scores. The KEV catalog organizes publicly exploited CVEs prioritized for remediation, although they are not necessarily the most severe. 

However, the CWE hierarchical structure implies that the weakness types are interdependent and may be too broad, not orthogonal, and ambiguous. Many of the CWE and CVE descriptions are not sufficient, accurate, or precise enough; have unclear causality; and include programming language and domain-specific notions. The CWE has gaps and overlaps in coverage, and while some gaps are being identified, new overlaps may be created. Many CVEs do not describe the entire chain of weaknesses underlying the vulnerability. Some list the final error at the sink as the root cause instead of the bug or hardware-induced fault that starts the chain. Focusing on the final error helps identify mitigation techniques, but the actual root cause must be known and fixed to resolve the vulnerability. In the case of CVEs that overlap by root cause, fixing that one root cause would resolve all of them. These CWE and CVE challenges propagate to the NVD and KEV and may lead to imprecise or wrong CWE-to-CVE assignments by NVD. 

Additionally, the CWE and CVE do not exhibit strict methodologies for tracking the weaknesses underlying a vulnerability, systematic comprehensive vulnerability labeling, or backward root cause identification from a security failure. There are no tools to aid the creation and visualization of weakness and vulnerability descriptions (see Table \ref{tab:repository-challenges}). 

Table 1. CWE, CVE, and NVD challenges

| Repository | Imprecise Descriptions | Unclear Causality | Gaps | Overlaps | Wrong CWE Assignments | No Tracking | No Description Tools |
|------------|------------------------|--------------------|------|----------|------------------------|-------------|-----------------------|
| CWE        | ✓                      | ✓                  | ✓    | ✓        |                        | ✓           | ✓                     |
| CVE        | ✓                      | ✓                  |      | ✓        |                        | ✓           | ✓                     |
| NVD        | ✓                      | ✓                  |      | ✓        | ✓                      | ✓           | ✓                     |


The imprecise descriptions and lack of explainability make CWEs and CVEs difficult to use in modern cybersecurity research [Malzahn et al., 2020]. For example, the description of [CWE-502](https://cwe.mitre.org/data/definitions/502.html) mixes the notions of validation (syntax check) and verification (semantics check), for which BF defines two distinct weakness classes [INP]. The descriptions of some CWEs reveal possible causing weaknesses and even chains of weaknesses, which could be helpful but may also imply that these are the only possible causing weaknesses. They also introduce terms that are unrelated to the main weakness and may mislead experts and automated analysis about the single weakness that the CWE is meant to describe. Augmenting the CWE and CVE natural language descriptions with unambiguous formal specifications that adhere to within and between weaknesses causation rules will make them more suitable for algorithms and as comprehensively labeled datasets for training AI models [Labeling Datasets].

Unclear causality in CVEs leads to incorrect CWE assignments. For example, in the case of [CVE-2018-5907](https://nvd.nist.gov/vuln/detail/CVE-2018-5907), the lack of input validation leads to integer overflow and then buffer overflow [INP]. However, the NVD labels it with [CWE-190](https://cwe.mitre.org/data/definitions/190.html): Integer Overflow or Wraparound, even though the root cause is [CWE-20](https://cwe.mitre.org/data/definitions/20.html): Improper Input Validation. The entire chain is CWE-20 → CWE-190 → [CWE-119](https://cwe.mitre.org/data/definitions/119.html), and the last one is "Improper Restriction of Operations within the Bounds of a Memory Buffer." [CVE-2014-0160](https://nvd.nist.gov/vuln/detail/CVE-2014-0160) Heartbleed [Heartbleed] lists the final error at the sink — buffer over-read — as the root cause, while it is missing input verification that leads to pointer reposition over the upper bound and then to buffer over-read. For lack of a better match, NVD assigns the broader [CWE-125](https://cwe.mitre.org/data/definitions/125.html), which covers both under-lower-bound and over-upper-bound reads from a buffer.

CVEs that have the same root cause are also difficult to identify. For example, the [CVE-2016-7523](https://nvd.nist.gov/vuln/detail/CVE-2016-7523) and [CVE-2016-7524](https://nvd.nist.gov/vuln/detail/CVE-2016-7524), [CVE-2016-7518](https://nvd.nist.gov/vuln/detail/CVE-2016-7518) and [CVE-2017-6500](https://nvd.nist.gov/vuln/detail/CVE-2017-6500), and [CVE-2019-13295](https://nvd.nist.gov/vuln/detail/CVE-2019-13295) and [CVE-2019-13297](https://nvd.nist.gov/vuln/detail/CVE-2019-13297) couples each have the same bug with the last couple patched in two versions of the product via two different commits [Crashes]. As the chains are incomplete for many CVEs, there is no way to go backward from the failure to reveal the root cause.


The BF addresses the challenges with the CWE and CVE descriptions via its orthogonal, multidimensional, and context-free classification structure. The BF weakness and vulnerability specifications provide formal augmentation to the CWE, CVE, and NVD entries. 