// ==============================
// ✅ 1. Function as Argument
// ==============================

function doMath(a, b, operation) {
  return operation(a, b); // `operation` is a function passed in
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("Addition:", doMath(5, 3, add));           // Output: Addition: 8
console.log("Multiplication:", doMath(5, 3, multiply)); // Output: Multiplication: 15

// 🧠 `doMath` is a higher-order function because it accepts another function as an argument.


// ==============================
// ✅ 2. Function Returning Function (with userName)
// ==============================

function greeter(greeting) {
  return function(userName) {
    console.log(`${greeting}, ${userName}`);
  };
}

const sayHello = greeter("Hello");
sayHello("Saurabh"); // Output: Hello, Saurabh

const sayHi = greeter("Hi");
sayHi("Rahul"); // Output: Hi, Rahul

// 🧠 `greeter()` returns a new function with access to `greeting`. This is a HOF + closure combo.


// ==============================
// ✅ 3. Real-World Example: Array Methods
// ==============================

const numbers = [1, 2, 3, 4, 5];

// `map` applies a function to each element and returns a new array
const squared = numbers.map(num => num * num);
console.log("Squared:", squared); // Output: Squared: [1, 4, 9, 16, 25]

// `filter` returns a new array with elements that satisfy the condition
const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens); // Output: Evens: [2, 4]

// 🧠 `map` and `filter` are higher-order functions built into JavaScript.
// They take another function as an argument.


// ==============================
// 📊 Summary: Higher-Order Function Table
// ==============================

/*
| Function              | Takes Another Function? | Returns a Function? | Is HOF? | Notes                                      |
|-----------------------|-------------------------|----------------------|---------|---------------------------------------------|
| map()                | ✅ Yes                  | ❌ No               | ✅ Yes  | Applies a callback to each array element    |
| filter()             | ✅ Yes                  | ❌ No               | ✅ Yes  | Filters elements using callback             |
| reduce()             | ✅ Yes                  | ❌ No               | ✅ Yes  | Accumulates values based on callback        |
| setTimeout()         | ✅ Yes                  | ❌ No               | ✅ Yes  | Delays execution using a callback           |
| addEventListener()   | ✅ Yes                  | ❌ No               | ✅ Yes  | Runs a callback when event is triggered     |
| forEach()            | ✅ Yes                  | ❌ No               | ✅ Yes  | Executes callback for each array item       |
| greeter() (custom)   | ❌ No                   | ✅ Yes              | ✅ Yes  | Returns a function customized with closure  |
| doMath() (custom)    | ✅ Yes                  | ❌ No               | ✅ Yes  | Accepts math function as input              |
*/

// ✅ A function is considered a Higher-Order Function if it:
// 1. Accepts another function as an argument OR
// 2. Returns a new function
