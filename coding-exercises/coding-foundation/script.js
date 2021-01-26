function myFunction() {
  let value = document.getElementById("inputnumber").value;//get number from the input box
  let x = document.getElementById("squares").childElementCount;

  if (value > 0) {
    if (value > x){ //generator squares according to the input number
    for (let i = 0; i < value - x; i++){
    document.getElementById("squares").appendChild(document.createElement("div"));
    // Question: how to remove the error message "Error. Please enter a positive number."?
    // appenChild: https://www.w3schools.com/jsref/met_node_appendchild.asp
  }
    }
    else if (value < x){ // delete redundant squares
    for (let i = 0; i < x - value; i++){
    document.getElementById("squares").removeChild(document.getElementById("squares").firstChild);
    // document.getElementById("squares").removeChild(document.getElementById("squares").firstChild);
    // firstChild: https://www.w3schools.com/jsref/prop_node_firstchild.asp
    // previousSibling: https://www.w3schools.com/jsref/prop_node_previoussibling.asp
  }
}
}

  else if (value < 0) { // error message when the input number is negative
    document.getElementById("squares").innerHTML = "Error. Please enter a positive number.";
    document.getElementById("squares").removeChild(document.getElementById("squares"));
}
}
