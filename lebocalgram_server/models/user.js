/**
 * User.js - User database model
 */

/* Imports */
const mongoose = require("mongoose");

/* Model */
const User = mongoose.model("User", {
  email: String,
  pseudo: String,
  password: String,
});

module.exports = User;
