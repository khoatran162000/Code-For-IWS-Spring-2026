// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Define the Schema (the blueprint for our data)
// This Schema object defines the structure for any
// document that will be stored in the 'User' collection.
const UserSchema = new mongoose.Schema({
  // Define the 'username' field
  username: {
    type: String,
    // 'required' is a built-in validator. If a document
    // is saved without this field, Mongoose will throw a
    // validation error. [28, 29, 52]
    // The array provides a custom error message.
    required: [true, 'Please add a username'] 
  },
  // Define the 'email' field
  email: {
    type: String,
    required: [true, 'Please add an email'], // [28, 53]
    // 'unique: true' tells MongoDB to create a unique
    // index on this field. This enforces that no two
    // documents in the collection can have the same email.
    unique: true // [28, 53, 54]
  }
  // Mongoose automatically adds an '_id' (ObjectId) field 
  // to every schema by default.
});
// 3. Compile the Schema into a Model and Export it
// The mongoose.model() function takes two arguments:
// 1. The singular name of the model ('User').
// 2. The schema to use (UserSchema).
// Mongoose will automatically create a collection in MongoDB
// named 'users' (lowercase and pluralized) based on
// the model name 'User'. [22, 55]
module.exports = mongoose.model('User', UserSchema);

