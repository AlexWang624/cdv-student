//colors
//Light Blue: #57f2e3
//Dark Blue: #303986
//Orange: #f23c1f
//Pink: #ff9ece
//Green: #418645
//Yellow: #f8c44c


let w = 1200 * 2;
let h = 800;
let padding = 50;


console.log("js loaded. hello!");

let viz = d3.select("#container")
  .append("svg") //append something to this selection
  .attr("class", "viz") //id: name of this attribute, viz: value of this attribute
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "#070729");


const circlePath = (angle, radius) => { // Calculate the angle at which the element will be placed.
  let x = (radius * Math.cos(angle)) + 1000; // Calculate the x position of the element.
  let y = (radius * Math.sin(angle)) + 200; // Calculate the y position of the element.
  return "translate (" + x + ", " + y + " )"
}

function gotData(incomingData) {
  console.log("the incoming data is", incomingData);

  //nest
  let nestFunction = d3.nest().key(function(d) {
    return d.why;
  });
  let nestedArray = nestFunction.entries(incomingData)
  console.log(nestedArray)

  const numOfData = incomingData.length;


  // -------------------
  //Circular path
  //White
  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 300)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 15);

  //Orange
  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 450)
    .attr("fill", "none")
    .attr("stroke", "#f23c1f")
    .attr("stroke-width", 15);

  //Dark Blue
  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 600)
    .attr("fill", "none")
    .attr("stroke", "#303986")
    .attr("stroke-width", 15);

  //Pink
  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 750)
    .attr("fill", "none")
    .attr("stroke", "#ff9ece")
    .attr("stroke-width", 15);

  //Green
  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 900)
    .attr("fill", "none")
    .attr("stroke", "#418645")
    .attr("stroke-width", 15);

  //Yellow
  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", 1050)
    .attr("fill", "none")
    .attr("stroke", "#f8c44c")
    .attr("stroke-width", 15);
  // -------------------



  // -------------------
  // filter
  //1.Angry
  var dataFilteredAngry = nestedArray.filter(function(d) {
    return d.key === 'Angry'
  })
  console.log(dataFilteredAngry);
  //2.Resonated
  var dataFilteredResonated = nestedArray.filter(function(d) {
    return d.key === 'Resonated'
  })
  console.log(dataFilteredResonated);
  //3.Sad
  var dataFilteredSad = nestedArray.filter(function(d) {
    return d.key === 'Sad'
  })
  console.log(dataFilteredSad);
  //4.Surprised
  var dataFilteredSurprised = nestedArray.filter(function(d) {
    return d.key === 'Surprised'
  })
  console.log(dataFilteredSurprised);
  //5.Inspired
  var dataFilteredInspired = nestedArray.filter(function(d) {
    return d.key === 'Inspired'
  })
  console.log(dataFilteredInspired);
  //6.LearnedNewThings
  var dataFilteredLearnedNewThings = nestedArray.filter(function(d) {
    return d.key === 'LearnedNewThings'
  })
  console.log(dataFilteredLearnedNewThings);
  // -------------------


  // -------------------
  // whygroups
  //1.Angry
  let whygroup1 = viz.selectAll(".whyGroup1").data(dataFilteredAngry).enter()
    .append("g")
    .attr("class", "whyGroup1")
    .attr("transform", (d, i) => {
      return "translate(200,200)"
    });
  //2.Resonated
  let whygroup2 = viz.selectAll(".whyGroup2").data(dataFilteredResonated).enter()
    .append("g")
    .attr("class", "whyGroup2")
    .attr("transform", (d, i) => {
      return "translate(200,200)"
    });
  //3.Sad
  let whygroup3 = viz.selectAll(".whyGroup3").data(dataFilteredSad).enter()
    .append("g")
    .attr("class", "whyGroup3")
    .attr("transform", (d, i) => {
      return "translate(200,200)"
    });
  //4.Surprised
  let whygroup4 = viz.selectAll(".whyGroup4").data(dataFilteredSurprised).enter()
    .append("g")
    .attr("class", "whyGroup4")
    .attr("transform", (d, i) => {
      return "translate(200,200)"
    });
  //5.Inspired
  let whygroup5 = viz.selectAll(".whyGroup5").data(dataFilteredInspired).enter()
    .append("g")
    .attr("class", "whyGroup5")
    .attr("transform", (d, i) => {
      return "translate(200,200)"
    });
  //6.LearnedNewThings
  let whygroup6 = viz.selectAll(".whyGroup6").data(dataFilteredLearnedNewThings).enter()
    .append("g")
    .attr("class", "whyGroup6")
    .attr("transform", (d, i) => {
      return "translate(200,200)"
    });


  // -------------------
  // datagroup1 (Angry)
  let datagroup1 = whygroup1.selectAll(".datagroup1").data(function(d, i) {
      console.log("d", d.values)
      return d.values
    }).enter()
    .append("g").attr("class", "datagroup1")

  let arr1 = [0, Math.PI];
  console.log("arr1", arr1[0]);
  datagroup1.attr("transform", (d, i) => {
    let angle = arr1[i];
    return circlePath(angle, 1050);
  });

  datagroup1.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 30)
    .attr("fill", chooseColorWhere);
  // .attr("stroke", chooseColorLanguage)
  // .attr("stroke-width", 20);


  datagroup1.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 18)
    .attr("fill", chooseColorLanguage);


  datagroup1.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 50)
    .attr("fill", "none")
    .attr("stroke", chooseColorTopic)
    .attr("stroke-width", 5);


  datagroup1.append("rect")
    .attr('x', 5)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorGender);


  datagroup1.append("rect")
    .attr('x', -25)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorNationality);

  //datagroup2 (Resonated)
  let datagroup2 = whygroup2.selectAll(".datagroup2").data(function(d, i) {
      console.log("d", d.values)
      return d.values
    }).enter()
    .append("g").attr("class", "datagroup2")

  datagroup2.attr("transform", (d, i) => {
    arr2 = [0, Math.PI];
    let angle = arr2[i];
    return circlePath(angle, 900);
  });

  datagroup2.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 30)
    .attr("fill", chooseColorWhere);

  datagroup2.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 18)
    .attr("fill", chooseColorLanguage);


  datagroup2.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 50)
    .attr("fill", "none")
    .attr("stroke", chooseColorTopic)
    .attr("stroke-width", 5);

  datagroup2.append("rect")
    .attr('x', 5)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorGender);


  datagroup2.append("rect")
    .attr('x', -25)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorNationality);

  //datagroup3 (Sad)
  let datagroup3 = whygroup3.selectAll(".datagroup3").data(function(d, i) {
      console.log("d", d.values)
      return d.values
    }).enter()
    .append("g").attr("class", "datagroup3")

  datagroup3.attr("transform", (d, i) => {
    let arr3 = [0, 9 / 10 * Math.PI, 11 / 10 * Math.PI];
    let angle = arr3[i];
    return circlePath(angle, 750);
  });

  datagroup3.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 30)
    .attr("fill", chooseColorWhere);

  datagroup3.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 18)
    .attr("fill", chooseColorLanguage);

  datagroup3.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 50)
    .attr("fill", "none")
    .attr("stroke", chooseColorTopic)
    .attr("stroke-width", 5);

  datagroup3.append("rect")
    .attr('x', 5)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorGender);


  datagroup3.append("rect")
    .attr('x', -25)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorNationality);


  //datagroup4 (Surprised)
  let datagroup4 = whygroup4.selectAll(".datagroup4").data(function(d, i) {
      console.log("d", d.values)
      return d.values
    }).enter()
    .append("g").attr("class", "datagroup4")

  datagroup4.attr("transform", (d, i) => {
    let arr4 = [1 / 10 * Math.PI, 9 / 10 * Math.PI, 11 / 10 * Math.PI, 19 / 10 * Math.PI];
    let angle = arr4[i];
    return circlePath(angle, 600);
  });


  datagroup4.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 30)
    .attr("fill", chooseColorWhere);

  datagroup4.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 18)
    .attr("fill", chooseColorLanguage);

  datagroup4.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 50)
    .attr("fill", "none")
    .attr("stroke", chooseColorTopic)
    .attr("stroke-width", 5);

  datagroup4.append("rect")
    .attr('x', 5)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorGender);


  datagroup4.append("rect")
    .attr('x', -25)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorNationality);

  //datagroup5 (Inspired)
  let datagroup5 = whygroup5.selectAll(".datagroup5").data(function(d, i) {
      console.log("d", d.values)
      return d.values
    }).enter()
    .append("g").attr("class", "datagroup5")

  datagroup5.attr("transform", (d, i) => {
    let arr5 = [1 / 10 * Math.PI, 9 / 10 * Math.PI, 11 / 10 * Math.PI, 19 / 10 * Math.PI];
    let angle = arr5[i];
    return circlePath(angle, 450);
  });

  datagroup5.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 30)
    .attr("fill", chooseColorWhere);

  datagroup5.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 18)
    .attr("fill", chooseColorLanguage);

  datagroup5.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 50)
    .attr("fill", "none")
    .attr("stroke", chooseColorTopic)
    .attr("stroke-width", 5);


  datagroup5.append("rect")
    .attr('x', 5)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorGender);


  datagroup5.append("rect")
    .attr('x', -25)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorNationality);

  //datagroup6 (LearnedNewThings)
  let datagroup6 = whygroup6.selectAll(".datagroup6").data(function(d, i) {
      console.log("d", d.values)
      return d.values
    }).enter()
    .append("g").attr("class", "datagroup6")

  datagroup6.attr("transform", (d, i) => {
    let arr6 = [1 / 10 * Math.PI, 9 / 10 * Math.PI, 11 / 10 * Math.PI, 19 / 10 * Math.PI, 3 / 2 * Math.PI]
    let angle = arr6[i];
    return circlePath(angle, 300);
  });

  datagroup6.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 30)
    .attr("fill", chooseColorWhere);


  datagroup6.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 18)
    .attr("fill", chooseColorLanguage);

  datagroup6.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 50)
    .attr("fill", "none")
    .attr("stroke", chooseColorTopic)
    .attr("stroke-width", 5);

  datagroup6.append("rect")
    .attr('x', 5)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorGender);


  datagroup6.append("rect")
    .attr('x', -25)
    .attr('y', -57)
    .attr('width', 20)
    .attr('height', 20)
    .attr("fill", chooseColorNationality);


  // -------------------

  // -------------------
  // choose colors
  // where
  function chooseColorWhere(datapoint) {
    if (datapoint.where == "Book") {
      return "#303986" //dark blue
    } else if (datapoint.where == "Essay") {
      return "#f23c1f" //orange
    } else if (datapoint.where == "Social Media Post") {
      return "white"
    }
  }

  //language
  function chooseColorLanguage(datapoint) {
    if (datapoint.languageWhenIRead == "Chinese") {
      return "#ff9ece" //pink
    } else if (datapoint.languageWhenIRead == "English") {
      return "#418645" //green
    }
  }

  //gender of the author(s)
  function chooseColorGender(datapoint) {
    if (datapoint.gender == "Male") {
      return "#57f2e3" //light blue
    } else if (datapoint.gender == "Female") {
      return "#ff9ece" // pink
    }
  }

  function chooseColorNationality(datapoint) {
    if (datapoint.nationality == "Czech") {
      return "#57f2e3" //light blue
    } else if (datapoint.nationality == "British") {
      return "#303986" //dark blue
    } else if (datapoint.nationality == "Chinese") {
      return "#f23c1f" //orange
    } else if (datapoint.nationality == "American") {
      return "#ff9ece" //pink
    } else if (datapoint.nationality == "Italian") {
      return "#418645" //green
    } else if (datapoint.nationality == "French") {
      return "#f8c44c" //yellow
    } else if (datapoint.nationality == "Multiple Authors") {
      return "white" //black
    } else if (datapoint.nationality == "Canadian") {
      return "purple" //purple
    }
  }

  //topic
  function chooseColorTopic(datapoint) {
    if (datapoint.topic == "Literature") {
      return "#57f2e3" //light blue
    } else if (datapoint.topic == "Technology") {
      return "#303986" //dark blue
    } else if (datapoint.topic == "Architecture") {
      return "#f23c1f" //orange
    } else if (datapoint.topic == "Communication") {
      return "#ff9ece" //pink
    } else if (datapoint.topic == "Art") {
      return "#418645" //green
    } else if (datapoint.topic == "Feminism") {
      return "#f8c44c" //yellow
    } else if (datapoint.topic == "Anti-Racism") {
      return "white"
    } else if (datapoint.topic == "Philosophy") {
      return "purple" //purple
    } else if (datapoint.topic == "Psychology") {
      return "grey" //grey
    }
  }

  //nationality
  // -------------------

}


d3.json("data.json").then(gotData);
