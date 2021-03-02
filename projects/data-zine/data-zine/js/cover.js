let w = 1200;
let h = 800;

  let viz = d3.select("#container")
    .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "viz")
    .style("background-color", "black");

  viz.append("path")
    .attr("id", "wavy") //Unique id of the path
    .attr("d", "M 400,400 A 200,200 0 0,1 800,400") //SVG path
    .style("fill", "none")
    .style("stroke", "none");

  viz.append("path")
    .attr("id", "wavy") //Unique id of the path
    .attr("d", "M 400,400 A 200,200 0 0,0 800,400") //SVG path
    .style("fill", "none")
    .style("stroke", "white")
    .attr("stroke-width", "2");

  //Create an SVG text element and append a textPath element
  viz.append("text")
    .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .attr("startOffset", "13%")
    .text("Sentences I Highlighted When I Read")
    .attr("fill", "white")
    .attr("font-size", "26px")
    .attr("font-family", "Arvo");


viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 350)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 5);

  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 300)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 4);

  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 250)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 3);

  viz.append("rect")
    .attr("x", w / 2 - 75)
    .attr("y", h / 2 - 75)
    .attr("width", 150)
    .attr("height", 150)
    .attr("fill", "red")
    .attr("stroke", "blue")
    .attr("stroke-width", 30);

  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 40)
    .attr("stroke", "white")
    .attr("stroke-width", 20)
    .attr("fill", "#FFD700");

  // viz.append("rect")
  //   .attr("x", 1000)
  //   .attr("y", 600)
  //   .attr("width", 50)
  //   .attr("height", 50)
  //   .attr("fill", "purple");
  //
  // viz.append("rect")
  //   .attr("x", 60)
  //   .attr("y", 500)
  //   .attr("width", 40)
  //   .attr("height", 40)
  //   .attr("fill", "red");
  //
  // viz.append("rect")
  //   .attr("x", 200)
  //   .attr("y", 180)
  //   .attr("width", 40)
  //   .attr("height", 40)
  //   .attr("fill", "purple");
  //
  // viz.append("circle")
  //   .attr("cx", 200)
  //   .attr("cy", 700)
  //   .attr("r", 30)
  //   .attr("fill", "blue");
  //
  // viz.append("circle")
  //   .attr("cx", 160)
  //   .attr("cy", 340)
  //   .attr("r", 20)
  //   .attr("fill", "pink");
  //
  // viz.append("circle")
  //   .attr("cx", 1100)
  //   .attr("cy", 400)
  //   .attr("r", 20)
  //   .attr("fill", "green");
  //
  // viz.append("circle")
  //   .attr("cx", 1020)
  //   .attr("cy", 220)
  //   .attr("r", 30)
  //   .attr("fill", "orange");
