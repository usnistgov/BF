---
weight: 2
title: "ENC"
---
# Encryption/Decryption Bugs (ENC) Class

{{< hint danger >}}
**Note**

This class is still under development. The information will be updated soon.
{{< /hint >}}

### Definition

We define Encryption/Decryption Bugs (ENC) as follows:

_Encryption Bugs:_ {{< definition >}}The software does not properly transform sensitive data (plaintext) into unintelligible form (ciphertext) using a cryptographic algorithm and key(s){{< /definition >}}.

_Decryption Bugs:_ {{< definition >}}The software does not properly transform ciphertext into plaintext using a cryptographic algorithm and key(s){{< /definition >}}.

Note that "transform" is for confidentiality.

See also the [Model of Cryptographic Store or Transfer.](/Classes/_CRY/Model.md)

### Type

High (semantic).

### Taxonomy

Fig. 1 depicts ENC causes, attributes and consequences.

{{< img src="images/ENCSample2.png" height="300" caption="Fig 1. Encryption/Decryption Bugs (ENC) Class" >}}

### Attributes

**Sensitive Data** – Credentials, System Data, State Data, Cryptographic Data, Digital Documents.

This is secret (confidential) data. Credentials include Password, Token, Smart Card, Digital Certificate, Biometrics (fingerprint, hand configuration, retina, iris, voice.) System Data could be configurations, logs, Web usage. Cryptographic Data is hashes, keys, keying material. Keying material is cryptographic keys, initialization vectors, shared secrets, domain parameters, random bits (seeds, salts, nonces).

**Data State** – Stored, Transferred.

This reflects if data is in rest or use, or if data is in transit. Secure store is needed for data that is in rest or use from files (e.g. ini, temp, configuration, log server, debug, cleanup, email attachment, login buffer, executable, backup, core dump, access control list, private data index), directories (Web root, FTP root, CVS repository), registry, cookies, source code & comments, GUI, environmental variables. Secure transfer is needed also for data in transit between processes or over a network.

**Algorithm** – Symmetric, Asymmetric.

This is the key encryption scheme used to securely store/transfer sensitive data. Symmetric (secret) key algorithms (e.g. Serpent, Blowfish) use one shared key. Asymmetric (public) key algorithms (e.g. Diffie-Hellman, RSA) use two keys (public, private).

**Security Service(s)** – Confidentiality (and in some modes of encryption Integrity and Identity Authentication).

This is the security service that was failed by the encryption process. Confidentiality is the main security service provided by encryption. Those marked with ‘~’ are only for some specific modes of encryption.

### Causes

In the graph of causes, modification of algorithm is remove/change or add a cryptographic step. Improper algorithm or step could be missing, inadequate, weak, risky/broken. Insecure mode of operation leads to weak encryption algorithm. Consequences

### Sites

ENC is a high level class, so sites do not apply.

### Related BF Classes

BF classes related to ENC are: [KMN](/Classes/_CRY/KMN.md), RND, and IEX.

### Related CWEs and SFP

CWEs related to Encryption (although some are not ENC) are: [CWE-256](https://cwe.mitre.org/data/definitions/256.html), [CWE-257](https://cwe.mitre.org/data/definitions/257.html), [CWE-261](https://cwe.mitre.org/data/definitions/261.html), [CWE-311](https://cwe.mitre.org/data/definitions/311.html), [CWE-312](https://cwe.mitre.org/data/definitions/312.html), [CWE-313](https://cwe.mitre.org/data/definitions/313.html), [CWE-314](https://cwe.mitre.org/data/definitions/314.html), [CWE-315](https://cwe.mitre.org/data/definitions/315.html), [CWE-316](https://cwe.mitre.org/data/definitions/316.html), [CWE-317](https://cwe.mitre.org/data/definitions/317.html), [CWE-318](https://cwe.mitre.org/data/definitions/318.html), [CWE-325](https://cwe.mitre.org/data/definitions/325.html), [CWE-326](https://cwe.mitre.org/data/definitions/326.html), [CWE-327](https://cwe.mitre.org/data/definitions/327.html), [CWE-329](https://cwe.mitre.org/data/definitions/329.html), [CWE-780](https://cwe.mitre.org/data/definitions/780.html).

Related SFP clusters are [SFP 17.1 Broken Cryptography and SFP 17.2 Weak Cryptography under Primary Cluster: Cryptography](https://apps.dtic.mil/docs/citations/ADB381215).

BF Descriptions of ENC Related CWEs are provided [here](https://docs.google.com/document/d/11wRJtjUUfwN1gJuFVGvalRrebDndnqIgXsCrgpHfDzc/edit).

### Application

Application examples can be found here: [CVE-2007-5460](/Examples/CVE-2007-5460.md), [CVE-2002-1697](/Examples/CVE-2002-1697.md). 

### References

\[1\] Bojanova, I., Black, P. E., Yesha, Y.,[Cryptography Classes in Bugs Framework (BF): Encryption Bugs (ENC), Verification Bugs (VRF), and Key Management Bugs (KMN)](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8234453). IEEE Software Technology Conference (STC 2017), NIST, Gaithersburg, USA. September 25-28, 2017.