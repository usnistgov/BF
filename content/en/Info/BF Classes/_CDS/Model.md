---
weight: 1
title: "Bugs Model"
---
# BF Crypto Data Security Model<br/>_`Irena Bojanova, Primary Investigator and Lead, Bugs Framework (BF)`_

Cryptography comprises techniques for scrambling or disguising data so it is available only to whom can restore them to their original form. Cryptography provides a strong basis for keeping data secret, for verifying data integrity, and for verifying data source. Two main types of cryptographic algorithms are: 

*   Symmetric algorithms, in which the same key value is used in both the encryption and decryption calculations: a shared key.
*   Asymmetric algorithms, in which a different key is used in the decryption calculation than was used in the encryption calculation: a private key and a public keys, correspondingly.

A cryptographic storage or transfer protocol may involve multiple stages of agreeing on encryption algorithms, establishing public and private keys, creating session keys, and digitally signing texts for verification. 

Crypto Data Security bugs could be introduced at any of the _key management_, _encryption/decryption_, and _crypto verification of data or source_ phases. It important to note though, that encryption may use key management, which itself uses encryption and verification.

The BF Data Security Bugs Model helps identify where in these phases bugs could occur (Figure 1). The phases correspond to the BF crypto bugs classes: Key Management Bugs (KMN), Cipher Bugs (CPH), and Data/Source Crypto Verification Bugs (DSV). All crypto operations are grouped by phase. The presented operations flow helps in identifying possible chains of bugs/weaknesses.

<br/><br/>
{{< img src="images/BF Models/_CDS.svg" caption="BF Crypto Data Security Bugs Model. Comprises phases, corresponding to the BF classes KMN, CPH, and DSV. Shows the crypto operations flow: black arrows – the main flow; red arrows – flow for when plaintext is signed or hashed and then encrypted. Encryption may occur with verification, or it may precede verification, if the ciphertext is signed or hashed. Encryption uses key management, and key management may use encryption and verification to handle keys. The dashed blocks show sending and receiving entities" >}}
<br/>
The operations under KMN are on generating, selecting, storing, distributing, and destroying cryptographic keys. A particular protocol may use any or all of these operations. Key management could be by a third party, the source, or the user - thus the KMN area intersects the Source and User areas. A third-party certificate authority (CA) distributes public keys in signed certificates. Key management often uses a recursive round of encryption and decryption, and verification to establish a shared secret key or session key before the actual plaintext is handled.

The operations under CPH are on encrypting plain text and decrypting cipher text. Encryption is by the source, decryption is by the user. The encryption/decryption algorithm may be symmetric -- i.e., uses the same key for both, or asymmetric, -- i.e., uses a pair of keys, one to encrypt and the other to decrypt. Public key cryptosystems are asymmetric. Ciphertext may be sent directly to the user and verification may accompany it. The red arrows on Figure 1 show the flow when plaintext is signed or hashed and then encrypted.

The operations under DSV are on signing and verifying. Verification takes a key and either plaintext or ciphertext, signs or hashes it, then passes the result to the user. The user uses the same key or the other key from the key-pair to verify data integrity or source. Note that hash alone without any other mechanism cannot be used to verify source or to protect data integrity against attackers. However, it can be used to protect data integrity against channel errors.

In the cases of symmetric encryption (see Figure 1), one secretly shared key (shKey) is used. The source encrypts with shKey, and the user decrypts also with shKey. In the cases of asymmetric encryption, pairs of mathematically related keys are used. The source pair is a public key (pbKeySrc) and a private key (prKeySrc); the user pair is pbKeyUsr and prKeyUsr. The source encrypts with pbKeyUsr and signs with prKeySrc. The user decrypts with prKeyUsr and verifies with pbKeySrc.