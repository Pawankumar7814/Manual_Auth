// Import all required modules
const express = require('express');
const router = express.Router();
const home_controller = require('../controller/home_controller');

// console.log('Router loaded');

// Route to home page
router.get('/', home_controller.home);

// route to user routes
router.use('/users', require('./user'));

// For any other route
// router.use('/routerName', require('path to the route'));

module.exports = router;