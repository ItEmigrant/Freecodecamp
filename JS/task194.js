// task 194
function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius*9)/5 + 32
    return fahrenheit;
  }
  
  convertCtoF(30);

  //task195
  function reverseString(str) {
    let spliteString = str.split("");
    let reverseString = spliteString.reverse();
    let joinString = reverseString.join("");
 
   return joinString;
 }
 
 reverseString("hello");

 //task196
 function factorialize(num) {
    let fakt = 1;
    for (let i=2; i<=num; i++ ) {
      
      fakt = fakt*i;
    
    }
    return fakt;
  }
  
  factorialize(5); 

  


