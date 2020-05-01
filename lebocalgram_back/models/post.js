/**
 * postRequest.js - post request model
 */
/* Imports*/
const mongoose = require("mongoose");

/* Model */
const Post = mongoose.model("PostRequest", {
  auteur: String,
  video: String,
  message: String,
  image: String,
  date: String,
});

module.exports = Post;
