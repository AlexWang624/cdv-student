let w = 1300;
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
  .attr("font-size", "180px")
  .attr("font-family", "Abril Fatface")
  .attr("x", 0)
  .attr("y", h / 2 - 100)
  .style("stroke-width", "20px")
  .style("stroke-color", "#625df6"); //#625df6


viz.append("text")
  .text("A Glimpse Into the Space Age")
  .attr("fill", "#625df6")
  .attr("font-size", "80px")
  .attr("font-family", "Abril Fatface")
  .attr("x", 0)
  .attr("y", h / 2 + 70);

viz.append("text")
  .text("A web-based data visualization project on the orbital")
  .attr("fill", "white")
  .attr("font-size", "40px")
  .attr("font-family", "'Roboto Mono', monospace")
  .attr("x", 0)
  .attr("y", h / 2 + 200)
  .attr("overflow-wrap", "break-word");

viz.append("text")
  .text("launches in space from 1957.")
  .attr("fill", "white")
  .attr("font-size", "40px")
  .attr("font-family", "'Roboto Mono', monospace")
  .attr("x", 0)
  .attr("y", h / 2 + 260)
  .attr("overflow-wrap", "break-word");

//Chronology
let viz2 = d3.select("#chronology")
  .append("svg")
  .attr("class", "viz4")
  .attr("width", w)
  .attr("height", 10400)
  .style("background-color", "black");

d3.json("Data/Chronology.json").then(function(timelineData) {
  console.log(timelineData);
  let datagroups = viz2.selectAll(".timelinedata").data(timelineData).enter()
    .append("g")
    .attr("class", "timelinedata");

  let yTimeScale = d3.scaleLinear().domain([0, 27739]).range([60, 10040]);
  let missionColorScale = d3.scaleLinear().domain([0, 27739]).range(["white", "#625df6"]);
  let yYearScale = d3.scaleLinear().domain([1944, 2020]).range([20, 10000]);


  function getVertical(d, i) {
    console.log(d);
    return yTimeScale(d.Day);
  }


  function getYearVertical(d, i) {
    console.log(d);
    return yTimeScale(d.Year);
  }

  function getyTimePosition(d, i) {
    return 30 * i + 50;
  }

  function getMissionName(d, i) {
    return d.Name + ", " + d.Mission + ", " + d.Country
  }

  function getDetailName(d, i) {
    return "Mission Details: " + d.Mission
  }

  function getDate(d, i) {
    return d.Date
  }

  function getMissionColor(d, i) {
    return missionColorScale(d.Day);
  }

  function getpositionText(d, i) {
    if (i % 2 === 0) {
      return w / 2 + 230;
    } else {
      return w / 2 + 170;
    }
  }

  function gettextpositionText(d, i) {
    if (i % 2 === 0) {
      return w / 2 + 410  ;
    } else {
      return w / 2;
    }
  }

  function getpositionAnchor(d, i) {
    if (i % 2 === 0) {
      return "start";
    } else {
      return "end";
    }
  }


  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x = text.attr("x"),
        y = text.attr("y"),
        dy = 0, //parseFloat(text.attr("dy")),
        tspan = text.text(null)
        .append("tspan")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }

  datagroups.append("rect")
    .style("fill", "white")
    .attr("x", w / 2 + 200)
    .attr("y", 60)
    .attr("height", 9980)
    .attr("width", 1)
    .style("opacity", 1);

  datagroups.append("text")
    .attr("class", "datetext")
    .text(getDate)
    .attr("x", getpositionText)
    .attr("y", getVertical)
    .style("font-family", "'Roboto Mono', monospace")
    .style("text-anchor", getpositionAnchor)
    .style("font-size", "16px")
    .style("fill", "white");

  datagroups.append("text")
    .attr("class", "Name")
    .text(getMissionName)
    .attr("x", gettextpositionText)
    .attr("y", getVertical)
    .style("text-anchor", getpositionAnchor)
    .style("font-family", "'Roboto Mono', monospace")
    .style("font-size", "18px")
    .style("fill", "none")
    .call(wrap, 200);

  // datagroups.append("text")
  //   .attr("class", "Detail")
  //   .text(getDetailName)
  //   .attr("x", gettextpositionText)
  //   .attr("y", getDetailVertical)
  //   .style("text-anchor", getpositionAnchor)
  //   .style("font-family", "monospace")
  //   .style("font-size", "15px")
  //   .style("fill", "none")
  //   .call(wrap, 300);


  datagroups.append("circle")
    .attr("cx", w / 2 +200)
    .attr("cy", getVertical)
    .attr("r", 10)
    .style("fill", "white");

  datagroups
    .on("mouseover", function(d, i) {
      d3.select(this).select("circle")
        .transition()
        .attr("r", 30)
        .style("fill", "#625df6");
      d3.select(this).select(".datetext")
        .transition()
        .style("fill", "#625df6");
      d3.select(this).select(".Name")
        .transition()
        .duration(800)
        .style("fill", "white")
      // d3.select(this).select(".Detail")
      //   .transition()
      //   .duration(800)
      //   .style("fill", "white")
    })
    .on("mouseout", function(d, i) {
      d3.select(this).select("circle")
        .transition()
        .duration(800)
        .attr("r", 10)
        .style("fill", "white");
      d3.select(this).select(".datetext")
        .transition()
        .duration(800)
        .style("fill", "white");
      d3.select(this).select(".Name")
        .transition()
        .duration(800)
        .style("fill", "none")
      // d3.select(this).select(".Detail")
      //   .transition()
      //   .duration(800)
      //   .style("fill", "none")
    });

  // function nameMission(d, i) {
  //   return "Name of the Mission: " + d.Name
  //
  // function mission(d, i) {
  //   return "Mission Details: " + d.Mission
  // }
  //
  // datagroups.append("text")
  //   .text(nameMission)
  //   .style("font-family", "monospace")
  //   .attr("x", 20)
  //   .attr("y", getVertical)
  //   .style("fill", "black");
  //
  // datagroups.append("text")
  //   .text(mission)
  //   .style("font-family", "monospace")
  //   .attr("x", 20)
  //   .attr("y", getVertical)
  //   .style("fill", "black");


});





//Launchsite
let viz3 = d3.select("#launchsite")
  .append("svg")
  .attr("class", "viz4")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black");





//Barchart
let viz4 = d3.select("#barchart")
  .append("svg")
  .attr("class", "viz4")
  .attr("width", w)
  .attr("height", h)
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


  let datagroups2 = viz4.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
    .attr("class", "datagroup");

  let yScale = d3.scaleLinear().domain([0, 140]).range([100, h / 2]);
  let colorScale = d3.scaleLinear().domain([0, 140]).range(["white", "#625df6"]);

  function getheight(d, i) {
    console.log(d);
    return yScale(d.Launches.length);
  }

  function getyPosition(d, i) {
    return -(yScale(d.Launches.length) - 150);
  }

  function getColor(d, i) {
    return colorScale(d.Launches.length);
  }

  let launchyears = datagroups2
    .append("rect")
    .attr("class", "launchyear")
    .attr("x", 0)
    .attr("y", getyPosition)
    .attr("width", 16)
    .attr("fill", getColor)
    .attr("height", getheight)
  // .on("mouseover", handleMouseOver);

  function getName(d, i) {
    return d.name
  }

  function getNumbers(d, i) {
    return d.Launches.length
  }

  let lables = datagroups2
    .append("text")
    .attr("class", "name")
    .text(getName)
    .attr("x", 160)
    .attr("y", -5)
    .attr("transform", "rotate(90)")
    .style("font-family", "'Roboto Mono', monospace")
    .style("font-size", "20px")
    .style("fill", "white");

  let numbers = datagroups2
    .append("text")
    .attr("class", "number")
    .text(getNumbers)
    .attr("x", 0)
    .attr("y", -500)
    .style("font-family", "'Roboto Mono', monospace")
    .style("font-size", "10px")
    .style("fill", "white");

  function getGroupPosition(d, i) {
    console.log("i is", i);
    let x = (w / 65) * i;
    let y = 600;
    return "translate(" + x + ", " + y + ")"
  }

  datagroups2.attr("transform", getGroupPosition);

  datagroups2
    .on("mouseover", function(d, i) {
      d3.select(this).select("rect")
        .transition()
        .attr("width", 18)
        .attr("fill", "orange")
    });


  // var y_axis = d3.axisRight()
  //   .scale(yScale)
  //   .ticks(14)
  //   .render()
  //   .attr('transform', 'translate(0, 0)');
  // datagroups2.call(y_axis);
}

d3.json("Data/Orbital_Launches.json").then(gotData);



let viz5 = d3.select("#satellite")
  .append("svg")
  .attr("class", "viz5")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black");

const circlePath = (angle, radius) => { // Calculate the angle at which the element will be placed.
  let x = (radius * Math.cos(angle)) + 1000; // Calculate the x position of the element.
  let y = (radius * Math.sin(angle)) + 200; // Calculate the y position of the element.
  return "translate (" + x + ", " + y + " )"
}

// d3.json("Data/Satellites.csv").then(function(satelliteData) {
//   console.log(satelliteData);
//   let datagroups5 = viz5.selectAll(".satelliteData").data(satelliteData).enter()
//     .append("g")
//     .attr("class", "satelliteData");
//   });
