/*
📌 PROMISE CHAINING – SEQUENTIAL STEPS
*/

function doubleAfter2Sec(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

doubleAfter2Sec(5)
  .then(result1 => {
    console.log("First:", result1); // 10
    return doubleAfter2Sec(result1);
  })
  .then(result2 => {
    console.log("Second:", result2); // 20
    return doubleAfter2Sec(result2);
  })
  .then(result3 => {
    console.log("Third:", result3); // 40
  })
  .catch(error => {
    console.error("Error in chain:", error);
  })
  .finally(() => {
    console.log("Chaining complete.");
  });

/*
✅ EXPECTED OUTPUT:
First: 10
Second: 20
Third: 40
Chaining complete.
*/
