// Line 1: Import the Express library
const express = require('express');

// Line 2: Create an instance of the Express application
const app = express();

// Line 3: Define the port to run on (3000 is a common convention)
const port = 3000;

// Line 4: Create our first route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// --- ADD THIS NEW BLOCK ---
// Line 4B: Create a new route handler for a JSON API
app.get('/api/test', (req, res) => {
  res.json({ "message": "Success!" });
});
// --- END OF NEW BLOCK ---

// Line 5: Start the server and make it listen for connections
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

