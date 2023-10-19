// made some revisions to initialize db connection

const { connect, connection } = require('mongoose');

const connectDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/little-shop-db';

connect(connectDB);

module.exports = connection;








