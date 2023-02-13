---
weight: 4
title: "VRF"
---
# Verification Bugs (VRF) Class

{{< hint danger >}}
**Note**

This class is still under development. The information will be updated soon.
{{< /hint >}}

### Definition

We define Verification Bugs (VRF) as follws:

{{< definition >}}The software does not properly sign data, check and prove source, or assure data is not altered{{< /definition >}}.

Note that "check" is for identity authentication, "prove" is for origin (signer) non-repudiation, and "not altered" is for integrity authentication.

See also the [Model of Cryptographic Store or Transfer.](/Classes/_CRY/Model.md)

### Type

High (semantic).

### Taxonomy

Fig. 1 depicts VRF causes, attributes and consequences.

{{< img src="images/VRFSample2.png" height="300" caption="Fig 1. Verification Bugs (VRF) Class" >}}

### Attributes

**Verified Data** – Secret, Public.

This is the data that needs verification. It may be confidential or public. Secret (confidential) data could be cryptographic hashes, secret keys, or keying material. Public data could be signed contract, documents, or public keys.

**Algorithm** – Hash Function + PRN, Message Authentication Code (MAC), Digital Signature.

Hash functions are used for integrity authentication. They may use PRN. MAC are symmetric key algorithms (one secret key per source/user), used for integrity authentication, identity authentication. It needs authentication code generation, source signs data, user gets tag for key and data, and verifies data by tag and key. Digital Signature is an asymmetric key algorithm (two keys), used for integrity and identity authentication, and origin (signer) non-repudiation. It needs key generation, signature generation, and signature verification. MAC and Digital Signature use KMN and recursively VRF.

**Security Service** – Data Integrity Authentication, Identity Authentication, Origin (Signer) Non-Repudiation.

This is the security service the verification process failed. Integrity Authentication is for data and keys. Identity Authentication and Origin Non-Repudiation are for source authentication.

### Causes

Weak key is a KMN fault.

### Sites

VRF is a high level class, so sites do not apply.

### Related BF Classes

BF classes related to VRF are: KMN, RND, ENC, ATN, IEX.

### Related CWEs and SFPs

CWEs related to Verification (although some are not VRF) are: [CWE-256](https://cwe.mitre.org/data/definitions/256.html), [CWE-293](https://cwe.mitre.org/data/definitions/293.html), [CWE-295](https://cwe.mitre.org/data/definitions/295.html), [CWE-296](https://cwe.mitre.org/data/definitions/296.html), [CWE-297](https://cwe.mitre.org/data/definitions/297.html), [CWE-347](https://cwe.mitre.org/data/definitions/347.html), [CWE-352](https://cwe.mitre.org/data/definitions/352.html).

The related SFP cluster is [SFP 17.2 Weak Cryptography under Primary Cluster: Cryptography](https://apps.dtic.mil/docs/citations/ADB381215)

BF Descriptions of VRF Related CWEs are provided [here](https://docs.google.com/document/d/1CPFI-_nsJKh1_sHcMrLT6CXBbKzGJ9faF1PLHKNt3yA/edit).

### Application

Application examples can be found here: [CVE-2001-1585](/Examples/CVE-2001-1585), [CVE-2015-2141](/Examples/CVE-2015-2141.md). 

### References

\[1\] Bojanova, I., Black, P. E., Yesha, Y., [Cryptography Classes in Bugs Framework (BF): Encryption Bugs (ENC), Verification Bugs (VRF), and Key Management Bugs (KMN)](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8234453). IEEE Software Technology Conference (STC 2017), NIST, Gaithersburg, USA. September 25-28, 2017.