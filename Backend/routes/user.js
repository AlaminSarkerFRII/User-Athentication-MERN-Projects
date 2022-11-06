const express = require("express");
const router = express.Router();

//======== user controller function=========>
const { loginUser, signupUser, getAllUsers, getSingleUser } = require("../controllers/userController");

//======= Login ==============>

router.post("/login", loginUser);

//======= sign up /Register ==============>

router.post("/register", signupUser);
router.get("/register", getAllUsers);
router.get("/register/:id", getSingleUser);

module.exports = router;
