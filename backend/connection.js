const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

// Connect to MongoDB
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.log("Error connecting to MongoDB!! :: ", error);
        
    }
}

module.exports = connection;