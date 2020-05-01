/**
 * controller to create a new post
 */
const Post = require("../models/post");

const newPost = (req, res, next) => {
  const newPost = new Post({
    auteur: req.body.newPostAuthor,
    video: req.body.video,
    image: req.file ? req.file.path : null,
    message: req.body.newPostContent,
  });

  newPost.save((err) => {
    if (err) {
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
};

module.exports = newPost;
