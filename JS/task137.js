//task137
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Змініть цей рядок
let result = petRegex.test(petString);

//task138
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Змініть цей рядок
let result1 = fccRegex.test(myString);

//task139
let extractStr = "Extract the word 'coding' from this string.".match(/coding/);
let codingRegex = /coding/; // Змініть цей рядок
let result2 = extractStr; // Змініть цей рядок

//task140
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Змініть цей рядок
let result3 = twinkleStar.match(starRegex); // Змініть цей рядок