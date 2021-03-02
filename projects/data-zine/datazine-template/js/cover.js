let w = 1200;
let h = 800;

function gotData(incomingData) {
  let viz = d3.select("#container")
    .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "viz")
    .style("background-color", "black");

  let coverGroup = viz.append("g").attr("class", "coverGroup");

  coverGroup.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 350)
    .attr("stroke", "white")
    .attr("stroke-width", 5);

  coverGroup.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 300)
    .attr("stroke", "white")
    .attr("stroke-width", 4);

  coverGroup.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 250)
    .attr("stroke", "white")
    .attr("stroke-width", 3);

  coverGroup.append("rect")
    .attr("x", w / 2 - 75)
    .attr("y", h / 2 - 75)
    .attr("width", 150)
    .attr("height", 150)
    .attr("fill", "red")
    .attr("stroke", "blue")
    .attr("stroke-width", 30);

  coverGroup.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 40)
    .attr("stroke", "white")
    .attr("stroke-width", 20)
    .attr("fill", "#FFD700");

}





d3.json("data.json").then(gotData);
