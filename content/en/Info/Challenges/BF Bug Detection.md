---
weight: 4
title: "BF Bug Detection"
---
# BF Bug Detection -- from Failure to Bug<br/>_`Irena Bojanova, Inventor, Creator, PI,  Bugs Framework (BF), 2014 – ~~~~`_

Create tools detcting bugs from a failure(s) through backwards fault-error transitions utilizing the BE taxonomy, and causation and propagation rules - including BF matrices of meaningful (cause, operation, conseqeunce) weakness triples.

BF describes a _vulnerability_ as a chain of improper states and their transitions (see Figure 1). Each improper state corresponds to an instance of a BF class. The initial state has an improper operation over proper operands. The transition states have proper operations with at least one improper operand. All improper states propagate by the error from one state becoming the fault for the next state. I other words, the transition from the initial state is by improper operation (an operation that has a bug) over proper operands; the transitions from intermediate states are by proper operations with at least one improper operand (the operand is at fault). The improper operation or improper operand is the cause for that weakness. The improper result from an operation over its operands is the consequence from that weakness, and it becomes a cause for a next weakness or a failure. Knowing the failure and all the transitions at execution, we should be able to find the bug (see Figure 3)– simply go backwards by operand until an operation is improper – fixing the bug within that operation will resolve the vulnerability.

<br/>
 {{< img src="images/BF Models/BF Backtracking.svg" caption="Figure 1. BF features: Backwards from a failure to the bug – knowing the failure, go backwards by improper operand until an operation is improper – fixing the bug within that operation will resolve the vulnerability." >}}
<br/>

Please see details also from the following video from May 2021:
<div class="row">
<div class="col-9">
<br/><br/>
BF Goals, Features, and Taxonomy <br/>
<br/><br/>
{{< youtube QnCPXHLi7JQ >}}
</div>
</div>
<br/><br/>

<l style="font-size: 15px; color: #0428AE">_BF Citation: I. Bojanova, NIST, BF Goals, Features, and Taxonomy. Video. Accessed: <span id="currentDate"></span> [Online]. Available: [https://usnistgov.github.io/BF/info/challenges/bf-backtracking/](https://usnistgov.github.io/BF/info/challenges/bf-backtracking/)_.</l>



I. Bojanova, C. E. Galhardo and S. Moshtari, "Data Type Bugs Taxonomy: Integer Overflow, Juggling, and Pointer Arithmetics in Spotlight," _2022 IEEE 29th Annual Software Technology Conference (STC)_, 2022, pp. 192-205, doi: [10.1109/STC55697.2022.00035](https://doi.org/10.1109/STC55697.2022.00035), [Local Download (has CWE-BF di-graphs with links)](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=935220)

I. Bojanova and C. Eduardo Galhardo, "Classifying Memory Bugs Using Bugs Framework Approach," _2021 IEEE 45th Annual Computers, Software, and Applications Conference (COMPSAC_, 2021), pp. 1157-1164, doi: [10.1109/COMPSAC51774.2021.00159](https://doi.org/10.1109/COMPSAC51774.2021.00159), [Local Download (has CWE-BF di-graphs with links)](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=930038) 

I. Bojanova, [The Bugs Framework (BF)](../../../Presentations/Bugs_Framework-COMPSAC_2021-287-0614202.pdf);  [The Bugs Framework (BF) - with notes](../../../Presentations/Bugs_Framework-COMPSAC_2021-287-notes--06142021.ppt); and video from 06/14/2021, _2021 IEEE 45th Annual Computers, Software, and Applications Conference (COMPSAC_, 2021)

//more to be added//