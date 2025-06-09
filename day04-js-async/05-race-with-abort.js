/*
📌 RACE WITH ABORT CONTROLLER

In a real-world scenario, you might want to:
- Fire multiple fetch() requests (to mirrors, backups, CDNs)
- Use the fastest one
- Cancel the rest to save bandwidth and avoid redundant processing

This is exactly what AbortController enables.
*/

// ---------------------------

/*
📦 FUNCTION: fetchWithAbort
- Takes a label, URL, and AbortController
- Times the request
- Parses response as text
- Catches and logs if request was aborted or failed
*/

const fetchWithAbort = (label, url, controller) => {
  const start = Date.now();

  return fetch(url, { signal: controller.signal })
    .then(response => {
      const duration = Date.now() - start;
      console.log(`[${label}] responded in ${duration}ms`);
      return response.text();
    })
    .then(data => ({ label, data }))
    .catch(err => {
      if (err.name === "AbortError") {
        console.warn(`[${label}] aborted ❌`);
      } else {
        console.error(`[${label}] failed:`, err.message);
      }
    });
};

// ---------------------------

/*
🧠 Create a separate AbortController for each request
So that each can be individually cancelled.
*/

const controller1 = new AbortController();
const controller2 = new AbortController();
const controller3 = new AbortController();

// ---------------------------

/*
🚀 Fire all fetch requests in parallel
- They begin execution immediately
*/

const google = fetchWithAbort("Google", "https://www.google.com", controller1);
const facebook = fetchWithAbort("Facebook", "https://www.facebook.com", controller2);
const linkedin = fetchWithAbort("LinkedIn", "https://www.linkedin.com", controller3);

// ---------------------------

/*
🏁 Use Promise.race to wait for the fastest one
- Once the first one fulfills, we abort the other two
*/

Promise.race([google, facebook, linkedin])
  .then(result => {
    if (result) {
      console.log(`🏁 First winner: ${result.label}`);

      // Abort all fetches — even the winner, just in case
      controller1.abort();
      controller2.abort();
      controller3.abort();
    }
  })
  .catch(err => console.error("Race failed:", err));

// ---------------------------

/*
✅ SAMPLE OUTPUT (will vary per run/network):

[Google] responded in 184ms
🏁 First winner: Google
[Facebook] aborted ❌
[LinkedIn] aborted ❌

❌ If all fetches fail or are blocked:
[Google] failed: fetch failed
[Facebook] failed: fetch failed
[LinkedIn] failed: fetch failed
*/

// ---------------------------

/*
📌 SUMMARY

- Promise.race() alone does NOT cancel the slower fetches
- AbortController lets you cancel fetch requests
- Use one controller per fetch
- Call .abort() on all after the winner resolves
*/
