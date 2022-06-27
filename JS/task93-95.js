//task93
// Налаштування
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Змініть код лише під цим рядком
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

  //task94
  // Налаштування
const myArray1 = [];
let i = 5;

while (i>=0) {
  myArray.push(i);
  i--;
}
// Змініть код лише під цим рядком


//task95
// Налаштування
const myArray = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

// Змініть код лише під цим рядком
