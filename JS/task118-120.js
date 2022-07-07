//task118
let a = 8, b = 6;
// Змініть код лише під цим рядком
[a, b] = [b, a];

//task119
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Змініть код лише під цим рядком
  const [a, b, ...arr] = list; // Змініть цей рядок
  // Змініть код лише над цим рядком
  return arr;
}
const arr = removeFirstTwo(source);

//task120
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Змініть код лише під цим рядком
  
  // Змініть код лише над цим рядком
  const half = ({ max, min }) => (max + min) / 2.0;

  