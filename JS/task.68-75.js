//task68
function testLogicalOr(val) {
    // Змініть код лише під цим рядком

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Змініть код лише над цим рядком
    return "Inside";
}

testLogicalOr(15);

  //task69
  function testLogicalOr(val) {
    // Змініть код лише під цим рядком
  
    if (val < 10|| val > 20 ) {
      return "Outside";
    }
  
    // Змініть код лише над цим рядком
    return "Inside";
  }
  
  testLogicalOr(15);

//task70
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  
  else {
    return "Between 5 and 10";}
  }
  testElseIf(7);

//task71
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

//task72
function testSize(num) {
    // Змініть код лише під цим рядком
  if (num < 5 ) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
  else if (num<20) {
    return "Large";
  }
  else if(num>=20 ) {
    return "Huge";
  }
  
  }
  
  testSize(7);

  //task73
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Змініть код лише під цим рядком
if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }

  return "Change Me";
  // Змініть код лише над цим рядком
}

golfScore(5, 4);

//task74
function caseInSwitch(val) {
  let answer = "";
  // Змініть код лише під цим рядком
switch (val) {
  case 1: answer = "alpha"; break;
  case 2: answer = "beta"; break;
  case 3: answer = "gamma"; break;
  case 4: answer = "delta"; break;
}


  // Змініть код лише над цим рядком
  return answer;
}

caseInSwitch(1);

//task75
function switchOfStuff(val) {
  let answer = "";
  // Змініть код лише під цим рядком
switch (val) {
  case "a": answer = "apple"; break; 
  case "b": answer = "bird"; break; 
  case "c": answer = "cat"; break; 
  default: answer =  "stuff";
    break;
  }


  // Змініть код лише над цим рядком
  return answer;
}

switchOfStuff(1);

