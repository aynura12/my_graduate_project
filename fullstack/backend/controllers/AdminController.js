const Admin = require("../models/AdminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { adminname, email, password, confirmPassword } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    console.log(adminname);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = await Admin.create({
      adminname,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: admin.email, id: admin._id },
      "admin-mysecret",
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ result: admin, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res.redirect("/register");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    existingAdmin.isLoggedIn = true;
    await existingAdmin.save();
    const token = jwt.sign(
      { email: existingAdmin.email, id: existingAdmin._id },
      "admin-mysecret",
      { expiresIn: "2h" }
    );
    return res.status(200).json({ result: existingAdmin, token });
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
    const decodedData = jwt.verify(token, "admin-mysecret");
    console.log("after dekot");
    req.admin = decodedData;
    console.log("after req admin");

    return res.status(200).json({ result: decodedData, token });
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin does not exist" });
    }
    const token = jwt.sign(
      { email: admin.email, id: admin._id },
      "admin-mysecret",
      {
        expiresIn: "2h",
      }
    );

    // const reset_url_text = "http://localhost:8080/admin/reset_password?token=" + token
    // send email this text reset_url_text

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getLoggedInAdmins = async (req, res) => {
  try {
    const loggedInAdmins = await Admin.find({ isLoggedIn: true });
    res.status(200).json(loggedInAdmins);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  register,
  login,
  forgotPassword,
  getLoggedInAdmins,
  tokenRequired,
};
