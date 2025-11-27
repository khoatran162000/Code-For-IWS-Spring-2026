// INCORRECT CODE
const myData = { name: "Test User" };
fetch(url, {
  method: 'POST',
  body: myData // ERROR: Passing a JS object
});


// CORRECT CODE
const myData2 = { name: "Test User" };
const jsonString = JSON.stringify(myData2); // Serializes the object

fetch(url, {
  method: 'POST',
  body: jsonString // CORRECT: Passing a JSON string
});

