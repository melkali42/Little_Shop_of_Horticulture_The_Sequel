const mongoose = require('mongoose');

const connectDB = async () => { 
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/little-shop-db');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

// module.exports = connectDB;


