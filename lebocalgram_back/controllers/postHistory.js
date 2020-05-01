/**
 * controller to get post history
 */
const Post = require("../models/post");

const allPosts = (req, res, next) => {
  Post.find({}, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = allPosts;
