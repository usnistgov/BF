---
weight: 1
title: "Model"
---
# BF Randomness Model

### Randomness

Randomness has application in many fields, including cryptography, simulation, statistics, politics, science, and gaming. Any specific use has its own requirements for randomness – e.g., random bit generation for cryptography or security purposes has stronger requirements than generation for other purposes. For cryptography or security purposes, the National Institute of Standards and Technology (NIST) recommends use of cryptographically secure Pseudo-Random Bit Generators (PRBGs). They are subject to the requirements in ![](../images/lockicon.png)NIST SP 800-90A, NIST SP 800-90B and NIST SP 800-90C. Satisfying the requirements for a particular use can be surprisingly difficult.

Weaknesses (bugs) in random number generators (RNGs) may lead to wrong results from the algorithms that use the generated numbers or allow attackers to recover secret values, such as passwords and cryptographic keys. Formalization of randomness bugs would help researchers and practitioners identify them and avoid security failures.

### Randomness Generation

We separate randomness generation in two distinct processes: true-random number generation and pseudo-random number generation. The former is nondeterministic true-randomness generation (full entropy), while the latter is deterministic pseudo-randomness generation.

True-random number generation uses entropy sources, while pseudo-random number generation uses true-random numbers as seeds. It is possible for a PRBG to use non-random seeds (e.g., for generating random numbers for simulation or game algorithms). PRBGs are used to extend the true-random seeds, produced from a True-Random Bit Generator (TRBG) output – if the seed has length `n`, the output of the PRBG can have length `m`, where `m>n`. However, a PRBG cannot increase the entropy of its seed.

Examples of randomness related attacks are direct RSA common factor attack cryptanalytic attack, input based attack, state compromise attack. For that we have developed a general descriptive model of randomness and two randomness classes as part of the Bugs Framework (BF).

### The BF Randomness Model

The following figure presents our BF randomness bugs model, showing in which software components of TRNG and Pseudo-Random Number Generator (PRNG) bugs can occur. It is a descriptive and not as a prescriptive model. It should not be used as a model for construction of Random Bit Generators (RBGs). (![](../images/lockicon.png) NIST SP 800-90C specifies construction of RBGs using the mechanisms and entropy sources described in SP 800-90A and SP 800-90B, respectively.) TRN is the name of our BF class of True-Random Number Bugs. PRN is the name of our BF class of Pseudo-Random Number Bugs. The BF randomness model helps identify where in the corresponding bugs could occur. TRN covers bugs related to entropy sources, TRBG, and TRNG. PRN covers bugs related to entropy pools, PRBG, and PRNG. Although, output from the former process may be used as input to the latter (see the red arrow in Fig. 1), they are distinct from the point of view that bugs related to each have different causes, attributes, and consequences. The random bits are optionally converted in a pseudo-random number based on the range that applications provide as an argument.

NIST SP 800-90A/B/C give specific requirements and architectures for approved RBGs.

{{< img src="images/RND.png" height="650">}}
{{< rawhtml >}}
<small>
          <div class="caption-container">
            
              <div class="col">
                <div style="display: inline-block; text-align:left;">(TRN – True-Random Number Bugs<br>
                  PRN – Pseudo-Random Number Bugs</div>
              </div>
              <div class="col">
                <div style="display: inline-block; text-align:left;">TRBG: True-Random Bit Generator<br>
                  TRNG: – True-Random Number Generator
                </div>
              </div>
              <div class="col">
                <div style="display: inline-block; text-align:left;">PRBG – Pseudo-Random Bit Generator
                  <br>PRNG – Pseudo-Random Number Generator<br>
                  BC – Block Cipher)
                </div>
              
            </div>
          </div>
        </small>
        {{< /rawhtml >}}

The BF Model of Randomness Bugs. It is a descriptive and not as a prescriptive model. It should not be used as a model for construction of RBGs.

If live entropy source is used, the PRBG is said to support prediction resistance. A PRBG without prediction resistance can still be used where an on-demand entropy source and immediate resetting are not required.

PRNGs are algorithmic and can have bugs. Most PRNGs are not cryptographically secure.