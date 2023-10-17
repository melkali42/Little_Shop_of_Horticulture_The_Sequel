
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/e-commerce plant store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

// module.exports = mongoose.connection;

// const { connect, connection } = require('mongoose');

// const connectDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/little-shop-db'; 

// connect(connectDB)

// module.exports = connection;

