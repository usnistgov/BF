---
weight: 5
title: "INJ"
---
# Injection (INJ) Class

### Definition

We define Injection (INJ) as:

{{< definition >}}Due to input with language-specific special elements, the software assembles a command string that is parsed into an invalid construct.{{< /definition >}}

In other words, the command string is interpreted to have unintended, queries, OS commands, markups, scripts, etc.

### Type

High (semantic).

### Taxonomy

Fig. 1 depicts INJ causes, attributes and consequences.

{{< img src="images/INJModelv3.png" height="500" caption="Fig 1. Injection (INJ) Class" >}}

### Attributes

The attributes of INJ are:

**Language** – SQL, Bash, regex, XML/Xpath, PHP, CGI, etc.

This indicates the language in which the command string is interpreted.

**Special Element** – Query Elements, Header Separators, Scripting Elements, Format Parameters, Path Traversals, Wildcards, Metacharacters, etc.

These could be assembled with other elements to form malicious structures such as queries, scripts and commands. Query elements are strings delimiters `‘` or `“` or words such as `and` or `or`. Header separators are carriage return/line feed. Scripting elements are `<` or `>` or `&`. Format parameters are such as `%c` or `%n`. Path traversals elements are `..` or `\`. Metacharacters are back tick (`` ` ``) or `$` or `&`.

**Entry Point** – Data Entry Field, Scripting Tag, Markup Tag, Function Call Parameter, Procedure Call Argument, Program Argument, System Property, Cookie, etc.

This indicates where the input came from.

**Invalid Construct** – Database Query, OS Command, Regular Expression, Markup, Script, etc.

This indicates what eventually is wrong.

### Causes

The graph of causes shows that there are two main causes for injection: input not checked properly or input not sanitized properly.

### Consequences

In the graph of consequences, _Arbitrary Code Execution_ concerns any instructions to the computer – compiled, interpreted by software, executed directly by hardware or combination.

Note that INJ can cause _Information Change/Loss_. For example, and attacker can inject a command (_Add Command_) that overwrites a file.

An example of _Mask Legitimate Command_ is inserting `“--”`, which would comment part of that legitimate command. An example of _Mask Legitimate Information_ is inserting `“or 1==1”`, which would change a `password` to an expression that returns always `true`.

### Sites

Injection sites are typically not primitive operations in most languages. Sites are the library or utility functions that accept a command string for actions. In shell commands, command substitution is invoked with paired back quotes ``(`...`)`` or `$(...)`. Command substitution executes a subshell, which opens the possibility of the string to be interpreted with all the richness of the command line interpreter.

### Related BF Classes

BF classes related to INJ are: ATN, &lt;<content to be added&gt;>.

### Related CWEs, SFPs and ST

CWEs related to INJ are: [CWE-59](https://cwe.mitre.org/data/definitions/59.html), [CWE-74](https://cwe.mitre.org/data/definitions/74.html), [CWE-75](https://cwe.mitre.org/data/definitions/75.html), [CWE-77](https://cwe.mitre.org/data/definitions/77.html), [CWE-78](https://cwe.mitre.org/data/definitions/78.html), [CWE-79](https://cwe.mitre.org/data/definitions/79.html), [CWE-80](https://cwe.mitre.org/data/definitions/80.html), [CWE-85](https://cwe.mitre.org/data/definitions/85.html), [CWE-87](https://cwe.mitre.org/data/definitions/87.html), [CWE-88](https://cwe.mitre.org/data/definitions/88.html), [CWE-89](https://cwe.mitre.org/data/definitions/89.html), [CWE-90](https://cwe.mitre.org/data/definitions/90.html), [CWE-91](https://cwe.mitre.org/data/definitions/91.html), [CWE-93](https://cwe.mitre.org/data/definitions/93.html), [CWE-94](https://cwe.mitre.org/data/definitions/94.html), [CWE-99](https://cwe.mitre.org/data/definitions/99.html), [CWE-113](https://cwe.mitre.org/data/definitions/113.html), [CWE-116](https://cwe.mitre.org/data/definitions/116.html), [CWE-172](https://cwe.mitre.org/data/definitions/172.html), [CWE-243](https://cwe.mitre.org/data/definitions/243.html), [CWE-395](https://cwe.mitre.org/data/definitions/395.html), [CWE-564](https://cwe.mitre.org/data/definitions/564.html), [CWE-611](https://cwe.mitre.org/data/definitions/611.html), [CWE-619](https://cwe.mitre.org/data/definitions/619.html), [CWE-643](https://cwe.mitre.org/data/definitions/643.html), [CWE-652](https://cwe.mitre.org/data/definitions/652.html), [CWE-943](https://cwe.mitre.org/data/definitions/943.html).

The corresponding ST is the [Injection Semantic Template](https://robinagandhi.github.io/st/injectiontemplate.pdf).

BF Descriptions of INJ Related CWEs are provided [here](https://docs.google.com/document/d/1Hx7mRpanC-IhZSQ1yXzM2HWS7y3cbILmI4nrz05Xdsc/edit).

### Application

Application examples are provided [here](/Old/Examples/INJ.md).

### References

\[1\] Bojanova, I., Black, P. E., Yesha, Y., Wu, Y.,[The Bugs Framework (BF): A Structured Approach to Express Bugs](https://ieeexplore.ieee.org/document/7589797/). 2016 IEEE International Conference on Software Quality, Reliability, and Security ([QRS 2016](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7589797)), Vienna, Austria. August 1-3, 2016.