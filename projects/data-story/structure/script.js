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
  .attr("y", h/2-100)
  .style("stroke-width", "20px")
  .style("stroke-color", "#625df6");


viz.append("text")
  .text("  A Glimpse Into the Space Age")
  .attr("fill", "#625df6")
  .attr("font-size", "100px")
  .attr("font-family", "Abril Fatface")
  .attr("x", 0)
  .attr("y", h/2+70);

  viz.append("text")
    .text("A web-based data visualization project on the orbital launches in space from 1957.")
    .attr("fill", "white")
    .attr("font-size", "40px")
    .attr("font-family", "'Roboto Mono', monospace")
    .attr("x", 0)
    .attr("y", h/2+200)
    .attr("overflow-wrap", "break-word");
