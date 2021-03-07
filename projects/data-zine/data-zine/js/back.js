let w = 1200;
let h = 800;
let padding = 50;


console.log("js loaded. hello!");

let viz = d3.select("#container")
  .append("svg") //append something to this selection
  .attr("class", "viz") //id: name of this attribute, viz: value of this attribute
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "#070729");

viz.append("path")
  .attr("id", "wavy") //Unique id of the path
  .attr("d", "M 460,0 A 100,100 0 0,0 740,0") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy") //place the ID of the path here
  .attr("startOffset", "3%")
  .text("Unforgettable because……")
  .attr("fill", "white")
  .attr("font-size", "24px")
  .attr("font-family", "Arvo");

viz.append("path")
  .attr("id", "wavy2") //Unique id of the path
  .attr("d", "M 425,0 A 100,100 0 0,0 775,0") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy2") //place the ID of the path here
  .attr("startOffset", "50%")
  .text("I learned new things.")
  .attr("fill", "white")
  .attr("font-size", "20px")
  .attr("font-family", "Arvo");


viz.append("path")
  .attr("id", "wavy3") //Unique id of the path
  .attr("d", "M 375,0 A 100,100 0 0,0 825,0") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy3") //place the ID of the path here
  .attr("startOffset", "65%")
  .text("I was inspired.")
  .attr("fill", "#f23c1f")
  .attr("font-size", "20px")
  .attr("font-family", "Arvo");


viz.append("path")
  .attr("id", "wavy4") //Unique id of the path
  .attr("d", "M 325,0 A 100,100 0 0,0 875,0") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy4") //place the ID of the path here
  .attr("startOffset", "66.5%")
  .text("I was surprised.")
  .attr("fill", "#303986")
  .attr("font-size", "20px")
  .attr("font-family", "Arvo");

viz.append("path")
  .attr("id", "wavy5") //Unique id of the path
  .attr("d", "M 275,0 A 100,100 0 0,0 925,0") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy5") //place the ID of the path here
  .attr("startOffset", "75%")
  .text("I felt sad.")
  .attr("fill", "#ff9ece")
  .attr("font-size", "20px")
  .attr("font-family", "Arvo");


viz.append("path")
  .attr("id", "wavy6") //Unique id of the path
  .attr("d", "M 225,0 A 100,100 0 0,0 975,0") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy6") //place the ID of the path here
  .attr("startOffset", "67%")
  .text("It resonated with me.")
  .attr("fill", " #418645")
  .attr("font-size", "20px")
  .attr("font-family", "Arvo");

viz.append("path")
  .attr("id", "wavy7") //Unique id of the path
  .attr("d", "M 175,0 A 100,100 0 0,0 1025,0") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy7") //place the ID of the path here
  .attr("startOffset", "76%")
  .text("I felt angry.")
  .attr("fill", "#f8c44c")
  .attr("font-size", "20px")
  .attr("font-family", "Arvo");


//where
viz.append("line")
  .attr("x1", w / 2 - 100)
  .attr("x2", w / 2 - 390)
  .attr("y1", 780)
  .attr("y2", 600)
  .attr("stroke", "white")
  .attr("stroke-width", 5)

viz.append("rect")
  .attr("x", w / 2 - 510)
  .attr('y', 520)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#303986");

viz.append("text")
  .text("Book")
  .attr("x", w / 2 - 490)
  .attr("y", 535)
  .attr("fill", "#303986")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 - 510)
  .attr('y', 545)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#f23c1f");

viz.append("text")
  .text("Essay")
  .attr("x", w / 2 - 490)
  .attr("y", 560)
  .attr("fill", "#f23c1f")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");


viz.append("rect")
  .attr('x', w / 2 - 510)
  .attr('y', 570)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "white");

viz.append("text")
  .text("Social Media Post")
  .attr("x", w / 2 - 490)
  .attr("y", 585)
  .attr("fill", "white")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");





// ___________
viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 0)
  .attr("r", 400)
  .attr("fill", "none")
  .attr("stroke", "#f8c44c")
  .attr("stroke-width", 8);


viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 0)
  .attr("r", 350)
  .attr("fill", "none")
  .attr("stroke", "#418645")
  .attr("stroke-width", 8);

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 0)
  .attr("r", 300)
  .attr("fill", "none")
  .attr("stroke", "#ff9ece")
  .attr("stroke-width", 8);

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 0)
  .attr("r", 250)
  .attr("fill", "none")
  .attr("stroke", "#303986")
  .attr("stroke-width", 8);

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 0)
  .attr("r", 200)
  .attr("fill", "none")
  .attr("stroke", "#f23c1f")
  .attr("stroke-width", 8);

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 0)
  .attr("r", 150)
  .attr("fill", "none")
  .attr("stroke", "white")
  .attr("stroke-width", 8);



// ___________

viz.append("line")
  .attr("x1", w / 2 + 250)
  .attr("x2", w / 2 + 360)
  .attr("y1", 490)
  .attr("y2", 430)
  .attr("stroke", "white")
  .attr("stroke-width", 5)


viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 800)
  .attr("r", 240)
  .attr("fill", "#303986");


viz.append("path")
  .attr("id", "wavy9") //Unique id of the path
  .attr("d", "M 350,800 A 100,100 0 0,1 850,800") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy9") //place the ID of the path here
  .attr("startOffset", "63%")
  .text("Where did I read it?")
  .attr("fill", "#303986")
  .attr("font-size", "28px")
  .attr("font-family", "Arvo");

//language
viz.append("line")
  .attr("x1", w / 2 + 100)
  .attr("x2", w / 2 + 420)
  .attr("y1", 700)
  .attr("y2", 600)
  .attr("stroke", "white")
  .attr("stroke-width", 5);

viz.append("rect")
  .attr('x', w / 2 + 430)
  .attr('y', 580)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#ff9ece");

viz.append("text")
  .text("Chinese")
  .attr("x", w / 2 + 450)
  .attr("y", 595)
  .attr("fill", "#ff9ece")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 430)
  .attr('y', 605)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#418645");

viz.append("text")
  .text("English")
  .attr("x", w / 2 + 450)
  .attr("y", 620)
  .attr("fill", "#418645")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");







//
viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 800)
  .attr("r", 144)
  .attr("fill", "#418645");



viz.append("path")
  .attr("id", "wavy8") //Unique id of the path
  .attr("d", "M 455,800 A 100,100 0 0,1 755,800") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy8") //place the ID of the path here
  .attr("startOffset", "48%")
  .text("In what language?")
  .attr("fill", "#418645")
  .attr("font-size", "26px")
  .attr("font-family", "Arvo");


viz.append("path")
  .attr("id", "wavy10") //Unique id of the path
  .attr("d", "M 183,800 A 100,100 0 0,1 1017,800") //SVG path
  .style("fill", "none")
  .style("stroke", "none");

viz.append("text")
  .append("textPath") //append a textPath to the text element
  .attr("xlink:href", "#wavy10") //place the ID of the path here
  .attr("startOffset", "79%")
  .text("What is it about?")
  .attr("fill", "#f23c1f")
  .attr("font-size", "30px")
  .attr("font-family", "Arvo");

viz.append("circle")
  .attr("cx", w / 2)
  .attr("cy", 800)
  .attr("r", 400)
  .attr("fill", "none")
  .attr("stroke", "#f23c1f")
  .attr("stroke-width", 16);


viz.append("line")
  .attr("x1", w / 2 - 350)
  .attr("x2", w / 2 - 100)
  .attr("y1", 360)
  .attr("y2", 400)
  .attr("stroke", "white")
  .attr("stroke-width", 5)

viz.append("line")
  .attr("x1", w / 2 + 100)
  .attr("x2", w / 2 + 250)
  .attr("y1", 400)
  .attr("y2", 360)
  .attr("stroke", "white")
  .attr("stroke-width", 5)

viz.append("rect")
  .attr('x', w / 2 - 180)
  .attr('y', 360)
  .attr('width', 120)
  .attr('height', 120)
  .attr("fill", "#ff9ece");



viz.append("rect")
  .attr('x', w / 2 + 60)
  .attr('y', 360)
  .attr('width', 120)
  .attr('height', 120)
  .attr("fill", "#57f2e3");

//Nationality
viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 230)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#ff9ece");

viz.append("text")
  .text("American")
  .attr("x", w / 2 - 420)
  .attr("y", 245)
  .attr("fill", "#ff9ece")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 255)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#303986");

viz.append("text")
  .text("British")
  .attr("x", w / 2 - 420)
  .attr("y", 270)
  .attr("fill", "#303986")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");


viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 280)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#75197c");

viz.append("text")
  .text("Canadian")
  .attr("x", w / 2 - 420)
  .attr("y", 295)
  .attr("fill", "#75197c")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 305)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#f23c1f");

viz.append("text")
  .text("Chinese")
  .attr("x", w / 2 - 420)
  .attr("y", 320)
  .attr("fill", "#f23c1f")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 330)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#57f2e3");

viz.append("text")
  .text("Czech")
  .attr("x", w / 2 - 420)
  .attr("y", 345)
  .attr("fill", "#57f2e3")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 355)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#f8c44c");

viz.append("text")
  .text("French")
  .attr("x", w / 2 - 420)
  .attr("y", 370)
  .attr("fill", "#f8c44c")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 380)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#418645");

viz.append("text")
  .text("Italian")
  .attr("x", w / 2 - 420)
  .attr("y", 395)
  .attr("fill", "#418645")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 - 440)
  .attr('y', 405)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "white");

viz.append("text")
  .text("Multiple Authors")
  .attr("x", w / 2 - 420)
  .attr("y", 420)
  .attr("fill", "white")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");


// Topic
viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 280)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#f23c1f");

viz.append("text")
  .text("Architecture")
  .attr("x", w / 2 + 390)
  .attr("y", 295)
  .attr("fill", "#f23c1f")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 305)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "white");

viz.append("text")
  .text("Anti-Racism")
  .attr("x", w / 2 + 390)
  .attr("y", 320)
  .attr("fill", "white")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");


viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 330)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#418645");

viz.append("text")
  .text("Art")
  .attr("x", w / 2 + 390)
  .attr("y", 345)
  .attr("fill", "#418645")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 355)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#ff9ece");

viz.append("text")
  .text("Communication")
  .attr("x", w / 2 + 390)
  .attr("y", 370)
  .attr("fill", "#ff9ece")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 380)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#f8c44c");

viz.append("text")
  .text("Feminism")
  .attr("x", w / 2 + 390)
  .attr("y", 395)
  .attr("fill", "#f8c44c")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 405)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#57f2e3");

viz.append("text")
  .text("Literature")
  .attr("x", w / 2 + 390)
  .attr("y", 420)
  .attr("fill", "#57f2e3")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 430)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "purple");

viz.append("text")
  .text("Philosophy")
  .attr("x", w / 2 + 390)
  .attr("y", 445)
  .attr("fill", "purple")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 455)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "grey");

viz.append("text")
  .text("Psychology")
  .attr("x", w / 2 + 390)
  .attr("y", 470)
  .attr("fill", "grey")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 370)
  .attr('y', 480)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#303986");

viz.append("text")
  .text("Technology")
  .attr("x", w / 2 + 390)
  .attr("y", 495)
  .attr("fill", "#303986")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");


//Gender
viz.append("rect")
  .attr('x', w / 2 + 260)
  .attr('y', 375)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#57f2e3");

viz.append("text")
  .text("Male")
  .attr("x", w / 2 + 280)
  .attr("y", 390)
  .attr("fill", "#57f2e3")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

viz.append("rect")
  .attr('x', w / 2 + 260)
  .attr('y', 350)
  .attr('width', 15)
  .attr('height', 15)
  .attr("fill", "#ff9ece");

viz.append("text")
  .text("Female")
  .attr("x", w / 2 + 280)
  .attr("y", 365)
  .attr("fill", "#ff9ece")
  .attr("font-size", "15px")
  .attr("font-family", "Arvo");

// Rectangles Text
viz.append("text")
  .text("Nationality of the author")
  .attr("x", w / 2 - 220)
  .attr("y", 500)
  .attr("fill", "#ff9ece")
  .attr("font-size", "18px")
  .attr("font-family", "Arvo");

viz.append("text")
  .text("Gender of the author")
  .attr("x", w / 2 + 28)
  .attr("y", 500)
  .attr("fill", "#57f2e3")
  .attr("font-size", "18px")
  .attr("font-family", "Arvo");
