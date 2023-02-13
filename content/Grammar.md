---
weight: 4
bookCollapseSection: false
title: "Grammar"
draft: false
---
# BF Grammar

LL1 Grammar of the developed for now BF Clusters: _CRY, _DAT, _INP, _MEM


`START := Vulnerability Converge`

`Vulnerability:= Bug Operation OA_E`

`OA_E := OperationAttribute OA_E | Error`

`Error := Fault FA_O | FinalError`

`FA_O := FaultAttribute FA_O | Operation OA_E`
`Converge:= Vulnerability Converge | Failure END`

____________________________________________________

`Bug := code_defect | specification_defect`

`code_defect := { Erroneous Code, Mismatched Operation, Missing Code, Wrong Code }`

`specification_defect := { Anonymous Scope, Inadequate Algorithm, Missing Modifier, Missing Qualifier, Modified Algorithm, Over-Restrictive Policy, Risky/Broken Algorithm, Under-Restrictive Policy, Weak Algorithm, Weak Protocol, Wrong Modifier, Wrong Qualifier, Wrong Scope }`

____________________________________________________

`Operation := dcl_opr | dvl_opr | dvr_opr | enc_opr | kmn_opr | mad_opr | mal_opr | mdl_opr | mus_opr | nrs_opr | tcm_opr | tcv_opr | vrf_opr`

`dcl_opr := { Declare, Define }`

`dvl_opr := { Validate, Sanitize }`

`dvr_opr := { Verify, Correct }`

`enc_opr := { Encrypt, Decrypt }`

`kmn_opr := { Generate/Select, Store, Distribute, Use, Destroy }`

`mad_opr := { Initialize, Reposition, Reassign }`

`mal_opr := { Allocate, Extend, Reallocate-Extend }`

`mdl_opr := { Deallocate, Reduce, Reallocate-Reduce }`

`mus_opr := { Initialize, Dereference, Read, Write, Clear }`

`nrs_opr := { Refer, Call }`

`tcm_opr := { Calculate, Evaluate }`

`tcv_opr := { Cast, Coerce }`

`vrf_opr := { Cryptographic Authenticate, Cryptographic Verify }`

____________________________________________________

`OperationAttribute := execution_space | mechanism | source_code`

`execution_space := { Admin, Bare-Metal, Kernel, Local, Userland }`

`mechanism := { Ad-hoc Bind, Asymmetric Algorithm, Bind, Data Type, Denylist, Digital Signature, Direct, Early Bind, Explicit, Format, Function, Generics, Hash Function + Random Numbers, Implicit, Lambda Expression, Late Bind, Length, Message Authentication Code (MAC), Method, Operator, Other Rules, Overloading, Overriding, Pass In, Pass Out, Procedure, Quantity, Range, Resolve, Safelist, Sequential, Simple, Symmetric Algorithm, Value }`

`source_code := { Codebase, Compiler/Interpreter, Standard Library, Third Party }`

____________________________________________________

`Fault := address_fault | data_fault | name_fault | size_fault | type_fault`

`address_fault := { Dangling Pointer, NULL Pointer, Over Bounds Pointer, Under Bounds Pointer, Untrusted Pointer, Wild Pointer, Wrong Position Pointer }`

`data_fault := { Corrupted Data, Corrupted Policy Data, Distorted Value, Flipped Sign, Forbidden Address, Forged Signature, Hardcoded Address, Hardcoded Key, Inconsistent Value, Meaningless Data, Over Range, Reference vs. Object, Rounded Value, Single Owned Address, Tampered Data, Tampered Policy Data, Truncated Value, Under Range, Unverified Data, Unverified Key, Unverified Other Keying Material, Weak Cyphertext, Weak Key, Weak Other Keying Material, Wrap Around, Wrong Argument, Wrong Index, Wrong Result, Wrong Size Used, Wrong Value }`

`name_fault := { Missing Overloaded Function, Missing Overridden Function, Wrong Function Resolved, Wrong Generic Function Bound, Wrong Object Resolved, Wrong Object Type Resolved, Wrong Overloaded Function Bound, Wrong Overridden Function Bound }`

`size_fault := { Not Enough Memory Allocated }`

`type_fault := { Casted Pointer, Confused Subtype, Incomplete Type, Invalid Data, Mismatched Argument, Wrong Argument Type, Wrong Generic Type, Wrong Index Type, Wrong Object Type Resolved, Wrong Type, Wrong Type Resolved }`

____________________________________________________

`FinalError := access | data_security | injection | memory | type_compute`

`access := { Wrong Access Function, Wrong Access Object, Wrong Access Type }`

`data_security := { Revealed Key, Revealed Other Keying Material, Revealed Plaintext }`

`injection := { Command Injection, File Injection, Parameter Injection, Query Injection, Source Code Injection }`

`memory := { Buffer Overflow, Buffer Underflow, Double Free, Memory Leak, Memory Overflow, Not Cleared Object, NULL Pointer Dereference, Object Corruption, Type Confusion, Uninitialized Object, Uninitialized Pointer Dereference, Untrusted Pointer Dereference, Use After Free }`

`type_compute := { Undefined }`


==============================================================================


`All Clusters:
_CRY, _DAT, _INP, _MEM`


`All Classes:
DCL, DVL, DVR, ENC, KMN, MAD, MAL, MDL, MUS, NRS, TCM, TCV, VRF`


`All Bugs:
Anonymous Scope, Erroneous Code, Inadequate Algorithm, Mismatched Operation, Missing Code, Missing Modifier, Missing Qualifier, Modified Algorithm, Over-Restrictive Policy, Risky/Broken Algorithm, Under-Restrictive Policy, Weak Algorithm, Weak Protocol, Wrong Code, Wrong Modifier, Wrong Qualifier, Wrong Scope`


`All Operations:
ACE Operation, Allocate, Calculate, Call, Cast, Clear, Coerce, Correct, Cryptographic Authenticate, Cryptographic Verify, Deallocate, Declare, Decrypt, Define, Dereference, Destroy, Distribute, DOS Operation, Encrypt, Evaluate, Extend, Generate/Select, IEX Operation, IMP Operation, Initialize, Read, Reallocate-Extend, Reallocate-Reduce, Reassign, Reduce, Refer, Reposition, Sanitize, Store, Use, Validate, Verify, Write`


`All Operation Attrubutes:
Ad-hoc Bind, Admin, Asymmetric Algorithm, Bare-Metal, Bind, Codebase, Compiler/Interpreter, Data Type, Denylist, Digital Signature, Direct, Early Bind, Explicit, Format, Function, Generics, Hash Function + Random Numbers, Implicit, Kernel, Lambda Expression, Late Bind, Length, Local, Message Authentication Code (MAC), Method, Operator, Other Rules, Overloading, Overriding, Pass In, Pass Out, Procedure, Quantity, Range, Resolve, Safelist, Sequential, Simple, Standard Library, Symmetric Algorithm, Third Party, Userland, Value`


`All Faults:
Casted Pointer, Confused Subtype, Corrupted Data, Corrupted Policy Data, Dangling Pointer, Distorted Value, Flipped Sign, Forbidden Address, Forged Signature, Hardcoded Address, Hardcoded Key, Incomplete Type, Inconsistent Value, Invalid Data, Meaningless Data, Mismatched Argument, Missing Overloaded Function, Missing Overridden Function, Not Enough Memory Allocated, NULL Pointer, Over Bounds Pointer, Over Range, Reference vs. Object, Rounded Value, Single Owned Address, Tampered Data, Tampered Policy Data, Truncated Value, Under Bounds Pointer, Under Range, Untrusted Pointer, Unverified Data, Unverified Key, Unverified Other Keying Material, Weak Cyphertext, Weak Key, Weak Other Keying Material, Wild Pointer, Wrap Around, Wrong Argument, Wrong Argument Type, Wrong Function Resolved, Wrong Generic Function Bound, Wrong Generic Type, Wrong Index, Wrong Index Type, Wrong Object Resolved, Wrong Object Type Resolved, Wrong Overloaded Function Bound, Wrong Overridden Function Bound, Wrong Position Pointer, Wrong Result, Wrong Size Used, Wrong Type, Wrong Type Resolved, Wrong Value`


`All Fault Attrubutes:
/other/, Boolean, Credentials, Cryptographic, Data Type, Digital Certificate, Digital Document, Entered, Function, Hashes, Heap, Huge, In Use, Keying Material, Litle, Moderate, Namespace, None, Numeric, Object, Pointer, Primitive, Private, Public, Secret, Shared, Single, Stack, State, Stored, Structure, System, Text, Transferred, User Entered`


`All Final Errors:
Buffer Overflow, Buffer Underflow, Command Injection, Double Free, File Injection, Memory Leak, Memory Overflow, Not Cleared Object, NULL Pointer Dereference, Object Corruption, Parameter Injection, Query Injection, Revealed Key, Revealed Other Keying Material, Revealed Plaintext, Source Code Injection, Type Confusion, Undefined, Uninitialized Object, Uninitialized Pointer Dereference, Untrusted Pointer Dereference, Use After Free, Wrong Access Function, Wrong Access Object, Wrong Access Type`
