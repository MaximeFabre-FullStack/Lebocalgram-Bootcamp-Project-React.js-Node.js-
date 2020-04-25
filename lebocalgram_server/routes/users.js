/**
 * route for users infos
 */
const express = require("express");
const router = express.Router();
const signIn = require("../controllers/signIn");
const createProfile = require("../controllers/createProfile");
const getUserInfo = require("../controllers/getUserInfo");
const modifyProfile = require("../controllers/modifyProfile");

/* GET users listing. */
router.post("/sign-in", signIn);

/* POST create profile user */
router.post("/create-profile", createProfile);

router.get("/profile", getUserInfo);

router.put("/profile", modifyProfile);

module.exports = router;
