// ==========================================
// 📘 IIFE: Immediately Invoked Function Expression
// ==========================================
// It is a function that runs as soon as it is defined.
// Syntax: (function() { ... })();
// Purpose: To create isolated/private scope and avoid polluting global scope.


// ============================
// ✅ 1. Basic IIFE Syntax
// ============================

(function () {
  console.log("Hello from IIFE!");
})();

// Output:
// Hello from IIFE!


// ============================
// ✅ 2. IIFE with Variables (Avoid Global Scope)
// ============================

(function () {
  const secret = "Top secret";
  console.log("Inside IIFE:", secret);
})();

try {
  console.log(secret); // ❌ Error: secret is not defined
} catch (err) {
  console.log("Outside IIFE:", err.message);
}

// Output:
// Inside IIFE: Top secret
// Outside IIFE: secret is not defined


// ============================
// ✅ 3. IIFE with Parameters
// ============================

(function (userName) {
  console.log(`Welcome, ${userName}`);
})("Saurabh");

// Output:
// Welcome, Saurabh


// ============================
// ✅ 4. IIFE Returning a Value
// ============================

const config = (function () {
  const host = "localhost";
  const port = 8080;
  return {
    url: `http://${host}:${port}`
  };
})();

console.log("Config URL:", config.url); // Output: Config URL: http://localhost:8080

// 🧠 IIFE returns an object stored in a variable — used to create isolated configs/data.


// ============================
// ✅ 5. Real-World IIFE Example: Config Setup
// ============================

// 🧠 Commonly used to configure modules/settings without global pollution

const settings = (function () {
  const isProd = false;
  const apiVersion = "v1";

  const baseUrl = isProd
    ? "https://api.myapp.com/"
    : "http://localhost:3000/";

  return {
    fullApiUrl: `${baseUrl}api/${apiVersion}/`
  };
})();

console.log("API Endpoint:", settings.fullApiUrl);

// Output (in dev):
// API Endpoint: http://localhost:3000/api/v1/

// In real projects, such IIFEs are used to create private config objects,
// flags, or encapsulate initialization logic — without leaking variables globally.


// ============================
// 🔍 How Is IIFE Different From Closure?
// ============================

// ✅ IIFE: Function that runs immediately after being defined
// ✅ Closure: A function that remembers variables from its outer scope

// 🧠 They are not the same — but often used together


// ============================
// ✅ Example of Closure Inside IIFE
// ============================

// ✅ This is the IIFE (Immediately Invoked Function Expression)
// It runs immediately and returns a function
const counter = (function () {
  let count = 0; // This variable lives inside the IIFE — private to it

  // ✅ This is the Closure — the returned function
  // It "remembers" the `count` variable from the IIFE, even after IIFE is done
  return function () {
    count++;
    console.log("Current:", count);
  };
})(); // ← Immediately invoked

// Using the closure multiple times
counter(); // Output: Current: 1
counter(); // Output: Current: 2
// This example shows IIFE + Closure together


// ============================
// 📌 IIFE vs Closure – Summary Table
// ============================

/*
| Feature           | IIFE                          | Closure                                 |
|------------------|-------------------------------|------------------------------------------|
| Meaning           | Function that runs immediately| Function that remembers outer variables  |
| Use Case          | Scope isolation               | Data privacy and persistent state        |
| Runs on Define?   | ✅ Yes                         | ❌ No — only runs when called            |
| Stores State?     | ❌ No                          | ✅ Yes                                   |
| Can Work Together?| ✅ Yes                         | ✅ Yes                                   |
*/




// ============================
// 🧠 How Does Closure Remember Variables After IIFE Is Done?
// ============================

/*
🧩 Common Doubt:
"If the IIFE has finished executing, why is the `count` variable not destroyed?"

✅ Answer:
Because of how **closures** work.

When you define and return a function from another function (like inside an IIFE), and the inner function uses any variable from the outer function’s scope, 
JavaScript keeps that outer scope alive — even after the outer function has completed.

This preserved scope is called a **closure**.

🎒 Think of the returned function as carrying a “backpack” of variables it depends on (like `count`). 
Even when the parent IIFE is gone, those variables stay alive as long as the returned function (closure) is in use.

🔁 That’s why you can keep calling `counter()` and it remembers the previous value of `count`.

🧪 Example Recap:
    const counter = (function () {
        let count = 0;
        return function () {
            count++;
            console.log("Current:", count);
        };
    })();

    counter(); // Current: 1
    counter(); // Current: 2
    counter(); // Current: 3
*/
