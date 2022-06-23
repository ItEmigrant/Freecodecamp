//task77
function chainToSwitch(val) {
    let answer = "";
    // Змініть код лише під цим рядком
  switch (val) {
    case "bob": 
    answer = "Marley";
    break;
  
    case 42: 
    answer = "The Answer";
    break;
    
    case 1: 
    answer = "There is no #1";
    break;
  
    case 99: 
    answer = "Missed me by this much!";
    break; 
    
    case 7: 
    answer = "Ate Nine";
     break;
  }
    // Змініть код лише над цим рядком
    return answer;
  }
  
  chainToSwitch(7);

//task78
function isLess(a, b) {
    // Змініть код лише під цим рядком
     
      return a < b;
    
    // Змініть код лише над цим рядком
  }
  
  console.log (isLess(10, 15));

  //task79
  if (a<b) {
return undefined;
  }

  //task80
  var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;

}


cc(2); cc('K'); cc(10); cc('K'); cc('A');
