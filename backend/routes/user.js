const express = require("express");

// constroller functions
const { signupUser, loginUser } = require("../controllers/userController");

const Router = express.Router();

// login route
Router.post("/login", loginUser);

// signup route
Router.post("/signup", signupUser);

module.exports = Router;
