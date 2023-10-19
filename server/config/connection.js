const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/little-shop-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;

/*
// made some revisions to initialize db connection

const { connect, connection } = require('mongoose');

const connectDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/little-shop-db';

connect(connectDB);

module.exports = connection;
*/







