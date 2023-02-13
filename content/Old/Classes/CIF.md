---
weight: 2
title: "CIF"
---
# Control of Interaction Frequency Bugs (CIF) Class

### Definition

We define Control of Interaction Frequency Bugs (CIF) as:

{{< definition >}}The software does not properly limit the number of repeating interactions per specified unit.{{< /definition >}}

In physics, frequency is the number of occurrences of a repeating event per unit time. Interactions in software could be also per event or per user.

### Type

High (semantic).

### Taxonomy

Fig. 1 depicts CIF causes, attributes and consequences.

{{< img src="images/CIFModelv4.png" height="400" caption="Fig 1. Control of Interaction Frequency Bugs (CIF) Class" >}}

### Attributes

**Interaction** \-\- Authentication Attempt, Book, Checkout, Register, Initiate.

This indicates the type of interactions to be controlled. Voting could be related to election, census, survey, referendum and ballot. Booking could be of tickets, hotel rooms or rental cars. Checkout could be of library books, hotel rooms or rental cars. Register could be for computer games. Initiate could be for message exchange.

Authentication Event is the sequence of _Authentication Attempts_ arriving at a particular server, possibly with the same partial credential, from any source, that terminates by successful authentication or by blocking.

**Number** – Single, Unique; Specified Number (> 1).

This indicates the maximum number of occurrences allowed.

**Unit** – Time Interval, Event, User.

This indicates the specific unit per which the number of occurrences is controlled. Time Interval could be in seconds, in days, etc. Event could be election, authentication, on-line transaction to move funds, etc.

**Actor** – User, Part of Program Logic, Automated Process.

This indicates who/what is performing the repeating interactions. User could be authenticated user, attacker. Part of program logic could be message exchange. Automated process could be virus, bot.

_Our taxonomy makes it abundantly clear that CIF is a "metaclass" in some senses. External policies must define for each system or application what constitutes an interaction, how many interactions should be allowed, and the unit. Each policy, then, defines a different class of CIF concerns._

### Causes

The graph of causes shows that there are two main causes: _Number of Interactions not Checked Properly_ or _Frequency of Interactions not Checked Properly_.

### Consequences

The graph of consequences shows what could happen due to the fault. Note that in the graph of consequences, _Credentials_ concerns username or password, smart card and personal identification number (PIN), retina, iris, fingerprint, etc. _Resource Exhaustion_ concerns memory, CPU or granted licenses.

### Sites

Since the concept of interaction is so broad and high level, compared to most programming languages, no general description of what is a site is feasible. Each system or application must define its own concept of interaction. An interaction must then be mapped to some code that controls or authorizes said interactions. More importantly, since a failure may be the total lack of code to recognize and control frequency of interaction, there is often no particular line or even block of code that can be pointed out as missing the control code. An entire path may be indicated from the beginning of an interaction event, that is, an outside agent indicates desire to start an interaction, to the final chance in execution flow that code may refuse to authorize the event.

### Related BF Classes

BF classes related to CIF are: IEX, ATN.

### Related CWEs and SFP

CWEs related to CIF are [CWE-307](https://cwe.mitre.org/data/definitions/307.html), [CWE-799](https://cwe.mitre.org/data/definitions/799.html), [CWE-837](https://cwe.mitre.org/data/definitions/837.html).

The only related SFP cluster is [SFP34 Unrestricted Authentication under the Primary Cluster: Authentication](https://apps.dtic.mil/docs/citations/ADB381215).

BF Descriptions of CIF Related CWEs are provided [here](https://docs.google.com/document/d/1MPE8TJC0u5mWzX1WQtf3FJII1D_eSAKyf5ndJFLJbQM/edit).

### Application

Application examples are provided [here](/Old/Examples/CIF.md).

### References

\[1\] I. Bojanova, P. E. Black, Y. Yesha, and Y. Wu, “The Bugs Framework (BF): A Structured approach to express bugs”, Proceedings of IEEE International Conference on Software Quality, Reliability and Security (QRS), 2016, , pp. 175-182.