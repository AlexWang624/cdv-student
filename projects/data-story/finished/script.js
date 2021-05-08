let w = 2000;
let h = 1300;
let padding = 90;
let i = 0;

//Main Page
let viz = d3.select("#container")
  .append("svg")
  .style("width", w)
  .style("height", h)
  .style("background-color", "black");

viz.append("text")
  .text("Space Odyssey")
  .attr("fill", "#625df6")
  .attr("font-size", "250px")
  .attr("font-family", "Abril Fatface")
  .attr("x", 0)
  .attr("y", h / 2 - 100)
  .style("stroke-width", "20px")
  .style("stroke-color", "#625df6"); //#625df6


viz.append("text")
  .text("A Glimpse Into the Space Age")
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



//Chronology
let viz2 = d3.select("#chronology")
  .append("svg")
  .attr("class", "viz2")
  .attr("width", w)
  .attr("height", 1200)
  .style("background-color", "black");

function gotData(incomingData) {
  console.log(incomingData);

  let maxPop = d3.max(incomingData, function(d, i) {
    return d.Launches.length;
  })
  console.log("maxPop", maxPop);

  let minPop = d3.min(incomingData, function(d, i) {
    return d.Launches.length;
  })
  console.log("minPop", minPop);


  let datagroups = viz2.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
    .attr("class", "datagroup");

  let yScale = d3.scaleLinear().domain([0, 140]).range([0, h / 2]);
  let colorScale = d3.scaleLinear().domain([0, 140]).range(["white", "#625df6"]);

  function getheight(d, i) {
    console.log(d);
    return yScale(d.Launches.length);
  }

  function getyPosition(d, i) {
    return -yScale(d.Launches.length);
  }

  function getColor(d, i) {
    // if (d.name == "Shanghai Tower"){
    //   return "yellow"
    // }else{
    //   return "black"
    return colorScale(d.Launches.length);
  }

  let launchyears = datagroups
    .append("rect")
    .attr("class", "launchyears")
    .attr("x", 0)
    .attr("y", getyPosition)
    .attr("width", 10)
    .attr("fill", getColor)
    .attr("height", getheight);

  function getName(d, i) {
    return d.name
  }

  function getNumbers(d, i) {
    return d.Launches.length
  }

  let lables = datagroups
    .append("text")
    .attr("class", "name")
    .text(getName)
    .attr("x", 5)
    .attr("y", -3)
    .attr("transform", "rotate(90)")
    .style("font-family", "sans-serif")
    .style("fill", "white");

  let numbers = datagroups
    .append("text")
    .attr("class", "number")
    .text(getNumbers)
    .attr("x", 0)
    .attr("y", 0)
    .style("font-family", "sans-serif")
    .style("fill", "white");

  function getGroupPosition(d, i) {
    console.log("i is", i);
    let x = (w / 120) * i;
    let y = 600;
    return "translate(" + x + ", " + y + ")"
  }

  datagroups.attr("transform", getGroupPosition);
}


d3.json("Data/Orbital_Launches.json").then(gotData);
