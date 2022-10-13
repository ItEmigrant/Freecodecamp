//task191
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Змініть код лише під цим рядком
    let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
        }
    
  }
  return result;
    // Змініть код лише над цим рядком
  }
  
  console.log(countOnline(users));

  //task192
  let users1 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Змініть код лише під цим рядком
  
    return Object.keys(obj)
  
    // Змініть код лише над цим рядком
  }
  
  console.log(getArrayOfUsers(users));

  //task 193
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Змініть код лише під цим рядком
      userObj.data.friends.push(friend)
      return userObj.data.friends
    // Змініть код лише над цим рядком
  }
  
  console.log(addFriend(user, 'Pete'));
  
  