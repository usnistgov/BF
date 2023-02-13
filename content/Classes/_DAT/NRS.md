---
weight: 4
title: "NRS"
---
# Name Resolution Bugs (NRS) Class

### Definition

We define Name Resolution Bugs (NRS) as follows:

{{< definition >}}The name of an object, a function, or a data type is resolved improperly or bound to an improper data type or implementation.{{< /definition >}}

### Taxonomy

Fig. 1 depicts NRS causes, attributes and consequences.

{{< img src="images/NRS.png" height="500" caption="Fig 1. Name Resolution Bugs (NRS) Class" >}}

### Operations

The NRS operations are: Refer and Call. They reflect the improper name resolution, and data type, data, or implementation binding.
{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Refer</td>
            <td>Use a name in local or remote scopes of source code. The Type System resolves the name and binds a data type to it.</td>
          </tr>
          <tr>
            <td>Call</td>
            <td>Invoke a function implementation. The Type System binds the implementation to the resolved function name. A polymorphic implementation is first resolved and then bound.</td>
          </tr>
          

        </table>
{{< /rawhtml >}}
### Causes

The graph of causes shows that there are three main causes for name resoultion bugs: Improper Operation, Improper Scope, Improper DataType, and Improper Function.

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
            <td>Erroneous</td>
            <td>The Type System or a compute function implementation has a bug.</td>
            <td><ul><li>Incorrect data type inference.</li>
              <li>Wrong order or number of arguments to a function call.</li>
              <li>Incorrect deep objects comparison implementation.</li></ul></td>
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

The graph of consequences shows _Improper Data Value_, _Improper Data Type_, and _Improper Function_.

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
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Function</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Concept</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Missing Overridden Function</td>
            <td>Function implementation in a particular subclass is absent.</td>
          </tr>
          <tr>
            <td>Missing Overloaded Function</td>
            <td>Implementation for particular function parameters’
              data types is absent.</td>
          </tr>
          <tr>
            <td>Wrong Function Resolved</td>
            <td>Function is resolved from wrong scope.</td>
          </tr>
          <tr>
            <td>Wrong Generic Function Bound</td>
            <td>Implementation for a wrong data type is bound due to wrong generic type arguments.</td>
          </tr>

          <tr>
            <td>Wrong Overridden Function Bound</td>
            <td>Implementation from wrong subtype is bound due to a wrong invoking subtype object.</td>
          </tr>
          <tr>
            <td>Wrong Overloaded Function Bound</td>
            <td>Wrong overloaded implementation is bound due to wrong function arguments.</td>
          </tr>
          


        </table>
{{< /rawhtml >}}
### Attributes

The attributes of NRS are:
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
            <td rowspan="5" style="vertical-align: middle;">Mechanism</td>
            <td>Resolve</td>
            <td>Look up entity name and if needed determine data type (infer from value, through hierarchy, via generic type attribute).</td>
          </tr>
          <tr>
            <td>Bind</td>
            <td>Connect object data type, function return type, parameter data type, or simple function imple- mentation.</td>
          </tr>
          <tr>
            <td>Early Bind</td>
            <td>Resolve subtype and set generic function imple- mentation.</td>
          </tr>
          <tr>
            <td>Late Bind</td>
            <td>Resolve overriden function via subtype object and set implementation.</td>
          </tr>
          <tr>
            <td>Ad-hoc Bind</td>
            <td>Resolve overloaded function via signature and set implementation.</td>
          </tr>

          <tr>
            <td rowspan="4" style="vertical-align: middle;">Entity</td>
            <td>Object</td>
            <td>A memory region used to store data.</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>An organized block of code that when called takes in data, processes it, and returns a result.</td>
          </tr>
          <tr>
            <td>Data Type</td>
            <td>A set or a range of values and the operations allowed over them.</td>
          </tr>
          <tr>
            <td>Namespace</td>
            <td>An organization of entities’ names, utilized to avoid names collision.</td>
          </tr>

        </table>
{{< /rawhtml >}}
### Sites

NRS sites are the entities references and the function calls.

### Application

Application examples can be found here: [CVE-2021-21834](/Examples/CVE-2021-21834.md), [CVE-2021-23440](/Examples/CVE-2021-23440.md), [CWE-468](/Examples/CWE-468.md). 