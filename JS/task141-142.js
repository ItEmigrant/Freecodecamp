//task141
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Змініть цей рядок
let result = unRegex.test(exampleStr);

//task142
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Змініть цей рядок
let result1 = quoteSample.match(vowelRegex); // Змініть цей рядок