//  Require all modules
const mongoose = require('mongoose');

// Connection string to connect the database
mongoose.connect('mongodb://127.0.0.1:27017/Auth');

// to export the connection
const db = mongoose.connection;

db.on('error', console.log.bind(console, ' Error while connecting'));

db.once('open', function() {
    console.log("connected to the database");
});

module.exports = db;