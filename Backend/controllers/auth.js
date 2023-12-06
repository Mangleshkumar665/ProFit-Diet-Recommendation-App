const { StatusCodes } = require("http-status-codes");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const { BadRequestError, UnauthenticatedError } = require("../errors");
// hashing the password we use bcryptjs library
// const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  

  const user = await User.create({ ...req.body });

  console.log("ahcdusbvduisb")


  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const userinDb = await User.findOne({ email });

  if (!userinDb) {
    throw new UnauthenticatedError("invalid user");
  }

  // compare password

  const isPasswordCorrect = await userinDb.comparePassword(password);

  if (!isPasswordCorrect) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg:'invalid user '
    })
  }

  const token = userinDb.createJWT();

  res.status(StatusCodes.OK).json({ user: { name: userinDb.name }, token });
};

module.exports = {
  register,
  login,
};
