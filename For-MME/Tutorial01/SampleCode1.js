/* 
  Sample Code 1: Consuming the fetch() API with Promise Chaining
*/

// The target API endpoint
const url = 'https://jsonplaceholder.typicode.com/todos/1';

console.log("Starting fetch request...");

// fetch() returns a promise
fetch(url)
 .then(response => {
    /* 
      Step 1: Handle the Response object.
      This 'response' is NOT the data, it's the HTTP response metadata.
      The body is a stream that needs to be read.
    */
    console.log("Received response object:", response);

    // We must call.json() to read the body stream and parse it.
    // This returns a *new* promise that we must also handle.
    return response.json(); 
  })
 .then(data => {
    /* 
      Step 2: Handle the final data.
      This 'data' is the parsed JavaScript object from the response body.
    */
    console.log("Parsed JSON data:", data);
  })
 .catch(error => {
    /* 
      This single.catch() block will handle any errors from:
      1. The initial fetch() (e.g., network failure, DNS error)
      2. The response.json() call (e.g., invalid JSON)
    */
    console.error("Fetch error:", error);
  });

console.log("...Fetch request initiated (running asynchronously).");

/* 
  Expected Console Output:
  > Starting fetch request...
  >...Fetch request initiated (running asynchronously).
  > Received response object: Response { type: "cors",... }
  > Parsed JSON data: { userId: 1, id: 1, title: "delectus aut autem", completed: false }
*/
