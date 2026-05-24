const mongoose =
require("mongoose");

const AdminSchema =
new mongoose.Schema({

  name: String,

  email: String,

  password: String,

  otp: {

    type: String,

    default: ""

  },

  otpExpire: {

    type: Date

  }

});

module.exports =
mongoose.model(

  "Admin",

  AdminSchema

);