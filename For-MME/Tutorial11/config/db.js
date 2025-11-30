const mongoose = require('mongoose');

// This is an asynchronous function to connect to the DB
const connectDB = async () => {
  try {
    // mongoose.connect() returns a Promise. We use await to wait
    // for the connection to be established. [48, 49]
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // If successful, log the host
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs, log the error message [49]
    console.error(`Error: ${error.message}`);

    // Exit the Node.js process with a failure code (1)
    // This is a "fail-fast" approach. If the app cannot
    // connect to its database, it should crash immediately. 
    process.exit(1);
  }
};

module.exports = connectDB;

