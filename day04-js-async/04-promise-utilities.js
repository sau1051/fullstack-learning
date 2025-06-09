// 04-promise-utilities.js

/*
📌 PROMISE UTILITIES – OVERVIEW

JavaScript provides built-in static methods to work with multiple Promises:
1. Promise.all
2. Promise.race
3. Promise.any
4. Promise.allSettled

These are useful when you:
- Fetch multiple APIs
- Run parallel async tasks
- Need fastest or fallback results
*/

// --------------------------------------------------

/*
🔹 PROMISE.ALL

Real-World Example:
🏗️ Waiting for construction materials (cement, bricks, steel) to arrive before building can begin.

If ANY one fails to arrive, construction can’t proceed.
*/

const cement = Promise.resolve("Cement delivered");
const bricks = Promise.resolve("Bricks delivered");
const steel = Promise.resolve("Steel delivered");

Promise.all([cement, bricks, steel])
  .then(results => console.log("✅ All materials received:", results))
  .catch(error => console.error("❌ Construction delay:", error));

/*
✅ OUTPUT:
All materials received: ['Cement delivered', 'Bricks delivered', 'Steel delivered']
*/

// --------------------------------------------------

/*
🔹 PROMISE.RACE

Real-World Example:
🏁 Three friends race to grab a cab. Whoever books it first wins.

Only the first one counts — even if the others succeed or fail later.
*/

const friend1 = new Promise(resolve => setTimeout(() => resolve("Friend 1 booked Uber"), 3000));
const friend2 = new Promise(resolve => setTimeout(() => resolve("Friend 2 booked Lyft"), 1000));
const friend3 = new Promise(resolve => setTimeout(() => resolve("Friend 3 booked Ola"), 2000));

Promise.race([friend1, friend2])
  .then(result => console.log("🚕 First cab booked:", result));

/*
✅ OUTPUT (after 1 second):
First cab booked: Friend 2 booked Lyft
*/


//Example with Real API Simulation (Ideal Way):
/*const fetchFromURL1 = () => fetch("https://www.google.com");
const fetchFromURL2 = () => fetch("https://www.facebook.com");
const fetchFromURL3 = () => fetch("https://www.linkedin.com");

Promise.race([fetchFromURL1(), fetchFromURL2(), fetchFromURL3()])
  //.then(response => response.json())
  //.then(data => console.log("Fastest data received:", data))
  //.catch(err => console.error("All mirrors failed", err));
    .then(response => response.text())
    .then(data => console.log("First response received (HTML snippet):\n", data.slice(0, 200)))
    .catch(err => console.error("All requests failed:", err));
    */

/*
✅ OUTPUT :
<!DOCTYPE html><html lang="en" id="facebook"><head><title>Error</title><meta charset="utf-8" /><meta http-equiv="Cache-Control" content="no-cache" /><meta name="robots" content="noindex,nofollow" /><s
*/


// Modified c0de
const fetchWithTimer = (label, url) => {
  const start = Date.now();
  return fetch(url)
    .then(response => {
      const duration = Date.now() - start;
      console.log(`${label} responded in ${duration}ms`);
      return response.text();
    })
    .then(data => ({ label, data }));
};

const fetchWithTimer2 = (label, url) => {
  const start = Date.now();
  return fetch(url)
    .then(response => {
      const duration = Date.now() - start;
      console.log(`[${label}] responded in ${duration}ms`);
      return response.text();
    })
    .then(data => {
      console.log(`[${label}] .text() complete`);
      return { label, data };
    })
    .catch(err => console.error(`[${label}] failed:`, err));
};

Promise.race([
  fetchWithTimer2("Google", "https://www.google.com"),
  fetchWithTimer2("Facebook", "https://www.facebook.com"),
  fetchWithTimer2("LinkedIn", "https://www.linkedin.com")
])
.then(({ label, data }) => {
  console.log(`🏁 First winner: ${label}`);
  console.log(data.slice(0, 200));
})
.catch(err => console.error("Error:", err));

// --------------------------------------------------

/*
🔹 PROMISE.ANY

Real-World Example:
🎯 Trying multiple online stores for a product. You don’t care which store, as long as *one* delivers.

You ignore errors unless *everyone* fails.
*/

const store1 = Promise.reject("Out of stock at Store 1");
const store2 = Promise.reject("Out of stock at Store 2");
const store3 = Promise.resolve("Product shipped by Store 3");

Promise.any([store1, store2, store3])
  .then(result => console.log("📦 Order success:", result))
  .catch(err => console.error("❌ All stores failed:", err));

/*
✅ OUTPUT:
Order success: Product shipped by Store 3
*/

// --------------------------------------------------

/*
🔹 PROMISE.ALLSETTLED

Real-World Example:
📊 Sending emails to multiple recipients. You want to know which ones succeeded and which failed, without stopping the batch.

All results are reported back with success or failure status.
*/

const email1 = Promise.resolve("Email sent to A");
const email2 = Promise.reject("Failed to send to B");

Promise.allSettled([email1, email2])
  .then(results => console.log("📬 Email batch status:", results));

/*
✅ OUTPUT:
[
  { status: 'fulfilled', value: 'Email sent to A' },
  { status: 'rejected', reason: 'Failed to send to B' }
]
*/

// --------------------------------------------------

/*
📦 SUMMARY TABLE:

| Method             | Waits for all? | Fails fast? | Returns                | Use Case                        |
|--------------------|----------------|-------------|------------------------|----------------------------------|
| Promise.all         | ✅              | ✅          | All results OR error   | Wait for all (like materials)    |
| Promise.race        | ❌              | ❌          | First settled result   | Fastest response wins (cab)      |
| Promise.any         | ❌              | ❌          | First success OR error | First success (multiple vendors) |
| Promise.allSettled  | ✅              | ❌          | Status of all          | Report all (batch emails)        |
*/

