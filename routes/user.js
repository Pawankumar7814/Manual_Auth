// Import required modules
const express = require('express');
const router = express.Router();
const userController = require('../controller/user_Controller');

// route to sign up page
router.get('/signup', userController.signup);

// route to sign in page
router.get('/signin', userController.signin);

// route to create a user
router.post('/create', userController.createUser);

// route to home page
router.get('/profile', userController.profile);


module.exports = router;