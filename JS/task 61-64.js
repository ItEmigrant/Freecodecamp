//task61
// Налаштування
function compareEquality(a, b) {
    if (a === b) { // Змініть цей рядок
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  //task62
  // Налаштування
function testNotEqual(val) {
    if (val !=99) { // Змініть цей рядок
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  //task63
  // Налаштування
function testStrictNotEqual(val) {
    if (val !== 17) { // Змініть цей рядок
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  //task64
  function testGreaterOrEqual(val) {
    if (val >=20) {  // Змініть цей рядок
      return "20 or Over";
    }
  
    if (val>=10) {  // Змініть цей рядок
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);