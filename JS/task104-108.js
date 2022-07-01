//task104
function randomRange(myMin, myMax) {
    // Змініть код лише під цим рядком

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Змініть код лише над цим рядком
}

//task105
function convertToInteger(str) {

    return parseInt(str);
}

convertToInteger("56");

    //task106
    function convertToInteger(str) {
        return parseInt(str, 2);
        }
        
        convertToInteger("10011");

//task107
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
    }
    
    checkEqual(1, 2);

    //task108
    function checkSign(num) {
        return (num>0) ? "positive"
        : (num<0) ? "negative"
        : "zero";
        }
        
        checkSign(10);