const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log("StartAPP");

    const { username, email, password, confirmPassword } = req.body;
    const existingUser = await User.findOne({ email });
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: user.email, id: user._id }, "mysecret", {
      expiresIn: "1h",
    });

    res.status(201).json({ result: user, token });
  } catch (error) {
    console.log("Something went wrong error");
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.redirect("/register");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    existingUser.isLoggedIn = true;
    await existingUser.save();
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "mysecret",
      { expiresIn: "1h" }
    );
    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const tokenRequired = (req, res, next) => {
  const { token } = req.body;

  console.log("token", token);
  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  try {
    console.log("try");
    const decodedData = jwt.verify(token, "mysecret");
    console.log("after dekot");
    req.user = decodedData;
    console.log("after req user");

    return res.status(200).json({ result: decodedData, token });
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const token = jwt.sign({ email: user.email, id: user._id }, "mysecret", {
      expiresIn: "1h",
    });

    // const reset_url_text = "http://localhost:8080/admin/reset_password?token=" + token
    // send email this text reset_url_text

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getLoggedInUsers = async (req, res) => {
  try {
    const loggedInUsers = await User.find({ isLoggedIn: true });
    res.status(200).json(loggedInUsers);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  register,
  login,
  forgotPassword,
  getLoggedInUsers,
  tokenRequired,
};
