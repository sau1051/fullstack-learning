// ===========================================
// 📘 Lexical Scope & Scope Chain in JavaScript
// ===========================================

/*
🧠 Lexical Scope (a.k.a. Static Scope):
The scope of a variable is determined by where it is written in the code, not where it's called from.
In JS, functions remember the environment they were created in — that's lexical scope.
*/


// ============================
// ✅ 1. Lexical Scope Basics
// ============================

const globalVar = "🌍 Global";

function outer() {
  const outerVar = "🌐 Outer";

  function inner() {
    const innerVar = "🔒 Inner";

    console.log(globalVar); // ✅ Accessible
    console.log(outerVar);  // ✅ Accessible
    console.log(innerVar);  // ✅ Accessible
  }

  inner();
}

outer();

// Output:
// 🌍 Global
// 🌐 Outer
// 🔒 Inner


// ============================
// ❌ Cannot Access Outer Scope from Below
// ============================

function showOuter() {
  const localMsg = "I'm inside";

  function innerShow() {
    console.log("Message:", localMsg); // ✅ Can access parent's variable
  }

  return innerShow;
}

const myFunc = showOuter(); // outer function runs and returns inner
myFunc(); // Output: Message: I'm inside

try {
  console.log(localMsg); // ❌ ReferenceError
} catch (err) {
  console.log("Error:", err.message);
}

// Output:
// Message: I'm inside
// Error: localMsg is not defined


// ============================
// 🔗 2. Scope Chain Illustration
// ============================

const a = 10;

function one() {
  const b = 20;

  function two() {
    const c = 30;
    console.log("a + b + c =", a + b + c); // ✅ Has access to all 3 scopes
  }

  two();
}

one();

// Output:
// a + b + c = 60

/*
🧠 The JS engine checks:
1. Is `a` in `two()`? ❌
2. Is `a` in `one()`? ❌
3. Is `a` in global scope? ✅
This chain is called the **scope chain**
*/


// ============================
// 🧪 Real-World Analogy
// ============================

/*
Think of scopes like folders:
📁 Global (has `a`)
  └── 📁 Function one (has `b`)
         └── 📁 Function two (has `c`)

Function `two()` can look up into `one()` and then `global`, 
but `global` cannot look down into `one()` or `two()`
*/


// ============================
// ✅ Real-World Code Example: Lexical Scope
// ============================

// Scenario: A shopping cart that uses a discount defined outside the function

const discountRate = 0.1; // 10% discount

function calculateFinalPrice(itemPrice) {
  function applyDiscount() {
    return itemPrice - itemPrice * discountRate; // uses outer scope variable
  }

  return applyDiscount();
}

console.log("Final Price:", calculateFinalPrice(200)); // Output: 180

/*
🧠 Explanation:
- `discountRate` is in global scope.
- `applyDiscount()` is defined inside `calculateFinalPrice()`, 
  but still has access to both `itemPrice` and `discountRate`.
- This is Lexical Scope in action: function uses variables from where it's written, not where it's called.
*/


// ============================
// 📌 Summary
// ============================

/*
| Concept         | Meaning                                      |
|----------------|----------------------------------------------|
| Lexical Scope  | Scope defined at code-writing time           |
| Scope Chain     | Chain of variable lookups (inner → outer)   |
| Lookup Rule     | JS checks current → parent → global         |
| Used In         | Closures, HOFs, nested functions             |
*/
