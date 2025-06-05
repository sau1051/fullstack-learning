// ============================
// ✅ 1. Basic Callback Example
// ============================

function greetUser(name, callback) {
  console.log("Hi " + name);
  callback(); // Executes the passed-in function
}

function showMessage() {
  console.log("Welcome to the platform!");
}

greetUser("Saurabh", showMessage);

// Output:
// Hi Saurabh
// Welcome to the platform!


// ============================
// ✅ 2. Inline Callback
// ============================

greetUser("Rahul", () => {
  console.log("You’ve successfully logged in!");
});

// Output:
// Hi Rahul
// You’ve successfully logged in!


// ============================
// ✅ 3. setTimeout (Async Callback)
// ============================

console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds (async callback)");
}, 2000);

console.log("End");

// Output:
// Start
// End
// (after 2 seconds)
// This runs after 2 seconds (async callback)


// ============================
// ✅ 4. Simulated HTTP Call with Callback
// ============================

// This simulates an API request
function fetchUserData(userId, callback) {
  console.log("Fetching user from DB...");

  setTimeout(() => {
    // Pretend we fetched this from a database
    const user = {
      id: userId,
      name: "Saurabh",
      email: "saurabh@example.com"
    };

    callback(user); // Return data via callback
  }, 1500);
}

function handleUser(user) {
  console.log("User fetched:", user);
}

fetchUserData(101, handleUser);

// Output:
// Fetching user from DB...
// (after 1.5 seconds)
// User fetched: { id: 101, name: 'Saurabh', email: 'saurabh@example.com' }

// 🧠 In real-world apps, HTTP clients (like fetch, axios) take callbacks or use promises/async-await.