const User = require("../model/userModel")


//===== loginUser ========>

const loginUser = async (req,res) =>{
    res.json({mgs : "login user"})
}

//===== signUpUser ========>

const signupUser = async (req,res) =>{
    res.json({mgs : "signupUser user"})
}



module.exports = {loginUser , signupUser}