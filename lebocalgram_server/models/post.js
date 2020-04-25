/**
 * postRequest.js - post request model
 */
/* Imports*/
const mongoose = require("mongoose");

/* Model */
const Post = mongoose.model("PostRequest", {
  auteur: String,
  url: String,
  message: String,
});

module.exports = Post;
