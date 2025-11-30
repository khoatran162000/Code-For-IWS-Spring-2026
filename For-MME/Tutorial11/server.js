const express = require('express');
const connectDB = require('./config/db'); // Import the connection function
require('dotenv').config(); // Load.env variables into process.env

// Connect to Database
connectDB();

const app = express();

const port = 3000;

// In-memory database
let users = [];

//... myLogger function definition...
function myLogger(req, res, next) {
  // 1. Execute code: Log the request's method and path
  // We use new Date().toISOString() for a standardized timestamp.
  console.log(` ${req.method} ${req.url}`);
  // 2. Pass control: Call next() to pass the request to the
  //    next middleware function in the stack.
  // 3. CRITICAL: If you forget this, the request will "hang"! 
  next(); 
}

// 1. Register our custom logger
app.use(myLogger);

// 2. Add the built-in JSON parsing middleware. [21, 23]
// This function will look for 'Content-Type: application/json'
// and automatically parse the body, placing it on req.body.
app.use(express.json()); 

// 3. API routes will now have access to req.body
// (We will add these next)
// app.post('/api/users',...); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST /api/users - Create a new user
app.post('/api/users', (req, res) => {
  // 1. Thanks to app.use(express.json()),
  //    req.body is NOW a populated JavaScript object. [19]
  const newName = req.body.name;
  
  // Basic validation
  if (!newName) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = {
    id: users.length + 1, // Simple ID generation
    name: newName           // 2. Access the data from req.body
  };

  // 3. "Save" the user to our in-memory database
  users.push(newUser); [34]

  // 4. Send a confirmation response.
  // A status code of 201 means "Created". 
  // We also send back the new user object as confirmation. 
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

