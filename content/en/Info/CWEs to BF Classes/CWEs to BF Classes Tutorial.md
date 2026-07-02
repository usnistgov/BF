---
weight: 6
title: "CWEs to BF Classes Tutorial"
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PJ364XPP9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PJ364XPP9F');
</script>

# <l style="color: #6366f1">CWEs to BF Classes Tutorial <br/> _`Irena Bojanova, Inventor/Creator, PI & Lead, NIST Bugs Framework (BF), 2014 – ~~~`_</l>

## Tutorial

### Step 1. Enter BFVUL Title and CVE ID

1. Open the BF Tool App. Explore the App layout and hoover and over the GUI controls to see Tooltips with corresponidng definitions.
2. In the **BFVUL Title** textbox enter 'Heartbleed — Heap Buffer Over-Read in OpenSSL v1.0.1 before v1.0.1g'. Note that this textbox is marked as required — you will not be ale to Save, Download, etc. is it is empty.
3. Select the **CVE Year** (`2014`) and type or select the **CVE ID** (`0160`).
4. Click **Fetch/Load**.
> The tool will pull the official description, vendor information, and product data from the CVE repository, alongside its CVSS severity score from the NVD.

_Note_: In the simplified version of the tool, enter `CVE-2014-0160` in the CVE ID textbox.

### Step 2. Specify the Root Cause Weakness 1: Caused by `BF DVR` Bug

The bug was both in the `ssl\d1_both.c` and `ssl\t1_lib.c` files of the OpenSSL implementation of the TLS protocol [[2](https://git.openssl.org/?p=openssl.git;a=blob;f=ssl/d1_both.c;h=0a84f957118afa9804451add380eca4719a9765e;hb=4817504d069b4c5082161b02a22116ad75f822b1)]. 

Analysis of the C code before the fix (see Fig. 2 for `d1_both.c`) shows that the very first improper BF state is in the data verification phase, where the semantics of the input should be checked and corrected. The pointer `p` (see line `1450` in Fig. 2) is to a record of type `SSL3_RECORD` whose second field holds the `length`. The `payload` variable is declared as an `unsigned int` (see line `1452`) and can be a huge number. It is assigned the value of the `length` field of `p` via the `n2s` macro (see line `1457`). That is input data that supplies the length of an array (i.e., a buffer), but it is not checked before use toward the actual array size (i.e., the number of elements in the record data). Its value is not verified. 

This BF bug state is the first of a chain of improper states that would lead to buffer over-read. It is an instance of the [BF Data Verification (DVR)](https://usnistgov.github.io/BF/info/bf-classes/_inp/dvr/) class [[3](https://usnistgov.github.io/BF)] as the (*Verify: Missing Code, Data*) tuple with an improper *Verify* operation element — the entire data verification operation is absent — that results in an *Inconsistent Value* error.

xxx
The Heartbleed vulnerability begins when the `payload` variable is assigned a length value from an incoming TLS Heartbeat request record via the `n2s` macro, but the software fails to verify this input length against the actual data record size. See [code in GitHub](https://github.com/openssl/openssl/blob/0d7717fc9c83dafab8153cbd5e2180e6e04cc802/ssl/d1_both.c#L1462).

```c
// ssl\d1_both.c - Heartbleed bug location
hbtype = *p++;
n2s(p, payload); // Reads length from packet without verification
pl = p;

```

1. Locate the **BF Class** TreeView inside the **Weakness 1** GroupBox container.
2. Under the **_INP** (Input/Output Check) BF class type select the **DVR (Data Verification)** BFclass. Explore the Tooltips by hoovering over the Bf class types and BF class names.
3. Notice that the five primary TreeView controls populate automatically: `Bug/Fault`, `Operand`, `Error/Final Error`, `Operation Attributes`, and `Operand Attributes`.
4. Because this is the *Initial Weakness*, the `Bug/Fault` label displays as **Bug**. Expand it and select the path: `Code` $\rightarrow$ `Missing Code`.
5. Under **Operand**, select `Data`.
6. Under **Error/Final Error**, select `Inconsistent Value` (the consequence of not verifying the data).
7. In the text box beneath the controls, enter your analysis comment:
*"The input data supplying the length of the buffer is not checked against the actual array size before use."*
8. Click the **`>>`** button to save this weakness and move to the next chain link.

### Step 3. Specify the Intermediate Weakness 2: Caused by `BF MAD` Fault

Then, `memcpy()` reads `payload` number of bytes from the object pointed by `pl` and copies them to the object pointed by `bp` (see line `1480` in Fig. 2). Following the naive C implementation of `memcpy()` at the bottom in Fig. 2, `bp` and `pl` are passed by reference via the `dst` and `src` arguments, and the huge payload length is passed via the `n` argument. First, one byte is read from `pl` and copied to `bp`. Until the huge payload length is reached, both pointers move one byte up, and the newly pointed by `pl` byte is read and copied. However, while `bp` is allocated large enough at up to `1+2+65535+16` bytes (see lines `1474` and `1475` in Fig. 2), `pl` points to an array with a reasonable size (see line `1458`). As the content of this array is read and copied to `bp`, so too is a huge amount of data from over its upper bound. 

xxx
The unverified `payload` length is now passed directly into a loop/operation that repositions a data pointer (`pl`) over the source buffer during a memory copy sequence (`memcpy`). This constitutes a memory addressing fault.

1. In the **BF Class** TreeView, select **MAD (Memory Addressing)**.
2. The `Bug/Fault` label has now automatically changed to **Fault** because we are inside a propagation chain.
3. Under **Bug/Fault** (acting as the cause), select `Data` $\rightarrow$ `Wrong Size`.
> *Note: This maps directly to the "Inconsistent Value" error from Step 2.*

4. Under **Operand**, select `Address` $\rightarrow$ `Pointer`.
5. Under **Operation Attributes**, select `Reposition`.
6. Under **Error/Final Error**, select `Overbound Pointer`.
7. Add your comment:
*"A value inconsistent with the actual size of the pl object is used to control loop iteration, shifting the pointer past its upper bound."*
8. Click the **`>>`** button to proceed.

### Step 4. Specify the Sink Weakness 3: Caused by the `BF MUS` Final Error

The analysis reveals two fault states: when `pl` is repositioned over the array upper bound and when data values are read from there. The former is an instance of the [BF Memory Addressing (MAD)](https://usnistgov.github.io/BF/info/bf-classes/_mem/mad/) class [[3](https://usnistgov.github.io/BF)] as the (*Reposition, Data: Wrong Size, Type, Address, Size*) tuple with an improper *Data* operand element (see the second state in Fig. 1) that results in an *Overbound Pointer* error. There is no bug in the *Reposition* operation itself, but a value that is inconsistent with the size of the `pl` object is used to control the iteration. The latter is an instance of the [BF Memory Use (MUS)](https://usnistgov.github.io/BF/info/bf-classes/_mem/mus/) class [[3](https://usnistgov.github.io/BF)] as the (*Read, Data, Type, Address: Overbound Pointer, Size*) tuple with an improper *Address* operand element (see the third state in Fig. 1) that results in a *Buffer Over-Read* final error. Again, there is no bug in the *Read* operation itself, but because `pl` points overbound, it is possible to read data that should not be read (i.e., buffer over-read).

<!-- ![C code of heartbeat and naive memcpy](figs/BF_HB_code.pdf)   -->
*Figure 2: C code of `heartbeat()` and naive `memcpy()`*
