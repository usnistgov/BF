---
weight: 3
title: "KMN"
---
# Key Management Bugs (KMN) Class

{{< hint danger >}}
**Note**

This class is still under development. The information will be updated soon.
{{< /hint >}}

### Definition

We define Key Management Bugs (KMN) as follows:

{{< definition >}}The software does not properly generate, store, distribute, use, or destroy cryptographic keys and other keying material{{< /definition >}}.

See also the [Model of Cryptographic Store or Transfer.](/Classes/_CRY/Model.md)

### Type

High (semantic).

### Taxonomy

Fig. 1 depicts KMN causes, attributes and consequences.

{{< img src="images/KMNSample2.png" height="400" caption="Fig 1. Key Management Bugs (KMN) Class" >}}

### Attributes

**Cryptographic Data** – Hashes, Keying Material, Digital Certificate.

**Algorithm** – Hash Function + RND, MAC, RSA, Digital Signature, etc.

Different cryptosystems have their own specific algorithm(s).

**Operation** – Generate/Select, Store, Distribute, Use, Destroy.

This is the failed operation. Store includes update and recover. Distribute includes key establishment, transport, agreement, wrapping, encapsulation, derivation, confirmation, shared secret creation; uses ENC and KMN (reclusively). KMN is a high level class, so sites do not apply.

### Causes

IEX of Key includes hardcoded key.

### Sites

KMN is a high level class, so sites do not apply.

### Related BF Classes

BF classes related to KMN are: ENC, RND, VRF, IEX.

### Related CWEs and SFPs

CWEs related to KMN are CWE-321, CWE-322, CWE-323, CWE-324.

The related SFP clusters are: SFP 17.2 Weak Cryptography under Primary Cluster: Cryptography and SFP 4.13 Digital Certificate under Primary Cluster: Authentication. Note that, some of the CWEs listed in 17.2 are not KMN.

BF Descriptions of KMN Related CWEs are provided [here](https://docs.google.com/document/d/1bKen0jWtBEn1Owpzg5aC7Hww_rVT8Zm7zimP9Irq7RM/edit).

### Application

Application examples can be found here: [CVE-2016-1919](/Examples/CVE-2016-1919), [CVE-2015-0204](/Examples/CVE-2015-0204.md). 

### References

\[1\] Bojanova, I., Black, P. E., Yesha, Y.,[Cryptography Classes in Bugs Framework (BF): Encryption Bugs (ENC), Verification Bugs (VRF), and Key Management Bugs (KMN)](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8234453). IEEE Software Technology Conference (STC 2017), NIST, Gaithersburg, USA. September 25-28, 2017.