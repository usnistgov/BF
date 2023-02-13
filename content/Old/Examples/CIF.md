---
weight: 2
title: "CIF"
---
# Control of Interaction Frequency Bugs (CIF) Examples

{{< rawhtml >}}
<a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2002-0628">
        <p class="text-info">
          <h2>CVE-2002-0628</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <sub-cause>Failure to Limit</sub-cause>
      </ul>
      <ul><strong>Attributes: </strong>

        <ul><u>Interaction</u>: <attribute>Authentication Attempt</attribute>
        </ul>
        <ul><u>Number</u>: <attribute>Specificed Number</attribute>
        </ul>
        <ul><u>Unit</u>: <attribute>Authentication Event</attribute>
        </ul>
        <ul>Actor: <attribute>User(s)</attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Credentials compromise (username or password)</consequence>
      </ul>

      <p>
        <h3>BF Description:</h3>
      </p>
      <p>
      <ul>"<sub-cause>Failure to limit</sub-cause> to a <attribute>specified number</attribute> the <attribute>
          authentication attempts</attribute> per <attribute>authentication event</attribute> by same or different
        <attribute>user(s)</attribute> may be exploited for <consequence>credentials compromise (username or password)
        </consequence> via brute force." <a href="#ref">[2]</a></ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"The Telnet service for Polycom ViewStation before 7.2.4 does not restrict the number of failed login
        attempts, which makes it easier for remote attackers to guess usernames and passwords via a brute force attack."
        <a href="#ref">[1]</a></ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul><a href="#ref">[1,3]</a> include sufficient information for describing this CVE using BF.</ul>
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



      
      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2002-1876">
        <p class="text-info">
          <h2>CVE-2002-1876</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <sub-cause>Failure to recognize repeated interactions</sub-cause> leads to <sub-cause>failure to properly limit
        </sub-cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Interaction</u>: <attribute>Authentication Attempt</attribute>
        </ul>
        <ul><u>Number</u>: <attribute>Specificed Number</attribute>
        </ul>
        <ul><u>Unit</u>: <attribute>Specfied Time interval</attribute>
        </ul>
        <ul>Actor: Authenticated <attribute>Users</attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Resource exhaustion (consumption of all granted licenses)</consequence> leading to <consequence>DoS
        </consequence>
      </ul>

      <p>
        <h3>BF Description:</h3>
      </p>
      <p>
      <ul> "<sub-cause>Failure to recognize repeated interactions</sub-cause> that are rapid <attribute>initiations of
          message exchange requests</attribute> from <attribute>authenticated users</attribute>, leads to <sub-cause>
          failure to properly limit</sub-cause> them to a <attribute>specified number</attribute> per <attribute>
          specified time interval</attribute>, which may be exploited for <consequence>resource exhaustion (consumption
          of all granted licenses)</consequence> leading to <consequence>DoS</consequence>." <a href="#ref">[2]</a></ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"Microsoft Exchange 2000 allows remote authenticated attackers to cause a denial of service via a large number
        of rapid requests, which consumes all of the licenses that are granted to Exchange by IIS." <a
          href="#ref">[4]</a></ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul><a href="#ref">[4]</a> includes sufficient information for describing this CVE using BF.</ul>
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

      
      <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2002-1018">
        <p class="text-info">
          <h2>CVE-2002-1018</h2>
        </p>
      </a>
      <p>
        <h3>BF Taxonomy</h3>
      </p>
      <ul><strong>Cause: </strong>
        <sub-cause>Failure to limit</sub-cause>
      </ul>
      <ul><strong>Attributes: </strong>
        <ul><u>Interaction</u>: <attribute>Checkout</attribute>
        </ul>
        <ul><u>Number</u>: <attribute>Single</attribute>
        </ul>
        <ul><u>Unit</u>: <attribute>User</attribute>
        </ul>
        <ul>Actor: <attribute>User</attribute>
        </ul>
      </ul>
      <ul><strong>Consequence: </strong>
        <consequence>Resource exhaustion (consumption of all granted licenses)</consequence> leading to <consequence>DoS
        </consequence>
      </ul>

      <p>
        <h3>BF Description</h3>
      </p>
      <p>
      <ul>"<sub-cause>Failure to limit</sub-cause> the <attribute>checkouts</attribute> of a book to a <attribute>single
        </attribute> one per <attribute>user</attribute> may be exploited for <consequence>resource exhaustion
        </consequence> leading to <consequence>DoS</consequence>." <a href="#ref">[2]</a></ul>
      </p>
      <p>
        <h3>CVE Description</h3>
      </p>
      <p>
      <ul>"The library feature for Adobe Content Server 3.0 does not verify if a customer has already checked out an
        eBook, which allows remote attackers to cause a denial of service (resource exhaustion) by checking out the same
        book multiple times." <a href="#ref">[5]</a></ul>
      </p>
      <p>
        <h3>Analysis</h3>
      </p>
      <p>
      <ul><a href="#ref">[5]</a> includes sufficient information for describing this CVE using BF.</ul>
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
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2002-0628">CVE-2002-0628</a>.</ul>
        <ul>[2] Irena Bojanova, Paul E. Black, Yaacov Yesha, and Yan Wu, The Bugs Framework (BF): A Structured Approach
          to Express Bugs, QRS 2016, Vienna, Austria.</ul>
        <ul>[3] The MITRE Corporation, CWE Common Weakness Enumeration, <a target="_blank"
            href="https://cwe.mitre.org/data/definitions/307.html">CWE-307: Improper Restriction of Excessive
            Authentication Attempts</a>.</ul>
        <ul>[4] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2002-1876">CVE-2002-1876</a>.</ul>
        <ul>[5] The MITRE Corporation, CVE Common Vulnerabilities and Exposures, <a target="_blank"
            href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2002-1018">CVE-2002-1018</a>.</ul>
      </small>
      {{< /rawhtml >}}