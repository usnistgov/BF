import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const data = await d3.json("fg_data.json");

// Specify the dimensions of the chart.
const width = 1000;
const height = 1000;

// The force simulation mutates links and nodes, so create a copy
// so that re-evaluating this cell produces the same result.
const links = data.links.map(d => ({...d}));
const nodes = data.nodes.map(d => ({...d}));

// Create a simulation with several forces.
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(50)) //.distance changes the line length
    .force("charge", d3.forceManyBody().strength(-100)) //change for stronger force between nodes
    .force("x", d3.forceX())
    .force("y", d3.forceY());

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; max-height: auto;")
    .attr("id", "force-graph");

 //appending little triangles, path object, as arrowhead
//The <defs> element is used to store graphical objects that will be used at a later time
//The <marker> element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
svg.append('defs').append('marker')
    .attr("id",'arrowhead')
    .attr('viewBox','-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
     .attr('refX',13) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
     .attr('refY',0)
     .attr('orient','auto')
        .attr('markerWidth',13)
        .attr('markerHeight',13)
        .attr('xoverflow','visible')
    .append('svg:path')
    .attr('d', 'M 0,-2 L 5 ,0 L 0,2')
    .attr('fill', '#999')
    .style('stroke','none');

// Add a line for each link, and a circle for each node.
const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
.selectAll("line")
.data(links)
.join("line")
    .attr("stroke-width", d => Math.sqrt(d.value))
    .attr('marker-end','url(#arrowhead)')
    .attr("stroke-dasharray", (d)=> {
        switch (d.dash){
            case "dash":
                return 5
            case "solid":
                return 0
            default:
                return 1
        }
    });

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
    .attr("stroke", d => d.stroke)
    .attr("stroke-dasharray", (d)=> {
        switch (d.dashStyle){
            case "sysDot":
                return 2
            case "solid":
                return 0
            default:
                return 10
        }
    });

// adds compound strokes (implemented as a slightly larger circle)
node.filter(d => d.compoundMode === "dbl")
    .append("circle")
    .attr("r", 11.5)
    .attr("fill", "transparent")
    .attr("stroke", d => d.stroke)
    .attr("stroke-dasharray", (d)=> {
        switch (d.dashStyle){
            case "sysDot":
                return 2
            case "solid":
                return 0
            default:
                return 10
        }})

node.append("text")
    .text(d=>d.id)
    .attr("fill", "gray")
    .attr("stroke", "none")
    .attr("font-size", "0.5em")
    .attr("font-family", "sans-serif")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("border-style", "solid");

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
saveLayout();
}

// Restore the target alpha so the simulation cools after dragging ends.
// Unfix the subject position now that it’s no longer being dragged.
function dragended(event) {
if (!event.active) simulation.alphaTarget(0);
//event.subject.fx = null;
//event.subject.fy = null;
}

//double click node to make it affected by physics again
node.on("dblclick", (event, d) => {
    d.fx = null;
    d.fy = null;

    simulation.alpha(0.3).restart();
})

// When this cell is re-run, stop the previous simulation. (This doesn’t
// really matter since the target alpha is zero and the simulation will
// stop naturally, but it’s a good practice.)
//invalidation.then(() => simulation.stop());

//Save button
document.getElementById("save-btn").addEventListener("click", () => {
    const svgElement = document.getElementById("force-graph");

    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgElement);

    if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
        source = source.replace('/^<svg/', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
        source = source.replace('/^<svg/', '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    const svgBlob = new Blob([source], {type: "image/svg+xml;charset=utf-8"});
    const url = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "my_network_graph.svg"; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(url);
})

//Reload button
document.getElementById("reload-btn").addEventListener("click", ()=>{
    localStorage.removeItem("graph-layout");
    location.reload();
})

document.getElementById("unpin-btn").addEventListener("click", ()=>{
    nodes.forEach(d => {
        d.fx = null;
        d.fy = null;
    })
    simulation.alpha(0.3).restart();
})

function saveLayout() {
    const layout = nodes.map(d => ({
        id: d.id,
        x: d.x,
        y: d.y,
        fx: d.fx,
        fy: d.fy
    }));
    localStorage.setItem("graph-layout", JSON.stringify(layout));
    console.log("Layout saved to local storage!");
}

const savedLayout = localStorage.getItem("graph-layout");
if (savedLayout) {
    const parsedLayout = JSON.parse(savedLayout);
    
    // Map the saved coordinates back onto our nodes array
    nodes.forEach(node => {
        const savedNode = parsedLayout.find(sn => sn.id === node.id);
        if (savedNode) {
            node.x = savedNode.x;
            node.y = savedNode.y;
            node.fx = savedNode.fx;
            node.fy = savedNode.fy;
            console.log("Saving node" + node.x + node.y);
        }
    });
    console.log("Layout restored from local storage!");
}

// Append the SVG element.
container.append(svg.node());