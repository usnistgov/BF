---
weight: 6
title: "TCV"
---
# Type Conversion Bugs (TCV) Class

### Definition

We define Type Conversion Bugs (TCV) as follows:

{{< definition >}}A data value is cast or coerced into another data type improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts TCV causes, attributes and consequences.

{{< img src="images/TCV.png" height="500" caption="Fig 1. Type Conversion Bugs (TCV) Class" >}}

### Operations

The TCV operations are: Cast and Coerce. They reflect the improper use of data types in object data value conversion to another data type.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Cast</td>
            <td>Explicitly convert the value of an object to another data type.</td>
          </tr>
          <tr>
            <td>Coerce</td>
            <td>Implicitly (forced by the Type System) convert the value of
                a passed in/out argument or the return into the corresponding parameter or return data type. (Type Coercion is known also as <i>Type Juggling</i>.)</td>
          </tr>
          

        </table>
{{< /rawhtml >}}

### Causes

The graph of causes shows that there are three main causes for declaration bugs: Improper Operation, Improper Data Value, Improper DataType, and Improper Function.

{{< rawhtml >}}
<table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="3">Improper Operation</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tr>
            <td>Missing</td>
            <td>The operation is absent.</td>
            <td>Missing:
                <uL><li>constructor</li>
                <li>+(int,double) overload</li>
                <li>function override in subtype.</li></uL></td>
          </tr>
          <tr>
            <td>Wrong</td>
            <td>An inappropriate data type is specified; or an inappropriate function/operator is used.</td>
            <td><ul><li>An object is declared int, while it should be float.</li>
                <li>A class implements a cloneable or a serializable interface.</li>
                <li>Comparison via = vs. ==.</li></ul></td>
          </tr>



        </table>
        
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Operands</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Concept</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Data Value</td>
            <td>A numeric, text, pointer/address, or boolean value stored in an object’s memory.</td>
          </tr>
          <tr>
            <td>Data Type</td>
            <td>A set of allowed values and the operations allowed over them.</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>An organized block of code that when called takes in data, processes it, and produces a result(s).</td>
          </tr>
        </table>
{{< /rawhtml >}}

### Consequences

The graph of consequences shows _Improper DataValue_ and _Improper Data Type_ as consequences.

{{< rawhtml >}}
<table class="table">
            <thead class="thead-light">
              <tr>
                <th colspan="2">Improper Data Value</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th class="w-25">Concept</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tr>
              <td>Under Range</td>
              <td>Data value is smaller than type’s lower range.</td>
            </tr>
            <tr>
              <td>Over Range</td>
              <td>Data value is larger than type’s upper range.</td>
            </tr>
            <tr>
              <td>Flipped Sign</td>
              <td>Sign bit is overwritten from type related calculation.</td>
            </tr>
            <tr>
              <td>Wrong Argument Value</td>
              <td>Inaccurate input data value; i.e., non-verified for harmed semantics.</td>
            </tr>
  
            <tr>
              <td>Wrong Object Resolved Value</td>
              <td>Object is resolved from wrong scope.</td>
            </tr>
            <tr>
              <td>Reference vs. Object</td>
              <td>Object’s address instead of object’s data value.</td>
            </tr>
            <tr>
              <td>Wrong Result</td>
              <td>Incorrect value from type conversion or computation.</td>
            </tr>
            <tr>
              <td>Wrap Around</td>
              <td>A moved around-the-clock value over its data type upper or lower range, as it exceeds that range. (<i>Integer Over-/Under-flow</i> is a wrapped-around the upper/lower range integer value; may become very small/large and change to the opposite sign.)</td>
            </tr>
            <tr>
              <td>Truncated Value</td>
              <td>Rightmost bits of value that won’t fit type size are cut off.</td>
            </tr>
            <tr>
              <td>Distorted Value</td>
              <td>Incorrect value (although fits type size) due to sign flip or signed/unsigned and vice versa conversions.</td>
            </tr>
            <tr>
                <td>Rounded Value</td>
                <td>Real number value precision loss.</td>
              </tr>
  
          </table>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th colspan="2">Improper Data Type</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th class="w-25">Concept</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tr>
              <td>Wrong Type</td>
              <td>Data type range or structure is not correct.</td>
            </tr>
            <tr>
              <td>Wrong Type Resolved</td>
              <td>Data type is resolved from wrong scope.</td>
            </tr>
            <tr>
              <td>Wrong Object Resolved Type</td>
              <td>Object is resolved from wrong scope,so it’s data type might be wrong.</td>
            </tr>
            <tr>
              <td>Wrong Sign Type</td>
              <td>Unsigned instead of signed data type is specified or vise versa.</td>
            </tr>
  
            <tr>
              <td>Wrong Precision Type</td>
              <td>Higher precision data type is needed (e.g. <code>double</code> instead of <code>float</code>).</td>
            </tr>
            <tr>
              <td>Incomplete Type</td>
              <td>Specific constructor, method, or overloaded function is missing.</td>
            </tr>
            <tr>
              <td>Mismatched Argument Type</td>
              <td>Argument’s data type is different from function’s parameter data type.</td>
            </tr>
            <tr>
              <td>Wrong
                Generic Type</td>
              <td>Generic object instantiated via wrong type argument.</td>
            </tr>
            <tr>
              <td>Confused Subtype</td>
              <td>Object invoking an overriden function is of wrong subtype data type.</td>
            </tr>
            <tr>
              <td>Wrong Argument Type</td>
              <td>Argument to an overloaded function is of wrong data type.</td>
            </tr>
  
  
          </table>
{{< /rawhtml >}}

### Attributes

The attributes of TCV are:

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          
          <tr>
            <td rowspan="4" style="vertical-align: middle;">Source Code</td>
            <td>Codebase</td>
            <td>The operation is in programmer’s code – in the application itself.</td>
          </tr>
          <tr>
            <td>Third Party</td>
            <td>The operation is in a third party library.</td>
          </tr>
          <tr>
            <td>Standard Library</td>
            <td>The operation is in the standard library for a particular programming language.</td>
          </tr>
          <tr>
            <td>Compiler/Interpreter</td>
            <td>The operation is in the language processor that allows execution or creates executables (compiler, assembler, interpreter).</td>
          </tr>
          <tr>
            <td rowspan="2" style="vertical-align: middle;">Data Type Kind</td>
            <td>Primitive</td>
            <td>Mimics the hardware units and is not built from other data types – e.g. int (long, short, signed),
              float, double, string, boolean.</td>
          </tr>
          <tr>
            <td>Structured</td>
            <td>Builds of other data types; have members of primitive and/or structured data types – e.g. array, record, struct, union, class, interface.</td>
          </tr>
          
          <tr>
            <td rowspan="2" style="vertical-align: middle;">Mechanism</td>
            <td>Pass In</td>
            <td>Supply ”in” arguments’ data values to a func- tion/ operator.</td>
          </tr>
          <tr>
            <td>Pass Out</td>
            <td>Supply ”out” or ”in/out” arguments’ data values or a return value to a function/ operator.</td>
          </tr>

          <tr>
            <td rowspan="4" style="vertical-align: middle;">Data Value Kind</td>
            <td>Numeric</td>
            <td>A number stored in an object’s memory.</td>
          </tr>
          <tr>
            <td>Text</td>
            <td>A string stored in an object’s memory.</td>
          </tr>
          <tr>
            <td>Pointer</td>
            <td>A holder of the memory address of an object.</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>A truth value (<code>true</code> or <code>false</code>; 1 or 0), stored in an object’s memory.</td>
          </tr>

        </table>
{{< /rawhtml >}}

### Sites

TCV sites are the cast operators and the in/out argument passing and return statements

### Application

Application examples can be found here: [CVE-2021-21834](/Examples/CVE-2021-21834.md), [CVE-2021-23440](/Examples/CVE-2021-23440.md), [CWE-468](/Examples/CWE-468.md). 