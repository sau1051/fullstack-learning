/*
📌 ASYNC / AWAIT – MODERN PROMISE SYNTAX

async/await allows you to write asynchronous code that looks and behaves like synchronous code.

It is built on top of Promises.

Rules:
- Use `async` before a function to make it return a Promise
- Use `await` inside an async function to wait for a Promise to resolve
*/

// --------------------------------------------------

/*
🔹 Basic Example – simulate async work using Promise + await
*/

const waitAndReturn = (value, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });
};

async function runAsyncFlow() {
  console.log("Start");

  const result1 = await waitAndReturn("💡 First Done", 5000);
  console.log(result1);

  const result2 = await waitAndReturn("✅ Second Done", 1500);
  console.log(result2);

  const result3 = await waitAndReturn("🚀 Third Done", 500);
  console.log(result3);

  console.log("All async steps completed");
}

runAsyncFlow();

/*
✅ EXPECTED OUTPUT:
Start
💡 First Done        (after 1s)
✅ Second Done       (after 2.5s total)
🚀 Third Done        (after 3s total)
All async steps completed
*/

// --------------------------------------------------

/*
🔹 Error Handling – use try/catch with await
*/

const mightFail = (shouldFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("🔥 Something went wrong");
      else resolve("🎉 It worked!");
    }, 1000);
  });
};

async function testErrorFlow() {
  try {
    const result = await mightFail(false); // change to true to test error
    console.log("Result:", result);
  } catch (err) {
    console.error("Caught error:", err);
  } finally {
    console.log("Cleanup (runs always)");
  }
}

testErrorFlow();

/*
✅ EXPECTED OUTPUT (on success):
Result: 🎉 It worked!
Cleanup (runs always)

❌ OUTPUT (on failure):
Caught error: 🔥 Something went wrong
Cleanup (runs always)
*/

// --------------------------------------------------

/*
🔹 Parallel Execution – await multiple in parallel using Promise.all
*/

async function parallelAwait() {
  const task1 = waitAndReturn("🍕 Pizza ready", 2000);
  const task2 = waitAndReturn("🍔 Burger ready", 1500);
  const task3 = waitAndReturn("🥤 Drink ready", 1000);

  const results = await Promise.all([task1, task2, task3]);
  console.log("All food ready:", results);
}

parallelAwait();

/*
✅ OUTPUT (after 2 sec):
All food ready: ['🍕 Pizza ready', '🍔 Burger ready', '🥤 Drink ready']
*/

// --------------------------------------------------

/*
📦 SUMMARY:

- async functions return Promises
- await pauses until the Promise resolves
- use try/catch for error handling
- use Promise.all() inside async to run in parallel
*/
