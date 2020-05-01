/**
 * User.js - User database model
 */

/* Imports */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  pseudo: String,
  password: String,
  avatar: String,
});

/* avec unique verifie que 2 utilisateurs n'ont pas la même adresse mail */
userSchema.plugin(uniqueValidator);

/* Model */
const User = mongoose.model("User", userSchema);

module.exports = User;
