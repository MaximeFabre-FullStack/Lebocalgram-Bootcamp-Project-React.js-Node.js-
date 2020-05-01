/**
 * controller upload avatar
 */

const User = require("../models/user");

const avatar = {
  uploadAvatar: (req, res, next) => {
    User.updateOne({_id: req.user._id},{avatar: req.file.path})
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
  },
};

module.exports = avatar;
