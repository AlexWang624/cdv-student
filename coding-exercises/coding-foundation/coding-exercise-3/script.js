console.log("js loaded. hello!");

let viz = d3.select("#viz-container")
.append("svg") //append something to this selection
   .attr("id", "viz") //id: name of this attribute, viz: value of this attribute
   .attr("width", 600)
   .attr("height", 500)
;


d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);
    let bookWhere = incomingData[0].where;
    console.log(bookWhere);


viz.selectAll("circle").data(incomingData).enter()
  .append("circle")
  .attr("cx", bookWhereX)
  .attr("cy", 200)
  .attr("r", 70)
  .attr("fill", chooseColorWhere)
  .attr("stroke", chooseColorLanguage)
  .attr("stroke-width",15)
  ;

viz.selectAll("circle2").data(incomingData).enter()
    .append("circle")
    .attr("cx", bookWhereX)
    .attr("cy", 200)
    .attr("r",40)
    .attr("fill", chooseColorGender)
    .attr("stroke", chooseColorDigital)
    .attr("stroke-width",15)
    ;

viz.selectAll("rect").data(incomingData).enter()
  .append("rect")
  .attr("x", bookWhereXX)
  .attr("y", 185)
  .attr("width", 15)
  .attr("height", 30)
  .attr("fill", chooseColorPurpose)
}
;

function chooseColorWhere(datapoint){
  if (datapoint.where == "book"){
    return "red"
  }else if (datapoint.where == "essay"){
    return "orange"
  }
}

function chooseColorLanguage(datapoint){
  if (datapoint.language == "chinese"){
    return "blue"
  }else if (datapoint.language == "english"){
    return "pink"
  }
}

function chooseColorDigital(datapoint){
  if (datapoint.digitalOrPaper == "paper"){
    return "white"
  }else if (datapoint.digitalOrPaper == "digital"){
    return "black"
  }
}

function chooseColorGender(datapoint){
  if (datapoint.gender == "male"){
    return "green"
  }else if (datapoint.gender == "female"){
    return "purple"
  }
}

function chooseColorPurpose(datapoint){
  if (datapoint.purpose == "recreation"){
    return "white"
  }else if (datapoint.purpose == "academics"){
    return "black"
  }
}

function bookWhereX(datapoint, i){
    console.log(datapoint);
    console.log(i);
    return 100 + i * 200;
}

function bookWhereXX(datapoint, i){
    console.log(datapoint);
    console.log(i);
    return 100 + i * 200 - 7;
}

function digitalOr(datapoint, i) {
  return 100 + i * 200;
}
