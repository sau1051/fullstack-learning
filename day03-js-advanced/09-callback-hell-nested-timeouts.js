// 09-callback-hell-nested-timeouts.js – Nested setTimeout / Callback Hell Example

console.log("🚀 Script Start");

setTimeout(() => {
  console.log("🍕 Order 1 ready (after 1 sec)");

  setTimeout(() => {
    console.log("🍔 Order 2 ready (after another 1 sec)");

    setTimeout(() => {
      console.log("🥤 Order 3 ready (after another 1 sec)");
    }, 1000);

  }, 1000);

}, 1000);

/*
🧠 OUTPUT (approx 1 sec gap each):
🚀 Script Start
🍕 Order 1 ready (after 1 sec)
🍔 Order 2 ready (after another 1 sec)
🥤 Order 3 ready (after another 1 sec)

🧠 Real-World Analogy:
You're in a restaurant:
1. The chef starts preparing 🍕
2. When 🍕 is done, they begin 🍔
3. When 🍔 is done, they start 🥤

Each step waits for the previous one → this creates **Callback Hell**

🔴 Problem:
- Messy nesting
- Difficult to manage or debug
- Not scalable
- Solution? Use Promises or async/await (coming next)
*/
