# 📘 Day 04 – Async JavaScript

This folder contains all examples and notes related to asynchronous programming in JavaScript using Promises, utility methods, and async/await.

---

## ✅ Topics Covered

### 1️⃣ Basic Promise
- Creating and resolving/rejecting Promises
- Real-world analogy: food delivery
- `.then()`, `.catch()`, `.finally()`

**File**: `01-promise-basic.js`

---

### 2️⃣ Promise Chaining
- Sequential execution using `.then()`
- Passing results from one step to the next

**File**: `02-promise-chaining.js`

---

### 3️⃣ Promise Rejection Handling
- Propagation of errors through chained `.then()`
- Using `.catch()` at the end

**File**: `03-promise-rejection.js`

---

### 4️⃣ Promise Utility Methods
- `Promise.all`, `race`, `any`, `allSettled`
- Real-world analogies (e.g., ordering from multiple stores)

**File**: `04-promise-utilities.js`

---

### 5️⃣ Promise.race with AbortController
- How to cancel slower requests once the fastest succeeds
- Using `AbortController` per request

**File**: `05-race-with-abort.js`

---

### 6️⃣ Async/Await
- Writing readable async code using `await`
- `try...catch` for error handling
- Parallel execution with `Promise.all`

**File**: `06-async-await.js`

---

## 💡 Summary

Async programming is a core part of modern JavaScript, especially in full-stack web apps. This day covered how to manage concurrent, parallel, and failure-prone async operations cleanly.

---

## ⏭️ Up Next (Day 05 Preview)

- `fetch()` with async/await
- Fetch with error handling, headers, status codes
- Chained `fetch()` calls
- Real-world examples (public APIs)
