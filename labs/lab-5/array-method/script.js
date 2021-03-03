let container = document.getElementById("container");

// let data = ["alan", "sarah", "tina"];
//
// // for (let i = 0; i < data.length; i++){
// //   let name = data [i];
// //
// //   addPtag(name);
// // }
//
// function dothiswitheachelement(element) {
//   console.log(element);
//   addPtag(element);
// }
// data.forEach(addPtag)

data = [{
    name: "alan",
    nice: "yes"
  },
  {
    name: "sarah",
    nice: "yes"
  },
  {
    name: "tina",
    nice: "yes"
  }
];

// let updated = [];
// for (let i = 0; i < data.length; i++){
//   let person = data[i];
//   person.nice = "no";
//   updated.push(person);
// }
//
// console.log(updated);


//map
// function mappingFunction(element) {
//   element.nice = "sometimes";
//   return element
// }
// let newarray = data.map(mappingFunction)
// console.log(data)


//filter
// let nicepeople = []
// for (let i = 0; i < data.length; i++) {
//   let person = data[i];
//   if (person.nice == "yes") {
//     nicepeople.push(person)
//   }
// }
// console.log(nicepeople)

function filterFunction(element) {
  if (element.nice == "yes") {
    return true
  } else {
    return false
  }
}
let nicepeople = data.filter(filterFunction)
console.log(nicepeople)

nicepeople = data.filter(d => d.nice == "yes")
console.log(nicepeople)
