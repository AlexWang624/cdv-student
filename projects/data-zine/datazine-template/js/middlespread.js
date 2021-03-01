let w = 1200 * 2;
let h = 800;

console.log("js loaded. hello!");

let viz = d3.select("#viz-container")
.append("svg") //append something to this selection
   .attr("class", "viz") //id: name of this attribute, viz: value of this attribute
   .attr("width", w)
   .attr("height", h)
   .style("background-color", "black")
;



function randomGroupPosition(){
  let x = Math.random() * 800;
  let y = Math.random() * 800;
  return "translate (" + x + ", " + y +")"
}

function gotData(incomingData){
  console.log("the incoming data is", incomingData);

let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
.append("g")
  .attr("class", "datagroup")
  ;

  datagroups.append("rect")
  .attr("x", b)
  .attr("y", 125)
  .attr("width", 150)
  .attr("height", 150)
  .attr("fill", chooseColorWhere)
  .attr("stroke", chooseColorLanguage)
  .attr("stroke-width",15)
  ;

  datagroups.append("circle")
  .attr("cx", a)
  .attr("cy", 200)
  .attr("r", 40)
  .attr("fill", chooseColorGender)
  .attr("stroke", chooseColorPurpose)
  .attr("stroke-width",20)
  ;

  // datagroups.attr("transform", randomGroupPosition);
}



function chooseColorWhere(datapoint){
  if (datapoint.where == "Book"){
    return "orange"
  }else if (datapoint.where == "Essay"){
    return "blue"
  }
}
//
function chooseColorLanguage(datapoint){
  if (datapoint.language == "Chinese"){
    return "red"
  }else if (datapoint.language == "English"){
    return "green"
  }
}

function chooseColorDigital(datapoint){
  if (datapoint.digitalorpaper == "paper"){
    return "white"
  }else if (datapoint.digitalorpaper == "digital"){
    return "black"
  }
}
//
function chooseColorGender(datapoint){
  if (datapoint.gender == "Male"){
    return "pink"
  }else if (datapoint.gender == "Female"){
    return "purple"
  }
}
//
function chooseColorPurpose(datapoint){
  if (datapoint.purpose == "Recreation"){
    return "white"
  }else if (datapoint.purpose == "Academics"){
    return "red"
  }
}
//
function a(datapoint, i){
    console.log("first value:", datapoint);
    console.log("second value:", i);
    return 100 + i * 300;
}

function b(datapoint, i){
    console.log(datapoint);
    console.log(i);
    return  25 + i * 300;
}

d3.json("data.json").then(gotData);
