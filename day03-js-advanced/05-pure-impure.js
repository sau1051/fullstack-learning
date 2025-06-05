// ========================================
// 📘 Pure vs Impure Functions in JavaScript
// ========================================

/*
🧠 What is a Pure Function?

A function is considered PURE if:
1. It always returns the same output for the same input
2. It does not modify external state (no side-effects)
*/

function add(a, b) {
  return a + b;
}

console.log("Pure Add:", add(2, 3)); // Output: 5
console.log("Pure Add:", add(2, 3)); // Output: 5

// ✅ Pure: No dependency on external values, no mutation


/*
🚫 What is an Impure Function?

A function is IMPURE if:
1. It relies on external state
2. It modifies external state or does I/O operations (e.g., API, DB, DOM)
*/

let counter = 0;

function increment() {
  counter++;
  return counter;
}

console.log("Impure Increment:", increment()); // Output: 1
console.log("Impure Increment:", increment()); // Output: 2

// ❌ Impure: Depends on & modifies external variable


// ============================
// ✅ Another Pure Example – String Formatter
// ============================

function formatGreeting(name) {
  return `Hello, ${name}!`;
}

console.log(formatGreeting("Saurabh")); // Output: Hello, Saurabh!
console.log(formatGreeting("Saurabh")); // Output: Hello, Saurabh!


// ============================
// ❌ Another Impure Example – Logging to Console
// ============================

function logMessage(message) {
  console.log("LOG:", message); // Side effect: logs to console
}

logMessage("Hello from logger!");

// While harmless, console output is still considered a side-effect


// ============================
// ✅ Real-World Example: Pure vs Impure
// ============================

// 🧪 Scenario: Tax Calculation in an E-commerce App

// ✅ PURE Function → Does not rely on external values, always same output for same input
function calculateTax(amount, rate) {
  return amount * rate;
}

console.log("Tax (Pure):", calculateTax(100, 0.18)); // Output: 18
console.log("Tax (Pure):", calculateTax(100, 0.18)); // Output: 18


// ❌ IMPURE Function → Reads from external global variable (which can change)
let globalTaxRate = 0.18;

function calculateTaxImpure(amount) {
  return amount * globalTaxRate;
}

console.log("Tax (Impure):", calculateTaxImpure(100)); // Output: 18

// Now someone changes the rate globally
globalTaxRate = 0.25;

console.log("Tax (Impure after change):", calculateTaxImpure(100)); // Output: 25

/*
🧠 Real-world takeaway:
In real apps, prefer passing values directly (pure) instead of relying on global state (impure),
as it makes functions more testable and predictable.
*/


// ============================
// ✅ Real-World Analogy
// ============================

/*
🍳 Pure Function → A recipe you always follow exactly
📦 Same ingredients → Always same dish

🔥 Impure Function → Cooking where you "taste and adjust"
🧂 May add random salt/spices or change steps every time
*/


// ============================
// 📌 Summary: Pure vs Impure Functions
// ============================

/*
| Feature                  | Pure Function                     | Impure Function                         |
|--------------------------|-----------------------------------|------------------------------------------|
| Same input → same output | ✅ Always                         | ❌ Not guaranteed                        |
| External state used      | ❌ Never                          | ✅ Often relies on outside vars         |
| Modifies outside state   | ❌ Never                          | ✅ Yes (DB, file, DOM, etc.)            |
| Side-effects             | ❌ None                          | ✅ Console, alerts, API calls, etc.     |
| Easy to test             | ✅ Very                          | ❌ Harder to predict/verify             |
*/
