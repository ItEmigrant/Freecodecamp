//task56
// Налаштування
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
  
}

processed = processArg(7);

//task57
function nextInLine(arr, item) {
    // Змініть код лише під цим рядком
    arr.push(item);
    return arr.shift(item);
    // Змініть код лише над цим рядком
  }
  
  // Налаштування
  const testArr = [1, 2, 3, 4, 5];
  
  // Відобразити код
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

//task58
function  dragon();
return true;
return false;



