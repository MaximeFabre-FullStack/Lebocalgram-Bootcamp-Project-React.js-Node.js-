/**
 * route for posts
 */
const express = require("express");
const router = express.Router();
const newPost = require("../controllers/createPost");
const postHistory = require("../controllers/postHistory");
const deletePost = require("../controllers/deletePost");

router.post("/new-post", newPost);

router.get("/post-history", postHistory);

router.delete("/delete-post", deletePost);

module.exports = router;
