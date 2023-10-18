const { connect, connection } = require('mongoose');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/e-commerce plant store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

connect(connectDB);

module.exports = mongoose.connection;








