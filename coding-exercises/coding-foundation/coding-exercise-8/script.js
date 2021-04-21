let w = 2000;
let h = 1000;
let padding = 90;
let i = 0;

// SVG
let viz = d3.select("#container").append("svg")
  .style("width", w)
  .style("height", h)
  .style("background-color", "white");


// IMPORT DATA
d3.json("mainland.geojson").then(function(geoData) {
  d3.csv("Province.csv").then(function(incomingData) {

    incomingData = incomingData.map(function(d, i) {
      d.Number = Number(d.Number);
      return d
    });

    console.log(incomingData);

    let minPop = d3.min(incomingData, function(d, i) {
      return d.Number
    })
    console.log("minPop", minPop);

    let maxPop = d3.max(incomingData, function(d, i) {
      return d.Number
    })
    console.log("maxPop", maxPop);

    let colorScale = d3.scaleLinear().domain([minPop, maxPop]).range(["white", "blue"]);
    console.log("colorScale", colorScale(20));


    // PRINT DATA
    console.log(geoData);

    // SCALES (to translate data values to pixel values)
    // let xDomain = d3.extent(incomingData, function(d){ return Number(d.year); })
    // let xScale = d3.scaleLinear().domain(xDomain).range([padding,w-padding]);
    // let yDomain = d3.extent(incomingData, function(d){ return Number(d.birthsPerThousand); })
    // let yScale = d3.scaleLinear().domainå(yDomain).range([h-padding,padding]);


    // PATH (line) MAKER - gets points, returns one of those complicated looking path strings
    // let lineMaker = d3.line()
    //     .x(function(d){
    //       return xScale(Number(d.year));
    //     })
    //     .y(function(d){
    //       return yScale(Number(d.birthsPerThousand));
    //     })
    // ;

    let projection1 = d3.geoEquirectangular()
      .translate([w / 2, h / 2])
      // .center([103.8, 34.1])
      .fitExtent([
        [padding, padding],
        [w - padding, h - padding]
      ], geoData);

    let projection2 = d3.geoStereographic()
      .translate([w / 2, h / 2])
      // .center([103.8, 34.1])
      .fitExtent([
        [padding, padding],
        [w - padding, h - padding]
      ], geoData);

    let projection3 = d3.geoAzimuthalEqualArea()
      .translate([w / 2, h / 2])
      // .center([103.8, 34.1])
      .fitExtent([
        [padding, padding],
        [w - padding, h - padding]
      ], geoData);

  let projection4 = d3.geoConicConformal()
  .translate([w / 2, h / 2])
  // .center([103.8, 34.1])
  .fitExtent([
    [padding, padding],
    [w - padding, h - padding]
  ], geoData);

    let projections = [projection1, projection2, projection3, projection4];
    let projectionname = [geoEquirectangular, geoStereographic, geoAzimuthalEqualArea, geoConicConformal]
    let pathMaker = d3.geoPath(projections[i]);



    // CREATE SHAPES ON THE PAGE!
    viz.selectAll(".provinces").data(geoData.features).enter()
      .append("path")
      .attr("class", "province")
      .attr("d", pathMaker)
      .attr("fill", function(d, i) {
        console.log(d.properties.name);

        //see if d.properties.name is in incomingData;
        let correspondingDatapoint = incomingData.find(function(datapoint) {
          // console.log(datapoint);
          if (datapoint.Province == d.properties.name) {
            return true
          } else {
            return false
          }
        })
        if (correspondingDatapoint != undefined) {
          console.log(correspondingDatapoint.Number);
          return colorScale(correspondingDatapoint.Number);
        } else {
          return "black"
        }
      })
      .attr("stroke", "black");

    // let lat = 31.22773;
    // let lon = 121.52946;
    // let pixelvalue = projection([lon, lat]);
    // console.log(pixelvalue);
    //
    // viz.append("circle")
    // .attr("cx", pixelvalue[0])
    // .attr("cy", pixelvalue[1])
    // .attr("r", 5)
    // .attr("fill", "red")
    // ;

    document.getElementById("button").addEventListener("click", function() {
      i = (i + 1) % projections.length;
      let pathMaker = d3.geoPath(projections[i]);
      viz.selectAll(".province")
        .data(geoData.features)
        .attr("d", pathMaker)
        document.querySelector("#nameprojection").innerHTML = name[i];
    });
  });

});
