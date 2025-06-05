// 07-event-loop-basics.js – JavaScript Event Loop Core Concepts

// ✅ Basic Step-by-Step Flow
console.log("🥇 1. Start");

setTimeout(() => {
  console.log("⏱️ 2. setTimeout callback (0ms)");
}, 0);

console.log("🥈 3. End");

/*
🧠 OUTPUT:
🥇 1. Start
🥈 3. End
⏱️ 2. setTimeout callback (0ms)

🔍 Explanation:
- JavaScript is single-threaded and uses a Call Stack.
- `setTimeout` does NOT run its callback immediately.
- It's handled by the browser's Web APIs, which schedule the callback.
- After the specified delay (even 0ms), the callback is placed into the Callback Queue.
- The Event Loop checks if the Call Stack is empty, then pushes the callback in.

🧠 Real-World Analogy:
- 👨‍🍳 Call Stack = Chef cooking dishes one at a time
- 🛎️ setTimeout = Waiter placing a reminder for later
- 🪑 Callback Queue = List of orders ready to be handled
- 🔁 Event Loop = Checks when chef is free to take next order
*/


// ✅ Multiple setTimeout Calls from Different Functions

function alpha() {
  setTimeout(() => console.log("🍎 Alpha timeout (1000ms)"), 1000);
}

function beta() {
  setTimeout(() => console.log("🍌 Beta timeout (500ms)"), 500);
}

console.log("🚀 Multiple Timers Start");

alpha();
beta();

console.log("🏁 Multiple Timers End");

/*
🧠 OUTPUT:
🚀 Multiple Timers Start
🏁 Multiple Timers End
🍌 Beta timeout (500ms)
🍎 Alpha timeout (1000ms)

🔍 Explanation:
- alpha() sets a 1000ms timeout
- beta() sets a 500ms timeout
- Even though alpha is called first, beta's shorter delay causes its callback to run earlier.
- Order of appearance in code does NOT matter — delay does.
- All callbacks still wait for the call stack to clear.

🧠 Real-World Analogy:
- You order 🍎 and 🍌 dishes from two different chefs.
- 🍌 takes 500ms to prepare, 🍎 takes 1000ms.
- Even though 🍎 was ordered first, 🍌 is served first.
*/

