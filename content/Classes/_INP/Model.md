---
weight: 1
title: "Model"
---
# Data Checks Bug Model

Data should be checked to ensure proper results from its processing. It should adhere to object data types acceptable by the software. Bojanova and Galhardo, define an object as a piece of memory with well-defined size that is used to store primitive data or a data structure. As input, primitive data are checked and sanitized on string-of-characters level. A character – e.g., an ASCII (American Standard Code for Information Interchange) character – is a single symbol, such as an alphabet letter, a numeric digit, or a punctuation mark. Data structures in turn are built on primitive data but can also have a higher level of syntax and semantics rules.

Data check comprises data validation, where data syntax gets checked for being well-formed, and data verification, where data semantics gets verified for being accurate. The BF model separates data semantics check as data verification, although OWASP (Open Web Application Security Project) puts it under input validation.

Validation is about accepting or rejecting data based on its syntax: it checks if data are in proper format (grammar). For example, checking if data consist of digits only or checking the syntax of an XML (Extensible Markup Language) document against a DTD (XML Document Type Definition) is data validation. Once data syntax is checked it may be sanitized. Sanitization is about neutralizing, filtering, or repairing data via escaping, removing, or adding symbols in data, correspondingly. An example of data sanitization would be removing a special character such as ’/’ or adding a closing parenthesis ’)’. The validate and sanitize operations use specific policies, such as to check against safelist, denylist, format (e.g., defined via regular expressions), or length. A safelist defines a set of known good content. A denylist defines a set of known bad content; it helps reject outright maliciously malformed data. Regular expressions define format patterns that data (viewed as strings) should match. They could be used for safelists and denylists.

Verification is about accepting or rejecting data based on its semantics: it checks if data have proper value (meaning). For example, checking if a start date is before an end date, or checking the type of an XML document against a PowerPoint XSD (XML Schema Definition) is data verification. Once data semantics is checked, it may be corrected via assigning a new value or via removing data. An example of data correction would be setting the size to the buffer’s upper bound when the size that is supplied is larger than that upper bound. The verify and correct operations use specific policies to, for example, check data against a value (incl. NULL or list of values), quantity, range, type, or other business rules.

Data check bugs could be introduced at any of the _data validation_ and _data verification_ phases. Each bug or weakness involves one data check operation: validate, sanitize, verify, or correct. Each operation is over already-canonicalized1 data and the policy (the rules) against which it gets checked.

The BF Data Check Bugs model (Fig. 1) helped us identify the phases and the operations where such bugs could occur. The phases correspond to the BF Data Check Bugs classes: Data Validation Bugs (DVL) and Data Verification Bugs (DVR). All data check operations are grouped by phase.

{{< img src="images/Data-Check-Model.png" height="300" caption="Fig 1. The BF Data Check Bugs model. Comprises phases, corresponding to the BF classes DVL and DVR. Shows the data check operations flow." >}}

The operations under DVL (Fig. 1) are on checking data syntax: Validate and Sanitize. The operations under DVR (Fig. 1) are on checking data semantics: Verify and Correct.

The possible flow between operations from different phases is depicted on Fig. 1 with arrows. Data could be validated and verified or only directly verified. The pre- sented operations flow helps in identifying possible chains of bugs/weaknesses.