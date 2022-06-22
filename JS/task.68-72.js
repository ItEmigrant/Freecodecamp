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
