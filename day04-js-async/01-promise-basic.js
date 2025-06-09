/*
📌 BASIC PROMISE – REAL-WORLD ANALOGY

Ordering food online: delivery may succeed or fail.
*/

const foodOrder = new Promise((resolve, reject) => {
  const foodArrived = true;

  if (foodArrived) {
    resolve("🍕 Your pizza is here!");
  } else {
    reject("🚫 No delivery. Try again later.");
  }
});

foodOrder
  .then(msg => console.log("Then:", msg))
  .catch(err => console.error("Catch:", err))
  .finally(() => console.log("Finally: Delivery attempt over."));

/*
✅ EXPECTED OUTPUT:
Then: 🍕 Your pizza is here!
Finally: Delivery attempt over.

❌ IF foodArrived = false:
Catch: 🚫 No delivery. Try again later.
Finally: Delivery attempt over.
*/
