/**
 * controller profile creation
 */
const User = require("../models/user");

const createProfile = (req, res, next) => {
  const newUser = new User({
    email: req.body.subscribeEmail,
    pseudo: req.body.subscribePseudo,
    password: req.body.subscribePassword,
  });

  newUser.save((err) => {
    if (err) {
      res.status(500).res.json((success = false));
    } else {
      res.json((success = true));
    }
  });
};

module.exports = createProfile;
