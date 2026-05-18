const Admin = require("../models/Admin");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// ============================
// Register Admin
// ============================
exports.registerAdmin = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // Check existing admin
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists"
      });
    }

    // Hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create admin
    const admin = new Admin({
      name,
      email,
      password: hashedPassword
    });

    await admin.save();

    res.status(201).json({
      success: true,
      message: "Admin registered successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

};


// ============================
// Login Admin
// ============================
exports.loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // Compare password
    const isMatch =
      await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: admin._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

};