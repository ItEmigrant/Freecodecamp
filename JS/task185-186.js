//task185
function quickCheck(arr, elem) {
    // Змініть код лише під цим рядком
  if (arr.indexOf(elem) !== -1) {
    return true;
  }
  else return false;
    // Змініть код лише над цим рядком
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  //task186
  function filteredArray(arr, elem) {
    let newArr = [];
    // Змініть код лише під цим рядком
  for (let i =0; i<arr.length; i++) {
  if (arr[i].indexOf(elem) == -1) {
    newArr.push(arr[i]);
  }
  }
    // Змініть код лише над цим рядком
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));