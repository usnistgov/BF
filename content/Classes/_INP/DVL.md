---
weight: 3
title: "DVL"
---
# Data Validation Bugs (DVL) Class

### Definition

We define Data Validation Bugs (DVL) as follows:

{{< definition >}}Data are validated (syntax check) or sanitized (escape, filter, repair) improperly.{{< /definition >}}

### Taxonomy

Fig. 1 depicts DVL causes, attributes and consequences.

{{< img src="images/DVL.png" height="500" caption="Fig 1. Data Validation Bugs (DVL) Class" >}}

### Operations

The DVL operations are: Validate and Sanitize. They reflect the improper check and modification of data syntax.

{{< rawhtml >}}
<table class="table">
          <thead>
            <tr>
              <th class="w-25">Operation Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Validate</td>
            <td>Check data syntax (proper form/grammar) in order to accept (and possibly sanitize) or reject it. Includes checking for missing symbols/elements.</td>
          </tr>
          <tr>
            <td>Sanitize</td>
            <td>Modify data (neutralize/escape, filter/remove, repair/add symbols) in order to make it valid (well-formed).</td>
          </tr>
          

        </table>
{{< /rawhtml >}}

### Causes

The graph of causes shows that there are three main causes for data validation bugs: Improper Operation, Improper Data, and Improper Policy.

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
              <th >Definition</th>
              <th class="w-50">Example</th>
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
            <td>Corrupted Data</td>
            <td>Unintentionally modified data due to a previous weakness (e.g., with a decompress or a decrypt operation) that if not sanitized would end-up as invalid data for next weakness.</td>
          </tr>
          <tr>
            <td>Tampered Data</td>
            <td>Maliciously modified data due to a previous weakness (e.g., with a deserialize, authorize, or crypto verify operation) that would lead to injection error.</td>
          </tr>
          

        </table>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th colspan="2">Improper Policy</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th class="w-25">Value</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tr>
            <td>Corrupted Policy</td>
            <td>Unintentionally modified policy due to a previous weakness (e.g., with a decompress operation).</td>
          </tr>
          <tr>
            <td>Tampered Policy</td>
            <td>Maliciously modified policy due to a previous weakness (e.g., with an authorize operation).</td>
          </tr>
        </table>
{{< /rawhtml >}}

### Consequences

The graph of consequences shows _Improper Data for Next Operation_ and _Injection Error_ as consequences.

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
          


        </table>
        <table class="table">
            <thead class="thead-light">
              <tr>
                <th colspan="3">Injection Error</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th class="w-25">Value</th>
                <th>Definition</th>
                <th >Example</th>
              </tr>
            </thead>
            <tr>
              <td>Query Injection</td>
              <td>Malicious insertion of condition parts (e.g., or 1==1) or entire commands (e.g., drop table) into an input used to construct a database query.</td>
            <td><li>SQL Injection</li>
                <li>No SQL Injection</li>
                <li>XPath Injection</li>
                <li>XQuery Injection</li>
                <li>LDAP Injection
                </li></td>
            </tr>
            <tr>
                <td>Command Injection</td>
                <td>Malicious insertion of new commands into the input to a command that is sent to an operating system (OS) or to a server.</td>
                <td><li>OS Command Injection</li>
                    <li>Regular Expression Injection</li>
                    <li>IMAP/SMTP Command Injection</li>
                    <li>Object Injection (JSON server side)</li>
                    </td>  
            </tr>
              <tr>
                <td>Source Code Injection</td>
                <td>Malicious insertion of new code (incl. with <> elements) into input used as part of an executing application code.</td>
                <td><li>Cross Site Scripting (XSS)</li>
                    <li>CSS Injection</li>
                    <li>Eval Injection</li>
                    <li>EL Injection</li>
                    <li>JSON Injection (Client or Server Side)
                    </li></td>  
            </tr>
              <tr>
                <td>Parameter Injection</td>
                <td>Malicious insertion of data (e.g., with & parameter separator) into input used as parameter/argument in other parts of code.</td>
                <td><li>Argument Injection</li>
                    <li>Format String Injection</li>
                    <li>Email Injection</li>
                    <li>HTTP Header Injection (incl.
                        Server Header Injection)</li>
                    <li>Reflection Injection</li>
                <li>Flash Injection</li>
            <li>CRLF Injection (incl. HTTP
                Header Splitting)</li></td>  
            </tr>
              <tr>
                <td>File Injection</td>
                <td>Malicious insertion of data (e.g., with .. and / or with file entries) into input used to access/modify files or as file content.</td>
                <td><li>CSV, Temp, etc. File Injection</li>
                    <li>Log Entry Injection</li>
                    <li>XML Injection</li>
                    <li>CRLF Injection (incl. in as in
                        log entry files)</li>
                    <li>Relative Path Traversal</li>
                <li>Absolute Path Traversal</li></td>  
            </tr>
          </table>
{{< /rawhtml >}}

### Attributes

The attributes of DVL are:

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
            <td rowspan="4" style="vertical-align: middle;">Mechanism</td>
            <td>Safelist</td>
            <td>Policy based on a set of known good content.</td>
          </tr>
          <tr>
            
            <td>Denylist</td>
            <td>Policy based on a set of known bad content; helps reject outright maliciously malformed data.</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>Policy based on syntax format (e.g., defined via regular expression).</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>Policy based on allowed number of characters in data. Note that this is not about the data value as size of an object.</td>
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

Application examples can be found here: [CVE-2020-5902](/Examples/CVE-2020-5902), [CVE-2019-10748](/Examples/CVE-2019-10748.md). 