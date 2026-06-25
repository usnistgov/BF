import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

//const data = await d3.json("data.json");
const data = {
            nodes: [{id: "41", color: "#926eae"}, {id: "42", color: "#926eae"}, {id: "43", color: "#926eae"}, {id: "44", color: "#926eae"}, {id: "45", color: "#926eae"}, {id: "46", color: "#926eae"}, {id: "47", color: "#926eae"}, {id: "48", color: "#926eae"}, {id: "49", color: "#926eae"}, {id: "50", color: "#926eae"}, {id: "51", color: "#926eae"}, {id: "52", color: "#926eae"}, {id: "53", color: "#926eae"}, {id: "54", color: "#926eae"}, {id: "55", color: "#926eae"}, {id: "56", color: "#926eae"}, {id: "57", color: "#926eae"}, {id: "58", color: "#926eae"}, {id: "160", color: "#ff5349"}, {id: "161", color: "#ff5349"}, {id: "162", color: "#ff5349"}, {id: "163", color: "#ff5349"}, {id: "164", color: "#ff5349"}, {id: "165", color: "#ff5349"}, {id: "37", color: "#1cac78"}, {id: "38", color: "#1cac78"}], 
            links: [{source: "41", target: "42", value: 2}, {source: "42", target: "43", value: 2}, {source: "41", target: "44", value: 2}, {source: "44", target: "45", value: 2}, {source: "41", target: "46", value: 2}, {source: "41", target: "47", value: 2}, {source: "41", target: "48", value: 2}, {source: "41", target: "49", value: 2}, {source: "41", target: "50", value: 2}, {source: "41", target: "51", value: 2}, {source: "41", target: "52", value: 2}, {source: "41", target: "53", value: 2}, {source: "41", target: "54", value: 2}, {source: "41", target: "55", value: 2}, {source: "41", target: "56", value: 2}, {source: "41", target: "57", value: 2}, {source: "41", target: "58", value: 2}, {source: "160", target: "161", value: 2}, {source: "161", target: "50", value: 2}, {source: "164", target: "165", value: 2}, {source: "165", target: "45", value: 2}, {source: "165", target: "53", value: 2}, {source: "162", target: "46", value: 2}, {source: "162", target: "54", value: 2}, {source: "162", target: "49", value: 2}, {source: "162", target: "42", value: 2}, {source: "162", target: "163", value: 2}, {source: "163", target: "43", value: 2}, {source: "163", target: "52", value: 2}, {source: "160", target: "37", value: 2}]
};

// Specify the dimensions of the chart.
const width = 928;
const height = 680;

// The force simulation mutates links and nodes, so create a copy
// so that re-evaluating this cell produces the same result.
const links = data.links.map(d => ({...d}));
const nodes = data.nodes.map(d => ({...d}));

// Create a simulation with several forces.
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("x", d3.forceX())
    .force("y", d3.forceY());

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");

// Add a line for each link, and a circle for each node.
const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
.selectAll("line")
.data(links)
.join("line")
    .attr("stroke-width", d => Math.sqrt(d.value));

const node = svg.append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

node.append("circle")
    .attr("r", 10)
    .attr("fill", "white")
    .attr("stroke", d => d.color)
    .attr("stroke-width", 1.5);

node.append("text")
    .text(d=>d.id)
    .attr("fill", "gray")
    .attr("stroke", "none")
    .attr("font-size", "0.5em")
    .attr("font-family", "sans-serif")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em");

// Add a drag behavior.
// node.call(d3.drag()
//     .on("start", dragstarted)
//     .on("drag", dragged)
//     .on("end", dragended));

// Set the position attributes of links and nodes each time the simulation ticks.
simulation.on("tick", () => {
link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

node.attr("transform", d => `translate(${d.x},${d.y})`);
});

// Reheat the simulation when drag starts, and fix the subject position.
function dragstarted(event) {
if (!event.active) simulation.alphaTarget(0.3).restart();
event.subject.fx = event.subject.x;
event.subject.fy = event.subject.y;
}

// Update the subject (dragged node) position during drag.
function dragged(event) {
event.subject.fx = event.x;
event.subject.fy = event.y;
}

// Restore the target alpha so the simulation cools after dragging ends.
// Unfix the subject position now that it’s no longer being dragged.
function dragended(event) {
if (!event.active) simulation.alphaTarget(0);
//event.subject.fx = null;
//event.subject.fy = null;
}

// When this cell is re-run, stop the previous simulation. (This doesn’t
// really matter since the target alpha is zero and the simulation will
// stop naturally, but it’s a good practice.)
//invalidation.then(() => simulation.stop());

// Append the SVG element.
container.append(svg.node());