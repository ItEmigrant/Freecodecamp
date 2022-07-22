function forecast(arr) {
    // Змініть код лише під цим рядком
  
    let x = arr.slice(2,4);
     return x
  }
  
  // Змініть код лише над цим рядком
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  //task183
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Змініть код лише під цим рядком
  newArr.push([...arr]);
      // Змініть код лише над цим рядком
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));