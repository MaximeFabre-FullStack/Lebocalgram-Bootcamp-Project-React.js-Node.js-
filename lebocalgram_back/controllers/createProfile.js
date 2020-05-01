/**
 * controller profile creation
 */
const User = require("../models/user");
const bcrypt = require("bcrypt");

const createProfile = (req, res, next) => {
  bcrypt
    .hash(req.body.subscribePassword, 10)
    .then((hash) => {
      const newUser = new User({
        email: req.body.subscribeEmail,
        pseudo: req.body.subscribePseudo,
        password: hash,
        avatar: "public/images/avatar.png",
      });

      newUser
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports = createProfile;
