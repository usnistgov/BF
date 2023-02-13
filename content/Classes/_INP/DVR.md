---
weight: 4
title: "DVR"
---
# Data Verification Bugs (DVR) Class

### Definition

We define Data Verification Bugs (DVR) as follows:

{{< definition >}}Data are verified (semantics check) or corrected (assign value, remove) improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts DVR causes, attributes and consequences.

{{< img src="images/DVR.png" height="400" caption="Fig 1. Data Verification Bugs (DVR) Class" >}}

### Operations

The DVR operations are: Verify and Correct. They reflect the improper check and modification of data semantics.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Verify</td>
            <td>Check data semantics (proper value/meaning) in order to accept (and possibly correct) or reject it.</td>
          </tr>
          <tr>
            <td>Correct</td>
            <td>Modify data (assign new value, remove), in order to make it accurate.</td>
          </tr>
          

        </table>
{{< /rawhtml >}}

### Causes

The graph of causes shows that there are two main causes for data verification bugs: Improper Operation and Improper Data.

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
              <th>Example</th>
            </tr>
          </thead>
          <tr>
            <td>Missing</td>
            <td>The operation is absent.</td>
            <td>Missing data sanitization.</td>
          </tr>
          
          <tr>
            <td>Erroneous</td>
            <td>There is a bug in the implementation of the operation (incl. how it checks against a policy).</td>
            <td><li>Using not equal to (!=) when
                comparing to safelist values.</li>
                <li>Using greater than (>) when
                    checking for upper range.</li></td>
          </tr>
          <tr>
            <td>Under-Restrictive Policy</td>
            <td>Accepts bad data.</td>
            <td><li>Permissive safelist or regular
                expression.</li>
            <li>Incomplete denylist.</li></td>
          </tr>
          <tr>
            <td>Over-Restrictive Policy</td>
            <td>Rejects good data.</td>
            <td>Over-restrictive denylist or regular expression.</td>
          </tr>
        </table>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Data</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Invalid Data</td>
            <td>Data with harmed syntax due to sanitization errors.</td>
          </tr>
          
          

        </table>
{{< /rawhtml >}}

### Consequences

The graph of consequences shows _Improper Data for Next Operation_ as a consequence.

{{< rawhtml >}}
<table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Data for Next Operation</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Invalid Data</td>
            <td>Data with harmed syntax due to sanitization errors.</td>
          </tr>
          <tr>
            <td>Wrong Value</td>
            <td>Data with harmed semantics; not accurate value (e.g., outside of a range).</td>
          </tr>
          <tr>
            <td>Inconsistent Value</td>
            <td>Data value is inconsistent with the value of a related data (e.g., inconstancy between the value of a size variable and the actual buffer size).</td>
          </tr>
          <tr>
            <td>Wrong Type</td>
            <td>Data with wrong data type.</td>
          </tr>
          


        </table>
{{< /rawhtml >}}

### Attributes

The attributes of DVR are:

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
            <td rowspan="5" style="vertical-align: middle;">Mechanism</td>
            <td>Value</td>
            <td>Check data for a specific value (incl. NULL or list of values).</td>
          </tr>
          <tr>
            
            <td>Quantity</td>
            <td>Check data for a specific measurable value (e.g., size, time, rate, frequency).</td>
          </tr>
          <tr>
            <td>Range</td>
            <td>Check data are within a (min, max) interval.</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Check data type (e.g., int, float, XSD-XML Schema Definition, or specific structure/object).</td>
          </tr>
          <tr>
            <td>Other Rules</td>
            <td>Check data against other business logic.</td>
          </tr>
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
            <td>Language Processor</td>
            <td>The operation is in the tool that allows execution or creates executable (compiler, assembler,
              interpreter).</td>
          </tr>
          <tr>
            <td rowspan="3" style="vertical-align: middle;">Execution Space</td>
            <td>Local</td>
            <td>The bugged code runs in an environment with access control policy with limited (local user) permission.</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>The bugged code runs in an environment with access control policy with unlimited (admin user) permission.</td>
          </tr>
          <tr>
            <td>Bare-Metal</td>
            <td>The bugged code runs in an environment with-out privilege control. Usually, the program is the only
              software running and has total access to the hardware.</td>
          </tr>
          <tr>
            <td rowspan="4" style="vertical-align: middle;">State</td>
            <td>Entered</td>
            <td>Data comes from user interface (e.g., text field).</td>
          </tr>
          <tr>
            <td>Stored</td>
            <td>Data comes from permanent storage (e.g., file, database on a storage device).</td>
          </tr>
          <tr>
            <td>In Use</td>
            <td>Data comes from volatile storage (e.g., RAM, cache memory).</td>
          </tr>

          <tr>
            <td>Transferred</td>
            <td>Data comes via network (e.g., connecting analog device or another computer).</td>
          </tr>
          

        </table>
{{< /rawhtml >}}

### Sites

A site for input/output check bugs is any part of the code that should check and sanitize data syntax or check and correct data semantics.

### Application

Application examples can be found here: [CVE-2014-0160](/Examples/CVE-2014-0160). 