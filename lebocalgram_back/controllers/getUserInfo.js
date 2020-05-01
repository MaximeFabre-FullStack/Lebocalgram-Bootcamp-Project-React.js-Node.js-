/**
 *  getUserInfo.js - controller to get avatar and post history of user
 */

/* Imports */
const User = require("../models/user");

/* Controller */
const getUserInfo = (req,res,next)=>{
    User.find({_id: req.user._id}, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
    })
  };

/* Export */
module.exports = getUserInfo;
