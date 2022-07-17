//task176
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Змініть код лише під цим рядком
    for (let i = 0; i <len; i++) {
    // Змініть код лише над цим рядком
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

  //task177
  function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = []; 
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(1, 1);
  console.log(matrix);

  //task178
  function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }