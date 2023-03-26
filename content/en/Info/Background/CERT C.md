---
title: "CERT C"
bookHidden: true
---
# CERT C Coding Standard

The SEI CERT C Coding Standard defines the following "rules for secure coding in the C programming language" with the goal to "to develop safe, reliable, and secure systems, for example by eliminating undefined behaviors that can lead to undefined program behaviors and exploitable vulnerabilities" [1].

**Preprocessor (PRE)**

PRE30-C. Do not create a universal character name through concatenation  
PRE31-C. Avoid side effects in arguments to unsafe macros  
PRE32-C. Do not use preprocessor directives in invocations of function-like macros

**Declarations and Initialization (DCL)**

DCL30-C. Declare objects with appropriate storage durations  
DCL31-C. Declare identifiers before using them  
DCL36-C. Do not declare an identifier with conflicting linkage classifications  
DCL37-C. Do not declare or define a reserved identifier  
DCL38-C. Use the correct syntax when declaring a flexible array member  
DCL39-C. Avoid information leakage when passing a structure across a trust boundary  
DCL40-C. Do not create incompatible declarations of the same function or object  
DCL41-C. Do not declare variables inside a switch statement before the first case label

**Expressions (EXP)**

EXP30-C. Do not depend on the order of evaluation for side effects  
EXP32-C. Do not access a volatile object through a nonvolatile reference  
EXP33-C. Do not read uninitialized memory  
EXP34-C. Do not dereference null pointers  
EXP35-C. Do not modify objects with temporary lifetime  
EXP36-C. Do not cast pointers into more strictly aligned pointer types  
EXP37-C. Call functions with the correct number and type of arguments  
EXP39-C. Do not access a variable through a pointer of an incompatible type  
EXP40-C. Do not modify constant objects  
EXP42-C. Do not compare padding data  
EXP43-C. Avoid undefined behavior when using restrict-qualified pointers  
EXP44-C. Do not rely on side effects in operands to sizeof, \_Alignof, or \_Generic  
EXP45-C. Do not perform assignments in selection statements  
EXP46-C. Do not use a bitwise operator with a Boolean-like operand

**Integers (INT)**

INT30-C. Ensure that unsigned integer operations do not wrap  
INT31-C. Ensure that integer conversions do not result in lost or misinterpreted data  
INT32-C. Ensure that operations on signed integers do not result in overflow  
INT33-C. Ensure that division and remainder operations do not result in divide-by-zero errors  
INT34-C. Do not shift an expression by a negative number of bits or by greater than or equal to the number of bits that exist in the operand  
INT35-C. Use correct integer precisions  
INT36-C. Converting a pointer to integer or integer to pointer

**Floating Point (FLP)**

FLP30-C. Do not use floating-point variables as loop counters  
FLP32-C. Prevent or detect domain and range errors in math functions  
FLP34-C. Ensure that floating-point conversions are within range of the new type  
FLP36-C. Preserve precision when converting integral values to floating-point type  
FLP37-C. Do not use object representations to compare floating-point values

**Array (ARR)**

ARR30-C. Do not form or use out-of-bounds pointers or array subscripts  
ARR32-C. Ensure size arguments for variable length arrays are in a valid range  
ARR36-C. Do not subtract or compare two pointers that do not refer to the same array  
ARR37-C. Do not add or subtract an integer to a pointer to a non-array object  
ARR38-C. Guarantee that library functions do not form invalid pointers  
ARR39-C. Do not add or subtract a scaled integer to a pointer

**Characters and Strings (STR)**

STR30-C. Do not attempt to modify string literals STR31-C. Guarantee that storage for strings has sufficient space for character data and the null terminator  
STR32-C. Do not pass a non-null-terminated character sequence to a library function that expects a string  
STR34-C. Cast characters to unsigned char before converting to larger integer sizes  
STR37-C. Arguments to character-handling functions must be representable as an unsigned char  
STR38-C. Do not confuse narrow and wide character strings and functions

**Memory Management (MEM)**

MEM30-C. Do not access freed memory MEM31-C. Free dynamically allocated memory when no longer needed  
MEM33-C. Allocate and copy structures containing a flexible array member dynamically  
MEM34-C. Only free memory allocated dynamically  
MEM35-C. Allocate sufficient memory for an object  
MEM36-C. Do not modify the alignment of objects by calling realloc()

**Input/Output (FIO)**

FIO30-C. Exclude user input from format strings  
FIO32-C. Do not perform operations on devices that are only appropriate for files  
FIO34-C. Distinguish between characters read from a file and EOF or WEOF  
FIO37-C. Do not assume that fgets() or fgetws() returns a nonempty string when successful  
FIO38-C. Do not copy a FILE object  
FIO39-C. Do not alternately input and output from a stream without an intervening flush or positioning call  
FIO40-C. Reset strings on fgets() or fgetws() failure  
FIO41-C. Do not call getc(), putc(), getwc(), or putwc() with a stream argument that has side effects  
FIO42-C. Close files when they are no longer needed  
FIO44-C. Only use values for fsetpos() that are returned from fgetpos()  
FIO45-C. Avoid TOCTOU race conditions while accessing files  
FIO46-C. Do not access a closed file  
FIO47-C. Use valid format strings

**Environment (ENV)**

ENV30-C. Do not modify the object referenced by the return value of certain functions  
ENV31-C. Do not rely on an environment pointer following an operation that may invalidate it  
ENV32-C. All exit handlers must return normally  
ENV33-C. Do not call system()  
ENV34-C. Do not store pointers returned by certain functions

**Signals (SIG)**

SIG30-C. Call only asynchronous-safe functions within signal handlers  
SIG31-C. Do not access shared objects in signal handlers  
SIG34-C. Do not call signal() from within interruptible signal handlers  
SIG35-C. Do not return from a computational exception signal handler

**Error Handling (ERR)**

ERR30-C. Set errno to zero before calling a library function known to set errno, and check errno only after the function returns a value indicating failure  
ERR32-C. Do not rely on indeterminate values of errno  
ERR33-C. Detect and handle standard library errors

**Concurrency (CON)**

CON30-C. Clean up thread-specific storage  
CON31-C. Do not destroy a mutex while it is locked  
CON32-C. Prevent data races when accessing bit-fields from multiple threads  
CON33-C. Avoid race conditions when using library functions  
CON34-C. Declare objects shared between threads with appropriate storage durations  
CON35-C. Avoid deadlock by locking in a predefined order  
CON36-C. Wrap functions that can spuriously wake up in a loop  
CON37-C. Do not call signal() in a multithreaded program  
CON38-C. Preserve thread safety and liveness when using condition variables  
CON39-C. Do not join or detach a thread that was previously joined or detached  
CON40-C. Do not refer to an atomic variable twice in an expression  
CON41-C. Wrap functions that can fail spuriously in a loop

**Miscellaneous (MSC)**

MSC30-C. Do not use the rand() function for generating pseudorandom numbers  
MSC32-C. Properly seed pseudorandom number generators  
MSC33-C. Do not pass invalid data to the asctime() function  
MSC37-C. Ensure that control never reaches the end of a non-void function  
MSC38-C. Do not treat a predefined identifier as an object if it might only be implemented as a macro  
MSC39-C. Do not call va\_arg() on a va\_ list that has an indeterminate value  
MSC40-C. Do not violate constraints

### References

\[1\] SEI CERT. [C Coding Standard: Rules for Developing Safe, Reliable, and Secure Systems](https://www.sei.cmu.edu/downloads/sei-cert-c-coding-standard-2016-v01.pdf). 2016.  