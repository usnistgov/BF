---
weight: 3
title: "IEX"
---
# Information Exposure (IEX) Examples

{{< rawhtml >}}

<a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5172">
            <p>
               <h2>CVE-2007-5172</h2>
            </p>
         </a>
         <ul>This vulnerability is listed in <a href="#1">[1]</a> and discussed in <a href="#2">[2, 3]</a>. </ul>
         <p>
            <h3>BF Taxonomy</h3>
         </p>
         <ul><u>IEX 1</u> of password leads to <u>ATN</u> leads to <u>IEX 2</u>. </ul>
         <ul><u><b>IEX 1</b></u></ul>
         <ul><b>Cause</b>:
            <cause>Improper</cause>
            <cause> </cause>
            <cause>Details</cause> (error message displays password)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i> Information</i>:
               <attribute>Credentials</attribute> (password)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>High</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Little</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>On-Demand</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Legitimate</attribute> (connection error message)
            </ul>
            <ul><i>Use</i>:
               <attribute>Indirect</attribute>
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>ATN</consequence>.
         </ul>
         <ul><u><b>ATN</b></u> (to be described in a subsequent publication)</ul>
         <ul><u><b>IEX 2</b></u></ul>
         <ul><b>Cause</b>:
            <cause>Failure to Properly Protect Sensitive Data</cause> (password)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i> Information</i>:
               <attribute>Any </attribute>(user data)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>Low/High</attribute>

            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Huge</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>On-Demand</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Legitimate</attribute>
            </ul>
            <ul><i>Use</i>:
               <attribute>Direct</attribute> (valuable on its own)
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>Any</consequence>
            <consequence> </consequence>
            <consequence>IEX</consequence>
            <consequence> </consequence>
            <consequence>consequence</consequence>.
         </ul>
         <ul><b>Analysis</b> (based on [1–3): CVE-2007-5172 Description: “Quicksilver Forums before 1.4.1 allows remote
            attackers to obtain sensitive information by causing unspecified connection errors, which reveals the
            database password in the resulting error message." <a href="#1">[1]</a>.</ul>
         <a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2004-0243">
            <p>
               <h2>CVE-2003-0243</h2>
            </p>
         </a>
         <ul>This vulnerability is listed in <a href="#30">[30]</a> and discussed in <a href="#5">[5, 6]</a>. </ul>
         <p>
            <h3>BF Taxonomy</h3>
         </p>
         <ul><u>IEX 1</u> of password leads to <u>ATN </u>leads to<u> IEX 2</u>. </ul>
         <ul><u><b>IEX 1</b></u></ul>
         <ul><b>Cause</b>:
            <cause>Program</cause>
            <cause> </cause>
            <cause>Behavior</cause> (different responces for correct vs incorrect password)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i>Information</i>:
               <attribute>Credentials</attribute> (password)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>High</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Used</attribute>
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Little</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>On-Demand</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Side</attribute> (response inconsistency -- message replies allow brute force password
               guessing)
            </ul>
            <ul><i>Use</i>:
               <attribute>Indirect</attribute>
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>ATN</consequence>.
         </ul>
         <ul><u><b>ATN</b></u> (to be described in a subsequent publication)</ul>
         <ul><u><b>IEX 2</b></u></ul>
         <ul><b>Cause</b>:
            <cause>Failure to Properly Protect Sensitive Data</cause> (password)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i>Information</i>:
               <attribute>Any </attribute>(user data)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>Low/H</attribute>
               <attribute>igh</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Huge</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>On-Demand</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Legitimate</attribute>
            </ul>
            <ul><i>Use</i>:
               <attribute>Direct</attribute> (valuable on its own)
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>Any</consequence>
            <consequence> </consequence>
            <consequence>IEX</consequence>
            <consequence> </consequence>
            <consequence>consequence</consequence>.
         </ul>
         <ul></ul>
         <ul><b>Analysis</b> (based on <a href="#4">[4-6]</a>): CVE-2004-0243 Description: “AIX 4.3.3 through AIX 5.1,
            when direct remote login is disabled, displays a different message if the password is correct, which allows
            remote attackers to guess the password via brute force methods." <a href="#4">[4]</a>.</ul>
         <ul>CWE-203 Description: “The product behaves differently or sends different responses in a way that exposes
            security-relevant information about the state of the product, such as whether a particular operation was
            successful or not." <a href="#5">[5]</a>.</ul>
         <ul>“For example, the message reply for an incorrectly guessed password might be "Incorrect userid or password"
            whereas a correct guess would yield a message such as "Remote logins for this account are not allowed".” <a
               href="#6">[6]</a></ul>
         <a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2004-1602">
            <p>
               <h2>CVE-2004-1602</h2>
            </p>
         </a>
         <ul><i></i>This vulnerability is listed in <a href="#7">[7]</a> and discussed in <a href="#8">[8-10]</a>. </ul>
         <p>
            <h3>BF Taxonomy</h3>
         </p>
         <ul><u>IEX 1</u> of username leads to <u>IEX</u><u> </u><u>2</u> of password leads to <u>ATN</u> leads to
            <u>IEX</u><u> </u><u>3</u></ul>
         <ul><u><b>IEX</b></u><u><b> </b></u><u><b>1</b></u></ul>
         <ul><b>Cause</b>:
            <cause>Program</cause>
            <cause> </cause>
            <cause>Behavior</cause> (different time for valid vs invalid username)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i>Information</i>:
               <attribute>Credentials</attribute> (username)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>High</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Little</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>Once</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Covert</attribute> (timing inconsistency -- server response timing allows finding valid
               usernames)
            </ul>
            <ul><i>Use</i>:
               <attribute>Indirect</attribute>
            </ul>
         </ul>
         <ul><b>Consequences</b>: IEX 2 (of password)</ul>
         <ul><u><b>IEX 2</b></u></ul>
         <ul><b>Cause</b>:
            <cause>Failure to Properly Protect Sensitive Data (username).</cause>
         </ul>
         <ul><b>Attributes</b>:
            <ul><i>Information</i>:
               <attribute>Credentials</attribute> (passwords)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>High</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Little</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>Once</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Legitimate</attribute>
            </ul>
            <ul><i>Use</i>:
               <attribute>Indirect</attribute>
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>ATN</consequence>.
         </ul>
         <ul><u><b>ATN</b></u> (to be described in a subsequent publication)</ul>
         <ul><u><b>IEX 3</b></u></ul>
         <ul><b>Cause</b>:
            <cause>Failure to Properly Protect Sensitive Data</cause> (password)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i>Information</i>:
               <attribute>Any </attribute>(user data)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>Low/H</attribute>
               <attribute>igh</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Huge</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>On-Demand</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Legitimate</attribute>
            </ul>
            <ul><i>Use</i>:
               <attribute>Direct</attribute> (valuable on its own)
            </ul>
            <ul><b>Consequences</b>:
               <consequence>Any</consequence>
               <consequence> </consequence>
               <consequence>IEX</consequence>
               <consequence> </consequence>
               <consequence>consequence</consequence>.
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>Any</consequence>
            <consequence> </consequence>
            <consequence>IEX</consequence>
            <consequence> </consequence>
            <consequence>consequence</consequence>.
         </ul>
         <ul></ul>
         <ul><b>Analysis</b><b> </b>(based on <a href="#7">[7-10]</a>):<b> </b>Using execution path timing analysis
            attack at the ProFTPD login procedure, an attacker can determine “which user names are valid, which are
            special, and which ones do not exist on the remote system” <a href="#9">[9]</a>. The timing attack on the
            username is followed by a brute force attack on the password when the username is already known as a result
            of the timing attack </ul>
         <p>
            <h2><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5753">CVE-2017-5753</a> and <a
                  href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5715">CVE-2017-5715</a> (Spectre)
            </h2>
         </p>
         <ul>This vulnerability is listed in <a href="#11">[11, 12]</a> and discussed in <a href="#13">[13-21]</a>.
         </ul>
         <p>
            <h3>BF Taxonomy</h3>
         </p>
         <ul><b>Cause</b>:
            <cause>Hardware</cause>
            <cause> </cause>
            <cause>Behavior</cause> (caching results in reduced access time, and this outcome of speculative execution
            based on the wrong branch is not undone.)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i>Information</i>:
               <attribute>Any</attribute> (user’s data)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>High</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
            </ul>
            <ul><i>Information</i> <i>Size</i>:
               <attribute>Huge</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>On-Demand</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Side</attribute> (cache based timing)
            </ul>
            <ul><i>Use</i>:
               <attribute>Any</attribute>
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>Any</consequence>
            <consequence> </consequence>
            <consequence>IEX</consequence>
            <consequence> </consequence>
            <consequence>consequence</consequence>.
         </ul>
         <ul></ul>
         <ul><b>Analysis</b> (based on <a href="#11">[11-21]</a>): The attacker uses a cache timing channel using
            Flush+Reload <a href="#16">[16]</a>, <a href="#17">[17]</a> and Evict+Reload <a href="#17">[17]</a>, <a
               href="#18">[18]</a>. This is based on the fact that access to cached data requires less time.
            Mis-training of the processor by the attacker results in the processor’s speculative execution based on a
            wrong branch. This execution affects the cache in a certain way, and timing can be used to recover
            information about the cache state, which exposes user’s data.</ul>
         <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5754">
            <p>
               <h2>CVE-2017-5754 (Metltdown)</h2>
            </p>
         </a>
         <ul>This vulnerability is listed in <a href="#22">[22]</a> and discussed in <a href="#20">[20-24]</a>. </ul>
         <p>
            <h3>BF Taxonomy</h3>
         </p>
         <ul><b>Cause</b>:
            <cause>Hardware</cause>
            <cause> </cause>
            <cause>Behavior</cause> (CPU out of order execution and caching allows overcoming memory isolation –
            discrepancy detected is between access time to cache memory and access time to non-cache memory, and this
            outcome of out of order execution of forbidden access
            is not undone.)
         </ul>
         <ul><b>Attributes</b>:
            <ul><i>Information</i>:
               <attribute>Any</attribute> (e.g. passwords stored in password manager or browser, personal photos,
               emails, instant messages and even business-critical documents)
            </ul>
            <ul><i>Sensitivity</i>:
               <attribute>High</attribute>
            </ul>
            <ul><i>Information</i><i> State</i>:
               <attribute>Stored</attribute>
               <attribute> </attribute>(in kernel-memory registries of other processes or virtual machines in the cloud)
            </ul>
            <ul><i>Information</i><i> Size</i>:
               <attribute>Huge</attribute>
            </ul>
            <ul><i>Exposure</i>:
               <attribute>Selective</attribute>
            </ul>
            <ul><i>Frequency</i>:
               <attribute>On-Demand</attribute>
            </ul>
            <ul><i>Channel</i>:
               <attribute>Covert</attribute> (out of order execution and cache-based timing)
            </ul>
            <ul><i>Use</i>:
               <attribute>Any</attribute>
            </ul>
         </ul>
         <ul><b>Consequences</b>:
            <consequence>Any</consequence>
            <consequence> </consequence>
            <consequence>IEX</consequence>
            <consequence> </consequence>
            <consequence>consequence</consequence>.
         </ul>
         <ul></ul>
         <ul><b>Analysis</b> (based on information in <a href="#19">[19-24]</a>): Meltdown overcomes the OS memory
            isolation, which ensures user programs cannot access each other’s memory or kernel memory. “It breaks all
            security guarantees provided by address space isolation as well as para-virtualized environments and, thus,
            every security mechanism building upon this foundation.” <a href="#23">[23]</a></ul>
         <ul>A crucial observation is that in this attack, speculative execution enables access by the processor to
            memory that the attacker is not allowed to access. This is done before that forbidden access is blocked.
            Later, because the forbidden access had to be blocked, its effects are undone, excluding caching. Because
            caching was not undone, the effect on cache state can be measured using access time measurement <a
               href="#4">[4]</a>, <a href="#11">[11]</a>, <a href="#12">[12]</a>.</ul>
         <ul>The attacker runs code that implements a covert timing channel. That code transmits values over that
            channel using indirect addressing and out of order execution, and also recovers the transmitted values using
            time measurements.</ul>
         <ul>The operation of the timing covert channel can be explained using the toy example in <a href="#4">[4]</a>,
            which includes the following line that will never be reached:</ul>
         <ul><code>“access(</code><code>probe_array</code><code>[data * 4096]);” </code></ul>
         <ul>Here data is secret information that is not accessible to the attacker. However, the hardware, not knowing
            whether the above instruction will be executed, executes it out of order so that the outcome to be available
            in case its execution will be needed.</ul>
         <ul>In the Meltdown attack, as in the toy example, out of order execution of an instruction results in data
            being accessed, in anticipation of the possibility that its execution will be needed. This can happen even
            when access by the attacker’s code will never be done. As in the toy example, the attacker uses instructions
            that are executed out of order by the processor, and this results in indirect access to cache lines with
            access addresses that depend on the secret value that is not accessible to the attacker. This includes the
            possibility of selecting access or no access depending on the secret value: for each bit of the secret
            value, access if the bit value is 0, and no access if the bit value is <code>1</code> <a href="#4">[4]</a>.
            At the other end of the covert channel, access time measurement can be used to determine whether a
            particular cache line was accessed, in order to find out whether the transmitted bit was a <code>0</code> or
            a <code>1</code>.</ul>
         <ul>A timing covert channel is established using the Flush+Reload technique in <a href="#16">[16]</a>. It is
            based on the observation that access time depends on whether an address was cached. Therefore, access time
            measurements are used to determine which addresses were cached. Access time to the addresses that were
            cached is lower. The cached addresses are used to compute the secret value. For example, in the toy example
            the secret value is the cached address divided by 4096. In Meltdown, the attacker controls and has access to
            both the transmitting end and the receiving end of the covert timing channel.</ul>
         <ul>Access time measurements are done as follows: Let S be a set of addresses. All addresses in S are accessed,
            and access time is measured for each one of them. This enables finding all addresses in S that were cached,
            because the measured access time to each one of them is much lower than the measured access time to each
            address in S that was not cached.</ul>
            <p class="text-info">
        <h2><a name="ref">References</a></h2>
      </p>
         <ul><small><a name="1">[1] The MITRE Corporation. CVE-2007-5172. <a
                     href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5172"
                     target="_blank">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5172</a>.</a></small></ul>
         <ul><small><a name="2">[2] The MITRE Corporation. Common Weakness Enumeration. CWE 209. <a
                     href="https://cwe.mitre.org/data/definitions/209.html"
                     target="_blank">https://cwe.mitre.org/data/definitions/209.html</a>.</a></small></ul>
         <ul><small><a name="3">[3] The MITRE Corporation. CVE- <a
                     href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-2049" target="_blank">2008-2049</a>.
                  <a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-2049"
                     target="_blank">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-2049</a>.</a></small></ul>
         <ul><small><a name="4">[4] The MITRE Corporation. CVE-2004-0243. <a
                     href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2004-0243"
                     target="_blank">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2004-0243</a>.</a></small></ul>
         <ul><small><a name="5">[5] The MITRE Corporation. Common Weakness Enumeration. CWE 203. <a
                     href="https://cwe.mitre.org/data/definitions/203.html"
                     target="_blank">https://cwe.mitre.org/data/definitions/203.html</a>.</a></small></ul>
         <ul><small><a name="6">[6] “Re: sqwebmail web login.” [Online]. Available: <a
                     href="https://marc.info/?l=bugtraq&amp;m=107583269206044&amp;w=2"
                     target="_blank">https://marc.info/?l=bugtraq&amp;m=107583269206044&amp;w=2</a>. [Accessed: Jan. 27,
                  2019].</a></small></ul>
         <ul><small><a name="7">[7] The MITRE Corporation. CVE-2004-1602. <a
                     href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2004-1602"
                     target="_blank">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2004-1602</a>.</a></small></ul>
         <ul><small><a name="8">[8] P. Laverty. “About User Enumeration.” [Online]. Available: <a
                     href="https://blog.rapid7.com/2017/06/15/about-user-enumeration/"
                     target="_blank">https://blog.rapid7.com/2017/06/15/about-user-enumeration/</a> . [Accessed: Jan.
                  27, 2019].</a></small></ul>
         <ul><small><a name="9">[9] “ProFTPD 1.2.x remote users enumeration bug.” [Online]. Available: <a
                     href="https://marc.info/?l=bugtraq&amp;m=109786760926133&amp;w=2"
                     target="_blank">https://marc.info/?l=bugtraq&amp;m=109786760926133&amp;w=2</a>. [Accessed: Jan. 27,
                  2019].</a></small></ul>
         <ul><small><a name="10">[10] Security Tracker. “ProFTPd Login Timing Differences Disclose Valid User Account
                  Names to Remote Users.” [Online]. Available:<a href="https://securitytracker.com/id?1011687"
                     target="_blank">https://securitytracker.com/id?1011687</a>. [Accessed: Jan. 27, 2019]</a></small>
         </ul>
         <ul><small><a name="11">[11] The MITRE Corporation. CVE-2017-5753. <a
                     href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5753"
                     target="_blank">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5753</a>.</a></small></ul>
         <ul><small><a name="12">[12] The MITRE Corporation. CVE-2017-5715. <a
                     href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5715"
                     target="_blank">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5715</a>.</a></small></ul>
         <ul><small><a name="13">[13] P. Kocher, et al. "Spectre attacks: Exploiting speculative execution."
                  <i>arXiv</i><i> </i><i>preprint</i><i> </i><i>arXiv:1801.01203</i> (2018).</a></small></ul>
         <ul><small><a name="14">[14] D. Gruss. “Software-based Microarchitectural Attacks.” [Online]. Available: <a
                     href="https://gruss.cc/files/oecg_2018.pdf"
                     target="_blank">https://gruss.cc/files/oecg_2018.pdf</a> . Pdf. [Accessed: Jan. 27,
                  2019].</a></small></ul>
         <ul><small><a name="15">[15] D. Feldman. “Timing is Everything: Understanding the Meltdown and Spectre
                  Attacks.” [Online]. Available: <a
                     href="https://hackernoon.com/timing-is-everything-understanding-the-meltdown-and-spectre-attacks-5e1946e44f9f"
                     target="_blank">https://hackernoon.com/timing-is-everything-understanding-the-meltdown-and-spectre-attacks-5e1946e44f9f</a>
                  .[Accessed: Jan. 27, 2019].</a></small></ul>
         <ul><small><a name="16">[16] Y. Yarom and K. Falkner. "FLUSH+ RELOAD: A High Resolution, Low Noise, L3 Cache
                  Side-Channel Attack," in <i>23</i><i>rd</i><i> </i><i>USENIX</i><i> </i><i>Security</i><i>
                  </i><i>Symposium</i>, vol. 1, pp 719-732. 2014.</a></small></ul>
         <ul><small><a name="17">[17] D. Gruss, R. Spreitzer, and S. Mangard. "Cache Template Attacks: Automating
                  Attacks on Inclusive Last-Level Caches," in <i>24</i><i>th</i><i> </i><i>USENIX</i><i>
                  </i><i>Security</i><i> </i><i>Symposium</i>, pp. 897-912. 2015.</a></small></ul>
         <ul><small><a name="18">[18] M. Lipp, D. Gruss, R. Spreitzer, C. Maurice, and S. Mangard, “ARMageddon: Cache
                  Attacks on Mobile Devices,” in <i>25</i><i>th</i> <i>USENIX</i><i> </i><i>Security</i><i>
                  </i><i>Symposium</i>, pp. 549-564. 2016.</a></small></ul>
         <ul><small><a name="19">[19] Redhat. “Meltdown &amp; Spectre -Kernel Side-Channel Attacks – CVE-2017-5754
                  CVE-2017-5753
                  CVE-2017-5715.” [Online]. Available: <a
                     href="https://access.redhat.com/security/vulnerabilities/speculativeexecution"
                     target="_blank">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a>.
                  [Accessed: Jan. 27, 2019].</a></small></ul>
         <ul><small><a name="20">[20] P. Bright. “Spectre, Meltdown researchers unveil 7 more speculative execution
                  attacks.”
                  [Online]. Available: <a
                     href="https://arstechnica.com/gadgets/2018/11/spectre-meltdown-researchers-unveil-7-more-speculative-execution-attacks/"
                     target="_blank">https://arstechnica.com/gadgets/2018/11/spectre-meltdown-researchers-unveil-7-more-speculative-execution-attacks/</a>
                  . [Accessed: Jan. 27, 2019].</a></small></ul>
         <ul><small><a name="21">[21] “A Simplified Explanation of the ‘Meltdown’ CPU Vulnerability.” [Online].
                  Available: <a
                     href="https://hackernoon.com/a-simplified-explanation-of-the-meltdown-cpu-vulnerability-ad316cd0f0de"
                     target="_blank">https://hackernoon.com/a-simplified-explanation-of-the-meltdown-cpu-vulnerability-ad316cd0f0de</a>
                  . [Accessed: Jan. 27, 2019].</a></small></ul>
         <ul><small><a name="22">[22] The MITRE Corporation. CVE-2017-5754. <a
                     href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5754"
                     target="_blank">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5754</a>.</a></small></ul>
         <ul><small><a name="23">[23] M. Lipp, et al. "Meltdown: Reading kernel memory from user space," <i>27th</i><i>
                  </i><i>USENIX</i><i> </i><i>Security</i><i> </i><i>Symposium</i><i> </i><i>(USENIX</i><i>
                  </i><i>Security</i><i> </i><i>18)</i>. Aug. 15-17, 2018, Baltimore, MD, United States. pp.
                  973-990.</a></small></ul>
         <ul><small><a name="24">[24] Wikipedia. Meltdown (security vulnerability). <a
                     href="https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)"
                     target="_blank">https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)</a>.</a></small>
         </ul>
         <ul></ul>

{{< /rawhtml >}}