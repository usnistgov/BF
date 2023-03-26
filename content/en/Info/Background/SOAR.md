---
title: "SOAR"
bookHidden: true
---
# Software State-of-the-Art Resources (SOAR) Matrix

The Software State-of-the-Art Resources (SOAR) Matrix defines and describes a process for selecting and using appropriate analysis tools and techniques for evaluating software for software (security) assurance. In particular, it identifies types of tools and techniques available for evaluating software, as well as the following technical objectives those tools and techniques can meet. [1]

<div align="center">
        <table class="table table-responsive" style="width:562.35pt;margin-left:-.25pt;border-collapse:collapse">
          <tr style="height:10.75pt">
            <td width=750 colspan=4 valign=top style="width:562.35pt;border:solid #A6A6A6 1.0pt;
border-right:solid windowtext 1.5pt;background:#FFC000;padding:0in 5.4pt 0in 5.4pt;
height:10.75pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">Technical
                    objective</span></b></p>
            </td>
          </tr>
          <tr style="height:32.35pt">
            <td width=180 valign=top style="width:134.85pt;border:solid #A6A6A6 1.0pt;
border-top:none;background:#FFC000;padding:0in 5.4pt 0in 5.4pt;height:32.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">high-level</span></b></p>
            </td>
            <td width=84 valign=top style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
background:#FFC000;padding:0in 5.4pt 0in 5.4pt;height:32.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">lower-level</span></b></p>
            </td>
            <td width=162 valign=top style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
background:#FFC000;padding:0in 5.4pt 0in 5.4pt;height:32.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">lower-lower-level</span></b></p>
            </td>
            <td width=324 valign=top style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#FFC000;padding:0in 5.4pt 0in 5.4pt;height:32.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">fourth
                    level, based on specific weaknesses)</span></b></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=180 rowspan=3 style="width:134.85pt;border-top:none;border-left:
solid #A6A6A6 1.0pt;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">1. Provide
                    design &amp; code quality</span></b></p>
            </td>
            <td width=246 colspan=2 rowspan=3 style="width:184.5pt;border-top:none;
border-left:none;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">General: Failure to adhere</span></p>
            </td>
          </tr>
          <tr style="height:6.15pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:6.15pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Use of Obsolete Functions</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Use of Potentially Dangerous Function</span></p>
            </td>
          </tr>
          <tr style="height:10.65pt">
            <td width=180 style="width:134.85pt;border-top:none;border-left:solid #A6A6A6 1.0pt;
border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:10.65pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">2. Counter
                    known vulnerabilities (CVEs)</span></b></p>
            </td>
            <td width=246 nowrap colspan=2 valign=bottom style="width:184.5pt;border-top:
none;border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:10.65pt"></td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:10.65pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=180 rowspan=13 style="width:134.85pt;border-top:none;border-left:
solid #A6A6A6 1.0pt;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">3. Ensure
                    authentication and<br>
                    access control</span></b></p>
            </td>
            <td width=246 colspan=2 rowspan=3 style="width:184.5pt;border-top:none;
border-left:none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Authentication Issues</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Missing Authentication for Critical Function</span></p>
            </td>
          </tr>
          <tr style="height:6.6pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:6.6pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Improper Restriction of Excessive Authentication Attempts</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other authentication issues</span></p>
            </td>
          </tr>
          <tr style="height:7.5pt">
            <td width=246 colspan=2 rowspan=2 style="width:184.5pt;border-top:none;
border-left:none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Credentials Management</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Use of Hard-coded Credentials (Not put in maliciously)</span></p>
            </td>
          </tr>
          <tr style="height:9.75pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:9.75pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other credential issues</span></p>
            </td>
          </tr>
          <tr style="height:3.0pt">
            <td width=246 colspan=2 rowspan=5 style="width:184.5pt;border-top:none;
border-left:none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:3.0pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Permissions, Privileges, and Access Control</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:3.0pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Missing Authorization {Also - design issue}</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Improper/Incorrect Authorization</span></p>
            </td>
          </tr>
          <tr style="height:7.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Permission issues, including incorrect default permissions and
                  incorrect Permission Assignment for Critical Resource</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Reliance on Untrusted Inputs in a Security Decision</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other failure to enforce</span></p>
            </td>
          </tr>
          <tr style="height:4.35pt">
            <td width=246 colspan=2 rowspan=3 style="width:184.5pt;border-top:none;
border-left:none;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:4.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Least Privilege</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:4.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Execution with Unnecessary Privileges</span></p>
            </td>
          </tr>
          <tr style="height:6.15pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:6.15pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Least Privilege violation [in implementation, including
                  grandfathering]</span></p>
            </td>
          </tr>
          <tr style="height:12.0pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:12.0pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other privilege/sandbox issues</span></p>
            </td>
          </tr>
          <tr style="height:12.9pt">
            <td width=180 nowrap rowspan=32 style="width:134.85pt;border-top:none;
border-left:solid #A6A6A6 1.0pt;border-bottom:solid black 1.5pt;border-right:
solid #A6A6A6 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:12.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">4. Counter
                    unintentional-"like" weaknesses</span></b></p>
            </td>
            <td width=84 rowspan=3 style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:12.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Buffer Handling</span></p>
            </td>
            <td width=162 rowspan=3 style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:12.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Buffer Errors</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:12.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Incorrect Calculation of Buffer Size</span></p>
            </td>
          </tr>
          <tr style="height:12.0pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:12.0pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Classic Buffer Overflow</span></p>
            </td>
          </tr>
          <tr style="height:7.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other</span></p>
            </td>
          </tr>
          <tr style="height:7.5pt">
            <td width=84 rowspan=10 style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Injection</span></p>
            </td>
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Cross-Site Request Forgery (CSRF)</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:7.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Cross-Site Scripting (XSS)</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 rowspan=3 style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Code Injection</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Unrestricted Upload of File with Dangerous Type</span></p>
            </td>
          </tr>
          <tr style="height:12.0pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:12.0pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Download of Code Without Integrity Check</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other code injection</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Format String Vulnerability</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">OS Command Injections</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">SQL Injection</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
          </tr>
          <tr style="height:7.5pt">
            <td width=162 rowspan=2 style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Input Validation</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">URL Redirection to Untrusted Site ("Open Redirect") [child of
                  CWE-20]</span></p>
            </td>
          </tr>
          <tr style="height:8.4pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:8.4pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other input validation</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=84 rowspan=6 style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Encryption and Randomness</span></p>
            </td>
            <td width=162 rowspan=5 style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Cryptographic Issues</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Missing Encryption of Sensitive Data</span></p>
            </td>
          </tr>
          <tr style="height:7.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Use of a Broken or Risky Cryptographic Algorithm</span></p>
            </td>
          </tr>
          <tr style="height:17.85pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:17.85pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Use of Password Hash With Insufficient Computational Effort
                  (incl. Use of a One-Way Hash without a Salt)</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Improper Certificate Validation</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other cryptographic issues</span></p>
            </td>
          </tr>
          <tr style="height:4.35pt">
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:4.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Randomness issues</span></p>
            </td>
            <td width=324 nowrap valign=bottom style="width:243.0pt;border:none;
border-right:solid windowtext 1.5pt;padding:0in 5.4pt 0in 5.4pt;height:4.35pt"></td>
          </tr>
          <tr style="height:6.15pt">
            <td width=84 rowspan=2 style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:6.15pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">File Handling</span></p>
            </td>
            <td width=162 rowspan=2 style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:6.15pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Pathname Traversal and Equivalence Errors (including Link
                  Following; note that NVD uses &quot;link following&quot;)</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:solid #A6A6A6 1.0pt;
border-left:none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:6.15pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Path Traversal</span></p>
            </td>
          </tr>
          <tr style="height:9.75pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:9.75pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other</span></p>
            </td>
          </tr>
          <tr style="height:41.25pt">
            <td width=84 style="width:63.0pt;border-top:none;border-left:none;border-bottom:
solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;padding:0in 5.4pt 0in 5.4pt;
height:41.25pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Information Leaks</span></p>
            </td>
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:41.25pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Information Leak / Disclosure</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:41.25pt"></td>
          </tr>
          <tr style="height:34.5pt">
            <td width=84 rowspan=2 style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:34.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Number Handling</span></p>
            </td>
            <td width=162 rowspan=2 style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:34.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Numeric Errors</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:34.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Integer Overflow or Wraparound</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other</span></p>
            </td>
          </tr>
          <tr style="height:27.75pt">
            <td width=84 rowspan=2 style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:27.75pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Control flow management</span></p>
            </td>
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:27.75pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Race Conditions</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:27.75pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Excessive Iteration</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
          </tr>
          <tr style="height:58.35pt">
            <td width=84 style="width:63.0pt;border-top:none;border-left:none;border-bottom:
solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;padding:0in 5.4pt 0in 5.4pt;
height:58.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Initialization and Shutdown [of resources/components]</span></p>
            </td>
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:58.35pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Resource Management Errors</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:58.35pt"></td>
          </tr>
          <tr style="height:12.9pt">
            <td width=84 rowspan=2 style="width:63.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:12.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Design Error</span></p>
            </td>
            <td width=162 rowspan=2 style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:12.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Design Error</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:12.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Inclusion of Functionality from Untrusted Control Sphere</span></p>
            </td>
          </tr>
          <tr style="height:8.4pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:8.4pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other design errors</span></p>
            </td>
          </tr>
          <tr style="height:63.0pt">
            <td width=84 style="width:63.0pt;border-top:none;border-left:none;border-bottom:
solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;padding:0in 5.4pt 0in 5.4pt;
height:63.0pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">System Element Isolation</span></p>
            </td>
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:63.0pt"></td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:63.0pt"></td>
          </tr>
          <tr style="height:48.4pt">
            <td width=84 style="width:63.0pt;border-top:none;border-left:none;border-bottom:
solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;padding:0in 5.4pt 0in 5.4pt;
height:48.4pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Error Handling &amp; Fault isolation</span></p>
            </td>
            <td width=162 valign=bottom style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:48.4pt"></td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:48.4pt"></td>
          </tr>
          <tr style="height:40.5pt">
            <td width=84 style="width:63.0pt;border-top:none;border-left:none;border-bottom:
solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;padding:0in 5.4pt 0in 5.4pt;
height:40.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Pointer and reference handling</span></p>
            </td>
            <td width=162 valign=bottom style="width:121.5pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:40.5pt"></td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:40.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=180 rowspan=14 style="width:134.85pt;border-top:none;border-left:
solid #A6A6A6 1.0pt;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">5. Counter
                    intentional-&quot;like&quot;/ malicious logic</span></b></p>
            </td>
            <td width=246 colspan=2 rowspan=5 style="width:184.5pt;border-top:none;
border-left:none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Known malware</span></p>
            </td>
            <td width=324 valign=top style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Known viruses without polymorphic/metamorphic code</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Known viruses with polymorphic/metamorphic code</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Known Worms</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Known Trojan horses (rootkits, key loggers, etc.)</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Other</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=246 colspan=2 rowspan=9 style="width:184.5pt;border-top:none;
border-left:none;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Not known malware</span></p>
            </td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Time bombs</span></p>
            </td>
          </tr>
          <tr style="height:7.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:7.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Logic bombs (condition other than time triggers failure)</span></p>
            </td>
          </tr>
          <tr style="height:3.0pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:3.0pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Back doors/ trap doors (ways to get in, e.g., ports, fixed
                  *undoc* passwords, etc.)</span></p>
            </td>
          </tr>
          <tr style="height:9.75pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:9.75pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Embedded malicious logic, e.g., Trojan horse (additional
                  functionality not desired by user)</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Spyware</span></p>
            </td>
          </tr>
          <tr style="height:45.75pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:45.75pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Unrevealed &quot;Phone home&quot; control (Note: Updates can be
                  used this way, but are not necessarily malicious)</span></p>
            </td>
          </tr>
          <tr style="height:23.25pt">
            <td width=324 valign=bottom style="width:243.0pt;border:none;border-right:
solid windowtext 1.5pt;padding:0in 5.4pt 0in 5.4pt;height:23.25pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Application collusion (other than covert channels)</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:solid #A6A6A6 1.0pt;
border-left:none;border-bottom:none;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Covert channel</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=324 valign=bottom style="width:243.0pt;border-top:solid #A6A6A6 1.0pt;
border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Planned/built-in obsolesence not revealed to user/acquirer</span></p>
            </td>
          </tr>
          <tr style="height:3.9pt">
            <td width=180 rowspan=4 style="width:134.85pt;border-top:none;border-left:
solid #A6A6A6 1.0pt;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:3.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">6. Provide
                    anti-tamper and ensure transparency</span></b></p>
            </td>
            <td width=84 rowspan=3 style="width:63.0pt;border:none;padding:0in 5.4pt 0in 5.4pt;
height:3.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Anti-tamper</span></p>
            </td>
            <td width=162 valign=bottom style="width:121.5pt;border-top:none;border-left:
solid #A6A6A6 1.0pt;border-bottom:none;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:3.9pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Impede technology transfer (obfuscation)</span></p>
            </td>
            <td width=324 style="width:243.0pt;border:none;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:3.9pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 style="width:121.5pt;border:solid #A6A6A6 1.0pt;border-right:
none;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Impede alteration of system capability</span></p>
            </td>
            <td width=324 style="width:243.0pt;border:solid #A6A6A6 1.0pt;border-right:
solid windowtext 1.5pt;background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;
height:2.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=162 style="width:121.5pt;border:solid #A6A6A6 1.0pt;border-top:
none;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Impede countermeasure development</span></p>
            </td>
            <td width=324 style="width:243.0pt;border-top:none;border-left:none;
border-bottom:solid #A6A6A6 1.0pt;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=84 style="width:63.0pt;border-top:solid #A6A6A6 1.0pt;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Ensure transparency (detect obfuscation)</span></p>
            </td>
            <td width=162 style="width:121.5pt;border-top:none;border-left:none;
border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
            <td width=324 style="width:243.0pt;border:none;border-right:solid windowtext 1.5pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=180 rowspan=2 style="width:134.85pt;border-top:none;border-left:
solid #A6A6A6 1.0pt;border-bottom:solid black 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">7. Counter
                    development tool inserted weaknesses</span></b></p>
            </td>
            <td width=570 nowrap colspan=3 style="width:427.5pt;border-top:none;
border-left:none;border-bottom:solid #A6A6A6 1.0pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Unintentional vulnerability insertion</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=570 colspan=3 style="width:427.5pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Malicious code insertion</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=180 style="width:134.85pt;border-top:none;border-left:solid #A6A6A6 1.0pt;
border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">8. Provide
                    secure delivery</span></b></p>
            </td>
            <td width=246 nowrap colspan=2 valign=bottom style="width:184.5pt;border-top:
none;border-left:none;border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;height:2.5pt"></td>
            <td width=324 valign=bottom style="width:243.0pt;border-top:none;border-left:
none;border-bottom:solid windowtext 1.5pt;border-right:solid windowtext 1.5pt;
background:white;padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="font-size:8.0pt;
color:black">Download of Code Without Integrity Check [at
                  delivery/installation time, vs. execution time]</span></p>
            </td>
          </tr>
          <tr style="height:2.5pt">
            <td width=180 style="width:134.85pt;border-top:none;border-left:solid #A6A6A6 1.0pt;
border-bottom:solid windowtext 1.5pt;border-right:solid #A6A6A6 1.0pt;
padding:0in 5.4pt 0in 5.4pt;height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">9. Provide
                    secure configuration</span></b></p>
            </td>
            <td width=246 nowrap colspan=2 valign=bottom style="width:184.5pt;border:
none;border-right:solid #A6A6A6 1.0pt;background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;
height:2.5pt"></td>
            <td width=324 nowrap valign=bottom style="width:243.0pt;border:none;
border-right:solid windowtext 1.5pt;background:#E6E6E6;padding:0in 5.4pt 0in 5.4pt;
height:2.5pt"></td>
          </tr>
          <tr style="height:2.5pt">
            <td width=180 style="width:134.85pt;border-top:none;border-left:solid #A6A6A6 1.0pt;
border-bottom:solid windowtext 1.5pt;border-right:none;padding:0in 5.4pt 0in 5.4pt;
height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><b><span style="color:black">10. Other</span></b></p>
            </td>
            <td width=570 nowrap colspan=3 valign=bottom style="width:427.5pt;border-top:
windowtext 1.5pt;border-left:windowtext 1.0pt;border-bottom:windowtext 1.5pt;
border-right:black 1.0pt;border-style:solid;padding:0in 5.4pt 0in 5.4pt;
height:2.5pt">
              <p class=MsoNormal align=center style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:normal"><span style="color:black">Excessive
                  power consumption</span></p>
            </td>
          </tr>
        </table>
      </div>

### References

\[1\] Larsen, G., Kenneth Hong Fong, E., Wheeler, D. A., Moorthy. R. S. [State-of-the-Art Resources (SOAR) for Software Vulnerability Detection, Test, and Evaluation](https://www.ida.org/idamedia/Corporate/Files/Publications/IDA_Documents/ITSD/2014/P-5061.ashx). 2014.

\[2\] Institute for Defense Analyses (IDA). [Software State-of-the-Art Resources (SOAR) Matrix](http://www.acq.osd.mil/se/docs/P-8005-SOAR-2016-AppE.xlsx).