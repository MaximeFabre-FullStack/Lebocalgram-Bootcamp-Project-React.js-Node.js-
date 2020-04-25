/**
 * controller sign in infos
 */

const signIn = (req, res, next) => {
  const userEmail = req.body.loginEmail;
  const userPassword = req.body.loginPassword;
  let emailExist = "";
  if (db.users.find({ email: userEmail })) {
    emailExist = true;
    /*if (db.users.find({ email: userEmail, password: 1 }) == userPassword) {
    }*/
  } else {
    emailExist = false;
    res.send(emailExist);
  }
};

module.exports = signIn;
