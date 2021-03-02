let w = 1200;
let h = 800;
let padding = 50;


console.log("js loaded. hello!");

let viz = d3.select("#container")
  .append("svg") //append something to this selection
  .attr("class", "viz") //id: name of this attribute, viz: value of this attribute
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black");

  function gotData(incomingData) {
    console.log("the incoming data is", incomingData);

    viz.selectAll("circle1").data(incomingData).enter()
      .append("circle")
      .attr("cx", w / 2)
      .attr("cy", -50)
      .attr("r", 300)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 3);

    viz.selectAll("circle2").data(incomingData).enter()
    viz.append("circle")
      .attr("cx", w / 2)
      .attr("cy", -50)
      .attr("r", 360)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 4);

    viz.selectAll("circle3").data(incomingData).enter()
    viz.append("circle")
      .attr("cx", w / 2)
      .attr("cy", -50)
      .attr("r", 420)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 5);

let coverGroup = viz.append("g").attr("class", "coverGroup");

    coverGroup.append("rect")
      .attr("x", 250)
      .attr("y", h/2+100)
      .attr("width", 700)
      .attr("height", 700)
      .attr("fill", "red")
      .attr("stroke", "blue")
      .attr("stroke-width", 140);

    coverGroup.append("circle")
      .attr("cx", w/2)
      .attr("cy", 850)
      .attr("r", 187)
      .attr("stroke", "white")
      .attr("stroke-width", 93)
      .attr("fill", "#FFD700")
      ;

    }


    d3.json("data.json").then(gotData);
