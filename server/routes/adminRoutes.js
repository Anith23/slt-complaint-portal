const express = require("express");

const router = express.Router();

const {

  adminLogin,

  verifyAdminOTP

} = require(

  "../controllers/adminController"

);

/* ADMIN LOGIN */

router.post(

  "/login",

  adminLogin

);

/* VERIFY OTP */

router.post(

  "/verify-otp",

  verifyAdminOTP

);

module.exports = router;