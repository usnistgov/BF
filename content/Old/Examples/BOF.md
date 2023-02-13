---
weight: 1
title: "BOF"
---
# Buffer Overflow (BOF) Examples

{{< rawhtml >}}
<a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2014-0160">
        <p>
          <h2>CVE-2014-0160 (Heartbleed)</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Input not checked properly</cause> leads to <cause>Data Exceeds Array</cause> (specifically <sub-cause>
          Too Much Data</sub-cause>)
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Access</u>: <attribute>Read</attribute>
        </ul>
        <ul>Boundary: <attribute>Above </attribute>
        </ul>
        <ul>Location: <attribute>Heap </attribute>
        </ul>
        <ul>Data Size: <attribute>Huge </attribute>
        </ul>
        <ul>Excursion: <attribute>Continuous </attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>IEX</consequence> (if not had been cleared - <em> CWE-226</em>)
      </ul>
      <p>
        <h3>BF Description</h3>
      </p>
      <ul>"<cause>Input not checked properly</cause> leads to <sub-cause>too much data</sub-cause>, where <attribute>
          huge</attribute> data is <attribute>read</attribute> from the <attribute>heap</attribute> in a <attribute>
          continuous</attribute> excursion <attribute>above</attribute> the array boundary, which may be exploited for
        <consequence>IEX</consequence> (if not had been cleared)." <a href="#ref">[2]</a></ul>
      <p>
        <h3>CVE Description</h3>
      </p>
      <ul>"The (1) TLS and (2) DTLS implementations in OpenSSL 1.0.1 before 1.0.1g do not properly handle Heartbeat
        Extension packets, which allows remote attackers to obtain sensitive information from process memory via crafted
        packets that trigger a buffer over-read, as demonstrated by reading private keys, related to d1_both.c and
        t1_lib.c, aka the Heartbleed bug." <a href="#ref">[1]</a></ul>
      <p>
        <h3>Analysis</h3>
      </p>
      <ul>The following analysis is based on information in <a href="#ref">[1,3,4,5]</a>. A user has to send to the
        software data, and a number called <i>payload </i>that is the length of that data. The software has to send the
        data received back to the user. In the Heartbleed attack, a malicious user gives <i>payload </i>a value that can
        be as large as 65535+1+2+16, and sends data having a number of bytes that is much less than payload, and can be
        as small as 1. The software stores that data in an array that it allocated for that purpose. The size of that
        array is much less than 65535+1+2+16. The software does not check the data and the value of <i>payload </i>in
        order to make sure that the number of bytes of data is equal to payload. The software therefore assumes that
        those numbers are equal. The software reads, using memcpy, <i>payload </i>consecutive bytes from that array,
        beginning at its first byte, (<attribute>continuous</attribute> excursion) and sends them to the malicious user.
        This results in reading a large number of bytes beyond the end of the allocated array. The software did not
        clear the memory that it read from beyond the allocated array. Therefore, the data read and sent to the
        malicious user by the software includes sensitive information.</ul>

      <p>
        <h3>Source Code</h3>
      </p>
      
      <p>
      <ul>
        <table align="center" class="table-responsive">
          <tr>
            <td align="center"> Code With Bug</td>

          <tr>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre> 1 <br> 2 <br> 3 <br> 4<br> 5<br> 6<br> 7<br> 8 <br></pre>
                    </td>
                    <td>
                      <pre>                                         <br> <br> <br>hbtype = *p++;<br><span class="text-primary">n2s</span>(p, payload);<br><br><br>pl = p;<br></pre>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <td align="center"> Code With Fix</td>
          </tr>
          <td>
            <div class="">
              <table>
                <tr>
                  <td>
                    <pre> <span class="addLine">1 <br> 2 <br> 3</span> <br> 4 <br> 5 <br> <span class="addLine">6</span> <br> <span class="addLine">7</span> <br> 8 <br></pre>
                  </td>
                  <td>
                    <pre><span class="text-muted">/* Read type and payload length first */</span><br><span class="text-primary">if </span>(1 +2 + 16 > s->s3->rrec.length)<br>   &nbsp;<span class="text-primary">return</span> 0; <span class="text-muted">/* silently discard */</span><br>hbtype = *p++;<br><span class="text-primary">n2s</span>(p, payload);<br><span class="text-primary">if </span>(1 + 2 + payload + 16 > s->s3->rrec.length)<br>   &nbsp;<span class="text-primary">return</span> 0; <span class="text-muted"> /* silently discard per RFC 6520 sec. 4 */</span><br>pl = p;</pre>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          </tr>
        </table>
      </ul>
      </p>

      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-0235" <p>
        <h2>CVE-2015-0235 (Ghost)</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Incorrect Calculation</cause> (<sub-cause>Missing Factor</sub-cause>) leads to <sub-cause>Array Too Small
        </sub-cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Access</u>: <attribute>Write</attribute>
        </ul>
        <ul>Boundary: <attribute>Above </attribute>
        </ul>
        <ul>Location: <attribute>Heap </attribute>
        </ul>
        <ul>Data Size: <attribute>Some </attribute>
        </ul>
        <ul>Excursion: <attribute>Continuous </attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Arbitrary Code Execution</consequence> leading to <consequence>DoS</consequence>
      </ul>
      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>
        <cause>"Incorrect calculation</cause> (<sub-cause>missing factor</sub-cause>) leads to <sub-cause>array too
          small</sub-cause>, where <attribute>some</attribute> data is <attribute>written</attribute> to the <attribute>
          heap</attribute> in a <attribute>continuous</attribute> excursion <attribute>above</attribute> the array
        boundary, which may be exploited for <consequence>arbitrary code execution</consequence>, leading to
        <consequence>DoS</consequence>." <a href="#ref">[2]</a>
      </ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"Heap-based buffer overflow in the __nss_hostname_digits_dots function in glibc 2.2, and other 2.x versions
        before 2.18, allows context-dependent attackers to execute arbitrary code via vectors related to the (1)
        gethostbyname or (2) gethostbyname2 function, aka GHOST." <a href="#ref">[6]</a>
      </ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul>The following analysis is based on information in <a href="#ref">[6,7,8]</a>. The number of bytes that can be
        overwritten is sizeof (char *), which is 4 bytes on a 32 bit machine, and 8 bytes on a 64 bit machine. In a
        calculation of the size needed to store certain data, the size of a char pointer is missing, resulting in
        <sub-cause>array too small</sub-cause>. Buffer over write is done by strcpy (<attribute>continuous</attribute>
        excursion). Qualys developed an attack on the Exim mail server, exploiting this vulnerability, as proof of
        concept. This attack uses an initial buffer over write to enlarge the number in the size field of a portion of
        memory that is available for the next allocation. This modification enables a subsequent over write that enables
        write-anything-anywhere, which in turn enables over writing Exim's Access Control Lists, which in turn enables
        <consequence>arbitrary code execution</consequence>.
      </ul>
      </p>

      <p>
        <h3>Source Code</h3>
      </p>

      <p>
      <ul>
        <table align="center" class="table-responsive">
          <tr>
            <td align="center"> Code With Bug</td>
          <tr>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre> 1 <br> 2 <br> <br> 3 <br> 4<br> 5<br> <br> 6<br> 7<br></pre>
                    </td>
                    <td>
                      <pre><span class="text-muted">/* calculate size incorrectly*/ </span> <br>size_needed = (<span class="text-primary">sizeof</span> (*host_addr)+ <span class="text-primary">sizeof</span> (*h_addr_ptrs)<br>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  + <span class="text-primary">strlen</span> (name) + 1); <br><br>host_addr = (host_addr_t *) *buffer;<br>h_addr_ptrs = (host_addr_list_t *)((<span class="text-primary"> char </span> *) host_addr <br>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  + <span class="text-primary">sizeof</span> (*host_addr));<br>hostname = (<span class="text-primary">char</span> *) h_addr_ptrs + <span class="text-primary">sizeof</span> (*h_addr_ptrs);<br>resbuf->h_name = <span class="text-primary">strcpy</span> (hostname, name);  </pre>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <td align="center"> Code With Fix</td>
          </tr>
          <td>
            <div class="">
              <table>
                <tr>
                  <td>
                    <pre> 1 <br> <span class="addLine">2</span> <br> <br> 3 <br> 4<br> 5<br> <br> 6<br> 7<br></pre>
                  </td>
                  <td>
                    <pre><span class="text-muted">/* calculate size incorrectly*/ </span> <br>size_needed = (<span class="text-primary">sizeof</span> (*host_addr) + <span class="text-primary">sizeof</span> (*h_addr_ptrs) <br>              + <span class="text-primary">sizeof</span> (*h_alias_ptr) + <span class="text-primary">strlen</span> (name) + 1);<br><br>host_addr = (host_addr_t *) *buffer;<br>h_addr_ptrs = (host_addr_list_t *)((<span class="text-primary">char</span>*) host_addr <br>        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + <span class="text-primary">sizeof</span> (*host_addr));<br>hostname = (<span class="text-primary">char</span>*) h_addr_ptrs + sizeof (*h_addr_ptrs);<br>resbuf->h_name = <span class="text-primary">strcpy</span> (hostname, name);  </pre>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </table>
      </ul>
      </p>

      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-2304">
        <p>
          <h2>CVE-2010-1773 (Chrome WebCore)</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Incorrect calculation</cause>, (<sub-cause>off by one</sub-cause>) leads to a <cause>wrong index</cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Access</u>: <attribute>Read</attribute>
        </ul>
        <ul>Boundary: <attribute>Below </attribute>
        </ul>
        <ul>Location: <attribute>Heap </attribute>
        </ul>
        <ul>Data Size: <attribute>Little </attribute>
        </ul>
        <ul>Excursion: <attribute>Discrete </attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Information exposure</consequence>, <consequence>arbitrary code execution</consequence> or
        <consequence>program crash</consequence>, leading to <consequence>DoS</consequence>
      </ul>
      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>
        <cause>"Incorrect calculation</cause>, (<sub-cause>off by one</sub-cause>) leads to a <cause>wrong index</cause>
        , where <attribute>little</attribute> data is <attribute>read</attribute> from the <attribute>heap</attribute>
        in a <attribute>discrete</attribute> excursion <attribute>below</attribute> the array boundary, which may be
        exploited for <consequence>information exposure</consequence>, <consequence>arbitrary code execution
        </consequence> or <consequence>program crash</consequence>, leading to <consequence>DoS</consequence>." <a
          href="#ref">[2]</a>
      </ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"Off-by-one error in the toAlphabetic function in rendering/RenderListMarker.cpp in WebCore in WebKit before
        r59950, as used in Google Chrome before 5.0.375.70, allows remote attackers to obtain sensitive information,
        cause a denial of service (memory corruption and application crash), or possibly execute arbitrary code via
        vectors related to list markers for HTML lists, aka rdar problem 8009118." <a href="#ref">[9]</a>
      </ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul>The following analysis is based on information in <a href="#ref">[9,10,11,12,13,14,15,16]</a>.The software
        reads in a loop from an array, where the sequence of indices of array elements read is neither necessarily
        monotonic nor necessarily having a fixed distance between consecutive elements. That index should be the
        remainder obtained by dividing an integer by an integer. The software subtracts 1 from that remainder, which is
        wrong, and can result in the index being equal to -1, leading to reading from an address that is below the
        beginning of the array by 1. Consequences are mentioned in <a href="#ref">[10]</a>, and <a href="#ref">[16]</a>
        includes "An off by one memory read out of bounds issue exists in WebKit's handling of HTML lists. Visiting a
        maliciously crafted website may lead to an unexpected application termination or the disclosure of the contents
        of memory."</ul>
      </p>

      <p>
        <h3>Source Code</h3>
      <p>
      <ul>
        <table align="center" class="table-responsive">
          <tr>
            <td align="center"> Code With Bug</td>
          <tr>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre> 1 <br> 2 <br> 3 <br> 4<br> 5<br> 6<br> 7<br></pre>
                    </td>
                    <td>
                      <pre><span class="text-primary">if</span> (type == AlphabeticSequence) <br>{ <br>    <span class="text-primary">while</span> ((numberShadow /= sequenceSize) > 0){<br><br>        letters[lettersSize  - ++length] = sequence[numberShadow % sequenceSize - 1]; <br>    }<br>}</pre>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <td align="center"> Code With Fix</td>
          </tr>
          <td>
            <div class="" ;>
              <table>
                <tr>
                  <td>
                    <pre> 1 <br> 2 <br> 3 <br> <span class="addLine">4</span><br> <span class="addLine">5</span><br> 6<br> 7<br></pre>
                  </td>
                  <td>
                    <pre><span class="text-primary">if</span> (type == AlphabeticSequence) <br>{ <br>    <span class="text-primary">while</span> ((numberShadow /= sequenceSize) > 0){<br>        --numberShadow;<br>        letters[lettersSize - ++length] = sequence[numberShadow % sequenceSize]; <br>    }<br>}</pre>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </table>
      </ul>
      </p>


      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2282">
        <p class="text-info">
          <h2>CVE-2015-2282</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Input not checked properly</cause> leads to <cause>wrong index</cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Access</u>: <attribute>Write</attribute>
        </ul>
        <ul>Boundary: <attribute>Above</attribute>
        </ul>
        <ul>Location: <attribute>Heap </attribute>
        </ul>
        <ul>Data Size: <attribute>Some</attribute>
        </ul>
        <ul>Excursion: <attribute>Continuous </attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Arbitrary code execution</consequence> or <consequence>program crash</consequence>, which can lead
        to <consequence>DoS</consequence>
      </ul>

      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>
        <cause>"Input not checked properly</cause> leads to <cause>wrong index</cause>, where <attribute>some
        </attribute> data is <attribute>written</attribute> to the <attribute>heap</attribute> in a <attribute>
          continuous</attribute> excursion, <attribute>above</attribute> the array boundary, which can cause
        <consequence>arbitrary code execution</consequence> or <consequence>program crash</consequence>, which can lead
        to <consequence>DoS</consequence>." <a href="#ref">[19]</a>

      </ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"Stack-based buffer overflow in the LZC decompression implementation (CsObjectInt::CsDecomprLZC function in
        vpa106cslzc.cpp) in SAP MaxDB 7.5 and 7.6, Netweaver Application Server ABAP, Netweaver Application Server Java,
        Netweaver RFC SDK, GUI, RFC SDK, SAPCAR archive tool, and other products allows context-dependent attackers to
        cause a denial of service (crash) or possibly execute arbitrary code via unspecified vectors, aka SAP Security
        Note 2124806, 2121661, 2127995, and 2125316." <a href="#ref">[17]</a>
      </ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul><a href="#ref">[17, 18, 19, 20]</a> include sufficient information for describing this CVE using BF. Note that
        this buffer resides in the Heap even though it implements a stack data structure.</ul>
      </p>

      <p>
        <h3>Source Code</h3>
      </p>
      <p>
      <ul>
        <table align="center">
          <tr>
            <td align="center"> Code With Bug</td>
            <td align="center"> Code With Fix</td>
          </tr>
          <tr>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre style="margin: 0; line-height: 125%">Source Code Not Available</pre>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre style="margin: 0; line-height: 125%">Source Code Not Available</pre>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </ul>
      </p>


      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2278">
        <p class="text-info">
          <h2>CVE-2015-2278</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Input not checked properly</cause> leads to <cause>wrong index</cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Access</u>: <attribute>Read</attribute>
        </ul>
        <ul>Boundary: <attribute>Above</attribute> or <attribute>Below </attribute>
        </ul>
        <ul>Data Size: <attribute>Some</attribute>
        </ul>
        <ul>Excursion: <attribute>Discrete </attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>DoS</consequence>
      </ul>

      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>
        <cause>"_INPut not checked properly</cause> leads to <cause>wrong index</cause>, where <attribute>some
        </attribute> data is <attribute>read</attribute> in a <attribute>discrete</attribute> excursion, <attribute>
          above</attribute> or <attribute>below</attribute> the array boundary, which can lead to <consequence>DoS
        </consequence>."</a>
      </ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"The LZH decompression implementation (CsObjectInt::BuildHufTree function in vpa108csulzh.cpp) in SAP MaxDB
        7.5 and 7.6, Netweaver Application Server ABAP, Netweaver Application Server Java, Netweaver RFC SDK, GUI, RFC
        SDK, SAPCAR archive tool, and other products allows context-dependent attackers to cause a denial of service
        (out-of-bounds read) via unspecified vectors, related to look-ups of non-simple codes, aka SAP Security Note
        2124806, 2121661, 2127995, and 2125316." <a href="#ref">[21]</a>
      </ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul><a href="#ref">[18, 21, 22]</a> include sufficient information for describing this CVE using BF.</ul>
      </p>

      <p>
        <h3>Source Code</h3>
      </p>
      <p>
      <ul>
        <table align="center">
          <tr>
            <td align="center"> Code With Bug</td>
            <td align="center"> Code With Fix</td>
          </tr>
          <tr>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre style="margin: 0; line-height: 125%">Source Code Not Available</pre>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre style="margin: 0; line-height: 125%">Source Code Not Available</pre>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </ul>
      </p>

      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-19842">
        <p class="text-info">
          <h2>CVE-2018-19842</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Boundary Not Checked Properly</cause> leads to <cause>Pointer Out of Range</cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Access</u>: <attribute>Read</attribute>
        </ul>
        <ul>Boundary: <attribute>Above</attribute>
        </ul>
        <ul>Location: <attribute>Stack</attribute>
        </ul>

        <ul>Data Size: <attribute>Small</attribute> (1 byte)</ul>
        <ul>Excursion: <attribute>Continuous </attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Program Crash</consequence> leading to <consequence>DoS</consequence>
      </ul>

      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>
        "<cause>Boundary Not Checked Properly</cause> leads to <cause>Pointer Out of Range</cause>, where <attribute>
          small</attribute> data is <attribute>read</attribute> in a <attribute>continuous</attribute> excursion,
        <attribute>above</attribute> the array boundary, which can lead to a <consequence>Program Crash</consequence>
        leading to <consequence>DoS</consequence>."</a>
      </ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"getToken in libr/asm/p/asm_x86_nz.c in radare2 before 3.1.0 allows attackers to cause a denial of service
        (stack-based buffer over-read) via crafted x86 assembly data, as demonstrated by rasm2."
      </ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul>In the <code>assemble()</code> function, <attribute>char</attribute> op[<span class="text-primary">128</span>]
        is defined, filled with the first 127 characters of the passed <code>rasm2</code> command arguments, and
        terminated with 0 (for to make a valid C string). So, there is no problem there.</ul>

      <ul>However, in the <code>getToken()</code> function, the part that skips spaces in <code>str</code>, does no
        check if the pointer bypasses the 0 terminator. The problem is only when the spaces go up to the end of
        <code>str</code>. If there were even only one character after the skipped spaces and before the end of
        <code>str</code>, the code works fine.
      </ul>
      <ul>So, the 0 terminator is skipped only if while skipping spaces the last element in <code>str</code> is a space
        -- it could be only one space that is also the last one as in the <i>Steps To Reproduce</i> <a
          href="https://github.com/radare/radare2/issues/12239">here</a>.</ul>
      <ul>The main <a href="https://github.com/radare/radare2/commit/66191f780863ea8c66ace4040d0d04a8842e843">fixes</a>
        check if whether the pointer reaches or bypasses the end of the string (buffer) : </ul>
      <ul><code>str[*begin]</code></ul>
      <ul><code>str[*end]</code></ul>
      <ul><code>if (*begin > strlen (str))</code></ul>
      <ul><u>Note</u>: There are still problems in the fixed code, as <code>*begin</code> and <code>*end</code>, are
        used before checking if they are <code>null</code> -- see lines 4298, 4307, 4311, 4318. If the assumption is
        they are never <code>null</code>, then why such a check is present in the <code>while</code> loops.</ul>
      </p>

      <p>
        <h3>Source Code</h3>
      </p>
      <p>
      <ul>
        <table align="center" class="table-responsive">
          <tr>
            <td align="center"> Code With Bug</td>
          <tr>
            <td>
              <div class="">
                <table>
                  <tr>
                    <td>
                      <pre> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23 </pre>
                    </td>
                    <td>
                      <pre><span class="text-primary">static</span> x86newTokenType <span style="color: #0066BB; font-weight: bold">getToken</span>(<span class="text-primary">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span>str, <span style="color: #333399; font-weight: bold">size_t</span> <span style="color: #333333">*</span>begin, <span style="color: #333399; font-weight: bold">size_t</span> <span style="color: #333333">*</span>end) {



       <span class="text-primary">while</span> (begin <span style="color: #333333">&amp;&amp;</span> isspace ((ut8)str[<span style="color: #333333">*</span>begin])) {
             <span style="color: #333333">++</span>(<span style="color: #333333">*</span>begin);
       }

       <span class="text-primary">if</span> (<span style="color: #333333">!</span>str[<span style="color: #333333">*</span>begin]) {                <span style="color: #888888">// null byte		</span>
             <span style="color: #333333">*</span>end <span style="color: #333333">=</span> <span style="color: #333333">*</span>begin;
             <span class="text-primary">return</span> TT_EOF;
       } <span class="text-primary">else</span> <span class="text-primary">if</span> (isalpha ((ut8)str[<span style="color: #333333">*</span>begin])) {   <span style="color: #888888">// word token		</span>

             <span style="color: #333333">*</span>end <span style="color: #333333">=</span> <span style="color: #333333">*</span>begin;
             <span class="text-primary">while</span> (end <span style="color: #333333">&amp;&amp;</span> isalnum ((ut8)str[<span style="color: #333333">*</span>end])) {
                     <span style="color: #333333">++</span>(<span style="color: #333333">*</span>end);
             }
             <span class="text-primary">return</span> TT_WORD;
       } <span class="text-primary">else</span> <span class="text-primary">if</span> (isdigit ((ut8)str[<span style="color: #333333">*</span>begin])) {   <span style="color: #888888">// number token		</span>

             <span style="color: #333333">*</span>end <span style="color: #333333">=</span> <span style="color: #333333">*</span>begin;
             <span class="text-primary">while</span> (end <span style="color: #333333">&amp;&amp;</span> isalnum ((ut8)str[<span style="color: #333333">*</span>end])) {   <span style="color: #888888">// accept alphanumeric characters, because hex.		</span>
                     <span style="color: #333333">++</span>(<span style="color: #333333">*</span>end);
</pre>
                    </td>
                  </tr>
                </table>
              </div>

            </td>
          </tr>
          <td align="center"> Code With Fix</td>
          </tr>
          <td>
            <div class="">
              <table>
                <tr>
                  <td>
                    <pre> 1
 <span class="addLine">2
 3
 4
 5</span>
 6
 7
 8
 9
10
11
<span class="addLine">12
13</span>
14
<span class="addLine">15</span>
16
17
18
<span class="addLine">19
20</span>
21
22
23</pre>
                  </td>
                  <td>
                    <pre> <span class="text-primary">static</span> x86newTokenType <span style="color: #0066BB; font-weight: bold">getToken</span>(<span class="text-primary">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span>str, <span style="color: #333399; font-weight: bold">size_t</span> <span style="color: #333333">*</span>begin, <span style="color: #333399; font-weight: bold">size_t</span> <span style="color: #333333">*</span>end) {
	<span class="text-primary">if</span> (<span style="color: #333333">*</span>begin <span style="color: #333333">&gt;</span> strlen (str)) {
 		<span class="text-primary">return</span> TT_EOF;
 	}
	<span class="text-primary">while</span> (begin <span style="color: #333333">&amp;&amp;</span> str[<span style="color: #333333">*</span>begin] <span style="color: #333333">&amp;&amp;</span> isspace ((ut8)str[<span style="color: #333333">*</span>begin])) {
		<span style="color: #333333">++</span>(<span style="color: #333333">*</span>begin);
	}

	<span class="text-primary">if</span> (<span style="color: #333333">!</span>str[<span style="color: #333333">*</span>begin]) {                <span style="color: #888888">// null byte		</span>
		<span style="color: #333333">*</span>end <span style="color: #333333">=</span> <span style="color: #333333">*</span>begin;
		<span class="text-primary">return</span> TT_EOF;
	}
 	<span class="text-primary">if</span> (isalpha ((ut8)str[<span style="color: #333333">*</span>begin])) {   <span style="color: #888888">// word token</span>
	        <span style="color: #333333">*</span>end <span style="color: #333333">=</span> <span style="color: #333333">*</span>begin;
		<span class="text-primary">while</span> (end <span style="color: #333333">&amp;&amp;</span> str[<span style="color: #333333">*</span>end] <span style="color: #333333">&amp;&amp;</span> isalnum ((ut8)str[<span style="color: #333333">*</span>end])) {
			<span style="color: #333333">++</span>(<span style="color: #333333">*</span>end);
		}
		<span class="text-primary">return</span> TT_WORD;
	}
 	<span class="text-primary">if</span> (isdigit ((ut8)str[<span style="color: #333333">*</span>begin])) {   <span style="color: #888888">// number token</span>
		<span style="color: #333333">*</span>end <span style="color: #333333">=</span> <span style="color: #333333">*</span>begin;
                <span class="text-primary">while</span> (end <span style="color: #333333">&amp;&amp;</span> isalnum ((ut8)str[<span style="color: #333333">*</span>end])) {   <span style="color: #888888">// accept alphanumeric characters, because hex.		</span>
			<span style="color: #333333">++</span>(<span style="color: #333333">*</span>end);
</pre>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </table>
      </ul>
      </p>

      <p class="text-info">
        <h2><a name="ref">References</a>
        </h2>
      </p>
      <small>
        <ul>[1] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2014-0160">CVE-2014-0160</a>.</ul>
        <ul>[2] Irena Bojanova, Paul E. Black, Yaacov Yesha, and Yan Wu, <a
            href="https://ieeexplore.ieee.org/document/7589797/" target="_blank"> The Bugs Framework (BF): A Structured
            Approach to Express Bugs</a>, QRS 2016, Vienna, Austria.</ul>
        <ul>[3] S. Cassidy. <a target="_blank"
            href="https://www.seancassidy.me/diagnosis-of-the-openssl-heartbleed-bug.html">Diagnosis of the OpenSSL
            Heartbleed</a>, Mon 07 April 2014.</ul>
        <ul>[4] WIKIPEDIA, The Free Encyclopedia, <a target="_blank"
            href="https://en.wikipedia.org/wiki/Heartbleed">Heartbleed</a>.</ul>
        <ul>[5] The MITRE Corporation, CWE Common Weakness Enumeration, <a target="_blank"
            href="https://cwe.mitre.org/data/definitions/126.html">CWE-126 Buffer Over-read</a>.</ul>
        <ul>[6] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2015-0235">CVE-2015-0235</a>.</ul>
        <ul>[7] Openwall, bringing security into open environment, <a target="_blank"
            href="http://www.openwall.com/lists/oss-security/2015/01/27/9">Qualys Security Advisory CVE-2015-0235</a>,
          27 January 2015.</ul>
        <ul>[8] <a target="_blank" href="https://www.qualys.com/2015/01/27/cve-2015-0235/GHOST-CVE-2015-0235.txt">Qualys
            Security Advisory CVE-2015-0235</a>.</ul>
        <ul>[9] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-1773">CVE-2010-1773</a>.</ul>
        <ul>[10] Robin Gandhi, <a target="_blank"
            href="http://faculty.ist.unomaha.edu/rgandhi/st/CVE-2010-1773.pdf">Buffer Overflow Semantic template
            CVE-2010-1773</a>.</ul>
        <ul>[11] Tracker, <a target="_blank" href="https://bugs.chromium.org/p/chromium/issues/detail?id=44955">Issue
            44955</a>.</ul>
        <ul>[12] chromium, Diff of /branches/WebKit/375/WebCore/rendering/RenderListMarker.cpp. <a target="_blank"
            href="https://src.chromium.org/viewvc/chrome/branches/WebKit/375/WebCore/rendering/RenderListMarker.cpp?r1=48100&r2=48099">Revision
            48099</a>.</ul>
        <ul>[13] chromium, Contents of /branches/WebKit/375/WebCore/rendering/RenderListMarker.cpp.
          <a target="_blank"
            href="https://src.chromium.org/viewvc/chrome/branches/WebKit/375/WebCore/rendering/RenderListMarker.cpp?revision=48099">Revision
            44321</a>.
        </ul>
        <ul>[14] chromium, Contents of /branches/WebKit/375/WebCore/rendering/RenderListMarker.cpp. <a target="_blank"
            href="https://src.chromium.org/viewvc/chrome/branches/WebKit/375/WebCore/rendering/RenderListMarker.cpp?annotate=48100#l104">Revision
            48100</a>.</ul>
        <ul>[15] webkit, <a target="_blank" href="https://trac.webkit.org/changeset/59950 ">Fix for <rdar:
              //problem/8009118> Crash in WebCore::toAlphabetic() while running MangleMe -and corresponding-
              https://bugs.webkit.org/show_bug.cgi?id=39508</a>. Reviewed by Darin Adler.</ul>
        <ul>[16] Hat Bugzilla - <a target="_blank" href="https://bugzilla.redhat.com/show_bug.cgi?id=596500">Bug 596500-
            (CVE-2010-1773) CVE-2010-1773 WebKit: off-by-one memory read out of bounds
            vulnerability in handling of HTML lists</a>.</ul>
        <ul>[17] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=2015-2282">CVE-2015-2282</a>.</ul>
        <ul>[18] Core Security, <a target="_blank"
            href=" https://www.coresecurity.com/core-labs/advisories/sap-lzc-lzh-compression-multiple-vul\">SAP LZC LZH
            Compression Multiple Vulnerabilities</a>. (referenced in [17] and [21]).</ul>
        <ul>[19] SourceArchive, SAP AG, <a target="_blank"
            href="http://maxdb-7.5.00.sourcearchive.com/documentation/7.5.00.44-2/vpa106cslzc_8cpp-source.html">vpa106cslzc.cpp</a>
          (reference 12 in [18]).</ul>
        <ul>[20] SourceArchive, SAP AG, <a target="_blank"
            href="http://maxdb-7.5.00.sourcearchive.com/documentation/7.5.00.34/hpa106cslzc_8h-source.html">hpa106cslzc.h</a>.
        </ul>
        <ul>[21] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=2015-2278">CVE-2015-2278</a>.</ul>
        <ul>[22] SourceArchive, SAP AG, <a target="_blank"
            href="http://maxdb-7.5.00.sourcearchive.com/documentation/7.5.00.44-2/vpa108csulzh_8cpp-source.html">vpa108csulzh.cpp</a>.
          (reference 13 in [18]).</ul>
        <ul>[23] sourceware, <a target="_blank"
            href="https://sourceware.org/git/?p=glibc.git;a=blobdiff;f=nss/digits_dots.c;h=e007ef47a41b69437655c26565689be393705a82;hp=2b862956e9a8c39bbccbea982add1d7ab2d16ab2;hb=d5dd6189d506068ed11c8bfa1e1e9bffde04decd;hpb=fef94eab0bd308d5059a2588c753bf9a4926845d">blobdiff</a>.
        </ul>
      </small>

{{< /rawhtml >}}