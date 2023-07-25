---
weight: 1
title: "Model"
---
# BF Model of Cryptographic Store or Transfer <br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework Project`_

### Cryptography

Cryptography is a broad, complex, and subtle area. It incorporates many clearly separate processes, such as encryption/decryption, verification of data or source, and key management. There are bugs if the software does not properly transform data into unintelligible form, verify authenticity or correctness, manage keys, or perform other related operations. Some transformations require keys, for example encryption and decryption, while others do not, for example secret sharing. Authenticity covers integrity of data, identity of data source, origin for non-repudiation, and content of secret sharing. Correctness is verified for uses such as zero-knowledge proofs. Cryptographic processes use particular algorithms to achieve particular security services.

Examples of attacks are spoofing messages, brute force attack, replaying instructions, timing attack, chosen plaintext attack, chosen ciphertext attack, and exploiting use of weak or insecure keys.

We use cryptographic store or transfer to illustrate our ENC, VRF, and KMN classes of bugs. Note that these classes may appear in many other situations such as self-sovereign identities, block ciphers, and threshold cryptography. We focus on transfer (or store) because it is well known and it is what most people think of when "cryptography" is mentioned. We define bugs in cryptographic store or transfer as: The software does not properly encrypt/decrypt, verify, or manage keys for data to be securely stored or transferred.

### BF Crypto Bugs Model

A modern, secure, flexible cryptographic storage or transfer protocol likely involves subtle interaction between encryption, verification, and key management processes. It may involve multiple stages of agreeing on encryption algorithms, establishing public and private keys, creating session keys, and digitally signing texts for verification. Thus, encryption may use key management, which itself uses encryption and verification. The following figure presents a model of these recursive interactions and where potentially the corresponding ENC, VRF, KMN, and other BF bugs could happen. The rounded rectangles indicate the boundaries of the classes. The dashed ones show sending and receiving entities.
<br/><br/>
{{< img src="images/BF Models/_CRY.svg" caption="Our Model of Cryptographic Store or Transfer Bugs. Encryption may occur in tandem with Verification or it may precede Verification serially, if the ciphertext is signed or hashed. Encryption uses Key Management, and Key Management likely uses Encryption and Verification to handle keys." >}}
<br/>
**KMN** is a class of bugs related to key management. Key management comprises key generation, selection, storage, retrieval and distribution, and determining and signaling when keys should be abandoned or replaced. A particular protocol may use any or all of these operations. Key management could be by a third party, the source, or the user - thus the KMN area intersects the Source and User areas. A third-party certificate authority (CA) distributes public keys in signed certificates. Key management often uses a recursive round of encryption and decryption, and verification to establish a shared secret key or session key before the actual plaintext is handled.

**ENC** is a class of bugs related to encryption and decryption. Encryption is by the source, decryption is by the user. The encryption/decryption algorithm may be symmetric -- i.e., uses the same key for both, or asymmetric,-- i.e., uses a pair of keys, one to encrypt and the other to decrypt. Public key cryptosystems are asymmetric. Ciphertext may be sent directly to the user, and verification accompanies it separately. The red line is a case where plaintext is signed or hashed and then encrypted.

**VRF** is a class of bugs related to verification. Verification takes a key and either plaintext or ciphertext, signs or hashes it, then passes the result to the user. The user uses the same key or the other key from the key-pair to verify data integrity or source. Note that hash alone without any other mechanism cannot be used to verify source or to protect data integrity against attackers. However, it can be used to protect data integrity against channel errors.

In the cases of symmetric encryption, one secretly shared key (shKey) is used. The source encrypts with shKey, and the user decrypts also with shKey. In the cases of asymmetric encryption, pairs of mathematically related keys are used. The source pair is pbKeySrc and prKeySrc; the user pair is pbKeyUsr and prKeyUsr. The source encrypts with pbKeyUsr and signs with prKeySrc. The user decrypts with prKeyUsr and verifies with pbKeySrc.