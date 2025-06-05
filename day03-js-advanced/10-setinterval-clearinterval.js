// 10-setinterval-clearinterval.js – setInterval & clearInterval Explained

console.log("🕒 Repeating Task Start");

let counter = 0;

const intervalId = setInterval(() => {
  console.log(`⏱️ Repeating task #${counter + 1}`);
  counter++;

  if (counter === 3) {
    clearInterval(intervalId);
    console.log("🛑 Interval cleared");
  }
}, 1000);

/*
🧠 OUTPUT:
🕒 Repeating Task Start
⏱️ Repeating task #1
⏱️ Repeating task #2
⏱️ Repeating task #3
🛑 Interval cleared

🧠 Real-World Analogy:
- ⏰ setInterval: Clock chiming every hour
- 🏃 Fitness Reminder: Beep every 1 min
- 🌱 Watering system: Run every day at 6pm
- 🛑 clearInterval: Like turning off the alarm after N repetitions

---

🧠 JavaScript Engine: Under the Hood

How does `clearInterval(intervalId)` work from inside the callback, even though `intervalId` is defined outside?

🔹 Step-by-step:
1. `intervalId` is defined in the outer scope
2. The callback passed to `setInterval` **forms a closure**, meaning:
   - It *remembers* variables from its definition context
   - So it has access to `intervalId`
3. When the callback executes for the 3rd time, it runs `clearInterval(intervalId)`
4. This stops the timer via the ID stored earlier

✅ This is possible due to **closures** and **lexical scoping**

📦 Global memory stores:
- `counter`
- `intervalId`

📚 Lexical scope allows inner functions to access these even after outer code finishes.

---

📊 DIAGRAM: JavaScript Engine - setInterval Flow

10-setinterval-clearinterval ChatGPT Image Jun 5, 2025, 06_29_30 PM.png

🧠 Flow:
1. JS registers the callback with the Web API (setInterval timer)
2. After every 1000ms, the Web API pushes the callback to the Callback Queue
3. Event Loop checks the Call Stack → if empty, moves the callback to stack
4. Callback runs → prints + checks counter
5. On 3rd run → `clearInterval(intervalId)` stops the timer using the ID remembered by closure

*/

