//task197
function repeatStringNumTimes(str, num) {
    let accSum = "";
    
    if (num > 0) {   
      for (let i = 0; i<num; i++) {
     accSum+=str;
     }
    return accSum
    }
    else {
      return ''
      }
    }
    repeatStringNumTimes("abc", 1);
    