import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
                        //import { floating_node_legend, floating_link_legend, resize } from "./FG_Legend_Controler.js";

// URL parameter from script svg
const urlParams = new URLSearchParams(import.meta.url.split('?')[1]);
const dataFile = urlParams.get('data');

if (!dataFile) throw new Error("Force Graph Error: No 'data' parameter provided in the script URL.");

const data = await d3.json(dataFile);
const container = document.getElementById('container');

if (!container) throw new Error("Force Graph Error: #container element not found in DOM.");

//TODO: At the beginning scale to take most of available space -- proportionally to the the min screen width/height
const width = window.innerWidth;
//const width = 1000;
const height = 1000;

// The force simulation mutates links and nodes, so create a copy
// so that re-evaluating this cell produces the same result.
//const nodes = data.nodes.map(d => ({...d}));
const nodeMap = {};

//TODO: There may be more than two colors per node
data.nodes.forEach(d => {
    if (!nodeMap[d.id]) {
        // First time seeing this ID, just add it
        nodeMap[d.id] = { ...d };
    } else {
        // ID already exists! Merge the data
        nodeMap[d.id].compound = "dbl";
        nodeMap[d.id].stroke2 = d.stroke; // Store the second classification color
        // You might also want to merge other properties here if necessary
    }
});

const nodes = Object.values(nodeMap);
const links = data.links.map(d => ({...d}));

// Simulation with several forces
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(50)) // .distance changes links length
    .force("charge", d3.forceManyBody().strength(-100)) //change for stronger force between nodes
    .force("x", d3.forceX()) .force("y", d3.forceY());


//TODO: Zoom messesup with the ormal page zoom
// SVG Container
const svg = d3.create("svg") .attr("width", "100%") .attr("height", "100%")
    .attr("id", "force-graph") .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; max-height: 100%;")
    .call(d3.zoom().on("zoom", function (event) { svg.attr("transform", event.transform) })) .on("dblclick.zoom", null);

// Arrowhead
svg.append('defs').append('marker') .attr("id",'arrowhead') .attr('viewBox','-0 -5 10 10') // SVG viewport bound -- 10 wide x 10 high, starting at (0,-5)
    .attr('refX',0) .attr('refY',0) .attr('refX',13) .attr('refY',0) // for bigger circle, x has to be bigger  
    .attr('orient','auto') .attr('markerWidth',13) .attr('markerHeight',13) .attr('xoverflow','visible')
    .append('svg:path') .attr('d', 'M 0,-2 L 5 ,0 L 0,2') .attr('fill', '#999') .style('stroke','none');

// Links
const link = svg.append("g") .attr("stroke", "#999") .attr("stroke-opacity", 0.6) .selectAll("line")
.data(links) .join("line") .attr("stroke-width", d => Math.sqrt(d.value)) .attr('marker-end','url(#arrowhead)')
    .attr("stroke-dasharray", (d)=> {
        switch (d.dash){
            case "dash": return 5
            case "solid": return 0
            default: return 1
        }
    });

//Nodes
const node = svg.append("g") .selectAll("g") .data(nodes) .join("g") 
    .call(d3.drag() .on("start", dragstarted) .on("drag", dragged) .on("end", dragended));


//TODO: Why raius is 10 here, but on legend 20? -- have a const in one place
node.append("circle")
    .attr("r", 10)
    .attr("fill", (d)=> { return (d.fill == "#") ? "white" : d.fill })
    .attr("stroke", d => d.stroke)
    .attr("stroke-dasharray", (d)=> {
        switch (d.dash){
            case "sysDot": return 2
            case "solid": return 0
            default: return 10
        }
    });

// Compound strokes as a slightly larger circle
node.filter(d => d.compound === "dbl")
    .append("circle")
    .attr("r", 11.5)
    .attr("fill", "transparent")
    .attr("stroke", d => d.stroke2) // <--- Use stroke2 here!
    .attr("stroke-dasharray", (d) => {
        switch (d.dash){
            case "sysDot": return 2
            case "solid": return 0
            default: return 10
        }
    });

node.append("text") .text(d=>d.id) .attr("dy", "0.35em") 
    .attr("fill", "gray") .attr("stroke", "none")
    .attr("font-size", "0.5em") .attr("font-family", "sans-serif")
    .attr("pointer-events", "none")  .attr("text-anchor", "middle")
    .attr("border-style", "solid");

node.append("text") .text("CWE Info") .attr("id", "info") .attr("dx", "4em") .attr("dy", "-1em") 
    .attr("fill", "gray") .attr("stroke", "none")
    .attr("font-size", "0.5em") .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle") .attr("border-style", "solid")
    .attr("pointer-events", "none") .style("visibility", "hidden");
    
// Double-click node to make it affected by physics again
node.on("dblclick", (event, d) => {
        d.fx = null;
        d.fy = null;
        simulation.alpha(0.3).restart(); })
    // Right-click
    .on("contextmenu", (event, d) => {window.open("https://cwe.mitre.org/data/definitions/" + d.id + ".html"); })
    // Hoover
                            // .on("mouseover", function(event, d) { d3.select(this).selectChild("#info") .text(legendNodeID(d.id)) .style("visibility", "visible"); })
                            // .on("mouseout", function(event, d) { d3.select(this) .selectChild("#info") .style("visibility", "hidden"); });
    //.on("mouseover", (event, d) => { d3.select(this).selectChild("#info") .style("visibility", "visible"); })
    //.on("mouseout", (event, d) => { d3.select(this).select("#info") .style("visibility", "hidden"); });

                            // function legendNodeID(nodeId) {
                            //   const match = legendNodes[0].items.find(item => item.stroke === nodeStrokeById(nodeId));
                            //   return match ? match.id : null;
                            // }

function nodeStrokeById(id) {
  const node = nodes.find(n => n.id === id);
  return node ? node.stroke : null; 
}

// Set links and nodes position attributes each time the simulation ticks
simulation.on("tick", () => {
link .attr("x1", d => d.source.x) .attr("y1", d => d.source.y) .attr("x2", d => d.target.x) .attr("y2", d => d.target.y);
node .attr("transform", d => `translate(${d.x},${d.y})`); });

// Reheat simulation when drag starts, and fix subject position
function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
}

// Update dragged node position
function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
    saveLayout();
}

// Restore target alpha so simulation cools after dragging ends
// Unfix the subject position now that it’s no longer being dragged
function dragended(event) {
if (!event.active) simulation.alphaTarget(0);
// event.subject.fx = null;
// event.subject.fy = null;
}

//BUTTONS
// Container acts as positioning anchor
container.style.position = 'relative';

// Wrapper div pinned to the top-right corner
const btnWrapper = document.createElement('div');
btnWrapper.style.position = 'absolute';
btnWrapper.style.top = '10px';
btnWrapper.style.right = '10px';
btnWrapper.style.zIndex = '100'; // Keeps buttons visible above the D3 canvas
btnWrapper.style.display = 'flex';
btnWrapper.style.flexDirection = 'column'; // Stacks them vertically
btnWrapper.style.gap = '5px'; // Adds uniform spacing between buttons
btnWrapper.style.alignItems = 'flex-end';

const buttonWidth = '130px';
const fontSize = '16px';
const fontFamily = 'Aptos';

// Unpin All Nodes button
const unpinbtn = document.createElement('button');
//unpinbtn.type = 'button';
unpinbtn.style.border = 'none';
unpinbtn.style.fontSize = fontSize;
unpinbtn.style.fontFamily = fontFamily;
unpinbtn.style.width = buttonWidth;
unpinbtn.innerText = "Unpin All Nodes";
unpinbtn.addEventListener("click", ()=>{
    nodes.forEach(d => { d.fx = null; d.fy = null; })
    simulation.alpha(0.3).restart();
})

// Reset Simulation button
const resetBtn = document.createElement('button');
resetBtn.id = 'resetbtn';
//resetBtn.type = 'button';
resetBtn.style.border = 'none';
resetBtn.style.fontFamily = fontFamily;
resetBtn.style.fontSize = fontSize;
resetBtn.style.width = buttonWidth;
resetBtn.innerText = 'Reset Simulation';
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("graph-layout");
    location.reload();
});

// Save button
const savebtn = document.createElement('button');
//savebtn.type = 'button';
savebtn.style.border = 'none';
savebtn.style.fontSize = fontSize;
savebtn.style.fontFamily = fontFamily;
savebtn.style.width = buttonWidth;
savebtn.innerText = "Save SVG";
savebtn.addEventListener("click", () => {
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

// Append all buttons to the right-side wrapper
btnWrapper.appendChild(unpinbtn);
btnWrapper.appendChild(resetBtn);
btnWrapper.appendChild(savebtn);

// Inject Wrapper inside graph container
container.appendChild(btnWrapper);

function saveLayout() {
    const layout = nodes.map(d => ({ id: d.id, x: d.x, y: d.y, fx: d.fx, fy: d.fy }));
    localStorage.setItem("graph-layout", JSON.stringify(layout));
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
        }
    });
}

                                // //ABSTRACTION/RELATIONSHIP LEGEND

                                // // Legend Data
                                // const legendNodes = data.legendNodes.map(d => ({...d}));
                                // const legendLinks = data.legendLnks.map(d => ({...d}));
                                // //const legendTable = data.legendTable.map(d => ({...d}));

                                // const legendWrapper = document.createElement('div');
                                //     legendWrapper.style.position = 'relative';
                                //     legendWrapper.style.zIndex = '100';
                                //     legendWrapper.style.display = 'flex';
                                //     legendWrapper.style.flexDirection = 'column';
                                //     legendWrapper.style.border = 'none';

                                // // Nodes Legends
                                // legendNodes.forEach((legend) =>{
                                //         const legendsvg = floating_node_legend(legend).node()
                                //         legendWrapper.appendChild(legendsvg);
                                //         container.appendChild(legendWrapper);
                                // })

                                // // Links Legend
                                // legendLinks.forEach((legend) =>{
                                //     const lsvg = floating_link_legend(legend).node();
                                //     legendWrapper.appendChild(lsvg);
                                //     container.appendChild(legendWrapper);
                                // })

// const arWrapper = document.createElement('div');
// arWrapper.style.position = 'absolute';
// arWrapper.style.top = '500px';
// arWrapper.style.right = '10px';
// arWrapper.style.zIndex = '100';
// arWrapper.style.display = 'flex';
// arWrapper.style.flexDirection = 'column'; 
// //arWrapper.style.border = '2px solid grey';
// arWrapper.style.border = 'none';
// //arWrapper.style.width = '10%';
// //arWrapper.style.height = 'auto';
// arWrapper.style.padding = '1em';

// const legendWrapper = document.createElement('div');
// // Nodes Legend
// legendNodes.forEach((legend) =>{
//     if (legend.items.length > 10){
//         legendWrapper.style.position = 'relative';
//         legendWrapper.style.zIndex = '100';
//         legendWrapper.style.display = 'flex';
//         legendWrapper.style.flexDirection = 'column';
//         legendWrapper.style.border = "2px solid grey";

//         const legendsvg = floating_node_legend(legendNodes[0]).node()
//         legendWrapper.appendChild(legendsvg);
//         container.appendChild(legendWrapper);
//         resize(legendsvg);
//      } else {
//         const asvg = floating_node_legend(legend).node()
//         arWrapper.appendChild(asvg);
//         container.appendChild(arWrapper);
//        resize(asvg);
//      }
// })
// Links Legend
//const lsvg = floating_link_legend(legendLinks[0]).node();
//arWrapper.appendChild(lsvg);
//container.appendChild(arWrapper);
//resize(lsvg);

// Append SVG elements
container.append(svg.node());
                        //container.appendChild(legendWrapper);







// // Sample Data
// const tableData = [
//   { Name: "Alice", Role: "Developer", Status: "Active" },
//   { Name: "Bob", Role: "Designer", Status: "Pending" },
//   { Name: "Charlie", Role: "Manager", Status: "Active" }
// ];

// // 1. Create SVG container
// const svg = d3.select("#container")
//   .append("svg")
//   .attr("width", 500)
//   .attr("height", 300);

// // 2. Add foreignObject container
// const fo = svg.append("foreignObject")
//   .attr("x", 20)
//   .attr("y", 20)
//   .attr("width", 460)
//   .attr("height", 260);

// // 3. Add XHTML Table
// const table = fo.append("xhtml:table")
//   .style("width", "100%")
//   .style("border-collapse", "collapse")
//   .style("font-family", "Aptos, sans-serif")
//   .style("font-size", "14px");

// // Extract column headers dynamically from the first data object
// const columns = Object.keys(tableData[0]);

// // 4. Render Table Header (thead)
// table.append("xhtml:thead")
//   .append("xhtml:tr")
//   .selectAll("th")
//   .data(columns)
//   .enter()
//   .append("xhtml:th")
//   .text(col => col)
//   .style("border", "1px solid #ccc")
//   .style("background-color", "#f4f4f4")
//   .style("padding", "8px")
//   .style("text-align", "left");

// // 5. Render Table Body (tbody)
// const tbody = table.append("xhtml:tbody");

// // Create a row (tr) for each object in the array
// const rows = tbody.selectAll("tr")
//   .data(tableData)
//   .enter()
//   .append("xhtml:tr");

// // Create cells (td) within each row
// rows.selectAll("td")
//   .data(row => columns.map(col => row[col])) // Map values for each column
//   .enter()
//   .append("xhtml:td")
//   .text(d => d)
//   .style("border", "1px solid #ccc")
//   .style("padding", "8px");