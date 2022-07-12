//task143
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Змініть цей рядок
let result = quoteSample.match(alphabetRegex); // Змініть цей рядок

//task144
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; // Змініть цей рядок
let result3 = quoteSample.match(myRegex); // Змініть цей рядок

//task145
let quoteSample2 = "3 blind mice.";
let myRegex2 = /[^aeiou^0-9]/gi // Змініть цей рядок
let result2 = quoteSample.match(myRegex); // Змініть цей рядок

//task146
let difficultSpelling = "Mississippi";
let myRegex1 = /s+/ig; // Змініть цей рядок
let result1 = difficultSpelling.match(myRegex);
console.log (result)

