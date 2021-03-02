let w = 1200 * 2;
let h = 800;
let padding = 50;


console.log("js loaded. hello!");

let viz = d3.select("#container")
  .append("svg") //append something to this selection
  .attr("class", "viz") //id: name of this attribute, viz: value of this attribute
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black");



// function randomGroupPosition() {
//   let x = Math.random() * 800;
//   let y = Math.random() * 800;
//   return "translate (" + x + ", " + y + ")"
// }

// const oscillatorGenerator = (amplitude, wavelength,xOffset,yOffset) => {
//   return (phase)=>{
//     let x = phase;
//     let y = Math.cos(phase/wavelength+xOffset)*amplitude/2 + yOffset;
//     return "translate (" + x + ", " + y + ")"
//   }
// }
//
// const oscillator1 = oscillatorGenerator(600,600,100,400);
// const oscillator = (phase, amplitude, wavelength, xOffset, yOffset) => {
//   let x = phase;
//   let y = Math.cos(phase / wavelength + xOffset) * amplitude / 2 + yOffset;
//   return "translate (" + x + ", " + y + ")"
// }



// const circlePath = (radius)    => {
//   let x = 2 * Math.PI * radius;
//   let y = 2 * Math.PI * radius + 200;
//   return "translate (" + x + ", " + y + ")"
// }

const circlePath = (angle, radius) => { // Calculate the angle at which the element will be placed.
           let x = (radius * Math.cos(angle)) + 1000; // Calculate the x position of the element.
           let y = (radius * Math.sin(angle))-140; // Calculate the y position of the element.
          return "translate (" + x + ", " + y +" )"
        }

function gotData(incomingData) {
  console.log("the incoming data is", incomingData);


  let nestFunction = d3.nest().key(function(d) {
    return d.gender;
  });
  let nestedArray = nestFunction.entries(incomingData)
  console.log(nestedArray)

  const numOfData = incomingData.length;

  // let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
  //   .append("g")
  //   .attr("class", "datagroup")
  //   .attr("transform", (d, i) => {
  //     // let phase = i / (numOfData - 1) * (w - 2 * padding) + padding;
  //     // return oscillator(phase, 600, 800, 0, h / 2);
  //     return calculateCircumference(100);
  //   });
  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", 0)
    .attr("r", 380)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 5);

  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", 0)
    .attr("r", 580)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 5);


  viz.append("circle")
    .attr("cx", w / 2)
    .attr("cy", 0)
    .attr("r", 780)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 5);


  let gendergroups = viz.selectAll(".genderGroup").data(nestedArray).enter()
    .append("g")
    .attr("class", "genderGroup")
    .attr("transform", (d, i) => {
      return "translate(200,200)"
    });

  let datagroups = gendergroups.selectAll(".datagroup").data(function(d, i) {
      console.log("d", d.values)
      return d.values
    }).enter()
    .append("g").attr("class", "datagroup")

  datagroups.attr("transform", (d, i) => {
    let angle = (i / 3) * Math.PI;
    return circlePath(angle, 360);
  });

  // let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
  //   .append("g")
  //   .attr("class", "datagroup")
  //   .attr("transform", (d, i) => {
  //     let phase = i / (numOfData - 1) * (w - 2 * padding) + padding;
  //     return oscillator(phase, 600, 800, 0, h / 2);
  //     // return circlePath (200);
  //   });

  datagroups.append("rect")
    .attr("x", -38)
    .attr("y", -37)
    .attr("width", 75)
    .attr("height", 75)
    .attr("fill", chooseColorWhere)
    .attr("stroke", chooseColorLanguage)
    .attr("stroke-width", 15);

  datagroups.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 20)
    .attr("fill", chooseColorGender)
    .attr("stroke", chooseColorPurpose)
    .attr("stroke-width", 10);
}



function chooseColorWhere(datapoint) {
  if (datapoint.where == "Book") {
    return "orange"
  } else if (datapoint.where == "Essay") {
    return "blue"
  }
}
//
function chooseColorLanguage(datapoint) {
  if (datapoint.language == "Chinese") {
    return "red"
  } else if (datapoint.language == "English") {
    return "green"
  }
}

function chooseColorDigital(datapoint) {
  if (datapoint.digitalorpaper == "paper") {
    return "white"
  } else if (datapoint.digitalorpaper == "digital") {
    return "black"
  }
}
//
function chooseColorGender(datapoint) {
  if (datapoint.gender == "Male") {
    return "pink"
  } else if (datapoint.gender == "Female") {
    return "purple"
  }
}
//
function chooseColorPurpose(datapoint) {
  if (datapoint.purpose == "Recreation") {
    return "white"
  } else if (datapoint.purpose == "Academics") {
    return "red"
  }
}
//
// function a(datapoint, i) {
//   console.log("first value:", datapoint);
//   console.log("second value:", i);
//   return 100 + i * 300;
// }
//
// function b(datapoint, i) {
//   console.log(datapoint);
//   console.log(i);
//   return 25 + i * 300;
// }

d3.json("data.json").then(gotData);
