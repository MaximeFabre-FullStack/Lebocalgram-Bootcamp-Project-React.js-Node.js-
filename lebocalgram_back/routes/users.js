/**
 * route for users infos
 */
const express = require("express");
const router = express.Router();
const signIn = require("../controllers/signIn");
const createProfile = require("../controllers/createProfile");
const getUserInfo = require("../controllers/getUserInfo");
const modifyProfile = require("../controllers/modifyProfile");
const multer_config = require("../middleware/multer_config");
const avatar = require("../controllers/avatar");
const authentification = require("../middleware/auth");

/* GET users listing. */
router.post("/sign-in", signIn);

/* POST create profile user */
router.post("/create-profile", createProfile);

/* POST upload profile picture and modify in db */
router.post("/avatar", authentification, multer_config, avatar.uploadAvatar);

/* TO DO : get avatar pic + post history on profil page */
router.get("/profile",authentification, getUserInfo);

router.put("/profile", modifyProfile);

module.exports = router;
