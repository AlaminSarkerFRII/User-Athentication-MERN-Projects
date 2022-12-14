const mongoose = require("mongoose");
const users = require("../model/userModel");

//===== loginUser ========>

const loginUser = async (req, res) => {
  res.json({ mgs: "login user" });
};

//===== signUpUser Start ========>

//================== Get All Users ==================>

const getAllUsers = async (req, res) => {
  const user = await users.find({}).sort({ _id: -1 });
  return res.status(200).json(user);
};

// ======= Get A single Users ===============>

const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User Not Valid" });
  }

  const user = await users.findById(id);
  if (!user) {
    return res.status(404).json({ error: "User Not Valid" });
  }
  return res.status(200).json(user);
};

//==============create a User / POST a user ==============>

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    const user = await users.create({ name, email, password });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: "user not created" });
  }
};

// ======== Delete A User ==================>

const deletedUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not Find" });
  }

  const user = await users.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "User not Find" });
  }

  return res.status(200).json(user);
};

//===============update a User ===============>

const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not Find" });
  }

  const updUser = await users.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updUser) {
    return res.status(404).json({ error: "User not Find" });
  }

  return res.status(200).json(updUser);
};

//===== signUpUser End ========>

module.exports = {
  loginUser,
  signupUser,
  getAllUsers,
  getSingleUser,
  deletedUser,
  updateUser
};
