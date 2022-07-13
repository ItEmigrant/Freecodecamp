//task150
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Змініть цей рядок
let result = calRegex.test(rickyAndCal);

//task153
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Змініть цей рядок
let result1  = lastRegex.test(caboose);

//task154
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Змініть цей рядок
let result2 = quoteSample.match(alphabetRegexV2).length;
