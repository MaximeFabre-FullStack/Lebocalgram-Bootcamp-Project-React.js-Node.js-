/**
 * controller sign in infos
 */

/* Import */
const User = require("../models/user");

/* package création token d'identification */
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

/* Controller */
const signIn = (req, res, next) => {
  /* recherche email */
  User.findOne({ email: req.body.loginEmail })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }

      /* quand utilisateur trouvé comparaison password */
      bcrypt
        .compare(req.body.loginPassword, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ error: "Mot de passe incorrect !", exist: false });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

/* Export */
module.exports = signIn;
