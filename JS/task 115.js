//task115
// Змініть код лише під цим рядком
const increment = (number, value =1) => number + value;
// Змініть код лише над цим рядком

//task116
const sum = (... args) => {
    return args.reduce((a, b) => a + b, 0);
 }

 //task117
 const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Змініть цей рядок

console.log(arr2);