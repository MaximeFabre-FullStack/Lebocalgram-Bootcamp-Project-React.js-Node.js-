/**
 * route for posts
 */
const express = require("express");
const router = express.Router();

const newPost = require("../controllers/newPost");
const postHistory = require("../controllers/postHistory");
const deletePost = require("../controllers/deletePost");
const multer_config = require("../middleware/multer_config");
const authentification = require("../middleware/auth");

router.post("/new-post", authentification, multer_config, newPost); // route tested "on prod"

router.get("/post-history", postHistory); // route tested on POSTMAN

router.delete("/delete-post", deletePost);

module.exports = router;
