const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a username'] 
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative']
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

