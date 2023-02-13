---
weight: 4
title: "INJ"
---
# Injection (INJ) Examples

{{< rawhtml >}}
<p class="text-info">
        <h2>CVE 2007-3572 (Yoggie Pico)</h2>
      </p>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Input not checked properly</cause> (<sub-cause>incomplete blacklist</sub-cause>)
      </ul>
      <ul><strong>Attributes: </strong>
        <ul>Language: <attribute>CGI</attribute>
        </ul>
        <ul>Special Element: <attribute>Shell Metacharacters</attribute> (back ticks `)</ul>

        <ul>Entry Point: <attribute>Function Parameter</attribute> ("param")</ul>
        <ul><u>Invalid Construct</u>: <attribute>Command</attribute> (command within a Ping command)</ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Add command</consequence>, leading to <consequence>arbitrary code execution</consequence> and
        potentially <consequence>complete host takeover </consequence>(by adding a Ping command to change the root
        password)
      </ul>
      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>"<cause>Input not checked properly</cause> (<sub-cause>incomplete blacklist</sub-cause>) allows <attribute>
          Shell metacharacters</attribute> (back ticks `( through a <attribute>function parameter</attribute> ("param")
        in a <attribute>CGI</attribute> script and assembly of a string that is parsed into an invalid <attribute>
          command</attribute> construct (command within a Ping command), which may be exploited to <consequence>add
          command</consequence>, leading to <consequence>arbitrary code execution</consequence> and potentially
        <consequence>complete host takeover </consequence>(by adding a Ping command to change the root password)." <a
          href="#ref">[2]</a></ul>
      </p>
      <ul>
        <fontN>This is a shell command injection</fontN>
      </ul>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"Incomplete blacklist vulnerability in cgi-bin/runDiagnostics.cgi in the web interface on the Yoggie Pico and
        Pico Pro allows remote attackers to execute arbitrary commands via shell metacharacters in the param parameter,
        as demonstrated by URL encoded "`" (backtick) characters (%60 sequences)." <a href="#ref">[1]</a></ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul>The following analysis is based on information in <a href="#ref">[1,3,4]</a>. Injecting backticks that are not
        sanitized enables adding a shell command in a CGI script. Complete Host takeover is possible by using backtick
        to execute changing the file /etc/shadow to include an arbitrary password selected by the attacker. Then the
        attacker can use that password to login as root. The Ping command was not expected to include a "command within
        a (Ping) command", but the backticks (special elements) result in that unexpected structure.</ul>
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


      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-5817">
        <p class="text-info">
          <h2>CVE-2008-5817</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <cause>Input not checked properly</cause> or <cause>input not sanitized properly</cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul>Language: <attribute>SQL</attribute>
        </ul>
        <ul>Special Element: <attribute>Query Elements</attribute> (single quote ' , the word or, and equality sign =)
        </ul>

        <ul>Entry Point: <attribute>Data Entry Fields</attribute> ("username" & "password")</ul>
        <ul><u>Invalid Construct</u>: <attribute>Database Query</attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Authentication loss</consequence>, <consequence>admin server access</consequence>, and
        <consequence>arbitrary code execution</consequence>
      </ul>
      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>"<cause>Input not checked properly</cause> or <cause>input not sanitized properly</cause> allows <attribute>
          query elements</attribute> (single quote ' , the word or, and equality sign =) through <attribute>data entry
          fields </attribute>("username" & "password") in a PHP script and assembly of a string that is parsed into an
        invalid <attribute>database query </attribute> construct, which may be exploited to <consequence>mask legitimate
        </consequence>
        <attribute>SQL </attribute>
        <consequence>commands</consequence>, leading to <consequence>authentication loss</consequence>, <consequence>
          admin server access</consequence>, and <consequence>arbitrary code execution</consequence>. <a
          href="#ref">[2]</a>
      </ul>
      </p>
      <ul>
        <fontN>This is SQL Injection</fontN>
      </ul>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"Multiple SQL injection vulnerabilities in index.php in Web Scribble Solutions webClassifieds 2005 allow
        remote attackers to execute arbitrary SQL commands via the (1) user and (2) password fields in a sign_in
        action." <a href="#ref">[5]</a></ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul>The following analysis is based on information in <a href="#ref">[5,6,7]</a>. According to <a
          href="#ref">[7]</a>, ' or ' 1=1 is used to mask password checking and login as admin. <a href="#ref">[8]</a>
        includes an explanation of this type of SQL injection.</ul>
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


      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-5734">
        <p class="text-info">
          <h2>CVE-2008-5734</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Causes: </strong>
        <cause>Input not checked properly</cause> (<sub-cause>incomplete blacklist</sub-cause>) or <cause>input not
          sanitized properly</cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul>Language: <attribute>HTML</attribute>
        </ul>
        <ul>Special Element: <attribute>Scripting Elements</attribute> ('&lt;','&lt;/','&gt;')</ul>

        <ul>Entry Point: <attribute>Markup Tag</attribute> (&lt;IMG&gt;) <attribute>Argument</attribute> (SRC)</ul>
        <ul><u>Invalid Construct</u>: <attribute>Markup</attribute> (IMG element with &lt;script&gt; ... &lt;/script&gt;
          in it)</ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Add commands</consequence> or <consequence>credentials compromise</consequence> for cookie-based
        authentication, leading to <consequence>arbitrary code execution</consequence>
      </ul>

      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>"<cause>Input not checked properly</cause> (<sub-cause>incomplete blacklist</sub-cause>) or <cause>input not
          sanitized properly</cause> allows <attribute>HTML scripting elements</attribute> ('&lt;','&lt;/','&gt;')
        through a <attribute>markup tag</attribute> (&lt;IMG&gt;) <attribute>argument</attribute> (SRC) of a generated
        <attribute>HTML</attribute> email and assembly of a string that is parsed into an <attribute>invalid markup
          construct</attribute> (IMG element with &lt;script&gt; ... &lt;/script&gt; in it), which may be exploited to
        <consequence>add commands</consequence> or <consequence>credentials compromise</consequence> for cookie-based
        authentication, leading to <consequence>arbitrary code execution</consequence>." <a href="#ref">[2]</a></ul>
      </p>
      <ul>
        <fontN>This is XSS web script or HTML injection.</fontN>
      </ul>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"Cross-site scripting (XSS) vulnerability in WebMail Pro in IceWarp Software Merak Mail Server 9.3.2 allows
        remote attackers to inject arbitrary web script or HTML via an IMG element in an HTML e-mail message." <a
          href="#ref">[9]</a></ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul>The following analysis is based on information in <a href="#ref">[9,10,11]</a>. According to <a
          href="#ref">[10]</a>, one of the several consequences is unauthorized access to cookie-based authentication
        credentials.</ul>
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


      <p class="text-info">
        <h2><a name="ref">References</a></h2>
      </p>
      <small>
        <ul>[1] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2007-3572">CVE-2007-3572</a>.</ul>
        <ul>[2] Irena Bojanova, Paul E. Black, Yaacov Yesha, and Yan Wu, The Bugs Framework (BF): A Structured Approach
          to Express Bugs, QRS 2016, Vienna, Austria.</ul>
        <ul>[3] The MITRE Corporation, CWE Common Weakness Enumeration, <a target="_blank"
            href="https://cwe.mitre.org/data/definitions/78.html">CWE-78: Improper Neutralization of Special Elements
            used in an OS Command ('OS Command Injection')</a>.</ul>
        <ul>[4] <a target="_blank"
            href="https://web.archive.org/web/20100620122819/http://archives.neohapsis.com/archives/fulldisclosure/2007-07/0020.html">
            Yoggie Pico Pro Remote Code Execution</a></ul>
        <ul>[5] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2008-5817">CVE-2008-5817</a>.</ul>
        <ul>[6] CXSESECURITY, <a target="_blank" href="http://cxsecurity.com/issue/WLB-2009010117">webClassifieds 2005
            (Auth Bypass) SQL Injection Vulnerability CWE-89 CVE-2008-5817</a>.</ul>
        <ul>[7] The MITRE Corporation, CWE Common Weakness Enumeration, <a target="_blank"
            href="https://cwe.mitre.org/data/definitions/89.html">CWE-89: Improper Neutralization of Special Elements
            used in an SQL Command ('SQL Injection')</a>.</ul>
        <ul>[8] Bricks, <a target="_blank" href="https://sechow.com/bricks/docs/login-1.html">SQL injection.</a></ul>
        <ul>[9] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-5734">CVE-2008-5734</a>.</ul>
        <ul>[10] SecurityFocus, <a target="_blank" href="http://www.securityfocus.com/bid/32969/discuss">Merak Mail
            Server and Webmail Email Message HTML Injection Vulnerability</a>.</ul>
        <ul>[11] The MITRE Corporation, CWE Common Weakness Enumeration, <a target="_blank"
            href="https://cwe.mitre.org/data/definitions/79.html">CWE-79: Improper Neutralization of Input During Web
            Page Generation ('Cross-site Scripting')</a>.</ul>
      </small>

      {{< /rawhtml >}}