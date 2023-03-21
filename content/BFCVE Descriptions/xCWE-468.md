---
weight: 1
title: "CWE-468"
---
# [CWE-468 - Incorrect Pointer Scaling](https://cwe.mitre.org/data/definitions/468.html)

### BF Taxonomy

{{< img src="images/CWE-468.png" height="700" caption="Fig 1. BF for CWE-468." >}}

<ul>

[TCV](/Classes/_DAT/TCV.md) (Cast)

</ul>

{{< rawhtml >}}
<ul><strong>Cause: </strong><cause>Improper Operation
   </cause> - Wrong</ul>

 <ul><strong>Attributes:</strong>
 
   <ul>Mechanism: <attribute>Pass In</attribute></ul>

 <ul>Source Code: <attribute>Codebase</attribute></ul>
 <ul>Data Value Kind: <attribute>Pointer</attribute></ul>
 <ul>Data Type Kind: <attribute>Primitive</attribute></ul>


   </ul>
   <ul><strong>Consequence: </strong><consequence>Improper Data Type</consequence> - Wrong Type
    ( <code>int</code> instead of <code>char</code> )</ul>
   
   {{< /rawhtml >}}

   <ul>

[NRS](/Classes/_DAT/NRS.md) (Call)

</ul>

{{< rawhtml >}}
<ul><strong>Cause: </strong><cause>Improper Data Type</cause> - Wrong Argument Type</ul>
 <ul><strong>Attributes: </strong>
    <ul>Mechanism: <attribute>Ad-hoc Bind</attribute></ul>
    <ul>Source Code: <attribute>Codebase</attribute></ul>
   <ul>Entity: <attribute>Function</attribute></ul>
   <ul>Data Type Kind: <attribute>Primitive</attribute></ul>

 </ul>
 <ul><strong>Consequence: </strong><consequence>Improper Function</consequence> - Wrong Overloaded Function Bound
    ( <code>+(int*,int)</code> instead of <code>+(char*,int)</code> ) </ul>

 

{{< /rawhtml >}}

<ul>

[TCM](/Classes/_DAT/TCM.md) (Calculate)

</ul>

{{< rawhtml >}}
 <ul><strong>Cause: </strong><cause>Improper Function</cause> - Wrong Overloaded Function</ul>
 <ul><strong>Attributes: </strong>
   <ul>Mechanism: <attribute>Operator</attribute></ul>
   <ul>Source Code: <attribute>Codebase</attribute></ul>
   <ul>Data Value Kind: <attribute>Pointer</attribute></ul>
   <ul>Data Type Kind: <attribute>Primitive</attribute></ul>

 </ul>
 <ul><strong>Consequence: </strong><consequence>Improper Data Value</consequence> - Wrong Result
    ( Pointer position ) </ul>

 {{< /rawhtml >}}

 <ul>

[MAD](/Classes/_MEM/MAD.md) (Reposition)

</ul>

{{< rawhtml >}}
<ul><strong>Cause: </strong><cause>Improper Data Value</cause> - Wrong Index</ul>
 <ul><strong>Attributes: </strong>
   <ul>Mechanism: <attribute>Direct</attribute></ul>
   <ul>Source Code: <attribute>Codebase</attribute></ul>
   <ul>Execution Space: <attribute>Userland</attribute></ul>
   <ul>Location: <attribute>Stack</attribute></ul>

 </ul>
 <ul><strong>Consequence: </strong><consequence>Improper Object Address</consequence> - Over Bounds Pointer </ul>

 {{< /rawhtml >}}

 <ul>

[MUS](/Classes/_MEM/MUS.md) (Read)

</ul>

 {{< rawhtml >}}
<ul><strong>Cause: </strong><cause>Improper Object Address</cause> - Over Bounds Pointer</ul>
 <ul><strong>Attributes: </strong>
   <ul>Mechanism: <attribute>Direct</attribute></ul>
   <ul>Source Code: <attribute>Codebase</attribute></ul>
   <ul>Execution Space: <attribute>Userland</attribute></ul>

   <ul>Span: <attribute>Little</attribute></ul>
   <ul>Location: <attribute>Stack</attribute></ul>

 </ul>
 <ul><strong>Consequence: </strong><consequence>Memory Overflow</consequence> - Buffer Overflow </ul>
 <p><h3>BF Description:</h3></p>
<p><ul></ul></p>
 <p><h3>CVE Description</h3></p>
 <p></p>
<p>
<h3>Analysis</h3>
</p>
<p>
<ul>The chain starts with an improper casting of the pointer <code>p</code> to <code>char *</code> that leads to invocation of a wrong addition
    operator <code>*int + 16</code> instead of <code>*char + 1</code>. Therefore, the pointer moves 4 bytes instead of 1 byte (3 bytes off),
    reading the wrong value, outside the object <code>x</code> (buffer overflow). Fig.11 presents the BF taxonomy for this weakness.
</ul>
</p>
<p>
<h3>The Fix</h3>
</p>
<p>
<ul>To fix the bug, the programmer should first cast and then add: <code>int *p = x; char * second_char = (char *)p + 1;</code></ul>
</p>
 {{< /rawhtml >}}