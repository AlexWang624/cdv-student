let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
  .attr("class", "viz")
  .attr("width", w)
  .attr("height", h)
  .attr("class", "viz")
  .style("background-color", "#130d2b");

viz.append("path")
  .attr("id", "wavy") //Unique id of the path
  .attr("d", "M 400,400 A 200,200 0 0,1 800,400") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("path")
  .attr("d", "M 400,400 A 200,200 0 0,0 800,400") //SVG path
  .style("fill", "none")
  .style("stroke", "white")
  .attr("stroke-width", "30");

//Create an SVG text element and append a textPath element
viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy") //place the ID of the path here
  .attr("startOffset", "1%")
  .text("Unforgettable Sentences that I Have Read")
  .attr("fill", "white")
  .attr("font-size", "33px")
  .attr("font-weight", "bold")
  .attr("font-family", "Arvo");

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", h / 2)
  .attr("r", 700)
  .attr("fill", "none")
  .attr("stroke", "#f8c44c")
  .attr("stroke-width", "30");

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", h / 2)
  .attr("r", 600)
  .attr("fill", "none")
  .attr("stroke", "#418645")
  .attr("stroke-width", "30");

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", h / 2)
  .attr("r", 500)
  .attr("fill", "none")
  .attr("stroke", "#ff9ece")
  .attr("stroke-width", "30");

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", h / 2)
  .attr("r", 400)
  .attr("fill", "none")
  .attr("stroke", "#303986")
  .attr("stroke-width", "30");

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", h / 2)
  .attr("r", 300)
  .attr("fill", "none")
  .attr("stroke", "#f23c1f")
  .attr("stroke-width", "30");

// viz.append("circle")
//   .attr("cx", 600)
//   .attr("cy", 400)
//   .attr("r", 60)
//   .attr("fill", "white");
//
// viz.append("circle")
//   .attr("cx", 600)
//   .attr("cy", 400)
//   .attr("r", 36)
//   .attr("fill", "#418645");
//
//
// viz.append("circle")
//   .attr("cx", 600)
//   .attr("cy", 400)
//   .attr("r", 100)
//   .attr("fill", "none")
//   .attr("stroke", "#f23c1f")
//   .attr("stroke-width", 7.5);
//
//
// viz.append("rect")
//   .attr('x', 550)
//   .attr('y', 285)
//   .attr('width', 40)
//   .attr('height', 40)
//   .attr("fill", "#ff9ece");
//
//
// viz.append("rect")
//   .attr('x', 610)
//   .attr('y', 285)
//   .attr('width', 40)
//   .attr('height', 40)
//   .attr("fill", "#57f2e3");
