// 08-multiple-timers-and-callback-order.js – Timer Execution Order Explained

console.log("🚀 Script Start");

// ✅ Multiple setTimeout calls with different delays
setTimeout(() => {
  console.log("⏱️ 1. setTimeout with 100ms");
}, 100);

setTimeout(() => {
  console.log("⏱️ 2. setTimeout with 0ms");
}, 0);

setTimeout(() => {
  console.log("⏱️ 3. setTimeout with 50ms");
}, 50);

console.log("🏁 Script End");

/*
🧠 EXPECTED OUTPUT (order may vary slightly depending on system, but generally):
🚀 Script Start
🏁 Script End
⏱️ 2. setTimeout with 0ms
⏱️ 3. setTimeout with 50ms
⏱️ 1. setTimeout with 100ms

🔍 Explanation:
- All setTimeout calls are registered with Web APIs.
- `0ms` timeout goes to the Callback Queue *after* current call stack is empty.
- `50ms` and `100ms` are queued after that — based on when their delays expire.
- **The real delay is never *exact*** due to:
  - Stack execution time
  - Minimum delay threshold (~4ms in modern browsers)
  - Timer throttling if tab is inactive or under load

🧠 Real-World Analogy:
- You place 3 timers:
  - 🔔 One to ring in 0ms (quick note)
  - ⏳ One in 50ms (short task)
  - 🕒 One in 100ms (longer wait)
- Even the “0ms” one waits for current task to finish before it's handled.
*/
