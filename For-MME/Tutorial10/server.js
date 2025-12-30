const express = require('express');
const app = express();
const port = 3000;

// In-memrory array to store data
let users = [];

// A simple logger middleware
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

  const newUser = { id: users.length + 1, name: newName };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

