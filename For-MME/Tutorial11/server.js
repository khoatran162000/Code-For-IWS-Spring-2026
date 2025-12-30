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
  console.log(` ${req.method} ${req.url}`);
  next(); 
}

app.use(myLogger);

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST /api/users - Create a new user
app.post('/api/users', (req, res) => {
  const newName = req.body.name;
  
  // Basic validation
  if (!newName) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = {id: users.length + 1, name: newName};

  users.push(newUser);
  
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

