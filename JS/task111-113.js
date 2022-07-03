//task111
const s = [5, 7, 2];
function editInPlace() {
  // Змініть код лише під цим рядком
s[0] = 2;
s[1] =5;
s[2] =7;
  // Використання s = [2, 5, 7] може бути недійсним

  // Змініть код лише над цим рядком
}
editInPlace();

//task112
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  //task113
  const magic = () => new Date();

  //task114
  const myConcat = (arr1, arr2) => arr1.concat(arr2);


console.log(myConcat([1, 2], [3, 4, 5]));