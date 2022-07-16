//task164
/^(\d+)\s\1\s\1$/

//task165
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Змініть цей рядок
let replaceText = "$3 $2 $1"; // Змініть цей рядок
let result1 = str.replace(fixRegex, replaceText);

//task166

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result2 = hello.replace(wsRegex, ""); // Change this line

//task167
let a = 5;
let b = 1;
a++;
// Змініть код лише під цим рядком
let sumAB = a + b;
console.log(sumAB);
console.log(a);
console.log(b);

//task168
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

//task169
let seven = 7;
let three = "3";
console.log(seven + three);
// Змініть код лише під цим рядком

console.log(typeof seven);
console.log(typeof three);


