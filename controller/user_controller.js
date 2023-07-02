const mongoose = require('../config/mongoose')
const User = require('../model/user');

// function for sign up
module.exports.signup = function(req, res) {
    return res.status(200).render('../views/user/signup.ejs', { title: "Sign up" });
}

// Function to create a new user
module.exports.createUser = async function(req, res) {
    try {
        // console.log("Before the useData:" + req.body.uname);
        const userData = {
                name: req.body.uname,
                email: req.body.uemail,
                password: req.body.upassword,
                confirmPassword: req.body.uconfirmPassword
            }
            // console.log(userData);
        if (userData.password == userData.confirmPassword) {
            const user = await User.findOne({ email: userData.email });
            // console.log(userData);
            if (!user) {
                const createUser = await User.create({
                    username: userData.name,
                    email: userData.email,
                    password: userData.password
                });
                // console.log("createUser ", createUser);
                return res.redirect('/users/signin');
            } else {
                return res.redirect('back');
            }
        } else {
            // Handle password mismatch
            return res.redirect('back');
        }
    } catch (error) {
        console.log(`Error while creating the user: ${error}`);
    }
}

// function for sign in
module.exports.signin = function(req, res) {
    return res.status(200).render('../views/user/signin', { title: "Sign in" });
}

// function to create session
module.exports.createSession = function(req, res) {
    try {

    } catch (error) {
        console.log(`Error while creating the user ${error}`);
    }
}

// Function for home controller
module.exports.profile = function(req, res) {
    return res.status(200).render('../views/user_profile.ejs', { title: "User Profile Page" });
}