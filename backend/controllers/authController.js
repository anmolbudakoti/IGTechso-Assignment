const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    if (newUser) {
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: `Unable to register user`,
      error: err,
    });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "No account is registered with these credentials",
      });
    }
    const checkPassword = await bcrypt.compare(password, existingUser.password);
    if (!checkPassword) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const accessToken = jwt.sign(
      { id: existingUser._id, email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15m" }
    );

    res.cookie("token", accessToken);
    res.json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (err) {
    {
      return res.status(400).json({
        success: false,
        message: `Unable to register user`,
        error: err,
      });
    }
  }
}

module.exports = { registerUser, loginUser };
