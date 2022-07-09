//task124
// Змініть код лише під цим рядком
class Vegetable {
    constructor (name) {
    this.name = name;
  }
  }
  // Змініть код лише над цим рядком
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Повинно показувати 'carrot'

  //task125
  class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

  //task126
  <html>
  <body>
    <!-- Змініть код лише під цим рядком -->
<script type="module" src="index.js"></script>
    <!-- Змініть код лише над цим рядком -->
  </body>
</html>

//task127
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString,lowercaseString};

//task128
import {uppercaseString, lowercaseString } from './string_functions.js';
// Змініть код лише над цим рядком

uppercaseString("hello");
lowercaseString("WORLD!");

//task129
export default function subtract(x, y) {
  return x - y;
}
