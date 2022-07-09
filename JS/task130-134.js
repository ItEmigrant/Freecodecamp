//task130
import subtract from "./math_functions.js"
// Змініть код лише над цим рядком

subtract(7, 4);

//task131
const makeServerRequest = new Promise((resolve, reject) => {

});

//task132
const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer відображає відповідь сервера
    let responseFromServer;

    if (responseFromServer) {
        // Змініть цей рядок
        resolve("We got the data");
    } else {
        // Змініть цей рядок
        reject("Data not received");
    }
});

//task133
const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer налаштований правильно, щоб відобразити позитивну відповідь сервера
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

//task134
makeServerRequest.catch(error => {
    console.log(error);
  }) 