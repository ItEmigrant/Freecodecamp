//task187

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Змініть код лише під цим рядком
userActivity.data.online = 45
// Змініть код лише над цим рядком

console.log(userActivity);

//task188
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Змініть код лише під цим рядком
return foods[scannedItem];
  // Змініть код лише над цим рядком
}

console.log(checkInventory("bananas"));

// task 189
let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Змініть код лише під цим рядком
delete foods.oranges,
delete foods.plums,
delete foods.strawberries
// Змініть код лише над цим рядком

console.log(foods);

//task190
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  
  // Змініть код лише під цим рядком
if (userObj.hasOwnProperty('Alan')&&
userObj.hasOwnProperty('Jeff')&&
userObj.hasOwnProperty('Sarah') &&
userObj.hasOwnProperty('Ryan'))
 {
  return true;
}
else {
  return false; 
}
   
  // Змініть код лише над цим рядком
}

console.log(isEveryoneHere(users));

