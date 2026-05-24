const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

const generateOTP =
require("../utils/generateOTP");

const sendEmail =
require("../utils/sendEmail");

/* =========================================
   ADMIN LOGIN
========================================= */

const adminLogin = async (req, res) => {

  try {

    const {

      email,
      password

    } = req.body;

    /* FIND ADMIN */

    const admin =
      await Admin.findOne({ email });

    if (!admin) {

      return res.status(400).json({

        message:
          "Invalid email or password"

      });

    }

    /* CHECK PASSWORD */

    const isMatch =
      await bcrypt.compare(

        password,

        admin.password

      );

    if (!isMatch) {

      return res.status(400).json({

        message:
          "Invalid email or password"

      });

    }

    /* GENERATE OTP */

    const otp = generateOTP();

    /* SAVE OTP */

    admin.otp = otp;

    admin.otpExpire =

      Date.now() +

      5 * 60 * 1000;

    await admin.save();

    /* SEND EMAIL */

    await sendEmail(

      admin.email,

      "Admin Login Verification OTP",

      `

        <h2>
          Admin Login Verification
        </h2>

        <p>
          Your OTP Code:
        </p>

        <h1>
          ${otp}
        </h1>

        <p>
          This OTP expires in 5 minutes.
        </p>

      `

    );

    /* RESPONSE */

    res.status(200).json({

      success: true,

      message:
        "OTP sent to email",

      adminId: admin._id

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error"

    });

  }

};


const verifyAdminOTP = async (

  req,
  res

) => {

  try {

    const {

      adminId,
      otp

    } = req.body;

    /* FIND ADMIN */

    const admin =
      await Admin.findById(adminId);

    if (!admin) {

      return res.status(404).json({

        message:
          "Admin not found"

      });

    }

    /* CHECK OTP */

    if (admin.otp !== otp) {

      return res.status(400).json({

        message:
          "Invalid OTP"

      });

    }

    /* CHECK OTP EXPIRATION */

    if (

      admin.otpExpire < Date.now()

    ) {

      return res.status(400).json({

        message:
          "OTP expired"

      });

    }

    /* GENERATE JWT TOKEN */

    const token = jwt.sign(

      {

        id: admin._id,

        role: "admin"

      },

      process.env.JWT_SECRET,

      {

        expiresIn: "7d"

      }

    );

    /* CLEAR OTP */

    admin.otp = "";

    admin.otpExpire = null;

    await admin.save();

    /* RESPONSE */

    res.status(200).json({

      success: true,

      message:
        "Login successful",

      token,

      admin: {

        id: admin._id,

        name: admin.name,

        email: admin.email

      }

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Server Error"

    });

  }

};

module.exports = {

  adminLogin,

  verifyAdminOTP

};