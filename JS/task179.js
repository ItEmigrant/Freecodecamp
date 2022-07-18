//task179
let yourArray = [1, 3, "bogdan", true, "2"]; // Змініть цей рядок

//task180
let myArray = ["a", "b", "c", "d"];
// Змініть код лише під цим рядком
myArray[1] = 2; 
// Змініть код лише над цим рядком
console.log(myArray);

//task181
function mixedNumbers(arr) {
    // Змініть код лише під цим рядком
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
    // Змініть код лише над цим рядком
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  //task182
  function popShift(arr) {


    let popped = arr.pop();; // Змініть цей рядок
    let shifted = arr.shift(); // Змініть цей рядок
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));