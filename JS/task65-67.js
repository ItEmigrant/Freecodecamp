//task 65
function testLessThan(val) {
    if (val < 25) {  // Змініть цей рядок
        return "Under 25";
    }

    if (val < 55) {  // Змініть цей рядок
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

//task66
function testLessOrEqual(val) {
    if (val <= 12) {  // Змініть цей рядок
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Змініть цей рядок
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

//task67
function testLogicalAnd(val) {
    // Змініть код лише під цим рядком
  
    if (val <=50 && val >=25) {
        return "Yes";
      }
    
    // Змініть код лише над цим рядком
    return "No";
  }
  
  testLogicalAnd(10);