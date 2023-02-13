---
weight: 4
title: "IEX"
---
# Information Exposure (IEX) Class

### Definition

We define Information Exposure (IEX) as:

{{< definition >}}Information is leaked through legitimate or side channels.{{< /definition >}}

Note that leakage to an entity that should not have information is included, not just leakage that is a security concern.

### Type

High (semantic).

### Taxonomy

Fig. 1 depicts IEX causes, attributes and consequences.

{{< img src="images/IEXModelv3.png" height="600" caption="Fig 1. Information Exposure (IEX) Class" >}}

### Attributes

The attributes of IEX are:

**Information**– Credentials, System Data, State Data, Cryptographic Data, Digital Documents, Personally Identifiable Data, Business Data, etc.

**Sensitivity** – High, Low.

This indicates the sensitivity level of leaked information. Highly sensitive information that is encrypted, or information that is non-sensitive would not result in harm if and exposed. Non-sensitive information includes public records, phone books, or online directories.

**Information State** – Stored, Used, Transferred.

This reflects if the information is in rest, in use, or in transit. Information can be in rest in files (e.g. ini, temp, configuration, log server, debug, cleanup, email attachment, login buffer, executable, backup, core dump, access control list, private data index), directories (Web root, FTP root, CVS repository), or on discs. Information can be in use by functions/programs -- source code (incl. comments); threads, registries, cookies, GUI, environmental variables. Data can be also in transit between processes or over a network.

**Information Size** – Little, Some, Huge.

This indicates how much information is leaked.

These distinctions are important in some cases. For instance, Heartbleed [\[2\]](#2) might not have been a severe problem if it just exfiltrated a little data. The fact that it may exfiltrate a huge amount of data greatly increases the chance that very important information will be leaked.

**Exposure** – Selective, Random.

This reflects if an attacker can choose what information to expose or where. Selective means the attacker can choose where and what to read. Random is like going through the trash (e.g. Heartbleed [\[2\]](#2)).

**Frequency** – Once, On-demand, On-timing, Rare, Often, Fast.

This indicates how often the exposure can/does occur. On-timing means depending on timing (e.g. in race condition). Note that Frequency * Size = Rate.

**Channel**– Legitimate, Diagnostic, Side, Covert.

This indicates the medium by which information was leaked.

**Use** – Direct, Indirect**.**

Direct means leaked information is valuable on its own. Indirect means it is only useful for launching other attacks.

### Causes

In the graph of causes, _Uncleared Before Release_ means information going from one control sphere back to the general pool. _Cross-Boundary Removal_ means information going from one control sphere to another control sphere. A control sphere is a set of resources and behaviors that are accessible to a single actor or a group of actors that all share the same security restrictions.

_Protect Sensitive Data_ also covers preparing sensitive data.

_Software/Hardware Behavior_ covers algorithms and execution. Observable behavior (time, power, cache lines) depends on the data.

_Improper Details_ include passwords, paths, SQL query structure/logic, etc. in error/exception, etc. messages.

ENC includes failure to encrypt (cleartext storage, recoverable format storage, cleartext transmission) and failure to properly encrypt (inadequate encryption strength, use of risky/broken cryptographic algorithm, missing required cryptographic step, use of hard-coded cryptographic key).

ATN/AUT includes improper authentication, credentials compromise, account access.

INJ includes adding commands and masking legitimate commands or information.

CIF is control of interaction frequency, including limiting the number of failed log in attempts. If there is no limit on the number of attempts, account names or passwords may be discovered by brute force attacks.

### Consequences

One information exposure (IEX) fault may lead to another information exposure. For instance, an information exposure of all client credit cards may have been caused by earlier obtaining the password for a privileged account.

### Related BF Classes

BF classes related to IEX are: BOF, INJ, CIF, ENC, VRF, KMN, TRN, PRN.

### Related CWEs and SFP

CWEs related to IEX are: [CWE-8](https://cwe.mitre.org/data/definitions/8.html), [CWE-11](https://cwe.mitre.org/data/definitions/11.html), [CWE-13](https://cwe.mitre.org/data/definitions/13.html)[, CWE-200](https://cwe.mitre.org/data/definitions/200.html), [CWE-201](https://cwe.mitre.org/data/definitions/201.html), [CWE-202](https://cwe.mitre.org/data/definitions/202.html), [CWE-203](https://cwe.mitre.org/data/definitions/203.html), [CWE-204](https://cwe.mitre.org/data/definitions/204.html), [CWE-205](https://cwe.mitre.org/data/definitions/205.html), [CWE-206](https://cwe.mitre.org/data/definitions/206.html), [CWE-207](https://cwe.mitre.org/data/definitions/207.html), [CWE-208](https://cwe.mitre.org/data/definitions/208.html)[, CWE-209](https://cwe.mitre.org/data/definitions/209.html), [CWE-210](https://cwe.mitre.org/data/definitions/210.html), [CWE-211](https://cwe.mitre.org/data/definitions/211.html), [CWE-212](https://cwe.mitre.org/data/definitions/212.html), [CWE-213](https://cwe.mitre.org/data/definitions/213.html), [CWE-214](https://cwe.mitre.org/data/definitions/214.html), [CWE-215](https://cwe.mitre.org/data/definitions/215.html), [CWE-226](https://cwe.mitre.org/data/definitions/226.html), [CWE-244](https://cwe.mitre.org/data/definitions/244.html), [CWE-260](https://cwe.mitre.org/data/definitions/260.html), [CWE-359](https://cwe.mitre.org/data/definitions/359.html), [CWE-377](https://cwe.mitre.org/data/definitions/377.html), [CWE-385](https://cwe.mitre.org/data/definitions/385.html), [CWE-402](https://cwe.mitre.org/data/definitions/402.html), [CWE-403](https://cwe.mitre.org/data/definitions/403.html), [CWE-433](https://cwe.mitre.org/data/definitions/433.html)[, CWE-488](https://cwe.mitre.org/data/definitions/488.html), [CWE-492](https://cwe.mitre.org/data/definitions/492.html), [CWE-495](https://cwe.mitre.org/data/definitions/495.html), [CWE-497](https://cwe.mitre.org/data/definitions/497.html), [CWE-498](https://cwe.mitre.org/data/definitions/498.html), [CWE-499](https://cwe.mitre.org/data/definitions/499.html), [CWE-524](https://cwe.mitre.org/data/definitions/524.html), [CWE-514](https://cwe.mitre.org/data/definitions/514.html), [CWE-515](https://cwe.mitre.org/data/definitions/515.html), [CWE-525](https://cwe.mitre.org/data/definitions/525.html), [CWE-527](https://cwe.mitre.org/data/definitions/527.html), [CWE-528](https://cwe.mitre.org/data/definitions/528.html), [CWE-529](https://cwe.mitre.org/data/definitions/529.html), [CWE-530](https://cwe.mitre.org/data/definitions/530.html), [CWE-532](https://cwe.mitre.org/data/definitions/532.html), [CWE-535](https://cwe.mitre.org/data/definitions/535.html)[, CWE-536](https://cwe.mitre.org/data/definitions/536.html), [CWE-537](https://cwe.mitre.org/data/definitions/537.html), [CWE-538](https://cwe.mitre.org/data/definitions/538.html), [CWE-539](https://cwe.mitre.org/data/definitions/539.html), [CWE-540](https://cwe.mitre.org/data/definitions/540.html), [CWE-541](https://cwe.mitre.org/data/definitions/541.html),[CWE-546](https://cwe.mitre.org/data/definitions/546.html), [CWE-548](https://cwe.mitre.org/data/definitions/548.html), [CWE-550](https://cwe.mitre.org/data/definitions/550.html), [CWE-552](https://cwe.mitre.org/data/definitions/552.html), [CWE-555](https://cwe.mitre.org/data/definitions/555.html), [CWE-598](https://cwe.mitre.org/data/definitions/598.html), [CWE-612](https://cwe.mitre.org/data/definitions/612.html), [CWE-615](https://cwe.mitre.org/data/definitions/615.html), [CWE-642](https://cwe.mitre.org/data/definitions/642.html), [CWE-651](https://cwe.mitre.org/data/definitions/651.html), [CWE-668](https://cwe.mitre.org/data/definitions/668.html).

There are many related CWEs because information exposure can be the consequence of many weaknesses.

The only related SFP cluster is SFP Primary Cluster: Information Leak.

BF Descriptions of IEX Related CWEs are provided [here](https://docs.google.com/document/d/1OEVDu_4NhQzTkUrZA9UoCfpVf2x8SlOnOq6_YA4N2Do/edit).

### Application

Application examples are provided [here](/Old/Examples/IEX.md).

### References

\[1\] I. Bojanova, P. E. Black, Y. Yesha, and Y. Wu, “The Bugs Framework (BF): A Structured approach to express bugs”, Proceedings of IEEE International Conference on Software Quality, Reliability and Security (QRS), 2016, , pp. 175-182.

\[2\] “The Heartbleed Bug.” \[Online\]. Available: [http://heartbleed.com/](http://heartbleed.com/).

\[3\] Common Weakness Enumeration. “CWE Glossary.” \[Online\]. Available: [https://cwe.mitre.org/documents/glossary/index.html#ControlSphere](https://cwe.mitre.org/documents/glossary/index.html).