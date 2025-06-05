// ============================
// ✅ 1. Basic Closure Example
// ============================

function outer() {
  let counter = 0; // This is enclosed inside the closure

  function increment() {
    counter++; // Inner function still has access to `counter`
    console.log("Counter:", counter);
  }

  return increment;
}

const countUp = outer(); // outer() runs and returns increment()
countUp(); // Output: Counter: 1
countUp(); // Output: Counter: 2
countUp(); // Output: Counter: 3

// 🧠 Closure allows `increment()` to "remember" the value of `counter` even after `outer()` has finished running.


// ====================================
// ✅ 2. Closures for Encapsulation
// ====================================

function createBankAccount() {
  let balance = 0; // private variable, cannot be accessed from outside

  return {
    deposit: (amount) => balance += amount,
    getBalance: () => balance
  };
}

const account = createBankAccount();
account.deposit(100);
console.log("Balance after deposit:", account.getBalance()); // Output: Balance after deposit: 100
console.log("Direct access to balance:", account.balance); // Output: undefined

// 🧠 The variable `balance` is not accessible directly — only via the returned methods. This simulates private variables.


// ============================================
// ✅ 3. Closures for State Without Global Scope
// ============================================

const safeCounter = (() => {
  let counter = 0;

  return () => {
    counter++;
    console.log("Safe counter:", counter);
  };
})();

safeCounter(); // Output: Safe counter: 1
safeCounter(); // Output: Safe counter: 2

// 🧠 Here, `counter` is protected inside an IIFE (Immediately Invoked Function Expression) and can't be tampered with globally.


// ==============================
// ✅ 4. Closures for Function Factories
// ==============================

function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double of 5:", double(5)); // Output: Double of 5: 10
console.log("Triple of 5:", triple(5)); // Output: Triple of 5: 15

// 🧠 Each returned function keeps a reference to its own `x` via closure.
// This allows dynamic function generation — a common functional pattern.