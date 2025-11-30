// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import the User model from T11
const User = require('./models/User'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests 

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
 .then(() => console.log('Successfully connected to MongoDB Atlas'))
 .catch(err => console.error('MongoDB connection error:', err));

// === API ENDPOINTS ===
// We will now refactor these 5 endpoints.

// 1. GET /api/users - Retrieve all users
app.get('/api/users', async (req, res) => {
    try {
        // User.find() retrieves all documents from the User collection
        const users = await User.find(); // Awaits the promise to resolve 
        
        // Send a 200 OK status with the retrieved users
        res.status(200).json(users);
    } catch (err) {
        // This catch block handles system-level errors (e.g., connection failure)
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 2. POST /api/users - Create a new user
app.post('/api/users', async (req, res) => {
    try {
        // Create a new User instance in memory from the request body
        const user = new User({
            username: req.body.name,
            email: req.body.email,
            age: req.body.age
            // Note: Mongoose automatically uses the fields from req.body
            // that match the schema. Extra fields are ignored.
        });

        // Persist the new user instance to the database
        const newUser = await user.save(); // [13]

        // Respond with 201 Created and the new document
        res.status(201).json(newUser);
    } catch (err) {
        // Check for validation errors 
        if (err.name === 'ValidationError') {
            console.error('Validation Error:', err.message);
            return res.status(400).json({ message: 'Validation Error', error: err.message });
        }
        // Handle other errors (e.g., duplicate key error)
        console.error('Error creating user:', err);
        res.status(400).json({ message: 'Error creating user', error: err.message });
    }
});

// 3. GET /api/users/:id - Retrieve a single user by ID
app.get('/api/users/:id', async (req, res) => {
    try {
        // req.params.id contains the route parameter
        const user = await User.findById(req.params.id); [20]

        // Case 1: ID is valid, but no user is found (returns null)
        if (!user) { // [19, 20]
            console.log(`User not found with ID: ${req.params.id}`);
            return res.status(404).json({ message: 'User not found' });
        }

        // User was found, send 200 OK with the user data
        res.status(200).json(user);

    } catch (err) {
        // Case 2: ID format is invalid (e.g., "123")
        if (err.name === 'CastError') { // 
            console.error(`Invalid ID format: ${req.params.id}`);
            return res.status(400).json({ message: 'Invalid User ID format', error: err.message });
        }

        // Handle other system errors
        console.error('Error fetching user:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 4. PUT /api/users/:id - Update a user by ID
app.put('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, // The ID of the document to update
            req.body,      // The new data to apply [25]
            { 
                new: true, // Returns the *updated* document 
                runValidators: true // Enforces schema validation on update 
            } 
        );

        // Case 1: ID is valid, but no user is found (returns null)
        if (!updatedUser) {
            console.log(`User not found with ID: ${req.params.id}`);
            return res.status(404).json({ message: 'User not found' });
        }

        // User was found and updated, send 200 OK
        res.status(200).json(updatedUser);

    } catch (err) {
        // Case 2: ID format is invalid (CastError) OR
        // Case 3: Update data is invalid (ValidationError)
        if (err.name === 'CastError') {
            console.error(`Invalid ID format: ${req.params.id}`);
            return res.status(400).json({ message: 'Invalid User ID format', error: err.message });
        }
        if (err.name === 'ValidationError') {
            console.error('Validation Error:', err.message);
            return res.status(400).json({ message: 'Validation Error', error: err.message });
        }

        // Handle other system errors
        console.error('Error updating user:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 5. DELETE /api/users/:id - Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id); [29]

        // Case 1: ID is valid, but no user is found (returns null)
        if (!deletedUser) { // 
            console.log(`User not found with ID: ${req.params.id}`);
            return res.status(404).json({ message: 'User not found' });
        }

        // User was found and deleted.
        // Respond with 204 No Content. 
        console.log(`Successfully deleted user with ID: ${req.params.id}`);
        res.status(204).send(); //.send() is used to send no body

    } catch (err) {
        // Case 2: ID format is invalid (CastError)
        if (err.name === 'CastError') {
            console.error(`Invalid ID format: ${req.params.id}`);
            return res.status(400).json({ message: 'Invalid User ID format', error: err.message });
        }

        // Handle other system errors
        console.error('Error deleting user:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

