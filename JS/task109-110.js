//task109
// Змініть код лише під цим рядком
function countdown(n){
    if (n < 1) {
  return [];  
  }
  else {
    const newArray = countdown(n - 1);
    newArray.unshift(n); 
  return newArray;
    console.log (newArray);
    }
  }
  
//task110
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }
