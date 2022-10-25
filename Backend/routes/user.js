const express = require("express");
const router = express.Router();

//======== user controller function=========>
const { loginUser, signupUser } = require("../controllers/userController");

//======= Login ==============>

router.post("/login", loginUser);

//======= sign up /Register ==============>

router.post("/signup", signupUser);

module.exports = router;
