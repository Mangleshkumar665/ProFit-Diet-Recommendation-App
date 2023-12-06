const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name "],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email "],
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "please provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide Password "],
    minLength: 6,
  },
});

// method 2 of hashing the current password using mongoose middleware - it does some fxnalities on the schema before saving the data which is created

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//  method 2 of creating a jwt signed token using mongoose instance methods fxnality

userSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      name: this.name,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword , this.password);
  return isMatch 
};


module.exports = mongoose.model("User", userSchema);
