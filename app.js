// Import all require modules
const express = require('express');
const db = require('./config/mongoose');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Creating an express application
const app = express();

// setting up the port number
const port = 4200 || process.env.port;

// Setting up the view engine
app.set('view engine', 'ejs');

// For cookie
app.use(express.urlencoded());
app.use(cookieParser());

//  To access the static files
app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes')); // by default it will fetch the index file.

// start the server
app.listen(port, function(err) {
    if (err) {
        console.log(`The application doesn't start because of ${err}`);
    }
    console.log(`The application is running on ${port}`);
});