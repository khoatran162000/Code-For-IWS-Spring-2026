/* 
  Sample Code 2: Refactoring to async/await with Robust Error Handling
*/

// The target API endpoint
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// We must wrap our code in an async function to use 'await'
async function fetchData() {
  console.log("Starting fetch request...");
  // The try...catch block replaces the.catch() chain
  try {
    // 1. Await the fetch() promise to get the Response object
    const response = await fetch(url);
    console.log("Received response object:", response);
    /* 
      2. CRITICAL: Manually check for HTTP errors (4xx, 5xx).
      The.ok property is 'false' for non-2xx responses.
    */
    if (!response.ok) {
      // Throw an error that will be caught by the 'catch' block
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // 3. Await the.json() promise to get the parsed data
    const data = await response.json();
    console.log("Parsed JSON data:", data);
  } catch (error) {
    /* 
      This single 'catch' block now handles:
      1. Network failures (fetch() promise rejection)
      2. HTTP errors (from our manual 'throw new Error')
      3. JSON parsing errors (if.json() fails)
      4. Any other synchronous errors in the 'try' block
    */
    console.error("Fetch error:", error.message);
  }
  console.log("...Fetch function complete.");
}
// Call the async function to execute it
fetchData();

/* 
  Expected Console Output:
  > Starting fetch request...
  > Received response object: Response { type: "cors",... }
  > Parsed JSON data: { userId: 1, id: 1, title: "delectus aut autem", completed: false }
  >...Fetch function complete.
*/
