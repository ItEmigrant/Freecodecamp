//task51
function timesFive(num) {
    return num * 5;
}

//task52
// Вкажіть змінну myGlobal під цим рядком
let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;

}

// Змініть код лише над цим рядком

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//task53
function myLocalScope() {
    // Змініть код лише під цим рядком
    let myVar = 10
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Запустіть та перевірте консоль
// myVar не визначений за межеми myLocalScope
console.log('outside myLocalScope', myVar);

  //task54
// Налаштування
const outerWear = "T-Shirt";

function myOutfit() {
  // Змініть код лише під цим рядком
let outerWear = "sweater";
  // Змініть код лише над цим рядком
  return outerWear;
}

myOutfit();

//task55
// Налаштування
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Змініть код лише під цим рядком
function addFive() {
  sum = sum + 5;
}

// Змініть код лише над цим рядком

addThree();
addFive();


