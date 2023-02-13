---
weight: 3
title: "DCL"
---
# Declaration Bugs (DCL) Class

### Definition

We define Declaration Bugs (DCL) as follows:

{{< definition >}}
An object, a function, a data type, or a namespace is declared or defined improperly.
{{< /definition >}}

### Taxonomy

Fig. 1 depicts DCL causes, attributes and consequences.

{{< img src="images/DCL.png" height="500" caption="Fig 1. Declaration Bugs (DCL) Class" >}}

### Operations

The DCL operations are: Declare and Define. They reflect the improper declaration or definition of an object, a function, a data type, or a namespace.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Declare</td>
            <td>Specify name and data type of an object; name, return data type, and
                parameters of a function; or name and type parameters of a
                data type.</td>
          </tr>
          <tr>
            <td>Define</td>
            <td>Specify data of an object; implementation of a function; or
                member objects and functions of a data type.</td>
          </tr>
          

        </table>
{{< /rawhtml >}}
### Causes

The graph of causes shows that there are three main causes for declaration bugs: Improper Operation, Improper Modifier, Improper Scope and Improper DataType.
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

The graph of consequences shows _Improper Data Type_, _Improper Function_, and _Access Errors_ as consequences.
{{< rawhtml >}}
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
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Access Errors</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Wrong Access Object</td>
            <td>Unauthorized access to an object exposes sensitive data or allows access to member functions.</td>
          </tr>
          <tr>
            <td>Wrong Access Type</td>
            <td>Unauthorized access to a data type allows access to member objects and functions.</td>
          </tr>
          <tr>
            <td>Wrong Access Function</td>
            <td>Unauthorized access to a function.</td>
          </tr>
         
          


        </table>
{{< /rawhtml >}}

### Attributes

The attributes of DCL are:
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
            <td rowspan="4" style="vertical-align: middle;">Mechanism</td>
            <td>Simple</td>
            <td>A non-polymorphic entity.</td>
          </tr>
          <tr>
            <td>Generics</td>
            <td>An entity parameterized by type.</td>
          </tr>
          <tr>
            <td>Overriding</td>
            <td>Functions with the same name as one in the base type, but implemented in different subtypes.</td>
          </tr>
          <tr>
            <td>Overloading</td>
            <td>Functions with the same name in the same declaration scope, but implemented with different signature.</td>
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

DCL sites are the entities declarations and definitions.

### Application

Application examples can be found here: [CVE-2021-21834](/Examples/CVE-2021-21834.md), [CVE-2021-23440](/Examples/CVE-2021-23440.md), [CWE-468](/Examples/CWE-468.md). 