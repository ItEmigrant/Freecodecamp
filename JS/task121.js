//task121
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Змініть код лише під цим рядком
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);}
    // Змініть код лише над цим рядком
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  //task122
  const createPerson = (name, age, gender) => {  // Змініть код лише під цим рядком
    return {
      name,
      age,
      gender
    };
    // Змініть код лише над цим рядком
  };
  
  