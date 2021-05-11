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
  .text("A web-based data visualization project on the developments")
  .attr("fill", "white")
  .attr("font-size", "35px")
  .attr("font-family", "'Roboto Mono', monospace")
  .attr("x", 0)
  .attr("y", h / 2 + 200)
  .attr("overflow-wrap", "break-word");

viz.append("text")
  .text("and the orbital spaceflights during the Space Age.")
  .attr("fill", "white")
  .attr("font-size", "35px")
  .attr("font-family", "'Roboto Mono', monospace")
  .attr("x", 0)
  .attr("y", h / 2 + 260)
  .attr("overflow-wrap", "break-word");

//Introduction Page
let vizintro = d3.select("#introduction")
  .append("svg")
  .attr("class", "vizintro")
  .attr("width", w)
  .attr("height", 800)
  .style("background-color", "black");


vizintro.append("text")
  .attr("class", "introduction")
  .style("fill", "white")
  .style("font-family", "'Roboto Mono', monospace")
  .attr("x", 20)
  .attr("y", 20)
  .style("font-size", 25)
  .text("The Space Age is a period including activities related to the Space Race between the United States and the Soviet Union during the Cold War, space exploration, space technology, and the cultural developments influenced by these events.")
  .call(wrap, 350);

vizintro.append("text")
  .attr("class", "introduction2")
  .style("fill", "white")
  .style("font-family", "'Roboto Mono', monospace")
  .attr("x", 20)
  .attr("y", 400)
  .style("font-size", 25)
  .text("The Space Age began in the year of 1957, with the launch of the first artificial satellite in the world, Sputnik 1.")
  .call(wrap, 350);


//Chronology
let viz2 = d3.select("#chronology")
  .append("svg")
  .attr("class", "viz2")
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
      return w / 2 + 220;
    } else {
      return w / 2 + 170;
    }
  }

  function gettextpositionText(d, i) {
    if (i % 2 === 0) {
      return w / 2 + 425;
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
    .style("fill", "#625df6");

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
    .attr("cx", w / 2 + 200)
    .attr("cy", getVertical)
    .attr("r", 10)
    .style("fill", "#625df6");

  datagroups
    .on("mouseover", function(d, i) {
      d3.select(this).select("circle")
        .transition()
        .attr("r", 30)
        .style("fill", "orange");
      d3.select(this).select(".datetext")
        .transition()
        .style("fill", "orange");
      d3.select(this).select(".Name")
        .transition()
        .duration(800)
        .style("fill", "orange")
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
        .style("fill", "white")
        .style("cursor", "pointer");
      d3.select(this).select(".datetext")
        .transition()
        .duration(800)
        .style("fill", "white");
      d3.select(this).select(".Name")
        .transition()
        .duration(800)
        .style("fill", "none")
    });


  datagroups.append("text")
    .attr("class", "introduction3")
    .style("fill", "white")
    .style("font-family", "'Roboto Mono', monospace")
    .attr("x", 20)
    .attr("y", 20)
    .style("font-size", 25)
    .text("Here is an interactive timeline of the significant technological events in space before and during the Space Age.")
    .call(wrap, 350);

  datagroups.append("text")
    .attr("class", "introduction4")
    .style("fill", "white")
    .style("font-family", "'Roboto Mono', monospace")
    .attr("x", 20)
    .attr("y", 240)
    .style("font-size", 25)
    .text("Hover on the dots to find out what happened on this day and scroll to see the whole timeline!")
    .call(wrap, 350);
});

//Launchsite Introduction Pie Chart
let vizpie = d3.select("#piechart")
  .append("svg")
  .attr("class", "vizpie")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black");

let myData = [
  [50, 50, 50, "lightblue"]
]
let myData2 = [
  [50, 50, 50, "lightblue"]
]


let xScaleCircle = d3.scaleLinear().domain([0, 100]).range([0, w]);
let yScaleCircle = d3.scaleLinear().domain([0, 100]).range([0, h]);
let rScaleCircle = d3.scaleLinear().domain([0, 29455]).range([0, 250]);


let circleGroup = vizpie.append("g").attr("class", "circleGroup");

function updateGraph() {

  let elements = circleGroup.selectAll(".datapointcircle").data(myData2);

  let enteringElements = elements.enter();
  let exitingElements = elements.exit();

  enteringElements.append("circle")
    .attr("class", "datapointcircle")
    .attr("cx", w / 2 + 400)
    .attr("cy", h / 2 - 200)
    .attr("r", function(d, i) {
      let r = d[2]
      return rScaleCircle(r)
    })
    .attr("fill", function(d, i) {
      return d[3]
    });

  elements
    .transition()
    .duration(1000)
    .attr("cx", w / 2 + 400)
    .attr("cy", h / 2 - 200)
    .attr("r", function(d, i) {
      let r = d[2]
      return rScaleCircle(r)
    })
    .attr("fill", function(d, i) {
      return d[3]
    });

  let elements2 = circleGroup.selectAll(".datapointcircle2").data(myData);

  let enteringElements2 = elements.enter();
  let exitingElements2 = elements.exit();

  enteringElements2.append("circle")
    .attr("class", "datapointcircle2")
    .attr("cx", w / 2)
    .attr("cy", h / 2 - 200)
    .attr("r", function(d, i) {
      let r = d[2]
      return rScaleCircle(r)
    })
    .attr("fill", function(d, i) {
      return d[3]
    });

  elements2
    .transition()
    .duration(1000)
    .attr("cx", w / 2)
    .attr("cy", h / 2 - 200)
    .attr("r", function(d, i) {
      let r = d[2]
      return rScaleCircle(r)
    })
    .attr("fill", function(d, i) {
      return d[3]
    });

}


updateGraph();


enterView({
  selector: '.trigger1',
  enter: function(el) {
    console.log('a special element entered');
    console.log("Color")
    myData[0][3] = "#625df6"
    myData2[0][3] = "orange"
    myData[0][2] = 1000
    myData2[0][2] = 1000
    updateGraph();

  },
  exit: function(el) {
    console.log('a special element exited');
    myData[0][3] = "black"
    myData2[0][3] = "black"
    updateGraph();

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});

enterView({
  selector: '.trigger2',
  enter: function(el) {
    console.log('a special element entered');
    console.log("Color")
    myData[0][2] = 6018
    myData[0][3] = "#625df6"
    updateGraph();

  },
  exit: function(el) {
    console.log('a special element exited');
    myData[0][2] = 1000
    myData[0][3] = "#625df6"
    updateGraph();

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});

enterView({
  selector: '.trigger3',
  enter: function(el) {
    console.log('a special element entered');
    console.log("Color")
    myData2[0][2] = 29455
    updateGraph();

  },
  exit: function(el) {
    console.log('a special element exited');
    myData[0][2] = 6018
    myData2[0][2] = 1000
    myData[0][3] = "#625df6"
    myData2[0][3] = "orange"
    updateGraph();

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});


enterView({
  selector: '.trigger4',
  enter: function(el) {
    console.log('a special element entered');
    console.log("Color")
    myData[0][2] = 400000
    myData[0][3] = "black"
    updateGraph();

  },
  exit: function(el) {
    console.log('a special element exited');
    myData[0][2] = 6018
    myData[0][3] = "#625df6"
    updateGraph();

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});


//Launchsite
let viz3 = d3.select("#launchsite")
  .append("svg")
  .attr("class", "viz3")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black");

d3.json("Data/countries.geojson").then(function(geoData) {
  d3.json("Data/Launch_Site.json").then(function(siteData) {
    let nestFunction = d3.nest().key(function(d) {
      return d.Country;
    });
    let nestedArray = nestFunction.entries(siteData)
    console.log("nestedArray", nestedArray)


    let projection = d3.geoNaturalEarth1()
      .translate([0, 0])
      // .center([103.8, 34.1])
      .fitExtent([
        [0, 0],
        [w, h]
      ], geoData);

    let pathMaker = d3.geoPath(projection);

    viz3.selectAll(".provinces").data(geoData.features).enter()
      .append("path")
      .attr("class", "province")
      .attr("d", pathMaker)
      .attr("fill", function(d, i) {
        //see if d.properties.name is in incomingData;
        let correspondingDatapoint = siteData.find(function(datapoint) {
          // console.log(datapoint);
          if (datapoint.Country == d.properties.name) {
            return true
          } else {
            return false
          }
        })
        if (correspondingDatapoint != undefined) {
          console.log(correspondingDatapoint.Country);
          return "#625df6";
        } else {
          return "black"
        }
      })
      .attr("stroke", "white")
      .attr("stroke-width", 0.5);



  });
});

//Launchsite More Specific
let viz4 = d3.select("#launchsitecountries")
  .append("svg")
  .attr("class", "viz4")
  .attr("width", w)
  .attr("height", 800)
  .style("background-color", "black");

d3.json("Data/Launch_Site.json").then(function(sitecountryData) {

  // A scale that gives a X target position for each group
  var x = d3.scaleOrdinal()
    .domain(["Completed", "Temporary", "Project"])
    .range([400, 700, 900])

  // A color scale
  var color = d3.scaleOrdinal()
    .domain(["Completed", "Temporary", "Project"])
    .range(["orange", "white", "#625df6"])

  function tooltipsText(d, i) {
    return d.Site_name + " in " + d.Location + ", " + d.Country
  }



  // Initialize the circle: all located at the center of the svg area
  let datapoint4 =
    viz4.selectAll(".circle")
    .data(sitecountryData)
    .enter()
    .append("g")
    .attr("class", "circle")


  var node = datapoint4
    .append("circle")
    .attr("class", "circles")
    .attr("r", 25)
    .attr("cx", w / 2)
    .attr("cy", 400)
    .style("fill", function(d) {
      return color(d.Status)
    })
    .style("fill-opacity", 1)
    .call(d3.drag() // call specific function when circle is dragged
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  // document.addEventListener('mousemove', (event) => {
  //   let xPos = `${event.clientX}`;
  //   let yPos = `${event.clientY}`;
  //   console.log("xPos", xPos)

  datapoint4.append("text")
    .attr("class", "tooltips")
    .style('opacity', 0)
    .text(tooltipsText)
    .attr('x', 20)
    .attr('y', 450)
    .style("font-family", "'Roboto Mono', monospace")
    .call(wrap, 350);
  // })

  datapoint4.append("text")
    .attr("class", "site1")
    .style('opacity', 1)
    .style("fill", "orange")
    .text("Completed Launchsites")
    .attr('x', 500)
    .attr('y', 600)
    .style("font-family", "'Roboto Mono', monospace")
    .call(wrap, 100);

  datapoint4.append("text")
    .attr("class", "site2")
    .style('opacity', 1)
    .style("fill", "white")
    .text("Temporary Launchsites")
    .attr('x', 800)
    .attr('y', 600)
    .style("font-family", "'Roboto Mono', monospace")
    .call(wrap, 100);

  datapoint4.append("text")
    .attr("class", "site2")
    .style('opacity', 1)
    .style("fill", "white")
    .text("Launchsites for Projects")
    .attr('x', 1050)
    .attr('y', 600)
    .style("font-family", "'Roboto Mono', monospace")
    .call(wrap, 100);

  datapoint4.on("mouseover", function(d, i) {
      d3.select(this).select(".circles")
        .transition()
        .attr("r", 40)
        .style("fill", "lightblue")
        .style("cursor", "pointer");
      d3.select(this).select(".tooltips")
        .style("opacity", 1)
        .style("fill", function(d) {
          return color(d.Status)
        })
    })
    .on("mouseout", function(d, i) {
      d3.select(this).select(".circles")
        .transition()
        .duration(800)
        .attr("r", 25)
        .style("fill", function(d) {
          return color(d.Status)
        });
      d3.select(this).select(".tooltips")
        .style("opacity", 0)
    });

  // Features of the forces applied to the nodes:
  var simulation = d3.forceSimulation()
    .force("x", d3.forceX().strength(0.5).x(function(d) {
      return x(d.Status)
    }))
    .force("y", d3.forceY().strength(0.1).y(400 / 3))
    .force("center", d3.forceCenter().x(w / 2).y(300)) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(.1).radius(35).iterations(1)) // Force that avoids circle overlapping

  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  simulation
    .nodes(sitecountryData)
    .on("tick", function(d) {
      node
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        })
    });

  // What happens when a circle is dragged?
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(.03).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(.03);
    d.fx = null;
    d.fy = null;
  }

  datapoint4.append("text")
    .attr("class", "introductiontype")
    .style("fill", "white")
    .style("font-family", "'Roboto Mono', monospace")
    .attr("x", 20)
    .attr("y", 200)
    .style("font-size", 25)
    .text("There are three types of orbital launch sites.")
    .call(wrap, 350);

  datapoint4.append("text")
    .attr("class", "introductiontype2")
    .style("fill", "white")
    .style("font-family", "'Roboto Mono', monospace")
    .attr("x", 20)
    .attr("y", 320)
    .style("font-size", 25)
    .text("Hover on the dots to see the details of the launch site below.")
    .call(wrap, 350);

});

//Barchart
d3.json("Data/Orbital_Launches.json").then(function(incomingData) {
  let viz5 = d3.select("#barchart")
    .append("svg")
    .attr("class", "viz5")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "black");

  console.log(incomingData);

  let maxPop = d3.max(incomingData, function(d, i) {
    return d.Launches.length;
  })
  console.log("maxPop", maxPop);

  let minPop = d3.min(incomingData, function(d, i) {
    return d.Launches.length;
  })
  console.log("minPop", minPop);

  let sumPop = d3.sum(incomingData, function(d, i) {
    return d.Launches.length;
  })
  console.log("sumPop", sumPop)

  let datagroups5 = viz5.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
    .attr("class", "datagroup5");

  let yScale = d3.scaleLinear().domain([0, 140]).range([0, h / 2]);
  let colorScale = d3.scaleLinear().domain([0, 140]).range(["white", "#625df6"]);

  let yAxisScale = d3.scaleLinear().domain([140, 0]).range([0, h / 2]);
  let yAxisGroup = viz5.append("g").attr("class", "yaxisgroup");
  let yAxis = d3.axisLeft(yAxisScale);

  function getheight(d, i) {
    return yScale(d.Launches.length);
  }

  function getyPosition(d, i) {
    return -(yScale(d.Launches.length) - 150);
  }

  function getColor(d, i) {
    return colorScale(d.Launches.length);
  }

  function getName(d, i) {
    return d.name;
  }

  function getNumbers(d, i) {
    return d.Launches.length;

  }

  datagroups5
    .append("rect")
    .attr("class", "launchyear")
    .attr("x", 50)
    .attr("y", getyPosition)
    .attr("width", 16)
    .attr("fill", getColor)
    .attr("height", getheight);


  datagroups5
    .append("text")
    .attr("class", "year")
    .text(getName)
    .attr("x", 155)
    .attr("y", -52)
    .attr("transform", "rotate(90)")
    .style("font-family", "'Roboto Mono', monospace")
    .style("font-size", "20px")
    .style("fill", "white");

  datagroups5.attr("transform", getGroupPosition);

  datagroups5
    .append("text")
    .attr("class", "number")
    .text(getNumbers)
    .attr("x", 48)
    .attr("y", -510)
    .style("font-family", "'Roboto Mono', monospace")
    .style("font-size", "15px")
    .style("fill", "none");

  function getGroupPosition(d, i) {
    console.log("i is", i);
    let x = (w / 70) * i;
    let y = 600;
    return "translate(" + x + ", " + y + ")"
  }

  datagroups5.on("mouseover", function(d, i) {
      d3.select(this).select(".launchyear")
        .transition()
        .style("fill", "orange");
      d3.select(this).select(".year")
        .transition()
        .style("fill", "orange");
      d3.select(this).select(".number")
        .transition()
        .style("fill", "orange");
    })
    .on("mouseout", function(d, i) {
      d3.select(this).select(".launchyear")
        .transition()
        .duration(800)
        .style("fill", getColor);
      d3.select(this).select(".year")
        .transition()
        .duration(800)
        .style("fill", "white");
      d3.select(this).select(".number")
        .transition()
        .duration(800)
        .style("fill", "none");
    });

  yAxisGroup.call(yAxis)
  yAxisGroup.attr("fill", "white").style("strok-width", 1)
  yAxisGroup.selectAll("text").attr("font-size", 15).attr("x", 25).attr("y", 100).style("fill", "white").style("font-family", "'Roboto Mono', monospace");

});

let viz6 = d3.select("#orbitingsatellite")
  .append("svg")
  .style("background-color", "black")
  .attr("width", 1300)
  .attr("height", 800);

// initialise scales
let xOrbitScale = d3.scaleTime().range([90, 1210]);

d3.csv("Data/Orbiting_Satellites.csv").then(function(satellitesData) {
  console.log(satellitesData);


  //turn date in to data object
  satellitesData = satellitesData.map(d => {
    d.date = new Date(d.DateofLaunch);
    return d
  })
  let priceExtent = d3.extent(satellitesData, function(d) {
    return d.price;
  })
  // get the earliest and latest date in the dataset
  let extent = d3.extent(satellitesData, function(d) {
    return d.date;
  })
  console.log("extent", extent);
  // amend domain to scale
  xOrbitScale.domain(extent);
  // group to hold axis
  let xAxisGroup = viz6.append("g").attr("class", "xaxisgroup");
  // ask d3 to get an axis ready
  let xAxis = d3.axisBottom(xOrbitScale);
  // build the axis into our group
  xAxisGroup.call(xAxis);
  xAxisGroup.attr("stroke", "white");

  // put a circle for each data point onto the page
  viz6.selectAll(".datapointorbiting").data(satellitesData).enter()
    .append("circle")
    .attr("class", "datapointorbiting")
    .attr("cx", function(d) {
      return xOrbitScale(d.date);
    })
    .attr("cy", function(d) {
      return 300;
    })
    .attr("r", function(d) {
      return 3
    })
    .style("fill", "white");;

  satellitesData = satellitesData.map(function(datapointorbiting) {
    datapointorbiting.x = xOrbitScale(datapointorbiting.date);
    datapointorbiting.y = 400;
    return datapointorbiting
  })

  let simulation2 = d3.forceSimulation(satellitesData)
    .force("forceX", function(d, i) {
      return d3.forceX(xOrbitScale(d.date))
    })
    .force("forceY", d3.forceY(400))
    // .force("collide", function(d,i){
    //   return d3.forceCollide(rScale(d.price))
    // })
    .force("collide", d3.forceCollide().radius(5))

    .on("tick", simulationRan);

  function simulationRan() {
    console.log(satellitesData[0].x);
    viz6.selectAll(".datapointorbiting")
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      })
  }

  // problem: points overlap!

  })



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
