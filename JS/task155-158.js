//task155
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Змініть цей рядок
let result = movieName.match(numRegex).length;

//task156
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Змініть цей рядок
let result1 = quoteSample.match(nonAlphabetRegex).length;

//task157
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Змініть цей рядок
let result2 = movieName.match(noNumRegex).length;

//task158
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Змініть цей рядок
let result7= ohRegex.test(ohStr);
