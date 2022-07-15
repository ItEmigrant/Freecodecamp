//task161
let favWord = "favorite";
let favRegex = /favou?rite/; // Змініть цей рядок
let result = favRegex.test(favWord);

//task162
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Змініть цей рядок
let result1 = pwRegex.test(sampleWord);

//task163
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/g; // Змініть цей рядок
let result2 = myRegex.test(myString); // Змініть цей рядок
// Після проходження випробування поекспериментуйте з myString, щоб поглянути як працює групування
