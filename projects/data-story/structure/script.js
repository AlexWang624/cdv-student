let w = 2000;
let h = 1300;
let padding = 90;
let i = 0;

let viz = d3.select("#container").append("svg")
  .style("width", w)
  .style("height", h)
  .style("background-color", "black");

// let viz2 = d3.select("#chronology").append("svg")
//   .style("width", w)
//   .style("height", h)
//   .style("background-color", "black");

viz.append("text")
  .text("Space Odyssey")
  .attr("fill", "#625df6")
  .attr("font-size", "250px")
  .attr("font-family", "Abril Fatface")
  .attr("x", 0)
  .attr("y", h / 2 - 100)
  .style("stroke-width", "20px")
  .style("stroke-color", "#625df6");


viz.append("text")
  .text("  A Glimpse Into the Space Age")
  .attr("fill", "#625df6")
  .attr("font-size", "100px")
  .attr("font-family", "Abril Fatface")
  .attr("x", 0)
  .attr("y", h / 2 + 70);

viz.append("text")
  .text("A web-based data visualization project on the orbital launches in space from 1957.")
  .attr("fill", "white")
  .attr("font-size", "40px")
  .attr("font-family", "'Roboto Mono', monospace")
  .attr("x", 0)
  .attr("y", h / 2 + 200)
  .attr("overflow-wrap", "break-word");

let viz2 = d3.select("#chronology").append("svg")
  .style("width", w)
  .style("height", h)
  .style("background-color", "white");

viz2.append("text")
  .text("This space is for the visualization of the chronology of orbital launches in space")
  .attr("fill", "black")
  .attr("font-size", "40px")
  .attr("font-family", "'Roboto Mono', monospace")
  .attr("x", 20)
  .attr("y", h / 2)
  .attr("overflow-wrap", "break-word");

  let viz3 = d3.select("#satellite").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "white");

  viz3.append("text")
    .text("This space is for the visualization of the operating satellites in space")
    .attr("fill", "black")
    .attr("font-size", "40px")
    .attr("font-family", "'Roboto Mono', monospace")
    .attr("x", 20)
    .attr("y", h / 2)
    .attr("overflow-wrap", "break-word");
