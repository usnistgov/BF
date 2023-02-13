---
weight: 1
title: "Background"
---
# Background

The medical profession has an extensive, elaborate vocabulary to precisely name muscles, bones, organs, conditions and diseases. When a doctor says that a comatose patient has a left temporal lobe epidural hematoma, the intention is to enlighten, not to obfuscate.

In the software profession, we have many efforts that have helped us develop terms to discuss software, faults, failures, attacks and vulnerabilities, such as the Common Weakness Enumeration (CWE) [1] and Landwehr et. al. Taxonomy of Computer Program Security Flaws [2], but much work remains. We want to more accurately and precisely define software bugs or vulnerabilities. Consider that including "canary" values around arrays detects some buffer overflows while using address layout randomization mitigates other buffer overflows. A precise, orthogonal classification can state exactly which cases of buffer overflows each approach handles. We can also clearly state the classes of bugs that a tool can find and more easily determine if two tools generally find the same set of bugs or if they find different, complimentary sets.

Through centuries of experimentation and development of scientific principles, we now have the Periodic Table of Elements. Just as the structure of the periodic table reflects the underlying atomic structure, we are developing a taxonomy dictated by the "natural" organization of software bugs, while using as stepping stones known bugs enumerations, compendia and collections. For this and other analogies on what we are embarking on, we recall below some well-know organizational structures in science.

Science has developed many different organizational structures. For example, the Periodic Table of Elements, the recently rearranged Tree of Life, the Geographic Coordinate System, and the Dewey Decimal Classification System.

### Mendeleev's Periodic Table

However obvious the Mendeleev's Periodic Table seems today, it required extensive thought and investigation:

* Greeks used element and atom to name differences between materials and smallest parts of matter.
* In 330 BC, Aristotle proposed that everything is a mixture of "root elements": Earth, Fire, Air, Water.

{{< customimg src="images/4elements.gif" height="500" >}}
<p><em>Aristotle's Root Elements (Source: <a href="https://www2.chem.wisc.edu/areas/reich/group/index.htm"
                target="_blank">Reich Chemistry</a>)</em></p>
{{< /customimg >}}

* In the Middle Ages, alchemists made lists of materials, such as alcohol, sulfur, mercury, and salt.

* Lavoisier created a list of 33 elements - e.g. oxygen, nitrogen, hydrogen, phosphorus, mercury, zinc, sulfur, light, and caloric, and distinguished metals from non-metals.
* Dalton realized " atoms of same element are identical in all respects, particularly weight."

* In 1800s, several tables of elements were developed:

* De Chancourtois first noticed periodicity of elements.When ordered by their atomic weights, similar elements occur at regular intervals.
* Mendeleev's Periodic Table in 1869 and his forecast of properties of missing elements reflected the century of growth in knowledge that reflects atomic structure: Columns correspond to the number of electrons in the outer shell and the fundamental chemical properties. Rows correspond to the number of electron shells.

{{< customimg src="images/PeriodicTable.png" height="400" >}}
<p><em>Discovery of Chemical Elements <red>- click on image for detailed view</red> (Source: <a
                href="https://commons.wikimedia.org/w/index.php?curid=31017351" target="_blank">Wikimedia
                Commons</a>)</em></p>
{{< /customimg >}}

### Tree of Life

Discoveries of more than 1,000 new types of bacteria and Archaea over the past 15 years have dramatically rejiggered the Tree of Life to account for these microscopic life forms. The new Tree of Life divides life into three domains: Bacteria, Archaea and Eukaryotes. It clearly shows that "life we see around us - plants, animals, humans and other so-called eukaryotes - represent a tiny percentage of the world's biodiversity."

{{< customimg src="images/TreeOfLife.jpg" height="600" >}}
<p><em>The Tree of Life <red>- click on image for detailed view</red> (Source: <a
                href="https://www.nature.com/articles/nmicrobiol201648?error=cookies_not_supported\"
                target="_blank">Berkeley</a>)</em></p>
{{< /customimg >}}

### Geographic Coordinate System

The Geographic Coordinate System allows to specify any location on the Earth using Latitude, Longitude and Elevation. Longitude lines are perpendicular and latitude lines are parallel to the equator.
{{< rawhtml >}}
<div style="display: flex;
  justify-content: center;">
{{< /rawhtml >}}

{{< img src="images/Coordinates.png" height="300" >}} {{< img src="images/Elevation.png" height="300" >}}

{{< rawhtml >}}
</div>
{{< /rawhtml >}}
{{< rawhtml >}}
<div style="display: flex;
  justify-content: center;">
{{< /rawhtml >}}
_Geographic Coordinate System (Source: [Wikipedia](https://en.wikipedia.org/wiki/Geographic_coordinate_system))_
{{< rawhtml >}}
</div>
{{< /rawhtml >}}

### Dewey Decimal Classification System

The Dewey Decimal Classification System allows new books and whole new subjects to be placed in reasonable locations in a library, for easy retrieval based on subject.

{{< customimg src="images/Dewey.jpg" height="600" >}}
<p><em>Categories of Dewey Decimal Classification System. (Source: <a
                href="http://www.thelibrarianedge.com/libedge/2016/8/29/dewey-designs-to-share"
                target="_blank">Appleton</a>)</em></p>
{{< /customimg >}}

### References

\[1\] The MITRE Corporation. [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/).

\[2\] C. E. Landwehr, A. R. Bull, J. P. McDermott, and W. S. Choi. A taxonomy of computer program security flaws, and examples. ACM Computing Surveys. vol. 26. no. 3. pp. 211-254. September 1994.