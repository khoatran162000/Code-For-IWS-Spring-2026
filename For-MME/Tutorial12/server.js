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
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 2. POST /api/users - Create a new user
app.post('/api/users', async (req, res) => {
    try {
        const user = new User({
            username: req.body.name,
            email: req.body.email,
            age: req.body.age
        });

        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        if (err.name === 'ValidationError') {
            console.error('Validation Error:', err.message);
            return res.status(400).json({ message: 'Validation Error', error: err.message });
        }
        console.error('Error creating user:', err);
        res.status(400).json({ message: 'Error creating user', error: err.message });
    }
});

// 3. GET /api/users/:id - Retrieve a single user by ID
app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            console.log(`User not found with ID: ${req.params.id}`);
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        if (err.name === 'CastError') {
            console.error(`Invalid ID format: ${req.params.id}`);
            return res.status(400).json({ message: 'Invalid User ID format', error: err.message });
        }
        console.error('Error fetching user:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 4. PUT /api/users/:id - Update a user by ID
app.put('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { 
                new: true,
                runValidators: true
            } 
        );
        if (!updatedUser) {
            console.log(`User not found with ID: ${req.params.id}`);
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);

    } catch (err) {
        if (err.name === 'CastError') {
            console.error(`Invalid ID format: ${req.params.id}`);
            return res.status(400).json({ message: 'Invalid User ID format', error: err.message });
        }
        if (err.name === 'ValidationError') {
            console.error('Validation Error:', err.message);
            return res.status(400).json({ message: 'Validation Error', error: err.message });
        }
        console.error('Error updating user:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 5. DELETE /api/users/:id - Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            console.log(`User not found with ID: ${req.params.id}`);
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(`Successfully deleted user with ID: ${req.params.id}`);
        res.status(204).send();

    } catch (err) {
        if (err.name === 'CastError') {
            console.error(`Invalid ID format: ${req.params.id}`);
            return res.status(400).json({ message: 'Invalid User ID format', error: err.message });
        }
        console.error('Error deleting user:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

