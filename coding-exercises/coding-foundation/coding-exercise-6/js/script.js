console.log("\n\n\nWelcome!\n\n\n");
console.log("script runs.");
console.log("do we have data?");
// check if variable exists: https://stackoverflow.com/a/519157
console.log("data:", typeof data !== 'undefined' ? data : "nothing here");
console.log(typeof data !== 'undefined' ? "seems like it ;-) it comes from the dataManager.js script." : "...damnit! let's see what is going wrong in the dataManager.js script.");

// global variables that we need at various spots:
let w = 800;
let h = 600;
let padding = 50;

// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
  .style("width", w)
  .style("height", h);


// X SCALE
let allNames = data.map(function(d) {
  return d.key
});
console.log(allNames);
let xScale = d3.scaleBand()
  .domain(allNames)
  .range([padding, w - padding])
  .paddingInner(0.1);

let xAxis = d3.axisBottom(xScale)

xAxis.tickFormat(d => {
  return data.filter(dd => dd.key == d)[0].name;
});
let xAxisGroup = viz.append("g").classed("xAxis", true);
xAxisGroup.call(xAxis);
xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
// xAxisGroup.selectAll("line").remove();
xAxisGroup.attr("transform", "translate(0," + (h - padding) + ")")


// Y SCALE
let yMax = d3.max(data, function(d) {
  return d.value
});
yDomain = [0, yMax];
let yScale = d3.scaleLinear().domain(yDomain).range([0, h - padding * 2]);


// the ACTUAL GRAPH
// before we get to the actual graph, we make a group element into which to
// put all visual graph things:
let graphGroup = viz.append("g").classed("graphGroup", true);
// btw, this:
// .classed("graphGroup", true);
// is almost equivalent to
// .attr("class", "graphGroup");
// but slightly more advanced. you can find a description here:
// https://github.com/d3/d3-selection#selection_classed


// now comes the interesting part, WATCH OUT! i'll go slow
// we have the page (with nothing on it) and we have data
// we *toss* it both to D3 and let it do its evaluation about
// how many elements need to enter/update/exit.
let elementsForPage = graphGroup.selectAll(".datapoint").data(data);
// note, we do not use ".enter()" for now. let's have a close look
// at just this for now
// as we have learned, D3 did some kind of calculation here, some weighing
// of what is on the page already and what needs to go there.
// have a close look at this console.log:
console.log("D3's assessment of whats needed on the page:", elementsForPage);
// note the reference to enter, exit and group in the object
// those three are all the possible selections.
// they comprises elements that are about to enter (in this case 10),
// elements that are on the page already and will be updated and elements
// that don't have any associated datapoint anymore and need to exit.
// out of this, we can pick those three subsections and decide
// precisely what to do with the, e.g. how should new elements enter?
// should they come from the bottom? slowly fade in? - ours to decide
// how should updating elements change their size, color, position etc.?
// and the exiting ones, rather than just disappearing, how about they
// fade out?


// out of this, we will now extract the sub selections,
// the entering elements and the exiting ones:
let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
// and again, look closely:
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);
// note how we now only deal with a "_groups" thing,
// in the enteringElements object, the "_groups" array holds the
// empty placeholder elements for the elements that are about to enter
// equally, in the exitingElements, the "_groups" array holds the elements
// that ARE on the page, but must leave because no datapoint is their to
// match them.
// here is how i see it, we start with ALL the elements
// that we are dealing with. from that, we extract the entering ones (... and
// do something with them), we also extract the exiting one (...and treat those
// differently, too) and then? What are we left with? the UPDATING elements!
// they are in the "_groups" array we saw in the very beginning inside
// "elementsForPage". For now, hold the thought that we are dealing
// with three subsections of elements: entering ones, exiting ones, and updating ones.
// hopefully this will get clearer as we go on.


// as you can see, there is nothing on the page yet. And the previous console.logs
// confirm that there is no elements updating, none are leaving, we only have things enter.
// let's deal with them right now:
// make a group for each datapoint
let enteringDataGroups = enteringElements.append("g").classed("datapoint", true);
// position the group along the x axis (check the inspector tool to see
// what we are doing):
enteringDataGroups.attr("transform", function(d, i) {
  return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
});
// then append rectangles to them and position/size them:
enteringDataGroups
  .append("rect")
  .attr("width", function() {
    // the scaleBand we are using
    // allows us to as how thick each band is:
    return xScale.bandwidth();
  })
  .attr("height", function(d, i) {
    // the idea is that we make the bar
    // as high as dictated by the value...
    return yScale(d.value);
  })
  .attr("y", function(d, i) {
    // ...and then push the bar up since it
    // is drawn from top to bottom
    return -yScale(d.value);
  })
  .attr("fill", "black");


// binding functions to the buttons on the page
// the functions we use to do the actual work are defined in dataManager.js


//Add a new column
function add() {
  addDatapoints(1);
  console.log("new data", data);

  //updates the list of keys
  allNames = data.map(function(d) {
    return d.key;
  });

  xScale.domain(allNames);
  //updating the x axis
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d => {
    return data.filter(dd => dd.key == d)[0].name;
  }); // we adjust this because it uses the new data
  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  //updating the y axis

  yMax = d3.max(data, function(d) {
    return d.value
  });
  yDomain = [0, yMax + yMax * 0.1];
  yScale.domain(yDomain);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  console.log(elementsForPage);
  // don't use let bc variables already declared earlier
  enteringElements = elementsForPage.enter();
  exitingElements = elementsForPage.exit();

  elementsForPage.transition().duration(800).attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });

  // only updating things that are impacted by the new data
  // 'updating' = write the code again so that it can run again with the updated dataset

  elementsForPage.select("rect")
    .transition()
    .delay(100)
    .duration(500)
    .attr("fill", "black")
    .attr("width", function() {
      return xScale.bandwidth();
    })
    .attr("y", function(d, i) {
      return -yScale(d.value);
    })
    .attr("height", function(d, i) {
      return yScale(d.value);
    })

  let incomingDataGroups = enteringElements.append("g")
    .classed("datapoint", true);
  incomingDataGroups.attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });
  incomingDataGroups.append("rect")
    .attr("y", function(d, i) {
      return 0;
    })
    .attr("height", function(d, i) {
      return 0;
    })
    .attr("width", function() {
      return xScale.bandwidth();
    })
    .attr("fill", "blue")
    .transition()
    .delay(400)
    .duration(500)
    .attr("y", function(d, i) {
      return -yScale(d.value);
    })
    .attr("height", function(d, i) {
      return yScale(d.value);
    })
    .attr("fill", "black");
}
document.getElementById("buttonA").addEventListener("click", add);

function remove() {
  removeDatapoints(1);
  //updates the list of keys
  allNames = data.map(function(d) {
    return d.key;
  });

  xScale.domain(allNames);
  //updating the x axis
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d => {
    return data.filter(dd => dd.key == d)[0].name;
  }); // we adjust this because it uses the new data
  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  //updating the y axis

  yMax = d3.max(data, function(d) {
    return d.value
  });
  yDomain = [0, yMax + yMax * 0.1];
  yScale.domain(yDomain);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  console.log(elementsForPage);
  // don't use let bc variables already declared earlier
  enteringElements = elementsForPage.enter();
  exitingElements = elementsForPage.exit();

  elementsForPage.transition().duration(500).attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });


  elementsForPage.select("rect")
    .transition()
    .delay(800)
    .duration(500)
    .attr("fill", "black")
    .attr("width", function() {
      return xScale.bandwidth();
    })
    .attr("y", function(d, i) {
      return -yScale(d.value);
    })
    .attr("height", function(d, i) {
      return yScale(d.value);
    })

exitingElements.select("rect")
  .transition()
  .delay(200)
  .duration(500)
  .attr("fill", "yellow")
  .attr("width", function() {
    return xScale.bandwidth();
  })
  .attr("y", function(d, i) {
    return yScale(d.value);
  })
  .attr("height", function(d, i) {
    return -yScale(d.value);
  })


    // exitingElements.remove();


}
document.getElementById("buttonB").addEventListener("click", remove);



function randomNumber() {
  return Math.random() * 10

}


function removeAndAdd() {
  removeAndAddDatapoints(randomNumber, randomNumber);
  add(randomNumber);
  remove(randomNumber);

  enteringElements = elementsForPage.enter();
  exitingElements = elementsForPage.exit();

  elementsForPage.transition().duration(800).attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });

  let incomingDataGroups = enteringElements.append("g")
    .classed("datapoint", true);
  incomingDataGroups.attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });
  incomingDataGroups.append("rect")
    .attr("y", function(d, i) {
      return 0;
    })
    .attr("height", function(d, i) {
      return 0;
    })
    .attr("width", function() {
      return xScale.bandwidth();
    })
    .attr("fill", "blue")
    .transition()
    .delay(400)
    .duration(500)
    .attr("y", function(d, i) {
      return -yScale(d.value);
    })
    .attr("height", function(d, i) {
      return yScale(d.value);
    })
    .attr("fill", "black");



}
document.getElementById("buttonC").addEventListener("click", removeAndAdd);



function sortData() {
  sortDatapoints();
  //updates the list of keys
  allNames = data.map(function(d) {
    return d.key;
  });

  xScale.domain(allNames);
  //updating the x axis
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d => {
    return data.filter(dd => dd.key == d)[0].name;
  }); // we adjust this because it uses the new data
  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);
  yMax = d3.max(data, function(d) {
    return d.value
  });
  yDomain = [0, yMax + yMax * 0.1];
  yScale.domain(yDomain);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  console.log(elementsForPage);
  elementsForPage.transition().duration(800).attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });

  elementsForPage.select("rect")
    .transition()
    .delay(100)
    .duration(500)
    .attr("fill", "black")
    .attr("width", function() {
      return xScale.bandwidth();
    })
    .attr("y", function(d, i) {
      return -yScale(d.value);
    })
    .attr("height", function(d, i) {
      return yScale(d.value);
    })

}
document.getElementById("buttonD").addEventListener("click", sortData);







function shuffleData() {
  shuffleDatapoints();

  //updates the list of keys
  allNames = data.map(function(d) {
    return d.key;
  });

  xScale.domain(allNames);
  //updating the x axis
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d => {
    return data.filter(dd => dd.key == d)[0].name;
  }); // we adjust this because it uses the new data
  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  //updating the y axis

  yMax = d3.max(data, function(d) {
    return d.value
  });
  yDomain = [0, yMax + yMax * 0.1];
  yScale.domain(yDomain);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  console.log(elementsForPage);
  elementsForPage.transition().duration(800).attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
    .transition()
    .delay(100)
    .duration(500)
    .attr("fill", "black")
    .attr("width", function() {
      return xScale.bandwidth();
    })
    .attr("y", function(d, i) {
      return -yScale(d.value);
    })
    .attr("height", function(d, i) {
      return yScale(d.value);
    })
}

document.getElementById("buttonE").addEventListener("click", shuffleData);





function randomBlue() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return "rgb(" + r + "," + g + "," + b + ")";
}

function randomButton() {

  //updates the list of keys
  allNames = data.map(function(d) {
    return d.key;
  });

  xScale.domain(allNames);
  //updating the x axis
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d => {
    return data.filter(dd => dd.key == d)[0].name;
  }); // we adjust this because it uses the new data
  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  //updating the y axis

  yMax = d3.max(data, function(d) {
    return d.value
  });
  yDomain = [0, yMax + yMax * 0.1];
  yScale.domain(yDomain);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  console.log(elementsForPage);
  elementsForPage.transition().duration(800).attr("transform", function(d, i) {
    return "translate(" + xScale(d.key) + "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
    .transition()
    .delay(100)
    .duration(2000)
    .attr("fill", randomBlue)
    .attr("width", function() {
      return xScale.bandwidth();
    })
    .attr("y", function(d, i) {
      return yScale(d.value);
    })
    .attr("height", function(d, i) {
      return -yScale(d.value);
    })
}

document.getElementById("buttonF").addEventListener("click", randomButton);
