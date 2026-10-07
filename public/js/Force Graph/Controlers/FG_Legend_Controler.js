import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const width = window.innerWidth;
const height = window.innerHeight;
//const width = 1000;
//const height = 1000;

const fontSize = '12px';
const fontFamily = 'Aptos';
const lineHeight = 25;

//Nodes Legend
export function floating_node_legend(d){

    const fnWrapper = document.createElement('div');
    //fnWrapper.style.border = 'none';

    //Legend Title
    const fnsvg = d3.create("svg")
        .attr("width", "100%") .attr("height", "100%") .attr("viewBox", [-width / 3, -height / 3, width / 3, height / 3])
        //.attr("viewBox", [-500, -450, 300, 300])
        
    fnsvg.append("text")
        .text(d.caption) .attr("x", -400)  .attr("y", -470) .attr("dy", lineHeight)
        .attr("stroke", "none") .attr("font-size", fontSize) .attr("font-family", fontFamily) .attr("text-anchor", "left")

    //TODO: Have consts defined once -- 400, 470, etc. -- Could they be variables, calculated from other consts?
    let i = 1;
    d.items.forEach(item => {
        //Nodes
        fnsvg.append("circle")
        .attr("x", -360) .attr("y", -470 + lineHeight * i) .attr("dy", lineHeight)
            //.attr("cx", -400) .attr("cy", -470 + lineHeight * i)    
            .attr("cx", -385) .attr("cy", -447 + lineHeight * i)               
            .attr("r", 10) .attr("fill", "white") //TODO: use the data "fill"
            //.attr("r", 20) .attr("fill", "white")
            .attr("stroke", (d)=> { return (item.stroke == "#") ? "black" : item.stroke })
            .style("stroke-width", "1")
            .attr("stroke-dasharray", (d)=> {
                switch (item.dash){
                    case "sysDot": return 2
                    //case "solid": return 0
                    default: return 0
                }
            });
        switch (item.compound){
            //case "sng": break;
            //TODO: Simpligy -- "dbl" and "thickThin" are different only by .attr("r", xxx)
            case "dbl":
                fnsvg.append("circle")
                    .attr("cx", -400) .attr("cy", -470 + lineHeight * i) .attr("dy", lineHeight)
                    .attr("r", 19) .attr("fill", "none") .style("stroke-width", "2") .attr("stroke", d => item.stroke)
                    .attr("stroke-dasharray", (d)=> {
                        switch (item.dash){
                            case "sysDot": return 2
                            case "solid": return 0
                            default: return 10
                        }
                    }); break;
            case "thickThin":
                    fnsvg.append("circle")
                        .attr("cx", -400) .attr("cy", -470 + lineHeight * i) .attr("dy", lineHeight)
                        .attr("r", 18) .attr("fill", "none") .attr("stroke", d => item.stroke) .style("stroke-width", "1")
                        .attr("stroke-dasharray", (d)=> {
                            switch (item.dash){
                                case "sysDot": return 2
                                case "solid": return 0
                                default: return 10
                            }
                        }); break;
            default: break;
        }

        //Nodes Labels       
        fnsvg.append("text")
            .text(item.id) .attr("x", -360) .attr("y", -470 + lineHeight * i) .attr("dy", lineHeight)
            .attr("stroke", "none") .attr("font-size", fontSize) .attr("font-family", fontFamily) .attr("text-anchor", "left")

        i++

    });

    fnWrapper.appendChild(fnsvg.node()); 

    return fnsvg;
}

//TODO: fix arrowheads
//Links Legend
export function floating_link_legend(d){
    const flWrapper = document.createElement('div');

    //Links Title
    const flsvg = d3.create("svg")
        .attr("width", "100%")  .attr("height", "100%") .attr("viewBox", [-width / 2, -height / 2, width, height])
        //.attr("viewBox", [-500, -450, 300, 300])
        
    flsvg.append("text")
        .text(d.caption) .attr("x", -400) .attr("y", -470) .attr("dy", lineHeight)
        .attr("stroke", "none") .attr("font-size", fontSize) .attr("font-family", fontFamily) .attr("text-anchor", "left")
    flsvg.append('defs').append('marker')
        .attr("id",'larrowhead')
        .attr('viewBox','-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
        .attr('refX', 0) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
        .attr('refY', 0)
        .attr('orient','auto')
            .attr('markerWidth', 30) .attr('markerHeight', 30) .attr('xoverflow','visible')
        .append('svg:path')
        .attr('d', 'M 0,-2 L 5 ,0 L 0,2')
        .attr('fill', '#999') .style('stroke','none');
    flsvg.append('defs').append('marker')
        .attr("id",'rarrowhead')
        .attr('viewBox','-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
        .attr('refX',0) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
        .attr('refY',0)
        .attr('orient','auto-start-reverse')
            .attr('markerWidth',30) .attr('markerHeight',30) .attr('xoverflow','visible')
        .append('svg:path')
        .attr('d', 'M 0,-2 L 5 ,0 L 0,2')
        .attr('fill', '#999')
        ;

    let i = 0;
    d.items.forEach(item => {
        //Links
        flsvg.append("line")
            .attr("x1", -380) .attr("x2", -350)  .attr("y1", -410 + lineHeight) .attr("y2", -440 + lineHeight)
            .attr("stroke", "#999") .attr("stroke-opacity", 0.6)
            .attr('marker-end', (d)=> {
                switch (item.tail){
                    case "#stealth": return 'url(#rarrowhead)'
                    case "#none": return ''
                    default: return ''
                }
            })
            .attr('marker-start',(d)=> {
                switch (item.head){
                    case "#stealth": return 'url(#rarrowhead)'
                    case "#none": return ''
                    default: return ''
                }
            })
            .attr("stroke-dasharray", (d)=> {
                switch (item.dash){
                    case "dot": return 3
                    case "solid": return 0
                    default: return 10
                }
            })

        //Links Labels
        flsvg.append("text")
            //Changed to same as for the Nodes
            .text(item.id) .attr("x", -360) .attr("y", -470 + lineHeight * i) .attr("dy", lineHeight)
            .attr("stroke", "none") .attr("font-size", fontSize) .attr("font-family", fontFamily) .attr("text-anchor", "left")            
            // .text(item.id) .attr("x", -340) .attr("y", -420 + 50 * i) .attr("dy", lineHeight)
            // .attr("stroke", "none") .attr("font-size", fontSize) .attr("font-family", fontFamily) .attr("text-anchor", "left")
            
        i++
    });

    flWrapper.appendChild(flsvg.node()); 

    return flsvg;

}

export function resize(svg){
    const bbox = svg.getBBox();
    svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width+15} ${bbox.height+15}`);
}