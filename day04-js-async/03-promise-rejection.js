/*
📌 PROMISE CHAIN WITH ERROR HANDLING
*/

const riskyStep = (step) => {
  return new Promise((resolve, reject) => {
    if (step === 2) reject("💥 Error at step 2");
    else resolve(`✅ Step ${step} complete`);
  });
};

riskyStep(1)
  .then(res => {
    console.log(res);
    return riskyStep(2); // Will fail
  })
  .then(res => {
    console.log(res); // Won't run
    return riskyStep(3);
  })
  .catch(err => {
    console.error("Caught:", err);
  })
  .finally(() => {
    console.log("Chain finished (success or fail).");
  });

/*
✅ EXPECTED OUTPUT:
✅ Step 1 complete
Caught: 💥 Error at step 2
Chain finished (success or fail).
*/
