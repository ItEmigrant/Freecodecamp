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

//task155
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;; // Змініть цей рядок
let result3 = userCheck.test(username);

//task156
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Змініть цей рядок
let result4 = sample.match(countWhiteSpace);

//task157
let sample4 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Змініть цей рядок
let result5 = sample.match(countNonWhiteSpace);

//task158
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Змініть цей рядок
let result6 = ohRegex.test(ohStr);


