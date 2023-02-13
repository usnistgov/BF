---
weight: 3
title: "TRN"
---
# True-Random Number Bugs (TRN) Class

{{< hint danger >}}
**Note**

This class is still under development. The information will be updated soon.
{{< /hint >}}

### Definition

We define True-Random Number Bugs (TRN) as:

{{< definition >}}The software generated output does not satisfy all use-specific true-randomness requirements{{< /definition >}}.

Note that the output sequence is of random bits, where values are obtained from one or more sources of entropy.

See also the [BF Model of Cryptographic Store or Transfer.](/Classes/_CRY/Model.md)

### Type

High (semantic).

### Taxonomy

Fig. 1 depicts TRN causes, attributes and consequences.

{{< img src="images/TRNSample2.png" height="400" caption="Fig 1. True-Random Number Bugs (TRN) Class" >}}

### Attributes

**Function** – Health Test, Conditioning, Mixing, Output, Converting.

**Algorithm** – Hash Function, Block Cipher, XOR, etc.

**Used For** –Seeding, Generation.

This is what the output sequence is used for. It could be used as a seed for a PRNG or for generation of passwords or cryptographic keying material (keys, nonces).

**Randomness Requirement** –Sufficient Entropy, Sufficient Space Size, Non-Inferable.

This is the failed requirement.

The notion of entropy used here is min-entropy, as the negative logarithm of the probability of the most likely outcome. Let X be a random variable such that the set of possible values that it can have is finite. Let `P` be the set of probabilities of X having those values. The min-entropy of `X` is defined as `–log2max(P)`, where `max()`finds the largest value in a set. The min-entropy is a measure of how difficult it is to guess the most likely entropy source output.

Space size is the number of elements of the space of possible outputs. If the number of different outputs is not sufficiently large, there is a vulnerability to a brute force attack. Non-inferable means one cannot recover from known (guessed) information anything about the TRBG output (CVE-2008-0141). TRBGs used for cryptography/security must satisfy the Non-Inferable randomness requirement.

### Related BF Classes

BF classes related to PRN are: [PRN](/Classes/_RND/PRN.md), [ENC](/Classes/_CRY/ENC.md), [VRF](/Classes/_CRY/VRF.md), [KMN](/Classes/_CRY/KMN.md), [IEX](/Old/Classes/IEX.md).

### Related CWEs and SFP

CWEs related to TRN are: [CWE-330](https://cwe.mitre.org/data/definitions/330.html), [CWE-331](https://cwe.mitre.org/data/definitions/331.html), [CWE-332](https://cwe.mitre.org/data/definitions/332.html), [CWE-333](https://cwe.mitre.org/data/definitions/333.html), [CWE-334](https://cwe.mitre.org/data/definitions/334.html),[CWE-337](https://cwe.mitre.org/data/definitions/337.html), [CWE-339](https://cwe.mitre.org/data/definitions/339.html), [CWE-340](https://cwe.mitre.org/data/definitions/340.html), [CWE-341](https://cwe.mitre.org/data/definitions/341.html), [CWE-342](https://cwe.mitre.org/data/definitions/342.html), [CWE-343](https://cwe.mitre.org/data/definitions/343.html).

The only related SFP cluster is SFP Primary Cluster: Predictability.

BF Descriptions of TRN Related CWEs are provided [here](https://docs.google.com/document/d/1UKGtzN5ix4gFbZ0uSJ4RTH_0iAm1wZd4jQ-bU8eUxfY/edit).

### Application

Application examples can be found here: [CVE-2008-0141](/Examples/CVE-2008-0141.md). 

### References

\[1\] Bojanova, I., Yesha, Y., Black, P. E., Randomness Classes in Bugs Framework (BF): True-Random Number Bugs (TRN) and Pseudo-Random Number Bugs (PRN). IEEE COMPSAC 2018, NII, Tokyo, Japan. July 23-27, 2018.