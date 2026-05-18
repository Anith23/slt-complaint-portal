const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

/* =========================================
   REGISTER USER
========================================= */

const registerUser = async (req, res) => {

  try {

    const {

      fullName,
      nic,
      mobile,
      email,
      password

    } = req.body;

    /* CHECK EXISTING USER */

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {

      return res.status(400).json({

        message: "Email already exists"

      });

    }

    /* HASH PASSWORD */

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );

    /* CREATE USER */

    const newUser = new User({

      fullName,
      nic,
      mobile,
      email,

      password: hashedPassword

    });

    /* SAVE USER */

    await newUser.save();

    res.status(201).json({

      success: true,

      message: "User registered successfully"

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error"

    });

  }

};

/* =========================================
   LOGIN USER
========================================= */

const loginUser = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    /* FIND USER */

    const user = await User.findOne({
      email
    });

    if (!user) {

      return res.status(400).json({

        message: "Invalid email or password"

      });

    }

    /* CHECK PASSWORD */

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({

        message: "Invalid email or password"

      });

    }

    /* GENERATE TOKEN */

    const token = jwt.sign(

      {

        id: user._id,
        role: user.role

      },

      process.env.JWT_SECRET,

      {

        expiresIn: "7d"

      }

    );

    /* RESPONSE */

    res.status(200).json({

      success: true,

      message: "Login successful",

      token,

      user: {

        id: user._id,

        fullName: user.fullName,

        email: user.email,

        role: user.role

      }

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error"

    });

  }

};

/* =========================================
   EXPORTS
========================================= */

module.exports = {

  registerUser,

  loginUser

};